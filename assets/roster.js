/* 회원 명단 (2026-11-17 선생님 "앱에서도 회원 추가") — 선생님 페이지·PT 안내서·회원 노트가 같이 씀.
   회원은 두 종류:
   1) Claude가 만든 회원 = m/<주소>/data.js 파일 + coach 폴더 members.js 에 주소
   2) 선생님이 앱(선생님 페이지 "+ 새 회원")에서 만든 회원 = 출석 창고 "저장소" 탭에만 있음
        pub:m:<coach 폴더>:roster  = [{slug, name, sex, at}]   (명단)
        pub:m:<회원 주소>:profile  = {name, sex, goal, start, at} (회원 기본 정보)
      → 주소 /m/<주소>/ 에 파일이 없으면 GitHub Pages가 404.html을 보여 주고, 404.html이 창고에서 정보를 받아 노트를 그림.
   같은 주소로 Claude가 data.js를 만들면 파일 쪽이 이김(주소는 그대로). */
(function () {
  "use strict";
  var SITE = window.SITE || {};
  var API = SITE.att_api || "";
  var COACH = SITE.coach || "";

  function getJSON(url) { return fetch(url, { cache: "no-store" }).then(function (r) { return r.json(); }); }

  /* 창고에 있는 앱 회원 명단 */
  function appRoster() {
    if (!API || !COACH) return Promise.resolve([]);
    return getJSON(API + "?m=" + encodeURIComponent(COACH)).then(function (j) {
      var r = j && j.kv && j.kv["pub:m:" + COACH + ":roster"];
      return Array.isArray(r) ? r.filter(function (x) { return x && /^[a-z0-9-]{3,40}$/.test(x.slug); }) : [];
    }).catch(function () { return []; });
  }

  /* 전체 회원 주소 = members.js(파일) + 앱 회원(창고), 겹치면 한 번만 */
  function slugs(fileList) {
    var files = (fileList || window.COACH_MEMBERS || []).slice();
    return appRoster().then(function (r) {
      r.forEach(function (x) { if (files.indexOf(x.slug) < 0) files.push(x.slug); });
      return files;
    });
  }

  /* 앱 회원 기본 정보 → PT 노트가 읽는 MEMBER 모양 */
  function fromProfile(p) {
    var st = /^\d{4}-\d{2}-\d{2}$/.test(p.start || "") ? p.start : "";
    var now = new Date(), d = now.getFullYear() + ". " + (now.getMonth() + 1) + ". " + now.getDate();
    var at = String(p.at || "").match(/(\d{4})-(\d{2})-(\d{2})/);
    return {
      name: String(p.name || "회원"),
      sex: p.sex === "F" ? "F" : "M",
      since: st ? st.slice(0, 4) + ". " + (+st.slice(5, 7)) : "",
      goal: String(p.goal || ""),
      journey: st ? { start: st } : undefined,
      notices: [{ date: at ? at[1] + ". " + (+at[2]) + ". " + (+at[3]) : d, title: "PT 노트가 열렸어요", body: "앞으로 루틴·자세 복습지·식단·공지를 여기서 확인하세요." }],
      next_class: null, forms: [], routine: null, diet: null,
      _app: true
    };
  }

  /* 회원 한 명 불러오기: 파일(data.js) 먼저, 없으면 창고 정보 */
  function load(slug) {
    return fetch("/m/" + slug + "/data.js", { cache: "no-store" }).then(function (r) {
      if (!r.ok) throw new Error("nofile");
      return r.text();
    }).then(function (t) {
      var w = {}; new Function("window", t)(w);
      if (!w.MEMBER) throw new Error("nofile");
      return w.MEMBER;
    }).catch(function () {
      if (!API) return null;
      return getJSON(API + "?m=" + encodeURIComponent(slug)).then(function (j) {
        var p = j && j.kv && j.kv["pub:m:" + slug + ":profile"];
        return p ? fromProfile(p) : null;
      }).catch(function () { return null; });
    });
  }

  /* 한글 이름 → 로마자 (주소용, 간단 규칙) */
  var CHO = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "k", "t", "p", "h"];
  var JUNG = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
  var JONG = ["", "k", "k", "k", "n", "n", "n", "t", "l", "k", "m", "l", "l", "l", "p", "l", "m", "p", "p", "t", "t", "ng", "t", "t", "k", "t", "p", "t"];
  function roman(name) {
    var out = "";
    String(name || "").split("").forEach(function (ch) {
      var c = ch.charCodeAt(0) - 0xAC00;
      if (c >= 0 && c < 11172) out += CHO[Math.floor(c / 588)] + JUNG[Math.floor((c % 588) / 28)] + JONG[c % 28];
      else if (/[a-z0-9]/i.test(ch)) out += ch.toLowerCase();
    });
    out = out.replace(/[^a-z0-9]/g, "").slice(0, 16);
    return out || "member";
  }
  function newSlug(name) {
    var s = "", a = "abcdefghijkmnpqrstuvwxyz23456789";
    var b = new Uint8Array(6); (window.crypto || {}).getRandomValues ? crypto.getRandomValues(b) : b.forEach(function (_, i) { b[i] = Math.random() * 256; });
    for (var i = 0; i < 6; i++) s += a[b[i] % a.length];
    return roman(name) + "-" + s;
  }

  /* 앱에서 새 회원 만들기 (선생님 열쇠 필요) */
  function create(info, key) {
    var name = String(info.name || "").trim().slice(0, 30);
    if (!name) return Promise.reject(new Error("name"));
    var slug = newSlug(name.replace(/\s*·\s*/g, "-"));
    var at = new Date().toISOString().slice(0, 10);
    var prof = { name: name, sex: info.sex === "F" ? "F" : "M", goal: String(info.goal || "").trim().slice(0, 80), start: info.start || "", at: at };
    return appRoster().then(function (r) {
      r = r.filter(function (x) { return x.slug !== slug; });
      r.push({ slug: slug, name: name, sex: prof.sex, at: at });
      var items = {};
      items["pub:m:" + slug + ":profile"] = prof;
      items["pub:m:" + COACH + ":roster"] = r;
      return fetch(API, { method: "POST", body: JSON.stringify({ a: "kv_set", m: COACH, key: key, items: items }) }).then(function (x) { return x.json(); });
    }).then(function (j) {
      if (!j || !j.ok) { var e = new Error((j && j.error) || "save"); throw e; }
      return { slug: slug, url: (SITE.site || location.origin) + "/m/" + slug + "/" };
    });
  }

  /* 앱 회원 명단에서 빼기 (노트·출석 기록은 창고에 남음) */
  function remove(slug, key) {
    return appRoster().then(function (r) {
      var items = {};
      items["pub:m:" + COACH + ":roster"] = r.filter(function (x) { return x.slug !== slug; });
      items["pub:m:" + slug + ":profile"] = null;
      return fetch(API, { method: "POST", body: JSON.stringify({ a: "kv_set", m: COACH, key: key, items: items }) }).then(function (x) { return x.json(); });
    }).then(function (j) { if (!j || !j.ok) throw new Error((j && j.error) || "save"); return true; });
  }

  window.PTR = { slugs: slugs, load: load, appRoster: appRoster, fromProfile: fromProfile, create: create, remove: remove, roman: roman };
})();
