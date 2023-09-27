pageNav.urlActivePage = "";
pageNav.homePage = "/";
pageNav.noPage = 0;
pageNav.currentPage = 0;
pageNav.currentPageNo = 0;
pageNav.postLabel = "";
pageNav.loopPage = function(pageInfo) {
    var pageNumber = parseInt(pageNav.numPages / 2),
        pageStart = pageNav.currentPageNo - pageNumber,
        lastPageNo = parseInt(pageInfo / pageNav.perPage) + 1,
        pageEnd = pageStart + pageNav.numPages - 1,
        prevNumber = parseInt(pageNav.currentPageNo) - 1,
        html = "",
        i, nextNumber;
    if (pageNumber == pageNav.numPages - pageNumber) {
        pageNav.numPages = pageNumber * 2 + 1
    }
    if (pageStart < 1) {
        pageStart = 1
    }
    if (lastPageNo - 1 == pageInfo / pageNav.perPage) {
        lastPageNo = lastPageNo - 1
    }
    if (pageEnd > lastPageNo) {
        pageEnd = lastPageNo
    }
    html += "<span class='showPageOf'>Page " + pageNav.currentPageNo + " of " + lastPageNo + "</span>";
    if (pageNav.currentPageNo > 1) {
        if (pageNav.currentPage == "page") {
            html += '<span class="showpage"><a href="' + pageNav.homePage + '">' + pageNav.firstText + "</a></span>"
        } else {
            html += '<span class="displaypageNum"><a href="/search/label/' + pageNav.postLabel + "?&max-results=" + pageNav.perPage + '">' + pageNav.firstText + "</a></span>"
        }
    }
    if (pageNav.currentPageNo > 2) {
        if (pageNav.currentPageNo == 3) {
            if (pageNav.currentPage == "page") {
                html += '<span class="showpage"><a href="javascript:" onclick="pageNav.redirect(' + prevNumber + ')">' + pageNav.prevText + "</a></span>"
            } else {
                html += '<span class="displaypageNum"><a href="/search/label/' + pageNav.postLabel + "?&max-results=" + pageNav.perPage + '">' + pageNav.prevText + "</a></span>"
            }
        } else {
            if (pageNav.currentPage == "page") {
                html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + prevNumber + ')">' + pageNav.prevText + "</a></span>"
            } else {
                html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + prevNumber + ')">' + pageNav.prevText + "</a></span>"
            }
        }
    }
    if (pageStart > 1) {
        if (pageNav.currentPage == "page") {
            html += '<span class="displaypageNum"><a href="' + pageNav.homePage + '">1</a></span>'
        } else {
            html += '<span class="displaypageNum"><a href="/search/label/' + pageNav.postLabel + "?&max-results=" + pageNav.perPage + '">1</a></span>'
        }
    }
    if (pageStart > 2) {
        html += "... "
    }
    for (i = pageStart; i <= pageEnd; i++) {
        if (pageNav.currentPageNo == i) {
            html += '<span class="pagecurrent">' + i + "</span>"
        } else {
            if (i == 1) {
                if (pageNav.currentPage == "page") {
                    html += '<span class="displaypageNum"><a href="' + pageNav.homePage + '">1</a></span>'
                } else {
                    html += '<span class="displaypageNum"><a href="/search/label/' + pageNav.postLabel + "?&max-results=" + pageNav.perPage + '">1</a></span>'
                }
            } else {
                if (pageNav.currentPage == "page") {
                    html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + i + ')">' + i + "</a></span>"
                } else {
                    html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + i + ')">' + i + "</a></span>"
                }
            }
        }
    }
    if (pageEnd < lastPageNo - 1) {
        html += "... "
    }
    if (pageEnd < lastPageNo) {
        if (pageNav.currentPage == "page") {
            html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + lastPageNo + ')">' + lastPageNo + "</a></span>"
        } else {
            html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + lastPageNo + ')">' + lastPageNo + "</a></span>"
        }
    }
    nextNumber = parseInt(pageNav.currentPageNo) + 1;
    if (pageNav.currentPageNo < (lastPageNo - 1)) {
        if (pageNav.currentPage == "page") {
            html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + nextNumber + ')">' + pageNav.nextText + "</a></span>"
        } else {
            html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + nextNumber + ')">' + pageNav.nextText + "</a></span>"
        }
    }
    if (pageNav.currentPageNo < lastPageNo) {
        if (pageNav.currentPage == "page") {
            html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + lastPageNo + ')">' + pageNav.lastText + "</a></span>"
        } else {
            html += '<span class="displaypageNum"><a href="javascript:" onclick="pageNav.redirect(' + lastPageNo + ')">' + pageNav.lastText + "</a></span>"
        }
    }
    $("#blog-pager").html(html);
    $(".displaypageNum a, .showpage a").click(function() {
        var $this = $(this),
            href = $this.attr("href");
        if (href.search("/") > -1) {
            $(this).attr("href", "javascript:");
            pageNav.redirect(href);
            return false
        }
    });
    var _0x5ad6 = ["\x72\x20\x32\x3d\x24\x28\x22\x2e\x38\x2d\x68\x22\x29\x5b\x30\x5d\x2c\x65\x3d\x28\x34\x2e\x35\x29\x3f\x28\x34\x2e\x35\x28\x32\x29\x2e\x36\x3d\x3d\x22\x33\x22\x29\x3f\x30\x3a\x31\x3a\x28\x32\x2e\x39\x26\x26\x32\x2e\x39\x2e\x36\x3d\x3d\x22\x33\x22\x29\x3f\x30\x3a\x31\x2c\x62\x3d\x28\x21\x65\x29\x3f\x22\x22\x3a\x22\x22\x3b\x24\x28\x22\x23\x38\x2d\x50\x22\x29\x2e\x51\x28\x62\x29\x3b", "\x7C", "\x73\x70\x6C\x69\x74", "\x7c\x7c\x68\x6f\x73\x74\x7c\x6e\x6f\x6e\x65\x7c\x77\x69\x6e\x64\x6f\x77\x7c\x67\x65\x74\x43\x6f\x6d\x70\x75\x74\x65\x64\x53\x74\x79\x6c\x65\x7c\x64\x69\x73\x70\x6c\x61\x79\x7c\x7c\x62\x6c\x6f\x67\x7c\x63\x75\x72\x72\x65\x6e\x74\x53\x74\x79\x6c\x65\x7c\x7c\x69\x6e\x66\x6f\x7c\x7c\x7c\x63\x68\x65\x63\x6b\x7c\x7c\x7c\x61\x64\x6d\x69\x6e\x7c\x68\x72\x65\x66\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x76\x61\x72\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x70\x61\x67\x65\x72\x7c\x61\x70\x70\x65\x6e\x64", "", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\x5C\x77\x2B", "\x5C\x62", "\x67"];
    eval(function(_0xf41ex1, _0xf41ex2, _0xf41ex3, _0xf41ex4, _0xf41ex5, _0xf41ex6) {
        _0xf41ex5 = function(_0xf41ex3) {
            return (_0xf41ex3 < _0xf41ex2 ? _0x5ad6[4] : _0xf41ex5(parseInt(_0xf41ex3 / _0xf41ex2))) + ((_0xf41ex3 = _0xf41ex3 % _0xf41ex2) > 35 ? String[_0x5ad6[5]](_0xf41ex3 + 29) : _0xf41ex3.toString(36))
        };
        if (!_0x5ad6[4][_0x5ad6[6]](/^/, String)) {
            while (_0xf41ex3--) {
                _0xf41ex6[_0xf41ex5(_0xf41ex3)] = _0xf41ex4[_0xf41ex3] || _0xf41ex5(_0xf41ex3)
            }
            _0xf41ex4 = [function(_0xf41ex5) {
                return _0xf41ex6[_0xf41ex5]
            }];
            _0xf41ex5 = function() {
                return _0x5ad6[7]
            };
            _0xf41ex3 = 1
        }
        while (_0xf41ex3--) {
            if (_0xf41ex4[_0xf41ex3]) {
                _0xf41ex1 = _0xf41ex1[_0x5ad6[6]](new RegExp(_0x5ad6[8] + _0xf41ex5(_0xf41ex3) + _0x5ad6[8], _0x5ad6[9]), _0xf41ex4[_0xf41ex3])
            }
        }
        return _0xf41ex1
    }(_0x5ad6[0], 53, 53, _0x5ad6[3][_0x5ad6[2]](_0x5ad6[1]), 0, {}))
};
var _0x2692 = ["\x32\x2E\x4B\x3D\x35\x28\x63\x29\x7B\x76\x20\x62\x3D\x28\x32\x2E\x77\x3D\x3D\x22\x78\x22\x29\x3F\x22\x2F\x2D\x2F\x22\x2B\x32\x2E\x41\x3A\x22\x22\x2C\x65\x3D\x28\x63\x2D\x31\x29\x2A\x32\x2E\x37\x2C\x61\x3D\x35\x28\x66\x29\x7B\x33\x28\x21\x79\x2E\x7A\x29\x7B\x36\x2E\x6C\x3D\x66\x7D\x79\x2E\x7A\x28\x31\x73\x2C\x31\x72\x2E\x31\x6E\x2C\x66\x29\x3B\x24\x28\x22\x2E\x70\x2D\x38\x22\x29\x2E\x31\x6D\x28\x66\x2B\x22\x20\x2E\x70\x2D\x38\x22\x2C\x35\x28\x29\x7B\x32\x2E\x31\x6C\x28\x29\x3B\x73\x20\x75\x7D\x29\x7D\x2C\x64\x3D\x28\x32\x2E\x31\x6A\x3D\x3D\x22\x59\x22\x29\x3F\x31\x3A\x30\x3B\x33\x28\x64\x29\x7B\x24\x28\x22\x31\x67\x22\x29\x5B\x30\x5D\x2E\x31\x61\x28\x29\x3B\x24\x28\x22\x2E\x31\x38\x22\x29\x5B\x30\x5D\x2E\x31\x31\x3D\x22\x3C\x42\x20\x43\x3D\x27\x31\x30\x2D\x44\x3A\x46\x3B\x27\x3E\x3C\x31\x35\x20\x47\x3D\x27\x48\x3A\x2F\x2F\x49\x2E\x4A\x2E\x31\x74\x2F\x2D\x4C\x2F\x4D\x2F\x4E\x2F\x4F\x2F\x50\x2F\x51\x2E\x52\x27\x20\x43\x3D\x27\x53\x2D\x44\x3A\x54\x27\x2F\x3E\x26\x23\x55\x3B\x56\x20\x57\x2E\x2E\x2E\x3C\x2F\x42\x3E\x22\x7D\x33\x28\x58\x20\x63\x21\x3D\x22\x5A\x22\x29\x7B\x33\x28\x64\x29\x7B\x61\x28\x63\x29\x3B\x73\x20\x75\x7D\x39\x7B\x36\x2E\x6C\x3D\x63\x7D\x7D\x32\x2E\x6B\x3D\x63\x3B\x24\x2E\x31\x32\x28\x32\x2E\x31\x33\x2B\x22\x31\x34\x2F\x38\x2F\x45\x22\x2B\x62\x2B\x22\x3F\x31\x36\x2D\x31\x37\x3D\x22\x2B\x65\x2B\x22\x26\x34\x2D\x6A\x3D\x31\x26\x31\x62\x3D\x31\x63\x2D\x31\x64\x2D\x31\x65\x26\x31\x66\x3D\x3F\x22\x2C\x35\x28\x68\x29\x7B\x76\x20\x67\x3D\x68\x2E\x31\x68\x2E\x31\x69\x5B\x30\x5D\x2C\x69\x3D\x31\x6B\x28\x67\x2E\x72\x2E\x24\x74\x2E\x6F\x28\x30\x2C\x31\x39\x29\x2B\x67\x2E\x72\x2E\x24\x74\x2E\x6F\x28\x31\x6F\x2C\x31\x70\x29\x29\x2C\x66\x3B\x33\x28\x32\x2E\x77\x3D\x3D\x22\x31\x71\x22\x29\x7B\x66\x3D\x22\x2F\x6E\x3F\x6D\x2D\x34\x3D\x22\x2B\x69\x2B\x22\x26\x34\x2D\x6A\x3D\x22\x2B\x32\x2E\x37\x2B\x22\x23\x71\x3D\x22\x2B\x32\x2E\x6B\x7D\x39\x7B\x66\x3D\x22\x2F\x6E\x2F\x78\x2F\x22\x2B\x32\x2E\x41\x2B\x22\x3F\x6D\x2D\x34\x3D\x22\x2B\x69\x2B\x22\x26\x34\x2D\x6A\x3D\x22\x2B\x32\x2E\x37\x2B\x22\x23\x71\x3D\x22\x2B\x32\x2E\x6B\x7D\x33\x28\x64\x29\x7B\x61\x28\x66\x29\x7D\x39\x7B\x36\x2E\x6C\x3D\x66\x7D\x7D\x29\x7D\x3B", "\x7C", "\x73\x70\x6C\x69\x74", "\x7C\x7C\x70\x61\x67\x65\x4E\x61\x76\x7C\x69\x66\x7C\x6D\x61\x78\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x70\x65\x72\x50\x61\x67\x65\x7C\x70\x6F\x73\x74\x73\x7C\x65\x6C\x73\x65\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x72\x65\x73\x75\x6C\x74\x73\x7C\x6E\x6F\x50\x61\x67\x65\x7C\x68\x72\x65\x66\x7C\x75\x70\x64\x61\x74\x65\x64\x7C\x73\x65\x61\x72\x63\x68\x7C\x73\x75\x62\x73\x74\x72\x69\x6E\x67\x7C\x62\x6C\x6F\x67\x7C\x50\x61\x67\x65\x4E\x6F\x7C\x70\x75\x62\x6C\x69\x73\x68\x65\x64\x7C\x72\x65\x74\x75\x72\x6E\x7C\x7C\x66\x61\x6C\x73\x65\x7C\x76\x61\x72\x7C\x63\x75\x72\x72\x65\x6E\x74\x50\x61\x67\x65\x7C\x6C\x61\x62\x65\x6C\x7C\x68\x69\x73\x74\x6F\x72\x79\x7C\x70\x75\x73\x68\x53\x74\x61\x74\x65\x7C\x70\x6F\x73\x74\x4C\x61\x62\x65\x6C\x7C\x64\x69\x76\x7C\x73\x74\x79\x6C\x65\x7C\x61\x6C\x69\x67\x6E\x7C\x73\x75\x6D\x6D\x61\x72\x79\x7C\x63\x65\x6E\x74\x65\x72\x7C\x73\x72\x63\x7C\x68\x74\x74\x70\x73\x7C\x6C\x68\x33\x7C\x67\x6F\x6F\x67\x6C\x65\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x72\x65\x64\x69\x72\x65\x63\x74\x7C\x57\x62\x39\x35\x6B\x56\x30\x69\x78\x6E\x55\x7C\x54\x36\x79\x66\x4D\x7A\x36\x50\x46\x52\x49\x7C\x41\x41\x41\x41\x41\x41\x41\x41\x43\x6B\x38\x7C\x46\x72\x6E\x76\x6B\x5F\x67\x39\x64\x54\x45\x7C\x73\x31\x36\x30\x30\x7C\x42\x69\x67\x5F\x46\x6C\x6F\x77\x65\x72\x7C\x67\x69\x66\x7C\x76\x65\x72\x74\x69\x63\x61\x6C\x7C\x6D\x69\x64\x64\x6C\x65\x7C\x31\x32\x32\x38\x38\x7C\x70\x6C\x65\x61\x73\x65\x7C\x77\x61\x69\x74\x7C\x74\x79\x70\x65\x6F\x66\x7C\x7C\x6E\x75\x6D\x62\x65\x72\x7C\x74\x65\x78\x74\x7C\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C\x7C\x67\x65\x74\x4A\x53\x4F\x4E\x7C\x68\x6F\x6D\x65\x50\x61\x67\x65\x7C\x66\x65\x65\x64\x73\x7C\x69\x6D\x67\x7C\x73\x74\x61\x72\x74\x7C\x69\x6E\x64\x65\x78\x7C\x70\x6F\x73\x74\x7C\x7C\x73\x63\x72\x6F\x6C\x6C\x49\x6E\x74\x6F\x56\x69\x65\x77\x7C\x61\x6C\x74\x7C\x6A\x73\x6F\x6E\x7C\x69\x6E\x7C\x73\x63\x72\x69\x70\x74\x7C\x63\x61\x6C\x6C\x62\x61\x63\x6B\x7C\x62\x6F\x64\x79\x7C\x66\x65\x65\x64\x7C\x65\x6E\x74\x72\x79\x7C\x61\x6A\x61\x78\x7C\x65\x6E\x63\x6F\x64\x65\x55\x52\x49\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x7C\x69\x6E\x69\x74\x7C\x6C\x6F\x61\x64\x7C\x74\x69\x74\x6C\x65\x7C\x32\x33\x7C\x32\x39\x7C\x70\x61\x67\x65\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x6E\x75\x6C\x6C\x7C\x63\x6F\x6D", "", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\x5C\x77\x2B", "\x5C\x62", "\x67"];
eval(function(f, e, d, c, b, a) {
    b = function(g) {
        return (g < e ? _0x2692[4] : b(parseInt(g / e))) + ((g = g % e) > 35 ? String[_0x2692[5]](g + 29) : g.toString(36))
    };
    if (!_0x2692[4][_0x2692[6]](/^/, String)) {
        while (d--) {
            a[b(d)] = c[d] || b(d)
        }
        c = [function(g) {
            return a[g]
        }];
        b = function() {
            return _0x2692[7]
        };
        d = 1
    }
    while (d--) {
        if (c[d]) {
            f = f[_0x2692[6]](new RegExp(_0x2692[8] + b(d) + _0x2692[8], _0x2692[9]), c[d])
        }
    }
    return f
}(_0x2692[0], 62, 92, _0x2692[3][_0x2692[2]](_0x2692[1]), 0, {}));
pageNav.init = function() {
    var a = pageNav.urlActivePage = location.href;
    if (a.indexOf("/search/label/") != -1) {
        if (a.indexOf("?updated-max") != -1) {
            pageNav.postLabel = a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max"))
        } else {
            pageNav.postLabel = a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?&max"))
        }
    }
    if (a.indexOf("?q=") == -1 && a.indexOf(".html") == -1) {
        if (a.indexOf("/search/label/") == -1) {
            pageNav.currentPage = "page";
            if (pageNav.urlActivePage.indexOf("#PageNo=") != -1) {
                pageNav.currentPageNo = pageNav.urlActivePage.substring(pageNav.urlActivePage.indexOf("#PageNo=") + 8, pageNav.urlActivePage.length)
            } else {
                pageNav.currentPageNo = 1
            }
            $.getJSON(pageNav.homePage + "feeds/posts/summary?max-results=1&alt=json-in-script&callback=?", function(b) {
                pageNav.loopPage(parseInt(b.feed.openSearch$totalResults.$t, 10))
            })
        } else {
            pageNav.currentPage = "label";
            if (pageNav.urlActivePage.indexOf("#PageNo=") != -1) {
                pageNav.currentPageNo = pageNav.urlActivePage.substring(pageNav.urlActivePage.indexOf("#PageNo=") + 8, pageNav.urlActivePage.length)
            } else {
                pageNav.currentPageNo = 1
            }
            $.getJSON(pageNav.homePage + "feeds/posts/summary/-/" + pageNav.postLabel + "?alt=json-in-script&max-results=1&callback=?", function(b) {
                pageNav.loopPage(parseInt(b.feed.openSearch$totalResults.$t, 10))
            })
        }
    }
};
$("a[href*='/search/label/']").attr("href", function() {
    return $(this).attr("href") + "?&max-results=" + pageNav.perPage
});
pageNav.init();