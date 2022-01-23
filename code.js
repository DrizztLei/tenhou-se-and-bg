// Copyrights C-EGG inc.
(function () {
    var aa = "門前清自摸和;立直;一發;槍槓;嶺上開花;海底摸月;河底撈魚;平和;斷么九;一盃口;自風 東;自風 南;自風 西;自風 北;場風 東;場風 南;場風 西;場風 北;役牌 白;役牌 發;役牌 中;兩立直;七對子;混全帶么九;一氣通貫;三色同順;三色同刻;三槓子;對對和;三暗刻;小三元;混老頭;二盃口;純全帶么九;混一色;清一色;人和;天和;地和;大三元;四暗刻;四暗刻單騎;字一色;綠一色;清老頭;九蓮寶燈;純正九蓮寶燈;國士無雙;國士無雙13面;大四喜;小四喜;四槓子;ドラ;裏ドラ;赤ドラ;親;門前;榮和;本場;明槓;暗槓;五;ガリ;セット;カラス;全ガリ;バンバン".split(";"),
    ba = "新人 ９級 ８級 ７級 ６級 ５級 ４級 ３級 ２級 １級 初段 二段 三段 四段 五段 六段 七段 八段 九段 十段 天鳳".split(" "),
    ca = " 滿貫 跳滿 倍滿 三倍滿 役滿".split(" "),
    ea = {
        kaze4: "四風連打",
        yao9: "九種九牌",
        ron3: "三家和了",
        reach4: "四家立直",
        kan4: "四槓散了",
        nm: "流局滿貫"
    },
    ha = [{
            800: "300-500",
            1100: "400-700",
            1200: "400-800",
            1500: "500-1000",
            1800: "600-1200",
            2E3: "700-1300",
            2300: "800-1500",
            2400: "800-1600",
            2700: "900-1800",
            3E3: "1000-2000",
            3500: "1200-2300",
            3900: "1300-2600",
            4400: "1500-2900",
            4800: "1600-3200",
            5400: "1800-3600",
            5900: "2000-3900",
            6E3: "2000-4000",
            9E3: "3000-6000",
            12E3: "4000-8000",
            18E3: "6000-12000",
            24E3: "8000-16000",
            48E3: "16000-32000",
            72E3: "24000-48000"
        }, {
            1E3: 500,
            1400: 700,
            1600: 800,
            2E3: 1E3,
            2400: 1200,
            2600: 1300,
            3E3: 1500,
            3200: 1600,
            3600: 1800,
            4E3: 2E3,
            4600: 2300,
            5200: 2600,
            5800: 2900,
            6400: 3200,
            7200: 3600,
            7800: 3900,
            8E3: 4E3,
            12E3: 6E3,
            16E3: 8E3,
            24E3: 12E3,
            32E3: 16E3,
            64E3: 32E3,
            96E3: 48E3
        }, {
            1100: "300-500",
            1500: "400-700",
            1600: "400-800",
            2E3: "500-1000",
            2400: "600-1200",
            2700: "700-1300",
            3100: "800-1500",
            3200: "800-1600",
            3600: "900-1800",
            4E3: "1000-2000",
            4700: "1200-2300",
            5200: "1300-2600",
            5900: "1500-2900",
            6400: "1600-3200",
            7200: "1800-3600",
            7900: "2000-3900",
            8E3: "2000-4000",
            12E3: "3000-6000",
            16E3: "4000-8000",
            24E3: "6000-12000",
            32E3: "8000-16000",
            64E3: "16000-32000",
            96E3: "24000-48000"
        }, {
            1500: 500,
            2100: 700,
            2400: 800,
            3E3: 1E3,
            3600: 1200,
            3900: 1300,
            4500: 1500,
            4800: 1600,
            5400: 1800,
            6E3: 2E3,
            6900: 2300,
            7800: 2600,
            8700: 2900,
            9600: 3200,
            10800: 3600,
            11700: 3900,
            12E3: 4E3,
            18E3: 6E3,
            24E3: 8E3,
            36E3: 12E3,
            48E3: 16E3,
            96E3: 32E3,
            144E3: 48E3
        }
    ];
    function ia(a, e) {
        return 0 != (0 == a ? 0 != (e & 1536) ? ~e & 8 : e & 64 : e & 64)
    }
    function ja(a) {
        return (a & 32) >> 4 | (a & 128) >> 7
    }
    function ka(a) {
        return 0 != (a & 2048) ? "東天紅" : (a & 16 ? "三" : "四") + "般上特鳳若銀琥孔".substr(ja(a) + 4 * (0 != (a & 1536)), 1) + (a & 8 ? "南" : "東") + (0 != (a & 1536) ? (a & 8 ? "" : "速") + (~a & 512 ? "祝０" : a & 1024 ? "祝５" : "祝２") : (a & 4 ? "" : "喰") + (a & 2 ? "" : "赤") + (a & 64 ? "速" : "") + (a & 256 ? "暗" : "") + (a & 512 ? "祝" : ""))
    }
    var la = [0, 0, 0, 0, 0, 0, 0, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, 0],
    ma = [20, 20, 20, 20, 40, 60, 80, 100, 100, 100, 400, 800, 1200, 1600, 2E3, 2400, 2800, 3200, 3600, 4E3, 0],
    na = [1, 3, 0, 7, 9, 11, 0, 15, 65, 0, 0, 0, 73, 0, 0, 0, 129, 131, 0, 135, 137, 139, 0, 143, 193, 0, 0, 0, 201, 0, 0, 0, 33, 35, 0, 39, 41, 43, 0, 47, 97, 0, 0, 0, 105, 0, 0, 0, 161, 163, 0, 167, 169, 171, 0, 175, 225, 0, 0, 0, 233, 0, 0, 0, 17, 25, 145, 153, 49, 57, 177, 185, 81, 89, 209, 217, 113, 121, 241, 249, 1025, 1033, 513, 521, 1537, 1545, 1553, 1561, 1153, 1161, 641, 649, 1665, 1673, 1681, 1689, 1057, 1065, 545, 553, 1569, 1577,
        1585, 1593, 1185, 1193, 673, 681, 1697, 1705, 1713, 1721, 2065];
    var qa = {
        10: function () {
            return pa ? "wss://b-wc.mjv.jp" : "wss://b-ww.mjv.jp"
        },
        11: function () {
            return "https://p.mjv.jp"
        },
        13: function () {
            return "https://mjv.jp/0/wg/"
        },
        20: function () {
            return "https://tenhou.net/3/err.cgi"
        },
        21: function () {
            return "https://tenhou.net/3/tr/"
        },
        22: function () {
            return "https://tenhou.net/0/log/find.cgi"
        },
        30: function () {
            return "https://b.mjv.jp/regid?q=1&uname="
        },
        31: function () {
            return "https://b.mjv.jp/regid?uname="
        },
        32: function () {
            return "https://b.mjv.jp/csreg"
        }
    };
    function ta(a, e, c) {
        a.addEventListener(e, c, !1)
    }
    function ua(a, e) {
        for (var c in e)
            a.addEventListener(c, e[c], !1);
        return a
    }
    function va(a, e, c) {
        a.addEventListener(e, c, {
            once: !0,
            passive: !0,
            capture: !0
        })
    }
    function za(a, e) {
        if (a && e)
            for (var c in e)
                a[c] = e[c];
        return a
    }
    function Ba(a) {
        a.sort(function (a, c) {
            return a - c
        })
    }
    function Ca(a, e) {
        a.sort(function (a, b) {
            return (e[a] << 8 | a) - (e[b] << 8 | b)
        })
    }
    function p(a, e) {
        if (void 0 === a || "" === a)
            return [];
        e = e || 1;
        a.split && (a = a.split(","));
        for (var c = 0; c < a.length; ++c)
            a[c] = 1 != e && "" == a[c] ? void 0 : e * ~~a[c];
        return a
    }
    function Da(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function Ea(a) {
        a = a.split("&");
        var e = {},
        c;
        for (c in a)
            if (a[c].length) {
                var b = a[c].split("=");
                e[b.shift()] = decodeURIComponent(b.join("="))
            }
        return e
    }
    function Sa(a) {
        for (var e = a.length - 1; 0 < e; --e) {
            var c = Math.floor(Math.random() * (e + 1)),
            b = a[e];
            a[e] = a[c];
            a[c] = b
        }
        return a
    }
    function Ta(a) {
        try {
            return decodeURIComponent(a)
        } catch (e) {
            return a
        }
    }
    function Va(a, e, c) {
        var b = new XMLHttpRequest;
        b.onload = function () {
            200 == this.status ? e(this.response) : c && c(this)
        };
        b.onerror = function () {
            c && c(this)
        };
        b.open("GET", a, !0);
        b.send()
    }
    function Xa(a, e) {
        var c;
        return function () {
            clearTimeout(c);
            c = setTimeout(function () {
                c = null;
                a()
            }, e)
        }
    }
    function Ya(a, e) {
        return ("000" + e).slice(-a)
    }
    function Za(a) {
        return (0 < a ? "+" : "") + a
    }
    var $a = 1,
    q = window,
    ab = document,
    cb = ab.body,
    fb = 0,
    gb = 0,
    hb = 0,
    ib = navigator.userAgent;
    ib.match(/iP(hone|od|ad)/) && ib.match(/OS (\d+)_(\d+)/) && (fb = RegExp.$1 + "." + RegExp.$2);
    ib.match(/Android (\d\.\d)/) && (gb = parseFloat(RegExp.$1));
    var hb = 4.4 > gb && 0 < ib.indexOf(" Chrome/") && 0 < ib.indexOf(" Version/"),
    jb = "ontouchstart" in ab.documentElement && !q.navigator.msPointerEnabled,
    pa = !!q.cordova,
    kb = pa || "standalone" in navigator && navigator.standalone,
    mb = !1,
    r = q.devicePixelRatio || 1,
    t = {};
    za(t, Ea(location.search.substr(1)));
    za(t, Ea(location.hash.substr(1)));
    t.TW = t.tw = ~~t.tw % 4;
    t.kb = !(!t.wg && !t.log);
    t.jb = !1;
    t.Mc = function (a) {
        function e(c, b) {
            var f = a.match(c);
            return f ? f[1] : b
        }
        t.log = e(/\?log=([^&]*)/, "");
        t.TW = t.tw = ~~e(/&tw=(\d)/, 0);
        t.ts = ~~e(/&ts=(\d+)/, 0);
        t.wg = e(/\?wg=([^&]*)/, "");
        (t.log || t.wg) && u.la(11)
    };
    function nb(a, e, c, b, f) {
        a = ab.createElement(a);
        c && (a.className = c);
        za(a, b);
        za(a.style, f);
        return e ? e.insertBefore(a, null) : a
    }
    function ob(a) {
        for (var e = 1; e < arguments.length; ++e) {
            var c = arguments[e];
            if (0 === c)
                Array.prototype.push.apply(arguments, "cfg lang regid clearid idcont uname sx mvlb ok".split(" "));
            else if (1 === c)
                Array.prototype.push.apply(arguments, "testplay haifu kansen openurl help hairi purchase".split(" "));
            else if (2 === c)
                Array.prototype.push.apply(arguments, ["iap", "storePurchase", "exit"]);
            else if (3 === c)
                Array.prototype.push.apply(arguments, ["rule", "join", "cancel", "logout"]);
            else
                for (var c = ab.getElementsByName(c), b =
                        0; b < c.length; ++b) {
                    var f = c[b];
                    f && (f.disabled = a)
                }
        }
    }
    function pb(a) {
        if (!a)
            return !1;
        a = a.replace(/\?.*$/, "");
        return a.match(/^https?:\/\/(?:[%\w-]+\.)+[%\w-]+(?:\/[%\w-]+)+\.(?:jpg|png|gif)$/)
    }
    function qb(a) {
        if (!a)
            return !1;
        a = a.replace(/\?.*$/, "");
        return a.match(/^https?:\/\/(?:[%\w-]+\.)+[%\w-]+(?:\/[%\w-]+)+\.(?:json|txt)$/)
    }
    var rb = function () {
        var a = [],
        e = new XMLHttpRequest;
        e.onload = function () {
            a.length && 1 != e.readyState && (e.open("POST", qa[20](), !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send(a.shift()))
        };
        return function () {
            for (var c = arguments[0], b = 1; b < arguments.length; ++b)
                c += " " + arguments[b];
            a.push(c);
            e.onload()
        }
    }
    (),
    sb = "";
    q.onerror = function (a, e, c, b, f) {
        a = a + " " + e + ":" + c + ":" + b + " " + f;
        sb != a && rb(a);
        sb = a
    };
    var tb = document.createElement("style");
    tb.innerHTML = "@font-face{font-family:cwTeX-Q-Kai-T;src: url(https://cdn.tenhou.net/3/res/font/cwTeXQKaiT-Medium_20200430.ttf) format('truetype');}@font-face{font-family:icons2;src: url(https://cdn.tenhou.net/3/res/font/icons_20200502.ttf) format('truetype');}*{-webkit-tap-highlight-color:rgba(0,0,0,0);line-height:1;}:focus{outline:0;}HTML{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}HTML{touch-action:pan-y;}BODY{font-family:sans-serif;overflow-x:hidden;-webkit-text-size-adjust:100%;}HR{border-color:#444;border-width:1px 0 0 0;border-style:solid;margin:0.5em 0;}TEXTAREA{margin:0px;word-break:break-all;}SELECT{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0.6em;}SELECT::-ms-expand{display:none;}BUTTON,SELECT,INPUT,.bth{height:2em;font-size:175%;margin:0;}BUTTON,SELECT,INPUT[type=checkbox]+LABEL,A.bt3{padding:0 0.5em;color:inherit;border:solid 1px #444;}BUTTON,SELECT,INPUT[type=checkbox]+LABEL{background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(167,147,127,0.4) 50%,rgba(31,31,31,0.4) 51%,rgba(0,0,0,0.4) 100%);}A.bt3{display:block;width:100%;height:100%;padding:0 1em;border:solid 1px #444;background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(47,47,47,0.4) 100%);}A.bt3:hover,SELECT:hover{background-color:#030;}SELECT:disabled,BUTTON:disabled{color:#888;background:#444;pointer-events:none;}OPTION{background-color:#FFF;color:#000;}BUTTON *{pointer-events:none;}.notxt{font-size:0px;}.sscl{-webkit-overflow-scrolling:touch;}.rot000{position:absolute;}.rot090{position:absolute;transform:rotate( 90deg);-webkit-transform:rotate( 90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);}.rot180{position:absolute;transform:rotate(180deg);-webkit-transform:rotate(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);}.rot270{position:absolute;transform:rotate(270deg);-webkit-transform:rotate(270deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);}.ts0,sblink{text-shadow:#000 -1px 0px 0px, #000 1px 0px 0px, #000 1px 1px 1px,#000 -1px -1px 1px;}.tsv{text-shadow:#000 -1px -1px 0px, #000 0px 1px 0px, #000 3px 3px 0px;}.nosel{-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;}.tbl{display:table;}.tbc{display:table-cell;}.nobr{word-break:keep-all;white-space:nowrap;}.gray{color:#666;}.bgb40{background-color:rgba(0,0,0,0.4);}.bgb60{background-color:rgba(0,0,0,0.6);}.bgb80{background-color:rgba(0,0,0,0.8);}.bgb{background-color:#000;}.ra0{border-radius:0.6em;}.ra1{border-radius:0.6em 0 0 0.6em;}.ra2{border-radius:0 0.6em 0.6em 0;}.dan18,.dan19,.dan20{font-weight:bold;}.n2r{display:inline-block;width:2em;text-align:right;}._selected_{border-left:0.1em solid #CCC;}SELECT{padding-right:1em;}.select-wrapper{position:relative;display:inline-block;}.select-wrapper:after{content:'';position:absolute;right:0.5em;top:45%;width:0;height:0;border-left:0.3em solid transparent;border-right:0.3em solid transparent;border-top: 0.3em solid #FFF;pointer-events:none;}.select-wrapper>BUTTON:first-child{padding-right:1em;border-radius:0.6em;}.fixed-select{min-width:10em;max-width:90vw;max-height:85vh;overflow-y:auto;}.fixed-select .A{font-size:150%;color:#000;padding:0.5em;text-decoration:none;display:block;}.fixed-select .A{border-bottom:1px solid #DDD;cursor:pointer;}.fixed-select .A:nth-child(1){border-top:1px solid #DDD;}.fixed-select .A:hover{background-color:#CCC}.fixed-select .A DIV.desc{color:#666;font-size:50%;}.fixed-select .A *{pointer-events:none;}.vscl::-webkit-scrollbar{background:#CCC;width:0.5em;}.vscl::-webkit-scrollbar-thumb{background:#AAA;}INPUT[type=checkbox]{display:none;}INPUT[type=checkbox]+LABEL{position:relative;cursor:pointer;display:inline-block;border-radius:0.6em;}INPUT[type=checkbox]+LABEL{padding:0.5em 0.5em 0.5em 1.8em;}INPUT[type=checkbox]+LABEL::before{font-family:icons2;content:'';position:absolute;left:0.5em;top:25%;}INPUT[type=checkbox]:checked+LABEL::before{content:'';}INPUT[type=checkbox]:disabled+LABEL{color:#888;background:#444;pointer-events:none;}.bblink{animation: _bblink 0.5s ease 0s infinite alternate;}@keyframes _bblink{0%{background-color:rgba(255,255,255,0.3);}30%{background-color:rgba(0,0,0,0.3);}100%{background-color:rgba(0,0,0,0.3);}}.cblink{animation: _cblink 1.75s linear 0s infinite alternate;}@keyframes _cblink{0%{color:#FFF;}80%{color:#FFF;}100%{color:#666;}}.sblink{animation: _sblink 0.5s linear 0s infinite alternate;position:absolute;bottom:0;right:0.25em;color:#888;font-size:300%;pointer-events:none;}@keyframes _sblink{0%{color:transparent;}30%{color:#888;}100%{color:#888;}}.fadeinqs{animation:_fadein 0.25s ease 0s 1 normal;}.fadein2s{animation:_fadein 2s ease 0s 1 normal;}@keyframes _fadein{0%{opacity:0;}100%{opacity:1;}}.flip{perspective:100px;opacity:0;transform:rotateX(-90deg);transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flip.show{opacity:1;transform:none;transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flipinqs{animation:_flipin 0.25s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipinhs{animation:_flipin 0.5s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipin1s{animation:_flipin 1s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}@keyframes _flipin{0%{opacity:0;transform:rotateX(-90deg);}100%{opacity:1;transform:none;}}.flipinqs.hide{animation:_flipout 0.25s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}.flipinhs.hide{animation:_flipout 0.5s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}@keyframes _flipout{0%{opacity:1;transform:none;}100%{opacity:0;transform:rotateX(-90deg);}}.arrow-box-left,.arrow-box-right{position:relative;background:#FFF;color:#000;border-radius:0.2em;padding:0.5em;}.arrow-box-left:after{right:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-right-color:#FFF;border-width:0.5em;margin-top:-0.5em;}.arrow-box-right:after {left:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-left-color:#FFF;border-width:0.5em;margin-top:-0.5em;}#pftab TD,#rnktab TD{padding-top:0.35em;}#pftab SMALL,#rnktab SMALL{font-size:60%;}.trtab TD{padding:0.5em 0.25em;}";
    cb.appendChild(tb);
    function v(a) {
        return "<span class=gray>" + a + "</span>"
    }
    function ub(a) {
        return "<span class=nobr>" + a + "</span>"
    }
    nb("SPAN", cb, "", {
        innerHTML: "FontLoader&#xe800;"
    }, {
        position: "absolute",
        fontFamily: "cwTeX-Q-Kai-T,icons2",
        visibility: "hidden"
    });
    setInterval(function () {
        for (var a = ab.getElementsByClassName("sblink"), e = 0; e < a.length; ++e) {
            var c = a[e],
            b = c.previousSibling;
            c.style.visibility = b.scrollTop + b.offsetHeight < b.scrollHeight - .25 * c.offsetHeight ? "" : "hidden"
        }
    }, 1E3);
    var vb = function () {
        function a(b) {
            var a = b & 7,
            d = 0,
            c = 0;
            1 == a || 4 == a ? d = c = 1 : 2 == a && (d = c = 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1, c += 1) : 2 == a && (d += 2, c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1, c += 1) : 2 == a && (d += 2, c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1, c += 1) : 2 == a && (d += 2, c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1, c += 1) : 2 == a && (d += 2, c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1, c += 1) : 2 == a && (d += 2, c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1, c += 1) : 2 == a && (d += 2, c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 != a && 3 != a)
                return !1;
            a = (b >> 3 & 7) - c;
            return 0 == a || 3 == a
        }
        function e(b, c) {
            if (0 == b) {
                if (128 <= (c & 448) && a(c - 128) || 65536 <= (c & 229376) && a(c - 65536) || 33554432 <= (c & 117440512) && a(c - 33554432))
                    return !0
            } else if (1 == b) {
                if (16 <= (c & 56) && a(c - 16) || 8192 <= (c & 28672) && a(c - 8192) || 4194304 <= (c & 14680064) && a(c - 4194304))
                    return !0
            } else if (2 == b && (2 <= (c & 7) && a(c - 2) || 1024 <= (c & 3584) && a(c - 1024) || 524288 <= (c & 1835008) && a(c - 524288)))
                return !0;
            return !1
        }
        function c(b,
            a) {
            return b[a + 0] << 0 | b[a + 1] << 3 | b[a + 2] << 6 | b[a + 3] << 9 | b[a + 4] << 12 | b[a + 5] << 15 | b[a + 6] << 18 | b[a + 7] << 21 | b[a + 8] << 24
        }
        return {
            Db: function (b) {
                var f = 1 << b[27] | 1 << b[28] | 1 << b[29] | 1 << b[30] | 1 << b[31] | 1 << b[32] | 1 << b[33];
                if (16 <= f)
                    return !1;
                if (2 == (f & 3) && 2 == b[0] * b[8] * b[9] * b[17] * b[18] * b[26] * b[27] * b[28] * b[29] * b[30] * b[31] * b[32] * b[33] || !(f & 10) && 7 == (2 == b[0]) + (2 == b[1]) + (2 == b[2]) + (2 == b[3]) + (2 == b[4]) + (2 == b[5]) + (2 == b[6]) + (2 == b[7]) + (2 == b[8]) + (2 == b[9]) + (2 == b[10]) + (2 == b[11]) + (2 == b[12]) + (2 == b[13]) + (2 == b[14]) + (2 == b[15]) + (2 == b[16]) + (2 == b[17]) +
                    (2 == b[18]) + (2 == b[19]) + (2 == b[20]) + (2 == b[21]) + (2 == b[22]) + (2 == b[23]) + (2 == b[24]) + (2 == b[25]) + (2 == b[26]) + (2 == b[27]) + (2 == b[28]) + (2 == b[29]) + (2 == b[30]) + (2 == b[31]) + (2 == b[32]) + (2 == b[33]))
                    return !0;
                if (f & 2)
                    return !1;
                var d = b[0] + b[3] + b[6],
                k = b[1] + b[4] + b[7],
                m = b[9] + b[12] + b[15],
                n = b[10] + b[13] + b[16],
                g = b[18] + b[21] + b[24],
                h = b[19] + b[22] + b[25],
                l = (d + k + (b[2] + b[5] + b[8])) % 3;
                if (1 == l)
                    return !1;
                var z = (m + n + (b[11] + b[14] + b[17])) % 3;
                if (1 == z)
                    return !1;
                var C = (g + h + (b[20] + b[23] + b[26])) % 3;
                if (1 == C || 1 != (2 == l) + (2 == z) + (2 == C) + (2 == b[27]) + (2 == b[28]) +
                    (2 == b[29]) + (2 == b[30]) + (2 == b[31]) + (2 == b[32]) + (2 == b[33]))
                    return !1;
                d = (1 * d + 2 * k) % 3;
                k = c(b, 0);
                m = (1 * m + 2 * n) % 3;
                n = c(b, 9);
                g = (1 * g + 2 * h) % 3;
                b = c(b, 18);
                return f & 4 ? !(l | d | z | m | C | g) && a(k) && a(n) && a(b) : 2 == l ? !(z | m | C | g) && a(n) && a(b) && e(d, k) : 2 == z ? !(C | g | l | d) && a(b) && a(k) && e(m, n) : 2 == C ? !(l | d | z | m) && a(k) && a(n) && e(g, b) : !1
            },
            eb: function (b) {
                var a = [],
                d = 0;
                if (12 <= (0 !== b[0]) + (0 !== b[8]) + (0 !== b[9]) + (0 !== b[17]) + (0 !== b[18]) + (0 !== b[26]) + (0 !== b[27]) + (0 !== b[28]) + (0 !== b[29]) + (0 !== b[30]) + (0 !== b[31]) + (0 !== b[32]) + (0 !== b[33]))
                    for (; 34 > d; ++d)
                        3 >= b[d] &&
                        (++b[d], vb.Db(b) && a.push(d), --b[d]);
                else {
                    for (; 27 > d; ++d)
                        3 >= b[d] && (b[d] || 0 < d % 9 && b[d - 1] || 8 > d % 9 && b[d + 1]) && (++b[d], vb.Db(b) && a.push(d), --b[d]);
                    for (; 34 > d; ++d)
                        3 >= b[d] && b[d] && (++b[d], vb.Db(b) && a.push(d), --b[d])
                }
                return a
            },
            Fc: function (b) {
                for (var a = {}, d = 0; 34 > d; ++d)
                    b[d] && (--b[d], a[d] = vb.eb(b), ++b[d]);
                return a
            }
        }
    }
    ();
    var x = function () {
        function a(a) {
            b && (clearInterval(b), b = null);
            c && c[a] && 0 == c[a](e) || !e || (e.parentNode.removeChild(e), e = null)
        }
        var e,
        c,
        b;
        return {
            o: function (f, d, k, m, n, g, h) {
                g = g || "OK";
                h = h || "CANCEL";
                1 == arguments.length && (d = 1);
                c = [m, k];
                var l = e = nb("DIV", cb, "tbl fadeinqs", {}, {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.75)"
                });
                setTimeout(function () {
                    d || ta(l, "click", function () {
                        a(0)
                    });
                    l = nb("DIV", l, "tbc", {}, {
                        textAlign: "center",
                        verticalAlign: "middle"
                    });
                    l = nb("FORM", l, "", {
                        innerHTML: "<div style='position:relative;font-size:150%;" +
                        (d ? "padding:1em 0;" : "") + "'>" + f + "</div><input type=button style='width:6em;' /><input type=submit style='width:6em;' />",
                        onsubmit: function () {
                            return !1
                        }
                    }, {
                        display: "inline-block",
                        background: "#FFF",
                        color: "#000",
                        borderRadius: "0.6em",
                        maxWidth: "90vw",
                        padding: "1em"
                    });
                    var c = l.querySelectorAll("FORM>INPUT");
                    c[0].onclick = function () {
                        a(0)
                    };
                    c[0].style.display = d & 2 ? "" : "none";
                    c[0].value = h;
                    c[1].onclick = function () {
                        a(1)
                    };
                    c[1].style.display = d & 1 ? "" : "none";
                    c[1].value = g;
                    if (gb && pa)
                        for (var e = 0; e < c.length; ++e)
                            ua(c[e], {
                                focus: function () {
                                    wb(1)
                                },
                                blur: function () {
                                    wb()
                                }
                            });
                    c.length && c[0].focus();
                    if (n) {
                        xb(8, 0, 0);
                        var k = nb("DIV", l, "", {
                            innerHTML: "<div style='position:absolute;right:0;bottom:0;padding:0 0.1em;font-size:70%;'></div>"
                        }, {
                            color: "#000",
                            position: "absolute",
                            pointerEvents: "none"
                        });
                        b = setInterval(function () {
                            var b = k.style,
                            d = c[0].getBoundingClientRect();
                            b.left = d.left + "px";
                            b.top = d.top + "px";
                            b.width = d.width + "px";
                            b.height = d.height + "px";
                            k.firstChild.innerHTML = --n;
                            0 < n && xb(7, 0, 0);
                            0 > n && a(0)
                        }, 1E3)
                    }
                    if (l = l.querySelector("._selected_"))
                        l.parentNode.scrollTop =
                            l.offsetTop - (l.parentNode.offsetHeight - l.offsetHeight) / 2
                }, 1)
            },
            Y: function (b, a, c, e, n) {
                return x.o("<div class='fixed-select sscl' style='position:relative;" + (a || "") + "'>" + b + "</div><div class=sblink style='visibility:hidden;'>▼</div>", c, e, n)
            },
            $a: function () {
                return !!e
            }
        }
    }
    ();
    ta(q, "click", function (a) {
        var e = a.target;
        if (e.classList.contains("A") && e.id && e.parentNode.classList.contains("fixed-select"))
            if ("A" == e.tagName && a.preventDefault(), a = e.id.split("-"), A.b && A[a[0]])
                A[a[0]](a[0], a[1]);
            else
                switch (a[0]) {
                case "#tw":
                    3 == D.a ? yb.wb(a[0], a[1]) : 2 == D.a && Bb.wb(a[0], a[1]);
                    break;
                case "#ts":
                    yb.Zb(a[0], a[1]);
                    break;
                case "#tj":
                    yb.$b(a[0], a[1]);
                    break;
                case "#edit":
                    if ("M" == a[1])
                        q.open("https://tenhou.net/6/?log=" + t.log + "&tw=" + ~~t.tw);
                    else if ("T" == a[1])
                        return alert("本機能はクローズド公開中のため使用できません")
                }
    });
    function Cb(a) {
        if ("254" == a)
            return "a";
        if ("255" == a)
            return "r";
        if ("136" == a)
            return "0z";
        var e = a >> 2;
        return (27 > e && 16 == a % 36 ? "0" : e % 9 + 1) + "mpsz".substr(e / 9, 1)
    }
    function Db(a) {
        for (var e = "", c = 0; c < a.length; ++c)
            e += Cb(a[c]);
        return e.replace(/\d(m|p|s|z)(\d\1)*/g, "$&:").replace(/(m|p|s|z)([^:])/g, "$2").replace(/:/g, "")
    }
    function Eb(a) {
        return a.replace(/(\d)(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{8})(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d)(\d)(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(m|p|s|z)(m|p|s|z)+/g, "$1").replace(/([^0-9]|^)[mpsz](\d[mpsz\d]*)/g, "$1$2")
    }
    function Fb(a) {
        if (!a)
            return "";
        for (var e = [], c = 0; 34 > c; ++c)
            e[c] = 0;
        return Eb(a).replace(/r/g, "255,").replace(/a/g, "254,").replace(/(\d)([mpsz])(?![mpsz])/g, function (b, a, d) {
            a = ~~a;
            if ("z" == d && 0 == a)
                return "136,";
            b = "m" == d ? 0 : "p" == d ? 1 : "s" == d ? 2 : 3;
            return a ? 36 * b + 4 * (a - 1) + ++e[9 * b + (a - 1)] % 4 + "," : 4 * (9 * b + 4) + 0 + ","
        }).replace(/,$/, "")
    };
    var H;
    (function () {
        try {
            H = q.localStorage,
            H.setItem("a", 1),
            H.removeItem("a")
        } catch (f) {
            H = {
                setItem: function (b, a) {
                    H[b] = a
                },
                removeItem: function (b) {
                    delete H[b]
                }
            };
            var a = navigator.languages,
            e = 0;
            navigator.userAgent.match(/TwitterAndroid/) && (e |= 1);
            for (var c in a)
                a[c].match(/(ja|JP)/) && (e |= 2);
            a = "";
            switch (e) {
            case 0:
                a = "This browser(private browsing etc.) won't let you save game logs, IDs or other settings.";
                break;
            case 1:
                a = "The Twitter browser will not let you save your settings (game logs, IDs, etc). Open the menu and select Open in Browser.";
                break;
            default:
            case 2:
                a = "このブラウザ環境(プライベートブラウズなど)では、牌譜の記録やIDの保存などが行えません。";
                break;
            case 3:
                a = "Twitterの専用ブラウザでは、設定の保存(牌譜の記録/IDの保存/など)が行えません。メニューの「ブラウザで開く」から通常のブラウザで開いてください。"
            }
            x.o(a)
        }
        e =
            H.scro;
        if (pa && q.screen && q.screen.orientation && q.screen.orientation.lock) {
            a = screen.orientation;
            c = a.type;
            if (fb && ("landscape-primary" == c || "landscape-secondary" == c)) {
                var b = ab.getElementById("loading");
                b && (b.style.display = "none");
                q.StatusBar.overlaysWebView(!0);
                q.StatusBar.hide();
                a.lock("portrait");
                "landscape-primary" == c ? a.lock("landscape-secondary") : "landscape-secondary" == c && a.lock("landscape-primary");
                b && setTimeout(function () {
                    b.style.display = "table"
                }, 1E3)
            }
            fb && 2 == e ? a.lock("landscape-primary" == c ? "landscape-secondary" :
                "landscape-secondary" == c ? "landscape-primary" : "landscape") : a.lock(1 == e ? "portrait" : 2 == e ? "landscape" : "any")
        }
    })();
    function Gb(a, e, c) {
        H && (e != c ? H.setItem(a, e) : H.removeItem(a))
    }
    (function () {
        function a(e) {
            mb = "mousedown" == e.type;
            e = H.desktop;
            1 != e && 2 != e && (Gb("desktop", mb ? 3 : 0, 0), e !== H.desktop && Hb());
            q.removeEventListener("touchstart", a, !1);
            q.removeEventListener("mousedown", a, !1)
        }
        ua(q, {
            touchstart: a,
            mousedown: a
        })
    })();
    H.nose && (H.sevol = "0", H.removeItem("nose"));
    var Ib = {
        ja: {},
        en: {},
        zh: {},
        ko: {},
        ru: {},
        fr: {},
        it: {},
        es: {},
        vi: {},
        pt: {},
        de: {}
    },
    Mb = function () {
        function a(b) {
            void 0 !== b && Gb("lang", b, e);
            c = (H.lang || e).split("-")[0];
            switch (c) {
            case "JP":
                c = "ja";
                break;
            case "EN":
                c = "en"
            }
            return c
        }
        var e = (navigator.language || "ja").split("-")[0],
        c = "";
        return {
            sb: a,
            uc: function (b) {
                function e() {
                    --d || b()
                }
                c = a();
                var d = 0;
                ++d;
                Mb.Fb("en", e);
                ++d;
                Mb.Fb("ja", e);
                ++d;
                Mb.Fb(Mb.sb(), e)
            },
            Kc: function (b) {
                var a = Ib[c];
                return a && a[b] || Ib.en[b] || Ib.ja[b] || "[str:" + c + b + "]"
            },
            Fb: function (b, a) {
                Ib[b] ? Object.keys(Ib[b]).length ?
                a(b, Ib[b]) : Va("https://cdn.tenhou.net/4/res/lang/string20210325_" + b + ".json", function (d) {
                    try {
                        var c = JSON.parse(d)
                    } catch (g) {
                        return
                    }
                    d = c;
                    var e = Ib[b];
                    if (d.length)
                        for (var f = 0; f < d.length; f += 2)
                            e[d[f + 0]] = d[f + 1];
                    else
                        for (f in d)
                            e[f] = d[f];
                    a(b, c)
                }, function (b) {
                    if (b)
                        throw b;
                }) : a(b, {})
            }
        }
    }
    (),
    I = Mb.Kc;
    var Nb = 108,
    Ob = nb("DIV", cb, "nosel", {}, {
        display: "none",
        color: "#CCC",
        backgroundColor: "#444",
        height: Nb + "px"
    }),
    Pb = nb("DIV", cb, "nosel", {}, {
        display: "none",
        overflow: "hidden",
        position: "absolute"
    }),
    Qb = nb("DIV", cb, "", {}, {
        position: "absolute"
    });
    jb && !kb ? Ob.innerHTML = "<div style='width:100%;height:100%;display:table;pointer-events:none;'><div style='display:table-cell;text-align:center;vertical-align:middle;'>上にゆっくりスクロールしてください</div></div>" : (Ob.style.height = Nb = 0, cb.style.overflow = "hidden");
    function Rb() {
        function a() {
            c = null;
            var a = ab.documentElement.clientWidth,
            d = q.innerHeight,
            k = (~~q.orientation + 360) % 360,
            m = b[0];
            jb && ((~~k + 360) % 180 && (m = b[1]), gb && a == m[1] && (Pb.style.display = Ob.style.display = "none", m[0] = m[1] = 0), a < m[0] && (a = m[0]), d < m[1] && (d = m[1]));
            a == parseInt(Pb.style.width) && d == parseInt(Pb.style.height) ? (m[0] = a, m[1] = d, cb.style.height = parseInt(Ob.style.height) + d + "px", Pb.style.display = Ob.style.display = "", Hb()) : (e(), wb(), q.scrollTo(0, parseInt(Ob.style.height)), Pb.style.width = a + "px", Pb.style.height =
                    d + "px")
        }
        function e(b) {
            fb && (Pb.style.display = Ob.style.display = "none");
            b && "resize" == b.type || (cb.style.height = 2 * q.innerHeight + "px");
            clearTimeout(c);
            c = setTimeout(a, 250)
        }
        var c,
        b = [[0, 0], [0, 0]];
        ta(q, "orientationchange", fb ? e : function () {
            Pb.style.display = Ob.style.display = "none";
            var a = b[(~~((~~q.orientation + 360) % 360) + 360) % 180 ? 1 : 0];
            a[0] = a[1] = 0;
            e()
        });
        ta(q, "resize", e);
        e()
    }
    function Sb(a, e, c) {
        var b = e / r + "px",
        f = c / r + "px";
        if (a.width != e || a.height != c)
            a.width = e, a.height = c;
        a = a.style;
        if (a.width != b || a.height != f)
            a.width = b, a.height = f
    }
    function Tb() {
        K.a = 2;
        K.a = 3 == D.a ? H.check & 8 ? 3 : ~~H.yama : ~~H.yama;
        0 == K.a && H.desktop && (K.a = 1);
        Ub();
        M.Jc();
        var a = Vb,
        e = Wb;
        cb.parentNode.style.fontSize = ~~((a - 2 * N[1]) / r / 30) + "px";
        Xb.style.width = (a + (3 == D.a && Pb.offsetHeight < Pb.offsetWidth ? (a - 2 * N[1]) / 8 : 0)) / r + "px";
        Xb.style.height = e / r + "px";
        Sb(Yb.s.canvas, a, e);
        Sb(P.s.canvas, Zb, e);
        Sb($b.s.canvas, Zb, e);
        a =  - ~~((Zb - a) / 2 / r);
        P.s.canvas.style.marginLeft = $b.s.canvas.style.marginLeft = a + "px";
        ac.fa();
        R.L();
        bc.L();
        cc.style.left = ~~(R[80] / r) + a + "px";
        cc.style.top = ~~(R[81] / r) + "px";
        e = dc.s.canvas;
        e.style.marginLeft = ~~(R[32] / r) + a + "px";
        e.style.marginTop = ~~(R[33] / r) + "px";
        Sb(e, R[34], R[35]);
        Yb.X();
        dc.X();
        P.xb();
        S.L();
        u.L();
        A.L();
        ec.L();
        Qb.style.top = Xb.offsetHeight + S.b.offsetHeight + "px";
        (a = ab.getElementById("loading")) && a.parentNode.removeChild(a)
    }
    function Hb() {
        Hb = Tb;
        u.la(11, q.tenhouEventInfo && !ab.referrer.match(/^https?:\/\/tenhou.net\/0\/(\?|$)/))
    }
    function wb(a) {
        var e = q.StatusBar;
        if (e) {
            pa && gb && e.backgroundColorByHexString("#000");
            var c = ab.documentElement.clientWidth,
            b = q.innerHeight;
            !a && b < c ? (e.overlaysWebView(!0), e.hide()) : (e.overlaysWebView(!1), e.show())
        }
    }
    pa && ta(ab, "resume", Xa(function () {
            Yb.X();
            dc.X();
            P.xb();
            var a = $b.s;
            a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
        }, 1));
    var Xb = nb("DIV", Pb, "nosel tbl", {}, {
        margin: "0 auto",
        position: "relative"
    });
    function fc(a, e) {
        var c = arguments;
        a.beginPath();
        a.moveTo(c[2], c[3]);
        for (var b = 4; b < c.length; )
            switch (c[b++]) {
            case 0:
                b += 2;
                break;
            case 1:
                a.lineTo(c[b++], c[b++]);
                break;
            case 2:
                a.arcTo(c[b++], c[b++], c[b + 1], c[b + 2], e)
            }
        a.closePath()
    }
    function gc(a, e, c, b, f) {
        var d = ~~(.5 * T[0]);
        fc(a, d, e + d, c + f, 2, e + b, c + f, 2, e + b, c, 2, e, c, 2, e, c + f, 0, e + b, c + f + .01)
    }
    var Yb = function () {
        function a(a, c, b, f, d) {
            d && (a.fillStyle = d, a.fillText(c, 1, b + 0), a.fillText(c, -1, b + 0), a.fillText(c, 0, b + 1), a.fillText(c, 0, b - 1), a.fillText(c, 1, b + 1), a.fillText(c, -1, b + 1), a.fillText(c, 1, b - 1), a.fillText(c, -1, b - 1));
            f && (a.fillStyle = f, a.fillText(c, 0, b))
        }
        return {
            s: nb("CANVAS", Xb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            X: Xa(function () {
                var e = Yb.s;
                if (e && (e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, e.canvas.width + 1, e.canvas.height + 1), M.cb.complete && M.cb.height && e.drawImage(M.cb,
                            0, 0), -1 != D.ma)) {
                    var c = P.s.canvas.offsetLeft * r,
                    b = R[16] + c,
                    f = R[17],
                    d = R[18],
                    k = R[19],
                    m = T[0],
                    n = ~~(.5 * m);
                    e.fillStyle = "#000";
                    gc(e, b, f, d, k);
                    e.globalAlpha = .2;
                    e.fill();
                    e.globalAlpha = 1;
                    var g = 3 * N[1],
                    h = 3 * U[0],
                    l = [e];
                    l.push(n, b, f + k);
                    D.H[0] && l.push(2, b, f + k + h, 2, b + d + g, f + k + h, 2, b + d + g, f + k + m, 1, b + d, f + k + m);
                    l.push(1, b + d, f + k);
                    D.H[1] && l.push(2, b + d + g, f + k, 2, b + d + g, f - h, 2, b + d + m, f - h, 1, b + d + m, f);
                    l.push(1, b + d, f);
                    D.H[2] && l.push(2, b + d, f - h, 2, b - g, f - h, 2, b - g, f - m, 1, b, f - m);
                    l.push(1, b, f);
                    D.H[3] && l.push(2, b - g, f, 2, b - g, f + k + h, 2, b - m, f + k + h, 1, b - m, f +
                        k);
                    fc.apply(this, l);
                    e.globalAlpha = .15;
                    e.fill();
                    e.globalAlpha = 1;
                    for (b = 0; 4 > b; ++b)
                        D.H[b] && (e.setTransform(1, 0, 0, 1, c, 0), e.fillStyle = "#000", d = 48 + 4 * b, f = e, gc(f, R[d + 0], R[d + 1], R[d + 2], R[d + 3]), f.globalAlpha = .15, f.fill(), f.globalAlpha = 1, f = Math.min(R[d + 2] / 2, R[d + 3] / 2), e.textAlign = "center", e.textBaseline = "middle", e.setTransform(1, 0, 0, 1, R[d + 0] + ~~(R[d + 2] / 2) + c, R[d + 1] + ~~(R[d + 3] / 2)), e.rotate(270 * b * Math.PI / 180), d = 0 == b || 3 == b ? "rgba(255,255,255,0.25)" : "rgba(191,191,191,0.25)", k = void 0, t.jb || (d = 0 == b || 3 == b ? "rgba(255,255,255,0.80)" :
                                    "rgba(191,191,191,0.80)", k = "rgba(0,0,0,0.50)"), m =  - .1, 1800 <= D.Ra[b] && (e.font = "normal " + .3 * f + "px sans-serif", a(e, "R" + ~~D.Ra[b],  - .55 * f, d, k), m = 0), e.font = "normal " + .9 * f + "px cwTeX-Q-Kai-T,icons2,serif", a(e, ba[D.Va[b]], f * m, d, k), e.font = "normal " + .25 * f + "px sans-serif", a(e, D.H[b], f * (.55 + m), d, k));
                    e.fillStyle = "#000";
                    e.setTransform(1, 0, 0, 1, c, 0);
                    for (b = 0; 4 > b; ++b)
                        D.H[b] && (c = b ? 0 : T[4], f = R[80 + 2 * b], d = R[81 + 2 * b], k = R[96 + 2 * b], m = R[97 + 2 * b], 0 == b && (ty0 = R[97]), n = e, gc(n, Math.min(f, k), Math.min(d, m) + c, Math.abs(f - k) + N[b], Math.abs(d -
                                    m) + U[b] + T[b] - c), n.globalAlpha = .2, n.fill(), n.globalAlpha = 1)
                }
            })
        }
    }
    ();
    var P = function () {
        function a(b, a, d, c) {
            if (d && c) {
                var g = P.s;
                g.clearRect(b, a, d, c);
                d = b + d;
                c = a + c;
                for (var h, e = 0; h = R.sa[e]; ++e) {
                    var f = h.i;
                    if (void 0 !== f && 0 !== h.u && f.za.complete && f.za.height) {
                        var k = h.ua.c + f.offsetX,
                        n = h.ua.h - h.ua.Ca + f.offsetY;
                        if (!(d <= k || c <= n)) {
                            var m = k + f.ia;
                            if (!(m <= b)) {
                                var E = n + f.wa;
                                if (!(E <= a)) {
                                    var da = b - k;
                                    0 < da ? k = b : da = 0;
                                    d < m && (m = d);
                                    var m = m - k,
                                    oa = a - n;
                                    0 < oa ? n = a : oa = 0;
                                    c < E && (E = c);
                                    E -= n;
                                    g.globalAlpha = h.u;
                                    g.drawImage(f.za, f.Ya + da, f.Za + oa, m, E, k, n, m, E);
                                    h.ca && (f = h.ka, g.globalAlpha = h.ca, g.drawImage(f.za, f.Ya + da,
                                            f.Za + oa, m, E, k, n, m, E))
                                }
                            }
                        }
                    }
                }
                g.globalAlpha = 1
            }
        }
        function e(a, c, g, h) {
            d && k ? (a < b ? (d += b - a, b = a) : g += a - b, d < g && (d = g), c < f ? (k += f - c, f = c) : h += c - f, k < h && (k = h)) : (b = a, f = c, d = g, k = h)
        }
        var c = Xa(function () {
            var b = P.s;
            b.clearRect(0, 0, b.canvas.width + 1, b.canvas.height + 1);
            for (var d, c = 0; d = R.sa[c]; ++c) {
                var h = d.i;
                if (void 0 !== h && 0 !== d.u && h.za.complete && h.za.height) {
                    var l = d.ua.c + h.offsetX,
                    e = d.ua.h - d.ua.Ca + h.offsetY;
                    b.globalAlpha = d.u;
                    b.drawImage(h.za, h.Ya, h.Za, h.ia, h.wa, l, e, h.ia, h.wa);
                    if (d.ca) {
                        var f = d.ka;
                        b.globalAlpha = d.ca;
                        b.drawImage(f.za,
                            f.Ya, f.Za, h.ia, h.wa, l, e, h.ia, h.wa)
                    }
                }
            }
            P.Ka = a
        }, 1),
        b,
        f,
        d,
        k;
        return {
            s: nb("CANVAS", Xb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            xb: function () {
                (P.Ka = c)()
            },
            Aa: function () {
                b = f = d = k = 0;
                P.Ka = e
            },
            Ba: function () {
                a(b, f, d, k);
                P.Ka = a
            },
            Ka: a
        }
    }
    ();
    var dc = function () {
        function a(b, a) {
            for (var d = dc.s, c = [], f = 2; f < arguments.length; f += 5) {
                d.font = arguments[f + 0];
                var g = d.measureText(arguments[f + 3]).width;
                c.push(g);
                b -= g / 2
            }
            for (f = 2; f < arguments.length; f += 5)
                d.font = arguments[f + 0], d.fillStyle = e[arguments[f + 1]], (g = e[arguments[f + 2]]) ? (d.shadowBlur = 2 * r, d.shadowColor = g, d.shadowOffsetX = 1 * r, d.shadowOffsetY = 1 * r) : (d.shadowBlur = 0, d.shadowColor = "#000", d.shadowOffsetX = 0, d.shadowOffsetY = 0), g = c.shift(), d.fillText(arguments[f + 3], b + g / 2, a + arguments[f + 4]), b += g
        }
        var e = "#FFF #666 #000 #00F #F00 #AAA".split(" "),
        c = 0,
        b = 0;
        return {
            s: nb("CANVAS", Xb, "", {}, {
                position: "absolute",
                display: "none"
            }).getContext("2d"),
            X: function (e, d) {
                void 0 !== e && (c = e);
                void 0 !== d && (b = d);
                var f = dc.s,
                m = f.canvas.width,
                n = f.canvas.height,
                g = Math.min(.18 * m, .18 * n);
                if (1 == K.a || 3 == K.a)
                    g *= .9;
                f.save();
                f.setTransform(1, 0, 0, 1, 0, 0);
                f.clearRect(0, 0, m + 1, n + 1);
                gc(f, 1, 1, m - 2, n - 2);
                t.jb ? (f.fillStyle = "#222", f.fill()) : (f.globalAlpha = .75, f.fillStyle = "#222", f.fill(), f.globalAlpha = 1);
                f.strokeStyle = "#111";
                f.lineWidth = 1;
                f.stroke();
                var h = b,
                l = .24 * g,
                z = .02 * g,
                C = dc.s,
                w = C.canvas.width,
                B = C.canvas.height,
                y = C.createLinearGradient(0, 0, h & 1 ? 0 : w, h & 1 ? B : 0);
                y.addColorStop(0, "rgba(0,127,0,0)");
                y.addColorStop(.12, "rgba(0,127,0,255)");
                y.addColorStop(.88, "rgba(0,127,0,255)");
                y.addColorStop(1, "rgba(0,127,0,0)");
                C.fillStyle = y;
                switch (h) {
                case 0:
                    C.fillRect(0, B - l - z, w, l);
                    break;
                case 1:
                    C.fillRect(w - l - z, 0, l, B);
                    break;
                case 2:
                    C.fillRect(0, z, w, l);
                    break;
                case 3:
                    C.fillRect(z, 0, l, B)
                }
                h = "normal " + 1.2 * g + "px cwTeX-Q-Kai-T,icons2,serif";
                l = "normal " + .8 * g + "px cwTeX-Q-Kai-T,icons2,serif";
                z = .15 * g;
                f.textAlign = "center";
                f.textBaseline = "middle";
                f.setTransform(1, 0, 0, 1, m / 2, n / 2);
                C = [[0, n / 2 - .7 * g], [0, m / 2 - .7 * g], [0, n / 2 - .7 * g], [0, m / 2 - .7 * g]];
                if (3 != c)
                    if (0 == c)
                        for (w = 0; 4 > w; ++w)
                            C[w].push(h, (4 + w - D.ma) % 4 ? 1 : 0, -1, D.gb[w] + " ", 0, h, D.connected & 1 << w ? 0 : 4, 2, void 0 === D.pa[w] ? "-" : D.pa[w] / 100, 0, l, 1, -1, "00", z);
                    else if (C[0].push(h, 0, 2, D.gb[0] + " ", 0, h, 0, 2, void 0 === D.pa[0] ? "" : D.pa[0] / 100, 0), C[1].push(h, 0, 2, void 0 === D.pa[1] ? "" : Za((D.pa[1] - D.pa[0]) / 100), 0), C[2].push(h, 0, 2, void 0 === D.pa[2] ? "" : Za((D.pa[2] - D.pa[0]) / 100), 0), C[3].push(h, 0, 2, void 0 === D.pa[3] ?
                            "" : Za((D.pa[3] - D.pa[0]) / 100), 0), ~D.v & 512)
                        C[0].push(l, 1, -1, "00", z);
                    else
                        for (w = 0; 4 > w; ++w)
                            C[w].push(h, 0, 2, " " + D.Qb[w], 0);
                D.H[0] && a.apply(this, C[0]);
                f.rotate(270 * Math.PI / 180);
                D.H[1] && a.apply(this, C[1]);
                f.rotate(270 * Math.PI / 180);
                D.H[2] && a.apply(this, C[2]);
                f.rotate(270 * Math.PI / 180);
                D.H[3] && a.apply(this, C[3]);
                3 == c ? (f.setTransform(1, 0, 0, 1, m / 2, n / 2), f.fillStyle = "#FFF", a(0, 0, h, 0, 2, "天鳳", 0)) : 0 == c ? (f.setTransform(1, 0, 0, 1, m / 2, n / 2 - .75 * g / 2), f.fillStyle = "#FFF", h = "normal " + 1.7 * g + "px cwTeX-Q-Kai-T,icons2,serif",
                    l = D.oa[0], a(0, 0, h, 0, ~~(l / 4) & 1 ? 4 : 3, "東南西北".substr(~~(l / 4), 1), 0, h, 0, l % 4 == (D.v & 16 ? 2 : 3) ? 4 : 2, l % 4 + 1, 0, h, 1, -1, "局", 0), w = (m - 2.8 * g) / 2, f.beginPath(), f.moveTo(-w, .75 * +g), f.lineTo(+w, .75 * +g), h = f.createLinearGradient(-w, 0, +w, 0), h.addColorStop("0.0", "rgba(15,15,15,0)"), h.addColorStop("0.5", "rgba(15,15,15,1)"), h.addColorStop("1.0", "rgba(15,15,15,0)"), f.strokeStyle = h, f.lineWidth = 1, f.stroke(), f.setTransform(1, 0, 0, 1, m / 2, n / 2 + 1.7 * g / 2 - .75 * g / 2 + .3 * g), h = "normal " + .75 * g + "px cwTeX-Q-Kai-T,icons2,serif",
                    l = "normal " + .5 * g + "px cwTeX-Q-Kai-T,icons2,serif", z = .12 * g, m = K.Xb(b), a(0, 0, h, 0, m < (D.v & 16 ? 6 : 8) ? 4 : 2, m + " ", 0, l, 5, -1, "", z, h, 0, 2, D.oa[1], 0, l, 5, -1, "", z, h, 0, 2, D.oa[2], 0)) : (h = "normal bold " + .75 * g + "px sans-serif", f.setTransform(1, 0, 0, 1, m / 2, n / 2), f.fillStyle = "#FFF", a(0, 0, h, 0, 2, 4 == D.a ? "天鳳" : ka(D.v), 0));
                f.restore()
            },
            la: function () {}
        }
    }
    ();
    (function () {
        function a(b, a) {
            dc.X(a || 1);
            if (c) {
                var d = c;
                delete hc()[d];
                c = void 0
            }
        }
        function e() {
            a(0, 2);
            c = ic(function () {
                c = void 0;
                dc.X(0)
            }, 2E3)
        }
        var c = void 0;
        ua(dc.s.canvas, {
            touchstart: function () {
                dc.X(1)
            },
            touchend: e,
            touchcancel: function () {
                dc.X(0)
            },
            mouseover: a,
            mouseout: e
        })
    })();
    var $b = function () {
        function a(a) {
            var n = $b.s;
            0 < d && 0 < k && n.clearRect(b, f, d, k);
            var g = b = f = d = k = 0,
            h;
            for (h in e) {
                var l = e[h];
                if (0 > l.t)
                    l.t += a;
                else if (l.t < l.qa) {
                    var z = l.i,
                    m = ~~(l.Ta + (l.Dc - l.Ta) * l.t / l.qa),
                    w = ~~(l.zb + (l.Ec - l.zb) * l.t / l.qa),
                    B = z.ia,
                    y = z.wa;
                    z.za.complete && z.za.height && (n.globalAlpha = l.u, n.drawImage(z.za, z.Ya, z.Za, B, y, m, w, B, y));
                    l.t += a;
                    d && k ? (m < b ? (d += b - m, b = m) : B += m - b, d < B && (d = B), w < f ? (k += f - w, f = w) : y += w - f, k < y && (k = y)) : (b = m, f = w, d = B, k = y)
                } else
                    l.rb && l.rb.ga(l.wc), delete e[h];
                ++g
            }
            n.globalAlpha = 1;
            g || (jc(), c && c.length &&
                (c.shift()(), ++g));
            return g
        }
        var e,
        c,
        b,
        f,
        d,
        k;
        return {
            s: nb("CANVAS", Xb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            $: !1,
            ha: function () {
                c = [];
                e = {};
                b = f = d = k = 0;
                var a = $b.s;
                a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
            },
            O: function (b, d, g, h, l, f, k, w, B, y) {
                if ($b.$)
                    return b instanceof Function ? b() : d instanceof kc ? d.ga(g) : B && B.ga(y), 0;
                var z = hc();
                z.xc || (z.xc = a);
                if (b instanceof Function)
                    return c.push(b), 0;
                z = e[$a++] = {};
                z.t = -b;
                d instanceof kc ? (B = d, y = g, z.qa = 0) : (z.u = w, z.i = k, void 0 === k && rb("animation src undefined"),
                    z.Ta = d, z.zb = g, z.Dc = h, z.Ec = l, 0 < f ? (d = h - d, g = l - g, z.qa = ~~(Math.sqrt(d * d + g * g) / (N[0] * f))) : z.qa = -f);
                B && (z.rb = B, z.wc = y);
                return b + z.qa
            },
            Da: function () {
                for (; a(1E4); );
            }
        }
    }
    ();
    var bc = function () {
        for (var a = [], e = 0; 4 > e; ++e)
            a[e] = nb("DIV", Xb, "nosel tbl ts0 rot" + Ya(3, 270 * e % 360), {}, {
                fontSize: "80%",
                pointerEvents: "none",
                textAlign: "right",
                display: "none"
            });
        var c = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11, 12, 13, 14, 15, 16, 17, 9, 19, 20, 21, 22, 23, 24, 25, 26, 18, 28, 29, 30, 27, 32, 33, 31];
        return {
            ha: function () {
                for (var b = 0; 4 > b; ++b)
                    a[b].style.display = "none"
            },
            ob: function (b) {
                var f = a[b],
                d = V[16 | b].length;
                if (d) {
                    for (var e = d, m = [], n = 0; n < V[16 | b].length; ++n) {
                        var g = V[16 | b][n];
                        16 == g && (e += 1);
                        m[g] = 1
                    }
                    m[0] && m[1] && m[2] && m[3] && (e += 4);
                    m[16] &&
                    m[17] && m[18] && m[19] && (e += 4);
                    m[32] && m[33] && m[34] && m[35] && (e += 4);
                    m[120] && m[121] && m[122] && m[123] && (e += 4);
                    for (n = 5; n < D.oa.length; ++n)
                        b = c[D.oa[n] >> 2], 0 != (D.v & 2048) ? 1 == b ? b = 4 : 5 == b && (b = 8) : D.v & 16 && 1 == b && (b = 8), b *= 4, e += ~~m[b + 0] + ~~m[b + 1] + ~~m[b + 2] + ~~m[b + 3];
                    m = "";
                    0 != (D.v & 2048) && (m += e + "<span style='font-size:50%;'>+</span><br>");
                    f.style.display = "";
                    f.innerHTML = "<div class=tbc style='vertical-align:bottom;padding:0 0.1em;'>" + (m + ("<span style='font-size:60%;'>x</span>" + d + "<br>")) + "</div>"
                } else
                    f.style.display = "none"
            },
            L: function () {
                for (var b = 0; 4 > b; ++b) {
                    var c = a[b].style;
                    c.width = c.height = ~~(Math.min(N[b], U[b]) / r) + "px";
                    var d =  - (0 == b ? N[0] : lc[b]);
                    c.left = ~~((R[96 + 2 * b] +  - (1 == b ? U[1] : mc[b])) / r) + P.s.canvas.offsetLeft + "px";
                    c.top = ~~((R[97 + 2 * b] + d) / r) + "px"
                }
            }
        }
    }
    (),
    oc = function () {
        function a(b) {
            return "<span style='pointer-events:none;vertical-align:middle;'>" + b + "</span>"
        }
        function e() {
            for (var b in u)
                if (!(~b & 262144) && (u[b].parentNode.style.visibility = c[b] ? "" : "hidden", c[b] && 2 === c[b].length)) {
                    var a = c[b][0],
                    d = c[b][1];
                    M.va(u[b], "", 4, .8, a,
                        d);
                    c[2098693] = c[b] = {
                        tag: "N",
                        type: a >> 2 == d >> 2 ? 1 : 3,
                        hai0: a,
                        hai1: d
                    }
                }
        }
        var c = {};
        return {
            Ac: function (b, f) {
                if (1 == D.a || 4 == D.a) {
                    var d = 0;
                    c = {};
                    b & 32 && (c[2359814] = {
                            tag: "REACH"
                        });
                    b & 16 && (c[2359816] = {
                            tag: "N",
                            type: 7
                        });
                    b & 64 && (c[2359815] = {
                            tag: "N",
                            type: 9
                        });
                    0 < K.Xb(0) && 4 > K.bb - V[16].length - V[17].length - V[18].length - V[19].length && (b |= 2);
                    var k = [];
                    if (b & 2)
                        for (var m, n = (D.v & 16 ? 16 : 17) - 1; m = R[2048 | n]; --n)
                            if (void 0 !== m.Ia.fb) {
                                for (var g = 0; g < V[32].length && V[32][g] != m.Ia.fb; ++g);
                                g < V[32].length && k.push({
                                    tag: "N",
                                    type: 5,
                                    hai: V[32][g]
                                })
                            }
                    if (b &
                        2)
                        if (m = V[48], V[64])
                            n = "" + V[64], g = f >> 2, 4 == m[g] && (m[g] -= 4, "" + vb.eb(m) == n && k.push({
                                    tag: "N",
                                    type: 4,
                                    hai: 4 * g
                                }), m[g] += 4);
                        else
                            for (g = 0; 34 > g; ++g)
                                4 > m[g] || k.push({
                                    tag: "N",
                                    type: 4,
                                    hai: 4 * g
                                });
                    k.length || (b &= -3);
                    k.length && (c[2098693] = c[401412] = k[0], M.va(u[401412], a(I(180)) + " ", 4, .7, k[0].hai), k.shift(), ++d);
                    k.length && (c[2098693] = c[401416] = k[0], M.va(u[401416], a(I(180)) + " ", 4, .7, k[0].hai), k.shift(), ++d);
                    k.length && (c[2098693] = c[401417] = k[0], M.va(u[401417], a(I(180)) + " ", 4, .7, k[0].hai), k.shift(), ++d);
                    if (b & 128)
                        if (0 == (D.v &
                                2048) || V[64])
                            c[2098693] = c[401414] = {
                                tag: "N",
                                type: 10
                            },
                    u[401414].innerHTML = I(185),
                    ++d;
                    else {
                        m = [];
                        for (n = 0; n < V[32].length; ++n)
                            if (k = V[32][n], g = k >> 2, 0 == g || 4 == g || 8 == g || 30 == g)
                                m[k] = {
                                    tag: "N",
                                    type: 10,
                                    hai: k
                                };
                        k = [401414, 401415, 401418, 401419, 401417];
                        if (g = m[120] || m[121] || m[122] || m[123])
                            c[2098693] = c[k[0]] = g, M.va(u[k[0]], a(I(181)) + " ", 4, .7, g.hai), k.shift(), ++d;
                        if (g = m[0] || m[1] || m[2] || m[3])
                            c[2098693] = c[k[0]] = g, M.va(u[k[0]], a(I(181)) + " ", 4, .7, g.hai), k.shift(), ++d;
                        if (g = m[16])
                            c[2098693] = c[k[0]] = g, M.va(u[k[0]], a(I(181)) + " ",
                                4, .7, g.hai), k.shift(), ++d;
                        if (g = m[17] || m[18] || m[19])
                            c[2098693] = c[k[0]] = g, M.va(u[k[0]], a(I(181)) + " ", 4, .7, g.hai), k.shift(), ++d;
                        if (g = m[32] || m[33] || m[34] || m[35])
                            c[2098693] = c[k[0]] = g, M.va(u[k[0]], a(I(181)) + " ", 4, .7, g.hai), k.shift(), ++d
                    }
                    e();
                    u.R(512);
                    u[2098693].parentNode.style.visibility = 1 == d ? "" : "hidden";
                    u[3670533].parentNode.style.visibility = 1 < d ? "" : "hidden";
                    1 == d && (u[2098693].innerHTML = b & 128 ? I(185) : b & 2 ? I(184) : "?");
                    b && xb(8, 0, 0);
                    return b
                }
            },
            yc: function (b, f) {
                if (1 == D.a || 4 == D.a) {
                    for (var d = ~~(f / 4 / 9), k = ~~(f / 4) %
                        9, m = {}, n = 0; n < V[32].length; ++n) {
                        var g = V[32][n],
                        h = ~~(g / 4);
                        if (3 > d && 2 <= k && h == 9 * d + k - 2 || 3 > d && 1 <= k && h == 9 * d + k - 1 || h == 9 * d + k || 3 > d && 7 >= k && h == 9 * d + k + 1 || 3 > d && 6 >= k && h == 9 * d + k + 2)
                            h |= K.ub(g) << 8, m[h] ? m[h].push(g) : m[h] = [g]
                    }
                    n = 0;
                    c = {
                        2360326: {
                            tag: "N"
                        }
                    };
                    b & 8 && (c[2360328] = {
                            tag: "N",
                            type: 6
                        });
                    g = m[0 | 9 * d + k] || [];
                    h = m[256 | 9 * d + k] || [];
                    b & 2 && 3 == g.length + h.length && (M.va(u[409604], a(I(180)) + " ", 4, .8, (h.length ? h : g)[0]), c[2098693] = c[409604] = {
                            tag: "N",
                            type: 2
                        }, ++n);
                    b & 1 && (1 == h.length && 2 == g.length ? (c[409606] = [g[0], g[1]], c[409607] = [h[0], g[0]], n +=
                            2) : 2 <= g.length ? (c[409607] = [g[0], g[1]], ++n) : 1 == h.length && 1 == g.length && (c[409607] = [h[0], g[0]], ++n));
                    if (b & 4)
                        for (var l = 0; 3 > l; ++l) {
                            var z = (l & 1) << 8,
                            C = (l & 2) << 7;
                            (g = m[z | 9 * d + k - 2]) && (h = m[C | 9 * d + k - 1]) && (c[l ? 409614 : 409610] = [g[0], h[0]], ++n);
                            (g = m[z | 9 * d + k - 1]) && (h = m[C | 9 * d + k + 1]) && (c[l ? 409613 : 409609] = [g[0], h[0]], ++n);
                            (g = m[z | 9 * d + k + 1]) && (h = m[C | 9 * d + k + 2]) && (c[l ? 409612 : 409608] = [g[0], h[0]], ++n)
                        }
                    c[409607] && !c[409606] && (c[409606] = c[409607], delete c[409607]);
                    c[409614] && !c[409610] && (c[409610] = c[409614], delete c[409614]);
                    c[409613] &&
                    !c[409609] && (c[409609] = c[409613], delete c[409613]);
                    c[409612] && !c[409608] && (c[409608] = c[409612], delete c[409612]);
                    e();
                    u.R(1024);
                    ec.o(0, u[2360326]);
                    u[2098693].parentNode.style.visibility = 1 == n ? "" : "hidden";
                    u[3671045].parentNode.style.visibility = 1 < n ? "" : "hidden";
                    1 == n && (u[2098693].innerHTML = b & 4 ? I(183) : b & 1 ? I(182) : b & 2 ? I(184) : "?");
                    b && xb(8, 0, 0)
                }
            },
            zc: function (b) {
                if (1 == D.a || 4 == D.a)
                    c = {
                        2360326: {
                            tag: "N"
                        }
                    },
                b & 8 && (c[2360328] = {
                        tag: "N",
                        type: 6
                    }),
                e(),
                u.R(1024),
                ec.o(0, u[2360326]),
                u[2098693].parentNode.style.visibility = u[3671045].parentNode.style.visibility =
                    "hidden",
                b && xb(8, 0, 0)
            },
            K: function (b) {
                ec.Z();
                u.R(256);
                nc();
                4 == D.a ? A.ac(c[b]) : W.K(c[b])
            }
        }
    }
    ();
    function pc(a) {
        var e = ~~a.m,
        c = e & 3,
        b;
        if (e & 4) {
            a[2] = 3;
            b = (e & 64512) >> 10;
            var f = b % 3;
            b = ~~(b / 3);
            b = 4 * (9 * ~~(b / 7) + b % 7);
            b = [b + 0 + ((e & 24) >> 3), b + 4 + ((e & 96) >> 5), b + 8 + ((e & 384) >> 7)];
            b.splice(0, 0, b.splice(f, 1)[0])
        } else
            e & 24 ? (a[2] = e & 16 ? 5 : 1, a[4] = (e & 96) >> 5, b = (e & 65024) >> 9, f = b % 3, b = 4 * ~~(b / 3), b = [b + 0, b + 1, b + 2, b + 3], a[4] = b.splice(a[4], 1)[0], b.splice(c ^ 3, 0, b.splice(f, 1)[0]), e & 16 && (b = [a[4]])) : e & 32 ? (a[2] = 10, b = [(e & 65280) >> 8]) : 0 == c ? (a[2] = 4, b = (e & 65280) >> 8 & -4, b = [b + 2, b + 0, b + 1, b + 3]) : (a[2] = 2, e = (e & 65280) >> 8, b = e & -4, b = [b + 0, b + 1, b + 2, b + 3], b.splice(e &
                    3, 1), b.splice(1 == c ? 3 : c ^ 3, 0, e));
        a[3] = c;
        a[0] = b
    };
    var u = function () {
        function a(b, a, c) {
            var d = u[b];
            c ? d.innerHTML = "<span class=nobr style='pointer-events:none;" + (u.l[b] ? "" : "color:#888;") + "'>" + (u.l[b] ? "" : "") + a + "</span>" : (d.innerHTML = "<span style='pointer-events:none;" + (u.l[b] ? "" : "color:#888;") + "'>" + a + "<br>" + (u.l[b] ? "" : "") + "</span>", d.parentNode.style.fontSize = "85%")
        }
        function e(b) {
            b && (u.l[b] = !u.l[b]);
            var d = H.desktop & 1;
            a(1183749, I(157), d);
            a(1183750, I(158), d);
            a(1183751, I(159), d);
            a(1183752, I(160), d);
            a(1183753, I(161), d);
            1183750 == b &&
            u.l[1183750] && (V.mb(0), V.lb())
        }
        function c(b) {
            b && (u.l[b] = !u.l[b]);
            a(1277961, I(162));
            a(1277957, I(163));
            a(1277960, I(164));
            a(1212429, I(165));
            H.check = H.check & -16 | (u.l[1277961] ? 0 : 1) | (u.l[1277957] ? 0 : 2) | (u.l[1277960] ? 0 : 4) | (u.l[1212429] ? 8 : 0);
            1212429 == b && (K.a = H.check & 8 ? 3 : ~~H.yama, 0 == K.a && H.desktop && (K.a = 1), Hb());
            b && (3 == D.a && yb.Oa(0), 2 == D.a && Bb.wb())
        }
        function b(b) {
            for (var a = 1; a < arguments.length; ++a)
                arguments[a].parentNode.style.visibility = b
        }
        return {
            b: nb("DIV", Pb, "nosel", {}, {
                position: "absolute",
                display: "none",
                color: "#FFF",
                fontFamily: "icons2,sans-serif",
                fontSize: "140%"
            }),
            a: 0,
            l: {},
            ha: function () {
                for (var b = [2360326, "&times;", 2098693, "", 3670533, " " + I(150), 3671045, " " + I(150), 1572868, "", 3678213, "&times;", 3686405, "&times;", 1675268, "&times;", 2359816, I(151), 2360328, I(152), 2359814, I(153), 401414, "", 401415, "", 401418, "", 401419, "", 2359815, I(154), 401412, "", 401416, "", 401417, "", 409610, "", 409609, "", 409608, "", 409614, "", 409613, "", 409612, "", 409606, "", 409607, "", 409604, "", 1574918, "", 1574917, "", 425995,
                        "?", 495623, I(156), 1183749, "", 1183750, "", 1183751, "", 1183752, "", 1183753, "", 1277961, "", 1277957, "", 1277960, "", 1212429, "", 1802246, I(167) + " <span style='font-size:25%;vertical-align:50%;'>▼</span>", 1736714, I(168) + " <span style='font-size:25%;vertical-align:50%;'>▼</span>", 1736718, I(169) + " <span style='font-size:25%;vertical-align:50%;'>▼</span>", 1736716, I(155) + " <span style='font-size:25%;vertical-align:50%;'>▼</span>"], a = 0; a < b.length; a += 2) {
                    var c = b[a + 0],
                    e = nb("DIV", u.b, "tbl", {}, {
                        position: "absolute"
                    });
                    u[c] = nb("DIV", e, "tbc" + (c & 2097152 ? " bblink" : ""), {
                        id: "m" + c,
                        innerHTML: b[a + 1]
                    }, {
                        textAlign: "center",
                        verticalAlign: "middle",
                        pointerEvents: "none"
                    });
                    c & 262144 && (e.style.display = "none");
                    c & 524288 && (u[c].style.borderRadius = "0.6em")
                }
                b = H.check;
                u.l[1277961] = !(b & 1);
                u.l[1277957] = !(b & 2);
                u.l[1277960] = !(b & 4);
                u.l[1212429] = !!(b & 8);
                u[1572868].classList.add("cblink")
            },
            R: function (a) {
                u.a = 126976 == a ? u.a & 3840 : a & 126976 ? a | u.a & 3840 : a | u.a & 102400;
                a = u.a & 126976 ? u.a & 126976 : u.a & 3840;
                256 == a && 3 == D.a && (a = 2048);
                for (var d in u)
                    if (1572868 !=
                        d) {
                        var f = u[d];
                        f != u.b && f.tagName && (f.parentNode != u.b && (f = f.parentNode), f.style.display = !a || ~d & a ? "none" : "")
                    }
                u[1572868].parentNode.style.display = u.a & 126976 ? "none" : "";
                d = H.desktop & 1;
                if (4096 == a || d)
                    e(), b(1 == D.a && ~D.v & 1 ? "" : "hidden", u[495623]), b("hidden", u[1183751]);
                32768 == a || 65536 == a ? (b(!pa && t.kb ? "hidden" : "", u[495623]), c()) : 256 == a && b("hidden", u[2360326]);
                qc.Sa && qc.Sa();
                if (1 == D.a && d) {
                    u[1572868].parentNode.style.display = "none";
                    a = [u[495623], u[1183749], u[1183750], u[1183752], u[1183753]];
                    for (d = 0; d < a.length; ++d)
                        a[d].parentNode.style.display =
                            "";
                    e()
                }
            },
            L: function () {
                u.b.style.left = Xb.offsetLeft + "px";
                u.b.style.top = Xb.offsetTop + "px";
                var b = ~~(R[82] / r),
                a = ~~(R[81] / r),
                c = ~~((R[82] - R[86] - N[1]) / 4 / r),
                e = ~~((R[81] - R[33]) / 2.5 / r),
                e = Math.max(e, ~~((U[4] + T[4]) / r));
                3 == D.a && (Pb.offsetHeight < Pb.offsetWidth ? b = ~~(Vb / r) + ~~(.5 * c) : a = ~~(Wb / r) + e);
                var n = H.desktop & 1,
                g;
                for (g in u) {
                    var h = u[g];
                    if (h != u.b && h.parentNode) {
                        var l = h.style;
                        h.parentNode.parentNode == u.b && (l = h.parentNode.style);
                        var z = ((g & 3) >> 0) + 1,
                        C = (g & 12) >> 2;
                        n && 2360326 == g && (z = 1);
                        l.left = b - c * z + "px";
                        l.top = a - e * C + "px";
                        l.width = c + "px";
                        l.height = e + "px";
                        l.fontSize = "";
                        h.style.border = "solid 1px " + (g & 131072 ? "#222" : "rgba(0,0,0,0.25)");
                        g & 131072 ? (h.classList.remove("ts0"), h.classList.add("bgb")) : (h.classList.remove("bgb"), h.classList.add("ts0"))
                    }
                }
                if (1 == D.a) {
                    if (g = [u[1183749], u[1183753], u[1183752], u[1183751], u[1183750], null, u[495623]], n)
                        for (c = ~~(Vb / r / 8), e = ~~(U[1] / r), b = (R[80] + 13 * N[4]) / r + P.s.canvas.offsetLeft, a = Xb.offsetHeight - 1 * e, n = 0; n < g.length; ++n)
                            g[n] && (l = g[n].parentNode.style, l.left = b - c * (n + 1) + "px", l.top = a + "px", l.width = c +
                                    "px", l.height = e + "px", l.fontSize = "50%", g[n].classList.remove("bgb"), g[n].classList.add("ts0"), g[n].style.borderStyle = "none")
                } else
                    3 == D.a && (u[1574918].style.borderColor = u[1574917].style.borderColor = u[1572868].style.borderColor = 3 == D.a ? "#444" : "rgba(0,0,0,0.25)", Pb.offsetHeight < Pb.offsetWidth && (n = ~~(1.5 * e), c = ~~(.5 * c), Pb.offsetWidth < b && (b = ~~Pb.offsetWidth, c = Pb.offsetWidth - ~~(Vb / r)), l = u[1574918].parentNode.style, l.width = c + "px", l.height = n + "px", l.left = b - 1 * c + "px", l.top = a - e - 2 * n + "px", l = u[1574917].parentNode.style,
                            l.width = c + "px", l.height = n + "px", l.left = b - 1 * c + "px", l.top = a - e - 1 * n + "px", l = u[1572868].parentNode.style, l.width = c + "px", l.height = e + "px", l.left = b - 1 * c + "px", l.top = a - e - 0 * n + "px"))
            },
            la: function (b, a) {
                switch (b) {
                case 2360326:
                    ec.Pb();
                    break;
                case 409606:
                case 409607:
                case 409604:
                case 409610:
                case 409609:
                case 409608:
                case 409614:
                case 409613:
                case 409612:
                case 401412:
                case 401416:
                case 401417:
                case 401414:
                case 401415:
                case 401418:
                case 401419:
                case 2359815:
                case 2360328:
                case 2359816:
                case 2359814:
                case 2098693:
                    oc.K(b);
                    break;
                case 3670533:
                    u.R(8192);
                    break;
                case 3671045:
                    u.R(16384);
                    break;
                case 1572868:
                    4 == D.a ? A.Mb(1) : u.R(3 == D.a ? 32768 : 2 == D.a ? 65536 : 4096);
                    break;
                case 3678213:
                case 3686405:
                case 1675268:
                    u.R(126976);
                    break;
                case 1574917:
                    yb.Oa(1);
                    break;
                case 1574918:
                    yb.Oa(-1);
                    break;
                case 1802246:
                    u.R(126976);
                    for (var d = "", f = 0; 4 > f; ++f)
                        D.H[f] && (d += "<div class='A" + (0 == f ? " _selected_" : "") + "' id='#tw-" + f + "'><span class=dan" + ~~D.Va[f] + ">" + ba[~~D.Va[f]] + "</span>" + (1800 < D.Ra[f] ? "R" + ~~D.Ra[f] : "") + "　" + D.H[f] + "</div>");
                    !1 === u.l[14] && (d += "<div class=A id='#tw-4'>(" + I(166) +
                        " ON)</div>");
                    !0 === u.l[14] && (d += "<div class=A id='#tw-4'>(" + I(166) + " OFF)</div>");
                    x.Y(d, "font-size:75%;text-align:left;", 0);
                    break;
                case 1736718:
                    u.R(126976);
                    yb.$b();
                    break;
                case 1736714:
                    u.R(126976);
                    yb.Zb();
                    break;
                case 1183749:
                case 1183750:
                case 1183751:
                case 1183752:
                case 1183753:
                    e(b);
                    break;
                case 1277961:
                case 1277957:
                case 1277960:
                case 1212429:
                    c(b);
                    break;
                case 1736716:
                    if (3 != D.a)
                        break;
                    u.R(126976);
                    x.Y("<div class=A id='#edit-T'>TRANING editor</div><div class=A id='#edit-M'>MJLOG editor</div>", "", 0);
                    break;
                case 425995:
                    3 ==
                    D.a && x.o("<div style='text-align:left;font-size:75%;'>" + I(205) + "</div>");
                    break;
                case 495623:
                    if (t.kb) {
                        location.reload();
                        break
                    }
                case 11:
                    u.R(126976),
                    -1 != D.ma && (t.kb || (delete t.log, delete t.wg), yb.fa(), Bb.fa(), D.fa()),
                    u.l[14] = !1,
                    D.a = 0,
                    t.log ? (D.a = 3, W.Z()) : t.wg ? D.a = 2 : (u.b.style.display = "none", D.a = 1),
                    Hb(),
                    a ? A.o({
                        tag: "SPLASH"
                    }) : t.log ? (yb.vc(t.log), u.L(), S.L()) : t.wg ? (W.qb(), W.K({
                            tag: "HELO",
                            name: "NoName",
                            sx: "M"
                        })) : (W.qb(), A.o({
                            tag: 495623 == b ? "AUTOLOGIN" : "LOGIN"
                        }))
                }
            }
        }
    }
    ();
    var ec = function () {
        var a,
        e,
        c,
        b,
        f,
        d,
        k = nb("DIV", null, "nosel tbl ts0", {}, {
            position: "absolute",
            pointerEvents: "none",
            fontFamily: "sans-serif",
            textAlign: "right"
        });
        k.innerHTML = "<div class=tbc style='vertical-align:bottom;padding:0 0.1em;'></div>";
        return {
            Ic: function (b) {
                e = c = b
            },
            o: function (c, n, g) {
                k.firstChild.innerHTML = "";
                n || (n = Z.ok);
                ec.L(n, g);
                1 == D.a && (("BUTTON" == d.tagName ? d.parentNode : d instanceof kc ? Xb : d).appendChild(k), a = 0 > c ? -c + 1E3 : (c || (ia(D.hb, D.v) ? 3E3 : 5E3)) + e + 1E3, f = a - 1E3, b = a - 1E3, hc().count = function (d) {
                    if (0 >
                        b)
                        return ec.Z(), !1;
                    a -= d;
                    if (0 <= a && ~~(1 + b / 1E3) == ~~(1 + a / 1E3))
                        return !0;
                    b = a;
                    0 <= a ? (0 > c ? xb(1E3 > a ? 0 : 3, 0, 0) : 3E3 > a && xb(7, 0, 0), k.firstChild.innerText = ~~(a / 1E3)) : ec.Pb();
                    return !0
                })
            },
            L: function (b, a) {
                b && (d = b);
                d instanceof kc && ~d.aa & 1 && (d = void 0);
                if (!d)
                    for (var c = 13; (d = R[1024 | c]) && !(d.u && R[1024 | c].aa & 1); --c);
                d && (c = k.style, c.fontSize = cb.style.fontSize, d instanceof kc ? (c.left = ~~((a ? d.c : d.I) / r) + P.s.canvas.offsetLeft + "px", c.top = ~~((a ? d.h : d.J) / r) + "px", c.width = ~~(N[4] / r) + "px", c.height = ~~((U[4] + T[4]) / r) + "px") : (c.left = d.offsetLeft +
                            "px", c.top = d.offsetTop + "px", c.width = (d.offsetWidth || parseInt(d.parentNode.style.width)) + "px", c.height = (d.offsetHeight || parseInt(d.parentNode.style.height)) + "px"))
            },
            Pb: function () {
                if (d instanceof kc)
                    D.Jb(d.S);
                else if (d && d.name) {
                    if (!d.disabled)
                        A[d.name]()
                } else
                    ec.Z(), oc.K(2360326)
            },
            Yb: function () {
                e < c && (e += 1E3)
            },
            Hc: function () {
                return d
            },
            Z: function () {
                k.parentNode && (a < e && (e = 1E3 * ~~(0 > a ? 0 : a / 1E3)), f < a && ec.Yb(), b = -1, k.parentNode.removeChild(k), d = void 0)
            }
        }
    }
    ();
    for (var S = {
            b: nb("DIV", Xb, "", {}, {
                position: "absolute"
            }),
            L: function () {
                var a = S.b.style,
                e = N[4] / r,
                c = ~~Math.min(~~(2 * e), (Pb.offsetHeight - Wb / r) / 2);
                3 == D.a && (c = 0);
                if (mb || c < e || H.desktop & 1)
                    S.b.style.display = "none";
                else
                    switch (a.top = Xb.offsetTop + (R[81] + U[4] + T[4]) / r + "px", a.display = "", ~~H.cptype) {
                    default:
                    case 1:
                        var b = Math.min(2.25 * c, Pb.offsetHeight - Xb.offsetHeight);
                        a.width = Xb.offsetWidth + "px";
                        a.height = b + "px";
                        a.background = "linear-gradient(to bottom, rgba(0,0,0,1.0) 0%,rgba(0,0,0,1.0) 50%,rgba(24,24,24,1.0) 100%)";
                        a.borderTop = a.borderBottom = "solid 1px #222";
                        for (var f = 0; 13 >= f; ++f)
                            S[f].style.display = "none";
                        for (f = 20; 28 >= f; ++f)
                            a = S[f].style, a.top = "0px", a.width = 3 * e + "px", a.height = b - c + "px", a.display = "";
                        S.Gb(0);
                        S[30].style.display = S[31].style.display = "none";
                        a = S[30].style;
                        a.width = "50%";
                        a.height = 1 * c + "px";
                        a.display = "";
                        a.marginTop = b - c + "px";
                        a = S[31].style;
                        a.width = "50%";
                        a.height = 1 * c + "px";
                        a.display = "";
                        a.marginTop = b - c + "px";
                        S[30].innerHTML = "&#12296;";
                        S[31].innerHTML = "&#12297;";
                        S[30].name = "CP_L";
                        S[31].name = "CP_R";
                        break;
                    case 2:
                        b =
                            2 * e;
                        a.width = 7.5 * b + 1 + "px";
                        a.height = 2 * c + 1 + "px";
                        a.background = "";
                        a.borderTop = a.borderBottom = "none";
                        for (var d = V[32], d = d && d.length ? 3 * ~~(d.length / 3) + 1 : 13, f = 20; 28 >= f; ++f)
                            S[f].style.display = "none";
                        for (f = 0; 13 >= f; ++f)
                            a = S[f].style, a.width = b + 1 + "px", a.height = c + 1 + "px", a.top = c * (f & 1) + "px", a.left = R[80] / r + e * f + "px", a.display = f < d ? "" : "none";
                        S[30].style.display = S[31].style.display = "none"
                    }
            },
            Ua: function (a, e, c) {
                var b = R[1024 | a];
                if (b && (b.na(e, c, !0), !(b.aa & 8))) {
                    c = !!(b.aa & 1) && b.u;
                    if (!S[20].style.display) {
                        var f = N[4] / r;
                        b.aa & 6 &&
                        S.Kb(R[80] / r + f * (a + .5))
                    }
                    f = "";
                    b.aa & 4 ? (c && ec.L(b), f = c ? "#060" : "#600") : b.aa & 2 && (f = c ? "#030" : "#300");
                    !f && e & 6 || (S[0 + a].style.backgroundColor = S[24].style.backgroundColor = f)
                }
            },
            Kb: function (a) {
                var e = N[4] / r;
                a < R[80] / r + 0 * e && (a += 3 * e);
                R[80] / r + 14 * e < a && (a -= 3 * e);
                a = (~~((a - R[80] / r) / e) + .5) * e + R[80] / r;
                for (var c = 20; 28 >= c; ++c)
                    S[c].style.left = ~~(a + 3 * e * (c - 24 - .5))
                         + "px";
                    return a
                },
                Gb: function (a) {
                    S.Kb(~~(S[24].offsetLeft + S[24].offsetWidth / 2 + N[4] / r * a))
                }
            }, rc = 0; 13 >= rc; ++rc)S[rc] = nb("DIV", S.b, "", {}, {
            position: "absolute",
            border: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.15) 100%)"
        }), nb("DIV", S[rc], "", {}, {
            width: "50%",
            height: rc & 1 ? "25%" : "20%",
            backgroundColor: rc & 1 ? "#333" : "#555",
            pointerEvents: "none"
        });
    S[13].parentNode.removeChild(S[13]);
    for (rc = 20; 28 >= rc; ++rc)
        S[rc] = nb("DIV", S.b, "", {}, {
            position: "absolute",
            borderLeftStyle: "none",
            borderLeft: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.10) 100%)"
        }), nb("DIV", S[rc], "", {}, {
            position: "absolute",
            marginLeft: "50%",
            width: "1px",
            height: "50%",
            pointerEvents: "none",
            background: "linear-gradient(to bottom, rgba(195,0,0,1.0) 0%,rgba(255,0,0,1.0) 10%,rgba(0,0,0,0) 100%)"
        });
    S[28].style.borderRight = "solid 1px #333";
    S[30] = nb("BUTTON", S.b, "gray", {
        name: "CPda"
    }, {
        background: "none"
    });
    S[31] = nb("BUTTON", S.b, "gray", {
        name: "CPok"
    }, {
        background: "none"
    });
    S[30].style.borderRight = "none";
    function xb() {}
    function sc() {}
    function tc() {}
    var jc = function () {
        var a = {};
        return function (e, c, b) {
            if (arguments.length) {
                for (var f in a)
                    if (a[f] == e && b - .008 < f && f < b + .008)
                        return;
                a[b] = e;
                xb(e, c, b)
            } else
                a = {}
        }
    }
    ();
    q.AudioContext = q.AudioContext || q.webkitAudioContext;
    (function () {
        function a(b) {
            va(ab, "touchend", b);
            va(ab, "mousedown", b)
        }
        if (AudioContext) {
            var e = {},
            c = new AudioContext,
            b,
            f,
            d = function () {
                xb = function (a, d, g) {
                    if ("0" != H.sevol && !$b.$ && 0 != a && b)
                        if (e[a])
                            d = c.createBufferSource(), d.buffer = e[a].Ob, d.connect(b), d.start ? d.start(c.currentTime + g) : d.noteOn(c.currentTime + g);
                        else
                            switch (a) {
                            case 12:
                                xb(25, d, g);
                                xb(38, d, g);
                                break;
                            case 13:
                                xb(26, d, g);
                                xb(38, d, g);
                                break;
                            case 14:
                                xb(27, d, g);
                                xb(38, d, g);
                                break;
                            case 15:
                                xb(28, d, g);
                                xb(38, d, g);
                                break;
                            case 16:
                                xb(29, d, g);
                                xb(38, d, g);
                                break;
                            case 17:
                                xb(30,
                                    d, g);
                                xb(38, d, g);
                                break;
                            case 18:
                                xb(31, d, g);
                                xb(39, d, g);
                                break;
                            case 19:
                                xb(32, d, g);
                                xb(39, d, g);
                                break;
                            case 20:
                                xb(33, d, g);
                                xb(37, d, g);
                                break;
                            case 21:
                                xb(34, d, g);
                                xb(37, d, g);
                                break;
                            case 22:
                                xb(35, d, g);
                                xb(37, d, g);
                                break;
                            case 23:
                                xb(36, d, g),
                                xb(37, d, g)
                            }
                }
            },
            k = 0,
            m = function (b, a) {
                ++k;
                var g = new XMLHttpRequest;
                g.open("GET", b, !0);
                g.responseType = "arraybuffer";
                g.onload = function () {
                    200 == this.status && c.decodeAudioData(this.response, function (b) {
                        for (var c in a)
                            e[a[c]].Ob = b;
                        --k || d()
                    })
                };
                g.send()
            };
            fb && nb("AUDIO", cb, "", {}, {
                position: "absolute",
                display: "none"
            });
            sc = function () {
                b.gain.value = ~~(H.sevol || 5) / 10
            };
            a(function () {
                var a = ~~(H.sevol || 5) / 10;
                b = c.createGain ? c.createGain() : c.createGainNode();
                b.connect(c.destination);
                b.gain.value = a;
                f = c.createGain ? c.createGain() : c.createGainNode();
                f.connect(c.destination);
                f.gain.value = 0
            });
            var n = function () {
                var b = {},
                a;
                for (a in e)
                    (b[e[a].url] = b[e[a].url] || []).push(a);
                for (var d in b)
                    m(d, b[d])
            };
            tc = function () {
                var b = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 25, 27, 29, 31, 33, 35, 26, 28, 30, 32, 34, 36, 37, 38, 39, 24, 40, 41],
                a;
                for (a in b)
                    e[b[a]] = {
                        Ob: void 0,
                        url: "https://cdn.tenhou.net/3/res/snd/" + Ya(2, b[a]) + ".wav"
                    };
                e[40].url = e[41].url = e[1].url;
                var d = H.se;
                qb(d) ? Va(d, function (b) {
                    try {
                        d = JSON.parse(b)
                    } catch (oa) {
                        alert(oa)
                    }
                    for (var a in d.se)
                        e[a] && (e[a].url = d.se[a].url);
                    n()
                }, function (b) {
                    console.log("err", b);
                    n()
                }) : n()
            };
            tc()
        } else {
            var g = {};
            g[1] = g[8] = g[9] = g[10] = g[12] = g[13] = g[14] = g[15] = g[16] = g[17] = g[18] = g[19] = g[20] = g[21] = g[22] = g[23] = g[24] = 1;
            for (var h = 5, l = function () {
                this.currentTime && (this.removeEventListener("timeupdate", arguments.callee, !1), this.pause(),
                    ta(this, "timeupdate", function () {
                        this.endTime < this.currentTime && (this.pause(), this.Ib = 0)
                    }), --h || (xb = function (b, a, d) {
                        if (40 == b || 41 == b)
                            b = 1;
                        "0" == H.sevol || $b.$ || 0 == b || setTimeout(function () {
                            for (var a = 0; 5 > a && (h = (h + 1) % 5, !C[h].paused && g[C[h].Ib] && !g[b]); ++a);
                            5 != a && (a = C[h], a.paused || a.pause(), a.currentTime = 2 * b, a.endTime = 2 * b + (1 == b ? 3 : 1), a.Ib = b, a.play())
                        }, 1E3 * d)
                    }))
            }, z = ~~(H.sevol || 5) / 10, C = [], w = 0; 5 > w; ++w)
                C[w] = nb("AUDIO", cb, "", {
                    src: "https://cdn.tenhou.net/3/res/snd/se.m4a"
                }, {
                    position: "absolute",
                    display: "none"
                }), C[w].endTime =
                    0, C[w].Ib = 0, C[w].volume = z, ta(C[w], "timeupdate", l);
            sc = function () {
                for (var b = ~~(H.sevol || 5) / 10, a = 0; a < C.length; ++a)
                    C[a].volume = b
            };
            a(function () {
                for (var b = 0; b < C.length; ++b)
                    C[b].play()
            });
            tc = function () {
                H.se && x.o(I(0))
            }
        }
    })();
    if (q.gr && q.gr.eworx && q.gr.eworx.AVAudioSessionAdapter) {
        var uc = gr.eworx.AVAudioSessionAdapter;
        (new uc).setCategoryWithOptions(uc.Categories.PLAYBACK, uc.CategoryOptions.MIX_WITH_OTHERS, function () {}, function () {})
    };
    var ac = function () {
        var a = {
            M: [0, 12, 14, 16, 14, 14, 20, 22, 18, 0, 9, 0],
            F: [0, 13, 15, 17, 15, 15, 21, 23, 19, 0, 9, 0]
        };
        a[""] = a.C = a.M;
        var e = {};
        return {
            b: nb("DIV", Pb, "", {}, {
                position: "absolute",
                pointerEvents: "none",
                top: "0px"
            }),
            O: function (c, b, f) {
                if (!$b.$) {
                    var d = I(190)[b];
                    if (d) {
                        var k = 10 * -c,
                        m = nb("SPAN", ac.b, "tsv nosel", {
                            innerHTML: d
                        }, {
                            position: "absolute",
                            fontWeight: "bold",
                            color: "#FFF",
                            opacity: 0,
                            whiteSpace: "nowrap"
                        }),
                        n = Xb.offsetWidth / 40,
                        g = ~~(R[64 + 2 * c] / r) + Xb.offsetLeft + P.s.canvas.offsetLeft,
                        h = ~~(R[65 + 2 * c] / r) + Xb.offsetTop,
                        l = m.style,
                        z = $a++;
                        f & 1 && (e[z] = !0);
                        ~f & 2 && (l.display = "none");
                        hc()[z] = function (d) {
                            if (!m.parentNode)
                                return 0;
                            if (0 > k)
                                return k += d, 0 < k && (k = 0), 1;
                            0 == k && f & 4 && (xb(a[D.Ta[c]][b], c, 0), ++k);
                            k += d;
                            if (250 > k)
                                return l.opacity = k / 250, l.fontSize = n * (4 + (250 - k) / 250 * 4) + "px", l.left = g - m.offsetWidth / 2 + "px", l.top = h - m.offsetHeight / 2 + "px", 1;
                            if (750 > k) {
                                if (1 == l.opacity)
                                    return 1;
                                l.opacity = 1;
                                l.fontSize = 4 * n + "px";
                                l.left = g - m.offsetWidth / 2 + "px";
                                l.top = h - m.offsetHeight / 2 + "px";
                                return 1
                            }
                            return e[z] ? (k -= d, 1) : 1250 > k ? (l.opacity = (1250 - k) / 500, 1) : (m.parentNode.removeChild(m),
                                0)
                        }
                    }
                }
            },
            fa: function () {
                for (; ac.b.firstChild; )
                    ac.b.removeChild(ac.b.firstChild)
            },
            Cb: function () {
                e = {}
            }
        }
    }
    ();
    var vc = function () {
        function a() {
            e = 0
        }
        var e = 0,
        c;
        ua(q, {
            touchstart: a,
            touchend: a,
            touchcancel: a,
            mousedown: a,
            mouseup: a,
            mouseover: a,
            mouseout: a,
            keydown: a,
            blur: a
        });
        return {
            Oc: function (b) {
                mb && 2 == D.a && (e = 0);
                e || (e = b);
                b = 36E5 - (b - e);
                0 > b && (location.reload(), e = b = 0);
                2E4 > b ? (c || (c = nb("DIV", Xb, "ts0", {}, {
                            position: "absolute",
                            left: "0px",
                            top: "0px"
                        })), c.innerText = "ENTERING POWERSAVING MODE " + ~~(b / 1E3)) : c && (c.parentNode.removeChild(c), c = null)
            }
        }
    }
    ();
    var yb = function () {
        function a(b) {
            if (b) {
                var d = /<([a-zA-Z0-9]+)[^>]*>|[^<]+|<\/(.*)>/g,
                c = d.exec(b);
                if (c) {
                    var g = {};
                    g.tag = c[1];
                    for (var e = / ([a-zA-Z0-9]+)="([^"]*)"/g, f; f = e.exec(c[0]); )
                        g[f[1]] = f[2];
                    for (; (c = d.exec(b)) && !c[2]; )
                        g.childNodes || (g.childNodes = []), g.childNodes.push(c[1] ? a(c[0]) : ~~c[0]);
                    return g
                }
            }
        }
        function e(b) {
            for (var a = -1, d = k; 0 <= --d; ) {
                switch (f[d].tag) {
                case "INIT":
                    return d + 1;
                case "N":
                    b = f[d][2];
                    if (2 == b || 4 == b || 5 == b)
                        a = -1;
                    break;
                case "D":
                case "E":
                case "F":
                case "G":
                    if (-1 != a)
                        return a;
                    break;
                case "T":
                case "U":
                case "V":
                case "W":
                    b ||
                    (a = d)
                }
                b = !1
            }
            return -1
        }
        function c(b, c) {
            c && (f = a(c).childNodes);
            if (c && f) {
                for (var g = !1, e = 0; 40 > e; ++e) {
                    var h = H["log" + e];
                    try {
                        h = JSON.parse(h)
                    } catch (oa) {
                        continue
                    }
                    if (h.log == b) {
                        g = !0;
                        break
                    }
                }
                g || (u.l[14] = void 0);
                for (var n, e = 0; e < f.length; ++e) {
                    switch (f[e].tag) {
                    case "SHUFFLE":
                        n = K.Cc(f[e].seed);
                        break;
                    case "GO":
                        W.ra(f[e])
                    }
                    if ("UN" == f[e].tag)
                        break
                }
                for (d = []; e < f.length; ++e) {
                    var h = f[e],
                    m = [0, 0, 0, 0],
                    y = e;
                    switch (h.tag) {
                    case "INIT":
                        d.push(e);
                        break;
                    case "RYUUKYOKU":
                        if ("ron3" == h.type)
                            for (g = 0; 4 > g; ++g)
                                h["hai" + g] && (m[g] = 6);
                        break;
                    case "AGARI":
                        for (; h =
                                f[e], m[~~h.who] = h.who == h.fromWho ? 7 : 6, h.paoWho && (m[~~h.paoWho] = 11), e + 1 < f.length && "AGARI" == f[e + 1].tag; ++e);
                        break;
                    case "N":
                        pc(h);
                        m[~~h.who] = h[2];
                        break;
                    default:
                        yb.nb(h)
                    }
                    if (m[0] || m[1] || m[2] || m[3])
                        f.splice(y, 0, {
                            tag: "VOICE",
                            type: m
                        }), ++e
                }
                if (n)
                    for (e = 0; e < d.length; ++e) {
                        var h = f[d[e]],
                        g = p(h.seed),
                        g = 6 == g[3] && 0 == g[4],
                        J;
                        n && (J = h[5] = n(~~h.oya, g));
                        if (J)
                            if (g) {
                                if (D.v & 16)
                                    for (E = 0; 6 > E; ++E)
                                        J[E] |= 1280;
                                for (g = 0; g < (D.v & 16 ? 3 : 4); ++g) {
                                    for (E = 0; 4 > E; ++E)
                                        J[34 * g + E] |= 1280;
                                    for (; 34 > E; ++E)
                                        J[34 * g + E] |= g + 1 << 8
                                }
                                for (var m = 0, E = d[e] + 1; E < f.length &&
                                    "INIT" != f[E].tag; ++E)
                                    h = f[E], "N" != h.tag || 4 != h[2] && 2 != h[2] && 5 != h[2] && 10 != h[2] || (g = ~~h.who, J[m / 4 * 34 + m % 4 ^ 1] |= g + 1 << 8, ++m)
                            } else {
                                for (var da = !1, y = 13 * (D.v & 16 ? 3 : 4), m = 0, g = -1, E = d[e] + 1; E < f.length && "INIT" != f[E].tag; ++E)
                                    switch (h = f[E], h.tag) {
                                    case "N":
                                        da = 4 == h[2] || 2 == h[2] || 5 == h[2] || 10 == h[2];
                                        break;
                                    case "T":
                                    case "U":
                                    case "V":
                                    case "W":
                                        g = h.tag.charCodeAt(0) - 84,
                                        J[da ? m++ ^ 1 : J.length - 1 - y++] |= g + 1 << 8,
                                        da = !1
                                    }
                                for (h = D.v & 16 ? 3 : 4; y < J.length - 14 - m; ++y)
                                    g = (g + 1) % h, J[J.length - 1 - y] |= g + 1 << 8;
                                for (; y < J.length; ++y)
                                    J[J.length - 1 - y] |= 1280
                            }
                    }
                for (e =
                        0; e < f.length; ++e)
                    Bb.vb(t.tw, f[e]);
                for (e = 0; "INIT" != f[e].tag; ++e)
                    switch (f[e].tag) {
                    case "BYE":
                    case "SHUFFLE":
                    case "GO":
                        break;
                    case "UN":
                    case "TAIKYOKU":
                        W.ra(f[e]);
                        break;
                    default:
                        throw console.log(e, f[e]);
                    }
                k = d[~~t.ts];
                delete t.ts
            } else
                x.o(I(2003), 1, function () {
                    t.kb ? location.reload() : delete t.log
                })
        }
        function b(b) {
            var a = b.split("-");
            if (4 != a.length)
                return b;
            if (120 == a[3].charCodeAt(0)) {
                b = parseInt(a[3].substr(1, 4), 16);
                var d = parseInt(a[3].substr(5, 4), 16),
                c = parseInt(a[3].substr(9, 4), 16),
                g = 0;
                "2010041111gm" <= a[0] &&
                (g = ~~("3" + a[0].substr(4, 6)) % (34 - ~~a[0].substr(9, 1) - 1));
                a[3] = Ya(4, (b ^ d ^ n[g + 0]).toString(16)) + Ya(4, (d ^ n[g + 0] ^ c ^ n[g + 1]).toString(16))
            }
            return a.join("-")
        }
        var f,
        d,
        k,
        m = {
            D: !0,
            E: !0,
            F: !0,
            G: !0,
            T: !0,
            U: !0,
            V: !0,
            W: !0,
            N: !0,
            RYUUKYOKU: !0,
            VOICE: !0
        },
        n = [22136, 52719, 55146, 42104, 59591, 46934, 9248, 28891, 49597, 52974, 62844, 4015, 18311, 50730, 43056, 17939, 64838, 38145, 27008, 39128, 35652, 63407, 65535, 23473, 35164, 55230, 27536, 4386, 64920, 29075, 42617, 17294, 18868, 2081];
        return {
            nb: function (b) {
                var a = b.tag;
                if (1 < a.length) {
                    var d = b.tag.charCodeAt(1);
                    48 <= d && 57 >= d && (b[0] = ~~a.substr(1), b.tag = a.substr(0, 1))
                }
                return b
            },
            vc: function (a) {
                a = b(a);
                Va("https://tenhou.net/0/log/?" + a, function (b) {
                    c(a, b)
                }, function () {
                    c(a)
                })
            },
            Oa: function (b) {
                if (f) {
                    if (0 == arguments.length) {
                        for (var a = k; 0 <= a && "INIT" != f[a].tag; --a);
                        if (0 <= a)
                            return yb.Rb(f, a, k - a)
                    } else if (0 >= b) {
                        var c = e(0 > b);
                        if (-1 == c)
                            return;
                        if (0 > b && k == c + 1)
                            for (c = c - 1 == d[0] ? f.length - 1 : c - 2; "AGARI" == f[c - 1].tag; --c);
                        for (var g = [], a = 0; a < d.length && !(c < d[a]); ++a);
                        for (var n = d[a - 1], a = n; a < c; ++a)
                            g.push(f[a]);
                        W.ra(yb.Rb(f, n, c - n));
                        k = c;
                        1 ==
                        c - n && wc.set()
                    } else if (Z.ok && !Z.ok.disabled) {
                        A.ok();
                        return
                    }
                    if (!(f.length <= k))
                        for ($b.Da(), a = !1; !a && k < f.length; ++k) {
                            switch (f[k].tag) {
                            case "REACH":
                                2 != f[k].step && (a = !0);
                                break;
                            case "AGARI":
                                k + 1 < f.length && "AGARI" != f[k + 1].tag && (a = !0);
                                break;
                            default:
                                m[f[k].tag] && (a = !0)
                            }
                            W.ra(f[k])
                        }
                }
            },
            fa: function () {
                k = 0;
                f = void 0
            },
            $b: function (a, b) {
                if (f && f.length)
                    if (a)
                        k = ~~b + 1, yb.Oa(0);
                    else {
                        for (var d = -1, c = k; 0 <= c && (-1 == d && "T" == f[c].tag && (d = c), "INIT" != f[c].tag); --c);
                        if (!(0 > c)) {
                            var g = "",
                            e = 0;
                            for (++c; c < f.length; ++c) {
                                json = f[c];
                                if ("INIT" ==
                                    json.tag)
                                    break;
                                "T" == json.tag && (g += "<div class='A" + (c == d ? " _selected_" : "") + "' id='#tj-" + c + "'>" + ++e + "巡目</div>")
                            }
                            x.Y(g, "", 0)
                        }
                    }
            },
            Zb: function (a, b) {
                if (f && f.length)
                    if (a)
                        k = ~~b + 1, yb.Oa(0);
                    else {
                        for (var d = 0, c = k; 0 <= c; --c)
                            if ("INIT" == f[c].tag) {
                                d = c;
                                break
                            }
                        for (var g = "", e = -1, h = "", c = 0; c < f.length; ++c) {
                            var n = f[c];
                            switch (n.tag) {
                            case "INIT":
                                e = p(n.seed);
                                h = e[0];
                                h = "東南西北".substr(~~(h / 4), 1) + (h % 4 + 1) + v("局") + e[1] + v("本場");
                                e = c;
                                break;
                            case "RYUUKYOKU":
                                var m = ea[n.type],
                                g = g + ("<div class='A" +
                                        (e == d ? " _selected_" : "") + "' id='#ts-" + e + "'>" + h + "<br>流局" + (m ? " " + m : "") + "</div>");
                                break;
                            case "AGARI":
                                var m = ~~n.who,
                                E = ~~n.fromWho,
                                n = p(n.ten),
                                g = g + ("<div class='A" + (e == d ? " _selected_" : "") + "' id='#ts-" + e + "'>" + h + "<br>" + v(m == E ? "ツモ:" : "ロン:") + D.H[m] + " " + n[1] + (m != E ? "<br>" + v("放銃:") + D.H[E] : "") + "</div>")
                            }
                        }
                        x.Y(g, "font-size:70%;text-align:left;", 0)
                    }
            },
            wb: function (a, b) {
                var d = ~~b;
                if (4 == d)
                    u.l[14] = !u.l[14];
                else if (4 > d) {
                    for (var c = 0; c < f.length; ++c)
                        Bb.vb(d, f[c]);
                    t.tw = (t.tw + d) % 4
                }
                for (c =
                        0; c < f.length; ++c)
                    if ("UN" == f[c].tag) {
                        W.ra(f[c]);
                        Yb.X();
                        yb.Oa(0);
                        break
                    }
            },
            Rb: function (a, b, d) {
                var c = a[b];
                if ("INIT" != c.tag)
                    return null;
                for (var g = [], e = p(c.hai0); e.length; )
                    g[e.pop()] = 1;
                for (e = p(c.hai1); e.length; )
                    g[e.pop()] = 2;
                for (e = p(c.hai2); e.length; )
                    g[e.pop()] = 3;
                for (e = p(c.hai3); e.length; )
                    g[e.pop()] = 4;
                for (var h = p(c.seed), f = p(c.ten), e = p(c.chip), l = ~~c.oya, n = c[5], k = [[], [], [], []], m = [[], [], [], []], bb = -1; b < a.length && d; ++b, --d)
                    switch (c = a[b], c.tag) {
                    case "D":
                    case "E":
                    case "F":
                    case "G":
                        var O = c.tag.charCodeAt(0) - 68,
                        Fa = c[0] == bb,
                        bb = c[0];
                        g[bb] = 0;
                        Fa && m[O].push(254);
                        m[O].push(bb);
                        break;
                    case "T":
                    case "U":
                    case "V":
                    case "W":
                        O = c.tag.charCodeAt(0) - 84;
                        bb = c[0];
                        g[bb] = O + 1;
                        break;
                    case "N":
                        for (var bb = -1, O = ~~c.who, Fa = ~~c.m, lb = c[3], Jb = c[0], Wa = 0; Wa < Jb.length; ++Wa)
                            g[Jb[Wa]] = 0;
                        5 != c[2] && 4 != c[2] && 10 != c[2] && (lb = m[(O + lb) % 4], lb.pop(), 254 == lb[lb.length - 1] && lb.pop());
                        if (5 == c[2]) {
                            for (Wa = 0; Wa < k[O].length && k[O][Wa] != (Fa ^ 24); ++Wa);
                            if (Wa == k[O].length)
                                throw console.log("Log2ReiniXML INVALID KAKAN");
                            k[O][Wa] = Fa
                        } else
                            k[O].unshift(Fa);
                        break;
                    case "REACH":
                        O =
                            ~~c.who;
                        Fa = ~~c.step;
                        2 == Fa ? (c = p(c.ten), c.length ? f = c : f[O] -= 10) : (1 == Fa ? m[O].push(255) : (m[O].push(255), f[O] -= 10), ++h[2]);
                        break;
                    case "DORA":
                        h.push(~~c.hai)
                    }
                c = a[b];
                "AGARI" == c.tag && c.who == c.fromWho && (g[~~c.machi] = 0);
                a = {
                    tag: "REINIT",
                    seed: "" + h,
                    ten: "" + f,
                    oya: l,
                    hai0: [],
                    hai1: [],
                    hai2: [],
                    hai3: []
                };
                for (b = 0; 136 > b; ++b)
                    g[b] && a["hai" + (g[b] - 1 & 3)].push(b);
                n && (a[5] = n);
                e.length && (a.chip = e);
                for (O = 0; 4 > O; ++O)
                    k[O].length && (a["m" + O] = k[O]);
                for (O = 0; 4 > O; ++O)
                    m[O].length && (a["kawa" + O] = m[O]);
                return a
            }
        }
    }
    ();
    var xc = {},
    M = function () {
        function a(a, c) {
            var d;
            if (2 == a && 99 == c)
                return M[4195];
            var e = 0,
            g = M[4096 | 100 * a + c];
            g || (g = M[4096 | 100 * a + c] = ua(new Image, {
                    load: P.xb,
                    error: function () {
                        rb("IMAGE ONERROR", e++, this.src);
                        10 > e && setTimeout(function () {
                            g.src = g.src
                        }, 2E3)
                    }
                }));
            d = d || (99 == c ? "" : b);
            var h = N[a];
            1 == a && 99 == c && (h = N[0]);
            8 == a && 99 == c && (h = N[0]);
            var f = qa[11]() + "/5/img/vieww" + a + Ya(2, c) + Ya(3, h) + ("000000ffffff000000" == d ? "" : d) + ".png";
            620 >= N[0] && ("" == d || "000000ffffff000000" == d) && (f = "https://cdn.tenhou.net/3/res/img/20201203/vieww" +
                    a + Ya(2, c) + Ya(3, h) + ".png");
            h && g.src != f && (g.src = f);
            return g
        }
        function e(a, b, c) {
            for (var d = 3; d < arguments.length; ++d) {
                var g = arguments[d],
                e = g >> 8 & 7;
                M[g] = za(M[g] || {}, {
                    za: a,
                    Ya: b % 10 * N[e],
                    Za: (U[e] + T[e]) * ~~(b / 10),
                    ia: N[e],
                    wa: U[e] + T[e],
                    offsetX: 0,
                    offsetY: 0,
                    Sb: c
                });
                if (5 == e || 7 == e)
                    M[g].offsetY += U[e % 4] + T[e % 4] - (U[e] + T[e]);
                5 == e && (M[g].offsetX += N[e % 4] - N[e])
            }
        }
        function c(a, b, c, e, g) {
            for (var d = 5; d < arguments.length; ++d) {
                var f = arguments[d],
                n = f >> 8 & 7;
                xc[f] = za(xc[f] || {}, {
                    za: a,
                    Ya: b,
                    Za: c,
                    ia: e,
                    wa: g,
                    offsetX: yc[n],
                    offsetY: U[n] + T[n] - g
                });
                if (5 == n || 7 == n)
                    xc[f].offsetY += U[n % 4] + T[n % 4] - (U[n] + T[n]);
                5 == n && (xc[f].offsetX += N[n % 4] - N[n])
            }
        }
        var b,
        f;
        return {
            cb: ua(new Image, {
                load: Yb.X,
                error: function () {
                    rb("IMAGE ONERROR", this.src)
                }
            }),
            Jc: function () {
                f = "000100070";
                pb(H.backgroundImage) ? (t.jb = !1, Yb.s.canvas.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.2) 100%),url('" + H.backgroundImage + "') center center /cover no-repeat") : (H.backgroundImage && H.backgroundImage.match(/^([0-9]{9})$/) && (f = H.backgroundImage), t.jb = !0, Yb.s.canvas.style.background =
                        "");
                var d = t.jb ? 0 : 9,
                k = qa[11]() + "/3/img/bg" + d + Ya(4, ~~Vb) + Ya(4, ~~Wb) + f + ".png";
                0 == d && "000100070" == f && (Yb.s.canvas.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.2) 100%),url('https://cdn.tenhou.net/3/res/img/bg0_1280x0960h000s100v070q040.jpg') center center /cover no-repeat", k = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
                M.cb.src != k && (M.cb.src = k);
                b = "000000ffffff000000";
                H.msk && H.msk.match(/^([0-9a-f]{6})$/) && (b = RegExp.$1 + b.substr(6));
                e(a(5, 48), 0, -1, 1328);
                e(a(7, 48), 0, -1, 1840);
                for (k = 0; 4 >= k; ++k) {
                    for (var d = a(k, 0), m = 0; 34 > m; ++m) {
                        var n = 10 * (~~(m / 9) + 1) + m % 9 + 1;
                        e(d, n - 10, m, k << 8 | n)
                    }
                    e(d, 0, 4, k << 8 | 51);
                    e(d, 10, 13, k << 8 | 52);
                    e(d, 20, 22, k << 8 | 53)
                }
                d = M[4096];
                e(d, 30, -1, 48, 560);
                e(d, 38, -1, 49, 561);
                e(d, 39, -1, 50, 562);
                d = M[4196];
                e(d, 30, -1, 304, 816);
                e(d, 38, -1, 305, 817);
                e(d, 39, -1, 306, 818);
                d = M[4296];
                e(d, 30, -1, 1584);
                e(d, 38, -1, 60, 572);
                d = M[4396];
                e(d, 38, -1, 316, 828);
                d = M[4496];
                e(d, 30, -1, 1084);
                e(d, 38, -1, 1073);
                e(d, 39, -1, 1074);
                for (k = 0; 8 > k; k += 2) {
                    d = a(k, 99);
                    m = N[k] + T[k];
                    n = 0;
                    if (0 ==
                        k || 2 == k)
                        n = ~~(47 * m / 43);
                    if (4 == k || 6 == k)
                        n = ~~(24 * m / 43);
                    var g = ~~(T[k] / 12 * 5);
                    c(d, 0, 0, m - yc[k], n, k << 8 | 0);
                    c(d, 0, n - g, 2 * g, g, k << 8 | 3, k << 8 | 2)
                }
                var k = U[1] + T[1],
                m = 2 * ~~(47 * (N[0] + T[0]) / 43),
                n = T[0] / 12,
                g = T[0] + ~~(5 * n),
                h,
                d = a(8, 99);
                h = 0;
                c(d, 0, h + m - U[0], g, U[0], 1, 513);
                c(d, 0, h + ~~(17 * n), g, U[0], 5, 517);
                c(d, 0, h, g, U[0] + ~~(12 * n), 4, 516);
                c(d, 0, h + m - U[1], g, U[1], 257, 769, 1281, 1793);
                c(d, 0, h + ~~(17 * n), g, U[1], 261, 773, 1285, 1797);
                c(d, 0, h, g, U[1] + ~~(12 * n), 260, 772, 1284, 1796);
                d = a(1, 99);
                h = 0;
                c(d, 0, h, g, k, 256, 768, 1280, 1792);
                c(d, 0, h + k - ~~(5 * n), 2 * ~~(5 * n),
                    ~~(5 * n), 259, 771, 1283, 1795, 258, 770, 1282, 1794)
            },
            va: function (a, b, c, e) {
                var d = M[4096 | 100 * c];
                if (d.complete || !d.height) {
                    var f = N[c],
                    l = U[c] + T[c],
                    n = f * (arguments.length - 4),
                    k = 1 * l;
                    a.innerHTML = b + "<canvas width=" + n + " height=" + k + " style='width:" + n / r + "px;height:" + k / r + "px;pointer-events:none;vertical-align:middle;'></canvas>";
                    n = a.getElementsByTagName("CANVAS")[0].getContext("2d");
                    n.clearRect(0, 0, n.canvas.width + 1, n.canvas.height + 1);
                    n.globalAlpha = e;
                    for (k = 4; k < arguments.length; ++k) {
                        var m = arguments[k],
                        B;
                        K.ub(m) ? (B = 0, m =
                                ~~(m / 4 / 9)) : (m = K.Xa[m], 48 == m && (m = 40), B = m % 10, m = ~~(m / 10) - 1);
                        n.drawImage(d, B * f, m * l, f, l, f * (k - 4), 0, f, l)
                    }
                }
            }
        }
    }
    ();
    var Bb = function () {
        function a(a, b) {
            var c = b.split(",");
            8 == c.length ? c = [c[(0 + a) % 4 * 2 + 0], c[(0 + a) % 4 * 2 + 1], c[(1 + a) % 4 * 2 + 0], c[(1 + a) % 4 * 2 + 1], c[(2 + a) % 4 * 2 + 0], c[(2 + a) % 4 * 2 + 1], c[(3 + a) % 4 * 2 + 0], c[(3 + a) % 4 * 2 + 1]] : 16 == c.length && (c = [c[(0 + a) % 4 * 2 + 0], c[(0 + a) % 4 * 2 + 1], c[(1 + a) % 4 * 2 + 0], c[(1 + a) % 4 * 2 + 1], c[(2 + a) % 4 * 2 + 0], c[(2 + a) % 4 * 2 + 1], c[(3 + a) % 4 * 2 + 0], c[(3 + a) % 4 * 2 + 1], c[(0 + a) % 4 * 2 + 8], c[(0 + a) % 4 * 2 + 9], c[(1 + a) % 4 * 2 + 8], c[(1 + a) % 4 * 2 + 9], c[(2 + a) % 4 * 2 + 8], c[(2 + a) % 4 * 2 + 9], c[(3 + a) % 4 * 2 + 8], c[(3 + a) % 4 * 2 + 9]]);
            return c.join(",")
        }
        function e(a) {
            if (!f.length)
                return 0;
            c += a;
            if (c < b)
                return 1;
            a = f.shift();
            a.tag ? W.ra(a) : b += a;
            return 1
        }
        var c,
        b,
        f = [],
        d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        k = ["", "", "", ""],
        m = ["", "", "", ""];
        return {
            vb: function (b, c) {
                if (!b)
                    return c;
                var d = c.tag,
                e = d.charCodeAt(1);
                if (1 == d.length || 48 <= e && 57 >= e)
                    e = d.charCodeAt(0), 78 == e ? c.who = (4 + ~~c.who - b) % 4 : 68 <= e && 71 >= e ? c.tag = "DEFG".substr((4 + (e - 68) - b) % 4, 1) + d.substr(1) : 84 <= e && 87 >= e && (c.tag = "TUVW".substr((4 + (e - 84) - b) % 4, 1) + d.substr(1));
                else
                    switch (d) {
                    case "UN":
                        d = [c.n0, c.n1, c.n2, c.n3];
                        c.n0 =
                            d[(b + 0) % 4];
                        c.n1 = d[(b + 1) % 4];
                        c.n2 = d[(b + 2) % 4];
                        c.n3 = d[(b + 3) % 4];
                        c.dan && (d = c.dan.split(","), c.dan = d.concat(d.splice(0, b)).join(","));
                        c.rate && (d = c.rate.split(","), c.rate = d.concat(d.splice(0, b)).join(","));
                        c.sx && (d = c.sx.split(","), c.sx = d.concat(d.splice(0, b)).join(","));
                        c.rc && (d = c.rc.split(","), c.rc = d.concat(d.splice(0, b)).join(","));
                        c.gold && (d = c.gold.split(","), c.gold = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "TAIKYOKU":
                    case "KANSEN":
                        c.oya = (4 + ~~c.oya - b) % 4;
                        break;
                    case "REINIT":
                        d = [c.m0, c.m1, c.m2, c.m3],
                        c.m0 = d[(b + 0) % 4],
                        c.m1 = d[(b + 1) % 4],
                        c.m2 = d[(b + 2) % 4],
                        c.m3 = d[(b + 3) % 4],
                        d = [c.kawa0, c.kawa1, c.kawa2, c.kawa3],
                        c.kawa0 = d[(b + 0) % 4],
                        c.kawa1 = d[(b + 1) % 4],
                        c.kawa2 = d[(b + 2) % 4],
                        c.kawa3 = d[(b + 3) % 4];
                    case "INIT":
                        c.oya = (4 + ~~c.oya - b) % 4;
                        d = [c.hai0, c.hai1, c.hai2, c.hai3];
                        c.hai0 = d[(b + 0) % 4];
                        c.hai1 = d[(b + 1) % 4];
                        c.hai2 = d[(b + 2) % 4];
                        c.hai3 = d[(b + 3) % 4];
                        d = c.ten.split(",");
                        c.ten = d.concat(d.splice(0, b)).join(",");
                        void 0 != c.chip && (d = c.chip.split(","), c.chip = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "REACH":
                        c.who = (4 + ~~c.who - b) % 4;
                        c.ten && (d =
                                c.ten.split(","), c.ten = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "RYUUKYOKU":
                        d = [c.hai0, c.hai1, c.hai2, c.hai3];
                        c.hai0 = d[(b + 0) % 4];
                        c.hai1 = d[(b + 1) % 4];
                        c.hai2 = d[(b + 2) % 4];
                        c.hai3 = d[(b + 3) % 4];
                        c.sc = a(b, c.sc);
                        void 0 != c.owari && (c.owari = a(b, c.owari));
                        break;
                    case "AGARI":
                        c.who = (4 + ~~c.who - b) % 4;
                        c.fromWho = (4 + ~~c.fromWho - b) % 4;
                        void 0 != c.paoWho && (c.paoWho = (4 + ~~c.paoWho - b) % 4);
                        c.sc = a(b, c.sc);
                        void 0 != c.owari && (c.owari = a(b, c.owari));
                        break;
                    case "VOICE":
                        d = c.type;
                        c.type = d.concat(d.splice(0, b));
                        break;
                    case "BYE":
                        c.who = (4 + ~~c.who -
                            b) % 4
                    }
                if (c.childNodes)
                    for (d = c.childNodes, e = 0; e < d.length; ++e)
                        d[e].tag && Bb.vb(b, d[e]);
                return c
            },
            lc: function (b) {
                if (b = b.childNodes) {
                    $b.$ = !0;
                    for (var a = 0; a < b.length; ++a)
                        W.ra(yb.nb(b[a]));
                    W.ra({
                        tag: "INITBYLOG"
                    })
                } else
                    $b.$ = !1;
                return 1
            },
            qc: function (a) {
                hc().Sc || (c = b = 0, hc().Sc = e);
                a = a.childNodes;
                for (var d = 0; d < a.length; ++d)
                    a[d].tag && yb.nb(a[d]);
                Array.prototype.push.apply(f, a);
                return 1
            },
            Bc: function () {
                for (var a = 0; a < d.length; ++a)
                    d[a] = 0;
                for (a = 0; 4 > a; ++a)
                    m[a] = k[a] = ""
            },
            fa: function () {
                for (; f.length; )
                    f.pop()
            },
            wb: function (a,
                b) {
                if (a) {
                    var c = ~~b;
                    4 == c ? u.l[14] = !u.l[14] : 4 > c && (t.tw = (t.tw + c) % 4)
                }
                Bb.fa();
                D.fa();
                W.qb();
                W.K({
                    tag: "HELO",
                    name: "NoName",
                    sx: "M"
                })
            },
            ec: function (a) {
                var b = "" + V[48 | a];
                if (m[a] != b && (m[a] = b, V[64 | a] = vb.eb(V[48 | a]), b = "" + V[64 | a], k[a] != b)) {
                    k[a] = b;
                    for (a = 0; a < d.length; ++a)
                        d[a] = 0;
                    for (b = 0; 4 > b; ++b)
                        if (V[64 | b])
                            for (a = 0; a < V[64 | b].length; ++a)
                                d[V[64 | b][a]] = 1;
                    for (a = 0; a < R.sa.length; ++a)
                        b = R.sa[a], b.i && b.na && b.na(-1025, d[b.i.Sb] ? 1024 : 0, !0)
                }
            },
            fc: function (a) {
                a.i && a.na && a.na(-1025, d[a.i.Sb] ? 1024 : 0, !0)
            }
        }
    }
    ();
    var Z = {};
    function zc(a, e) {
        for (var c = [a], b = e || {}; c.length; ) {
            a = c.pop();
            for (var f = 0; f < a.childNodes.length; ++f)
                c.push(a.childNodes[f]);
            a.id ? b[a.id] = a : a.name && (b[a.name] = a)
        }
        Z = b
    }
    var A = function () {
        var a,
        e = [],
        c = {
            SPLASH: 1,
            LOGIN: 1,
            LOBBY: 1,
            STORE: 1
        };
        return {
            b: null,
            o: function (b, c) {
                A.b ? "RYUUKYOKU" == a.tag && "OWARI" == b.tag || "AGARI" == a.tag && "OWARI" == b.tag || "AGARI" == a.tag && "AGARI" == b.tag ? e.push(b) : A.Z(b, c) : (a = b, A.b = nb("DIV", Xb, "tbc", {}, {
                        position: "relative",
                        textAlign: "center",
                        verticalAlign: "middle"
                    }), A.b.innerHTML = "<div style='background-color:rgba(0,0,0,0.85);color:#FFF;border:solid 1px #444;padding:1em 0.5em;'></div>", A.L(), A[a.tag](a, A.b.firstChild), c && c())
            },
            L: function () {
                if (A.b) {
                    var b =
                        ~~(N[1] / r);
                    if (b) {
                        c[a.tag] && (b = 0);
                        var e = A.b.style;
                        e.paddingLeft = b + "px";
                        e.paddingRight = ~~(Xb.offsetWidth - Vb / r + b) + "px"
                    }
                }
            },
            Z: function (a, c) {
                function b() {
                    for (var b in Z)
                        delete Z[b];
                    A.b && (A.b.parentNode.removeChild(A.b), A.b = null, Z = {});
                    a instanceof Function ? a() : a && A.o(a);
                    qc.Sa && qc.Sa();
                    c && c()
                }
                A.b && "none" != A.b.style.display ? hc().Vc = Ac(b) : b()
            },
            fa: function () {
                e = []
            },
            nop: function () {},
            ok: function (b) {
                ob(!0, "ok");
                ec.Z();
                e.length ? A.Z(e.shift()) : "TRAINING" == a.tag ? A.Pc(b) : "SPLASH" == a.tag ? u.la(11) : "LOGIN" == a.tag || "AUTOLOGIN" ==
                a.tag ? (H.gpid ? (W.K({
                            tag: "HELO",
                            name: H.uname || "NoName",
                            sx: H.sx || "M",
                            gpid: H.gpid
                        }), H.removeItem("gpid")) : ("ID########-########" != Z.uname.value && Gb("uname", Z.uname.value, "NoName"), W.K({
                            tag: "HELO",
                            name: H.uname || "NoName",
                            sx: H.sx || "M"
                        })), ob(!0, 0)) : "OWARI" == a.tag ? (2 != D.a || t.kb || delete t.wg, u.la(495623)) : "NINTEI" == a.tag ? A.Eb() : (1 == D.a && W.K({
                        tag: "NEXTREADY"
                    }), 3 == D.a && yb.Oa(1))
            },
            exit: function () {
                u.la(495623)
            }
        }
    }
    ();
    za(A, function () {
        function a(a, b) {
            return a ? "<span style='color:" + (0 < a ? "#0FF" : "#F00") + ";'>" + (0 < a ? "+" : "") + a + (void 0 != b ? b : "") + "</span>" : ""
        }
        function e(b, c, e, f) {
            for (var d = b.sc ? p(b.sc) : [], h = [], l = 0; 4 > l; ++l)
                h[l] = "<span style='font-weight:bold;color:#888;'>" + D.gb[l] + "</span> ", d.length || (h[l] += ba[D.Va[l]] + (1800 > D.Ra[l] ? "" : " <span style='color:#888;'>R</span>" + ~~D.Ra[l]) + "<br>"), h[l] += "<span style='font-weight:bold;color:#CCC;'>" + Da(D.H[l]) + "</span><br>";
            l = 2.4;
            if (8 == d.length || 16 == d.length)
                h[0] += 100 * d[0] + (d[1] ?
                    " " + a(100 * d[1]) : ""), h[1] += 100 * d[2] + (d[3] ? " " + a(100 * d[3]) : ""), h[2] += 100 * d[4] + (d[5] ? " " + a(100 * d[5]) : ""), h[3] += 100 * d[6] + (d[7] ? " " + a(100 * d[7]) : "");
            16 == d.length && (++l, h[0] += "<br>" + d[8] + "枚" + (d[9] ? " " + a(d[9], "枚") : ""), h[1] += "<br>" + d[10] + "枚" + (d[9] ? " " + a(d[11], "枚") : ""), h[2] += "<br>" + d[12] + "枚" + (d[9] ? " " + a(d[13], "枚") : ""), h[3] += "<br>" + d[14] + "枚" + (d[9] ? " " + a(d[15], "枚") : ""));
            d = "";
            b.ba && (d = p(b.ba), d = v("") + d[0] + " " + v("") + d[1]);
            return "<table cellpadding=0 cellspacing=0 width=100% style='text-align:center;'><tr><td rowspan=1 style='width:33%;height:" +
            l / 2 + "em;font-family:icons2,sans-serif;'>" + d + "</td><td rowspan=2 style='width:34%;'><div id=sc2 style='height:" + 1 * l + "em;padding:0.2em 0;" + (D.H[2] ? "border:solid 1px #222;'>" + h[2] : "'>") + "</div></td><td rowspan=1 style='width:33%;height:" + l / 2 + "em;' class=gray>" + ka(D.v) + "</td></tr><tr><td rowspan=2><div id=sc3 style='height:" + 1 * l + "em;padding:0.2em 0;" + (D.H[3] ? "border:solid 1px #222;'>" + h[3] : "'>") + "</div></td><td rowspan=2><div id=sc1 style='height:" + 1 * l + "em;padding:0.2em 0;" + (D.H[1] ? "border:solid 1px #222;'>" +
                h[1] : "'>") + "</div></td></tr><tr><td rowspan=2><div id=sc0 style='height:" + 1 * l + "em;padding:0.2em 0;" + (D.H[0] ? "border:solid 1px #222;'>" + h[0] : "'>") + "</div></td></tr><tr><td rowspan=1 id=info0 style='height:" + l / 2 + "em;'>" + (c || "") + "</td><td rowspan=1 id=info2 style='height:" + l / 2 + "em;'>" + (f || "") + "</td></tr><tr><td></td><td rowspan=1 id=info1 style='position:relative;'>" + (e || "") + "</td><td></td></tr></table>"
        }
        function c(b, c) {
            return D.H[c].length ? "<tr><td align=center style='border:solid 1px #222;padding:0.5em;'>" +
            Da(D.H[c]) + "<table cellpadding=0 cellspacing=0 align=center><tr><td align=right style='width:6em;'>" + 100 * b[2 * c + 0] + "</td><td align=right style='width:5em;'>" + a(b[2 * c + 1].toFixed(1)) + "</td>" + (16 == b.length ? "<td align=right style='width:4em;'>" + a(b[2 * c + 8], "枚") + "</td>" : "") + "<td style='width:3em;'></td></tr></table></td></tr>" : ""
        }
        function b(a, b) {
            for (var c, d = 0; c = Z["yaku" + d]; ++d)
                c.childNodes[0].style.opacity = c.childNodes[1].style.opacity = 0;
            Z.sc0.style.opacity = Z.sc1.style.opacity = Z.sc2.style.opacity = Z.sc3.style.opacity =
                Z.total.style.opacity = 0;
            Z.ok.disabled = !0;
            var e = !!a.doraHaiUra;
            e && (Z.info2.style.opacity = 0);
            var f = !!a.yakuman,
            l =  - (f ? 3E3 : 750),
            k = 0;
            hc().Tc = function (a) {
                if (0 > l)
                    return l += a, 0 < l && (l = 0), 1;
                0 == l && xb(f && 0 == k ? 41 : 11, 0, 0);
                var c = Math.min(1, l / (f ? 3E3 : 600)),
                g = Z["yaku" + k];
                g.childNodes[0].style.opacity = g.childNodes[1].style.opacity = c;
                k == d - 1 && (e && (Z.info2.style.opacity = c), Z.sc0.style.opacity = Z.sc1.style.opacity = Z.sc2.style.opacity = Z.sc3.style.opacity = Z.total.style.opacity = c);
                l += a;
                1 == c && (k++, l =  - (~D.v & 2048 && e && k == d - 1 ? 1200 :
                            250));
                return k < d ? 1 : (b(), 0)
            }
        }
        var f = {
            TAIKYOKU: "對局",
            SAIKAI: "再開",
            KANSEN: "觀戰"
        };
        return {
            TAIKYOKU: function (a, b) {
                var c = "TAIKYOKU" == a.tag;
                b.innerHTML = "<div style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'>" + f[a.tag] + "</div>" + e(a, "", c ? "<button name=ok style='padding:0 2em;'>OK</button>" : "<button disabled style='font-size:150%'>" + decodeURIComponent(a.msg || "WAIT") + "</button>");
                zc(b);
                c && ec.o(-1E4)
            },
            AGARI: function (a, c) {
                var d = "";
                xb(10, 0, 0);
                a.ten = p(a.ten);
                a.chip = p(a.chip);
                for (var f = a.who != a.fromWho, g = 0, h = 0; h < a.chip.length; h += 2)
                    g += a.chip[h + 1];
                var g = g ? g + v(f ? "枚" : "枚∀") : "",
                l;
                l = f ? a.ten[1] + v("点") : ha[(D.v & 16 ? 0 : 2) + (D.ma == a.who ? 1 : 0)][a.ten[1]] + v(D.ma == a.who ? "点∀" : "点");
                var d = d + "<div id=total style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:250%;'>",
                k = [];
                if (a.yakuman) {
                    a.yakuman = p(a.yakuman);
                    d += v("役滿") + l + g;
                    for (h = 0; h < a.yakuman.length; h += 1)
                        k.push([aa[a.yakuman[h]], 2 * h < a.chip.length ? a.chip[2 * h + 1] + v("枚") : ""]);
                    for (h *= 2; h < a.chip.length; h +=
                        2)
                        k.push([aa[a.chip[h + 0]], a.chip[h + 1] + v("枚")])
                } else {
                    a.yaku = p(a.yaku);
                    for (var C = ca[a.ten[2]], w = 0, h = 0; h < a.yaku.length; h += 2)
                        w += a.yaku[h + 1];
                    if (30 == a.ten[0] && 4 == w || 60 == a.ten[0] && 3 == w)
                        !f && D.v & 16 ? a.ten[1] == (D.ma == a.who ? 8E3 : 6E3) && (C = ca[1]) : a.ten[1] == (D.ma == a.who ? 12E3 : 8E3) && (C = ca[1]);
                    ~D.v & 2048 && (d += (C ? "" : a.ten[0] + v("符") + w + v("飜")) + v(C) + l + g);
                    for (f = h = 0; h < a.yaku.length; h += 2)
                        g = a.yaku[h + 1] + v(D.v & 2048 ? "点" : "飜"), f < a.chip.length && a.yaku[h + 0] == a.chip[f + 0] && (g += a.chip[f + 1] + v("枚"), f += 2), k.push([aa[a.yaku[h +
                                        0]], g])
                }
                d += "</div><table cellpadding=0 cellspacing=0 style='width:100%;font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:150%;'><tr>";
                h = 4 > k.length ? 0 : Math.ceil(k.length / 2);
                for (f = 0; f < k.length; ++f) {
                    if (0 == f || f == h)
                        d += "<td width=50% align=center valign=top><table cellpadding=0 cellspacing=0>";
                    d += "<tr id=yaku" + f + ">";
                    d += "<td align=left style='position:relative;'>" + k[f][0] + "</td>";
                    d += "<td align=left style='position:relative;'>　" + k[f][1] + "</td>";
                    d += "</tr>";
                    if (f == h - 1 || f == k.length - 1)
                        d += "</table></td>"
                }
                d +=
                "</tr></table>";
                k = p(a.doraHai);
                for (h = a.doraHaiUra ? p(a.doraHaiUra) : []; 5 > k.length; )
                    k.push(136);
                for (; 5 > h.length; )
                    h.push(136);
                d += e(a, "", "<button name=ok style='width:100%;padding:0 1em;'>OK</button>", "");
                c.innerHTML = d;
                zc(c);
                M.va(Z.info0, "", 0, 1, k[0], k[1], k[2], k[3], k[4]);
                M.va(Z.info2, "", 0, 1, h[0], h[1], h[2], h[3], h[4]);
                3 != D.a && b(a, function () {
                    Z.ok.disabled = !1;
                    a.owari || ec.o(-5E3)
                })
            },
            RYUUKYOKU: function (a, b) {
                b.innerHTML = "<div style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'>" + (a.type ? ea[a.type] :
                        "流局") + "</div>" + e(a) + "<button name=ok style='padding:0 2em;'>OK</button>";
                zc(b);
                2 != D.a || a.owari || (Z.ok.disabled = !0);
                a.owari || ec.o(-5E3)
            },
            OWARI: function (a, b) {
                D.fa();
                Yb.X();
                var d;
                d = a.sc;
                d = d.split(",");
                for (var e = 0; e < d.length; ++e)
                    d[e] = Number(d[e]);
                var f,
                e = [0, 1, 2, 3];
                for (f = 1; 4 > f; ++f)
                    if (!(d[2 * e[f - 1] + 1] >= d[2 * e[f] + 1])) {
                        var h = e[f];
                        e[f] = e[f - 1];
                        e[f - 1] = h;
                        f = 0
                    }
                f = "<div style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'>終局</div><table cellpadding=0 cellspacing=0 width=75% align=center style='text-align:center;'>" +
                    c(d, e[0]);
                f += c(d, e[1]);
                f += c(d, e[2]);
                f += c(d, e[3]);
                f += "</table>";
                hc().Gc = Bc(1500);
                b.innerHTML = f + "<button name=ok style='padding:0 2em;'>OK</button>";
                zc(b)
            }
        }
    }
        ());
    A.KANSEN = A.SAIKAI = A.TAIKYOKU;
    za(A, function () {
        function a(a) {
            var b = Z.panes.childNodes,
            c = b.length;
            k = (k + a + c) % c;
            for (a = 0; a < c; ++a)
                b[a].style.display = a == k ? "" : "none";
            Z.paneDisp.innerHTML = b[k].firstChild.innerHTML + v(" / " + I(10))
        }
        function e() {
            K.a = ~~H.yama;
            0 == K.a && H.desktop && (K.a = 1);
            Hb();
            D.fa();
            D.connected = 15;
            D.v = 1;
            D.UN({
                tag: "UN",
                n0: "COM",
                n1: "COM",
                n2: "COM",
                n3: "COM",
                sx: ",,,"
            });
            D.ha({
                tag: "REINIT",
                seed: "2,1,1,5,5,57",
                ten: "123,234,345,456",
                oya: "0",
                hai0: "1,3,6,16,21,41,49,53,75,116,117,121,135",
                hai1: "1,3,6,16,21,41,49,53,75,116,117,121,135",
                kawa0: "46,125,82,128,73,94,66,130,131,55,5,126,38,124",
                kawa1: "108,120,11,74,76,50,42,78,67,70",
                kawa2: "119,32,29,65,2,104,5,126,38,124",
                kawa3: "122,127,4,112,107,77,129,69,109,106,123"
            });
            R.L();
            H.desktop & 1 ? (u.b.style.display = "", u[1572868].innerHTML = "", u.R(126976)) : u.b.style.display = "none"
        }
        function c(a) {
            Gb("hideid", ~~a.target.checked, 0)
        }
        function b() {
            Z.cfgDefaultSE.checked ? (Z.cfgUseDefaultSE0.style.display = "none", Z.cfgSE.value = "", f()) : Z.cfgUseDefaultSE0.style.display = ""
        }
        function f() {
            var a = Z.cfgSE.value;
            qb(a) ? (H.se = a, tc()) : (H.removeItem("se"), tc(), a && x.o(I(35)))
        }
        function d(a) {
            Gb("autowin", ~~a.target.checked, 0)
        }
        var k = 0,
        m = {
            iH: 0,
            iS: 10,
            iV: 7,
            hR: 0,
            hG: 0,
            hB: 0
        },
        n = 8;
        return {
            CONFIG: function (g, h) {
                Yb.s.canvas.style.visibility = "";
                e();
                var l;
                l = "<div id=paneDisp style='font-size:125%;pointer-events:none;'>　</div><hr><div id=panes style='height:12em;'>" + ("<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + I(11) + "</span><span class=bth>" + I(14) + ":</span><div class=select-wrapper><button name=sco></button></div><br>" +
                        v(I(16)) + "<br><br><input type=checkbox id=cfgSelShowID /><label class=bth for=cfgSelShowID>" + I(17) + "</label><br>" + v(I(18)) + "<br></div>");
                l += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + I(12) + "</span><span class=bth>" + I(19) + ":</span><div class=select-wrapper><button name=cpt></button></div><br>" + v(I(21)) + "<br><br><span class=bth>" + I(22) + ":</span><div class=select-wrapper><button name=dtp></button></div><br>" + v(I(23)) + "<br></div>";
                l += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" +
                I(12) + "</span><span class=bth>" + I(26) + ":</span><div class=select-wrapper><button name=lth></button></div><br>" + v(I(27)) + "<br><br><br><span class=bth>" + I(24) + ":</span><div class=select-wrapper><button name=yam></button></div><br></div>";
                l += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + I(13) + "</span><br><input type=checkbox id=cfgDefaultSE /><label class=bth for=cfgDefaultSE>" + I(29) + "</label> <div class=select-wrapper><button name=sevol></button></div><br><br><div id=cfgUseDefaultSE0>" +
                I(30) + "<input name=cfgSE style='width:100%;font-size:125%;'/><br></div></div>";
                l += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + I(31) + "</span><br><input type=checkbox id=cfgUseDefaultIMG /><label class=bth for=cfgUseDefaultIMG>" + I(32) + "</label><br><br><div id=cfgUseDefaultIMG1><div class=select-wrapper><button name=iH style='width:4em;'></button></div><div class=select-wrapper><button name=iS style='width:4em;'></button></div><div class=select-wrapper><button name=iV style='width:4em;'></button></div><br>" +
                v(I(34)) + "<br></div><div id=cfgUseDefaultIMG0>" + I(33) + ":" + v("(.jpg|.png|.gif)") + "<input name=cfgBGIMG style='width:100%;font-size:125%;'/><br></div></div>";
                l += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + I(36) + "</span><br><br><div class=bth>" + I(37) + ":</div><div class=select-wrapper><button name=hR style='width:4em;'></button></div><div class=select-wrapper><button name=hG style='width:4em;'></button></div><div class=select-wrapper><button name=hB style='width:4em;'></button></div><br></div>";
                l += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + I(41) + "</span><br><input type=checkbox id=cfgDefaultAutoWin /><label class=bth for=cfgDefaultAutoWin>" + I(42) + "</label> <br><br></div>";
                h.innerHTML = l + "</div><hr><button name=cfgPrev class=ra1 style='width:33%;'>&laquo;</button><button name=cfgNext class=ra2 style='width:33%;'>&raquo;</button><button name=cfgClose style='width:34%;'>CLOSE</button>";
                zc(h);
                Z.cfgSelShowID.checked = !!H.hideid;
                Z.sco.disabled = !pa;
                ta(Z.cfgSE,
                    "change", f);
                ta(Z.cfgBGIMG, "change", A["#iV"]);
                ta(Z.cfgSelShowID, "change", c);
                ta(Z.cfgDefaultSE, "change", b);
                ta(Z.cfgDefaultAutoWin, "change", d);
                ta(Z.cfgUseDefaultIMG, "change", A["#iV"]);
                H.se ? Z.cfgSE.value = H.se : Z.cfgDefaultSE.checked = !0;
                pb(H.backgroundImage) ? Z.cfgBGIMG.value = H.backgroundImage : Z.cfgUseDefaultIMG.checked = !0;
                Z.cfgDefaultAutoWin.checked = !!H.autowin;
                A["#sco"]();
                A["#yam"]();
                A["#sevol"]();
                A["#cpt"]();
                A["#hB"]();
                A["#iV"]();
                A["#dtp"]();
                A["#lth"]();
                a(0);
                b()
            },
            hB: function (a) {
                for (var b = "iH" == a.name ?
                        36 : 16, c = "", d = 0; d < b; ++d)
                    c += "<div class=A id='#" + a.name + "-" + d + "'>" + d + (d == m[a.name] ? "<div class=desc>(default)</div>" : "") + "</div>";
                x.Y(c, "", 0)
            },
            "#iV": function (a, b) {
                var c = H.backgroundImage,
                d = "000100070";
                c && c.match(/^\d{9}$/) && (d = c);
                var e = ~~d.substr(0, 3),
                f = ~~d.substr(3, 3),
                g = ~~d.substr(6, 3);
                if (Z.cfgUseDefaultIMG.checked) {
                    Z.cfgUseDefaultIMG0.style.display = "none";
                    Z.cfgUseDefaultIMG1.style.display = "";
                    if (a)
                        switch (d = 10 * ~~b, a) {
                        case "#iH":
                            e = d;
                            break;
                        case "#iS":
                            f = d;
                            break;
                        case "#iV":
                            g = d
                        }
                    d = Ya(3, e) + Ya(3, f) + Ya(3, g);
                    Gb("backgroundImage", d, "000100070")
                } else
                    Z.cfgUseDefaultIMG0.style.display = "", Z.cfgUseDefaultIMG1.style.display = "none", (d = Z.cfgBGIMG.value) ? pb(d) ? H.backgroundImage = d : a && a.target == Z.cfgBGIMG && x.o(I(35)) : H.removeItem("backgroundImage");
                c != H.backgroundImage && Hb();
                Z.iH.innerHTML = v("H:") + ~~(e / 10);
                Z.iS.innerHTML = v("S:") + ~~(f / 10);
                Z.iV.innerHTML = v("V:") + ~~(g / 10)
            },
            "#hB": function (a, b) {
                var c = H.msk,
                d = c || "000000",
                e = parseInt(d.substr(0, 2), 16),
                f = parseInt(d.substr(2, 2), 16),
                g = parseInt(d.substr(4, 2), 16);
                if (a)
                    switch (d =
                            17 * ~~b, a) {
                    case "#hR":
                        e = d;
                        break;
                    case "#hG":
                        f = d;
                        break;
                    case "#hB":
                        g = d
                    }
                d = Ya(2, e.toString(16)) + Ya(2, f.toString(16)) + Ya(2, g.toString(16));
                Gb("msk", d, "000000");
                Z.hR.innerHTML = v("R:") + ~~(e / 17);
                Z.hG.innerHTML = v("G:") + ~~(f / 17);
                Z.hB.innerHTML = v("B:") + ~~(g / 17);
                c != H.msk && Hb()
            },
            sco: function () {
                x.Y("<div class=A id='#sco-0'>" + I(15)[0] + "</div><div class=A id='#sco-1'>" + I(15)[1] + "</div><div class=A id='#sco-2'>" + I(15)[2] + "</div>", "", 0)
            },
            "#sco": function (a, b) {
                var c = H.scro,
                c = ~~(a ? b : c);
                Gb("scro", c, 0);
                pa && q.screen.orientation.lock &&
                q.screen.orientation.lock(1 == c ? "portrait" : 2 == c ? "landscape" : "any");
                Z.sco.innerHTML = I(15)[c]
            },
            yam: function () {
                x.Y("<div class=A id='#yam-0'>" + I(25)[0] + "</div><div class=A id='#yam-1'>" + I(25)[1] + "</div><div class=A id='#yam-2'>" + I(25)[2] + "</div>", "", 0)
            },
            "#yam": function (a, b) {
                var c = H.yama,
                d = ~~(a ? b : c);
                Gb("yama", d, 0);
                Z.yam.innerHTML = I(25)[d];
                c != d && e()
            },
            sevol: function (a) {
                for (var b = "", c = ~~(H.sevol || 5), d = 0; 10 >= d; ++d)
                    b += "<div class='A" + (d == c ? " _selected_" : "") + "' id='#" + a.name + "-" + d + "'>" + d + (0 == d ? "<div class=desc>(off)</div>" :
                        5 == d ? "<div class=desc>(default)</div>" : "") + "</div>";
                x.Y(b, "", 0)
            },
            "#sevol": function (a, b) {
                var c = ~~(H.sevol || 5),
                c = ~~(a ? b : c);
                Gb("sevol", c, 5);
                Z.sevol.innerHTML = I(28) + ":" + c;
                sc();
                arguments.length && (console.log(n), xb(n, 0, 0), n = (n + 1) % 25, 0 != n && 2 != n || n++)
            },
            cpt: function () {
                x.Y("<div class=A id='#cpt-0'>" + I(20)[0] + "</div><div class=A id='#cpt-1'>" + I(20)[1] + "</div><div class=A id='#cpt-2'>" + I(20)[2] + "</div>", "", 0)
            },
            "#cpt": function (a, b) {
                var c = ~~(a ? b : H.cptype);
                Gb("cptype", c, 0);
                S.L();
                Z.cpt.innerHTML = I(20)[c]
            },
            dtp: function () {
                x.Y("<div class=A id='#dtp-0'>" +
                    I(25)[0] + "</div><div class=A id='#dtp-1'>" + I(25)[1] + "</div><div class=A id='#dtp-2'>" + I(25)[2] + "</div>", "", 0)
            },
            "#dtp": function (a, b) {
                var c = H.desktop;
                3 == c && (c = 0);
                var d = ~~(a ? b : c);
                Z.dtp.innerHTML = I(25)[d];
                0 == d && mb && (d = 3);
                Gb("desktop", d, 0);
                c != d && e()
            },
            lth: function () {
                x.Y("<div class=A id='#lth-0'>" + I(25)[0] + "</div><div class=A id='#lth-1'>" + I(25)[1] + "</div><div class=A id='#lth-2'>" + I(25)[2] + "</div>", "", 0)
            },
            "#lth": function (a, b) {
                var c = H.lthai,
                d = ~~(a ? b : c);
                Gb("lthai", d, 0);
                Z.lth.innerHTML = I(25)[d];
                c != d && e()
            },
            cfgPrev: function () {
                a(-1)
            },
            cfgNext: function () {
                a(1)
            },
            cfgClose: function () {
                u.la(11)
            }
        }
    }
        ());
    A["#iH"] = A["#iS"] = A["#iV"];
    A.iH = A.iS = A.iV = A.hR = A.hG = A.hB;
    A["#hR"] = A["#hG"] = A["#hB"];
    za(A, function () {
        function a(a, b) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                e = "<div style='position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;'>",
                m = "javascript:void(0)",
                e = e + "<table cellpadding=0 cellspacing=0 width=100% height=100%><tr>",
                e = e + ("<td rowspan=3 class=gray width=6% >" + (c + 1) + ".</td>");
                if (d) {
                    var m = "https://tenhou.net/0/?log=" + d.log + "&tw=" + (4 - ~~d.oya) % 4,
                    e = e + "<td colspan=2>",
                    e = e + (v(I(200) + " | ") + d.log.substr(4, 2) + "/" + d.log.substr(6, 2) + v(" | ")),
                    e = e + ka(d.type),
                    n = d.lobby;
                    n && (e += " " + (1E4 > n ? "L" : "C") + Ya(4, n));
                    var e = e + "</td>",
                    e = e + "</tr><tr>",
                    n = d.uname,
                    g = ~~d.oya;
                    if (d = d.sc) {
                        for (var d = d.split(","), h = 0; h < d.length; ++h)
                            d[h] = Number(d[h]);
                        for (h = 0; 4 > h; ++h)
                            e += "<td width=47% >", n[h] && (e = h ? e + ("ABCD".substr((h + 4 - g) % 4, 1) + ":") : e + (0 + ~~(n[1] && d[3] > d[1]) + ~~(n[2] && d[5] > d[1]) + ~~(n[3] && d[7] > d[1]) + 1 + "位 "), e += Da(n[h]) + "(" + Za(d[2 * h + 1].toFixed(1)) + ")"), e += "</td>", 1 == h && (e += "</tr><tr>")
                    } else if (n)
                        for (h = 0; 4 > h; ++h)
                            e += "<td width=47% >" + Da(n[h]) + "</td>", 1 == h && (e += "</tr><tr>")
                }
                e += "</tr></table>";
                e += "</div>";
                e += "<a href='" + m + "' class=bt3 target=_blank></a>";
                nb("DIV", a, "", {
                    innerHTML: e
                }, {
                    height: "3.4em",
                    position: "relative",
                    textAlign: "left"
                }).childNodes[1].onclick = A.logOpen
            }
            nb("DIV", a, "gray", {
                innerHTML: I(201)
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        function e(c, b) {
            var e = b.split("\n");
            e[d - 1] || e.pop();
            for (var d = 0; d < e.length; ++d) {
                var k = e[d].split(" "),
                m = k[0],
                n = ~~k[1];
                e[d] = {
                    type: parseInt(m.split("-")[1], 16),
                    lobby: ~~m.split("-")[2],
                    log: m,
                    oya: (4 - n) % 4,
                    uname: [k[2 + (0 + n) % 4], k[2 + (1 + n) % 4], k[2 +
                            (2 + n) % 4], k[2 + (3 + n) % 4]],
                    sc: [0, k[6 + (0 + n) % 4], 0, k[6 + (1 + n) % 4], 0, k[6 + (2 + n) % 4], 0, k[6 + (3 + n) % 4]].join()
                }
            }
            c.innerHTML = "";
            d = nb("DIV", c, "", {
                innerHTML: "<a class=bt3 href='https://tenhou.net/mjlog.html' target=_blank style='padding:1em 0;'>" + I(204) + "</a>"
            }, {
                textAlign: "center"
            });
            d.childNodes[0].onclick = function () {
                A.cc(c);
                return !1
            };
            d = nb("DIV", c, "bt3", {
                innerHTML: I(203)
            }, {
                textAlign: "center",
                padding: "0.5em 0"
            });
            a(c, e.reverse())
        }
        return {
            cc: function (c) {
                c.innerHTML = "";
                nb("DIV", c, "", {
                    innerHTML: "<a class=bt3 href='https://tenhou.net/mjlog.html' target=_blank style='padding:1em 0;'>" +
                    I(202) + "</a>"
                }, {
                    textAlign: "center"
                }).childNodes[0].onclick = function () {
                    c.innerHTML = "<br>L O A D I N G ...";
                    Va(qa[22]() + "?un=" + H.uname + "&raw=1", function (a) {
                        e(c, a)
                    }, function () {
                        alert("DOWNLOAD ERROR")
                    });
                    return !1
                };
                for (var b = [], f = ~~H.lognext, d = 0; 40 > d; ++d) {
                    var k = (f + 40 - 1 - d) % 40;
                    try {
                        b.push(JSON.parse(H["log" + k]))
                    } catch (m) {}
                }
                a(c, b)
            },
            logOpen: function (a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey) && (a = a.target, a = a.href.split(/\?log=|&tw=/), 1 != a.length))
                    return t.log = a[1], t.TW = t.tw = ~~a[2], t.ts = 0, u.la(11), !1
            }
        }
    }
        ());
    za(A, function () {
        function a() {
            Z.wgF0.innerText = f & 2 ? "四" : f & 4 ? "三" : "－";
            Z.wgF1.innerText = f & 8 ? "東" : f & 16 ? "南" : "－";
            Z.wgF2.innerText = f & 32 ? "雀" : f & 64 ? "特" : f & 128 ? "鳳" : "－"
        }
        function e() {
            var a = Z.klist;
            a.innerHTML = "";
            var e = 0;
            if (b)
                for (var m = 0; m < b.length; ++m) {
                    var n = "<div style='position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;'>",
                    n = n + "<table cellpadding=0 cellspacing=0 width=100% height=100%>",
                    n = n + ("<tr><td rowspan=3 class=gray width=6%>" +
                            (e + 1) + ".</td>"),
                    g,
                    h = b[m],
                    l = ~~h[3];
                    if (f & 6) {
                        if (~l & 16 && ~f & 2)
                            continue;
                        if (l & 16 && ~f & 4)
                            continue
                    }
                    if (f & 24) {
                        if (~l & 8 && ~f & 8)
                            continue;
                        if (l & 8 && ~f & 16)
                            continue
                    }
                    if (f & 224 && 0 == c) {
                        if (0 != (l & 1536) && ~f & 32)
                            continue;
                        if (!(l & 3584) && 2 == ja(l) && ~f & 64)
                            continue;
                        if (!(l & 3584) && 3 == ja(l) && ~f & 128)
                            continue
                    }
                    g = "https://tenhou.net/0/?wg=" + h[0];
                    for (var z = [h[4], h[7], h[10], h[13]], C = 0; 4 > C; ++C)
                        z[C] && (z[C] = decodeURIComponent(escape(atob(z[C]))));
                    for (var w = [~~h[5], ~~h[8], ~~h[11], ~~h[14]], B = [~~h[6], ~~h[9], ~~h[12], ~~h[15]], n = n + ("<td colspan=2>" +
                                v(I(210) + " | ") + h[2] + v(" | ") + ka(l) + "</td></tr><tr>"), C = 0; 4 > C; ++C)
                        z[C] && (n += "<td width=47%>", n += "<span class=dan" + w[C] + ">" + ba[w[C]] + "</span>" + v("R") + B[C] + v("/") + z[C], n += "</td>", 1 == C && (n += "</tr><tr>"));
                    n += "</tr></table>";
                    n += "</div>";
                    n += "<a href='" + g + "' class=bt3 target=_blank></a>";
                    nb("DIV", a, "", {
                        innerHTML: n
                    }, {
                        height: "3.4em",
                        position: "relative",
                        textAlign: "left"
                    }).childNodes[1].onclick = A.wgOpen;
                    ++e
                }
            e || (a.innerHTML = "<br>" + I(211));
            nb("DIV", a, "gray", {
                innerHTML: I(212)
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        var c,
        b,
        f = 128;
        return {
            Rc: function (d) {
                c = d;
                Va(qa[13]() + (1E4 > c ? Ya(4, c) : c) + ".js", function (a) {
                    if (b = a.substr(3, a.length - 3 - 2))
                        try {
                            b = JSON.parse(b)
                        } catch (m) {
                            return
                        }
                    if (b)
                        for (a = 0; a < b.length; ++a)
                            b[a] = b[a].split(",");
                    e()
                });
                e();
                a();
                Z.wgF2.style.display = 0 == c ? "" : "none"
            },
            wgF0: function () {
                f = f & -7 | (f & 2 ? 4 : f & 4 ? 0 : 2);
                a();
                e()
            },
            wgF1: function () {
                f = f & -25 | (f & 8 ? 16 : f & 16 ? 0 : 8);
                a();
                e()
            },
            wgF2: function () {
                f = f & -225 | (f & 32 ? 64 : f & 64 ? 128 : f & 128 ? 0 : 32);
                a();
                e()
            },
            wgOpen: function (a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey))
                    return a = a.target,
                    t.wg = a.href.split("?wg=")[1], t.TW = t.tw = 0, u.la(11), !1
            }
        }
    }
        ());
    var Cc = [1, 65, 9, 73, 17, 81, 25, 89, 129, 193, 137, 201, 145, 209, 153, 217, 33, 97, 41, 105, 49, 113, 57, 121, 161, 225, 169, 233, 177, 241, 185, 249, 1057, 545, 1569, 1065, 553, 1577, 1585, 1593],
    Dc = [7, 3, 15, 11, 135, 131, 143, 139, 39, 35, 47, 43, 167, 163, 175, 171];
    function Ec(a) {
        var e = a % 10;
        a %= 100;
        return 1 == e && 11 != a ? I(281)[0] : 2 == e && 12 != a ? I(281)[1] : 3 == e && 13 != a ? I(281)[2] : I(281)[3]
    }
    za(A, function () {
        function a() {
            return ("" + (H.rule || "")).split(",")
        }
        function e() {
            function b(a, b) {
                var c = d[a].childNodes[1];
                c.className = "";
                c.innerHTML = b
            }
            function c(a, c, d) {
                b(a, c == d ? "1.00" : (c / d).toFixed(3).substr(1))
            }
            if (Z.pftab) {
                Z.pftab.style.display = "none";
                Z.pftab_.style.display = "";
                for (var d = Z.pftab.getElementsByTagName("TR"), e = 1; e < d.length; ++e)
                    if (!(2 > d[e].childNodes.length)) {
                        var f = d[e];
                        f.style.borderBottom = "1px solid #444";
                        f = d[e].childNodes[0];
                        f.className = "gray";
                        f.style.textAlign = "left";
                        f = d[e].childNodes[1];
                        f.innerHTML = "-";
                        f.className = "gray";
                        f.style.textAlign = "right"
                    }
                d[16].childNodes[0].innerHTML = "";
                if (e = ~~a()[4]) {
                    var l,
                    f = 4,
                    g = 0,
                    h = "";
                    switch (z(e)) {
                    case 4:
                        f = 4;
                        g = 0;
                        l = A[17];
                        h = I(240);
                        break;
                    case 3:
                        f = 3;
                        g = 0;
                        l = A[16];
                        h = I(241);
                        break;
                    case 601:
                        f = 4;
                        g = 0;
                        l = A[18];
                        break;
                    case 602:
                        f = 4;
                        g = 2;
                        l = A[19];
                        break;
                    case 603:
                        f = 4;
                        g = 5;
                        l = A[20];
                        break;
                    case 611:
                        f = 4;
                        g = 0;
                        l = A[21];
                        break;
                    case 612:
                        f = 4;
                        g = 2;
                        l = A[22];
                        break;
                    case 613:
                        f = 4;
                        g = 5;
                        l = A[23];
                        break;
                    case 623:
                        f = 3;
                        g = 5;
                        l = A[24];
                        break;
                    case 633:
                        f = 3,
                        g = 5,
                        l = A[25]
                    }
                    d[16].childNodes[0].innerHTML = h;
                    l && (Z.pftab.style.display =
                            "", Z.pftab_.style.display = "none", h = ~~l[4] + ~~l[5] + ~~l[6] + ~~l[7]) && (c(1, l[4], h), c(2, l[5], h), c(3, l[6], h), 4 == f && c(4, l[7], h), c(5, l[8], h), b(6, h), b(7, (0 < l[3] ? "+" : "") + (l[3] / h).toFixed(1)), b(8, ((1 * ~~l[4] + 2 * ~~l[5] + 3 * ~~l[6] + 4 * ~~l[7]) / h).toFixed(2)), 0 != (e & 1536) && (e = 1 * l[3] + l[0] * g, b(9, (0 < e ? "+" : "") + (e / h).toFixed(1)), b(10, (~~l[0] / h).toFixed(2))), c(11, l[10], l[9]), c(12, l[11], l[9]), c(13, l[12], l[9]), c(14, l[13], l[9]), b(15, ~~l[2]))
                }
            }
        }
        function c(b) {
            function c(a) {
                for (var b, c = 1; c < arguments.length; ++c)
                    b = l[a].childNodes[c],
                    b.className = "", b.innerHTML = arguments[c]
            }
            function d(a, b, d) {
                c(a, b, (d ? d : "- ") + v(Ec(d)))
            }
            function e(a, b, d, e) {
                c(a, b == d ? "1.00" : (b / d).toFixed(3).substr(1), (e ? e : "- ") + v(Ec(e)))
            }
            var f = Z.rnktab;
            if (f) {
                Z.rnktab.style.display = "none";
                Z.rnktab_.style.display = "";
                for (var l = f.getElementsByTagName("TR"), g = 1; g < l.length; ++g) {
                    var f = l[g],
                    h = f.childNodes;
                    if (!(2 > h.length)) {
                        16 != g && 18 != g && (f.style.borderBottom = "solid 1px #444");
                        h[0].style.textAlign = "left";
                        h[0].className = "gray";
                        for (var k = 1; k < h.length; ++k)
                            f = h[k], f.className = "gray",
                            f.style.textAlign = "right", f.style.paddingLeft = "0.5em", 1 != g && 6 != g && (f.innerHTML = "-")
                    }
                }
                c(18, v("-"));
                f = ~~a()[3];
                W.Na != f && (W.Na = f, W.K('<PXR V="' + f + '" />'));
                if (f && (Z.rnktab.style.display = "", Z.rnktab_.style.display = "none", b && (b = b.v2.split(","), 15 == b.length || 21 == b.length))) {
                    var g = ~~b[0],
                    h = ~~b[1],
                    k = ~~b[2],
                    m = ~~b[3],
                    n = g + h + k + m,
                    J = b[4],
                    w;
                    switch (z(f)) {
                    case 4:
                        w = A[17][2];
                        break;
                    case 3:
                        w = A[16][2];
                        break;
                    case 601:
                        w = A[18][2];
                        break;
                    case 602:
                        w = A[19][2];
                        break;
                    case 603:
                        w = A[20][2];
                        break;
                    case 611:
                        w = A[21][2];
                        break;
                    case 612:
                        w =
                            A[22][2];
                        break;
                    case 613:
                        w = A[23][2];
                        break;
                    case 623:
                        w = A[24][2];
                        break;
                    case 633:
                        w = A[25][2]
                    }
                    var bb = ~~b[6],
                    B = ~~b[7],
                    E = ~~b[8],
                    y = ~~b[9],
                    C = ~~b[10],
                    da = ~~b[11],
                    oa = ~~b[12],
                    fa = ~~b[13],
                    ga = ~~b[14];
                    if (n) {
                        var Ua = f & 16 ? 30 * g + 0 * h + -30 * k : 30 * g + 10 * h + -10 * k + -30 * m,
                        xa = f & 16 ? 1 * g + 2 * h + 3 * k : 1 * g + 2 * h + 3 * k + 4 * m,
                        ya = g + h,
                        wa = f & 16 ? k : m;
                        d(2, Za(J), B);
                        d(7, Za((J / n).toFixed(1)), E);
                        d(3, Za(Ua), y);
                        d(8, (xa / n).toFixed(2), C);
                        e(11, g, n, da);
                        ~f & 16 && e(12, ya, n, oa);
                        e(13, wa, n, fa)
                    }
                    if (21 == b.length) {
                        var J = b[15],
                        da = b[16],
                        sa = ~~b[17],
                        ra = ~~b[18],
                        oa = ~~b[19],
                        fa = ~~b[20];
                        d(4, Za(J), sa);
                        d(9, Za((J / n).toFixed(1)), ra);
                        d(5, Za(da), oa);
                        d(10, Za((da / n).toFixed(2)), fa)
                    }
                    J = "-";
                    15 == b.length && E && (J = B + E + y + C);
                    21 == b.length && ra && (J = sa + ra);
                    d(15, ~~w, ga);
                    d(16, J, bb);
                    c(18, g + v(" + ") + h + v(" + ") + k + (f & 16 ? "" : v(" + ") + m) + v(" = ") + n)
                }
            }
        }
        function b(a) {
            a = a.rankingcs.split(",");
            var b = "",
            c = I(256),
            d = I(263),
            e = "",
            f = "-",
            l = [],
            g = "- -";
            a[0] = a[0] || y.ranking;
            if ("sc3m" == a[0] || "sc3c0m" == a[0] || "sc3c2m" == a[0] || "sc3c5m" == a[0])
                c = I(257), "sc3c2m" == a[0] && (d = I(264)), "sc3c5m" == a[0] && (d = I(265)), e = I(259), a[8] && (g = a[8]),
                a[6] && (f = Za(Number(a[6]).toFixed(1))), a[3] && l.push(Za(Number(a[3]).toFixed(1))), a[2] && l.push(Za(Number(a[2]).toFixed(1))), a[1] && l.push(Za(Number(a[1]).toFixed(1))), l.length && l.push("= " + Za((1 * a[1] + 1 * a[2] + 1 * a[3]).toFixed(1)));
            else if ("sc5m" == a[0] || "sc5c0m" == a[0] || "sc5c2m" == a[0] || "sc5c5m" == a[0])
                c = I(258), "sc5c2m" == a[0] && (d = I(264)), "sc5c5m" == a[0] && (d = I(265)), e = I(260), a[9] && (g = a[9]), a[7] && (f = Za(Number(a[7]).toFixed(1))), a[5] && l.push(Za(Number(a[5]).toFixed(1))), a[4] && l.push(Za(Number(a[4]).toFixed(1))),
                a[3] && l.push(Za(Number(a[3]).toFixed(1))), a[2] && l.push(Za(Number(a[2]).toFixed(1))), a[1] && l.push(Za(Number(a[1]).toFixed(1))), l.length && l.push("= " + Za((1 * a[1] + 1 * a[2] + 1 * a[3] + 1 * a[4] + 1 * a[5]).toFixed(1)));
            l = l.length ? l.join(" ") : "--";
            b += "<div style='display:inline-block;text-align:left;'>" + v(I(255)) + "　" + c + "<br>" + v(I(261)) + "　" + f + "　" + v(I(262)) + "　" + d + "</div>";
            b += "<div style='font-size:375%;padding:0.1em 0;'>" + g + Ec(g) + "</div>";
            b += v(e) + " " + l + "<br>";
            Z.csranking.innerHTML = b
        }
        function f() {
            if (M[4096] &&
                M[4096].complete && M[4196] && M[4196].complete && M[4296] && M[4296].complete && M[4396] && M[4396].complete && M[4496] && M[4496].complete)
                return !0;
            x.o(I(215));
            return !1
        }
        function d(a) {
            var b = Z.panes.childNodes,
            c = b.length;
            da = (da - 1 + a + c - 1) % (c - 1) + 1;
            for (a = 1; a < c; ++a)
                b[a].style.display = a == da ? "" : "none";
            Z.paneDisp.innerHTML = b[da].firstChild.innerHTML;
            Z.panePrev.innerHTML = 2 > da ? "&laquo;" : "　";
            Z.paneNext.innerHTML = 2 > da ? "&raquo;" : "　";
            Z.hdr.style.display = b[da].classList.contains("nohdr") ? "none" : "";
            b = b[da].classList;
            b.contains("init_tlist") &&
            (b.remove("init_tlist"), A.hc(Z.tlist));
            b.contains("init_hlist") && (b.remove("init_hlist"), A.cc(Z.hlist));
            b.contains("init_klist") && (b.remove("init_klist"), A.Rc(B))
        }
        function k(a) {
            return (new Date(a.substr(0, 4), a.substr(4, 2) - 1, a.substr(6, 2), a.substr(8, 2), a.substr(10, 2), a.substr(12, 2))).getTime()
        }
        function m(a) {
            return a.replace(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)/, function (a, b, c, d, e, f) {
                return b + "." + c + "." + d + "(" + I(250)[(new Date(b, c - 1, d)).getDay()] + ") " + e + ":" + f
            })
        }
        function n() {
            var a = A[1];
            Z.expdisp.innerHTML =
                v(I(218) + ":") + (a ? a.replace(/(\d\d\d\d)(\d\d)(\d\d)/, "$1.$2.$3") : "- - - -")
        }
        function g() {
            var a = ~~y.players,
            b = ~~y.premiumonly,
            c = ~~y.joinfee,
            d = y.rule,
            e = parseInt(d[2], 16),
            f;
            f = "" + (e & 8 ? "東南" : "東風") + (e & 16 ? "サンマ" : "戦") + " " + (e & 4 ? "喰ナシ" : "喰あり") + (e & 2 ? "赤ナシ" : "赤あり") + " ";
            ia(B, e) && (f += "速");
            e & 256 && (f += "暗");
            e & 512 && (f += "祝");
            var l = "",
            g = ~~d[3],
            h = ~~d[4],
            k = ~~d[5],
            n = ~~d[6];
            y.Ea = !!y.join;
            if (y.Ea) {
                var z = (e & 16 ? A[16] :
                    A[17])[0];
                g && h ? y.Ea = g <= z && z <= h : g ? y.Ea = g <= z : h && (y.Ea = z <= h)
            }
            y.Ea && (e = (e & 16 ? A[16] : A[17])[2], k && n ? y.Ea = k <= e && e <= n : k ? y.Ea = k <= e : n && (y.Ea = e <= n));
            g && h && g == h ? l += ba[g] + "限定" : g && h ? l += ba[g] + "～" + ba[h] : g ? l += ba[g] + "以上" : h && (l += ba[h] + "以下");
            l.length && (k || n) && (l += " & ");
            k && n ? l += "R" + k + "～R" + n : k ? l += "R" + k + "以上" : n && (l += "R" + n + "以下");
            l.length || (l += "段位R指定なし");
            l += "<br>";
            l = c ? l + "だれでもOK" : b ? l + (a ? "固定 " + a + " 名(有効期限3日以上)" :
                    "有効期限3日以上") : l + (a ? "固定 " + a + " 名" : "だれでもOK");
            a = c ? "有効期限" + c + "日分" : a ? "- - -" : b ? "なし" : "無料";
            d = "" + ("<div style='font-size:150%;padding-top:0.25em;'>" + Ta(y.title) + "</div><hr><table cellpadding=0 cellspacing=0 style='margin:0 auto;text-align:left;'><tr><td><table cellpadding=0 cellspacing=0><tr><td colspan=3>" + v(I(251) + "JST") + "<br></td></tr><tr><td>" + v(I(252)) + "</td><td>&nbsp;</td><td>" + m(d[0]) +
                    "</td></tr><td>" + v(I(253)) + "</td><td></td><td>" + m(d[1]) + "</td></tr></td></tr><tr><td colspan=3 style='padding-top:0.25em;'>" + v(I(254)) + "<br>" + f + "</td></tr></table></td><td style='padding:0 0 0 1em;'><table cellpadding=0 cellspacing=0><tr><td>" + v(I(266)) + "<br>" + a + "<br></td></tr><tr><td style='padding-top:0.25em;'>" + v(I(267)) + "<br>" + l + "</td></tr></table></td></tr></table>");
            Z.csmain.innerHTML = d;
            W.K("<DATE />")
        }
        function h() {
            oa = void 0;
            Z.joincs0 && W.K("<DATE />")
        }
        function l(a) {
            return "<div style='margin:0.5em 0;'><div class=select-wrapper><button name=rule id=rule" +
            a + " style='width:11.5em;text-align:left;'></button></div><button name=join id=join" + a + " disabled>" + I(216) + "</button></div>"
        }
        function z(a) {
            if (0 != (a & 1536))
                switch (a) {
                case 1057:
                    return 601;
                case 545:
                    return 602;
                case 1569:
                    return 603;
                case 1065:
                    return 611;
                case 553:
                    return 612;
                case 1577:
                    return 613;
                case 1585:
                    return 623;
                case 1593:
                    return 633
                }
            else
                return a & 16 ? 3 : 4
        }
        function C(a) {
            return a ? (ka(a) + "　　　").substr(0, 6) + "&nbsp;&nbsp;" + J[a] : "SELECT GAME"
        }
        function w(a) {
            return a.replace(/,/g, "</td><td>").replace(/\|/g,
                "</td></tr><tr><td>").replace(/>\(/g, "><table cellpadding=0 cellspacing=0 width=100% style='border-collapse:collapse;'><tr><td>").replace(/\)</g, "</td></tr></table><")
        }
        var B,
        y,
        J = {
            n: [],
            ab: [],
            Wa: []
        },
        E = {},
        da = location.search.match(/^\?(C[0-9]{8})/) ? 2 : 1,
        oa;
        return {
            Eb: function () {
                E = {};
                location.search.match(/^\?L([1-9][0-9]{3})/) ? (W.K({
                        tag: "LOBBY",
                        id: RegExp.$1
                    }), B = ~~RegExp.$1) : location.search.match(/^\?(C[0-9]{8})/) ? (B = ~~("1" + RegExp.$1.substr(1, 4)), W.K({
                        tag: "CS",
                        lobby: RegExp.$1
                    })) : (B = 0, A.o({
                        tag: "LOBBY"
                    }))
            },
            LOBBY: function (a, f) {
                Yb.s.canvas.style.visibility = "";
                W.Na = 0;
                if (t.tr || t.tredit)
                    return A.TRAINING({
                        file: t.tr || t.tredit
                    }, f);
                var h = "",
                k = A[17],
                m = A[16];
                A[2] || k.length || m.length ? (k.length || (k = [0, 0, 1500]), m.length || (m = [0, 0, 1500]), k = "<tr><td class=gray>四麻:</td><td>" + ba[k[0]] + "</td><td class=gray>R</td><td>" + ~~k[2] + "</td><td style='padding:0 0 0 0.25em;'>" + k[1] + "</td><td class=gray>/</td><td>" + ma[~~k[0]] + "</td><td class=gray>pt</td></tr>", m = "<tr><td class=gray>三麻:</td><td>" + ba[m[0]] + "</td><td class=gray>R</td><td>" +
                        ~~m[2] + "</td><td style='padding:0 0 0 0.25em;'>" + m[1] + "</td><td class=gray>/</td><td>" + ma[~~m[0]] + "</td><td class=gray>pt</td></tr>") : (k = "<tr><td class=gray>" + I(219) + "</td></tr>", m = "");
                h = h + "<div id=panes style='height:16em;'>" + ("<div id=hdr><table cellpadding=0 cellspacing=0 style='width:100%;white-space:nowrap;text-align:right;'><tr><td><table cellpadding=0 cellspacing=0 style='width:100%;'><tr><td style='text-align:left;'>" + v(I(220) + ":") + "<span id=lnn0>" + ~~J.n[0] + "</span> " + v(I(221) + ":") + "<span id=lnn2>" +
                        ~~J.n[2] + "</span> " + v(I(222) + ":") + "<span id=lnn3>" + ~~J.n[3] + "</span> </td></tr><tr><td><span id=iddisp>" + Da(A[0]) + "</span> <span id=expdisp></span></td></tr></table></td><td rowspan=2 style='width:1px;padding-left:0.25em;'><table cellpadding=0 cellspacing=0 align=right>" + k + m + "</table></td></tr></table><div style='display:none;'></div><hr></div>");
                h += "<div style='display:none;padding:1em 1em;'><span style='display:none;'>　</span><div id=lbinfo style='height:3em;'>" + v((pa ? "" : I(230)) + " " + I(231)) +
                "</div><br><div class=select-wrapper><button name=testplay>" + I(217) + "</button></div><br><br><br>" + v(I(232)) + "</div>";
                1E4 > B ? h += "<div style='display:none;padding:0.25em 0;'><span style='display:none;'>" + (0 == B ? "対戦" : "個室L" + Ya(4, B)) + "</span>" + l(0) + l(1) + l(2) + "</div>" : 2E4 > B && (h += "<div style='display:none;'><span style='display:none;'>大会C" + Ya(4, B % 1E4) + "</span><div id=csmain style='height:9em;'></div><span style='font-size:150%;padding:0 1em;'>" + v(I(268)) + "<span id=lnj0>" + ~~J.ab[0] +
                    "</span>" + v(I(270)) + " " + v(I(269)) + "<span id=lng0>" + ~~J.Wa[0] + "</span>" + v(I(270)) + "</span>", h += "<button name=join id=joincs0 disabled>　</button></div>");
                1E4 <= B && 2E4 > B && (h += "<div style='display:none;'><span style='display:none;'>大会C" + Ya(4, B % 1E4) + "</span><div id=csranking style='height:9em;'></div><span style='font-size:150%;padding:0 1em;'>" + v(I(268)) + "<span id=lnj1>" + ~~J.ab[0] + "</span>" + v(I(270)) + " " + v(I(269)) + "<span id=lng1>" + ~~J.Wa[0] + "</span>" + v(I(270)) + "</span>", h += "<button name=join id=joincs1 disabled>　</button></div>");
                0 == B ? h += w("<div style='display:none;'><span style='display:none;'>" + I(282) + "</span>" + l(3) + "<table cellpadding=0 cellspacing=0 id=rnktab style='margin:0 auto;'><tr><td valign=top style='min-width:10em;'>(," + I(283)[0] + "," + I(283)[1] + "|" + I(283)[2] + ",,|" + I(283)[3] + ",,|" + I(283)[4] + ",,|" + I(283)[5] + ",,)</td><td style='width:0.5em;'></td><td valign=top style='min-width:7em;'>(," + I(283)[6] + "," + I(283)[7] + "|,,|,,|,,|,,)</td><td rowspan=2 style='width:1em;'></td><td rowspan=2 valign=top style='min-width:11em;'>(" +
                    I(283)[8] + ",,|" + I(283)[9] + ",,|" + I(283)[10] + ",,|<div style='border-bottom:1px solid transparent;'>&nbsp;</div>|" + I(283)[12] + ",,|" + I(283)[13] + ",,)</td></tr><tr><td colspan=3 align=right style='padding:0;'><table cellpadding=0 cellspacing=0 style='border-collapse:collapse;'><tr><td style='padding-right:0.5em;'>" + I(283)[14] + ",</td></tr></table></tr></table><div id=rnktab_><br><br>" + v(I(280)) + "</div></div>") : (h += "<div style='display:none;'><span style='display:none;'>" + (1E4 > B ? "個室L" : "大会C") +
                    Ya(4, B % 1E4) + "</span><div style='height:8.5em;border:1px solid #444;text-align:left;margin-bottom:0.5em;position: relative;'><button name=chatInput style='font-size:100%;position:absolute;right:0;top:8.5em;'>&middot;&middot;&middot;</button><div id=chat style='height:100%;font-size:75%;overflow-y:scroll;user-select:text;'><div>#ENTER LOBBY " + B + "</div></div></div>", 1E4 > B ? h += l(3) : 2E4 > B && (h += "<span style='font-size:150%;padding:0 1em;'>" + v(I(268)) + "<span id=lnj2>" + ~~J.ab[0] + "</span>" + v(I(270)) + " " + v(I(269)) +
                        "<span id=lng2>" + ~~J.Wa[0] + "</span>" + v(I(270)) + "</span><button name=join id=joincs2 disabled>　</button>"), h += "</div>");
                0 == B && (h += w("<div style='display:none;'><span style='display:none;'>" + I(284) + "</span>" + l(4) + "<table cellpadding=0 cellspacing=0 id=pftab style='margin:0 auto;'><tr><td valign=top style='min-width:6.5em;'>(" + I(285)[0] + ",|" + I(285)[1] + ",|" + I(285)[2] + ",|" + I(285)[3] + ",|" + I(285)[4] + ",)</td><td style='width:1em;'></td><td valign=top style='min-width:8em;'>(" + I(285)[5] + ",|" + I(285)[6] +
                        ",|" + I(285)[7] + ",|" + I(285)[8] + ",|" + I(285)[9] + ",)</td><td style='width:1em;'></td><td valign=top style='min-width:6.5em;'>(" + I(285)[10] + ",|" + I(285)[11] + ",|" + I(285)[12] + ",|" + I(285)[13] + ",|" + I(285)[14] + ",)</td></tr><tr><td colspan=5 class=gray style='font-size:75%;padding:0.2em;'></td></tr></table><div id=pftab_><br><br>" + v(I(280)) + "</div></div>"));
                h += "<div class='nohdr init_hlist' style='display:none;height:100%;'><span style='display:none;'>" + I(200) + "</span><div style='position:relative;height:100%;'><div class=sscl id=hlist style='position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;'></div><div class=sblink style='visibility:hidden;'>▼</div></div></div>";
                h += "<div class='nohdr init_klist' style='display:none;height:100%;'><span style='display:none;'>" + I(210) + "</span><div style='position:relative;height:100%;'><div class=sscl id=klist style='position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;'></div><div class=sblink style='visibility:hidden;'>▼</div><button name=wgF0 class='ra0 bgb' style='position:absolute;left:0em;bottom:0em;'>－</button><button name=wgF1 class='ra0 bgb' style='position:absolute;left:2em;bottom:0em;'>－</button><button name=wgF2 class='ra0 bgb' style='position:absolute;left:4em;bottom:0em;'>－</button></div></div>";
                h = h + "<div class='nohdr init_tlist' style='display:none;height:100%;'><span style='display:none;'>Trainingβ</span><div style='position:relative;height:100%;'><div class=sscl id=tlist style='position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;'></div><div class=sblink style='visibility:hidden;'>▼</div></div></div>" + ("<div style='display:none;padding:2em 0'><span style='display:none;'>Tools</span> <button name=openurl>OpenURL</button> <button name=help>" + I(286) + "</button> <button name=hairi>" +
                        I(287) + "</button><br><br><button name=purchase>" + I(288) + "</button><br></div>");
                hb && (h += "<div style='display:none;'><span style='display:none;'>Caution</span><div style='padding:1em 4em;'>" + I(213) + "</div></div>");
                h += "</div><hr>";
                k = !!Object.keys(E).length;
                f.innerHTML = h + ("<table cellpadding=0 cellspacing=0 style='width:100%;'><tr><td style='position:relative;vertical-align:middle;'><div id=paneDisp style='position:absolute;font-size:300%;width:100%;padding:0.25em 0;pointer-events:none;'>　</div><button name=panePrev class=ra1 style='font-size:300%;width:50%;height:1.5em;'>　</button><button name=paneNext class=ra2 style='font-size:300%;width:50%;height:1.5em;'>　</button></td><td style='width:9.5em;'><button name=cancel style='width:100%;height:2.5em;" +
                        (k ? "" : "display:none;") + "'>CANCEL</button><button name=logout style='width:100%;height:2.5em;" + (k ? "display:none;" : "") + "'>LOGOUT</button></td></tr></table>");
                zc(f);
                A["#rule0"]();
                e();
                c();
                n();
                d(0);
                1E4 <= B && 2E4 > B && (g(), b({
                        rankingcs: ""
                    }), W.Na = -1, W.K('<PXR V="-1" />'))
            },
            mc: function (a) {
                J.n = a.n.split(",");
                J.ab = a.j.split(",");
                J.Wa = a.g.split(",");
                Z.lnn0 && (Z.lnn0.innerText = ~~J.n[0], Z.lnn2.innerText = ~~J.n[2], Z.lnn3.innerText = ~~J.n[3], A["#rule0"]());
                for (a = 0; 3 > a; ++a)
                    Z["lnj" + a] && (Z["lnj" + a].innerText = ~~J.ab[0]), Z["lng" +
                        a] && (Z["lng" + a].innerText = ~~J.Wa[0]);
                return 1
            },
            ic: function (a) {
                var b = a.lobby;
                b && (4 == b.length ? (B = ~~b, A.o({
                            tag: "LOBBY"
                        })) : 9 == b.length && (B = ~~("1" + b.substr(1, 4))));
                var b = ab.getElementById("chat"),
                c = a.text;
                c && c.length && (c = decodeURIComponent(c));
                var e = a.hidden;
                if (b && c && c.length && "1" != e) {
                    var e = a.uname,
                    f = a.color && a.color.match(/[0-9A-Fa-f]{6}/) ? "#" + a.color : e ? "" : "#FF0";
                    e && e.length && (c = decodeURIComponent(e) + ": " + c);
                    a = ab.createElement("DIV");
                    f && (a.style.color = f);
                    a.innerText = c;
                    e = b.scrollHeight;
                    f = b.scrollTop + 1.1 *
                        b.clientHeight;
                    b.appendChild(a);
                    e <= f && (b.scrollTop = b.scrollHeight)
                }
                if (c && c.match(/^\/prompt /)) {
                    var b = c.split(" "),
                    l = b[1],
                    c = ~~b[2],
                    g = b[3],
                    h = b[4];
                    a = "";
                    for (e = 5; e < b.length; ++e)
                        a += b[e] + (e != b.length - 1 ? " " : "");
                    a = Da(a).replace(/&lt;br&gt;/g, "<br>");
                    x.o(a, 3, function () {
                        W.K({
                            tag: "CHAT",
                            text: "/prompt " + l + " " + g
                        })
                    }, function () {
                        W.K({
                            tag: "CHAT",
                            text: "/prompt " + l + " " + h
                        })
                    }, c, g, h)
                } else
                    "/attention please" == c && (da = 4, d(0));
                return 1
            },
            jc: function (a) {
                a && (y = a, y.rule = y.rule.split(","), y.join = ~~y.join, y.joinfee = ~~y.joinfee,
                    y.players = ~~y.players, y.premiumonly = ~~y.premiumonly);
                if (Z.joincs0)
                    return g(), 1;
                A.o({
                    tag: "LOBBY"
                }, function () {
                    W.Da()
                })
            },
            kc: function (a) {
                var b = Z.joincs0;
                if (!b)
                    return 1;
                a = k(a.t);
                var c = k(y.rule[0]),
                d = k(y.rule[1]);
                if (d <= a)
                    b.innerText = I(277), b.disabled = !0;
                else if (y.Ea)
                    if (a < c) {
                        var e = (c - a) / 1E3;
                        b.innerText = I(278)[0] + (86400 < e ? (e / 24 / 60 / 60).toFixed(1) + I(278)[1] : 3600 < e ? (e / 60 / 60).toFixed(1) + I(278)[2] : 60 < e ? (e / 60).toFixed(1) + I(278)[3] : 5 * ~~(e / 5) + I(278)[4]);
                        b.disabled = !0
                    } else
                        e = parseInt(y.rule[2], 16), b.innerText = I(216),
                        b.disabled = !!E[e];
                else
                    y.joinfee ? (b.innerText = I(274), b.disabled = !1) : y.premiumonly ? (b.innerText = I(275), b.disabled = !1) : (b.innerText = I(276), b.disabled = !0);
                Z.joincs1.innerText = Z.joincs2.innerText = b.innerText;
                Z.joincs1.disabled = Z.joincs2.disabled = b.disabled;
                oa || (oa = setTimeout(h, a < c - 6E4 || d < a || c < a && a < d - 3E4 ? 3E4 : 5E3));
                return 1
            },
            oc: c,
            pc: function (a) {
                Z.joincs0 && b(a)
            },
            panePrev: function () {
                d(-1)
            },
            paneNext: function () {
                d(1)
            },
            testplay: function () {
                x.Y("<div class=A id='#testplay-64'>" + ka(64) + "<div class=desc>(４人打 東風 喰断アリ 赤アリ 速)</div></div><div class=A id='#testplay-0'>" +
                    ka(0) + "<div class=desc>(４人打 東風 喰断アリ 赤アリ)</div></div><div class=A id='#testplay-16'>" + ka(16) + "<div class=desc>(３人打 東風 喰断アリ 赤アリ)</div></div><div class=A id='#testplay-1536'>" + ka(1536) + "<div class=desc>(４人打 東風 喰断アリ 赤アリ 祝儀)</div></div><div class=A id='#testplay-1552'>" + ka(1552) + "<div class=desc>(３人打 東風 喰断アリ 赤アリ 祝儀)</div></div><div class=A id='#testplay-2064'>東天紅 三麻β<div class=desc>(３人打 東天紅)</div></div>",
                    "font-size:80%;text-align:left;", 0)
            },
            "#testplay": function (a, b) {
                if (f()) {
                    var c = ~~b;
                    ob(!0, 3, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    W.K({
                        tag: "JOIN",
                        t: B + "," + c
                    })
                }
            },
            rule: function (a) {
                A["#rule0"]("#" + a.id)
            },
            "#rule0": function (b, d) {
                for (var f = 0; f < na.length; ++f)
                    J[na[f]] = ~~J.ab[f] + ":<div class=n2r>" + ~~J.Wa[f] + "</div>";
                var l = [],
                g = A[2],
                h = A[17],
                k = A[16],
                m = "";
                b && void 0 === d && (m += "<div class=A id='" + b + "-0'>SELECT GAME</div>");
                for (var n = Cc.concat(~~H.swar ? Dc : []), f = 0; f < n.length; ++f) {
                    var z = !0,
                    w = n[f],
                    y = w & 16 ? k : h;
                    if (!B)
                        switch (ja(w) + 4 * (0 != (w & 1536))) {
                        case 0:
                            z = 13 <= y[0] && 1800 <= y[2] ? !1 : !0;
                            break;
                        case 1:
                            z = 16 <= y[0] && 2E3 <= y[2] ? !1 : 9 <= y[0] || 60 <= g;
                            break;
                        case 2:
                            z = 13 <= y[0] && 1800 <= y[2] ? !0 : !1;
                            break;
                        case 3:
                            z = 16 <= y[0] && 2E3 <= y[2] ? g : !1;
                            break;
                        case 6:
                            z = 13 <= y[0] && 1800 <= y[2] ? g : !1
                        }
                    else if (1E4 > B && ja(w) + 4 * (0 != (w & 1536)))
                        continue;
                    z ? (l[w] = 1, m && (m += "<div class='A nobr'id='" + b + "-" + w + "'>" + C(w) + "</div>")) : m && "#rule3" == b && (m += "<div class='A nobr' id='" + b + "-" + w + "'>" + ka(w) + "</div>")
                }
                b && "#rule3" != b && m && !B && (9 <= h[0] || 60 <= g || (m += "<div class=A id='" +
                        b + "-128'>※四麻上級卓</div>"), 9 <= k[0] || 60 <= g || (m += "<div class=A id='" + b + "-144'>※三麻上級卓</div>"), 13 <= h[0] && 1800 <= h[2] || (m += "<div class=A id='" + b + "-32'>※四麻特上卓</div>"), 13 <= k[0] && 1800 <= k[2] || (m += "<div class=A id='" + b + "-48'>※三麻特上卓</div>"), 13 <= h[0] && 1800 <= h[2] && g || (m += "<div class=A id='" + b + "-1056'>※四麻雀荘戦</div>"), 13 <= k[0] && 1800 <= k[2] && g || (m += "<div class=A id='" + b +
                        "-1072'>※三麻雀荘戦</div>"), 16 <= h[0] && 2E3 <= h[2] && g || (m += "<div class=A id='" + b + "-160'>※四麻鳳凰卓</div>"), 16 <= k[0] && 2E3 <= k[2] && g || (m += "<div class=A id='" + b + "-176'>※三麻鳳凰卓</div>"));
                b && void 0 === d && (m += "<div class=A id='" + b + "-showall'>※喰断ナシON/OFF</div>");
                if (m)
                    x.Y(m, "text-align:left;", 0);
                else if (b && "showall" == d)
                    Gb("swar", ~~!~~H.swar, 0);
                else {
                    g = a();
                    5 > g.length && (g = [1, 9]);
                    if (b) {
                        if (g[~~b.slice(-1)] == d)
                            return;
                        g[~~b.slice(-1)] = ~~d
                    }
                    for (f = 0; 5 > f; ++f)
                        if (Z["rule" + f] && Z["join" + f]) {
                            w = ~~g[f];
                            if (0 == (w & 2048) && ~w & 1) {
                                switch (w) {
                                case 128:
                                case 144:
                                    x.o(I(223));
                                    break;
                                case 32:
                                case 48:
                                    x.o(I(224));
                                    break;
                                case 160:
                                case 176:
                                    x.o(I(225));
                                    break;
                                case 1056:
                                case 1072:
                                    x.o(I(226))
                                }
                                w = 0
                            }
                            3 == f && w && !l[w] ? (g[f] = w, Z["join" + f].disabled = !0, Z["rule" + f].innerHTML = ka(w)) : (l[w] || (w = 0), E[w] || (Z["join" + f].disabled = !w), g[f] = w, Z["rule" + f].innerHTML = C(w))
                        }
                    H.rule = g;
                    "#rule3" == b && c();
                    "#rule4" == b && e()
                }
            },
            join: function (b) {
                if (f()) {
                    var c;
                    if ("joincs0" != b.id &&
                        "joincs1" != b.id && "joincs2" != b.id) {
                        var d = a();
                        c = d[~~b.id.slice(-1)];
                        for (b = 0; 5 > b; ++b)
                            c == d[b] && Z["rule" + b] && (Z["rule" + b].disabled = Z["join" + b].disabled = !0)
                    } else if (y.Ea)
                        c = parseInt(y.rule[2], 16), Z.joincs0.disabled = Z.joincs1.disabled = Z.joincs2.disabled = !0;
                    else {
                        if (y.joinfee) {
                            var e = H.uname;
                            if (!e || !e.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                x.o(I(272));
                                return
                            }
                            if (Ta(y.title).match(/Ⓟ/) && !A[0].match(/Ⓟ/))
                                return x.o("本大会はプロID限定の大会です");
                            x.o(I(273).replace("###", y.joinfee), 3, function () {
                                Va(qa[32]() + "?lobby=" + B + "&uname=" + e, function (a) {
                                    a = Ea(a);
                                    D.ERR({
                                        code: a.res
                                    });
                                    1027 == a.res && (A[1] = a.expire, n(), A.Eb())
                                })
                            });
                            return
                        }
                        if (y.premiumonly) {
                            e = H.uname;
                            if (!e || !e.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                x.o(I(271));
                                return
                            }
                            D.ERR({
                                code: 1020
                            });
                            return
                        }
                    }
                    ob(!0, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    W.K({
                        tag: "JOIN",
                        t: B + "," + c
                    });
                    E[c] = 1
                }
            },
            openurl: function () {
                x.o(I(289) + "<br><input type=text size=20 style='font-size:100%;'/>", 3, function (a) {
                    a =
                        a.getElementsByTagName("INPUT")[0];
                    t.Mc(a.value)
                })
            },
            cancel: function () {
                ob(!1, "rule", "join", 1);
                Z.cancel.style.display = "none";
                Z.logout.style.display = "";
                E = {};
                A["#rule0"]();
                W.K({
                    tag: "JOIN"
                })
            },
            logout: function () {
                ob(!0, 3, 1);
                u.la(11)
            },
            purchase: function () {
                var a = H.uname;
                a && a.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? pa && store ? A.o({
                    tag: "STORE"
                }) : q.open("https://tenhou.net/reg/?ID" + RegExp.$1, "_blank") : x.o("ログイン画面の「新規ID」からIDを取得してください")
            },
            hairi: function () {
                q.open("https://tenhou.net/2/", pa ? "_system" : "_blank")
            },
            help: function () {
                q.open("https://tenhou.net/man/", pa ? "_system" : "_blank")
            },
            chatInput: function () {
                x.o("CHAT:<input type=text size=15 style='font-size:100%;'/>", 3, function (a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    (a = a.value) && W.K({
                        tag: "CHAT",
                        text: a
                    })
                })
            },
            Lc: function (b) {
                if (Z.hdr && !Z.joincs0) {
                    var c = Z.hdr.childNodes;
                    if (c && !(2 > c.length))
                        if (b && "join" == b.name) {
                            var d = c[1];
                            b = ~~a()[~~b.id.slice(-1)];
                            var e = ~~A[17][0],
                            f = ~~A[16][0],
                            l = "";
                            if (!(b &
                                    3584)) {
                                var g = [0, 0, 0, 0];
                                switch (ja(b)) {
                                case 0:
                                    g[0] = 20;
                                    g[1] = 10;
                                    break;
                                case 1:
                                    g[0] = 40;
                                    g[1] = 10;
                                    break;
                                case 2:
                                    g[0] = 50;
                                    g[1] = 20;
                                    break;
                                case 3:
                                    g[0] = 60,
                                    g[1] = 30
                                }
                                b & 16 ? (g[0] += g[1], g[1] = 0, g[2] = la[f]) : g[3] = la[e];
                                b & 8 && (g[0] *= 1.5, g[1] *= 1.5, g[2] *= 1.5, g[3] *= 1.5);
                                l += ba[b & 16 ? f : e] + v("[");
                                l = b & 16 ? l + (v("1" + Ec(1)) + "+" + g[0] + "   " + v("2" + Ec(2)) + "+" + g[1] + "   " + v("3" + Ec(3)) + (0 > g[2] ? "" : "+") + g[2]) : l + (v("1" + Ec(1)) + "+" + g[0] + "   " + v("2" + Ec(2)) + "+" + g[1] + "   " + v("3" + Ec(3)) + "+0   " + v("4" + Ec(4)) + (0 > g[3] ? "" : "+") + g[3]);
                                l += v("]") + " "
                            }
                            l += ub((0 !=
                                    (b & 2048) ? "１局" : b & 8 ? "東南" : "東風") + (b & 3584 ? "打ち切り" : b & 16 ? "+3局サドンデス" : "+4局サドンデス"));
                            l += " " + ub(v("ウマ") + (0 != (b & 2048) ? "×" : 0 != (b & 1536) ? b & 16 ? "0-30" : "10-30" : b & 16 ? "0-20" : "10-20"));
                            l += " " + ub(v("1本場") + (0 != (b & 2048) ? "--" : 0 != (b & 1536) && ~b & 8 ? b & 16 ? "1000" : "1500" : b & 16 ? "200" : "300"));
                            l += " " + ub(v("明槓ドラ") + (b & 3584 ? "先" : "後"));
                            l += " " + ub(v("喰断") + (b & 4 ? "×" : "○"));
                            l += " " + ub(v("祝儀") + (~b & 512 ? "×" : b & 1024 ? "1枚5000点" : "1枚2000点"));
                            l += " " + ub(v("東西場") + (0 != (b & 1536) && ~b & 8 ? "○" : "×"));
                            l += " " + ub(v("和了止め") + "○");
                            l += " " + ub(v("聴牌止め") + "○");
                            0 != (b & 1536) && (l += " " + ub(v("段位変動") + "ナシ"));
                            d.innerHTML = l;
                            c[0].style.display = "none";
                            c[1].style.display = ""
                        } else
                            c[1].innerHTML = "", c[0].style.display = "", c[1].style.display = "none"
                }
            },
            Qc: function (b) {
                var c = a();
                c[3] =
                    c[4] = b;
                H.rule = c
            }
        }
    }
        ());
    A["#rule1"] = A["#rule2"] = A["#rule3"] = A["#rule4"] = A["#rule0"];
    za(A, function () {
        function a() {
            Z.uname.value = H.uname && 19 == H.uname.length && (~~H.hideid || H.gpid) ? "ID########-########" : H.uname || "NoName"
        }
        var e = new Image;
        setTimeout(function () {
            e.src = "https://cdn.tenhou.net/3/res/img/bglogow_0921x0651.png"
        }, 1);
        return {
            LOGIN: function (c, b) {
                var f = "";
                location.search.match(/^\?(L[1-9][0-9]{3})/) ? f = v(I(300)) + RegExp.$1 : location.search.match(/^\?(C[0-9]{8})/) && (f = v(I(301)) + RegExp.$1.substr(0, 5));
                b.style.border = "";
                f = "" + ("<div style='position:relative;'><div class=select-wrapper style='float:left;'><button name=lang></button></div><button name=cfg style='float:right;font-family:cwTeX-Q-Kai-T,icons2,serif;''></button><img src='" +
                        e.src + "' width=" + ~~(3.683 * N[1] * 2.3 / r) + " height=" + ~~(2.604 * N[1] * 2.3 / r) + " style='margin:0.5em 0;'/><span style='position:absolute;bottom:2em;'>" + f + "</span></div><div id=pane0><table cellpadding=0 cellspacing=0 width=100%><tr><td><input name=uname size=22 style='margin:0;padding:0;color:#fff;background:none;text-align:center;border:solid 1px #444;width:100%;'/></td><td width=1><div class=select-wrapper><button name=sx></button></div></td><td width=1><button name=ok style='padding:0 1em;'>OK</button></td></tr></table><button name=clearid>" +
                        I(320) + "</button><div class=select-wrapper><button name=mvlb>" + (f ? I(326) : I(325)) + "</button></div></div><div id=pane1><button class=w100 name=ok>" + I(310) + "</button><br><button name=regid>" + I(311) + "</button><button name=idcont>" + I(312) + "</button><br></div>");
                b.innerHTML = f;
                zc(b);
                Z.pane0.style.display = Z.pane1.style.display = "none";
                Z["pane" + (H.uname ? 0 : 1)].style.display = "";
                A["#sx"]();
                A["#lang"]();
                a();
                gb && pa && ua(Z.uname, {
                    focus: function () {
                        wb(1)
                    },
                    blur: function () {
                        wb()
                    }
                });
                "AUTOLOGIN" == c.tag || H.gpid ? (A.b.style.display =
                        "none", A.ok()) : Yb.s.canvas.style.visibility = "hidden"
            },
            NINTEI: function (a, b) {
                hc().Gc = Bc(3E3);
                var c = a.nintei,
                d = "%E6%96%B0%E4%BA%BA %EF%BC%99%E7%B4%9A %EF%BC%98%E7%B4%9A %EF%BC%97%E7%B4%9A %EF%BC%96%E7%B4%9A %EF%BC%95%E7%B4%9A %EF%BC%94%E7%B4%9A %EF%BC%93%E7%B4%9A %EF%BC%92%E7%B4%9A %EF%BC%91%E7%B4%9A %E5%88%9D%E6%AE%B5 %E4%BA%8C%E6%AE%B5 %E4%B8%89%E6%AE%B5 %E5%9B%9B%E6%AE%B5 %E4%BA%94%E6%AE%B5 %E5%85%AD%E6%AE%B5 %E4%B8%83%E6%AE%B5 %E5%85%AB%E6%AE%B5 %E4%B9%9D%E6%AE%B5 %E5%8D%81%E6%AE%B5 %E5%A4%A9%E9%B3%B3%E4%BD%8D".split(" "),
                e = !1,
                m = -1,
                n = "",
                g = "20201010";
                c.match(/%E3%82%B5%E3%83%B3%E3%83%9E/) && (e = !0);
                c.match(/ ((?:%[0-9A-F]{2})+)%0A%0A/) && (m = d.indexOf(RegExp.$1));
                c.match(/%0A%0A([^ ]+) %E6%AE%BF%0A/) && (n = decodeURIComponent(RegExp.$1));
                c.match(/%0A%0A(\d{4})%E5%B9%B4(\d{2})%E6%9C%88(\d{2})%E6%97%A5%0A/) && (g = RegExp.$1 + RegExp.$2 + RegExp.$3);
                c = decodeURIComponent(c);
                0 < m && n && (c = (e ? I(351) : I(350)).replace(/\$UNAME/g, n).replace(/\$DAN/g, decodeURIComponent(d[m])).replace(/\$YYYY/g, g.substr(0, 4)).replace(/\$MM/g, g.substr(4, 2)).replace(/\$DD/g,
                        g.substr(6, 2)));
                c = c.replace(/\n/g, "<br>");
                b.innerHTML = "<div style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'>認定</div><div style='text-align:left;margin:1em 0;display:inline-block;'>" + c + "</div><button name=ok style='padding:0 2em;'>OK</button>";
                zc(b)
            },
            clearid: function () {
                x.o(I(331), 3, function () {
                    H.removeItem("uname");
                    a();
                    Z.pane0.style.display = "none";
                    Z.pane1.style.display = ""
                })
            },
            sx: function () {
                x.Y("<div class=A id='#sx-M'>" + I(323) + "</div><div class=A id='#sx-F'>" + I(324) + "</div>",
                    "", 0)
            },
            "#sx": function (a, b) {
                "F" == (a ? b : "F" == H.sx ? "F" : "") ? (Z.sx.innerHTML = I(322), H.sx = "F") : (Z.sx.innerHTML = I(321), H.removeItem("sx"))
            },
            lang: function () {
                var a = "",
                b;
                for (b in Ib)
                    a += "<div class=A id='#lang-" + b + "'>" + b + "</div>";
                x.Y(a, "", 0)
            },
            "#lang": function (a, b) {
                var c = Mb.sb(),
                d = a ? b : Mb.sb();
                Z.lang.innerHTML = d;
                Mb.sb(d);
                c != d && location.reload()
            },
            cfg: function () {
                A.o({
                    tag: "CONFIG"
                })
            },
            mvlb: function () {
                x.Y("<a class=A href='?L0000' >" + I(340) + I(341) + "</a><a class=A href='?C00112233' >" + I(342) + I(343) + "</a><a class=A href='?C00223344' >" +
                    I(344) + I(345) + "</a><div class=A id='#sellb' >" + I(346) + I(347) + "</div><a class=A href='https://tenhou.net/make_lobby.html' target=_blank>" + I(348) + I(349) + "</a>", "font-size:80%;", 0)
            },
            "#sellb": function () {
                var a = "0000";
                location.search.match(/^\?(L[1-9][0-9]{3}|C[0-9]{8})/) && (a = RegExp.$1.substr(1));
                x.o(I(330) + "<div style='font-size:75%;'>" + I(300) + "L<span style='color:#F00;'>8141</span> / " + I(301) + "C<span style='color:#F00;'>00112233</span></div><input type=text size=15 value='" + a + "' style='font-size:100%;'/><br>",
                    3, function (a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    a = a.value;
                    a.match(/^L?(\d{4})$/) ? location.href = "?L" + RegExp.$1 : a.match(/^C?(\d{8})$/) && (location.href = "?C" + RegExp.$1)
                })
            },
            regid: function () {
                x.o(I(313) + "<br><input type=text size=22 style='font-size:100%;'/><br>", 3, function (a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    var b = a.value;
                    if (b)
                        return Va(qa[30]() + encodeURIComponent(b), function (a) {
                            a = Ea(a);
                            0 != a.res ? D.ERR({
                                code: a.res
                            }) : (b = decodeURIComponent(a.uname), x.o(b + "<br><br>" + I(314), 3, function () {
                                    Va(qa[31]() + encodeURIComponent(b),
                                        function (a) {
                                        a = Ea(a);
                                        1012 != a.res ? D.ERR({
                                            code: a.res
                                        }) : (H.uname = Z.uname.value = a.id, x.o(I(1012)), Z.pane0.style.display = "", Z.pane1.style.display = "none")
                                    })
                                }))
                        }), !0
                })
            },
            idcont: function () {
                x.o(I(327) + "<br><input type=text size=22 value='ID00000000-aabbccdd' style='font-size:100%;margin:0.25em'/><br><div id=info></div><small class=gray>" + I(328) + "</small>", 3, function (c) {
                    c = c.getElementsByTagName("INPUT")[0];
                    var b = c.value;
                    c = ab.getElementById("info");
                    if ("ID00000000" != b.substr(0, 10) && b.match(/^ID[0-9A-F]{8}\-[0-9a-zA-Z]{8}$/))
                        c.innerHTML =
                            "";
                    else
                        return c.innerHTML = "<span style='font-size:75%;color:#F00'>" + I(329) + "</span>", !1;
                    H.uname = b;
                    a();
                    Z.pane0.style.display = "";
                    Z.pane1.style.display = "none";
                    return !0
                })
            }
        }
    }
        ());
    A.AUTOLOGIN = A.LOGIN;
    za(A, {
        SPLASH: function (a, e) {
            for (var c = q.tenhouEventInfo, b = 4 > c.length ? 2 : 5, f = .5 > Math.random() ? 0 : 2, d = "<table cellpadding=0 cellspacing=0 align=center width=100% style='font-size:0;'><tr>", k = 0; k < b; ++k) {
                var m = c.splice(Math.floor(Math.random() * c.length), 1)[0],
                n = k != f && 5 == b ? 1 : 2,
                d = d + ("<td rowspan=" + n + " colspan=" + n + " width=" + 25 * n + "% ><a href='https://tenhou.net" + m.href + "' target=_blank><img src='https://cdn.tenhou.net" + (m.img ? m.img : m.href + "title.jpg") + "' border=0 style='width:100%;'/></a></td>");
                2 == k && (d += "</tr><tr>");
                c.length < b - k - 1 && c.push(m)
            }
            d += "</tr></table><div style='padding:0.75em 0;'><small>";
            q.info && (d += q.info);
            q.tenhouAnnounce && (d += q.tenhouAnnounce);
            c = location.href.replace(/^https?:/, "tenhouapp:");
            b = "https://tenhou.net/4/" + location.search;
            d += "</small></div><div style='position:relative;'><button disabled name=ok style='width:6em;'>OK</button>";
            pa || (d += "<a href='" + c + "' style='position:absolute;border:1px solid #444;border-radius: 0.2em;top:0.75em;padding:0.5em;color:#888;right:0;'>アプリで開く</a>");
            pa || (d += "<div style='position:absolute;left:0;top:1.25em;'><span style='position:absolute;color:#F00;font-weight:bold;font-size:75%;top:-2em;'>NEW!</span><a href='" + b + "' style='border:1px solid #444;border-radius:0.2em;padding:0.5em;color:#888;'>Desktop4K版で開く</a></div>");
            e.innerHTML = d + "</div>";
            zc(e);
            setTimeout(function () {
                Z.ok.disabled = !1
            }, 1E3)
        }
    });
    za(A, function () {
        var a;
        return {
            STORE: function (e, c) {
                a = -1;
                var b;
                b = "" + ("<div><br><br>" + I(352) + "<br><br><div class=select-wrapper><button name=iap>SELECT PRODUCT</button></div><br><br><button name=storePurchase style='width:8em;'>" + I(353) + "</button><br></div><br><br><hr><button name=exit style='width:6em;'>CLOSE</button>");
                c.innerHTML = b;
                zc(c)
            },
            storePurchase: function () {
                if (-1 != a) {
                    var e = H.uname;
                    e.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) && (e = RegExp.$1, store.order(a).then(function () {
                            ob(!0, 2)
                        }).error(function (a) {
                            ob(!1,
                                2);
                            x.o("STORE ERROR " + a.code + ": " + a.message)
                        }))
                }
            },
            iap: function () {
                var a = "",
                c;
                for (c in store.products) {
                    var b = store.products[c];
                    b.valid && (a += "<div class=A id='#iap-" + c + "'>" + ub(b.title) + "<br>" + b.price + "</div>")
                }
                x.Y(a, "font-size:75%;", 0)
            },
            "#iap": function (e, c) {
                var b = store.products[~~c];
                a = b.id;
                Z.iap.innerHTML = b.title + " " + b.price
            }
        }
    }
        ());
    pa && ta(ab, "deviceready", function () {
        if (1.3 > (q.storeVersion || 0)) {
            var a = "net.tenhou.catalog20170119.";
            store.register({
                id: a + "ex30",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex60",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex120",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex180",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex300",
                type: store.CONSUMABLE
            })
        } else
            a = "net.tenhou.catalog20170211.", store.register({
                id: a + "ex30",
                type: store.NON_RENEWING_SUBSCRIPTION
            }), store.register({
                id: a + "ex60",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex120",
                type: store.NON_RENEWING_SUBSCRIPTION
            }), store.register({
                id: a + "ex180",
                type: store.NON_RENEWING_SUBSCRIPTION
            }), store.register({
                id: a + "ex300",
                type: store.NON_RENEWING_SUBSCRIPTION
            }), store.register({
                id: a + "ex600",
                type: store.NON_RENEWING_SUBSCRIPTION
            });
        store.when("product").approved(function (a) {
            H.uname.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? (store.validator = "https://tenhou.net/reg/via_cordova.cgi?id=" + RegExp.$1, a.verify()) : a.finish()
        });
        store.when("product").verified(function (a) {
            a.finish()
        });
        store.when("product").finished(function () {
            ob(!1, 2)
        });
        store.when("product").cancelled(function () {
            ob(!1, 2)
        });
        store.error(function (a) {
            "6777001" == a.code || "6777002" == a.code ? store = void 0 : rb("------ error", JSON.stringify(a));
            ob(!1, 2)
        });
        store.ready(function () {});
        store.refresh()
    });
    za(A, function () {
        function a(a) {
            return a.replace(/\s+$/, "")
        }
        function e(a) {
            return Eb(a).replace(/(\d)([mpsz])(?![mpsz])/g, function (a, b, c) {
                a = ("m" == c ? 10 : "p" == c ? 20 : "s" == c ? 30 : 40) + ~~b;
                10 == a && (a = 51);
                20 == a && (a = 52);
                30 == a && (a = 53);
                40 == a && (a = 69);
                b = ~~(.6 * N[0]);
                return "<img src='" + qa[11]() + "/6/img/edit" + Ya(3, b) + 0 + Ya(2, a) + ".png' style='background:" + (69 == a ? "#444" : "#EEE") + ";vertical-align:middle;' width='" + b / r + "px' />"
            })
        }
        function c(a) {
            var b = a >> 2;
            return (27 > b && 16 == a % 36 ? "0" : b % 9 + 1) + "mpsz".substr(b / 9, 1)
        }
        function b(a) {
            Z.trtitle.innerHTML =
                h.title || "天鳳トレーニング";
            Z.trprogress.innerHTML = "<span class=gray style='float:right;font-weight:bold;'>" + (a ? "A" : "Q") + Ya(2, g ? g[0] + 1 : 1) + "/" + Ya(2, g ? g.container.length : 1) + "</span>";
            Z.trmain.innerHTML = e((h[a ? "explanation" : "question"] || "").replace(/\n/g, "<br>"));
            Z.trmain.style.height = (a ? 14 : 8) + "em";
            Z.ok.disabled = !1;
            switch (a) {
            case 0:
                C = !1;
                A.b.classList.remove("hide");
                Z.ok.innerHTML = "OK";
                W.qb();
                D.fa();
                D.connected = 15;
                a = A[17] || "";
                W.ra({
                    tag: "UN",
                    n0: A[0] || "自家",
                    n1: "下家",
                    n2: "対面",
                    n3: "上家",
                    dan: ~~a[0] + ",0,0,0",
                    rate: parseFloat(a[2]) + ",0,0,0",
                    sx: ("F" == H.sx ? "F" : "M") + ",M,M,M"
                });
                D.ma = 0;
                Yb.X();
                var b = [p(Fb(h.hai0)), p(Fb(h.hai1)), p(Fb(h.hai2)), p(Fb(h.hai3))];
                a = [];
                h.packet && Array.prototype.push.apply(a, JSON.parse(JSON.stringify(h.packet)));
                2 == b[0].length % 3 && a.push({
                    tag: "T" + b[0].pop()
                });
                var c = (h.seed ? h.seed : "0,0,0,0,0,").split(",");
                h.kyoku && (c[0] = h.kyoku);
                h.honba && (c[1] = h.honba);
                h.nagare && (c[2] = h.nagare);
                h.dora && (c[5] = c[5] = Fb(h.dora));
                W.ra({
                    tag: "TRAININGINIT",
                    seed: "" + c,
                    ten: h.ten,
                    oya: ~~h.oya,
                    hai0: "" + Sa(b[0]),
                    m0: h.m0,
                    kawa0: Fb(h.kawa0),
                    hai1: "" + Sa(b[1]),
                    m1: h.m1,
                    kawa1: Fb(h.kawa1),
                    hai2: "" + Sa(b[2]),
                    m2: h.m2,
                    kawa2: Fb(h.kawa2),
                    hai3: "" + Sa(b[3]),
                    m3: h.m3,
                    kawa3: Fb(h.kawa3)
                });
                for (b = 0; b < a.length; ++b)
                    W.ra(yb.nb(a[b]));
                break;
            case 1:
                Z.ok.innerHTML = "NEXT"
            }
            A.Mb(1)
        }
        function f(a) {
            l ? a() : Va(qa[21]() + "auth.cgi?" + H.uname, function (b) {
                l = b;
                a()
            }, function () {
                D.ERR({
                    code: 1200
                })
            })
        }
        function d(a) {
            h = g = void 0;
            z = a.match(/\.json$/) ? a : "free-sample.json";
            Va(qa[21]() + z + "?" + l, function (b) {
                try {
                    h = JSON.parse(b)
                } catch (da) {
                    alert("JSONに不具合があるため読み込めませんでした\n\n" +
                        da);
                    return
                }
                if ("membersonly" == h.error || "subscribe" == h.error) {
                    b = H.uname;
                    if (!b || !b.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return D.ERR({
                            code: 1200
                        });
                    "membersonly" == h.error ? x.o("この問題は有料会員に公開されています。<br><br>会費のお支払いをお願いいたします。", 3, A.purchase, A.exit) : x.Y("<div style='margin:0.5em;'>購読期間と料金を選択してください。</div><div class=A id='#trs-1'>1日間 - 有効期限7日分</div><div class=A id='#trs-7'>7日間 - 有効期限8日分</div><div class=A id='#trs-21'>21日間 - 有効期限9日分</div>",
                        "", 0)
                } else if (h.container)
                    g = h, A["#trjump"](0, 0);
                else if (t.tredit) {
                    if (!Z.json)
                        if (90 > A[2])
                            alert("編集機能を利用するには有効期限の残り日数が90日以上必要です。");
                        else {
                            Ob.style.height = Nb = 0;
                            cb.style.overflow = "";
                            for (var c = "<br><hr><br><table class=trtab width=100%><tr><td class=bth width=1>表題</td><td width=100%><input name=title style='width:100%;'></td></tr><tr><td class=bth width=1>問題</td><td width=100%><textarea name=question maxlength=1024 rows=10 style='width:100%;'></textarea></td></tr><tr><td class=bth width=1>回答</td><td width=100%><input name=answer style='width:100%;'><br>" +
                                    v("カンマ区切 例)8m,8p,r2p(リーチ2p)") + "</td></tr><tr><td class=bth width=1>解説</td><td width=100%><textarea name=explanation maxlength=4096 rows=10 style='width:100%;'></textarea></td></tr><tr><td class=bth width=1>補足</td><td width=100%><textarea name=comment maxlength=4096 rows=10 style='width:100%;'></textarea></td></tr></table><hr><table class=trtab width=100%><tr><td class=bth width=1>局</td><td><input name=kyoku><br>" + v("0:東1局 ... 7:南4局") +
                                    "</td></tr><tr><td class=bth width=1>本場</td><td><input name=honba></td></tr><tr><td class=bth width=1>供託</td><td><input name=nagare></td></tr><tr><td class=bth width=1>ドラ</td><td><input name=dora></td></tr><tr><td class=bth width=1>親</td><td><input name=oya><br>" + v("0:自家 1:下家 2:対面 3:上家") + "</td></tr></table>", d = ["自家", "下家", "対面", "上家"], e = 0; 4 > e; ++e)
                                c += "<br><hr><br><span class=bth>■" +
                                d[e] + "</span><br><table class=trtab width=100%><tr><td class=bth width=1>点数</td><td width=100%><input name=ten" + e + " style='width:100%;'></td></tr>", e || (c += "<tr><td class=bth width=1>手牌</td><td width=100%><input name=hai" + e + " style='width:100%;'></td></tr>"), c += "<tr><td class=bth width=1>副露</td><td width=100%><input name=m" + e + " style='width:100%;'></td></tr><tr><td class=bth width=1>河</td><td width=100%><input name=kawa" + e + " style='width:100%;'></td></tr></table>";
                            c = c + "<br><hr><br><div id=verify></div>" + ("<br><hr><br><span class=bth>■JSON</span><br><textarea name=json maxlength=8192 rows=40 style='width:100%;font-size:75%;'>" + JSON.stringify(h, null, "\t") + "</textarea>");
                            Qb.innerHTML = c;
                            c = Qb.getElementsByTagName("TEXTAREA");
                            for (d = 0; d < c.length; ++d)
                                ta(c[d], "change", "json" == c[d].name ? n : m);
                            c = Qb.getElementsByTagName("INPUT");
                            for (d = 0; d < c.length; ++d)
                                ta(c[d], "change", m);
                            zc(Qb, Z)
                        }
                    123 == a.charCodeAt(0) && (b = h, h = JSON.parse(a), h.title = h.title || b.title, h.question = h.question ||
                            b.question, h.answer = h.answer || b.answer, h.explanation = h.explanation || b.explanation, h.comment += b.comment, b = JSON.stringify(h));
                    Z.json.value = b;
                    n()
                } else
                    A["#trjump"](0, 0)
            }, function () {
                alert("問題ファイルを読み込めませんでした")
            })
        }
        function k() {
            var a;
            a = "■合計得点<br>" + ("'" + Z.ten0.value + "' + '" + Z.ten1.value + "' + '" + Z.ten2.value + "' + '" + Z.ten3.value + "' = " + (~~Z.ten0.value + ~~Z.ten1.value + ~~Z.ten2.value + ~~Z.ten3.value) + "<br><br>");
            a += "■使用枚数<br>";
            for (var b = Fb(Z.hai0.value), b = b + ("," + Fb(Z.dora.value)), c = 0; 4 > c; ++c) {
                var b = b + ("," + Fb(Z["kawa" + c].value)),
                d = Z["m" + c].value;
                if (d)
                    for (var d = d.split(","), f = 0; f < d.length; ++f) {
                        var l = {
                            m: d[f]
                        };
                        pc(l);
                        var g = l[0];
                        if (1 == g.length)
                            switch (l[2]) {
                            case 4:
                            case 5:
                            case 2:
                                l = g[0] >> 2,
                                g = [l + 0, l + 1, l + 2, l + 3]
                            }
                        g && (b += "," + g)
                    }
            }
            c = [];
            for (f = 0; 38 > f; ++f)
                c[f] = 0;
            b = b.split(",");
            for (f = 0; f < b.length; ++f)
                l = b[f], "" != l && 255 != l && 254 != l && (136 == l ? c[30]++ : 16 == l ? c[0]++ : 52 == l ? c[1]++ : 88 == l ? c[2]++ : c[10 * ~~(l / 4 / 9) +
                        ~~(l / 4) % 9 + 1]++);
            c[30] = "-";
            for (f = 0; 38 > f; ++f)
                a += e(30 == f ? "0z" : Cb(36 * ~~(f / 10) + (f % 10 ? f % 10 * 4 - 1 : 16))) + c[f] + " ", 9 == f % 10 && (a += "<br>");
            Z.verify.innerHTML = a
        }
        function m() {
            if (Z.json) {
                var c = h.packet;
                h = {};
                h.title = a(Z.title.value);
                h.question = a(Z.question.value);
                h.answer = a(Z.answer.value);
                h.explanation = a(Z.explanation.value);
                h.comment = a(Z.comment.value);
                "" == h.comment && delete h.comment;
                var d = "0 0 0 0 0 ".split(" ");
                "0" != Z.kyoku.value && (d[0] = Z.kyoku.value);
                "0" != Z.honba.value && (d[1] = Z.honba.value);
                "0" != Z.nagare.value &&
                (d[2] = Z.nagare.value);
                "" != Z.dora.value && (d[5] = Fb(Z.dora.value));
                h.seed = "" + d;
                h.oya = Z.oya.value;
                h.ten = [Z.ten0.value, Z.ten1.value, Z.ten2.value, Z.ten3.value];
                Z.hai0.value && (h.hai0 = Db(Fb(Z.hai0.value).split(",")));
                for (d = 0; 4 > d; ++d)
                    "" != h.ten[d] && (h.ten[d] = ~~(h.ten[d] / 100)), Z["m" + d].value && (h["m" + d] = Z["m" + d].value), Z["kawa" + d].value && (h["kawa" + d] = Db(Fb(Z["kawa" + d].value).split(",")));
                h.ten = "" + h.ten;
                c && (h.packet = c);
                Z.json.value = JSON.stringify(h, null, "\t").replace(/"packet": \[[^\]]*\]/, "'packet': " + JSON.stringify(c));
                b(0);
                k()
            }
        }
        function n() {
            if (Z.json) {
                try {
                    h = JSON.parse(Z.json.value)
                } catch (y) {
                    alert("JSONに不具合があるため読み込めませんでした\n\n" + y);
                    return
                }
                var a = (h.seed ? h.seed : "0,0,0,0,0,").split(",");
                Z.title.value = h.title || "";
                Z.question.value = h.question || "";
                Z.answer.value = h.answer || "";
                Z.explanation.value = h.explanation || h.description || "";
                Z.comment.value = h.comment || "";
                Z.kyoku.value = h.kyoku || a[0];
                Z.honba.value = h.honba || a[1];
                Z.nagare.value =
                    h.nagare || a[2];
                Z.dora.value = h.dora || Db(a.slice(5));
                Z.oya.value = h.oya || 0;
                for (var a = (h.ten ? h.ten : ",,,").split(","), c = 0; 4 > c; ++c)
                    Z["ten" + c].value = "" != a[c] ? 100 * a[c] : "", c || (Z["hai" + c].value = h["hai" + c] || ""), Z["m" + c].value = h["m" + c] || "", Z["kawa" + c].value = h["kawa" + c] || "";
                b(0);
                k()
            }
        }
        var g,
        h,
        l,
        z = "",
        C = !1;
        return {
            TRAINING: function (a, b) {
                D.a = 4;
                W.Z();
                b.innerHTML = "<div style='width:100%;'><table width=100% cellpadding=0 cellspacing=0><tr><td align=left class=gray id=trtitle></td><td id=trprogress align=right></td></tr></table><hr><div style='position:relative;'><div id=trmain class=vscl style='line-height:1.2em;height:8em;overflow-y:scroll;text-align:left;'><br><br>" +
                    v("<center>左下のメニューからトレーニングを終了して<br><br>もう一度開いてください。</center>") + "</div><div class=sblink style='visibility:hidden;'>▼</div></div><hr><table width=100% cellpadding=0 cellspacing=0><tr><td align=left width=1><button name=trmenu style='font-family:cwTeX-Q-Kai-T,icons2,serif;'></button></td><td class=ra0 style='border:1px solid #444;' width=100%><span class='bt3 ra0' style='color:#444;font-size:150%;'>卓表示<span></td><td align=right width=1><button name=ok style='width:6em;' disabled>OK</button></td></tr></table></div>";
                zc(b);
                A.b.classList.add("flipinhs");
                f(function () {
                    d(a.file)
                })
            },
            Mb: function (a) {
                ob(!1, "ok");
                A.b.style.display = a ? "" : "none";
                u.b.style.display = a ? "none" : "";
                u[1572868].innerHTML = " 問題"
            },
            Pc: function (a) {
                a && "NEXT" != Z.ok.innerHTML && !dc.s.canvas.style.display ? (A.Mb(0), 2 == V[32].length % 3 && nc({
                        tag: "T"
                    }), Z.ok.innerHTML = "CLOSE") : (A.b.classList.add("hide"), va(A.b, "animationend", function () {
                        g && (g[0] = (g[0] + 1) % g.container.length, h = g.container[g[0]]);
                        b(0)
                    }))
            },
            ac: function (a) {
                console.log("sendTrainingAns", a);
                var d;
                switch (a.tag) {
                case "REACH":
                    C = !0;
                    W.ra({
                        tag: "REACH",
                        who: 0,
                        step: 1
                    });
                    return;
                case "D":
                    d = (C ? "r" : "") + c(a.p);
                    break;
                case "N":
                    d = "N",
                    a.type && (d += "-" + a.type),
                    a.hai0 && (d += "-" + a.hai0),
                    a.hai1 && (d += "-" + a.hai1),
                    a.hai2 && (d += "-" + a.hai2)
                }
                if (d) {
                    a = h.answer.split(",");
                    for (var e = 0; e < a.length && a[e] != d; ++e);
                    e < a.length && (d = "")
                }
                setTimeout(function () {
                    if (d)
                        b(1);
                    else {
                        xb(24, 0, 0);
                        var a = nb("DIV", Xb, "flipinqs tsv", {
                            innerHTML: "○"
                        }, {
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            fontSize: "1600%",
                            fontWeight: "bold",
                            pointerEvents: "none",
                            marginTop: "-0.5em",
                            marginLeft: "-0.5em"
                        });
                        setTimeout(function () {
                            a.classList.add("hide");
                            ta(a, "animationend", function () {
                                a.parentNode.removeChild(a);
                                b(1)
                            })
                        }, 1E3)
                    }
                }, 1E3)
            },
            trmenu: function () {
                x.Y("<div class=A id='#trmenu-0'>他の問題に移動</div><div class=A id='#trmenu-1'>トレーニング終了</div>", "", 0)
            },
            "#trmenu": function (a, b) {
                if ("1" == b)
                    t.tredit ? location.reload() : A.exit();
                else {
                    var c = "";
                    if (g)
                        for (var d in g.container)
                            c += "<div class=A id='#trjump-" +
                            d + "'>Q" + Ya(2, ~~d + 1) + "</div>";
                    else
                        h.title && (c += "<div class=A id='#trjump-0'>" + h.title + "</div>");
                    x.Y(c, "text-align:left;", 0)
                }
            },
            "#trjump": function (a, c) {
                if (g) {
                    var d = ~~c;
                    h = g.container[d];
                    g[0] = d
                }
                b(0)
            },
            "#trs": function (a, b) {
                Va(qa[21]() + "subscribe.cgi?file=" + z + "&auth=" + l + "&type=" + b, function (a) {
                    a = JSON.parse(a);
                    if ("insufficient" == a.error)
                        return D.ERR({
                            code: 1020
                        });
                    "ok" == a.error && d(z)
                })
            },
            hc: function (a, b) {
                if (b) {
                    var c = {},
                    d = b.subscribing;
                    if (d)
                        for (var e = 0; e < d.length; ++e)
                            c[d[e].file] = d[e].expire;
                    a.innerHTML = "";
                    for (var f = {
                            free: "<span style='color:#088;font-weight:bold;'>【無料】</span>",
                            member: "<span style='color:#088;font-weight:bold;'>【会員無料】</span>",
                            subscribing: "<span style='color:#880;font-weight:bold;'>【購読中】</span>"
                        }, d = b.all, e = 0; e < d.length; ++e)
                        d[e].Vb = 1E3 * (d[e].type || "undefined").length + e;
                    d.sort(function (a, b) {
                        return a.Vb - b.Vb
                    });
                    for (e = 0; e < d.length; ++e) {
                        var l = d[e],
                        g = l.file,
                        h = c[g],
                        g = "https://tenhou.net/0/?training=" + g,
                        k = "<div style='position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;'>",
                        k = k + ("<div class=nobr style='overflow:hidden;text-overflow:ellipsis;'>" + (f[h ? "subscribing" : l.type] || "") + " ");
                        l.tip && (k += "<span style='color:#F00;font-weight:bold;font-size:75%;'>" + l.tip + "</span> ");
                        k += l.title + "</div>";
                        k += "<div class=nobr style='color:#CCC;overflow:hidden;text-overflow:ellipsis;font-size:75%;'>";
                        k += "<span style='color:#000;background-color:#666;'>レベル:" + (l.level || "初中") + "</span> ";
                        k += "問題数:" + l.n + " ";
                        l.type && (k += "毎月２～３回更新 ");
                        h && (k += "購読終了:" + h + " ");
                        k += "</div>";
                        k += "<div class=nobr style='color:#666;overflow:hidden;text-overflow:ellipsis;'>" + (l.memo || "") + "</div>";
                        k += "</div>";
                        k += "<a href='" + g + "' class=bt3 target=_blank></a>";
                        nb("DIV", a, "", {
                            innerHTML: k
                        }, {
                            height: "3.4em",
                            position: "relative",
                            textAlign: "left"
                        }).childNodes[1].onclick = A.trOpen
                    }
                    nb("DIV", a, "gray", {
                        innerHTML: "●「長押し」または「右クリック」から別タブで開く/URLのコピーなどが行えます"
                    }, {
                        fontSize: "75%",
                        align: "left",
                        padding: "1em 0 6em 0"
                    })
                } else
                    a.innerHTML = v("<br>Loading ..."), c = (c = H.uname) && c.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? RegExp.$1 : "00000000", Va(qa[21]() + "free-index.json?" + c, function (b) {
                        try {
                            b = JSON.parse(b)
                        } catch (Jb) {
                            return
                        }
                        A.hc(a, b)
                    })
            },
            trOpen: function (a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
                    var b = H.uname;
                    if (!b || !b.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return D.ERR({
                            code: 1200
                        }), !1;
                    a = a.target;
                    a = a.href.split(/\?training=/);
                    if (1 != a.length)
                        return A.o({
                            tag: "TRAINING",
                            file: a[1]
                        }), !1
                }
            }
        }
    }
        ());
    var cc = nb("DIV", Xb, "nosel ts0", {}, {
        position: "absolute",
        fontSize: "60%",
        pointerEvents: "none",
        display: "none"
    }),
    V = function () {
        var a = 0;
        return {
            ha: function () {
                cc.innerHTML = I(354);
                for (var a = 0; 4 > a; ++a)
                    V[32 | a] = [], V[48 | a] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], V[16 | a] = [], delete V[64 | a]
            },
            Nc: function (a) {
                for (var c = [], b = 0; b < V[32 | a].length; ++b)
                    c.push(b);
                Ca(c, V[32 | a]);
                for (b = 0; b < V[32 | a].length; ++b)
                    if (c[b] != b) {
                        var e = R[1024 | a << 8 | c[b]],
                        d = R[1024 | a << 8 | b];
                        $b.O(0, d, 0);
                        d.Fa(!0, a && !u.l[1277960] ?
                            136 : V[32 | a][c[b]]);
                        e = $b.O(0, e.c + d.i.offsetX, e.h + d.i.offsetY, d.c + d.i.offsetX, d.h + d.i.offsetY, .04, d.i, .5, d, 1);
                        a || jc(4, 0, e / 1E3)
                    }
                Ba(V[32 | a])
            },
            bc: function (a) {
                u.R(256);
                ec.Z();
                if (1 == D.a || !u.l[1277960]) {
                    var c = 0;
                    a & 2 && (c = Math.max(c, V[33].length));
                    a & 4 && (c = Math.max(c, V[34].length));
                    a & 8 && (c = Math.max(c, V[35].length));
                    for (var c = 30 * c, b = 0; b < c; b += 30)
                        xb(4, 0, b / 1E3);
                    var e = 0,
                    b = 0;
                    hc()[$a++] = function (d) {
                        for (b += d; e < b && e < c; e += 30)
                            for (d = 1; 4 > d; ++d)
                                if (!(~a & 1 << d)) {
                                    var f = ~~(e / 30),
                                    m = R[1024 | d << 8 | f];
                                    m.u && (f = V[32 | d][f], P.Aa(), m.ga(0),
                                        m.w = d, m.i = M[d << 8 | K.Xa[f]], m.ga(1), P.Ba())
                                }
                        return e < c
                    }
                }
            },
            Lb: function (e) {
                P.Aa();
                for (var c = 0, b = V[32 | e], f = 0; 14 > f; ++f) {
                    var d = R[1024 | e << 8 | f];
                    if (d.u) {
                        var k = R[1024 | e << 8 | c];
                        k.Fa(!0, e && !u.l[1277960] ? 136 : b[c]);
                        k.c = d.c;
                        k.h = d.h;
                        k.na(-1025, d.aa & 1024, !1);
                        k.ga(1);
                        ++c;
                        a |= 1 << e
                    } else
                        c < b.length && b.splice(c, 1)
                }
                for (; 14 > c; ++c)
                    d = R[1024 | e << 8 | c], d.u && d.ga(0);
                P.Ba()
            },
            mb: function (e) {
                if ((e || u.l[1183750]) && (!e || u.l[1277960])) {
                    P.Aa();
                    for (var c = V[32 | e], b = [], f = [], d = [], k = -1, m = 0; m < c.length; ++m) {
                        var n = R[1024 | e << 8 | m];
                        n.u && (d.push({
                                tb: m,
                                aa: n.aa,
                                c: n.c,
                                h: n.h
                            }), f.push(c[m]), 0 == e && n == ec.Hc() && (k = b.length), b.push(b.length))
                    }
                    Ca(b, f);
                    for (m = 0; m < b.length; ++m)
                        if (c[d[m].tb] = f[b[m]], n = R[1024 | e << 8 | d[b[m]].tb], b[m] == m) {
                            if (n.c != n.I || n.h != n.J)
                                a |= 1 << e
                        } else {
                            var g = R[1024 | e << 8 | d[m].tb];
                            g.Fa(!0, e && !u.l[1277960] ? 136 : f[b[m]]);
                            n = d[b[m]];
                            g.c = n.c;
                            g.h = n.h;
                            g.na(-1042, n.aa & 1041, !1);
                            g.ga(1);
                            a |= 1 << e
                        }
                    P.Ba();
                    -1 != k && ec.L(R[1024 | e << 8 | d[b[k]].tb])
                }
            },
            lb: function () {
                for (var e = 0; 4 > e; ++e)
                    if (!(~a & 1 << e)) {
                        for (var c = [], b = 0, f = 0, d = 0; 14 > d; ++d) {
                            var k = R[1024 | e << 8 | d];
                            if (k.u) {
                                var m =
                                    k.c - k.I,
                                n = k.h - k.J;
                                if (0 != m || 0 != n)
                                    c.length && b != m && f != n && (R.Qa(0, 200, c), c = []), b = m, f = n, c.push(k)
                            }
                        }
                        c.length && R.Qa(0, 200, c)
                    }
                a = 0
            }
        }
    }
    ();
    function nc(a) {
        if (1 == D.a || 4 == D.a)
            if (!A.b || A.b.style.display) {
                var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                if (a)
                    if ("REACH" == a.tag)
                        for (var c = vb.Fc(V[48]), b = 0; b < V[32].length; ++b) {
                            var f = c[~~(V[32][b] / 4)];
                            e[b] |= f && f.length ? 1 : 16
                        }
                    else if ("T" == a.tag && V[64])
                        for (b = V[32].length - 1, e[b] |= 1, --b; 0 <= b; --b)
                            e[b] |= 16;
                    else if ("N" != a.tag || 3 != a[2] && 1 != a[2])
                        for (b = 0; 14 > b; ++b)
                            e[b] |= 1;
                    else
                        for (c = {}, 1 == (a[0][2] >> 2) - (a[0][1] >> 2) ? (0 < (a[0][1] >> 2) % 9 && (c[(a[0][1] >> 2) - 1] = 1), 8 > (a[0][2] >> 2) % 9 && (c[(a[0][2] >> 2) + 1] = 1)) : c[a[0][0] >> 2] = 1, b = 0; b < V[32].length; ++b)
                            e[b] |=
                            c[V[32][b] >> 2] ? 16 : 1;
                else
                    ec.Z(), u.R(256);
                P.Aa();
                for (b = 0; 14 > b; ++b)
                    S.Ua(b, -18, e[b]);
                P.Ba();
                a && ec.o(0, void 0, "T" == a.tag)
            }
    };
    q.requestAnimationFrame = q.requestAnimationFrame || q.webkitRequestAnimationFrame || q.mozRequestAnimationFrame || q.oRequestAnimationFrame || q.msRequestAnimationFrame || function (a) {
        setTimeout(a, 1E3 / 60)
    };
    var hc = function () {
        function a() {}
        var e = {},
        c,
        b = 0,
        f = 0,
        d = Date.now(),
        k = requestAnimationFrame;
        setInterval(function () {
            var e = Date.now();
            b && f && b == f && requestAnimationFrame == k && (requestAnimationFrame = a, c(b + e - d), requestAnimationFrame = k);
            f = b;
            d = e;
            vc.Oc(e)
        }, 250);
        requestAnimationFrame(function (a) {
            c = a ? function (a) {
                var d = 0,
                f = 1 >= b ? 0 : a - b,
                l;
                for (l in e)
                    e[l](f) ? ++d : delete e[l];
                if (!d)
                    for (l in e)
                        ++d;
                d ? (b = a, requestAnimationFrame(c)) : b = 0
            }
             : window.performance && window.performance.now ? function () {
                var a = performance.now(),
                d = 0,
                f = 1 >=
                    b ? 0 : a - b,
                l;
                for (l in e)
                    e[l](f) ? ++d : delete e[l];
                if (!d)
                    for (l in e)
                        ++d;
                d ? (b = a, requestAnimationFrame(c)) : b = 0
            }
             : function () {
                var a = Date.now(),
                d = 0,
                f = 1 >= b ? 0 : a - b,
                l;
                for (l in e)
                    e[l](f) ? ++d : delete e[l];
                if (!d)
                    for (l in e)
                        ++d;
                d ? (b = a, requestAnimationFrame(c)) : b = 0
            };
            requestAnimationFrame(c)
        });
        return function () {
            !b && c && (requestAnimationFrame(c), b = 1);
            return e
        }
    }
    ();
    function ic(a, e) {
        if (0 < e)
            return hc()[$a++] = function (c) {
                return 0 < (e -= c) ? !0 : (a(), !1)
            },
        $a - 1;
        a()
    }
    function Bc(a) {
        var e = A.b.style,
        c = e.opacity = 0;
        return function (b) {
            c += b;
            e.opacity = Math.min(1, c / a);
            if (c < a)
                return 1;
            e.opacity = 1;
            return 0
        }
    }
    function Ac(a) {
        var e = A.b,
        c = e.style,
        b = 0;
        return function (f) {
            b += f;
            c.opacity = Math.max(0, 1 - b / 250);
            if (250 > b)
                return 1;
            c.display = "none";
            c.opacity = 1;
            a && a(e);
            return 0
        }
    };
    var N = [0, 0, 0, 0, 0, 0, 0, 0],
    U = [0, 0, 0, 0, 0, 0, 0, 0],
    T = [0, 0, 0, 0, 0, 0, 0, 0],
    yc = [0, 0, 0, 0, 0, 0, 0, 0],
    Fc = [0, 0, 0, 0, 0],
    Gc = [0, 0, 0, 0, 0],
    mc = [0, 0, 0, 0],
    lc = [0, 0, 0, 0],
    Hc = [0, 0, 0, 0],
    Ic = [0, 0, 0, 0],
    Vb = 0,
    Wb = 0,
    Zb = 0,
    Jc = 0,
    Kc = !1;
    function Ub() {
        var a = Pb.offsetWidth * r,
        e = Pb.offsetHeight * r,
        c = H.desktop & 1;
        function b() {
            f[1] = ~~(2360 * f[0] / 31 / 56);
            k[0] = k[1] = k[4] = Math.min(~~(12 * f[0] / 31), ~~(12 * f[1] / 40));
            d[0] = d[4] = ~~(47 * f[0] / 31) - k[0];
            d[1] = ~~(37 * f[1] / 40) - k[1];
            f[4] != f[0] && (k[4] = ~~(12 * f[4] / 31), d[4] = ~~(47 * f[4] / 31) - k[4]);
            f[2] = f[6] = f[0];
            k[2] = k[6] = k[0];
            d[2] = d[6] = d[0];
            f[3] = f[1];
            k[3] = k[1];
            d[3] = d[1];
            f[5] = f[7] = ~~(380 * d[1] / 460);
            k[5] = k[7] = ~~(44 * f[5] / 19) - d[1];
            d[5] = d[7] = d[1];
            var b = 2 * d[1],
            l = 2 * f[0];
            m = n = 0;
            1 == K.a || 3 == K.a ? (m = Math.max(m, l + 17 * f[0] + 2 * f[1] + l),
                n = Math.max(n, b + 17 * d[1] + 2 * d[0] + k[0] + d[4] + k[4] + (c ? d[1] : 0))) : (m = Math.max(m, l + 3 * f[1] + 6 * f[0] + 3 * f[1] + l), n = Math.max(n, b + 3 * d[0] + 6 * d[1] + 3 * d[0] + k[0] + d[4] + k[4] + (c ? d[1] : 0)));
            m = Math.max(m, ~~(14.1 * f[4]) + f[0]);
            Jc = d[7] + k[7] - (d[3] + k[3]);
            n = Math.max(n, ~~(2.1 * d[1]) + Jc + 4 * (2 * d[1] + d[0]) + d[1] + k[1] + d[4] + k[4]);
            n = Math.max(n, d[0] + 4 * (2 * d[1] + d[0]) + ~~(2.1 * d[1]) + Jc + 2 * d[1] + k[1] + (c ? d[1] : 0));
            return m <= a && n <= e
        }
        var f = N,
        d = U,
        k = T,
        m,
        n;
        for (f[0] = 200; 10 < f[0]; --f[0]) {
            Kc = !0;
            f[4] = ~~(31 * (2 * d[1] + k[0]) / 47);
            if (b())
                break;
            Kc = !1;
            f[4] = ~~((a - f[0]) / 14.1);
            if (b())
                break
        }
        f[4] = ~~((a - f[0]) / 14.1);
        for (f[4] = Math.min(f[4], ~~(1.7 * f[0])); 10 < f[4] && !b(); --f[4]);
        2 == H.lthai || !Kc || c || 1 != D.a && 4 != D.a || 1 == K.a || 3 == K.a || (f[4] = ~~((a - f[0]) / 14.1), f[4] = Math.min(f[4], ~~(31 * (d[4] + k[4]) / 47) + k[0] + ~~(.3 * d[0])), k[4] = ~~(12 * f[4] / 31), d[4] = ~~(47 * f[4] / 31) - k[4]);
        for (var g = 0; 8 > g; ++g)
            yc[g] = N[g] - ~~(5 * T[4 == g ? 4 : 0] / 12);
        e - n < a - m ? n = ~~e : m = ~~a;
        Zb = Math.max(m, ~~(14.1 * f[4]) + f[0]);
        Vb = m;
        Wb = n
    };
    function kc(a) {
        za(this, a)
    }
    za(kc.prototype, {
        Ja: function () {
            if (this.P && !this.Ca)
                if (this.i && 1 == this.u) {
                    var a = 0;
                    this.da && this.da.i && 1 == this.da.u && this.c + N[this.w] == this.da.c + N[this.da.w] && this.h + T[this.w] == this.da.h + U[this.da.w] + T[this.da.w] && (a |= this.da.xa && this.da.xa.i && 1 == this.da.xa.u && this.da.c + N[this.da.w] == this.da.xa.c && this.da.h == this.da.xa.h ? 0 : 1);
                    this.xa && this.xa.i && 1 == this.xa.u && this.c + N[this.w] == this.xa.c && this.h + U[this.w] == this.xa.h + U[this.xa.w] && (a |= 2);
                    this.ya && this.ya.i && 1 == this.ya.u && this.c + N[this.w] == this.ya.c + N[this.ya.w] &&
                    this.h + U[this.w] + T[this.w] == this.ya.h + T[this.ya.w] && (a |= 4);
                    xc[this.w << 8 | a] ? (this.P.i = xc[this.w << 8 | a], this.P.u = 1) : (delete this.P.i, this.P.u = 0)
                } else
                    delete this.P.i
        },
        na: function (a, e, c) {
            var b = this.aa,
            b = b & a | e;
            a = this.ka;
            e = this.ca;
            b & 4 ? (this.ka = M[this.w << 8 | (b & 1 ? 60 : 50)], this.ca = b & 1 ? .3 : .2) : b & 2 ? (this.ka = M[this.w << 8 | (b & 1 ? 60 : 50)], this.ca = b & 1 ? .2 : .1) : b & 16 ? (this.ka = M[this.w << 8 | 49], this.ca = .3) : b & 1024 ? (this.ka = M[this.w << 8 | 50], this.ca = .2) : b & 2048 ? (this.ka = M[this.w << 8 | 60], this.ca = .15) : b & 256 ? (this.ka = M[this.w << 8 | 49],
                this.ca = .3) : b & 512 ? (delete this.ka, delete this.ca) : b & 4096 ? (this.ka = M[this.w << 8 | 49], this.ca = b & 8192 ? .4 : .15) : (delete this.ka, delete this.ca);
            this.aa = b;
            !c || this.ka == a && this.ca == e || this.Wb();
            return this
        },
        ga: function (a) {
            if (!this.i)
                return this;
            var e = 0,
            c = 0;
            this.u && (e = this.P.i ? this.P.i.offsetX + this.P.i.ia : this.i.ia, c = this.i.wa);
            this.u = a;
            this.Ja();
            this.da && this.da.Ja();
            this.ya && this.ya.Ja();
            this.ib && (this.ib.Ja(), this.ib.ya && this.ib.ya.Ja());
            this.u && (e = this.P.i ? this.P.i.offsetX + this.P.i.ia : e ? e : this.i.ia, c = this.i.wa);
            P.Ka(this.c + this.i.offsetX, this.h + this.i.offsetY - this.Ca, e, c);
            return this
        },
        Fa: function (a, e) {
            var c = this.w % 4;
            a && (c || (c += 4), c && 136 == e && (c += 4));
            this.i = M[c << 8 | K.Xa[e]];
            this.w = c;
            this.i || rb("PH.setImage noimg ", c, e, K.Xa[e]);
            return this
        },
        Wb: function () {
            void 0 !== this.i && 0 !== this.u && P.Ka(this.c, this.h - this.Ca, this.i.ia, this.i.wa)
        },
        La: function () {
            void 0 !== this.i && 0 !== this.u && P.Ka(this.c, this.h - this.Ca, this.P.i ? this.P.i.offsetX + this.P.i.ia : this.i.ia, this.i.wa)
        }
    });
    var R = {
        sa: []
    };
    (function () {
        for (var a = [function (a, b) {
                    a.xa = b;
                    b.ib = a
                }, function (a, b) {
                    a.da = b;
                    b.ya = a
                }, function (a, b) {
                    a.ib = b;
                    b.xa = a
                }, function (a, b) {
                    a.ya = b;
                    b.da = a
                }
            ], e = [1024, 14, 2048, 34, 3072, 26, 4096, 34, 5120, 5]; e.length; )
            for (var c = e.shift(), b = e.shift(), f = 0; 4 > f; ++f) {
                for (var d = {}, k = 0; k < b; ++k)
                    R.sa.push(R[c | f << 8 | k] = d[k] = new kc({
                            u: 0,
                            w: f,
                            c: 0,
                            h: 0,
                            Ca: 0,
                            I: 0,
                            J: 0
                        })), R.sa.push(d[k].P = {
                            u: 0
                        }), d[k].ua = d[k].P.ua = d[k];
                for (k = 1; k < b; ++k)
                    if (!(2048 == c && 17 == k || 3072 == c && 6 == k || 3072 == c && 12 == k || 4096 == c && 17 == k))
                        a[f](d[k - 1], d[k]);
                if (2048 == c)
                    for (k = 0; 17 >
                        k; ++k)
                        a[(f + 1) % 4](d[k], d[k + 17]), d[k].Ia = d[k + 17];
                if (3072 == c)
                    for (k = 6; 18 > k; ++k)
                        a[(f + 1) % 4](d[k], d[k - 6]);
                if (4096 == c)
                    for (k = 17; 34 > k; ++k)
                        a[(f + 1) % 4](d[k], d[k - 17]);
                if (5120 == c)
                    break
            }
        for (k = 0; a = R[1024 | k]; ++k)
            a.S = k
    })();
    za(R, {
        L: function () {
            var a = za(Fc, [N[0], 0, -N[0], 0, N[4]]),
            e = za(Gc, [0, -U[1], 0, U[1], 0]),
            c = za(mc, [0, N[1], 0, -N[1]]),
            b = za(lc, [U[0], 0, -U[0], 0]);
            za(Hc, [0, N[1] - N[0], N[0] - N[1], 0]);
            za(Ic, [U[0] - U[1], U[1] - U[0], 0, 0]);
            var f = P.s.canvas.offsetWidth * r,
            d = P.s.canvas.offsetHeight * r,
            k = ~~((f - Vb) / 2),
            m = ~~((d - Wb) / 2),
            n = k + Vb,
            g = m + Wb - (H.desktop & 1 ? U[1] : 0),
            h = 6 * N[0],
            l = 6 * U[1],
            z = k + ~~((n - k - h) / 2),
            C = m + 2 * U[1] + (3 == K.a || 1 == K.a ? 2 * U[0] : 0) + 3 * U[0];
            R[112] = z;
            R[113] = C + l;
            R[114] = z + h;
            R[115] = C + l - U[1];
            R[116] = z + h - N[0];
            R[117] = C - U[0];
            R[118] = z - N[1];
            R[119] =
                C;
            for (var w = 0; 4 > w; ++w)
                R.dc(w);
            for (var B, y = 0; B = R[5120 | y]; ++y)
                B.c = B.I = z + ~~((h - 5 * N[0]) / 2) + N[0] * y, B.h = B.J = C;
            if (3 == K.a) {
                w = 17 * N[0] + 2 * N[1];
                B = 17 * U[1] + 2 * U[0];
                for (var J = z + ~~((h - w) / 2), E = C + ~~((l - B) / 2), J = [{
                            Ga: J + w - 1 * N[0],
                            Ha: E + B - 1 * U[0]
                        }, {
                            Ga: J + w - 1 * N[1],
                            Ha: E
                        }, {
                            Ga: J,
                            Ha: E
                        }, {
                            Ga: J,
                            Ha: E + B - 1 * U[1]
                        }
                    ], w = 0; 4 > w; ++w)
                    for (y = 0; B = R[4096 | w << 8 | y]; ++y)
                        B.c = B.I = J[w].Ga - a[w] * (16 - y % 17) - (17 > y ? 0 : c[w]), B.h = B.J = J[w].Ha - e[w] * (16 - y % 17) - (17 > y ? 0 : b[w]), B.Ca = 0
            } else if (1 == K.a)
                for (w = 17 * N[0] + N[1], B = 17 * U[1] + U[0], J = z + ~~((h - w) / 2), E = C + ~~((l - B + T[0]) / 2),
                    J = [{
                            Ga: J + w - N[0],
                            Ha: E + B - U[0]
                        }, {
                            Ga: J + w - N[1],
                            Ha: E
                        }, {
                            Ga: J,
                            Ha: E
                        }, {
                            Ga: J,
                            Ha: E + B - U[1]
                        }
                    ], w = 0; 4 > w; ++w)
                    for (y = 0; B = R[4096 | w << 8 | y]; ++y)
                        B.c = B.I = J[w].Ga - a[w] * (16 - y % 17), B.h = B.J = J[w].Ha - e[w] * (16 - y % 17), B.Ca = 17 > y ? 0 : T[w];
            else
                for (w = 0; 4 > w; ++w)
                    for (y = 0; B = R[4096 | w << 8 | y]; ++y)
                        B.c = B.h = B.Ca = 0;
            C += T[0];
            R[16] = z;
            R[17] = C;
            R[18] = h;
            R[19] = l;
            a = 3 * N[1];
            e = 3 * U[0];
            R[48] = z + h + T[0];
            R[49] = C + l + T[0];
            R[50] = a - T[0];
            R[51] = e - T[0];
            R[52] = z + h + T[0];
            R[53] = C - e;
            R[54] = a - T[0];
            R[55] = e - T[0];
            R[56] = z - a;
            R[57] = C - e;
            R[58] = a - T[0];
            R[59] = e - T[0];
            R[60] = z - a;
            R[61] = C + l + T[0];
            R[62] = a - T[0];
            R[63] = e - T[0];
            E = 1 == K.a || 3 == K.a ? 0 : U[0];
            R[32] = z;
            R[33] = C + E;
            R[34] = h;
            R[35] = l - E - T[0];
            R[80] = n - ~~(14.1 * N[4]) - N[0];
            R[81] = g - U[4] - T[4];
            R[82] = R[98] = n - N[1];
            R[85] = R[101] = m;
            R[86] = R[102] = k;
            R[96] = n - N[0];
            R[97] = g - T[0] - U[0];
            R[80] < k && (a = ~~((k - R[80]) / 2), R[80] += a, R[96] += a);
            B = ~~(2.1 * U[1]) + Jc + 4 * (2 * U[1] + U[0]) + (D.v & 16 ? U[1] : 0);
            R[99] = Math.max(m + ~~((g - Math.max(2 * U[1], U[4] + T[4]) - m - B) / 2), 0);
            R[83] = Math.min(R[99] + (B - U[1] - T[1]), g - U[4] - T[4] - U[1]);
            B += T[1];
            R[87] = Math.max(m + ~~((g - U[4] - T[4] - m - B) / 2), 0);
            R[103] = Math.min(R[87] +
                    (B - U[1] - T[1]), g - U[4] - T[4] - U[1]);
            w = ~~(2.1 * N[0]) + 4 * (2 * N[0] + N[1]) + (D.v & 16 ? N[0] : 0);
            3 == K.a && (w = Math.max(w, 17 * N[0] + 2 * N[1]));
            1 == K.a && (w = Math.max(w, 17 * N[0] + 1 * N[1]));
            R[100] = z + ~~((h - w) / 2);
            ~D.v & 16 && !Kc && (R[100] = N[1]);
            D.v & 16 && (D.H[1] || (R[100] += N[0]), D.H[3] || (R[100] = k));
            R[84] = R[100] + w - N[0];
            for (w = 0; 4 > w; ++w)
                for (R.gc(w), y = 0; B = R[1024 | w << 8 | y]; ++y)
                    B.c = B.I, B.h = B.J;
            bc.L();
            R[64] = R[68] = ~~(R[16] + R[18] / 2);
            R[67] = R[71] = ~~(R[17] + R[19] / 2);
            R[65] = ~~(R[81] - 1.5 * U[0]);
            R[66] = ~~(R[82] - 1.5 * N[1]);
            R[69] = ~~(R[85] + 2.5 * U[2]);
            R[70] = ~~(R[86] +
                2.5 * N[3]);
            for (y in R.sa)
                R.sa[y].P && void 0 === R.sa[y].I && console.log(y);
            R.sa.sort(function (a, b) {
                return (void 0 != a.S ? 0 : -f * d) + (a.P ? f * d : 0) + (a.ua.Ca + a.ua.J) * f + a.ua.I - ((void 0 != b.S ? 0 : -f * d) + (b.P ? f * d : 0) + (b.ua.Ca + b.ua.J) * f + b.ua.I)
            })
        },
        fa: function () {
            for (var a = 0; a < R.sa.length; ++a) {
                var e = R.sa[a];
                e.u = 0;
                e.P && (void 0 !== e.I && (e.c = e.I), void 0 !== e.J && (e.h = e.J), e.na(-1, 0, !1), delete e.fb)
            }
            for (a = 0; 4 > a; ++a)
                R.yb(a, -2)
        },
        gc: function (a) {
            for (var e, c = 16; R[2048 | a << 8 | c]; --c);
            for (var b = 0, f = 0, c = 16; e = R[2048 | a << 8 | c]; --c) {
                e.I = R[96 + 2 *
                        a] - Fc[a] * (16 - c);
                e.J = R[97 + 2 * a] - Gc[a] * (16 - c);
                var d = e.Ia;
                d.I = e.I + Fc[(a + 1) % 4];
                d.J = e.J + Gc[(a + 1) % 4];
                e.w != a && (b += Fc[a] - mc[(a + 1) % 4], f += Gc[a] - lc[(a + 1) % 4]);
                e.c = e.I + b;
                e.h = e.J + f;
                d.c = d.I + b;
                d.h = d.J + f;
                e.w != a && (e.c += Hc[a], e.h += Ic[a], d.c += Hc[a], d.h += Ic[a])
            }
            for (c = 0; e = R[1024 | a << 8 | c]; ++c)
                e.I = 0 + R[80 + 2 * a] + Fc[a ? a : 4] * c, e.J = 0 + R[81 + 2 * a] + Gc[a ? a : 4] * c
        },
        dc: function (a) {
            for (var e = 0, c = 0, b, f = 0; b = R[3072 | a << 8 | f]; ++f)
                if (b.I = R[112 + 2 * a] + Fc[a] * f + (mc[a] - 6 * Fc[a]) * (12 < f ? 2 : ~~(f / 6)) + e, b.J = R[113 + 2 * a] + Gc[a] * f + (lc[a] - 6 * Gc[a]) * (12 < f ? 2 : ~~(f / 6)) +
                        c, b.w != a && (b.I += Hc[a], b.J += Ic[a], e = -Fc[a] + mc[(a + 1) % 4], c = -Gc[a] + lc[(a + 1) % 4]), b.c = b.I, b.h = b.J, 5 == f || 11 == f)
                    e = c = 0
        }
    });
    za(R, {
        yb: function (a, e) {
            for (var c, b = 0; c = R[3072 | a << 8 | b]; ++b)
                c.w != a && (c.w = a), -1 != e || c.u || (e = b);
            0 <= e && (R[3072 | a << 8 | e].w = (a + 1) % 4);
            R.dc(a)
        }
    });
    za(R, function () {
        function a(a) {
            var b = 0,
            c;
            for (c in e) {
                var d = e[c];
                if (0 <= d.t) {
                    d.qa <= d.t && (d.t = d.qa);
                    P.Aa();
                    var k,
                    m;
                    for (m in d) {
                        var n = d[m],
                        g = n.rb;
                        if (g) {
                            var h = g.P.i ? g.P.i.offsetX + g.P.i.ia : g.i.ia,
                            l = g.i.wa,
                            z = ~~(g.I + (n.Ta - g.I) * (d.qa - d.t) / d.qa);
                            z <= g.c ? (h += g.c - z, g.c = z) : (h += z - g.c, k = g.c, g.c = z, z = k);
                            n = ~~(g.J + (n.zb - g.J) * (d.qa - d.t) / d.qa);
                            n <= g.h ? (l += g.h - n, g.h = n) : (l += n - g.h, k = g.h, g.h = n, n = k);
                            P.Ka(z + g.i.offsetX, n + g.i.offsetY, h, l);
                            d.qa <= d.t && g.ga(g.u)
                        }
                    }
                    P.Ba()
                }
                d.qa <= d.t && delete e[c];
                d.t += a;
                ++b
            }
            0 == b && qc.Sa && qc.Sa();
            return b
        }
        var e = {};
        return {
            Qa: function (c, b, f) {
                if ($b.$) {
                    P.Aa();
                    for (c = 0; c < f.length; ++c)
                        b = f[c], b.La(), b.c = b.I, b.h = b.J;
                    for (c = 0; c < f.length; ++c)
                        b = f[c], b.ga(b.u), b.La();
                    P.Ba()
                } else {
                    b = e[$a++] = {
                        t:  - ~~c,
                        qa: b
                    };
                    for (c = 0; c < f.length; ++c)
                        b[c] = {
                            rb: f[c],
                            Ta: f[c].c,
                            zb: f[c].h
                        };
                    hc().Qa = a
                }
            }
        }
    }
        ());
    var K = function () {
        function a() {
            return !1
        }
        function e(a) {
            return 16 == a || 52 == a || 88 == a
        }
        function c(a) {
            a = (135 - a + f) % 136;
            return R[4096 | ~~(a / 34) << 8 | (a % 34 >> 1) + 17 * (a & 1)]
        }
        var b,
        f,
        d,
        k;
        return {
            a: 0,
            bb: 0,
            Pa: !1,
            Xa: {
                136: 48
            },
            ha: function (c) {
                for (var m = K.Xa, g = 0; 136 > g; ++g) {
                    var h = ~~(g / 4);
                    m[g] = 10 * (~~(h / 9) + 1) + h % 9 + 1
                }
                D.v & 2 ? K.ub = a : (K.ub = e, m[16] = 51, m[52] = 52, m[88] = 53);
                m = D.ma;
                g = D.oa[3];
                h = D.oa[4];
                d = (4 + m - D.oa[0] % 4) % 4;
                K.Pa = 6 == g && 0 == h;
                f = ((m + (g + 1) + (h + 1) - 1) % 4 * 17 + 17 - 1 - (g + 1) - (h + 1)) % 68 * 2 + 2;
                K.Pa && (f = 34 * (d + 1));
                b = [0, 0, 0, 0];
                K.bb = 0;
                k = null;
                if (c)
                    for (k =
                            [], g = 0; 136 > g; ++g)
                        k[g] = c[135 - g]
            },
            Nb: function (a) {
                if (!K.Pa)
                    return c(b[0]++);
                -1 == a && (a = (d + 3) % 4);
                var e = b[a]++;
                return R[4096 | a << 8 | 33 - (17 * (e & 1) + (e >> 1))]
            },
            Ma: function (a) {
                if (!K.Pa)
                    return c(135 - a ^ 1);
                var b = (d + (a >> 2)) % 4;
                a %= 4;
                return R[4096 | b << 8 | 17 * (~a & 1) + (a >> 1)]
            },
            Hb: function (a, b) {
                return k ? K.Pa ? k[135 - (34 * a + ~~(b % 34 / 17) + b % 17 * 2)] : k[(135 - (34 * a + ~~(b % 34 / 17) + b % 17 * 2) + f) % 136] : 136
            },
            Xb: function (a) {
                if (!b)
                    return 0;
                if (0 != (D.v & 2048))
                    return 116 - b[0] - 2 * (D.oa.length - 5);
                if (!K.Pa)
                    return 122 - b[0] - K.bb;
                for (var c = 0, d = -1, e = 1; 4 >= e; ++e)
                    D.H[(a +
                            e) % 4] && c < b[(a + e) % 4] && (c = b[(a + e) % 4], d = e);
                return (30 - c) * (D.v & 16 ? 3 : 4) + d - 1
            },
            ub: a
        }
    }
    ();
    K.Cc = function (a) {
        function e(a) {
            for (var b = 0; b < a.length; ++b)
                a[b] = (a[b] & 255) << 24 | (a[b] & 65280) << 8 | (a[b] & 16711680) >>> 8 | (a[b] & 4278190080) >>> 24;
            return a
        }
        a = a.split(",");
        if ("mt19937ar-sha512-n288-base64" == a[0]) {
            a = function (a) {
                a = atob(a);
                for (var b = [], c = 0; c < a.length; c += 4)
                    b.push(a.charCodeAt(c + 0) << 0 | a.charCodeAt(c + 1) << 8 | a.charCodeAt(c + 2) << 16 | a.charCodeAt(c + 3) << 24);
                return b
            }
            (a[1]);
            var c = -1,
            b = new Lc;
            Mc(b, a, a.length);
            var f = new Lc;
            return function (a, k) {
                if (k && c != a) {
                    for (var d = [], n = 0; 624 > n; ++n)
                        d[n] = Nc(b);
                    Mc(f, d, 624)
                }
                c =
                    a;
                for (var g = k ? f : b, d = [], h = [], n = 0; 9 > n; ++n) {
                    for (var l = [], z = 0; 32 > z; ++z)
                        l[z] = Nc(g);
                    Array.prototype.push.apply(h, e(Oc(e(l))))
                }
                for (var n = 0; n < h.length; ++n)
                    h[n] >>>= 0;
                if (D.v & 16)
                    for (n = 0; 136 > n; ++n)
                        (4 > n || 32 <= n) && d.push(n);
                else
                    for (n = 0; 136 > n; ++n)
                        d.push(n);
                z = d.length;
                for (n = 0; n < z - 1; ++n)
                    g = n + h[n] % (z - n), l = d[n], d[n] = d[g], d[g] = l;
                return d
            }
        }
    };
    var wc = function () {
        function a(a) {
            if (void 0 !== b)
                return 350 < e && 25 < e - c && (b(), c = e), e += a, !0
        }
        var e = 0,
        c = 0,
        b = void 0;
        return {
            set: function (f, d) {
                b = f;
                e = c = 0;
                b ? (d && b(), hc().autoRepeat = a) : delete hc().Uc
            }
        }
    }
    ();
    var D = function () {
        function a(a) {
            if (1 == D.a) {
                var b = (~~H.lognext + 40 - 1) % 40,
                c = H["log" + b];
                if (c) {
                    try {
                        c = JSON.parse(c)
                    } catch (w) {
                        return
                    }
                    c.sc || (c.sc = a, H["log" + b] = JSON.stringify(c))
                }
            }
        }
        function e(a, b, c, d, e, f, g) {
            var l,
            h,
            k;
            c instanceof kc ? (l = d.w % 4, h = d.c, k = d.h, d.ga(0), d = M[c.w << 8 | K.Xa[e]]) : (l = c, c = R[b | l << 8 | d], h = c.c, k = c.h, d = M[l << 8 | 48]);
            switch (b) {
            case 5120:
                k = 0;
                break;
            case 4096:
                0 == l ? k = Wb : 1 == l ? h = Vb : 2 == l ? k = 0 : 3 == l && (h = 0);
                l & 1 && (h -= P.s.canvas.offsetLeft * r);
                break;
            case 1024:
                var m = n ? K.Ma(K.bb++) : K.Nb(l);
                1 == K.a || 3 == K.a ? (d = m.i, h =
                        m.c, k = m.h, $b.O(a, m, 0)) : 0 == l ? k = ~~(Wb / 2) : 1 == l ? h = ~~(Vb / 2) : 2 == l ? k = ~~(Wb / 2) : 3 == l && (h = ~~(Vb / 2));
                n = !1;
                break;
            case 3072:
                c.c = c.I + ($b.$ ? 0 : ~~(.2 * Fc[l]) + ~~(.15 * mc[l])),
                c.h = c.J + ($b.$ ? 0 : ~~(.2 * Gc[l]) + ~~(.15 * lc[l]))
            }
            c.Fa(1024 == b, e);
            $b.O(a + 0, h, k, c.c, c.h, f, d, .06);
            b = $b.O(a + 10, h, k, c.c, c.h, f, d, .18, c, 1);
            $b.O(a + 20, h, k, c.c, c.h, f, d, .06);
            0 != g && jc(g, 0, b / 1E3);
            return b
        }
        function c(a) {
            ec.Z();
            u.R(256);
            nc();
            var b = {
                tag: "D",
                p: a
            };
            1 == D.a ? W.K(b) : 4 == D.a && A.ac(b);
            b[0] = a;
            W.ra(b)
        }
        function b() {
            D.Tb = [-1, -1, -1, -1];
            D.gb = ["", "", "", ""];
            for (var a =
                    0, b = 0; 4 > b; ++b)
                who = (D.ma + b) % 4, D.H[who] && (D.Tb[who] = a, D.gb[who] = "東南西北".substr(a, 1), ++a)
        }
        var f = {
            84: 0,
            85: 1,
            86: 2,
            87: 3,
            116: 0,
            117: 1,
            118: 2,
            119: 3
        },
        d = -1,
        k = -1,
        m = null,
        n,
        g = "",
        h = !1;
        return {
            a: 0,
            v: 0,
            hb: 0,
            ma: -1,
            Tb: [],
            gb: [],
            oa: [],
            pa: [],
            Qb: [],
            Ta: [],
            Va: [],
            Ra: [],
            H: [],
            connected: 0,
            fa: function () {
                var a = hc(),
                b;
                for (b in a)
                    "autoRepeat" != b && delete a[b];
                ac.fa();
                $b.ha();
                P.xb();
                for (b = 0; b < R.sa.length; ++b)
                    a = R.sa[b], a.u = 0, a.P && (void 0 !== a.I && (a.c = a.I), void 0 !== a.J && (a.h = a.J), a.na(0, 0, !1), delete a.fb);
                for (b = 0; 4 > b; ++b)
                    R.yb(b,
                        -2);
                m = null;
                k = -1;
                d = D.ma = -1;
                dc.X(0, -1);
                bc.ha();
                V.ha();
                cc.style.display = dc.s.canvas.style.display = "none";
                ec.Z();
                u.R(256);
                nc();
                S.L();
                A.fa()
            },
            ha: function (a) {
                if ("REINIT" == a.tag || 3 == D.a)
                    $b.$ = !0;
                n = !1;
                d = D.ma = ~~a.oya;
                D.oa = p(a.seed);
                D.pa = p(a.ten, 100);
                D.Qb = p(a.chip);
                b();
                ec.Ic(ia(D.hb, D.v) ? 5E3 : 1E4);
                K.ha(a[5]);
                bc.ha();
                V.ha();
                Bb.Bc();
                h && (xb(40, 0, 0), h = !1);
                dc.X(void 0, -1);
                for (var c = 0; 4 > c; ++c)
                    if (D.H[c])
                        for (var f = 0; 13 > f; ++f)
                            V[32 | c].push(136);
                var l = 0;
                if (1 == K.a) {
                    for (c = 0; 4 > c; ++c)
                        for (f = 0; 34 > f; ++f)
                            R[4096 | c << 8 | f].ca = 0;
                    for (f =
                            0; 17 > f; ++f)
                        for (c = 0; 4 > c; ++c)
                            $b.O(e(l, 4096, c, f, 136, .08, 4), R[4096 | c << 8 | f + 17].Fa(!1, 136), 1), l += 12
                } else if (3 == K.a) {
                    for (var g = t.tw + 1, c = 0; 4 > c; ++c)
                        for (f = 0; 34 > f; ++f) {
                            var k = K.Hb(c, f),
                            m = R[4096 | c << 8 | f],
                            k = (k & 3840) >> 8;
                            k == g ? m.na(-2049, 2048, !1) : 5 == k ? m.na(-12289, 12288, !1) : m.na(-4097, 4096, !1)
                        }
                    for (f = 0; 17 > f; ++f)
                        for (c = 0; 4 > c; ++c)
                            $b.O(e(l, 4096, c, f, K.Hb(c, f) & 255, .08, 4), R[4096 | c << 8 | f + 17].Fa(!1, K.Hb(c, f + 17) & 255), 1), l += 12
                } else
                    for (f = 0; 5 > f; ++f)
                        e(l, 5120, 0, f, 136, .08, 4), l += 45;
                $b.O(function () {
                    dc.X(void 0, d);
                    for (var a = 5; a < D.oa.length; ++a)
                        D.DORA({
                            hai: D.oa[a],
                            Ub: a - 5
                        });
                    if (K.Pa)
                        for (var b = 0; 4 > b; ++b) {
                            var c = ~~(.1 * Fc[b]),
                            e = ~~(.1 * Gc[b]);
                            P.Aa();
                            for (a = 0; 34 > a; ++a)
                                if (2 <= a % 17) {
                                    var f = R[4096 | b << 8 | a];
                                    f.La();
                                    f.c += c;
                                    f.h += e;
                                    f.Ja();
                                    f.La()
                                }
                            for (a = 0; 34 > a; ++a)
                                R[4096 | b << 8 | a].Ja();
                            P.Ba()
                        }
                });
                for (var E = [0, 0, 0, 0], c = 0; 4 > c; ++c)
                    D.H[c] || (E[c] += 136 - (D.v & 2048 ? 112 : 108));
                for (c = 0; 4 > c; ++c)
                    for (m = p(a["m" + c]); m.length; )
                        k = m.pop(), D.N({
                            who: c,
                            m: k
                        }), n && (K.Ma(K.bb).ga(0), ++K.bb, n = !1), ++E[(c + (k & 3)) % 4], --E[c];
                a.hai && (V[32] = p(a.hai));
                a.hai0 && (V[32] = p(a.hai0));
                a.hai1 && (V[33] = p(a.hai1));
                a.hai2 && (V[34] =
                        p(a.hai2));
                a.hai3 && (V[35] = p(a.hai3));
                S.L();
                for (c = 0; 4 > c; ++c)
                    for (D.H[c] && (E[c] += 13 - V[32 | c].length), f = 0; f < V[32 | c].length; ++f)
                        136 > V[32 | c][f] && V[48 | c][V[32 | c][f] >> 2]++;
                f = [p(a.kawa0), p(a.kawa1), p(a.kawa2), p(a.kawa3)];
                for (c = 0; 4 > c; ++c) {
                    P.Aa();
                    l = 0;
                    for (g = !1; f[c].length; )
                        k = f[c].shift(), 255 == k ? (R.yb(c, l), 0 == c && (V[64] = vb.eb(V[48]))) : 254 == k ? g = !0 : (m = R[3072 | c << 8 | l], m.Fa(!1, k & 255), m.ga(1), g && (4 == D.mode || 1 != D.a && u.l[1277961]) && m.na(-257, 256, !1), m.La(), ++E[c], ++l, g = !1);
                    P.Ba()
                }
                $b.$ && P.Aa();
                $b.O(function () {
                    for (var a =
                            0; 4 > a; ++a)
                        for (var b = 0; b < E[a]; ++b)
                            K.Nb(a).ga(0);
                    for (var c = 0, d = 0; 52 > d; ++d)
                        a = (48 > d ? ~~(d / 4) : d) % 4, D.H[a] && (b = 48 > d ? 4 * ~~(d / 16) + d % 4 : 12, V[32 | a].length <= b || (e(c, 1024, a, b, a && !u.l[1277960] ? 136 : V[32 | a][b], .08, 4), 3 == d % 4 && (c += 75)));
                    dc.X()
                });
                $b.$ && P.Ba();
                $b.O(function () {
                    for (var a = 0; 4 > a; ++a)
                        $b.$ && P.Aa(), ($b.$ || a || u.l[1183750]) && V.Nc(a), $b.$ && P.Ba();
                    if (~D.v & 2048 && (1 == K.a || 3 == K.a)) {
                        P.Aa();
                        K.Ma(14).La();
                        for (var a = K.Ma(14).w, b = ~~(.15 * Fc[a]), c = ~~(.15 * Gc[a]), d = 14; 48 > d; ++d) {
                            var e = K.Ma(d);
                            if (e.w != a)
                                break;
                            e.c += b;
                            e.h += c;
                            e.La()
                        }
                        K.Ma(13).Ja();
                        K.Ma(15).Ja();
                        P.Ba()
                    }
                });
                cc.style.display = "none";
                dc.s.canvas.style.display = "";
                u.l[1183749] = u.l[1183753] = u.l[1183751] = !1;
                u.l[1183752] = !!H.autowin;
                u.l[1183750] = !0;
                u.R(256);
                if ((3 == D.a || 2 == D.a) && u.l[1277957])
                    for (c = 0; 4 > c; ++c)
                        Bb.ec(c);
                if ("REINIT" == a.tag || 3 == D.a)
                    $b.$ = !1;
                $b.O(W.Da)
            },
            Jb: function (a) {
                var b = k;
                V[64] || (b = V[32 | d][a]);
                c(b)
            },
            ERR: function (a) {
                var b = ~~a.code;
                a = "(ERR" + b + ")";
                var c = 1;
                switch (b) {
                case 1001:
                case 1002:
                case 1003:
                case 1004:
                case 1005:
                case 1006:
                case 1012:
                case 1019:
                case 1021:
                    A.b.style.display = "";
                    ob(!1, 0);
                    break;
                case 1020:
                    c |= 2;
                    break;
                case 1027:
                    a = "";
                    break;
                case 1100:
                case 1101:
                    A.cancel()
                }
                x.o(I(b) + a, c, function () {
                    switch (b) {
                    case 1014:
                        delete t.wg;
                        break;
                    case 1019:
                        location.reload();
                        break;
                    case 1020:
                        A.purchase()
                    }
                });
                return 1
            },
            HELO: function (a) {
                if (a.closing)
                    return location.reload(), 1;
                if (2 == D.a)
                    return W.K({
                        tag: "WG",
                        id: t.wg,
                        tw: t.tw
                    }), 1;
                var b;
                A[17] = a.PF4 ? a.PF4.split(",") : [];
                A[16] = a.PF3 ? a.PF3.split(",") : [];
                A[18] = a.PF601 && a.PF01C ? (b = a.PF601.split(","), b.splice(1, 0, 0, a.PF01C.split(",")[1]), b) : [];
                A[19] = a.PF602 &&
                    a.PF02C ? (b = a.PF602.split(","), b.splice(1, 0, 0, a.PF02C.split(",")[1]), b) : [];
                A[20] = a.PF603 && a.PF03C ? (b = a.PF603.split(","), b.splice(1, 0, 0, a.PF03C.split(",")[1]), b) : [];
                A[21] = a.PF611 && a.PF11C ? (b = a.PF611.split(","), b.splice(1, 0, 0, a.PF11C.split(",")[1]), b) : [];
                A[22] = a.PF612 && a.PF12C ? (b = a.PF612.split(","), b.splice(1, 0, 0, a.PF12C.split(",")[1]), b) : [];
                A[23] = a.PF613 && a.PF13C ? (b = a.PF613.split(","), b.splice(1, 0, 0, a.PF13C.split(",")[1]), b) : [];
                A[24] = a.PF623 && a.PF23C ? (b = a.PF623.split(","), b.splice(1, 0, 0, a.PF23C.split(",")[1]),
                        b) : [];
                A[25] = a.PF633 && a.PF33C ? (b = a.PF633.split(","), b.splice(1, 0, 0, a.PF33C.split(",")[1]), b) : [];
                A[0] = decodeURIComponent(a.uname);
                A[1] = a.expire;
                A[2] = ~~a.expiredays;
                a.nintei ? (a.tag = "NINTEI", A.o(a)) : A.Eb();
                return 1
            },
            REHELO: function () {
                W.tc();
                return 1
            },
            LN: A.mc,
            REJOIN: function (a) {
                W.K({
                    tag: "JOIN",
                    t: a.t
                });
                return 1
            },
            CHAT: A.ic,
            CS: A.jc,
            DATE: A.kc,
            RANKING: function (a) {
                a.rankingcs ? A.pc(a) : A.oc(a);
                return 1
            },
            SHUFFLE: function () {
                return 1
            },
            GO: function (a) {
                a.gpid && (H.gpid = a.gpid);
                D.hb = ~~a.lobby;
                D.v = ~~a.type;
                1 != D.a && 2 !=
                D.a || W.K({
                    tag: "GOK"
                });
                1 == D.a && 0 == D.hb && D.v & 1 && A.Qc(D.v);
                return 1
            },
            UN: function (a) {
                if (3 <= !!a.n0 + !!a.n1 + !!a.n2 + !!a.n3) {
                    D.H = ["", "", "", ""];
                    for (var b = 0; 4 > b; ++b)
                        D.H[b] = decodeURIComponent(a["n" + b]).replace("Ⓟ", "ⓟ").replace("Ⓢ", "ⓢ");
                    D.Va = p(a.dan ? a.dan : ",,,");
                    D.Ra = p(a.rate ? a.rate : ",,,");
                    D.Ta = (a.sx ? a.sx : ",,,").split(",");
                    if (!1 !== u.l[14])
                        for (b = 0; 4 > b; ++b) {
                            if (a = D.H[b])
                                (a = D.H[b]) && a.length ? (a = a.charCodeAt(0), a = 9372 <= a && 9397 >= a || 9398 <= a && 9423 >= a || 9424 <= a && 9449 >= a) : a = !1, a = !(a || 20 <= D.Va[b]);
                            a &&
                            (a = (t.tw + b) % 4, D.H[b] = 3 == D.a && a == t.TW ? "私" : "ABCD".substr(a, 1) + "さん")
                        }
                } else
                    a.n0 && (D.connected |= 1), a.n1 && (D.connected |= 2), a.n2 && (D.connected |= 4), a.n3 && (D.connected |= 8), dc.X();
                return 1
            },
            BYE: function (a) {
                D.connected &= ~(1 << ~~a.who);
                dc.X();
                return 1
            },
            TAIKYOKU: function (a) {
                u.l[1183749] = u.l[1183753] = u.l[1183752] = u.l[1183751] = !1;
                u.l[1183750] = !0;
                u.b.style.display = "";
                u[1572868].innerHTML = "";
                u.R(126976);
                W.Na = 0;
                h = "SAIKAI" != a.tag && D.v & 1;
                D.ma = ~~a.oya;
                if (1 == D.a && a.log) {
                    g = a.log;
                    var c = ~~H.lognext;
                    H["log" +
                        c] = JSON.stringify({
                        type: D.v,
                        lobby: D.hb,
                        log: g,
                        oya: D.ma,
                        uname: D.H
                    });
                    H.lognext = (c + 1) % 40
                }
                D.connected = 15;
                b();
                R.L();
                bc.L();
                A.o(a);
                Yb.X();
                return 1
            },
            INIT: function (a) {
                A.Z(function () {
                    D.fa();
                    D.ha(a)
                })
            },
            FURITEN: function (a) {
                cc.style.display = ~~a.show ? "" : "none";
                return 1
            },
            T: function (a) {
                if (-1 == d)
                    return 1;
                if (n || 3 == D.a)
                    V.mb(d), V.lb();
                3 == D.a && ac.Cb();
                m && (R.Qa(0, 120, [m]), m = null);
                k = void 0 === a[0] ? 136 : a[0];
                d = f[a.tag.charCodeAt(0)];
                var b = V[32 | d].length;
                V[32 | d].push(k);
                136 > k && V[48 | d][k >> 2]++;
                var g = R[1024 | d << 8 | b];
                g || rb("T d PH_TEHAI who=" +
                    d + " n=" + b + " wg=" + t.wg);
                g.c = g.I + ~~(.1 * Fc[d]);
                g.h = g.J + ~~(.1 * Gc[d]);
                e(0, 1024, d, b, d && !u.l[1277960] ? 136 : k, -120, 5);
                dc.X(void 0, d);
                1 != D.a && Bb.fc(g);
                var h = ~~a.t;
                $b.O(function () {
                    3 == D.a || 2 == D.a || d || (h & 16 && u.l[1183752] ? W.K({
                            tag: "N",
                            type: 7
                        }) : (h = oc.Ac(h, k)) || !u.l[1183753] && !V[64] ? nc(a) : (ec.Yb(), c(k)));
                    ic(W.Da, $b.$ || 3 == D.a ? 0 : 500)
                })
            },
            D: function (a) {
                if (-1 == d)
                    return 1;
                var b = a.tag.charCodeAt(0),
                c = 100 <= b && 103 >= b || k === a[0];
                k = a[0];
                0 < V[48 | d][k >> 2] && V[48 | d][k >> 2]--;
                for (var f = V[32 | d].length, b = 0; b < f && V[32 | d][b] != k; ++b);
                b ==
                f && (b = c ? f - 1 : ~~((f - 1) / 2));
                b = R[1024 | d << 8 | b];
                for (f = 0; (m = R[3072 | d << 8 | f]) && m.u; ++f);
                2 == D.a || 3 == D.a ? (u.l[1277957] && Bb.ec(d), u.l[1277961] && m.na(-1281, (c ? 256 : 0) | b.aa & 1024, !1)) : (D.v & 256 || 4 == D.a) && m.na(-257, c ? 256 : 0, !1);
                e(0, 3072, m, b, k, -120, 6);
                var g = ~~a.t;
                $b.O(function () {
                    g & 8 && u.l[1183752] ? (xb(8, 0, 0), ic(function () {
                            W.K({
                                tag: "N",
                                type: 6
                            })
                        }, 1E3)) : ~g & 8 && g && u.l[1183749] ? W.K({
                        tag: "N"
                    }) : g && oc.yc(g, k);
                    3 == D.a ? (V.Lb(d), W.Da()) : ic(function () {
                        V.Lb(d);
                        V.mb(d);
                        V.lb();
                        W.Da()
                    }, $b.$ ? 0 : 300)
                })
            },
            N: function (a) {
                ec.Z();
                u.R(256);
                nc();
                if (-1 == d)
                    return 1;
                3 == D.a && (V.mb(d), V.lb());
                var b = d = ~~a.who;
                dc.X(void 0, b);
                a[2] || pc(a);
                var c = a[0],
                f = V[32 | b].length,
                g = [],
                h = 3 - a[3];
                if (a.tag) {
                    ac.O(b, a[2], 3 == D.a ? 4 : 6);
                    for (var l = 0; l < c.length; ++l)
                        if (m && c[l] == k)
                            g[l] = m, m = null, h = l;
                        else {
                            for (var E = 0; E < V[32 | b].length && V[32 | b][E] != c[l]; ++E);
                            E == V[32 | b].length && (E = --f);
                            g[l] = R[1024 | b << 8 | E];
                            V[48 | b][c[l] >> 2]--
                        }
                } else
                    5 == a[2] && D.N({
                        who: b,
                        m: a.m ^ 24
                    });
                n = !0;
                f = [];
                if (10 == a[2])
                    V[16 | b].push(c[0]), bc.ob(b), f[0] = R[b << 8 | 2064], f[0].w = b;
                else if (1 == c.length) {
                    for (l = (D.v & 16 ? 16 : 17) - 1; (f[0] =
                                R[2048 | b << 8 | l]) && f[0].u && f[0].Ia.fb != c[0]; --l);
                    f[0] && (f[0].Ia.w = (b + 3) % 4, f[0] = f[0].Ia)
                } else {
                    for (l = (D.v & 16 ? 16 : 17) - 1; (f[0] = R[2048 | b << 8 | l]) && f[0].u; --l);
                    f.unshift(R[2048 | b << 8 | l - 1]);
                    f.unshift(R[2048 | b << 8 | l - 2]);
                    for (l = 0; l < f.length; ++l)
                        f[l].w = b;
                    3 == h && (h = a[3] ? 2 : 1);
                    4 == c.length ? (f[h].w = f[h].Ia.w = (b + 1) % 4, f[3] = f[2], f[2] = f[h].Ia) : (n = !1, f[h].w = (b + 1) % 4, 1 == a[2] && (f[h].Ia.fb = a[4]))
                }
                R.gc(b);
                if (a.tag) {
                    for (l = 0; l < f.length; ++l) {
                        h = c[l];
                        4 != c.length || a[3] || 0 != l && 3 != l || (h = 136);
                        E = .06;
                        if (10 == a[2])
                            var E = f[l].c - g[l].c, da = f[l].h -
                                g[l].h, E = Math.sqrt(E * E + da * da) / 4E3;
                        e(0, 2048, f[l], g[l], h, E, 0)
                    }
                    V.Lb(b);
                    V.mb(b);
                    V.lb();
                    b || (S.L(), n || nc(a));
                    var oa = ~~a.t;
                    $b.O(function () {
                        oa && oc.zc(oa);
                        W.Da()
                    })
                } else {
                    for (l = 0; l < f.length; ++l)
                        h = c[l], 4 != c.length || a[3] || 0 != l && 3 != l || (h = 136), f[l].Fa(!1, h), f[l].ga(1), f[l].La();
                    5 != a[2] && 10 != a[2] && V[32 | b].splice(V[32 | b].length - 3, 3)
                }
            },
            DORA: function (a) {
                if (-1 == d)
                    return 1;
                var b = ~~a.hai,
                c = void 0 === a.Ub ? D.oa.length - 5 : a.Ub,
                e = (D.v & 2048 ? 20 : D.v & 16 ? 8 : 4) + 2 * c,
                f = R[5120 | c];
                if (1 == K.a || 3 == K.a)
                    f = K.Ma(e);
                f.Fa(!1, b);
                0 == c && 3 == K.a && f.na(-513,
                    512, !1);
                f.Wb();
                "DORA" == a.tag && D.oa.push(b);
                1 < c && (bc.ob(0), bc.ob(1), bc.ob(2), bc.ob(3));
                return 1
            },
            REACH: function (a) {
                if (1 == a.step) {
                    var b = ~~a.who;
                    ac.O(b, 8, 3 == D.a ? 7 : 6);
                    R.yb(b, -1);
                    0 == b && nc(a);
                    ic(W.Da, $b.$ || 3 == D.a ? 0 : 500)
                } else
                    return 2 == a.step && (b = ~~a.who, 1 == D.a && 0 == b && (V[64] = vb.eb(V[48])), D.oa[2]++, dc.X()), a.ten && (D.pa = p(a.ten, 100)), 1
            },
            AGARI: function (b) {
                if (-1 == d)
                    return 1;
                3 == D.a && ac.Cb();
                var c = ~~b.who;
                V[32 | c] = p(b.hai);
                V[32 | c].splice(V[32 | c].indexOf(~~b.machi), 1);
                if (c && c == b.fromWho) {
                    var e = R[1024 | c << 8 | V[32 |
                                c].length];
                    e.ga(0).Fa(!0, ~~b.machi).ga(1);
                    1 != D.a && Bb.fc(e)
                }
                m && (R.Qa(0, 120, [m]), m = null);
                ac.O(c, c == b.fromWho ? 7 : 6, 3 == D.a ? 4 : 6);
                b.paoWho && ac.O(~~b.paoWho, 11, 3 == D.a ? 4 : 6);
                V.bc(1 << c);
                ic(function () {
                    A.o(b);
                    b.owari && (H.removeItem("gpid"), A.o({
                            tag: "OWARI",
                            sc: b.owari
                        }), a(b.owari), W.Z())
                }, 3 == D.a ? 0 : 1E3);
                wc.set();
                return 1
            },
            RYUUKYOKU: function (b) {
                if (-1 == d)
                    return 1;
                3 == D.a && ac.Cb();
                b.hai1 && (V[33] = p(b.hai1));
                b.hai2 && (V[34] = p(b.hai2));
                b.hai3 && (V[35] = p(b.hai3));
                if ("ron3" == b.type) {
                    var c = 3 == D.a ? 4 : 6;
                    b.hai0 && ac.O(0, 6, c);
                    b.hai1 &&
                    ac.O(1, 6, c);
                    b.hai2 && ac.O(2, 6, c);
                    b.hai3 && ac.O(3, 6, c)
                }
                m && (R.Qa(0, 120, [m]), m = null);
                V.bc(14);
                ic(function () {
                    A.o(b);
                    b.owari && (H.removeItem("gpid"), A.o({
                            tag: "OWARI",
                            sc: b.owari
                        }), a(b.owari), W.Z())
                }, 3 == D.a ? 0 : 1E3);
                wc.set();
                return 1
            },
            VOICE: function (a) {
                a = a.type;
                for (var b = 0; 4 > b; ++b)
                    a[b] && ac.O(b, a[b], 3);
                return 1
            },
            PROF: function () {
                return 1
            },
            INITBYLOG: Bb.lc,
            WGC: Bb.qc,
            TRAININGINIT: function (a) {
                D.ha(a)
            }
        }
    }
    ();
    D.W = D.V = D.U = D.T;
    D.g = D.f = D.e = D.d = D.G = D.F = D.E = D.D;
    D.KANSEN = D.SAIKAI = D.TAIKYOKU;
    D.REINIT = D.INIT;
    function Lc() {
        this.ea = 624;
        this.pb = 397;
        this.nc = 2567483615;
        this.Bb = 2147483648;
        this.Ab = 2147483647;
        this.B = Array(this.ea);
        this.ta = this.ea + 1
    }
    function Pc(a, e) {
        a.B[0] = e >>> 0;
        for (a.ta = 1; a.ta < a.ea; a.ta++)
            e = a.B[a.ta - 1] ^ a.B[a.ta - 1] >>> 30, a.B[a.ta] = (1812433253 * ((e & 4294901760) >>> 16) << 16) + 1812433253 * (e & 65535) + a.ta, a.B[a.ta] >>>= 0
    }
    function Mc(a, e, c) {
        var b,
        f,
        d;
        Pc(a, 19650218);
        b = 1;
        f = 0;
        for (d = a.ea > c ? a.ea : c; d; d--) {
            var k = a.B[b - 1] ^ a.B[b - 1] >>> 30;
            a.B[b] = (a.B[b] ^ (1664525 * ((k & 4294901760) >>> 16) << 16) + 1664525 * (k & 65535)) + e[f] + f;
            a.B[b] >>>= 0;
            b++;
            f++;
            b >= a.ea && (a.B[0] = a.B[a.ea - 1], b = 1);
            f >= c && (f = 0)
        }
        for (d = a.ea - 1; d; d--)
            k = a.B[b - 1] ^ a.B[b - 1] >>> 30, a.B[b] = (a.B[b] ^ (1566083941 * ((k & 4294901760) >>> 16) << 16) + 1566083941 * (k & 65535)) - b, a.B[b] >>>= 0, b++, b >= a.ea && (a.B[0] = a.B[a.ea - 1], b = 1);
        a.B[0] = 2147483648
    }
    function Nc(a) {
        var e,
        c = [0, a.nc];
        if (a.ta >= a.ea) {
            var b;
            a.ta == a.ea + 1 && Pc(a, 5489);
            for (b = 0; b < a.ea - a.pb; b++)
                e = a.B[b] & a.Bb | a.B[b + 1] & a.Ab, a.B[b] = a.B[b + a.pb] ^ e >>> 1 ^ c[e & 1];
            for (; b < a.ea - 1; b++)
                e = a.B[b] & a.Bb | a.B[b + 1] & a.Ab, a.B[b] = a.B[b + (a.pb - a.ea)] ^ e >>> 1 ^ c[e & 1];
            e = a.B[a.ea - 1] & a.Bb | a.B[0] & a.Ab;
            a.B[a.ea - 1] = a.B[a.pb - 1] ^ e >>> 1 ^ c[e & 1];
            a.ta = 0
        }
        e = a.B[a.ta++];
        e ^= e >>> 11;
        e ^= e << 7 & 2636928640;
        e ^= e << 15 & 4022730752;
        return (e ^ e >>> 18) >>> 0
    }
    Lc.prototype.random = function () {
        return Nc(this) * (1 / 4294967296)
    };
    var qc = function () {
        function a() {
            u.la(1574918)
        }
        function e() {
            u.la(1574917)
        }
        function c() {
            var a = V[32],
            a = a ? 3 * ~~(a.length / 3) + 1 : 1;
            if (R[1024 | a].u)
                return R[1024 | a]
        }
        function b(a, b) {
            if (a && a.tagName) {
                var c = a.style;
                b ? (c.backgroundColor = l & 4 ? "#050" : "#030", c.animationName = "none", c.color || (c.color = "#FFF")) : (c.backgroundColor = "", c.animationName = "", c.color = "")
            }
        }
        function f(a) {
            if (g != a) {
                if (g && g.tagName && (b(g, !1), h && !a)) {
                    g = h;
                    return
                }
                h && (~l & 2 || !a || a instanceof kc) && (S.Ua(h.S, -15, 0), h = void 0);
                if (!a && h)
                    g = h;
                else {
                    g = a;
                    a instanceof
                    kc && S.Ua(a.S, -15, 2 | (l & 8 ? 8 : 0));
                    if (!a || a instanceof kc)
                        h = a;
                    A.Lc(a);
                    l &= -5;
                    b(g, !0)
                }
            }
        }
        function d(a) {
            if (h) {
                var b = h.S;
                S.Ua(b, -15, 0);
                S.Ua(b + a, -15, 6);
                h = R[1024 | b + a]
            }
        }
        function k(k, n) {
            k && wc.set();
            if (g) {
                k || 3 != D.a || (g == u[1574917] && wc.set(e, !1), g == u[1574918] && wc.set(a, !1));
                if (k && !n)
                    l &= -5, g instanceof kc && S.Ua(g.S, -15, 0), g && g != dc.s.canvas && g.style && ~l & 8 && f();
                else if (!n || ~l & 4)
                    l |= 4, g instanceof kc && S.Ua(g.S, -15, 4 | (l & 8 ? 8 : 0));
                else {
                    if ("CPda" == g.name)
                        f(), g = h;
                    else if ("CPok" == g.name) {
                        var E = c();
                        E && R[1024 | E.S].aa & 1 && E.u ? D.Jb(E.S) :
                        m(Xb, 0, 0, !0, !1)
                    }
                    if (g instanceof kc)
                        R[1024 | g.S].aa & 1 && g.u && (D.Jb(g.S), f());
                    else if (g && g.tagName) {
                        if (!k)
                            return;
                        if (g.name) {
                            if (!g.disabled)
                                if ("CP_L" == g.name)
                                    S.Gb(-1), d(-1);
                                else if ("CP_R" == g.name)
                                    S.Gb(1), d(1);
                                else if (A[g.name])
                                    A[g.name](g)
                        } else
                            g == dc.s.canvas ? dc.la() : g.parentNode.parentNode != u.b || g.parentNode.style.visibility || u.la(~~g.id.substr(1));
                        l & 2 && f()
                    }
                }
                l &= -9;
                b(g, !0)
            }
        }
        function m(a, b, d, e, k, m) {
            "BUTTON" == a.tagName || a.parentNode != S.b || S[20].style.display ? a.parentNode != S.b || S[0].style.display || (d = R[81] /
                    r + 1, k || (b = a.offsetLeft + 1)) : (d = R[81] / r + 1, l & 2 && !k && (b = S.b.offsetLeft + S[24].offsetLeft + S[24].offsetWidth / 2), l &= -3, k = !1);
            b *= r;
            d *= r;
            var n;
            if (k && g instanceof kc) {
                if (1 == D.a || 4 == D.a) {
                    for (a = 0; (n = R[1024 | a]) && !(n.I <= b && b < n.I + N[4]); ++a);
                    if (b = n && g != n)
                        if (b = g, d = n, b != d && b.u && d.u) {
                            u.l[1183750] && u.la(1183750);
                            for (e = [b]; b != d; )
                                a = R[1024 | b.S + (d.S < b.S ? -1 : 1)], m = S[b.S].style.backgroundColor, S[b.S].style.backgroundColor = S[a.S].style.backgroundColor, S[a.S].style.backgroundColor = m, m = V[32][b.S], V[32][b.S] = V[32][a.S], V[32][a.S] =
                                    m, m = b.i, b.i = a.i, a.i = m, m = b.u, b.u = a.u, a.u = m, m = b.c, b.c = a.c, a.c = m, m = b.h, b.h = a.h, a.h = m, m = b.aa, b.aa = a.aa, a.aa = m, m = b.ka, b.ka = a.ka, a.ka = m, m = b.ca, b.ca = a.ca, a.ca = m, e.push(b = a);
                            R.Qa(0, 80, e);
                            b = !0
                        } else
                            b = !1;
                    b && (g = h = n, ec.L(n))
                }
            } else if ("BUTTON" == a.tagName)
                f(a.disabled ? null : a);
            else if (a == dc.s.canvas)
                f(a);
            else if (a.parentNode && a.parentNode == u.b)
                f(("SELECT" == a.tagName ? a.previousSibling : a).firstChild);
            else {
                if (!x.$a()) {
                    if (l & 2) {
                        k = N[4];
                        var w = U[4] >> 1;
                        for (a = 0; (n = R[1024 | a]) && !(n.u && n.I - k <= b && b < n.I + N[4] && n.J - w <= d && d < n.J +
                                U[4] + T[4]); ++a);
                    } else
                        for (a = 0; (n = R[1024 | a]) && !(n.I <= b && b < n.I + N[4] && n.J <= d && d < n.J + U[4] + T[4]); ++a);
                    n && m && m.preventDefault()
                }
                l &= -9;
                if (!n && e) {
                    if (b / r < S.b.offsetLeft + S[1].offsetLeft && S.b.offsetTop + S[1].offsetTop < d / r && d / r < S.b.offsetTop + S[1].offsetTop + S[1].offsetHeight)
                        n = R[1025];
                    else if (S.b.offsetLeft + S[12].offsetLeft + S[12].offsetWidth < b / r && S.b.offsetTop + S[12].offsetTop < d / r && d / r < S.b.offsetTop + S[12].offsetTop + S[12].offsetHeight)
                        n = R[1036];
                    else if (A.b && !A.b.style.display && Z.ok)
                        n = Z.ok;
                    else if (!u[2360326].parentNode.style.visibility &&
                        !u[2360326].parentNode.style.display)
                        n = u[2360326];
                    else if (1 == D.a || 4 == D.a)
                        n = c();
                    n && (l |= 8)
                }
                f(n)
            }
        }
        var n = {
            A: 1,
            IMG: 1,
            INPUT: 1,
            SELECT: 1,
            OPTION: 1,
            LABEL: 1,
            TEXTAREA: 1
        },
        g,
        h,
        l = 0,
        z,
        C,
        w,
        B,
        y;
        ua(q, {
            touchstart: function (b) {
                var c = b.target;
                if (!n[c.tagName] && "fixed-select" != c.parentNode.className) {
                    var d = b.changedTouches;
                    if (1 != d.length)
                        f();
                    else if (A.b && !c.name && "scroll" != c.style.overflowY && A.b.firstChild.contains(c))
                        f(), g || -1 == D.ma || (A.b.style.visibility = "hidden");
                    else {
                        z = Date.now();
                        C = d[0].pageX;
                        w = d[0].pageY;
                        var d = C - Xb.offsetLeft -
                            P.s.canvas.offsetLeft,
                        h = w - Nb;
                        "BUTTON" == c.tagName || c.parentNode != S.b || S[20].style.display || S.Kb(c.offsetLeft + c.offsetWidth / 2);
                        l |= 2;
                        m(c, d, h, !x.$a(), !1, b);
                        g && g != dc.s.canvas && g.style && ~l & 8 && (l |= 4);
                        u.a & 126976 && !u.b.contains(c) || (g == u[1574917] && wc.set(e, !1), g == u[1574918] && wc.set(a, !1))
                    }
                }
            },
            touchmove: function (a) {
                if (g instanceof kc) {
                    var b = a.touches;
                    1 == b.length && (Math.abs(b[0].pageX - C) < 10 * r || m(a.target, b[0].pageX - Xb.offsetLeft - P.s.canvas.offsetLeft, R[81] / r + 1, !1, !0))
                }
            },
            touchend: function (a) {
                wc.set();
                var b = a.target;
                n[b.tagName] || !b.parentNode || n[b.parentNode.tagName] || "fixed-select" == b.parentNode.className || (x.$a() || a.preventDefault(), A.b && "hidden" == A.b.style.visibility ? A.b.style.visibility = "" : (a = a.changedTouches, 1 == a.length && (k(!0, Math.abs(a[0].pageX - C) < 10 * r && Math.abs(a[0].pageY - w) < 10 * r && 1E3 > Date.now() - z), u.a & 126976 && !u.b.contains(b) && u.R(126976))))
            },
            touchcancel: function () {
                wc.set()
            },
            mousemove: function (a) {
                var b = a.target;
                if (void 0 !== a.buttons ? 2 != a.buttons : 3 != a.which) {
                    B = a.pageX;
                    y = a.pageY;
                    var c = B - Xb.offsetLeft -
                        P.s.canvas.offsetLeft,
                    d = y - Nb;
                    l &= -3;
                    m(b, c, d, !1, void 0 !== a.buttons ? 1 == a.buttons : 1 == a.which)
                }
            },
            mousedown: function (b) {
                var c = b.target;
                n[c.tagName] || !c.parentNode || n[c.parentNode.tagName] || "fixed-select" == c.parentNode.className || (A.b && !c.name && "scroll" != c.style.overflowY && A.b.firstChild.contains(c) ? g || -1 == D.ma || (A.b.style.visibility = "hidden") : (z = Date.now(), C = b.pageX, w = b.pageY, (void 0 !== b.buttons ? 2 != b.buttons : 3 != b.which) || 1 != D.a && 4 != D.a ? m(c, C - Xb.offsetLeft - P.s.canvas.offsetLeft, w - Nb, !1) : m(Xb, 0, 0, !x.$a()),
                        k(!1, !0), 3 != D.a || u.a & 126976 && !u.b.contains(c) || x.$a() || g || wc.set((void 0 !== b.buttons ? 2 == b.buttons : 3 == b.which) ? a : e, !0)))
            },
            mouseup: function (a) {
                wc.set();
                var b = a.target;
                !n[b.tagName] && b.parentNode && "dropdown" != b.parentNode.className && (A.b && "hidden" == A.b.style.visibility ? A.b.style.visibility = "" : (k(!0, Math.abs(a.pageX - C) < 10 * r && Math.abs(a.pageY - w) < 10 * r && 1E3 > Date.now() - z), u.a & 126976 && !u.b.contains(b) && u.R(126976)))
            }
        });
        return {
            Sa: function () {
                if (!(g instanceof kc)) {
                    var a = ab.elementFromPoint(~~(B - q.pageXOffset),
                            ~~(y - q.pageYOffset));
                    a && m(a, B - Xb.offsetLeft - P.s.canvas.offsetLeft, y - Nb, !1)
                }
            }
        }
    }
    ();
    va(q, "touchstart", function () {
        delete qc.Sa
    });
    var Qc = "onwheel" in ab ? "wheel" : "onmousewheel" in ab ? "mousewheel" : "DOMMouseScroll";
    ab.addEventListener(Qc, function (a) {
        3 != D.a || x.$a() || (a.preventDefault(), u.la(0 > (a.deltaY ? -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail) ? 1574917 : 1574918))
    }, {
        once: !1,
        passive: !1,
        capture: !0
    });
    (function () {
        var a;
        ta(q, "touchstart", function (e) {
            var c = e.target;
            "A" != c.tagName || "auto" != c.parentNode.style.overflowY && "scroll" != c.parentNode.parentNode.style.overflowY || (a = e.touches[0].screenY)
        });
        ta(q, "touchmove", function (e) {
            var c = e.target;
            "A" == c.tagName && ("auto" == c.parentNode.style.overflowY && 0 == c.parentNode.scrollTop || "scroll" == c.parentNode.parentNode.style.overflowY && 0 == c.parentNode.parentNode.scrollTop) && a <= e.touches[0].screenY && e.preventDefault()
        });
        ta(ab, Qc, function (a) {
            var c = a.target,
            b = a.deltaY ?
                -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail;
            "A" == c.tagName && ("auto" == c.parentNode.style.overflowY && 0 == c.parentNode.scrollTop || "scroll" == c.parentNode.parentNode.style.overflowY && 0 == c.parentNode.parentNode.scrollTop) && 0 < b && a.preventDefault()
        })
    })();
    cb.oncontextmenu = function (a) {
        if (a.target) {
            a = a.target;
            if ("A" != a.tagName && "INPUT" != a.tagName && "TEXTAREA" != a.tagName && (!a.parentNode || "chat" != a.parentNode.id))
                return !1;
            if (pa && a.href)
                return q.prompt("Anchor URL as TEXT", a.href), !1
        }
    };
    var Oc = function () {
        var a = [-2147483648, 8388608, 32768, 128],
        e = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
            1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817,
            3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992,
            116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        c = [];
        return function (b) {
            var f,
            d,
            k,
            m,
            n,
            g,
            h,
            l,
            z,
            C,
            w,
            B,
            y,
            J,
            E,
            da,
            oa,
            bb = !1,
            O,
            Fa = 0,
            lb = 0,
            Jb = 0,
            Wa = b.length,
            Ga,
            Ha,
            Q,
            F,
            L,
            G,
            Kb,
            Lb,
            zb,
            Ab,
            db,
            eb,
            X,
            Y,
            fa,
            ga,
            Ua;
            f = 1779033703;
            d = 4089235720;
            k = 3144134277;
            m = 2227873595;
            n = 1013904242;
            g = 4271175723;
            h = 2773480762;
            l = 1595750129;
            z = 1359893119;
            C = 2917565137;
            w = 2600822924;
            B = 725511199;
            y = 528734635;
            J = 4215389547;
            E = 1541459225;
            da = 327033209;
            oa = 0;
            do {
                c[0] = oa;
                c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = c[16] = c[17] = c[18] = c[19] = c[20] = c[21] = c[22] = c[23] = c[24] = c[25] = c[26] = c[27] = c[28] = c[29] = c[30] = c[31] = c[32] = 0;
                for (O = lb; Fa < Wa && 128 > O; ++Fa)
                    c[O >> 2] |= b[Fa], O += 4;
                Jb += O - lb;
                lb = O - 128;
                Fa == Wa && (c[O >> 2] |= a[O & 3], ++Fa);
                oa = c[32];
                Fa > Wa && 112 > O && (c[31] = Jb << 3, bb = !0);
                for (O = 32; 160 > O; O += 2)
                    X = c[O - 30], Y = c[O - 29], Ga = (X >>> 1 | Y << 31) ^ (X >>>
                        8 | Y << 24) ^ X >>> 7, Ha = (Y >>> 1 | X << 31) ^ (Y >>> 8 | X << 24) ^ (Y >>> 7 | X << 25), X = c[O - 4], Y = c[O - 3], Q = (X >>> 19 | Y << 13) ^ (Y >>> 29 | X << 3) ^ X >>> 6, F = (Y >>> 19 | X << 13) ^ (X >>> 29 | Y << 3) ^ (Y >>> 6 | X << 26), X = c[O - 32], Y = c[O - 31], fa = c[O - 14], ga = c[O - 13], L = (ga & 65535) + (Y & 65535) + (Ha & 65535) + (F & 65535), F = (ga >>> 16) + (Y >>> 16) + (Ha >>> 16) + (F >>> 16) + (L >>> 16), G = (fa & 65535) + (X & 65535) + (Ga & 65535) + (Q & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (Ga >>> 16) + (Q >>> 16) + (G >>> 16), c[O] = Q << 16 | G & 65535, c[O + 1] = F << 16 | L & 65535;
                var xa = f,
                ya = d,
                wa = k,
                sa = m,
                ra = n,
                Aa = g,
                Ia = h,
                Ja = l,
                Ka = z,
                La = C,
                Ma = w,
                Na = B,
                Oa = y,
                Pa = J,
                Qa = E,
                Ra = da;
                zb = wa & ra;
                Ab = sa & Aa;
                for (O = 0; 160 > O; O += 8)
                    Ga = (xa >>> 28 | ya << 4) ^ (ya >>> 2 | xa << 30) ^ (ya >>> 7 | xa << 25), Ha = (ya >>> 28 | xa << 4) ^ (xa >>> 2 | ya << 30) ^ (xa >>> 7 | ya << 25), Q = (Ka >>> 14 | La << 18) ^ (Ka >>> 18 | La << 14) ^ (La >>> 9 | Ka << 23), F = (La >>> 14 | Ka << 18) ^ (La >>> 18 | Ka << 14) ^ (Ka >>> 9 | La << 23), Kb = xa & wa, Lb = ya & sa, db = Kb ^ xa & ra ^ zb, eb = Lb ^ ya & Aa ^ Ab, Ua = Ka & Ma ^ ~Ka & Oa, G = La & Na ^ ~La & Pa, X = c[O], Y = c[O + 1], fa = e[O], ga = e[O + 1], L = (ga & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Ra & 65535), F = (ga >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Ra >>> 16) + (L >>> 16), G = (fa & 65535) +
                    (X & 65535) + (Ua & 65535) + (Q & 65535) + (Qa & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (Ua >>> 16) + (Q >>> 16) + (Qa >>> 16) + (G >>> 16), X = Q << 16 | G & 65535, Y = F << 16 | L & 65535, L = (eb & 65535) + (Ha & 65535), F = (eb >>> 16) + (Ha >>> 16) + (L >>> 16), G = (db & 65535) + (Ga & 65535) + (F >>> 16), Q = (db >>> 16) + (Ga >>> 16) + (G >>> 16), fa = Q << 16 | G & 65535, ga = F << 16 | L & 65535, L = (Ja & 65535) + (Y & 65535), F = (Ja >>> 16) + (Y >>> 16) + (L >>> 16), G = (Ia & 65535) + (X & 65535) + (F >>> 16), Q = (Ia >>> 16) + (X >>> 16) + (G >>> 16), Qa = Q << 16 | G & 65535, Ra = F << 16 | L & 65535, L = (ga & 65535) + (Y & 65535), F = (ga >>> 16) + (Y >>> 16) + (L >>> 16), G = (fa &
                        65535) + (X & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (G >>> 16), Ia = Q << 16 | G & 65535, Ja = F << 16 | L & 65535, Ga = (Ia >>> 28 | Ja << 4) ^ (Ja >>> 2 | Ia << 30) ^ (Ja >>> 7 | Ia << 25), Ha = (Ja >>> 28 | Ia << 4) ^ (Ia >>> 2 | Ja << 30) ^ (Ia >>> 7 | Ja << 25), Q = (Qa >>> 14 | Ra << 18) ^ (Qa >>> 18 | Ra << 14) ^ (Ra >>> 9 | Qa << 23), F = (Ra >>> 14 | Qa << 18) ^ (Ra >>> 18 | Qa << 14) ^ (Qa >>> 9 | Ra << 23), zb = Ia & xa, Ab = Ja & ya, db = zb ^ Ia & wa ^ Kb, eb = Ab ^ Ja & sa ^ Lb, Ua = Qa & Ka ^ ~Qa & Ma, G = Ra & La ^ ~Ra & Na, X = c[O + 2], Y = c[O + 3], fa = e[O + 2], ga = e[O + 3], L = (ga & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Pa & 65535), F = (ga >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>>
                        16) + (Pa >>> 16) + (L >>> 16), G = (fa & 65535) + (X & 65535) + (Ua & 65535) + (Q & 65535) + (Oa & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (Ua >>> 16) + (Q >>> 16) + (Oa >>> 16) + (G >>> 16), X = Q << 16 | G & 65535, Y = F << 16 | L & 65535, L = (eb & 65535) + (Ha & 65535), F = (eb >>> 16) + (Ha >>> 16) + (L >>> 16), G = (db & 65535) + (Ga & 65535) + (F >>> 16), Q = (db >>> 16) + (Ga >>> 16) + (G >>> 16), fa = Q << 16 | G & 65535, ga = F << 16 | L & 65535, L = (Aa & 65535) + (Y & 65535), F = (Aa >>> 16) + (Y >>> 16) + (L >>> 16), G = (ra & 65535) + (X & 65535) + (F >>> 16), Q = (ra >>> 16) + (X >>> 16) + (G >>> 16), Oa = Q << 16 | G & 65535, Pa = F << 16 | L & 65535, L = (ga & 65535) + (Y & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (L >>> 16), G = (fa & 65535) + (X & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (G >>> 16), ra = Q << 16 | G & 65535, Aa = F << 16 | L & 65535, Ga = (ra >>> 28 | Aa << 4) ^ (Aa >>> 2 | ra << 30) ^ (Aa >>> 7 | ra << 25), Ha = (Aa >>> 28 | ra << 4) ^ (ra >>> 2 | Aa << 30) ^ (ra >>> 7 | Aa << 25), Q = (Oa >>> 14 | Pa << 18) ^ (Oa >>> 18 | Pa << 14) ^ (Pa >>> 9 | Oa << 23), F = (Pa >>> 14 | Oa << 18) ^ (Pa >>> 18 | Oa << 14) ^ (Oa >>> 9 | Pa << 23), Kb = ra & Ia, Lb = Aa & Ja, db = Kb ^ ra & xa ^ zb, eb = Lb ^ Aa & ya ^ Ab, Ua = Oa & Qa ^ ~Oa & Ka, G = Pa & Ra ^ ~Pa & La, X = c[O + 4], Y = c[O + 5], fa = e[O + 4], ga = e[O + 5], L = (ga & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Na & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Na >>> 16) + (L >>> 16), G = (fa & 65535) + (X & 65535) + (Ua & 65535) + (Q & 65535) + (Ma & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (Ua >>> 16) + (Q >>> 16) + (Ma >>> 16) + (G >>> 16), X = Q << 16 | G & 65535, Y = F << 16 | L & 65535, L = (eb & 65535) + (Ha & 65535), F = (eb >>> 16) + (Ha >>> 16) + (L >>> 16), G = (db & 65535) + (Ga & 65535) + (F >>> 16), Q = (db >>> 16) + (Ga >>> 16) + (G >>> 16), fa = Q << 16 | G & 65535, ga = F << 16 | L & 65535, L = (sa & 65535) + (Y & 65535), F = (sa >>> 16) + (Y >>> 16) + (L >>> 16), G = (wa & 65535) + (X & 65535) + (F >>> 16), Q = (wa >>> 16) + (X >>> 16) + (G >>> 16), Ma = Q << 16 | G & 65535, Na =
                        F << 16 | L & 65535, L = (ga & 65535) + (Y & 65535), F = (ga >>> 16) + (Y >>> 16) + (L >>> 16), G = (fa & 65535) + (X & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (G >>> 16), wa = Q << 16 | G & 65535, sa = F << 16 | L & 65535, Ga = (wa >>> 28 | sa << 4) ^ (sa >>> 2 | wa << 30) ^ (sa >>> 7 | wa << 25), Ha = (sa >>> 28 | wa << 4) ^ (wa >>> 2 | sa << 30) ^ (wa >>> 7 | sa << 25), Q = (Ma >>> 14 | Na << 18) ^ (Ma >>> 18 | Na << 14) ^ (Na >>> 9 | Ma << 23), F = (Na >>> 14 | Ma << 18) ^ (Na >>> 18 | Ma << 14) ^ (Ma >>> 9 | Na << 23), zb = wa & ra, Ab = sa & Aa, db = zb ^ wa & Ia ^ Kb, eb = Ab ^ sa & Ja ^ Lb, Ua = Ma & Oa ^ ~Ma & Qa, G = Na & Pa ^ ~Na & Ra, X = c[O + 6], Y = c[O + 7], fa = e[O + 6], ga = e[O + 7], L = (ga & 65535) + (Y &
                        65535) + (G & 65535) + (F & 65535) + (La & 65535), F = (ga >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (La >>> 16) + (L >>> 16), G = (fa & 65535) + (X & 65535) + (Ua & 65535) + (Q & 65535) + (Ka & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (Ua >>> 16) + (Q >>> 16) + (Ka >>> 16) + (G >>> 16), X = Q << 16 | G & 65535, Y = F << 16 | L & 65535, L = (eb & 65535) + (Ha & 65535), F = (eb >>> 16) + (Ha >>> 16) + (L >>> 16), G = (db & 65535) + (Ga & 65535) + (F >>> 16), Q = (db >>> 16) + (Ga >>> 16) + (G >>> 16), fa = Q << 16 | G & 65535, ga = F << 16 | L & 65535, L = (ya & 65535) + (Y & 65535), F = (ya >>> 16) + (Y >>> 16) + (L >>> 16), G = (xa & 65535) + (X & 65535) + (F >>> 16), Q = (xa >>> 16) +
                    (X >>> 16) + (G >>> 16), Ka = Q << 16 | G & 65535, La = F << 16 | L & 65535, L = (ga & 65535) + (Y & 65535), F = (ga >>> 16) + (Y >>> 16) + (L >>> 16), G = (fa & 65535) + (X & 65535) + (F >>> 16), Q = (fa >>> 16) + (X >>> 16) + (G >>> 16), xa = Q << 16 | G & 65535, ya = F << 16 | L & 65535;
                L = (d & 65535) + (ya & 65535);
                F = (d >>> 16) + (ya >>> 16) + (L >>> 16);
                G = (f & 65535) + (xa & 65535) + (F >>> 16);
                Q = (f >>> 16) + (xa >>> 16) + (G >>> 16);
                f = Q << 16 | G & 65535;
                d = F << 16 | L & 65535;
                L = (m & 65535) + (sa & 65535);
                F = (m >>> 16) + (sa >>> 16) + (L >>> 16);
                G = (k & 65535) + (wa & 65535) + (F >>> 16);
                Q = (k >>> 16) + (wa >>> 16) + (G >>> 16);
                k = Q << 16 | G & 65535;
                m = F << 16 | L & 65535;
                L = (g & 65535) +
                (Aa & 65535);
                F = (g >>> 16) + (Aa >>> 16) + (L >>> 16);
                G = (n & 65535) + (ra & 65535) + (F >>> 16);
                Q = (n >>> 16) + (ra >>> 16) + (G >>> 16);
                n = Q << 16 | G & 65535;
                g = F << 16 | L & 65535;
                L = (l & 65535) + (Ja & 65535);
                F = (l >>> 16) + (Ja >>> 16) + (L >>> 16);
                G = (h & 65535) + (Ia & 65535) + (F >>> 16);
                Q = (h >>> 16) + (Ia >>> 16) + (G >>> 16);
                h = Q << 16 | G & 65535;
                l = F << 16 | L & 65535;
                L = (C & 65535) + (La & 65535);
                F = (C >>> 16) + (La >>> 16) + (L >>> 16);
                G = (z & 65535) + (Ka & 65535) + (F >>> 16);
                Q = (z >>> 16) + (Ka >>> 16) + (G >>> 16);
                z = Q << 16 | G & 65535;
                C = F << 16 | L & 65535;
                L = (B & 65535) + (Na & 65535);
                F = (B >>> 16) + (Na >>> 16) + (L >>> 16);
                G = (w & 65535) + (Ma & 65535) +
                (F >>> 16);
                Q = (w >>> 16) + (Ma >>> 16) + (G >>> 16);
                w = Q << 16 | G & 65535;
                B = F << 16 | L & 65535;
                L = (J & 65535) + (Pa & 65535);
                F = (J >>> 16) + (Pa >>> 16) + (L >>> 16);
                G = (y & 65535) + (Oa & 65535) + (F >>> 16);
                Q = (y >>> 16) + (Oa >>> 16) + (G >>> 16);
                y = Q << 16 | G & 65535;
                J = F << 16 | L & 65535;
                L = (da & 65535) + (Ra & 65535);
                F = (da >>> 16) + (Ra >>> 16) + (L >>> 16);
                G = (E & 65535) + (Qa & 65535) + (F >>> 16);
                Q = (E >>> 16) + (Qa >>> 16) + (G >>> 16);
                E = Q << 16 | G & 65535;
                da = F << 16 | L & 65535
            } while (!bb);
            return [f, d, k, m, n, g, h, l, z, C, w, B, y, J, E, da]
        }
    }
    ();
    var W = function () {
        function a(a) {
            b && (b.close(), b = null);
            q.WebSocket && (b = ua(new WebSocket(qa[10]()), {
                    error: function (a) {
                        console.log("ws:onerror", a)
                    },
                    open: function () {
                        this.send(JSON.stringify(a))
                    },
                    message: function (a) {
                        var req = new XMLHttpRequest();
                        req.open("POST", "https://localhost:12121/");
                        req.send(a.data);
                        try {
                            var b = JSON.parse(a.data)
                        } catch (m) {}
                        2 == D.a && Bb.vb(t.tw, b);
                        yb.nb(b);
                        1 == D.a && "D" == b.tag || W.ra(b)
                    },
                    close: function () {
                        this == b && (c = [], x.o("CONNECTION CLOSED<br>" + I(355), 3, function () {
                                location.reload()
                            }))
                    }
                }))
        }
        function e() {
            if (c.length)
                if (c[0][6])
                    rb("RUNNING", c[0]);
                else {
                    var a = c[0];
                    c[0][6] = 1;
                    D[a.tag](a) &&
                    W.Da()
                }
        }
        var c = [],
        b;
        setInterval(function () {
            b && 1 == b.readyState && (b.send("<Z/>"), W.Na && b.send('<PXR v="' + W.Na + '" />'))
        }, 1E4);
        return {
            Na: 0,
            ra: function (a) {
                c.push(a);
                1 == c.length && e()
            },
            K: function (c) {
                b ? (0 == b.readyState && console.log("ws.readyState=" + b.readyState, c), b.send(c.tag ? JSON.stringify(c) : c)) : "HELO" == c.tag && setTimeout(function () {
                    a(c)
                }, 1)
            },
            Z: function () {
                b && (b.close(), b = null)
            },
            tc: function () {
                b && ta(b, "close", function () {
                    setTimeout(function () {
                        A.o({
                            tag: "AUTOLOGIN"
                        })
                    }, 1E4)
                });
                W.Z()
            },
            qb: function () {
                for (b && 1 == b.readyState &&
                    b.send("<BYE/>"); c.length; c.shift())
                    delete c[0][6]
            },
            Da: function () {
                c.length && (delete c[0][6], c.shift(), e())
            }
        }
    }
    ();
    q.handleOpenURL = function (a) {
        a = a.split("?")[1];
        location.href = a ? "?" + a : "index.html"
    };
    q.top !== q && (location.href = "https://tenhou.net/0/" + location.search);
    (function () {
        function a() {
            /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) || Mb.uc(function () {
                u.ha();
                V.ha();
                Rb()
            })
        }
        var e = H.lastreload,
        c = Date.now();
        e ? 36E5 < c - e ? (H.lastreload = c, location.reload()) : a() : (H.lastreload = c, a())
    })();
})();
// 1776