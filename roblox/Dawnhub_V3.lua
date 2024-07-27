([[This file was protected with MoonSec V3]]):gsub(
    ".+",
    (function(a)
        _FAPxyZvEVpKg = a
    end)
)
return (function(u, ...)
    local s
    local o
    local t
    local r
    local d
    local a
    local e = 24915
    local n = 0
    local l = {}
    while n < 887 do
        n = n + 1
        while n < 0x1af and e % 0x98a < 0x4c5 do
            n = n + 1
            e = (e * 746) % 46059
            local f = n + e
            if (e % 0x3010) < 0x1808 then
                e = (e * 0x37b) % 0x3c5d
                while n < 0x260 and e % 0x30ae < 0x1857 do
                    n = n + 1
                    e = (e - 534) % 7953
                    local d = n + e
                    if (e % 0x3b6e) > 0x1db7 then
                        e = (e + 0x4e) % 0xb03e
                        local e = 77968
                        if not l[e] then
                            l[e] = 0x1
                            s = tonumber
                        end
                    elseif e % 2 ~= 0 then
                        e = (e * 0x15c) % 0xcd9
                        local e = 45842
                        if not l[e] then
                            l[e] = 0x1
                            t = getfenv and getfenv()
                        end
                    else
                        e = (e - 0xf8) % 0xb7eb
                        n = n + 1
                        local e = 66387
                        if not l[e] then
                            l[e] = 0x1
                            t = (not t) and _ENV or t
                        end
                    end
                end
            elseif e % 2 ~= 0 then
                e = (e + 0x33f) % 0xade2
                while n < 0x134 and e % 0x164a < 0xb25 do
                    n = n + 1
                    e = (e + 725) % 3053
                    local a = n + e
                    if (e % 0x3522) > 0x1a91 then
                        e = (e * 0x275) % 0x5f4f
                        local e = 81175
                        if not l[e] then
                            l[e] = 0x1
                        end
                    elseif e % 2 ~= 0 then
                        e = (e + 0x3e9) % 0x1504
                        local e = 23593
                        if not l[e] then
                            l[e] = 0x1
                        end
                    else
                        e = (e * 0x386) % 0x3c00
                        n = n + 1
                        local e = 33718
                        if not l[e] then
                            l[e] = 0x1
                            d = function(l)
                                local e = 0x01
                                local function n(n)
                                    e = e + n
                                    return l:sub(e - n, e - 0x01)
                                end
                                while true do
                                    local l = n(0x01)
                                    if (l == "\5") then
                                        break
                                    end
                                    local e = o.byte(n(0x01))
                                    local e = n(e)
                                    if l == "\2" then
                                        e = r.vRMyIqam(e)
                                    elseif l == "\3" then
                                        e = e ~= "\0"
                                    elseif l == "\6" then
                                        t[e] = function(e, n)
                                            return u(8, nil, u, n, e)
                                        end
                                    elseif l == "\4" then
                                        e = t[e]
                                    elseif l == "\0" then
                                        e = t[e][n(o.byte(n(0x01)))]
                                    end
                                    local n = n(0x08)
                                    r[n] = e
                                end
                            end
                        end
                    end
                end
            else
                e = (e - 0x2c0) % 0x1ccd
                n = n + 1
                while n < 0x124 and e % 0x37c4 < 0x1be2 do
                    n = n + 1
                    e = (e * 319) % 30106
                    local t = n + e
                    if (e % 0x3e52) >= 0x1f29 then
                        e = (e * 0x20d) % 0x1149
                        local e = 59335
                        if not l[e] then
                            l[e] = 0x1
                            r = {}
                        end
                    elseif e % 2 ~= 0 then
                        e = (e + 0x325) % 0x59f0
                        local e = 64614
                        if not l[e] then
                            l[e] = 0x1
                            a =
                                "\4\8\116\111\110\117\109\98\101\114\118\82\77\121\73\113\97\109\0\6\115\116\114\105\110\103\4\99\104\97\114\117\88\107\69\121\112\69\73\0\6\115\116\114\105\110\103\3\115\117\98\119\117\90\84\88\114\118\120\0\6\115\116\114\105\110\103\4\98\121\116\101\122\102\117\115\84\72\114\108\0\5\116\97\98\108\101\6\99\111\110\99\97\116\84\120\82\103\83\89\118\118\0\5\116\97\98\108\101\6\105\110\115\101\114\116\85\106\89\108\108\95\97\103\5"
                        end
                    else
                        e = (e + 0xa) % 0x81b3
                        n = n + 1
                        local e = 13075
                        if not l[e] then
                            l[e] = 0x1
                            o = string
                        end
                    end
                end
            end
        end
        e = (e + 364) % 16285
    end
    d(a)
    local n = {}
    for e = 0x0, 0xff do
        local l = r.uXkEypEI(e)
        n[e] = l
        n[l] = e
    end
    local function c(e)
        return n[e]
    end
    local f = (function(f, d)
        local a, l = 0x01, 0x10
        local n = {{}, {}, {}}
        local t = -0x01
        local e = 0x01
        local o = f
        while true do
            n[0x03][
                    r.wuZTXrvx(
                        d,
                        e,
                        (function()
                            e = a + e
                            return e - 0x01
                        end)()
                    )
                ] = (function()
                t = t + 0x01
                return t
            end)()
            if t == (0x0f) then
                t = ""
                l = 0x000
                break
            end
        end
        local t = #d
        while e < t + 0x01 do
            n[0x02][l] =
                r.wuZTXrvx(
                d,
                e,
                (function()
                    e = a + e
                    return e - 0x01
                end)()
            )
            l = l + 0x01
            if l % 0x02 == 0x00 then
                l = 0x00
                r.UjYll_ag(
                    n[0x01],
                    (c((((n[0x03][n[0x02][0x00]] or 0x00) * 0x10) + (n[0x03][n[0x02][0x01]] or 0x00) + o) % 0x100))
                )
                o = f + o
            end
        end
        return r.TxRgSYvv(n[0x01])
    end)
    d(f(131, "jR*hE ucdO-UxH.fd*"))
    d(
        f(
            76,
            "gCv>SbWDL2J_K;hV_SWhLVSSVWJCbJ7DbLWK>C;;2SvhVDJSWWCLJDLD>DDK>Cb5VDJ2WLCK_Lb;C_KWJ;>_hC_blb_;;K2v>;VW_#S2C^;vLSz;_2LhvK2GSJW_vq;vD;>Wh>>bbCV2KxW>CK;KW8CKhJL_WihvKKQLK1;;LbSKVSSbW,XKKCLL>S_22WvvV;_hbWv>JKCK;LV>22bK!2_bDLC2h}LC>WVSJC>_C0Jhbh>C;W2vbN2SSKWKC_;>LL>Jhb2hS_hS2KWLCL;VLSvD;b>LVCCS_bWJvL;bvJS;VJ_:bbo_KDDDvL_2DL>Dh2JvSW_SWJL;>JVU2bS_UDKDS24K;_LLSLVW_vVSJ2KLDhv2hv2Kv^;__vS2V2JVW2>LLz>WbDV;_LWbCD;KWvSJV_JCSVhS_hDD_KDS2C>2#mJLV2/hKLDV>>hJ2h>2V_LKDCvLKLDD;C"
        )
    )
    local e =
        (-5039 +
        (function()
            local o, t = 0, 1
            (function(n, e, l, t)
                e(l(n, n, e, t and n), t(e, l, t and t, e), l(l, e, n, e) and t(e, e, t, n), l(l, n and n, n, l))
            end)(
                function(l, d, e, n)
                    if o > 274 then
                        return e
                    end
                    o = o + 1
                    t = (t * 230) % 12909
                    if (t % 1612) < 806 then
                        return e
                    else
                        return n(n(n, d and n, l, n), l(n, n, d and e, n and e), d(l, e, e, e), l(n, d, d, e))
                    end
                    return n(e(d, n and d, l, l and l), n(l, n, e, e), e(l, d, l and l, d), n(e, d, l, e))
                end,
                function(d, e, n, l)
                    if o > 284 then
                        return l
                    end
                    o = o + 1
                    t = (t + 501) % 17347
                    if (t % 1660) <= 830 then
                        return n
                    else
                        return e(
                            n(e, d, l and d, d),
                            d(n, l, e, e),
                            e(d, l and e, e and e, l and d),
                            n(n and d, e, l, n)
                        )
                    end
                    return d(
                        n(n, l, e, l) and d(n, e and d, n and n, e),
                        n(e, e, n and l, l and l),
                        e(l, l, n and l, e),
                        n(d and l, d, d, l and e) and e(e, n, n, d)
                    )
                end,
                function(l, e, d, n)
                    if o > 474 then
                        return l
                    end
                    o = o + 1
                    t = (t * 245) % 22398
                    if (t % 876) <= 438 then
                        t = (t + 488) % 47975
                        return d
                    else
                        return n(n(e, d, n, n), l(d, e, d, d), e(n, l, l, n), e(l and l, d and e, l and d, d and n))
                    end
                    return d(
                        l(n, e and l, d, e),
                        n(n, d and n, l, d),
                        e(e and e, n, e, e),
                        l(e, e, e, e) and d(l, l, n, n)
                    )
                end,
                function(d, n, l, e)
                    if o > 153 then
                        return l
                    end
                    o = o + 1
                    t = (t - 28) % 16079
                    if (t % 1228) < 614 then
                        return e(l(n, e, d, l), e(n, d, n and n, d), n(l, d and n, e, e), e(e, n, n, e))
                    else
                        return e
                    end
                    return e
                end
            )
            return t
        end)())
    local ee = (getfenv) or (function()
            return _ENV
        end)
    local h = r.wETohtnv or r.gdALWUZJ
    local j = 1
    local a = 4
    local t = 2
    local d = 3
    local function y(b, ...)
        local f =
            f(
            e,
            "&mU6T(>Qr_etC1oK^TKeKQKTKUFQotoro(UKToTtTQU_6r66UCm16t6>UeUCUUUtK1mtm6m*fomToTmTmm/C_r1Q_mrortKxK_K>oKoKt6e(eUoUCoom_(CtCe1UC6C1tQCQCUtmtte_tUeotm_Ke(er(K_m_e_((T>K_U_mrQQtQtr(>K6_((Q6>K>6Ue>((>(t(1mt(mTQT>TtT_T_T8T>T,6QK_6T6eU6C3C6t_t>t6KrUmmomQoti>mU_CeU_(_UrKKrKroQoQK6KmoCo.oU1r>K_U>r>(>Ut6CTCUC_Q6t>t>t>eC>Ttr_Keo(re(eT_oe}ror__Qr(rm6eroQ1r(Q>Ut((QTQm>1TK(o(_m6T>UgototoTom1oTU6_TU6Q1R1_C_C>C6mKu6KtkQUCUeIrUmo1KtmUoeE6___>_6_0r1__rQrTrmQor1QrQ(QUQy>C>_>>Q(Qm(1(e(Q(((mToTt(e(UTU6K6CT+6>666l(66>UQUTUmUTmtm_m(mQXKmbm{E>a6<}H6KeKrKTK(K(otoro(o_1K111_1>oU1?C1CeCrCTCmtoC1Cmt(tUeKtie_e>e6tUet_e_r_T_Qrortrre(r>QKQ1Q_QQQ6Q6>1QCQK>T>T(o(1(r(((UTKT1T_TQT6T6616e6Q6T6oUoUtUrU(UUUmmCm_mrm6m541;txQ2(*mKo8UKrK(KUK;oCo_o>"
        )
        local n = 0
        r.TEOFySEe(
            function()
                n = n + 1
            end
        )
        local function e(l, e)
            if e then
                return n
            end
            n = l + n
        end
        local l, n, c = u(0, u, e, f, r.zfusTHrl)
        local function o()
            local l, n = r.zfusTHrl(f, e(1, 3), e(5, 6) + 2)
            e(2)
            return (n * 256) + l
        end
        local _ = true
        local _ = 0
        local function k()
            local e = n()
            local n = n()
            local d = 1
            local t = (l(n, 1, 20) * (2 ^ 32)) + e
            local e = l(n, 21, 31)
            local n = ((-1) ^ l(n, 32))
            if (e == 0) then
                if (t == _) then
                    return n * 0
                else
                    e = 1
                    d = 0
                end
            elseif (e == 2047) then
                return (t == 0) and (n * (1 / 0)) or (n * (0 / 0))
            end
            return r.AjBivZsH(n, e - 1023) * (d + (t / (2 ^ 52)))
        end
        local m = n
        local function y(n)
            local l
            if (not n) then
                n = m()
                if (n == 0) then
                    return ""
                end
            end
            l = r.wuZTXrvx(f, e(1, 3), e(5, 6) + n - 1)
            e(n)
            local e = ""
            for n = (1 + _), #l do
                e = e .. r.wuZTXrvx(l, n, n)
            end
            return e
        end
        local _ = #r.LPhdwhWQ(s("\49.\48")) ~= 1
        local e = n
        local function g(...)
            return {...}, r.FzwicDjo("#", ...)
        end
        local function p()
            local u = {}
            local h = {}
            local e = {}
            local s = {h, u, nil, e}
            local e = n()
            local f = {}
            for t = 1, e do
                local l = c()
                local n
                if (l == 0) then
                    n = (c() ~= #{})
                elseif (l == 2) then
                    local e = k()
                    if _ and r.tDLfStBx(r.LPhdwhWQ(e), ".(\48+)$") then
                        e = r.rYgDuxd_(e)
                    end
                    n = e
                elseif (l == 1) then
                    n = y()
                end
                f[t] = n
            end
            s[3] = c()
            for e = 1, n() do
                u[e - (#{1})] = p()
            end
            for u = 1, n() do
                local e = c()
                if (l(e, 1, 1) == 0) then
                    local r = l(e, 2, 3)
                    local c = l(e, 4, 6)
                    local e = {o(), o(), nil, nil}
                    if (r == 0) then
                        e[d] = o()
                        e[a] = o()
                    elseif (r == #{1}) then
                        e[d] = n()
                    elseif (r == b[2]) then
                        e[d] = n() - (2 ^ 16)
                    elseif (r == b[3]) then
                        e[d] = n() - (2 ^ 16)
                        e[a] = o()
                    end
                    if (l(c, 1, 1) == 1) then
                        e[t] = f[e[t]]
                    end
                    if (l(c, 2, 2) == 1) then
                        e[d] = f[e[d]]
                    end
                    if (l(c, 3, 3) == 1) then
                        e[a] = f[e[a]]
                    end
                    h[u] = e
                end
            end
            return s
        end
        local function z(l, e, n)
            local t = e
            local t = n
            return s(r.tDLfStBx(r.tDLfStBx(({r.TEOFySEe(l)})[2], e), n))
        end
        local function ne(b, e, s)
            local function z(...)
                local c, ee, o, y, _, l, f, p, k, m, z, n
                local e = 0
                while -1 < e do
                    if e < 3 then
                        if 0 < e then
                            if e >= -2 then
                                for n = 44, 65 do
                                    if e ~= 2 then
                                        o = u(6, 38, 3, 79, b)
                                        _ = g
                                        y = 0
                                        break
                                    end
                                    l = -41
                                    f = -1
                                    break
                                end
                            else
                                o = u(6, 38, 3, 79, b)
                                _ = g
                                y = 0
                            end
                        else
                            c = u(6, 80, 1, 27, b)
                            ee = u(6, 4, 2, 13, b)
                        end
                    else
                        if e > 4 then
                            if 5 < e then
                                e = -2
                            else
                                n = u(7)
                            end
                        else
                            if 3 < e then
                                m = r.FzwicDjo("#", ...) - 1
                                z = {}
                            else
                                p = {}
                                k = {...}
                            end
                        end
                    end
                    e = e + 1
                end
                for e = 0, m do
                    if (e >= o) then
                        p[e - o] = k[e + 1]
                    else
                        n[e] = k[e + 1]
                    end
                end
                local e = m - o + 1
                local e
                local o
                local function r(...)
                    while true do
                    end
                end
                while true do
                    if l < -40 then
                        l = l + 42
                    end
                    e = c[l]
                    o = e[j]
                    if o >= 12 then
                        if o < 18 then
                            if o <= 14 then
                                if 12 < o then
                                    if o > 12 then
                                        for r = 45, 52 do
                                            if o ~= 13 then
                                                local o, u, b, m, r
                                                n[e[t]] = s[e[d]]
                                                l = l + 1
                                                e = c[l]
                                                o = e[t]
                                                u = n[e[d]]
                                                n[o + 1] = u
                                                n[o] = u[e[a]]
                                                l = l + 1
                                                e = c[l]
                                                n(e[t], e[d])
                                                l = l + 1
                                                e = c[l]
                                                o = e[t]
                                                b, m = _(n[o](h(n, o + 1, e[d])))
                                                f = m + o - 1
                                                r = 0
                                                for e = o, f do
                                                    r = r + 1
                                                    n[e] = b[r]
                                                end
                                                l = l + 1
                                                e = c[l]
                                                o = e[t]
                                                n[o] = n[o](h(n, o + 1, f))
                                                l = l + 1
                                                e = c[l]
                                                n[e[t]]()
                                                l = l + 1
                                                e = c[l]
                                                do
                                                    return
                                                end
                                                break
                                            end
                                            s[e[d]] = n[e[t]]
                                            break
                                        end
                                    else
                                        s[e[d]] = n[e[t]]
                                    end
                                else
                                    local e = e[t]
                                    n[e] = n[e](h(n, e + 1, f))
                                end
                            else
                                if 16 > o then
                                    do
                                        return
                                    end
                                else
                                    if o >= 14 then
                                        repeat
                                            if 17 ~= o then
                                                if (n[e[t]] == e[a]) then
                                                    l = l + 1
                                                else
                                                    l = e[d]
                                                end
                                                break
                                            end
                                            local l = e[t]
                                            local t = n[e[d]]
                                            n[l + 1] = t
                                            n[l] = t[e[a]]
                                        until true
                                    else
                                        local l = e[t]
                                        local t = n[e[d]]
                                        n[l + 1] = t
                                        n[l] = t[e[a]]
                                    end
                                end
                            end
                        else
                            if o < 21 then
                                if 18 < o then
                                    if o >= 15 then
                                        for r = 39, 65 do
                                            if 19 ~= o then
                                                n[e[t]]()
                                                break
                                            end
                                            l = e[d]
                                            break
                                        end
                                    else
                                        l = e[d]
                                    end
                                else
                                    for o = 0, 3 do
                                        if 1 < o then
                                            if o > -1 then
                                                repeat
                                                    if 2 < o then
                                                        if (n[e[t]] == e[a]) then
                                                            l = l + 1
                                                        else
                                                            l = e[d]
                                                        end
                                                        break
                                                    end
                                                    n[e[t]] = s[e[d]]
                                                    l = l + 1
                                                    e = c[l]
                                                until true
                                            else
                                                if (n[e[t]] == e[a]) then
                                                    l = l + 1
                                                else
                                                    l = e[d]
                                                end
                                            end
                                        else
                                            if -1 < o then
                                                for r = 40, 82 do
                                                    if o > 0 then
                                                        s[e[d]] = n[e[t]]
                                                        l = l + 1
                                                        e = c[l]
                                                        break
                                                    end
                                                    n[e[t]] = (e[d] ~= 0)
                                                    l = l + 1
                                                    e = c[l]
                                                    break
                                                end
                                            else
                                                n[e[t]] = (e[d] ~= 0)
                                                l = l + 1
                                                e = c[l]
                                            end
                                        end
                                    end
                                end
                            else
                                if o >= 22 then
                                    if 20 ~= o then
                                        for l = 34, 68 do
                                            if o > 22 then
                                                local l = e[t]
                                                local t, e = _(n[l](h(n, l + 1, e[d])))
                                                f = e + l - 1
                                                local e = 0
                                                for l = l, f do
                                                    e = e + 1
                                                    n[l] = t[e]
                                                end
                                                break
                                            end
                                            n(e[t], e[d])
                                            break
                                        end
                                    else
                                        local l = e[t]
                                        local t, e = _(n[l](h(n, l + 1, e[d])))
                                        f = e + l - 1
                                        local e = 0
                                        for l = l, f do
                                            e = e + 1
                                            n[l] = t[e]
                                        end
                                    end
                                else
                                    local e = e[t]
                                    n[e] = n[e](h(n, e + 1, f))
                                end
                            end
                        end
                    else
                        if 6 > o then
                            if 2 < o then
                                if 4 <= o then
                                    if o ~= 0 then
                                        for l = 21, 92 do
                                            if o > 4 then
                                                s[e[d]] = n[e[t]]
                                                break
                                            end
                                            do
                                                return
                                            end
                                            break
                                        end
                                    else
                                        do
                                            return
                                        end
                                    end
                                else
                                    n[e[t]] = s[e[d]]
                                end
                            else
                                if o < 1 then
                                    local l = e[t]
                                    local t = n[e[d]]
                                    n[l + 1] = t
                                    n[l] = t[e[a]]
                                else
                                    if o >= -2 then
                                        for l = 40, 97 do
                                            if o ~= 1 then
                                                n[e[t]] = (e[d] ~= 0)
                                                break
                                            end
                                            local r, o, c, f, a
                                            local l = 0
                                            while l > -1 do
                                                if 2 >= l then
                                                    if 0 < l then
                                                        if l ~= 0 then
                                                            repeat
                                                                if l ~= 1 then
                                                                    c = d
                                                                    break
                                                                end
                                                                o = t
                                                            until true
                                                        else
                                                            o = t
                                                        end
                                                    else
                                                        r = e
                                                    end
                                                else
                                                    if l >= 5 then
                                                        if l ~= 1 then
                                                            for e = 45, 81 do
                                                                if l ~= 5 then
                                                                    l = -2
                                                                    break
                                                                end
                                                                n(a, f)
                                                                break
                                                            end
                                                        else
                                                            n(a, f)
                                                        end
                                                    else
                                                        if 4 ~= l then
                                                            f = r[c]
                                                        else
                                                            a = r[o]
                                                        end
                                                    end
                                                end
                                                l = l + 1
                                            end
                                            break
                                        end
                                    else
                                        local o, f, c, r, a
                                        local l = 0
                                        while l > -1 do
                                            if 2 >= l then
                                                if 0 < l then
                                                    if l ~= 0 then
                                                        repeat
                                                            if l ~= 1 then
                                                                c = d
                                                                break
                                                            end
                                                            f = t
                                                        until true
                                                    else
                                                        f = t
                                                    end
                                                else
                                                    o = e
                                                end
                                            else
                                                if l >= 5 then
                                                    if l ~= 1 then
                                                        for e = 45, 81 do
                                                            if l ~= 5 then
                                                                l = -2
                                                                break
                                                            end
                                                            n(a, r)
                                                            break
                                                        end
                                                    else
                                                        n(a, r)
                                                    end
                                                else
                                                    if 4 ~= l then
                                                        r = o[c]
                                                    else
                                                        a = o[f]
                                                    end
                                                end
                                            end
                                            l = l + 1
                                        end
                                    end
                                end
                            end
                        else
                            if o > 8 then
                                if 10 <= o then
                                    if 11 == o then
                                        if (n[e[t]] == e[a]) then
                                            l = l + 1
                                        else
                                            l = e[d]
                                        end
                                    else
                                        local l = e[t]
                                        local t, e = _(n[l](h(n, l + 1, e[d])))
                                        f = e + l - 1
                                        local e = 0
                                        for l = l, f do
                                            e = e + 1
                                            n[l] = t[e]
                                        end
                                    end
                                else
                                    n[e[t]] = s[e[d]]
                                end
                            else
                                if o <= 6 then
                                    n[e[t]]()
                                else
                                    if 7 < o then
                                        n[e[t]] = (e[d] ~= 0)
                                    else
                                        l = e[d]
                                    end
                                end
                            end
                        end
                    end
                    l = 1 + l
                end
            end
            return z
        end
        local t = 0xff
        local f = {}
        local o = (1)
        local d = ""
        (function(n)
            local l = n
            local r = 0x00
            local e = 0x00
            l = {
                (function(t)
                    if r > 0x26 then
                        return t
                    end
                    r = r + 1
                    e = (e + 0x9fd - t) % 0x15
                    return (e % 0x03 == 0x0 and (function(l)
                            if not n[l] then
                                e = e + 0x01
                                n[l] = (0xe1)
                            end
                            return true
                        end) "VRmJr" and l[0x2](0x162 + t)) or (e % 0x03 == 0x1 and (function(l)
                                if not n[l] then
                                    e = e + 0x01
                                    n[l] = (0x46)
                                end
                                return true
                            end) "iJujw" and l[0x3](t + 0x374)) or (e % 0x03 == 0x2 and (function(l)
                                if not n[l] then
                                    e = e + 0x01
                                    n[l] = (0x3b)
                                end
                                return true
                            end) "abiCS" and l[0x1](t + 0x78)) or t
                end),
                (function(a)
                    if r > 0x1e then
                        return a
                    end
                    r = r + 1
                    e = (e + 0x12ab - a) % 0x41
                    return (e % 0x03 == 0x2 and (function(l)
                            if not n[l] then
                                e = e + 0x01
                                n[l] = (0xc2)
                                d = "\37"
                                t = {function()
                                        t()
                                    end}
                                d = d .. "\100\43"
                            end
                            return true
                        end) "FfyGX" and l[0x3](0x192 + a)) or (e % 0x03 == 0x1 and (function(l)
                                if not n[l] then
                                    e = e + 0x01
                                    n[l] = (0x8d)
                                    f[o] = ee()
                                    o = o + t
                                end
                                return true
                            end) "OtGUP" and l[0x1](a + 0x26f)) or
                        (e % 0x03 == 0x0 and
                            (function(l)
                                if not n[l] then
                                    e = e + 0x01
                                    n[l] = (0x45)
                                    t[2] =
                                        (t[2] *
                                        (z(
                                            function()
                                                f()
                                            end,
                                            h(d)
                                        ) -
                                            z(t[1], h(d)))) +
                                        1
                                    f[o] = {}
                                    t = t[2]
                                    o = o + t
                                end
                                return true
                            end) "XAtxc" and
                            l[0x2](a + 0x95)) or
                        a
                end),
                (function(a)
                    if r > 0x2b then
                        return a
                    end
                    r = r + 1
                    e = (e + 0x90d - a) % 0x18
                    return (e % 0x03 == 0x0 and (function(l)
                            if not n[l] then
                                e = e + 0x01
                                n[l] = (0x74)
                            end
                            return true
                        end) "YGBfD" and l[0x1](0xdb + a)) or (e % 0x03 == 0x2 and (function(l)
                                if not n[l] then
                                    e = e + 0x01
                                    n[l] = (0x97)
                                    d = {d .. "\58 a", d}
                                    f[o] = p()
                                    o = o + (1)
                                    d[1] = "\58" .. d[1]
                                    t[2] = 0xff
                                end
                                return true
                            end) "bbtTl" and l[0x2](a + 0x127)) or (e % 0x03 == 0x1 and (function(l)
                                if not n[l] then
                                    e = e + 0x01
                                    n[l] = (0x83)
                                end
                                return true
                            end) "ginQH" and l[0x3](a + 0x1be)) or a
                end)
            }
            l[0x2](0xb5a)
        end) {}
        local e = ne(h(f))
        return e(...)
    end
    return y(
        (function()
            local n = {}
            local e = 0x01
            local l
            if r.VkdrpKws then
                l = r.VkdrpKws(y)
            else
                l = ""
            end
            if r.tDLfStBx(l, r.YlzxMEfP) then
                e = e + 0
            else
                e = e + 1
            end
            n[e] = 0x02
            n[n[e] + 0x01] = 0x03
            return n
        end)(),
        ...
    )
end)(
    (function(n, e, l, d, t, o)
        local o
        if 3 >= n then
            if 2 > n then
                if -4 ~= n then
                    for o = 36, 70 do
                        if n ~= 0 then
                            do
                                return function(n, e, l)
                                    if l then
                                        local e = (n / 2 ^ (e - 1)) % 2 ^ ((l - 1) - (e - 1) + 1)
                                        return e - e % 1
                                    else
                                        local e = 2 ^ (e - 1)
                                        return (n % (e + e) >= e) and 1 or 0
                                    end
                                end
                            end
                            break
                        end
                        do
                            return e(1), e(4, t, d, l, e), e(5, t, d, l)
                        end
                        break
                    end
                else
                    do
                        return function(n, e, l)
                            if l then
                                local e = (n / 2 ^ (e - 1)) % 2 ^ ((l - 1) - (e - 1) + 1)
                                return e - e % 1
                            else
                                local e = 2 ^ (e - 1)
                                return (n % (e + e) >= e) and 1 or 0
                            end
                        end
                    end
                end
            else
                if -1 ~= n then
                    repeat
                        if n ~= 2 then
                            do
                                return e(1), e(4, t, d, l, e), e(5, t, d, l)
                            end
                            break
                        end
                        do
                            return 16777216, 65536, 256
                        end
                    until true
                else
                    do
                        return e(1), e(4, t, d, l, e), e(5, t, d, l)
                    end
                end
            end
        else
            if 5 < n then
                if n >= 7 then
                    if n == 8 then
                        do
                            return l(n, nil, l)
                        end
                    else
                        do
                            return setmetatable(
                                {},
                                {["__\99\97\108\108"] = function(e, d, t, l, n)
                                        if n then
                                            return e[n]
                                        elseif l then
                                            return e
                                        else
                                            e[d] = t
                                        end
                                    end}
                            )
                        end
                    end
                else
                    do
                        return t[l]
                    end
                end
            else
                if n ~= 0 then
                    for o = 47, 54 do
                        if n > 4 then
                            local n = d
                            do
                                return function()
                                    local e = e(l, n(n, n), n(n, n))
                                    n(1)
                                    return e
                                end
                            end
                            break
                        end
                        local n = d
                        local d, a, t = t(2)
                        do
                            return function()
                                local e, o, l, r = e(l, n(n, n), n(n, n) + 3)
                                n(4)
                                return (r * d) + (l * a) + (o * t) + e
                            end
                        end
                        break
                    end
                else
                    local n = d
                    local d, o, t = t(2)
                    do
                        return function()
                            local l, e, a, r = e(l, n(n, n), n(n, n) + 3)
                            n(4)
                            return (r * d) + (a * o) + (e * t) + l
                        end
                    end
                end
            end
        end
    end),
    ...
)
