(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	[function(e, t, n) {
		(function(t) {
			e.exports = t.jQuery = n(21)
		}).call(this, n(13))
	}, function(e, t, n) {
		"use strict";
		n(4), n(9), $(function() {
			var e, t, n, i, r, o, a, s, l;
			if(t = "ipad" == (e = navigator.userAgent.toLowerCase()).match(/ipad/i), n = "iphone os" == e.match(/iphone os/i), i = "midp" == e.match(/midp/i), r = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i), o = "ucweb" == e.match(/ucweb/i), a = "android" == e.match(/android/i), s = "windows ce" == e.match(/windows ce/i), l = "windows mobile" == e.match(/windows mobile/i), (t || n || i || r || o || a || s || l) && (window.location.href = "https://m.putao.com"), window.ActiveXObject) var u = navigator.appName,
				c = navigator.appVersion.split(";")[1].replace(/[ ]/g, "");

			function d() {
				$(".product span").hide(), $(".productList").hide(), $(".productList .right a").each(function(e, t) {
					$(t).hasClass("zoomInLeft") && $(t).removeClass("zoomInLeft")
				})
			}
			$(".productList").hide(), $(".product").hover(function() {
				$(".product span").show();
				var e, t = $(".productList .right a");
				if(window.ActiveXObject && "Microsoft Internet Explorer" == u && "MSIE9.0" == c)
					for(var n = 0; n < t.length; n++) $(t[n]).css("opacity", "1");
				for(n = 0; n < t.length; n++) e = n, $(t[e]).hasClass("zoomInLeft") || $(t[e]).css("animation-delay", .1 * e + "s").addClass("zoomInLeft");
				$(".productList").show()
			}, function() {
				"none" == $(".productList").css("display") && "block" == $(".product").parent().siblings("li").find("a span").css("display") && d()
			}), $(".product").parent().siblings().find("a").hover(function() {
				d()
			}), $(".productList").hover(function() {
				$(".product span").show();
				var e, t = $(".productList .right a");
				if("Microsoft Internet Explorer" == u && "MSIE9.0" == c)
					for(var n = 0; n < t.length; n++) $(t[n]).css("opacity", "1");
				for(n = 0; n < t.length; n++) e = n, $(t[e]).hasClass("zoomInLeft") || $(t[e]).css("animation-delay", .1 * e + "s").addClass("zoomInLeft");
				$(".productList").show()
			}, function() {
				d()
			}), $(window).scroll(function() {
				$(window).scrollTop() > 300 ? ($("#back-to-top").fadeIn(800), $(".crumbs-area").addClass("ie-crumbs-fixed-top"), $(".butts").addClass("ie-search-fixed-top"), $(".search").addClass("ie-searchs-fixed-top")) : ($("#back-to-top").fadeOut(800), $(".crumbs-area").removeClass("ie-crumbs-fixed-top"), $(".butts").removeClass("ie-search-fixed-top"), $(".search").removeClass("ie-searchs-fixed-top"))
			}), $("#back-to-top").click(function() {
				return $("html").scrollTop() ? ($("html").animate({
					scrollTop: 0
				}, 500), !1) : ($("body").animate({
					scrollTop: 0
				}, 500), !1)
			}), $(".ptwechat").click(function() {
				$(".footer-shadow").fadeIn("fast"), $(".footer-buy-code").fadeIn("fast")
			}), $(".footer-shadow,.close").click(function() {
				$(".footer-shadow").fadeOut("fast"), $(".footer-buy-code").fadeOut("fast")
			}), $("a").each(function(e, t) {
				var n = $(this).attr("href");
				n && -1 != n.indexOf("http") && (-1 == n.indexOf("www.putao.com") || -1 == n.indexOf("new-www.putao.com") ? $(this).attr("target", "_blank") : $(this).attr("target", ""))
			})
		}), $(".type-item").click(function() {
			$(this).siblings().removeClass("check"), $(this).addClass("check");
			var e = $(this).attr("index"),
				t = $(this).parent().siblings(".item-area").find(".block");
			$(this).parent().siblings(".item-area").find(".block").removeClass("check"), t[e].className = "block check"
		}), $(".item-btn").click(function() {
			var e = $(this).attr("item-index"),
				t = $(this).parent().parent().parent().find(".item-imgs");
			$(this).siblings().removeClass("check"), $(this).addClass("check"), $(this).parent().parent().parent().find(".item-imgs").removeClass("check"), t[e].className = "item-imgs check"
		}), $(window).on("load", function() {
			$("#scrollOne") && $("#scrollOne").simpleScroll(1, 4, 4), $("#scrollTwo") && $("#scrollTwo").simpleScroll(1, 4, 4), $("#scrollThree") && $("#scrollThree").simpleScroll(1, 3, 3), $("#scrollFour") && $("#scrollFour").simpleScroll(1, 3, 3)
		})
	}, function(e, t, n) {}, function(e, t) {
		$(window).on("load", function() {
			$(window).scroll(function(e) {
				(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= 30 ? ($("header").fadeOut("fast"), $(".header-area").css({
					position: "sticky",
					top: "0",
					background: "white",
					opacity: "1"
				}), $(".header-area").css({
					"box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.1)"
				})) : ($("header").fadeIn("fast"), $(".header-area").css({
					position: "absolute",
					top: "60px"
				}), $(".header-area").css({
					"box-shadow": "none"
				}))
			})
		})
	}, function(e, t) {
		/*!
		 * Lazy Load - jQuery plugin for lazy loading images
		 *
		 * Copyright (c) 2007-2015 Mika Tuupola
		 *
		 * Licensed under the MIT license:
		 *   http://www.opensource.org/licenses/mit-license.php
		 *
		 * Project home:
		 *   http://www.appelsiini.net/projects/lazyload
		 *
		 * Version:  1.9.7
		 *
		 */
		! function(e, t, n, i) {
			var r = e(t);
			e.fn.lazyload = function(i) {
				var o, a = this,
					s = {
						threshold: 0,
						failure_limit: 0,
						event: "scroll",
						effect: "show",
						container: t,
						data_attribute: "original",
						skip_invisible: !1,
						appear: null,
						load: null,
						placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
					};

				function l() {
					var t = 0;
					a.each(function() {
						var n = e(this);
						if(!s.skip_invisible || n.is(":visible"))
							if(e.abovethetop(this, s) || e.leftofbegin(this, s));
							else if(e.belowthefold(this, s) || e.rightoffold(this, s)) {
							if(++t > s.failure_limit) return !1
						} else n.trigger("appear"), t = 0
					})
				}
				return i && (void 0 !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), void 0 !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), e.extend(s, i)), o = void 0 === s.container || s.container === t ? r : e(s.container), 0 === s.event.indexOf("scroll") && o.bind(s.event, function() {
					return l()
				}), this.each(function() {
					var t = this,
						n = e(t);
					t.loaded = !1, void 0 !== n.attr("src") && !1 !== n.attr("src") || n.is("img") && n.attr("src", s.placeholder), n.one("appear", function() {
						if(!this.loaded) {
							if(s.appear) {
								var i = a.length;
								s.appear.call(t, i, s)
							}
							e("<img />").bind("load", function() {
								var i = n.attr("data-" + s.data_attribute);
								n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[s.effect](s.effect_speed), t.loaded = !0;
								var r = e.grep(a, function(e) {
									return !e.loaded
								});
								if(a = e(r), s.load) {
									var o = a.length;
									s.load.call(t, o, s)
								}
							}).attr("src", n.attr("data-" + s.data_attribute))
						}
					}), 0 !== s.event.indexOf("scroll") && n.bind(s.event, function() {
						t.loaded || n.trigger("appear")
					})
				}), r.bind("resize", function() {
					l()
				}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(t) {
					t.originalEvent && t.originalEvent.persisted && a.each(function() {
						e(this).trigger("appear")
					})
				}), e(n).ready(function() {
					l()
				}), this
			}, e.belowthefold = function(n, i) {
				return(void 0 === i.container || i.container === t ? (t.innerHeight ? t.innerHeight : r.height()) + r.scrollTop() : e(i.container).offset().top + e(i.container).height()) <= e(n).offset().top - i.threshold
			}, e.rightoffold = function(n, i) {
				return(void 0 === i.container || i.container === t ? r.width() + r.scrollLeft() : e(i.container).offset().left + e(i.container).width()) <= e(n).offset().left - i.threshold
			}, e.abovethetop = function(n, i) {
				return(void 0 === i.container || i.container === t ? r.scrollTop() : e(i.container).offset().top) >= e(n).offset().top + i.threshold + e(n).height()
			}, e.leftofbegin = function(n, i) {
				return(void 0 === i.container || i.container === t ? r.scrollLeft() : e(i.container).offset().left) >= e(n).offset().left + i.threshold + e(n).width()
			}, e.inviewport = function(t, n) {
				return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
			}, e.extend(e.expr[":"], {
				"below-the-fold": function(t) {
					return e.belowthefold(t, {
						threshold: 0
					})
				},
				"above-the-top": function(t) {
					return !e.belowthefold(t, {
						threshold: 0
					})
				},
				"right-of-screen": function(t) {
					return e.rightoffold(t, {
						threshold: 0
					})
				},
				"left-of-screen": function(t) {
					return !e.rightoffold(t, {
						threshold: 0
					})
				},
				"in-viewport": function(t) {
					return e.inviewport(t, {
						threshold: 0
					})
				},
				"above-the-fold": function(t) {
					return !e.belowthefold(t, {
						threshold: 0
					})
				},
				"right-of-fold": function(t) {
					return e.rightoffold(t, {
						threshold: 0
					})
				},
				"left-of-fold": function(t) {
					return !e.rightoffold(t, {
						threshold: 0
					})
				}
			})
		}(jQuery, window, document), $("img.lazy").lazyload({
			threshold: 200,
			effect: "fadeIn",
			failure_limit: 20,
			skip_invisible: !1
		})
	}, function(e, t) {
		(function() {
			var e = jQuery;
			e.fn.plusGallery = function(t) {
				var n, i = e(this).attr("id"),
					r = e("#" + i),
					o = 0;

				function a() {
					var t = 0;
					return r.find(".swipe-item").each(function() {
						t += parseInt(e(this).width(), 10)
					}), t
				}

				function s() {
					return a() - r.width()
				}
				r.find(".img-next").click(function() {
					! function(t) {
						totalWidth = a(), n = s(), o + t <= n ? o += t : (o = n, e(this).hide()), e("figure", r).css("transform", "translate(-" + o + "px, 0)")
					}(r.find(".swipe-item").width()), o > 0 && r.find(".img-prev").addClass("true"), o >= s() && e(this).removeClass("true")
				}), r.find(".img-prev").click(function() {
					! function(t) {
						totalWidth = a(), n = totalWidth - t, o - t > 0 ? o -= t : (o = 0, e(this).hide()), e("figure", r).css("transform", "translate(-" + o + "px, 0)")
					}(r.find(".swipe-item").width()), o < s() && r.find(".img-next").addClass("true"), o <= 0 && e(this).removeClass("true")
				})
			}
		}).call(this)
	}, function(e, t, n) {
		var i = function(e, t) {
			"use strict";

			function n(e, t) {
				return document.querySelectorAll ? (t || document).querySelectorAll(e) : jQuery(e, t)
			}

			function i() {
				var e = A - _;
				return t.freeMode && (e = A - _), t.slidesPerView > S.slides.length && !t.centeredSlides && (e = 0), 0 > e && (e = 0), e
			}

			function r() {
				var e, i = S.h.addEventListener;
				if(t.preventLinks) {
					var r = n("a", S.container);
					for(e = 0; e < r.length; e++) i(r[e], "click", d)
				}
				if(t.releaseFormElements) {
					var o = n("input, textarea, select", S.container);
					for(e = 0; e < o.length; e++) i(o[e], S.touchEvents.touchStart, p, !0), S.support.touch && t.simulateTouch && i(o[e], "mousedown", p, !0)
				}
				if(t.onSlideClick)
					for(e = 0; e < S.slides.length; e++) i(S.slides[e], "click", l);
				if(t.onSlideTouch)
					for(e = 0; e < S.slides.length; e++) i(S.slides[e], S.touchEvents.touchStart, u)
			}

			function o() {
				var e, i = S.h.removeEventListener;
				if(t.onSlideClick)
					for(e = 0; e < S.slides.length; e++) i(S.slides[e], "click", l);
				if(t.onSlideTouch)
					for(e = 0; e < S.slides.length; e++) i(S.slides[e], S.touchEvents.touchStart, u);
				if(t.releaseFormElements) {
					var r = n("input, textarea, select", S.container);
					for(e = 0; e < r.length; e++) i(r[e], S.touchEvents.touchStart, p, !0), S.support.touch && t.simulateTouch && i(r[e], "mousedown", p, !0)
				}
				if(t.preventLinks) {
					var o = n("a", S.container);
					for(e = 0; e < o.length; e++) i(o[e], "click", d)
				}
			}

			function a(e) {
				var t = e.keyCode || e.charCode;
				if(!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)) {
					if(37 === t || 39 === t || 38 === t || 40 === t) {
						for(var n = !1, i = S.h.getOffset(S.container), r = S.h.windowScroll().left, o = S.h.windowScroll().top, a = S.h.windowWidth(), s = S.h.windowHeight(), l = [
								[i.left, i.top],
								[i.left + S.width, i.top],
								[i.left, i.top + S.height],
								[i.left + S.width, i.top + S.height]
							], u = 0; u < l.length; u++) {
							var c = l[u];
							c[0] >= r && c[0] <= r + a && c[1] >= o && c[1] <= o + s && (n = !0)
						}
						if(!n) return
					}
					D ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 39 === t && S.swipeNext(), 37 === t && S.swipePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && S.swipeNext(), 38 === t && S.swipePrev())
				}
			}

			function s(e) {
				var n = S._wheelEvent,
					r = 0;
				if(e.detail) r = -e.detail;
				else if("mousewheel" === n)
					if(t.mousewheelControlForceToAxis)
						if(D) {
							if(!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
							r = e.wheelDeltaX
						} else {
							if(!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
							r = e.wheelDeltaY
						}
				else r = e.wheelDelta;
				else if("DOMMouseScroll" === n) r = -e.detail;
				else if("wheel" === n)
					if(t.mousewheelControlForceToAxis)
						if(D) {
							if(!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
							r = -e.deltaX
						} else {
							if(!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
							r = -e.deltaY
						}
				else r = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
				if(t.freeMode) {
					var o = S.getWrapperTranslate() + r;
					if(o > 0 && (o = 0), o < -i() && (o = -i()), S.setWrapperTransition(0), S.setWrapperTranslate(o), S.updateActiveSlide(o), 0 === o || o === -i()) return
				} else(new Date).getTime() - B > 60 && (0 > r ? S.swipeNext() : S.swipePrev()), B = (new Date).getTime();
				return t.autoplay && S.stopAutoplay(!0), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
			}

			function l(e) {
				S.allowSlideClick && (c(e), S.fireCallback(t.onSlideClick, S, e))
			}

			function u(e) {
				c(e), S.fireCallback(t.onSlideTouch, S, e)
			}

			function c(e) {
				if(e.currentTarget) S.clickedSlide = e.currentTarget;
				else {
					var n = e.srcElement;
					do {
						if(n.className.indexOf(t.slideClass) > -1) break;
						n = n.parentNode
					} while (n);
					S.clickedSlide = n
				}
				S.clickedSlideIndex = S.slides.indexOf(S.clickedSlide), S.clickedSlideLoopIndex = S.clickedSlideIndex - (S.loopedSlides || 0)
			}

			function d(e) {
				return S.allowLinks ? void 0 : (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.preventLinksPropagation && "stopPropagation" in e && e.stopPropagation(), !1)
			}

			function p(e) {
				return e.stopPropagation ? e.stopPropagation() : e.returnValue = !1, !1
			}

			function f(e) {
				if(t.preventLinks && (S.allowLinks = !0), S.isTouched || t.onlyExternal) return !1;
				var n = e.target || e.srcElement;
				document.activeElement && document.activeElement !== document.body && document.activeElement !== n && document.activeElement.blur();
				var i = "input select textarea".split(" ");
				if(t.noSwiping && n && function(e) {
						var n = !1;
						do {
							m(e, t.noSwipingClass) && (n = !0), e = e.parentElement
						} while (!n && e.parentElement && !m(e, t.wrapperClass));
						return !n && m(e, t.wrapperClass) && m(e, t.noSwipingClass) && (n = !0), n
					}(n)) return !1;
				if(K = !1, S.isTouched = !0, !(X = "touchstart" === e.type) && "which" in e && 3 === e.which) return S.isTouched = !1, !1;
				if(!X || 1 === e.targetTouches.length) {
					S.callPlugins("onTouchStartBegin"), !X && !S.isAndroid && i.indexOf(n.tagName.toLowerCase()) < 0 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
					var r = X ? e.targetTouches[0].pageX : e.pageX || e.clientX,
						o = X ? e.targetTouches[0].pageY : e.pageY || e.clientY;
					S.touches.startX = S.touches.currentX = r, S.touches.startY = S.touches.currentY = o, S.touches.start = S.touches.current = D ? r : o, S.setWrapperTransition(0), S.positions.start = S.positions.current = S.getWrapperTranslate(), S.setWrapperTranslate(S.positions.start), S.times.start = (new Date).getTime(), L = void 0, t.moveStartThreshold > 0 && (q = !1), t.onTouchStart && S.fireCallback(t.onTouchStart, S, e), S.callPlugins("onTouchStartEnd")
				}
			}

			function h(e) {
				if(S.isTouched && !t.onlyExternal && (!X || "mousemove" !== e.type)) {
					var n = X ? e.targetTouches[0].pageX : e.pageX || e.clientX,
						r = X ? e.targetTouches[0].pageY : e.pageY || e.clientY;
					if(void 0 === L && D && (L = !!(L || Math.abs(r - S.touches.startY) > Math.abs(n - S.touches.startX))), void 0 !== L || D || (L = !!(L || Math.abs(r - S.touches.startY) < Math.abs(n - S.touches.startX))), L) return void(S.isTouched = !1);
					if(D) {
						if(!t.swipeToNext && n < S.touches.startX || !t.swipeToPrev && n > S.touches.startX) return
					} else if(!t.swipeToNext && r < S.touches.startY || !t.swipeToPrev && r > S.touches.startY) return;
					if(e.assignedToSwiper) return void(S.isTouched = !1);
					if(e.assignedToSwiper = !0, t.preventLinks && (S.allowLinks = !1), t.onSlideClick && (S.allowSlideClick = !1), t.autoplay && S.stopAutoplay(!0), !X || 1 === e.touches.length) {
						var o;
						if(S.isMoved || (S.callPlugins("onTouchMoveStart"), t.loop && (S.fixLoop(), S.positions.start = S.getWrapperTranslate()), t.onTouchMoveStart && S.fireCallback(t.onTouchMoveStart, S)), S.isMoved = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, S.touches.current = D ? n : r, S.positions.current = (S.touches.current - S.touches.start) * t.touchRatio + S.positions.start, S.positions.current > 0 && t.onResistanceBefore && S.fireCallback(t.onResistanceBefore, S, S.positions.current), S.positions.current < -i() && t.onResistanceAfter && S.fireCallback(t.onResistanceAfter, S, Math.abs(S.positions.current + i())), t.resistance && "100%" !== t.resistance && (S.positions.current > 0 && (o = 1 - S.positions.current / _ / 2, S.positions.current = .5 > o ? _ / 2 : S.positions.current * o), S.positions.current < -i())) {
							var a = (S.touches.current - S.touches.start) * t.touchRatio + (i() + S.positions.start);
							o = (_ + a) / _;
							var s = S.positions.current - a * (1 - o) / 2,
								l = -i() - _ / 2;
							S.positions.current = l > s || 0 >= o ? l : s
						}
						if(t.resistance && "100%" === t.resistance && (S.positions.current > 0 && (!t.freeMode || t.freeModeFluid) && (S.positions.current = 0), S.positions.current < -i() && (!t.freeMode || t.freeModeFluid) && (S.positions.current = -i())), !t.followFinger) return;
						if(t.moveStartThreshold)
							if(Math.abs(S.touches.current - S.touches.start) > t.moveStartThreshold || q) {
								if(!q) return q = !0, void(S.touches.start = S.touches.current);
								S.setWrapperTranslate(S.positions.current)
							} else S.positions.current = S.positions.start;
						else S.setWrapperTranslate(S.positions.current);
						return(t.freeMode || t.watchActiveIndex) && S.updateActiveSlide(S.positions.current), t.grabCursor && (S.container.style.cursor = "move", S.container.style.cursor = "grabbing", S.container.style.cursor = "-moz-grabbin", S.container.style.cursor = "-webkit-grabbing"), z || (z = S.touches.current), Y || (Y = (new Date).getTime()), S.velocity = (S.touches.current - z) / ((new Date).getTime() - Y) / 2, Math.abs(S.touches.current - z) < 2 && (S.velocity = 0), z = S.touches.current, Y = (new Date).getTime(), S.callPlugins("onTouchMoveEnd"), t.onTouchMove && S.fireCallback(t.onTouchMove, S, e), !1
					}
				}
			}

			function g(e) {
				if(L && S.swipeReset(), !t.onlyExternal && S.isTouched) {
					S.isTouched = !1, t.grabCursor && (S.container.style.cursor = "move", S.container.style.cursor = "grab", S.container.style.cursor = "-moz-grab", S.container.style.cursor = "-webkit-grab"), S.positions.current || 0 === S.positions.current || (S.positions.current = S.positions.start), t.followFinger && S.setWrapperTranslate(S.positions.current), S.times.end = (new Date).getTime(), S.touches.diff = S.touches.current - S.touches.start, S.touches.abs = Math.abs(S.touches.diff), S.positions.diff = S.positions.current - S.positions.start, S.positions.abs = Math.abs(S.positions.diff);
					var n = S.positions.diff,
						r = S.positions.abs,
						o = S.times.end - S.times.start;
					5 > r && 300 > o && !1 === S.allowLinks && (t.freeMode || 0 === r || S.swipeReset(), t.preventLinks && (S.allowLinks = !0), t.onSlideClick && (S.allowSlideClick = !0)), setTimeout(function() {
						void 0 !== S && null !== S && (t.preventLinks && (S.allowLinks = !0), t.onSlideClick && (S.allowSlideClick = !0))
					}, 100);
					var a = i();
					if(!S.isMoved && t.freeMode) return S.isMoved = !1, t.onTouchEnd && S.fireCallback(t.onTouchEnd, S, e), void S.callPlugins("onTouchEnd");
					if(!S.isMoved || S.positions.current > 0 || S.positions.current < -a) return S.swipeReset(), t.onTouchEnd && S.fireCallback(t.onTouchEnd, S, e), void S.callPlugins("onTouchEnd");
					if(S.isMoved = !1, t.freeMode) {
						if(t.freeModeFluid) {
							var s, l = 1e3 * t.momentumRatio,
								u = S.velocity * l,
								c = S.positions.current + u,
								d = !1,
								p = 20 * Math.abs(S.velocity) * t.momentumBounceRatio; - a > c && (t.momentumBounce && S.support.transitions ? (-p > c + a && (c = -a - p), s = -a, d = !0, K = !0) : c = -a), c > 0 && (t.momentumBounce && S.support.transitions ? (c > p && (c = p), s = 0, d = !0, K = !0) : c = 0), 0 !== S.velocity && (l = Math.abs((c - S.positions.current) / S.velocity)), S.setWrapperTranslate(c), S.setWrapperTransition(l), t.momentumBounce && d && S.wrapperTransitionEnd(function() {
								K && (t.onMomentumBounce && S.fireCallback(t.onMomentumBounce, S), S.callPlugins("onMomentumBounce"), S.setWrapperTranslate(s), S.setWrapperTransition(300))
							}), S.updateActiveSlide(c)
						}
						return(!t.freeModeFluid || o >= 300) && S.updateActiveSlide(S.positions.current), t.onTouchEnd && S.fireCallback(t.onTouchEnd, S, e), void S.callPlugins("onTouchEnd")
					}
					"toNext" == (k = 0 > n ? "toNext" : "toPrev") && 300 >= o && (30 > r || !t.shortSwipes ? S.swipeReset() : S.swipeNext(!0, !0)), "toPrev" === k && 300 >= o && (30 > r || !t.shortSwipes ? S.swipeReset() : S.swipePrev(!0, !0));
					var f = 0;
					if("auto" === t.slidesPerView) {
						for(var h, g = Math.abs(S.getWrapperTranslate()), m = 0, v = 0; v < S.slides.length; v++)
							if((m += h = D ? S.slides[v].getWidth(!0, t.roundLengths) : S.slides[v].getHeight(!0, t.roundLengths)) > g) {
								f = h;
								break
							}
						f > _ && (f = _)
					} else f = E * t.slidesPerView;
					"toNext" === k && o > 300 && (r >= f * t.longSwipesRatio ? S.swipeNext(!0, !0) : S.swipeReset()), "toPrev" === k && o > 300 && (r >= f * t.longSwipesRatio ? S.swipePrev(!0, !0) : S.swipeReset()), t.onTouchEnd && S.fireCallback(t.onTouchEnd, S, e), S.callPlugins("onTouchEnd")
				}
			}

			function m(e, t) {
				return e && e.getAttribute("class") && e.getAttribute("class").indexOf(t) > -1
			}

			function v(e, t) {
				var n, i = document.createElement("div");
				return i.innerHTML = t, (n = i.firstChild).className += " " + e, n.outerHTML
			}

			function y(e, n, i) {
				var r = "to" === n && i.speed >= 0 ? i.speed : t.speed,
					o = +new Date;
				if(S.support.transitions || !t.DOMAnimation) S.setWrapperTranslate(e), S.setWrapperTransition(r);
				else {
					var a = S.getWrapperTranslate(),
						s = Math.ceil((e - a) / r * (1e3 / 60)),
						l = a > e ? "toNext" : "toPrev";
					if(S._DOMAnimating) return;
					! function r() {
						var u = +new Date;
						a += s * (u - o) / (1e3 / 60), ("toNext" === l ? a > e : e > a) ? (S.setWrapperTranslate(Math.ceil(a)), S._DOMAnimating = !0, window.setTimeout(function() {
							r()
						}, 1e3 / 60)) : (t.onSlideChangeEnd && ("to" === n ? !0 === i.runCallbacks && S.fireCallback(t.onSlideChangeEnd, S, l) : S.fireCallback(t.onSlideChangeEnd, S, l)), S.setWrapperTranslate(e), S._DOMAnimating = !1)
					}()
				}
				S.updateActiveSlide(e), t.onSlideNext && "next" === n && !0 === i.runCallbacks && S.fireCallback(t.onSlideNext, S, e), t.onSlidePrev && "prev" === n && !0 === i.runCallbacks && S.fireCallback(t.onSlidePrev, S, e), t.onSlideReset && "reset" === n && !0 === i.runCallbacks && S.fireCallback(t.onSlideReset, S, e), "next" !== n && "prev" !== n && "to" !== n || !0 !== i.runCallbacks || function(e) {
					if(S.callPlugins("onSlideChangeStart"), t.onSlideChangeStart)
						if(t.queueStartCallbacks && S.support.transitions) {
							if(S._queueStartCallbacks) return;
							S._queueStartCallbacks = !0, S.fireCallback(t.onSlideChangeStart, S, e), S.wrapperTransitionEnd(function() {
								S._queueStartCallbacks = !1
							})
						} else S.fireCallback(t.onSlideChangeStart, S, e);
					if(t.onSlideChangeEnd)
						if(S.support.transitions)
							if(t.queueEndCallbacks) {
								if(S._queueEndCallbacks) return;
								S._queueEndCallbacks = !0, S.wrapperTransitionEnd(function(n) {
									S.fireCallback(t.onSlideChangeEnd, n, e)
								})
							} else S.wrapperTransitionEnd(function(n) {
								S.fireCallback(t.onSlideChangeEnd, n, e)
							});
					else t.DOMAnimation || setTimeout(function() {
						S.fireCallback(t.onSlideChangeEnd, S, e)
					}, 10)
				}(n)
			}

			function w() {
				var e = S.paginationButtons;
				if(e)
					for(var t = 0; t < e.length; t++) S.h.removeEventListener(e[t], "click", b)
			}

			function b(e) {
				for(var n, i = e.target || e.srcElement, r = S.paginationButtons, o = 0; o < r.length; o++) i === r[o] && (n = o);
				t.autoplay && S.stopAutoplay(!0), S.swipeTo(n)
			}

			function x() {
				V = setTimeout(function() {
					t.loop ? (S.fixLoop(), S.swipeNext(!0, !0)) : S.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearTimeout(V), V = void 0) : S.swipeTo(0)), S.wrapperTransitionEnd(function() {
						void 0 !== V && x()
					})
				}, t.autoplay)
			}
			if(!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
				var T = HTMLElement.prototype;
				T.__defineGetter__ && T.__defineGetter__("outerHTML", function() {
					return(new XMLSerializer).serializeToString(this)
				})
			}
			if(window.getComputedStyle || (window.getComputedStyle = function(e) {
					return this.el = e, this.getPropertyValue = function(t) {
						var n = /(\-([a-z]){1})/g;
						return "float" === t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
							return arguments[2].toUpperCase()
						})), e.currentStyle[t] ? e.currentStyle[t] : null
					}, this
				}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
					for(var n = t || 0, i = this.length; i > n; n++)
						if(this[n] === e) return n;
					return -1
				}), (document.querySelectorAll || window.jQuery) && void 0 !== e && (e.nodeType || 0 !== n(e).length)) {
				var S = this;
				S.touches = {
					start: 0,
					startX: 0,
					startY: 0,
					current: 0,
					currentX: 0,
					currentY: 0,
					diff: 0,
					abs: 0
				}, S.positions = {
					start: 0,
					abs: 0,
					diff: 0,
					current: 0
				}, S.times = {
					start: 0,
					end: 0
				}, S.id = (new Date).getTime(), S.container = e.nodeType ? e : n(e)[0], S.isTouched = !1, S.isMoved = !1, S.activeIndex = 0, S.centerIndex = 0, S.activeLoaderIndex = 0, S.activeLoopIndex = 0, S.previousIndex = null, S.velocity = 0, S.snapGrid = [], S.slidesGrid = [], S.imagesToLoad = [], S.imagesLoaded = 0, S.wrapperLeft = 0, S.wrapperRight = 0, S.wrapperTop = 0, S.wrapperBottom = 0, S.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
				var C, E, A, k, L, _, N = {
					eventTarget: "wrapper",
					mode: "horizontal",
					touchRatio: 1,
					speed: 300,
					freeMode: !1,
					freeModeFluid: !1,
					momentumRatio: 1,
					momentumBounce: !0,
					momentumBounceRatio: 1,
					slidesPerView: 1,
					slidesPerGroup: 1,
					slidesPerViewFit: !0,
					simulateTouch: !0,
					followFinger: !0,
					shortSwipes: !0,
					longSwipesRatio: .5,
					moveStartThreshold: !1,
					onlyExternal: !1,
					createPagination: !0,
					pagination: !1,
					paginationElement: "span",
					paginationClickable: !1,
					paginationAsRange: !0,
					resistance: !0,
					scrollContainer: !1,
					preventLinks: !0,
					preventLinksPropagation: !1,
					noSwiping: !1,
					noSwipingClass: "swiper-no-swiping",
					initialSlide: 0,
					keyboardControl: !1,
					mousewheelControl: !1,
					mousewheelControlForceToAxis: !1,
					useCSS3Transforms: !0,
					autoplay: !1,
					autoplayDisableOnInteraction: !0,
					autoplayStopOnLast: !1,
					loop: !1,
					loopAdditionalSlides: 0,
					roundLengths: !1,
					calculateHeight: !1,
					cssWidthAndHeight: !1,
					updateOnImagesReady: !0,
					releaseFormElements: !0,
					watchActiveIndex: !1,
					visibilityFullFit: !1,
					offsetPxBefore: 0,
					offsetPxAfter: 0,
					offsetSlidesBefore: 0,
					offsetSlidesAfter: 0,
					centeredSlides: !1,
					queueStartCallbacks: !1,
					queueEndCallbacks: !1,
					autoResize: !0,
					resizeReInit: !1,
					DOMAnimation: !0,
					loader: {
						slides: [],
						slidesHTMLType: "inner",
						surroundGroups: 1,
						logic: "reload",
						loadAllSlides: !1
					},
					swipeToPrev: !0,
					swipeToNext: !0,
					slideElement: "div",
					slideClass: "swiper-slide",
					slideActiveClass: "swiper-slide-active",
					slideVisibleClass: "swiper-slide-visible",
					slideDuplicateClass: "swiper-slide-duplicate",
					wrapperClass: "swiper-wrapper",
					paginationElementClass: "swiper-pagination-switch",
					paginationActiveClass: "swiper-active-switch",
					paginationVisibleClass: "swiper-visible-switch"
				};
				for(var P in t = t || {}, N)
					if(P in t && "object" == typeof t[P])
						for(var M in N[P]) M in t[P] || (t[P][M] = N[P][M]);
					else P in t || (t[P] = N[P]);
				S.params = t, t.scrollContainer && (t.freeMode = !0, t.freeModeFluid = !0), t.loop && (t.resistance = "100%");
				var D = "horizontal" === t.mode,
					H = ["mousedown", "mousemove", "mouseup"];
				S.browser.ie10 && (H = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), S.browser.ie11 && (H = ["pointerdown", "pointermove", "pointerup"]), S.touchEvents = {
					touchStart: S.support.touch || !t.simulateTouch ? "touchstart" : H[0],
					touchMove: S.support.touch || !t.simulateTouch ? "touchmove" : H[1],
					touchEnd: S.support.touch || !t.simulateTouch ? "touchend" : H[2]
				};
				for(var I = S.container.childNodes.length - 1; I >= 0; I--)
					if(S.container.childNodes[I].className)
						for(var F = S.container.childNodes[I].className.split(/\s+/), j = 0; j < F.length; j++) F[j] === t.wrapperClass && (C = S.container.childNodes[I]);
				S.wrapper = C, S._extendSwiperSlide = function(e) {
					return e.append = function() {
						return t.loop ? e.insertAfter(S.slides.length - S.loopedSlides) : (S.wrapper.appendChild(e), S.reInit()), e
					}, e.prepend = function() {
						return t.loop ? (S.wrapper.insertBefore(e, S.slides[S.loopedSlides]), S.removeLoopedSlides(), S.calcSlides(), S.createLoop()) : S.wrapper.insertBefore(e, S.wrapper.firstChild), S.reInit(), e
					}, e.insertAfter = function(n) {
						return void 0 !== n && (t.loop ? ((i = S.slides[n + 1 + S.loopedSlides]) ? S.wrapper.insertBefore(e, i) : S.wrapper.appendChild(e), S.removeLoopedSlides(), S.calcSlides(), S.createLoop()) : (i = S.slides[n + 1], S.wrapper.insertBefore(e, i)), S.reInit(), e);
						var i
					}, e.clone = function() {
						return S._extendSwiperSlide(e.cloneNode(!0))
					}, e.remove = function() {
						S.wrapper.removeChild(e), S.reInit()
					}, e.html = function(t) {
						return void 0 === t ? e.innerHTML : (e.innerHTML = t, e)
					}, e.index = function() {
						for(var t, n = S.slides.length - 1; n >= 0; n--) e === S.slides[n] && (t = n);
						return t
					}, e.isActive = function() {
						return e.index() === S.activeIndex
					}, e.swiperSlideDataStorage || (e.swiperSlideDataStorage = {}), e.getData = function(t) {
						return e.swiperSlideDataStorage[t]
					}, e.setData = function(t, n) {
						return e.swiperSlideDataStorage[t] = n, e
					}, e.data = function(t, n) {
						return void 0 === n ? e.getAttribute("data-" + t) : (e.setAttribute("data-" + t, n), e)
					}, e.getWidth = function(t, n) {
						return S.h.getWidth(e, t, n)
					}, e.getHeight = function(t, n) {
						return S.h.getHeight(e, t, n)
					}, e.getOffset = function() {
						return S.h.getOffset(e)
					}, e
				}, S.calcSlides = function(e) {
					var n = !!S.slides && S.slides.length;
					S.slides = [], S.displaySlides = [];
					for(var i = 0; i < S.wrapper.childNodes.length; i++)
						if(S.wrapper.childNodes[i].className)
							for(var a = S.wrapper.childNodes[i].className.split(/\s+/), s = 0; s < a.length; s++) a[s] === t.slideClass && S.slides.push(S.wrapper.childNodes[i]);
					for(i = S.slides.length - 1; i >= 0; i--) S._extendSwiperSlide(S.slides[i]);
					!1 !== n && (n !== S.slides.length || e) && (o(), r(), S.updateActiveSlide(), S.params.pagination && S.createPagination(), S.callPlugins("numberOfSlidesChanged"))
				}, S.createSlide = function(e, n, i) {
					n = n || S.params.slideClass, i = i || t.slideElement;
					var r = document.createElement(i);
					return r.innerHTML = e || "", r.className = n, S._extendSwiperSlide(r)
				}, S.appendSlide = function(e, t, n) {
					return e ? e.nodeType ? S._extendSwiperSlide(e).append() : S.createSlide(e, t, n).append() : void 0
				}, S.prependSlide = function(e, t, n) {
					return e ? e.nodeType ? S._extendSwiperSlide(e).prepend() : S.createSlide(e, t, n).prepend() : void 0
				}, S.insertSlideAfter = function(e, t, n, i) {
					return void 0 !== e && (t.nodeType ? S._extendSwiperSlide(t).insertAfter(e) : S.createSlide(t, n, i).insertAfter(e))
				}, S.removeSlide = function(e) {
					if(S.slides[e]) {
						if(t.loop) {
							if(!S.slides[e + S.loopedSlides]) return !1;
							S.slides[e + S.loopedSlides].remove(), S.removeLoopedSlides(), S.calcSlides(), S.createLoop()
						} else S.slides[e].remove();
						return !0
					}
					return !1
				}, S.removeLastSlide = function() {
					return S.slides.length > 0 && (t.loop ? (S.slides[S.slides.length - 1 - S.loopedSlides].remove(), S.removeLoopedSlides(), S.calcSlides(), S.createLoop()) : S.slides[S.slides.length - 1].remove(), !0)
				}, S.removeAllSlides = function() {
					for(var e = S.slides.length, t = S.slides.length - 1; t >= 0; t--) S.slides[t].remove(), t === e - 1 && S.setWrapperTranslate(0)
				}, S.getSlide = function(e) {
					return S.slides[e]
				}, S.getLastSlide = function() {
					return S.slides[S.slides.length - 1]
				}, S.getFirstSlide = function() {
					return S.slides[0]
				}, S.activeSlide = function() {
					return S.slides[S.activeIndex]
				}, S.fireCallback = function() {
					var e = arguments[0];
					if("[object Array]" === Object.prototype.toString.call(e))
						for(var n = 0; n < e.length; n++) "function" == typeof e[n] && e[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
					else "[object String]" === Object.prototype.toString.call(e) ? t["on" + e] && S.fireCallback(t["on" + e], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : e(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
				}, S.addCallback = function(e, t) {
					var n;
					return this.params["on" + e] ? function(e) {
						return "[object Array]" === Object.prototype.toString.apply(e)
					}(this.params["on" + e]) ? this.params["on" + e].push(t) : "function" == typeof this.params["on" + e] ? (n = this.params["on" + e], this.params["on" + e] = [], this.params["on" + e].push(n), this.params["on" + e].push(t)) : void 0 : (this.params["on" + e] = [], this.params["on" + e].push(t))
				}, S.removeCallbacks = function(e) {
					S.params["on" + e] && (S.params["on" + e] = null)
				};
				var $ = [];
				for(var R in S.plugins)
					if(t[R]) {
						var O = S.plugins[R](S, t[R]);
						O && $.push(O)
					}
				S.callPlugins = function(e, t) {
					t || (t = {});
					for(var n = 0; n < $.length; n++) e in $[n] && $[n][e](t)
				}, !S.browser.ie10 && !S.browser.ie11 || t.onlyExternal || S.wrapper.classList.add("swiper-wp8-" + (D ? "horizontal" : "vertical")), t.freeMode && (S.container.className += " swiper-free-mode"), S.initialized = !1, S.init = function(e, n) {
					var i = S.h.getWidth(S.container, !1, t.roundLengths),
						r = S.h.getHeight(S.container, !1, t.roundLengths);
					if(i !== S.width || r !== S.height || e) {
						var o, a, s, l, u, c, d;
						S.width = i, S.height = r, _ = D ? i : r;
						var p = S.wrapper;
						if(e && S.calcSlides(n), "auto" === t.slidesPerView) {
							var f = 0,
								h = 0;
							t.slidesOffset > 0 && (p.style.paddingLeft = "", p.style.paddingRight = "", p.style.paddingTop = "", p.style.paddingBottom = ""), p.style.width = "", p.style.height = "", t.offsetPxBefore > 0 && (D ? S.wrapperLeft = t.offsetPxBefore : S.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 && (D ? S.wrapperRight = t.offsetPxAfter : S.wrapperBottom = t.offsetPxAfter), t.centeredSlides && (D ? (S.wrapperLeft = (_ - this.slides[0].getWidth(!0, t.roundLengths)) / 2, S.wrapperRight = (_ - S.slides[S.slides.length - 1].getWidth(!0, t.roundLengths)) / 2) : (S.wrapperTop = (_ - S.slides[0].getHeight(!0, t.roundLengths)) / 2, S.wrapperBottom = (_ - S.slides[S.slides.length - 1].getHeight(!0, t.roundLengths)) / 2)), D ? (S.wrapperLeft >= 0 && (p.style.paddingLeft = S.wrapperLeft + "px"), S.wrapperRight >= 0 && (p.style.paddingRight = S.wrapperRight + "px")) : (S.wrapperTop >= 0 && (p.style.paddingTop = S.wrapperTop + "px"), S.wrapperBottom >= 0 && (p.style.paddingBottom = S.wrapperBottom + "px")), c = 0;
							var g = 0;
							for(S.snapGrid = [], S.slidesGrid = [], s = 0, d = 0; d < S.slides.length; d++) {
								o = S.slides[d].getWidth(!0, t.roundLengths), a = S.slides[d].getHeight(!0, t.roundLengths), t.calculateHeight && (s = Math.max(s, a));
								var m = D ? o : a;
								if(t.centeredSlides) {
									var v = d === S.slides.length - 1 ? 0 : S.slides[d + 1].getWidth(!0, t.roundLengths),
										y = d === S.slides.length - 1 ? 0 : S.slides[d + 1].getHeight(!0, t.roundLengths),
										w = D ? v : y;
									if(m > _) {
										if(t.slidesPerViewFit) S.snapGrid.push(c + S.wrapperLeft), S.snapGrid.push(c + m - _ + S.wrapperLeft);
										else
											for(var b = 0; b <= Math.floor(m / (_ + S.wrapperLeft)); b++) S.snapGrid.push(0 === b ? c + S.wrapperLeft : c + S.wrapperLeft + _ * b);
										S.slidesGrid.push(c + S.wrapperLeft)
									} else S.snapGrid.push(g), S.slidesGrid.push(g);
									g += m / 2 + w / 2
								} else {
									if(m > _)
										if(t.slidesPerViewFit) S.snapGrid.push(c), S.snapGrid.push(c + m - _);
										else if(0 !== _)
										for(var x = 0; x <= Math.floor(m / _); x++) S.snapGrid.push(c + _ * x);
									else S.snapGrid.push(c);
									else S.snapGrid.push(c);
									S.slidesGrid.push(c)
								}
								c += m, f += o, h += a
							}
							t.calculateHeight && (S.height = s), D ? (A = f + S.wrapperRight + S.wrapperLeft, t.cssWidthAndHeight && "height" !== t.cssWidthAndHeight || (p.style.width = f + "px"), t.cssWidthAndHeight && "width" !== t.cssWidthAndHeight || (p.style.height = S.height + "px")) : (t.cssWidthAndHeight && "height" !== t.cssWidthAndHeight || (p.style.width = S.width + "px"), t.cssWidthAndHeight && "width" !== t.cssWidthAndHeight || (p.style.height = h + "px"), A = h + S.wrapperTop + S.wrapperBottom)
						} else if(t.scrollContainer) p.style.width = "", p.style.height = "", l = S.slides[0].getWidth(!0, t.roundLengths), u = S.slides[0].getHeight(!0, t.roundLengths), A = D ? l : u, p.style.width = l + "px", p.style.height = u + "px", E = D ? l : u;
						else {
							if(t.calculateHeight) {
								for(s = 0, u = 0, D || (S.container.style.height = ""), p.style.height = "", d = 0; d < S.slides.length; d++) S.slides[d].style.height = "", s = Math.max(S.slides[d].getHeight(!0), s), D || (u += S.slides[d].getHeight(!0));
								a = s, S.height = a, D ? u = a : (_ = a, S.container.style.height = _ + "px")
							} else a = D ? S.height : S.height / t.slidesPerView, t.roundLengths && (a = Math.ceil(a)), u = D ? S.height : S.slides.length * a;
							for(o = D ? S.width / t.slidesPerView : S.width, t.roundLengths && (o = Math.ceil(o)), l = D ? S.slides.length * o : S.width, E = D ? o : a, t.offsetSlidesBefore > 0 && (D ? S.wrapperLeft = E * t.offsetSlidesBefore : S.wrapperTop = E * t.offsetSlidesBefore), t.offsetSlidesAfter > 0 && (D ? S.wrapperRight = E * t.offsetSlidesAfter : S.wrapperBottom = E * t.offsetSlidesAfter), t.offsetPxBefore > 0 && (D ? S.wrapperLeft = t.offsetPxBefore : S.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 && (D ? S.wrapperRight = t.offsetPxAfter : S.wrapperBottom = t.offsetPxAfter), t.centeredSlides && (D ? (S.wrapperLeft = (_ - E) / 2, S.wrapperRight = (_ - E) / 2) : (S.wrapperTop = (_ - E) / 2, S.wrapperBottom = (_ - E) / 2)), D ? (S.wrapperLeft > 0 && (p.style.paddingLeft = S.wrapperLeft + "px"), S.wrapperRight > 0 && (p.style.paddingRight = S.wrapperRight + "px")) : (S.wrapperTop > 0 && (p.style.paddingTop = S.wrapperTop + "px"), S.wrapperBottom > 0 && (p.style.paddingBottom = S.wrapperBottom + "px")), A = D ? l + S.wrapperRight + S.wrapperLeft : u + S.wrapperTop + S.wrapperBottom, parseFloat(l) > 0 && (!t.cssWidthAndHeight || "height" === t.cssWidthAndHeight) && (p.style.width = l + "px"), parseFloat(u) > 0 && (!t.cssWidthAndHeight || "width" === t.cssWidthAndHeight) && (p.style.height = u + "px"), c = 0, S.snapGrid = [], S.slidesGrid = [], d = 0; d < S.slides.length; d++) S.snapGrid.push(c), S.slidesGrid.push(c), c += E, parseFloat(o) > 0 && (!t.cssWidthAndHeight || "height" === t.cssWidthAndHeight) && (S.slides[d].style.width = o + "px"), parseFloat(a) > 0 && (!t.cssWidthAndHeight || "width" === t.cssWidthAndHeight) && (S.slides[d].style.height = a + "px")
						}
						S.initialized ? (S.callPlugins("onInit"), t.onInit && S.fireCallback(t.onInit, S)) : (S.callPlugins("onFirstInit"), t.onFirstInit && S.fireCallback(t.onFirstInit, S)), S.initialized = !0
					}
				}, S.reInit = function(e) {
					S.init(!0, e)
				}, S.resizeFix = function(e) {
					S.callPlugins("beforeResizeFix"), S.init(t.resizeReInit || e), t.freeMode ? S.getWrapperTranslate() < -i() && (S.setWrapperTransition(0), S.setWrapperTranslate(-i())) : (S.swipeTo(t.loop ? S.activeLoopIndex : S.activeIndex, 0, !1), t.autoplay && (S.support.transitions && void 0 !== V ? void 0 !== V && (clearTimeout(V), V = void 0, S.startAutoplay()) : void 0 !== G && (clearInterval(G), G = void 0, S.startAutoplay()))), S.callPlugins("afterResizeFix")
				}, S.destroy = function(e) {
					var n = S.h.removeEventListener,
						i = "wrapper" === t.eventTarget ? S.wrapper : S.container;
					if(S.browser.ie10 || S.browser.ie11 ? (n(i, S.touchEvents.touchStart, f), n(document, S.touchEvents.touchMove, h), n(document, S.touchEvents.touchEnd, g)) : (S.support.touch && (n(i, "touchstart", f), n(i, "touchmove", h), n(i, "touchend", g)), t.simulateTouch && (n(i, "mousedown", f), n(document, "mousemove", h), n(document, "mouseup", g))), t.autoResize && n(window, "resize", S.resizeFix), o(), t.paginationClickable && w(), t.mousewheelControl && S._wheelEvent && n(S.container, S._wheelEvent, s), t.keyboardControl && n(document, "keydown", a), t.autoplay && S.stopAutoplay(), e) {
						S.wrapper.removeAttribute("style");
						for(var r = 0; r < S.slides.length; r++) S.slides[r].removeAttribute("style")
					}
					S.callPlugins("onDestroy"), window.jQuery && window.jQuery(S.container).data("swiper") && window.jQuery(S.container).removeData("swiper"), window.Zepto && window.Zepto(S.container).data("swiper") && window.Zepto(S.container).removeData("swiper"), S = null
				}, S.disableKeyboardControl = function() {
					t.keyboardControl = !1, S.h.removeEventListener(document, "keydown", a)
				}, S.enableKeyboardControl = function() {
					t.keyboardControl = !0, S.h.addEventListener(document, "keydown", a)
				};
				var B = (new Date).getTime();
				if(S.disableMousewheelControl = function() {
						return !!S._wheelEvent && (t.mousewheelControl = !1, S.h.removeEventListener(S.container, S._wheelEvent, s), !0)
					}, S.enableMousewheelControl = function() {
						return !!S._wheelEvent && (t.mousewheelControl = !0, S.h.addEventListener(S.container, S._wheelEvent, s), !0)
					}, t.grabCursor) {
					var W = S.container.style;
					W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab"
				}
				S.allowSlideClick = !0, S.allowLinks = !0;
				var q, z, Y, V, G, X = !1,
					K = !0;
				S.swipeNext = function(e, n) {
						void 0 === e && (e = !0), !n && t.loop && S.fixLoop(), !n && t.autoplay && S.stopAutoplay(!0), S.callPlugins("onSwipeNext");
						var r = S.getWrapperTranslate().toFixed(2),
							o = r;
						if("auto" === t.slidesPerView) {
							for(var a = 0; a < S.snapGrid.length; a++)
								if(-r >= S.snapGrid[a].toFixed(2) && -r < S.snapGrid[a + 1].toFixed(2)) {
									o = -S.snapGrid[a + 1];
									break
								}
						} else {
							var s = E * t.slidesPerGroup;
							o = -(Math.floor(Math.abs(r) / Math.floor(s)) * s + s)
						}
						return o < -i() && (o = -i()), o !== r && (y(o, "next", {
							runCallbacks: e
						}), !0)
					}, S.swipePrev = function(e, n) {
						void 0 === e && (e = !0), !n && t.loop && S.fixLoop(), !n && t.autoplay && S.stopAutoplay(!0), S.callPlugins("onSwipePrev");
						var i, r = Math.ceil(S.getWrapperTranslate());
						if("auto" === t.slidesPerView) {
							i = 0;
							for(var o = 1; o < S.snapGrid.length; o++) {
								if(-r === S.snapGrid[o]) {
									i = -S.snapGrid[o - 1];
									break
								}
								if(-r > S.snapGrid[o] && -r < S.snapGrid[o + 1]) {
									i = -S.snapGrid[o];
									break
								}
							}
						} else {
							var a = E * t.slidesPerGroup;
							i = -(Math.ceil(-r / a) - 1) * a
						}
						return i > 0 && (i = 0), i !== r && (y(i, "prev", {
							runCallbacks: e
						}), !0)
					}, S.swipeReset = function(e) {
						void 0 === e && (e = !0), S.callPlugins("onSwipeReset");
						var n, r = S.getWrapperTranslate(),
							o = E * t.slidesPerGroup;
						if(i(), "auto" === t.slidesPerView) {
							n = 0;
							for(var a = 0; a < S.snapGrid.length; a++) {
								if(-r === S.snapGrid[a]) return;
								if(-r >= S.snapGrid[a] && -r < S.snapGrid[a + 1]) {
									n = S.positions.diff > 0 ? -S.snapGrid[a + 1] : -S.snapGrid[a];
									break
								}
							} - r >= S.snapGrid[S.snapGrid.length - 1] && (n = -S.snapGrid[S.snapGrid.length - 1]), r <= -i() && (n = -i())
						} else n = 0 > r ? Math.round(r / o) * o : 0, r <= -i() && (n = -i());
						return t.scrollContainer && (n = 0 > r ? r : 0), n < -i() && (n = -i()), t.scrollContainer && _ > E && (n = 0), n !== r && (y(n, "reset", {
							runCallbacks: e
						}), !0)
					}, S.swipeTo = function(e, n, r) {
						e = parseInt(e, 10), S.callPlugins("onSwipeTo", {
							index: e,
							speed: n
						}), t.loop && (e += S.loopedSlides);
						var o, a = S.getWrapperTranslate();
						if(!(!isFinite(e) || e > S.slides.length - 1 || 0 > e)) return(o = "auto" === t.slidesPerView ? -S.slidesGrid[e] : -e * E) < -i() && (o = -i()), o !== a && (void 0 === r && (r = !0), y(o, "to", {
							index: e,
							speed: n,
							runCallbacks: r
						}), !0)
					}, S._queueStartCallbacks = !1, S._queueEndCallbacks = !1, S.updateActiveSlide = function(e) {
						if(S.initialized && 0 !== S.slides.length) {
							var n;
							if(S.previousIndex = S.activeIndex, void 0 === e && (e = S.getWrapperTranslate()), e > 0 && (e = 0), "auto" === t.slidesPerView) {
								if(S.activeIndex = S.slidesGrid.indexOf(-e), S.activeIndex < 0) {
									for(n = 0; n < S.slidesGrid.length - 1 && !(-e > S.slidesGrid[n] && -e < S.slidesGrid[n + 1]); n++);
									var i = Math.abs(S.slidesGrid[n] + e),
										r = Math.abs(S.slidesGrid[n + 1] + e);
									S.activeIndex = r >= i ? n : n + 1
								}
							} else S.activeIndex = Math[t.visibilityFullFit ? "ceil" : "round"](-e / E);
							if(S.activeIndex === S.slides.length && (S.activeIndex = S.slides.length - 1), S.activeIndex < 0 && (S.activeIndex = 0), S.slides[S.activeIndex]) {
								if(S.calcVisibleSlides(e), S.support.classList) {
									var o;
									for(n = 0; n < S.slides.length; n++)(o = S.slides[n]).classList.remove(t.slideActiveClass), S.visibleSlides.indexOf(o) >= 0 ? o.classList.add(t.slideVisibleClass) : o.classList.remove(t.slideVisibleClass);
									S.slides[S.activeIndex].classList.add(t.slideActiveClass)
								} else {
									var a = new RegExp("\\s*" + t.slideActiveClass),
										s = new RegExp("\\s*" + t.slideVisibleClass);
									for(n = 0; n < S.slides.length; n++) S.slides[n].className = S.slides[n].className.replace(a, "").replace(s, ""), S.visibleSlides.indexOf(S.slides[n]) >= 0 && (S.slides[n].className += " " + t.slideVisibleClass);
									S.slides[S.activeIndex].className += " " + t.slideActiveClass
								}
								if(t.loop) {
									var l = S.loopedSlides;
									S.activeLoopIndex = S.activeIndex - l, S.activeLoopIndex >= S.slides.length - 2 * l && (S.activeLoopIndex = S.slides.length - 2 * l - S.activeLoopIndex), S.activeLoopIndex < 0 && (S.activeLoopIndex = S.slides.length - 2 * l + S.activeLoopIndex), S.activeLoopIndex < 0 && (S.activeLoopIndex = 0)
								} else S.activeLoopIndex = S.activeIndex;
								t.pagination && S.updatePagination(e)
							}
						}
					}, S.createPagination = function(e) {
						if(t.paginationClickable && S.paginationButtons && w(), S.paginationContainer = t.pagination.nodeType ? t.pagination : n(t.pagination)[0], t.createPagination) {
							var i = "",
								r = S.slides.length;
							t.loop && (r -= 2 * S.loopedSlides);
							for(var o = 0; r > o; o++) i += "<" + t.paginationElement + ' class="' + t.paginationElementClass + '"></' + t.paginationElement + ">";
							S.paginationContainer.innerHTML = i
						}
						S.paginationButtons = n("." + t.paginationElementClass, S.paginationContainer), e || S.updatePagination(), S.callPlugins("onCreatePagination"), t.paginationClickable && function() {
							var e = S.paginationButtons;
							if(e)
								for(var t = 0; t < e.length; t++) S.h.addEventListener(e[t], "click", b)
						}()
					}, S.updatePagination = function(e) {
						if(t.pagination && !(S.slides.length < 1) && n("." + t.paginationActiveClass, S.paginationContainer)) {
							var i = S.paginationButtons;
							if(0 !== i.length) {
								for(var r = 0; r < i.length; r++) i[r].className = t.paginationElementClass;
								var o = t.loop ? S.loopedSlides : 0;
								if(t.paginationAsRange) {
									S.visibleSlides || S.calcVisibleSlides(e);
									var a, s = [];
									for(a = 0; a < S.visibleSlides.length; a++) {
										var l = S.slides.indexOf(S.visibleSlides[a]) - o;
										t.loop && 0 > l && (l = S.slides.length - 2 * S.loopedSlides + l), t.loop && l >= S.slides.length - 2 * S.loopedSlides && (l = S.slides.length - 2 * S.loopedSlides - l, l = Math.abs(l)), s.push(l)
									}
									for(a = 0; a < s.length; a++) i[s[a]] && (i[s[a]].className += " " + t.paginationVisibleClass);
									t.loop ? void 0 !== i[S.activeLoopIndex] && (i[S.activeLoopIndex].className += " " + t.paginationActiveClass) : i[S.activeIndex] && (i[S.activeIndex].className += " " + t.paginationActiveClass)
								} else t.loop ? i[S.activeLoopIndex] && (i[S.activeLoopIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass) : i[S.activeIndex] && (i[S.activeIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass)
							}
						}
					}, S.calcVisibleSlides = function(e) {
						var n = [],
							i = 0,
							r = 0,
							o = 0;
						D && S.wrapperLeft > 0 && (e += S.wrapperLeft), !D && S.wrapperTop > 0 && (e += S.wrapperTop);
						for(var a = 0; a < S.slides.length; a++) {
							o = (i += r) + (r = "auto" === t.slidesPerView ? D ? S.h.getWidth(S.slides[a], !0, t.roundLengths) : S.h.getHeight(S.slides[a], !0, t.roundLengths) : E);
							var s = !1;
							t.visibilityFullFit ? (i >= -e && -e + _ >= o && (s = !0), -e >= i && o >= -e + _ && (s = !0)) : (o > -e && -e + _ >= o && (s = !0), i >= -e && -e + _ > i && (s = !0), -e > i && o > -e + _ && (s = !0)), s && n.push(S.slides[a])
						}
						0 === n.length && (n = [S.slides[S.activeIndex]]), S.visibleSlides = n
					}, S.startAutoplay = function() {
						if(S.support.transitions) {
							if(void 0 !== V) return !1;
							if(!t.autoplay) return;
							S.callPlugins("onAutoplayStart"), t.onAutoplayStart && S.fireCallback(t.onAutoplayStart, S), x()
						} else {
							if(void 0 !== G) return !1;
							if(!t.autoplay) return;
							S.callPlugins("onAutoplayStart"), t.onAutoplayStart && S.fireCallback(t.onAutoplayStart, S), G = setInterval(function() {
								t.loop ? (S.fixLoop(), S.swipeNext(!0, !0)) : S.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearInterval(G), G = void 0) : S.swipeTo(0))
							}, t.autoplay)
						}
					}, S.stopAutoplay = function(e) {
						if(S.support.transitions) {
							if(!V) return;
							V && clearTimeout(V), V = void 0, e && !t.autoplayDisableOnInteraction && S.wrapperTransitionEnd(function() {
								x()
							}), S.callPlugins("onAutoplayStop"), t.onAutoplayStop && S.fireCallback(t.onAutoplayStop, S)
						} else G && clearInterval(G), G = void 0, S.callPlugins("onAutoplayStop"), t.onAutoplayStop && S.fireCallback(t.onAutoplayStop, S)
					}, S.loopCreated = !1, S.removeLoopedSlides = function() {
						if(S.loopCreated)
							for(var e = 0; e < S.slides.length; e++) !0 === S.slides[e].getData("looped") && S.wrapper.removeChild(S.slides[e])
					}, S.createLoop = function() {
						if(0 !== S.slides.length) {
							S.loopedSlides = "auto" === t.slidesPerView ? t.loopedSlides || 1 : Math.floor(t.slidesPerView) + t.loopAdditionalSlides, S.loopedSlides > S.slides.length && (S.loopedSlides = S.slides.length);
							var e, n = "",
								i = "",
								r = "",
								o = S.slides.length,
								a = Math.floor(S.loopedSlides / o),
								s = S.loopedSlides % o;
							for(e = 0; a * o > e; e++) {
								var l = e;
								e >= o && (l = e - o * Math.floor(e / o)), r += S.slides[l].outerHTML
							}
							for(e = 0; s > e; e++) i += v(t.slideDuplicateClass, S.slides[e].outerHTML);
							for(e = o - s; o > e; e++) n += v(t.slideDuplicateClass, S.slides[e].outerHTML);
							var u = n + r + C.innerHTML + r + i;
							for(C.innerHTML = u, S.loopCreated = !0, S.calcSlides(), e = 0; e < S.slides.length; e++)(e < S.loopedSlides || e >= S.slides.length - S.loopedSlides) && S.slides[e].setData("looped", !0);
							S.callPlugins("onCreateLoop")
						}
					}, S.fixLoop = function() {
						var e;
						S.activeIndex < S.loopedSlides ? (e = S.slides.length - 3 * S.loopedSlides + S.activeIndex, S.swipeTo(e, 0, !1)) : ("auto" === t.slidesPerView && S.activeIndex >= 2 * S.loopedSlides || S.activeIndex > S.slides.length - 2 * t.slidesPerView) && (e = -S.slides.length + S.activeIndex + S.loopedSlides, S.swipeTo(e, 0, !1))
					}, S.loadSlides = function() {
						var e = "";
						S.activeLoaderIndex = 0;
						for(var n = t.loader.slides, i = t.loader.loadAllSlides ? n.length : t.slidesPerView * (1 + t.loader.surroundGroups), r = 0; i > r; r++) e += "outer" === t.loader.slidesHTMLType ? n[r] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + r + '">' + n[r] + "</" + t.slideElement + ">";
						S.wrapper.innerHTML = e, S.calcSlides(!0), t.loader.loadAllSlides || S.wrapperTransitionEnd(S.reloadSlides, !0)
					}, S.reloadSlides = function() {
						var e = t.loader.slides,
							n = parseInt(S.activeSlide().data("swiperindex"), 10);
						if(!(0 > n || n > e.length - 1)) {
							S.activeLoaderIndex = n;
							var i, r = Math.max(0, n - t.slidesPerView * t.loader.surroundGroups),
								o = Math.min(n + t.slidesPerView * (1 + t.loader.surroundGroups) - 1, e.length - 1);
							if(n > 0) {
								var a = -E * (n - r);
								S.setWrapperTranslate(a), S.setWrapperTransition(0)
							}
							if("reload" === t.loader.logic) {
								S.wrapper.innerHTML = "";
								var s = "";
								for(i = r; o >= i; i++) s += "outer" === t.loader.slidesHTMLType ? e[i] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + i + '">' + e[i] + "</" + t.slideElement + ">";
								S.wrapper.innerHTML = s
							} else {
								var l = 1e3,
									u = 0;
								for(i = 0; i < S.slides.length; i++) {
									var c = S.slides[i].data("swiperindex");
									r > c || c > o ? S.wrapper.removeChild(S.slides[i]) : (l = Math.min(c, l), u = Math.max(c, u))
								}
								for(i = r; o >= i; i++) {
									var d;
									l > i && ((d = document.createElement(t.slideElement)).className = t.slideClass, d.setAttribute("data-swiperindex", i), d.innerHTML = e[i], S.wrapper.insertBefore(d, S.wrapper.firstChild)), i > u && ((d = document.createElement(t.slideElement)).className = t.slideClass, d.setAttribute("data-swiperindex", i), d.innerHTML = e[i], S.wrapper.appendChild(d))
								}
							}
							S.reInit(!0)
						}
					}, S.calcSlides(), t.loader.slides.length > 0 && 0 === S.slides.length && S.loadSlides(), t.loop && S.createLoop(), S.init(),
					function() {
						function e(e) {
							var n, i, r = function() {
								void 0 !== S && null !== S && (void 0 !== S.imagesLoaded && S.imagesLoaded++, S.imagesLoaded === S.imagesToLoad.length && (S.reInit(), t.onImagesReady && S.fireCallback(t.onImagesReady, S)))
							};
							e.complete ? r() : (i = e.currentSrc || e.getAttribute("src")) ? ((n = new Image).onload = r, n.onerror = r, n.src = i) : r()
						}
						var i = S.h.addEventListener,
							o = "wrapper" === t.eventTarget ? S.wrapper : S.container;
						if(S.browser.ie10 || S.browser.ie11 ? (i(o, S.touchEvents.touchStart, f), i(document, S.touchEvents.touchMove, h), i(document, S.touchEvents.touchEnd, g)) : (S.support.touch && (i(o, "touchstart", f), i(o, "touchmove", h), i(o, "touchend", g)), t.simulateTouch && (i(o, "mousedown", f), i(document, "mousemove", h), i(document, "mouseup", g))), t.autoResize && i(window, "resize", S.resizeFix), r(), S._wheelEvent = !1, t.mousewheelControl) {
							if(void 0 !== document.onmousewheel && (S._wheelEvent = "mousewheel"), !S._wheelEvent) try {
								new WheelEvent("wheel"), S._wheelEvent = "wheel"
							} catch(e) {}
							S._wheelEvent || (S._wheelEvent = "DOMMouseScroll"), S._wheelEvent && i(S.container, S._wheelEvent, s)
						}
						if(t.keyboardControl && i(document, "keydown", a), t.updateOnImagesReady) {
							S.imagesToLoad = n("img", S.container);
							for(var l = 0; l < S.imagesToLoad.length; l++) e(S.imagesToLoad[l])
						}
					}(), t.pagination && S.createPagination(!0), t.loop || t.initialSlide > 0 ? S.swipeTo(t.initialSlide, 0, !1) : S.updateActiveSlide(0), t.autoplay && S.startAutoplay(), S.centerIndex = S.activeIndex, t.onSwiperCreated && S.fireCallback(t.onSwiperCreated, S), S.callPlugins("onSwiperCreated")
			}
		};
		i.prototype = {
			plugins: {},
			wrapperTransitionEnd: function(e, t) {
				"use strict";

				function n(s) {
					if(s.target === o && (e(r), r.params.queueEndCallbacks && (r._queueEndCallbacks = !1), !t))
						for(i = 0; i < a.length; i++) r.h.removeEventListener(o, a[i], n)
				}
				var i, r = this,
					o = r.wrapper,
					a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
				if(e)
					for(i = 0; i < a.length; i++) r.h.addEventListener(o, a[i], n)
			},
			getWrapperTranslate: function(e) {
				"use strict";
				var t, n, i, r, o = this.wrapper;
				return void 0 === e && (e = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (i = window.getComputedStyle(o, null), window.WebKitCSSMatrix ? r = new WebKitCSSMatrix("none" === i.webkitTransform ? "" : i.webkitTransform) : t = (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === e && (n = window.WebKitCSSMatrix ? r.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === e && (n = window.WebKitCSSMatrix ? r.m42 : parseFloat(16 === t.length ? t[13] : t[5]))) : ("x" === e && (n = parseFloat(o.style.left, 10) || 0), "y" === e && (n = parseFloat(o.style.top, 10) || 0)), n || 0
			},
			setWrapperTranslate: function(e, t, n) {
				"use strict";
				var i, r = this.wrapper.style,
					o = {
						x: 0,
						y: 0,
						z: 0
					};
				3 === arguments.length ? (o.x = e, o.y = t, o.z = n) : (void 0 === t && (t = "horizontal" === this.params.mode ? "x" : "y"), o[t] = e), this.support.transforms && this.params.useCSS3Transforms ? (i = this.support.transforms3d ? "translate3d(" + o.x + "px, " + o.y + "px, " + o.z + "px)" : "translate(" + o.x + "px, " + o.y + "px)", r.webkitTransform = r.MsTransform = r.msTransform = r.MozTransform = r.OTransform = r.transform = i) : (r.left = o.x + "px", r.top = o.y + "px"), this.callPlugins("onSetWrapperTransform", o), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, o)
			},
			setWrapperTransition: function(e) {
				"use strict";
				var t = this.wrapper.style;
				t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
					duration: e
				}), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, e)
			},
			h: {
				getWidth: function(e, t, n) {
					"use strict";
					var i = window.getComputedStyle(e, null).getPropertyValue("width"),
						r = parseFloat(i);
					return(isNaN(r) || i.indexOf("%") > 0 || 0 > r) && (r = e.offsetWidth - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), t && (r += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), n ? Math.ceil(r) : r
				},
				getHeight: function(e, t, n) {
					"use strict";
					if(t) return e.offsetHeight;
					var i = window.getComputedStyle(e, null).getPropertyValue("height"),
						r = parseFloat(i);
					return(isNaN(r) || i.indexOf("%") > 0 || 0 > r) && (r = e.offsetHeight - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), t && (r += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), n ? Math.ceil(r) : r
				},
				getOffset: function(e) {
					"use strict";
					var t = e.getBoundingClientRect(),
						n = document.body,
						i = e.clientTop || n.clientTop || 0,
						r = e.clientLeft || n.clientLeft || 0,
						o = window.pageYOffset || e.scrollTop,
						a = window.pageXOffset || e.scrollLeft;
					return document.documentElement && !window.pageYOffset && (o = document.documentElement.scrollTop, a = document.documentElement.scrollLeft), {
						top: t.top + o - i,
						left: t.left + a - r
					}
				},
				windowWidth: function() {
					"use strict";
					return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
				},
				windowHeight: function() {
					"use strict";
					return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
				},
				windowScroll: function() {
					"use strict";
					return "undefined" != typeof pageYOffset ? {
						left: window.pageXOffset,
						top: window.pageYOffset
					} : document.documentElement ? {
						left: document.documentElement.scrollLeft,
						top: document.documentElement.scrollTop
					} : void 0
				},
				addEventListener: function(e, t, n, i) {
					"use strict";
					void 0 === i && (i = !1), e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
				},
				removeEventListener: function(e, t, n, i) {
					"use strict";
					void 0 === i && (i = !1), e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
				}
			},
			setTransform: function(e, t) {
				"use strict";
				var n = e.style;
				n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = t
			},
			setTranslate: function(e, t) {
				"use strict";
				var n = e.style,
					i = t.x || 0,
					r = t.y || 0,
					o = t.z || 0,
					a = this.support.transforms3d ? "translate3d(" + i + "px," + r + "px," + o + "px)" : "translate(" + i + "px," + r + "px)";
				n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = a, this.support.transforms || (n.left = i + "px", n.top = r + "px")
			},
			setTransition: function(e, t) {
				"use strict";
				var n = e.style;
				n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = t + "ms"
			},
			support: {
				touch: window.Modernizr && !0 === Modernizr.touch || function() {
					"use strict";
					return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
				}(),
				transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
					"use strict";
					var e = document.createElement("div").style;
					return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
				}(),
				transforms: window.Modernizr && !0 === Modernizr.csstransforms || function() {
					"use strict";
					var e = document.createElement("div").style;
					return "transform" in e || "WebkitTransform" in e || "MozTransform" in e || "msTransform" in e || "MsTransform" in e || "OTransform" in e
				}(),
				transitions: window.Modernizr && !0 === Modernizr.csstransitions || function() {
					"use strict";
					var e = document.createElement("div").style;
					return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "MsTransition" in e || "OTransition" in e
				}(),
				classList: function() {
					"use strict";
					return "classList" in document.createElement("div")
				}()
			},
			browser: {
				ie8: function() {
					"use strict";
					var e = -1;
					if("Microsoft Internet Explorer" === navigator.appName) {
						var t = navigator.userAgent;
						null !== new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(t) && (e = parseFloat(RegExp.$1))
					}
					return -1 !== e && 9 > e
				}(),
				ie10: window.navigator.msPointerEnabled,
				ie11: window.navigator.pointerEnabled
			}
		}, (window.jQuery || window.Zepto) && function(e) {
			"use strict";
			e.fn.swiper = function(t) {
				var n;
				return this.each(function(r) {
					var o = e(this),
						a = new i(o[0], t);
					r || (n = a), o.data("swiper", a)
				}), n
			}
		}(window.jQuery || window.Zepto), e.exports = i
	}, function(e, t, n) {}, function(e, t, n) {}, function(e, t) {
		(function() {
			var e = jQuery;
			e.fn.simpleScroll = function(t, n, i) {
				var r = e(this).attr("id"),
					o = e("#" + r);

				function a() {
					return o.find(".scroll-item").length
				}

				function s(t, n) {
					o.find(".scroll-item").css("display", "none");
					for(var i = o.find(".scroll-item"), r = t - 1; r <= n - 1; r++) e(i[r]).css("visibility", "visible"), e(i[r]).fadeIn("slow")
				}
				s(t, n), o.find(".img-next").click(function() {
					var r = a();
					n + i >= r + i || s(t += i, n += i), n >= r && e(this).removeClass("true"), t > 0 && o.find(".img-prev").addClass("true")
				}), o.find(".img-prev").click(function() {
					var r = a();
					t - i <= 0 || s(t -= i, n -= i), 1 == t && e(this).removeClass("true"), n < r && o.find(".img-next").addClass("true")
				})
			}
		}).call(this)
	}, function(e, t, n) {
		"use strict";

		function i(e) {
			document.getElementById(e.el);
			var t = document.getElementById(e.btnplay),
				n = document.getElementById(e.poster);
			t && t.addEventListener("click", function() {
				n.style.display = "none", t.style.display = "none", new YKU.Player(e.el, {
					styleid: "0",
					autoplay: !0,
					client_id: "5c30db50b42ae8c4",
					vid: $("#" + e.btnplay).data("vid"),
					newPlayer: !0
				})
			}, !1)
		}
		n.d(t, "a", function() {
			return i
		}), n(49)
	}, function(e, t) {
		$(window).on("load", function() {
			$(window).scroll(function(e) {
				(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= 20 ? ($("header").fadeOut("fast"), $(".header-area").css({
					position: "sticky",
					top: "0",
					background: "white",
					opacity: "1",
					color: "#646464"
				}), $(".header-area").find(".header").css({
					color: "#646464"
				}), $(".header-area").find("a").css({
					color: "#646464"
				}), $(".header-area").css({
					"box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.1)"
				})) : ($("header").fadeIn("fast"), $(".header-area").css({
					position: "absolute",
					top: "60px",
					background: "transparent",
					opacity: "1",
					color: "#FFFFFF"
				}), $(".header-area").find(".header").css({
					color: "#FFFFFF"
				}), $(".header-area").find("a").css({
					color: "#FFFFFF"
				}), $(".header-area").css({
					"box-shadow": "none"
				}))
			})
		})
	}, function(e, t, n) {}, function(e, t) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch(e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, , function(e, t, n) {}, function(e, t, n) {
		"use strict";
		n.r(t), n.d(t, "createMap", function() {
			return o
		});
		var i = null;

		function r(e) {
			var t = new BMap.Map(e.el),
				n = new BMap.Point(e.point.longitude, e.point.latitude);
			t.centerAndZoom(n, e.level), t.enableScrollWheelZoom(), t.enableContinuousZoom();
			var r = new BMap.Marker(n);
			t.addOverlay(r), r.setAnimation(BMAP_ANIMATION_BOUNCE), i = window.setTimeout(function() {
				t.panTo(new BMap.Point(e.point.longitude, e.point.latitude))
			}, 2e3);
			var o = new BMap.NavigationControl({
				anchor: BMAP_ANCHOR_TOP_LEFT,
				type: BMAP_NAVIGATION_CONTROL_LARGE,
				enableGeolocation: !0
			});
			t.addControl(o);
			var a = new BMap.GeolocationControl;
			a.addEventListener("locationSuccess", function(e) {
				var t = "";
				t += e.addressComponent.province, t += e.addressComponent.city, t += e.addressComponent.district, t += e.addressComponent.street, t += e.addressComponent.streetNumber, alert("褰撳墠瀹氫綅鍦板潃涓猴細" + t)
			}), a.addEventListener("locationError", function(e) {
				alert(e.message)
			}), t.addControl(a)
		}

		function o(e) {
			for(var t = 0; t < $(e.btnshow).length; t++) $($(e.btnshow)[t]).click(function() {
				e.point.latitude = $(this).data("lat"), e.point.longitude = $(this).data("lon"), $(e.showel).show(), r(e)
			});
			$.map(e.close, function(t, n) {
				$(t).click(function() {
					$(e.showel).hide(), clearTimeout(i)
				})
			})
		}
	}, function(e, t, n) {
		"use strict";

		function i(e, t, n) {
			for(var i = 0; i < $(e).length; i++) $($(e)[i]).click(function() {
				".sendtel" == e && ($("#result").show(), $("#success").hide()), $("input[name=address]").val($(this).attr("data-address")), $("input[name=shop]").val($(this).attr("data-shop")), $(t).show()
			});
			$.map(n, function(e, n) {
				$(e).click(function() {
					$(t).hide(), $("input").val(""), $("button.btn").addClass("btn-disabled"), $("button.btn").attr("disabled", "true")
				})
			})
		}
		n.r(t), n.d(t, "myalert", function() {
			return i
		})
	}, , , , function(e, t, n) {
		(function(t) {
			e.exports = t.$ = n(22)
		}).call(this, n(13))
	}, function(e, t, n) {
		var i, r, o;
		/*!
		 * jQuery JavaScript Library v1.12.4
		 * http://jquery.com/
		 *
		 * Includes Sizzle.js
		 * http://sizzlejs.com/
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 *
		 * Date: 2016-05-20T17:17Z
		 */
		/*!
		 * jQuery JavaScript Library v1.12.4
		 * http://jquery.com/
		 *
		 * Includes Sizzle.js
		 * http://sizzlejs.com/
		 *
		 * Copyright jQuery Foundation and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 *
		 * Date: 2016-05-20T17:17Z
		 */
		r = "undefined" != typeof window ? window : this, o = function(n, r) {
			var o = [],
				a = n.document,
				s = o.slice,
				l = o.concat,
				u = o.push,
				c = o.indexOf,
				d = {},
				p = d.toString,
				f = d.hasOwnProperty,
				h = {},
				g = function(e, t) {
					return new g.fn.init(e, t)
				},
				m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
				v = /^-ms-/,
				y = /-([\da-z])/gi,
				w = function(e, t) {
					return t.toUpperCase()
				};

			function b(e) {
				var t = !!e && "length" in e && e.length,
					n = g.type(e);
				return "function" !== n && !g.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
			}
			g.fn = g.prototype = {
				jquery: "1.12.4",
				constructor: g,
				selector: "",
				length: 0,
				toArray: function() {
					return s.call(this)
				},
				get: function(e) {
					return null != e ? e < 0 ? this[e + this.length] : this[e] : s.call(this)
				},
				pushStack: function(e) {
					var t = g.merge(this.constructor(), e);
					return t.prevObject = this, t.context = this.context, t
				},
				each: function(e) {
					return g.each(this, e)
				},
				map: function(e) {
					return this.pushStack(g.map(this, function(t, n) {
						return e.call(t, n, t)
					}))
				},
				slice: function() {
					return this.pushStack(s.apply(this, arguments))
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				eq: function(e) {
					var t = this.length,
						n = +e + (e < 0 ? t : 0);
					return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
				},
				end: function() {
					return this.prevObject || this.constructor()
				},
				push: u,
				sort: o.sort,
				splice: o.splice
			}, g.extend = g.fn.extend = function() {
				var e, t, n, i, r, o, a = arguments[0] || {},
					s = 1,
					l = arguments.length,
					u = !1;
				for("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || g.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
					if(null != (r = arguments[s]))
						for(i in r) e = a[i], a !== (n = r[i]) && (u && n && (g.isPlainObject(n) || (t = g.isArray(n))) ? (t ? (t = !1, o = e && g.isArray(e) ? e : []) : o = e && g.isPlainObject(e) ? e : {}, a[i] = g.extend(u, o, n)) : void 0 !== n && (a[i] = n));
				return a
			}, g.extend({
				expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function(e) {
					throw new Error(e)
				},
				noop: function() {},
				isFunction: function(e) {
					return "function" === g.type(e)
				},
				isArray: Array.isArray || function(e) {
					return "array" === g.type(e)
				},
				isWindow: function(e) {
					return null != e && e == e.window
				},
				isNumeric: function(e) {
					var t = e && e.toString();
					return !g.isArray(e) && t - parseFloat(t) + 1 >= 0
				},
				isEmptyObject: function(e) {
					var t;
					for(t in e) return !1;
					return !0
				},
				isPlainObject: function(e) {
					var t;
					if(!e || "object" !== g.type(e) || e.nodeType || g.isWindow(e)) return !1;
					try {
						if(e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
					} catch(e) {
						return !1
					}
					if(!h.ownFirst)
						for(t in e) return f.call(e, t);
					for(t in e);
					return void 0 === t || f.call(e, t)
				},
				type: function(e) {
					return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
				},
				globalEval: function(e) {
					e && g.trim(e) && (n.execScript || function(e) {
						n.eval.call(n, e)
					})(e)
				},
				camelCase: function(e) {
					return e.replace(v, "ms-").replace(y, w)
				},
				nodeName: function(e, t) {
					return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
				},
				each: function(e, t) {
					var n, i = 0;
					if(b(e))
						for(n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
					else
						for(i in e)
							if(!1 === t.call(e[i], i, e[i])) break;
					return e
				},
				trim: function(e) {
					return null == e ? "" : (e + "").replace(m, "")
				},
				makeArray: function(e, t) {
					var n = t || [];
					return null != e && (b(Object(e)) ? g.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
				},
				inArray: function(e, t, n) {
					var i;
					if(t) {
						if(c) return c.call(t, e, n);
						for(i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
							if(n in t && t[n] === e) return n
					}
					return -1
				},
				merge: function(e, t) {
					for(var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
					if(n != n)
						for(; void 0 !== t[i];) e[r++] = t[i++];
					return e.length = r, e
				},
				grep: function(e, t, n) {
					for(var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
					return i
				},
				map: function(e, t, n) {
					var i, r, o = 0,
						a = [];
					if(b(e))
						for(i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
					else
						for(o in e) null != (r = t(e[o], o, n)) && a.push(r);
					return l.apply([], a)
				},
				guid: 1,
				proxy: function(e, t) {
					var n, i, r;
					if("string" == typeof t && (r = e[t], t = e, e = r), g.isFunction(e)) return n = s.call(arguments, 2), (i = function() {
						return e.apply(t || this, n.concat(s.call(arguments)))
					}).guid = e.guid = e.guid || g.guid++, i
				},
				now: function() {
					return +new Date
				},
				support: h
			}), "function" == typeof Symbol && (g.fn[Symbol.iterator] = o[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
				d["[object " + t + "]"] = t.toLowerCase()
			});
			var x =
				/*!
				 * Sizzle CSS Selector Engine v2.2.1
				 * http://sizzlejs.com/
				 *
				 * Copyright jQuery Foundation and other contributors
				 * Released under the MIT license
				 * http://jquery.org/license
				 *
				 * Date: 2015-10-17
				 */
				function(e) {
					var t, n, i, r, o, a, s, l, u, c, d, p, f, h, g, m, v, y, w, b = "sizzle" + 1 * new Date,
						x = e.document,
						T = 0,
						S = 0,
						C = oe(),
						E = oe(),
						A = oe(),
						k = function(e, t) {
							return e === t && (d = !0), 0
						},
						L = 1 << 31,
						_ = {}.hasOwnProperty,
						N = [],
						P = N.pop,
						M = N.push,
						D = N.push,
						H = N.slice,
						I = function(e, t) {
							for(var n = 0, i = e.length; n < i; n++)
								if(e[n] === t) return n;
							return -1
						},
						F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
						j = "[\\x20\\t\\r\\n\\f]",
						$ = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
						R = "\\[" + j + "*(" + $ + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + j + "*\\]",
						O = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
						B = new RegExp(j + "+", "g"),
						W = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
						q = new RegExp("^" + j + "*," + j + "*"),
						z = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
						Y = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
						V = new RegExp(O),
						G = new RegExp("^" + $ + "$"),
						X = {
							ID: new RegExp("^#(" + $ + ")"),
							CLASS: new RegExp("^\\.(" + $ + ")"),
							TAG: new RegExp("^(" + $ + "|[*])"),
							ATTR: new RegExp("^" + R),
							PSEUDO: new RegExp("^" + O),
							CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
							bool: new RegExp("^(?:" + F + ")$", "i"),
							needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
						},
						K = /^(?:input|select|textarea|button)$/i,
						U = /^h\d$/i,
						Q = /^[^{]+\{\s*\[native \w/,
						J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
						Z = /[+~]/,
						ee = /'|\\/g,
						te = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
						ne = function(e, t, n) {
							var i = "0x" + t - 65536;
							return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
						},
						ie = function() {
							p()
						};
					try {
						D.apply(N = H.call(x.childNodes), x.childNodes), N[x.childNodes.length].nodeType
					} catch(e) {
						D = {
							apply: N.length ? function(e, t) {
								M.apply(e, H.call(t))
							} : function(e, t) {
								for(var n = e.length, i = 0; e[n++] = t[i++];);
								e.length = n - 1
							}
						}
					}

					function re(e, t, i, r) {
						var o, s, u, c, d, h, v, y, T = t && t.ownerDocument,
							S = t ? t.nodeType : 9;
						if(i = i || [], "string" != typeof e || !e || 1 !== S && 9 !== S && 11 !== S) return i;
						if(!r && ((t ? t.ownerDocument || t : x) !== f && p(t), t = t || f, g)) {
							if(11 !== S && (h = J.exec(e)))
								if(o = h[1]) {
									if(9 === S) {
										if(!(u = t.getElementById(o))) return i;
										if(u.id === o) return i.push(u), i
									} else if(T && (u = T.getElementById(o)) && w(t, u) && u.id === o) return i.push(u), i
								} else {
									if(h[2]) return D.apply(i, t.getElementsByTagName(e)), i;
									if((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(o)), i
								}
							if(n.qsa && !A[e + " "] && (!m || !m.test(e))) {
								if(1 !== S) T = t, y = e;
								else if("object" !== t.nodeName.toLowerCase()) {
									for((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = b), s = (v = a(e)).length, d = G.test(c) ? "#" + c : "[id='" + c + "']"; s--;) v[s] = d + " " + ge(v[s]);
									y = v.join(","), T = Z.test(e) && fe(t.parentNode) || t
								}
								if(y) try {
									return D.apply(i, T.querySelectorAll(y)), i
								} catch(e) {} finally {
									c === b && t.removeAttribute("id")
								}
							}
						}
						return l(e.replace(W, "$1"), t, i, r)
					}

					function oe() {
						var e = [];
						return function t(n, r) {
							return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
						}
					}

					function ae(e) {
						return e[b] = !0, e
					}

					function se(e) {
						var t = f.createElement("div");
						try {
							return !!e(t)
						} catch(e) {
							return !1
						} finally {
							t.parentNode && t.parentNode.removeChild(t), t = null
						}
					}

					function le(e, t) {
						for(var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
					}

					function ue(e, t) {
						var n = t && e,
							i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || L) - (~e.sourceIndex || L);
						if(i) return i;
						if(n)
							for(; n = n.nextSibling;)
								if(n === t) return -1;
						return e ? 1 : -1
					}

					function ce(e) {
						return function(t) {
							return "input" === t.nodeName.toLowerCase() && t.type === e
						}
					}

					function de(e) {
						return function(t) {
							var n = t.nodeName.toLowerCase();
							return("input" === n || "button" === n) && t.type === e
						}
					}

					function pe(e) {
						return ae(function(t) {
							return t = +t, ae(function(n, i) {
								for(var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
							})
						})
					}

					function fe(e) {
						return e && void 0 !== e.getElementsByTagName && e
					}
					for(t in n = re.support = {}, o = re.isXML = function(e) {
							var t = e && (e.ownerDocument || e).documentElement;
							return !!t && "HTML" !== t.nodeName
						}, p = re.setDocument = function(e) {
							var t, r, a = e ? e.ownerDocument || e : x;
							return a !== f && 9 === a.nodeType && a.documentElement ? (h = (f = a).documentElement, g = !o(f), (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = se(function(e) {
								return e.className = "i", !e.getAttribute("className")
							}), n.getElementsByTagName = se(function(e) {
								return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
							}), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = se(function(e) {
								return h.appendChild(e).id = b, !f.getElementsByName || !f.getElementsByName(b).length
							}), n.getById ? (i.find.ID = function(e, t) {
								if(void 0 !== t.getElementById && g) {
									var n = t.getElementById(e);
									return n ? [n] : []
								}
							}, i.filter.ID = function(e) {
								var t = e.replace(te, ne);
								return function(e) {
									return e.getAttribute("id") === t
								}
							}) : (delete i.find.ID, i.filter.ID = function(e) {
								var t = e.replace(te, ne);
								return function(e) {
									var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
									return n && n.value === t
								}
							}), i.find.TAG = n.getElementsByTagName ? function(e, t) {
								return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
							} : function(e, t) {
								var n, i = [],
									r = 0,
									o = t.getElementsByTagName(e);
								if("*" === e) {
									for(; n = o[r++];) 1 === n.nodeType && i.push(n);
									return i
								}
								return o
							}, i.find.CLASS = n.getElementsByClassName && function(e, t) {
								if(void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
							}, v = [], m = [], (n.qsa = Q.test(f.querySelectorAll)) && (se(function(e) {
								h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
							}), se(function(e) {
								var t = f.createElement("input");
								t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
							})), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function(e) {
								n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", O)
							}), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), w = t || Q.test(h.contains) ? function(e, t) {
								var n = 9 === e.nodeType ? e.documentElement : e,
									i = t && t.parentNode;
								return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
							} : function(e, t) {
								if(t)
									for(; t = t.parentNode;)
										if(t === e) return !0;
								return !1
							}, k = t ? function(e, t) {
								if(e === t) return d = !0, 0;
								var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
								return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === x && w(x, e) ? -1 : t === f || t.ownerDocument === x && w(x, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & i ? -1 : 1)
							} : function(e, t) {
								if(e === t) return d = !0, 0;
								var n, i = 0,
									r = e.parentNode,
									o = t.parentNode,
									a = [e],
									s = [t];
								if(!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : c ? I(c, e) - I(c, t) : 0;
								if(r === o) return ue(e, t);
								for(n = e; n = n.parentNode;) a.unshift(n);
								for(n = t; n = n.parentNode;) s.unshift(n);
								for(; a[i] === s[i];) i++;
								return i ? ue(a[i], s[i]) : a[i] === x ? -1 : s[i] === x ? 1 : 0
							}, f) : f
						}, re.matches = function(e, t) {
							return re(e, null, null, t)
						}, re.matchesSelector = function(e, t) {
							if((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
								var i = y.call(e, t);
								if(i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
							} catch(e) {}
							return re(t, f, null, [e]).length > 0
						}, re.contains = function(e, t) {
							return(e.ownerDocument || e) !== f && p(e), w(e, t)
						}, re.attr = function(e, t) {
							(e.ownerDocument || e) !== f && p(e);
							var r = i.attrHandle[t.toLowerCase()],
								o = r && _.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
							return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
						}, re.error = function(e) {
							throw new Error("Syntax error, unrecognized expression: " + e)
						}, re.uniqueSort = function(e) {
							var t, i = [],
								r = 0,
								o = 0;
							if(d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(k), d) {
								for(; t = e[o++];) t === e[o] && (r = i.push(o));
								for(; r--;) e.splice(i[r], 1)
							}
							return c = null, e
						}, r = re.getText = function(e) {
							var t, n = "",
								i = 0,
								o = e.nodeType;
							if(o) {
								if(1 === o || 9 === o || 11 === o) {
									if("string" == typeof e.textContent) return e.textContent;
									for(e = e.firstChild; e; e = e.nextSibling) n += r(e)
								} else if(3 === o || 4 === o) return e.nodeValue
							} else
								for(; t = e[i++];) n += r(t);
							return n
						}, (i = re.selectors = {
							cacheLength: 50,
							createPseudo: ae,
							match: X,
							attrHandle: {},
							find: {},
							relative: {
								">": {
									dir: "parentNode",
									first: !0
								},
								" ": {
									dir: "parentNode"
								},
								"+": {
									dir: "previousSibling",
									first: !0
								},
								"~": {
									dir: "previousSibling"
								}
							},
							preFilter: {
								ATTR: function(e) {
									return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
								},
								CHILD: function(e) {
									return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
								},
								PSEUDO: function(e) {
									var t, n = !e[6] && e[2];
									return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
								}
							},
							filter: {
								TAG: function(e) {
									var t = e.replace(te, ne).toLowerCase();
									return "*" === e ? function() {
										return !0
									} : function(e) {
										return e.nodeName && e.nodeName.toLowerCase() === t
									}
								},
								CLASS: function(e) {
									var t = C[e + " "];
									return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && C(e, function(e) {
										return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
									})
								},
								ATTR: function(e, t, n) {
									return function(i) {
										var r = re.attr(i, e);
										return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
									}
								},
								CHILD: function(e, t, n, i, r) {
									var o = "nth" !== e.slice(0, 3),
										a = "last" !== e.slice(-4),
										s = "of-type" === t;
									return 1 === i && 0 === r ? function(e) {
										return !!e.parentNode
									} : function(t, n, l) {
										var u, c, d, p, f, h, g = o !== a ? "nextSibling" : "previousSibling",
											m = t.parentNode,
											v = s && t.nodeName.toLowerCase(),
											y = !l && !s,
											w = !1;
										if(m) {
											if(o) {
												for(; g;) {
													for(p = t; p = p[g];)
														if(s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
													h = g = "only" === e && !h && "nextSibling"
												}
												return !0
											}
											if(h = [a ? m.firstChild : m.lastChild], a && y) {
												for(w = (f = (u = (c = (d = (p = m)[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (w = f = 0) || h.pop();)
													if(1 === p.nodeType && ++w && p === t) {
														c[e] = [T, f, w];
														break
													}
											} else if(y && (w = f = (u = (c = (d = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && u[1]), !1 === w)
												for(;
													(p = ++f && p && p[g] || (w = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && ((c = (d = p[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [T, w]), p !== t)););
											return(w -= r) === i || w % i == 0 && w / i >= 0
										}
									}
								},
								PSEUDO: function(e, t) {
									var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
									return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
										for(var i, o = r(e, t), a = o.length; a--;) e[i = I(e, o[a])] = !(n[i] = o[a])
									}) : function(e) {
										return r(e, 0, n)
									}) : r
								}
							},
							pseudos: {
								not: ae(function(e) {
									var t = [],
										n = [],
										i = s(e.replace(W, "$1"));
									return i[b] ? ae(function(e, t, n, r) {
										for(var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
									}) : function(e, r, o) {
										return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
									}
								}),
								has: ae(function(e) {
									return function(t) {
										return re(e, t).length > 0
									}
								}),
								contains: ae(function(e) {
									return e = e.replace(te, ne),
										function(t) {
											return(t.textContent || t.innerText || r(t)).indexOf(e) > -1
										}
								}),
								lang: ae(function(e) {
									return G.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
										function(t) {
											var n;
											do {
												if(n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return(n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
											} while ((t = t.parentNode) && 1 === t.nodeType);
											return !1
										}
								}),
								target: function(t) {
									var n = e.location && e.location.hash;
									return n && n.slice(1) === t.id
								},
								root: function(e) {
									return e === h
								},
								focus: function(e) {
									return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
								},
								enabled: function(e) {
									return !1 === e.disabled
								},
								disabled: function(e) {
									return !0 === e.disabled
								},
								checked: function(e) {
									var t = e.nodeName.toLowerCase();
									return "input" === t && !!e.checked || "option" === t && !!e.selected
								},
								selected: function(e) {
									return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
								},
								empty: function(e) {
									for(e = e.firstChild; e; e = e.nextSibling)
										if(e.nodeType < 6) return !1;
									return !0
								},
								parent: function(e) {
									return !i.pseudos.empty(e)
								},
								header: function(e) {
									return U.test(e.nodeName)
								},
								input: function(e) {
									return K.test(e.nodeName)
								},
								button: function(e) {
									var t = e.nodeName.toLowerCase();
									return "input" === t && "button" === e.type || "button" === t
								},
								text: function(e) {
									var t;
									return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
								},
								first: pe(function() {
									return [0]
								}),
								last: pe(function(e, t) {
									return [t - 1]
								}),
								eq: pe(function(e, t, n) {
									return [n < 0 ? n + t : n]
								}),
								even: pe(function(e, t) {
									for(var n = 0; n < t; n += 2) e.push(n);
									return e
								}),
								odd: pe(function(e, t) {
									for(var n = 1; n < t; n += 2) e.push(n);
									return e
								}),
								lt: pe(function(e, t, n) {
									for(var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
									return e
								}),
								gt: pe(function(e, t, n) {
									for(var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
									return e
								})
							}
						}).pseudos.nth = i.pseudos.eq, {
							radio: !0,
							checkbox: !0,
							file: !0,
							password: !0,
							image: !0
						}) i.pseudos[t] = ce(t);
					for(t in {
							submit: !0,
							reset: !0
						}) i.pseudos[t] = de(t);

					function he() {}

					function ge(e) {
						for(var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
						return i
					}

					function me(e, t, n) {
						var i = t.dir,
							r = n && "parentNode" === i,
							o = S++;
						return t.first ? function(t, n, o) {
							for(; t = t[i];)
								if(1 === t.nodeType || r) return e(t, n, o)
						} : function(t, n, a) {
							var s, l, u, c = [T, o];
							if(a) {
								for(; t = t[i];)
									if((1 === t.nodeType || r) && e(t, n, a)) return !0
							} else
								for(; t = t[i];)
									if(1 === t.nodeType || r) {
										if((s = (l = (u = t[b] || (t[b] = {}))[t.uniqueID] || (u[t.uniqueID] = {}))[i]) && s[0] === T && s[1] === o) return c[2] = s[2];
										if(l[i] = c, c[2] = e(t, n, a)) return !0
									}
						}
					}

					function ve(e) {
						return e.length > 1 ? function(t, n, i) {
							for(var r = e.length; r--;)
								if(!e[r](t, n, i)) return !1;
							return !0
						} : e[0]
					}

					function ye(e, t, n, i, r) {
						for(var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
						return a
					}

					function we(e, t, n, i, r, o) {
						return i && !i[b] && (i = we(i)), r && !r[b] && (r = we(r, o)), ae(function(o, a, s, l) {
							var u, c, d, p = [],
								f = [],
								h = a.length,
								g = o || function(e, t, n) {
									for(var i = 0, r = t.length; i < r; i++) re(e, t[i], n);
									return n
								}(t || "*", s.nodeType ? [s] : s, []),
								m = !e || !o && t ? g : ye(g, p, e, s, l),
								v = n ? r || (o ? e : h || i) ? [] : a : m;
							if(n && n(m, v, s, l), i)
								for(u = ye(v, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
							if(o) {
								if(r || e) {
									if(r) {
										for(u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
										r(null, v = [], u, l)
									}
									for(c = v.length; c--;)(d = v[c]) && (u = r ? I(o, d) : p[c]) > -1 && (o[u] = !(a[u] = d))
								}
							} else v = ye(v === a ? v.splice(h, v.length) : v), r ? r(null, a, v, l) : D.apply(a, v)
						})
					}

					function be(e) {
						for(var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = me(function(e) {
								return e === t
							}, s, !0), d = me(function(e) {
								return I(t, e) > -1
							}, s, !0), p = [function(e, n, i) {
								var r = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
								return t = null, r
							}]; l < o; l++)
							if(n = i.relative[e[l].type]) p = [me(ve(p), n)];
							else {
								if((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
									for(r = ++l; r < o && !i.relative[e[r].type]; r++);
									return we(l > 1 && ve(p), l > 1 && ge(e.slice(0, l - 1).concat({
										value: " " === e[l - 2].type ? "*" : ""
									})).replace(W, "$1"), n, l < r && be(e.slice(l, r)), r < o && be(e = e.slice(r)), r < o && ge(e))
								}
								p.push(n)
							}
						return ve(p)
					}
					return he.prototype = i.filters = i.pseudos, i.setFilters = new he, a = re.tokenize = function(e, t) {
						var n, r, o, a, s, l, u, c = E[e + " "];
						if(c) return t ? 0 : c.slice(0);
						for(s = e, l = [], u = i.preFilter; s;) {
							for(a in n && !(r = q.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = z.exec(s)) && (n = r.shift(), o.push({
									value: n,
									type: r[0].replace(W, " ")
								}), s = s.slice(n.length)), i.filter) !(r = X[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
								value: n,
								type: a,
								matches: r
							}), s = s.slice(n.length));
							if(!n) break
						}
						return t ? s.length : s ? re.error(e) : E(e, l).slice(0)
					}, s = re.compile = function(e, t) {
						var n, r = [],
							o = [],
							s = A[e + " "];
						if(!s) {
							for(t || (t = a(e)), n = t.length; n--;)(s = be(t[n]))[b] ? r.push(s) : o.push(s);
							(s = A(e, function(e, t) {
								var n = t.length > 0,
									r = e.length > 0,
									o = function(o, a, s, l, c) {
										var d, h, m, v = 0,
											y = "0",
											w = o && [],
											b = [],
											x = u,
											S = o || r && i.find.TAG("*", c),
											C = T += null == x ? 1 : Math.random() || .1,
											E = S.length;
										for(c && (u = a === f || a || c); y !== E && null != (d = S[y]); y++) {
											if(r && d) {
												for(h = 0, a || d.ownerDocument === f || (p(d), s = !g); m = e[h++];)
													if(m(d, a || f, s)) {
														l.push(d);
														break
													}
												c && (T = C)
											}
											n && ((d = !m && d) && v--, o && w.push(d))
										}
										if(v += y, n && y !== v) {
											for(h = 0; m = t[h++];) m(w, b, a, s);
											if(o) {
												if(v > 0)
													for(; y--;) w[y] || b[y] || (b[y] = P.call(l));
												b = ye(b)
											}
											D.apply(l, b), c && !o && b.length > 0 && v + t.length > 1 && re.uniqueSort(l)
										}
										return c && (T = C, u = x), w
									};
								return n ? ae(o) : o
							}(o, r))).selector = e
						}
						return s
					}, l = re.select = function(e, t, r, o) {
						var l, u, c, d, p, f = "function" == typeof e && e,
							h = !o && a(e = f.selector || e);
						if(r = r || [], 1 === h.length) {
							if((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && n.getById && 9 === t.nodeType && g && i.relative[u[1].type]) {
								if(!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return r;
								f && (t = t.parentNode), e = e.slice(u.shift().value.length)
							}
							for(l = X.needsContext.test(e) ? 0 : u.length; l-- && (c = u[l], !i.relative[d = c.type]);)
								if((p = i.find[d]) && (o = p(c.matches[0].replace(te, ne), Z.test(u[0].type) && fe(t.parentNode) || t))) {
									if(u.splice(l, 1), !(e = o.length && ge(u))) return D.apply(r, o), r;
									break
								}
						}
						return(f || s(e, h))(o, t, !g, r, !t || Z.test(e) && fe(t.parentNode) || t), r
					}, n.sortStable = b.split("").sort(k).join("") === b, n.detectDuplicates = !!d, p(), n.sortDetached = se(function(e) {
						return 1 & e.compareDocumentPosition(f.createElement("div"))
					}), se(function(e) {
						return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
					}) || le("type|href|height|width", function(e, t, n) {
						if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
					}), n.attributes && se(function(e) {
						return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
					}) || le("value", function(e, t, n) {
						if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
					}), se(function(e) {
						return null == e.getAttribute("disabled")
					}) || le(F, function(e, t, n) {
						var i;
						if(!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
					}), re
				}(n);
			g.find = x, g.expr = x.selectors, g.expr[":"] = g.expr.pseudos, g.uniqueSort = g.unique = x.uniqueSort, g.text = x.getText, g.isXMLDoc = x.isXML, g.contains = x.contains;
			var T = function(e, t, n) {
					for(var i = [], r = void 0 !== n;
						(e = e[t]) && 9 !== e.nodeType;)
						if(1 === e.nodeType) {
							if(r && g(e).is(n)) break;
							i.push(e)
						}
					return i
				},
				S = function(e, t) {
					for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
					return n
				},
				C = g.expr.match.needsContext,
				E = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
				A = /^.[^:#\[\.,]*$/;

			function k(e, t, n) {
				if(g.isFunction(t)) return g.grep(e, function(e, i) {
					return !!t.call(e, i, e) !== n
				});
				if(t.nodeType) return g.grep(e, function(e) {
					return e === t !== n
				});
				if("string" == typeof t) {
					if(A.test(t)) return g.filter(t, e, n);
					t = g.filter(t, e)
				}
				return g.grep(e, function(e) {
					return g.inArray(e, t) > -1 !== n
				})
			}
			g.filter = function(e, t, n) {
				var i = t[0];
				return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? g.find.matchesSelector(i, e) ? [i] : [] : g.find.matches(e, g.grep(t, function(e) {
					return 1 === e.nodeType
				}))
			}, g.fn.extend({
				find: function(e) {
					var t, n = [],
						i = this,
						r = i.length;
					if("string" != typeof e) return this.pushStack(g(e).filter(function() {
						for(t = 0; t < r; t++)
							if(g.contains(i[t], this)) return !0
					}));
					for(t = 0; t < r; t++) g.find(e, i[t], n);
					return(n = this.pushStack(r > 1 ? g.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
				},
				filter: function(e) {
					return this.pushStack(k(this, e || [], !1))
				},
				not: function(e) {
					return this.pushStack(k(this, e || [], !0))
				},
				is: function(e) {
					return !!k(this, "string" == typeof e && C.test(e) ? g(e) : e || [], !1).length
				}
			});
			var L, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
			(g.fn.init = function(e, t, n) {
				var i, r;
				if(!e) return this;
				if(n = n || L, "string" == typeof e) {
					if(!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : _.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
					if(i[1]) {
						if(t = t instanceof g ? t[0] : t, g.merge(this, g.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), E.test(i[1]) && g.isPlainObject(t))
							for(i in t) g.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
						return this
					}
					if((r = a.getElementById(i[2])) && r.parentNode) {
						if(r.id !== i[2]) return L.find(e);
						this.length = 1, this[0] = r
					}
					return this.context = a, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : g.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(g) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), g.makeArray(e, this))
			}).prototype = g.fn, L = g(a);
			var N = /^(?:parents|prev(?:Until|All))/,
				P = {
					children: !0,
					contents: !0,
					next: !0,
					prev: !0
				};

			function M(e, t) {
				do {
					e = e[t]
				} while (e && 1 !== e.nodeType);
				return e
			}
			g.fn.extend({
				has: function(e) {
					var t, n = g(e, this),
						i = n.length;
					return this.filter(function() {
						for(t = 0; t < i; t++)
							if(g.contains(this, n[t])) return !0
					})
				},
				closest: function(e, t) {
					for(var n, i = 0, r = this.length, o = [], a = C.test(e) || "string" != typeof e ? g(e, t || this.context) : 0; i < r; i++)
						for(n = this[i]; n && n !== t; n = n.parentNode)
							if(n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && g.find.matchesSelector(n, e))) {
								o.push(n);
								break
							}
					return this.pushStack(o.length > 1 ? g.uniqueSort(o) : o)
				},
				index: function(e) {
					return e ? "string" == typeof e ? g.inArray(this[0], g(e)) : g.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
				},
				add: function(e, t) {
					return this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))))
				},
				addBack: function(e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
				}
			}), g.each({
				parent: function(e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null
				},
				parents: function(e) {
					return T(e, "parentNode")
				},
				parentsUntil: function(e, t, n) {
					return T(e, "parentNode", n)
				},
				next: function(e) {
					return M(e, "nextSibling")
				},
				prev: function(e) {
					return M(e, "previousSibling")
				},
				nextAll: function(e) {
					return T(e, "nextSibling")
				},
				prevAll: function(e) {
					return T(e, "previousSibling")
				},
				nextUntil: function(e, t, n) {
					return T(e, "nextSibling", n)
				},
				prevUntil: function(e, t, n) {
					return T(e, "previousSibling", n)
				},
				siblings: function(e) {
					return S((e.parentNode || {}).firstChild, e)
				},
				children: function(e) {
					return S(e.firstChild)
				},
				contents: function(e) {
					return g.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : g.merge([], e.childNodes)
				}
			}, function(e, t) {
				g.fn[e] = function(n, i) {
					var r = g.map(this, t, n);
					return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = g.filter(i, r)), this.length > 1 && (P[e] || (r = g.uniqueSort(r)), N.test(e) && (r = r.reverse())), this.pushStack(r)
				}
			});
			var D, H, I = /\S+/g;

			function F() {
				a.addEventListener ? (a.removeEventListener("DOMContentLoaded", j), n.removeEventListener("load", j)) : (a.detachEvent("onreadystatechange", j), n.detachEvent("onload", j))
			}

			function j() {
				(a.addEventListener || "load" === n.event.type || "complete" === a.readyState) && (F(), g.ready())
			}
			for(H in g.Callbacks = function(e) {
					e = "string" == typeof e ? function(e) {
						var t = {};
						return g.each(e.match(I) || [], function(e, n) {
							t[n] = !0
						}), t
					}(e) : g.extend({}, e);
					var t, n, i, r, o = [],
						a = [],
						s = -1,
						l = function() {
							for(r = e.once, i = t = !0; a.length; s = -1)
								for(n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
							e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
						},
						u = {
							add: function() {
								return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
									g.each(n, function(n, i) {
										g.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== g.type(i) && t(i)
									})
								}(arguments), n && !t && l()), this
							},
							remove: function() {
								return g.each(arguments, function(e, t) {
									for(var n;
										(n = g.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
								}), this
							},
							has: function(e) {
								return e ? g.inArray(e, o) > -1 : o.length > 0
							},
							empty: function() {
								return o && (o = []), this
							},
							disable: function() {
								return r = a = [], o = n = "", this
							},
							disabled: function() {
								return !o
							},
							lock: function() {
								return r = !0, n || u.disable(), this
							},
							locked: function() {
								return !!r
							},
							fireWith: function(e, n) {
								return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
							},
							fire: function() {
								return u.fireWith(this, arguments), this
							},
							fired: function() {
								return !!i
							}
						};
					return u
				}, g.extend({
					Deferred: function(e) {
						var t = [
								["resolve", "done", g.Callbacks("once memory"), "resolved"],
								["reject", "fail", g.Callbacks("once memory"), "rejected"],
								["notify", "progress", g.Callbacks("memory")]
							],
							n = "pending",
							i = {
								state: function() {
									return n
								},
								always: function() {
									return r.done(arguments).fail(arguments), this
								},
								then: function() {
									var e = arguments;
									return g.Deferred(function(n) {
										g.each(t, function(t, o) {
											var a = g.isFunction(e[t]) && e[t];
											r[o[1]](function() {
												var e = a && a.apply(this, arguments);
												e && g.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
											})
										}), e = null
									}).promise()
								},
								promise: function(e) {
									return null != e ? g.extend(e, i) : i
								}
							},
							r = {};
						return i.pipe = i.then, g.each(t, function(e, o) {
							var a = o[2],
								s = o[3];
							i[o[1]] = a.add, s && a.add(function() {
								n = s
							}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
								return r[o[0] + "With"](this === r ? i : this, arguments), this
							}, r[o[0] + "With"] = a.fireWith
						}), i.promise(r), e && e.call(r, r), r
					},
					when: function(e) {
						var t, n, i, r = 0,
							o = s.call(arguments),
							a = o.length,
							l = 1 !== a || e && g.isFunction(e.promise) ? a : 0,
							u = 1 === l ? e : g.Deferred(),
							c = function(e, n, i) {
								return function(r) {
									n[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : r, i === t ? u.notifyWith(n, i) : --l || u.resolveWith(n, i)
								}
							};
						if(a > 1)
							for(t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && g.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(u.reject) : --l;
						return l || u.resolveWith(i, o), u.promise()
					}
				}), g.fn.ready = function(e) {
					return g.ready.promise().done(e), this
				}, g.extend({
					isReady: !1,
					readyWait: 1,
					holdReady: function(e) {
						e ? g.readyWait++ : g.ready(!0)
					},
					ready: function(e) {
						(!0 === e ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== e && --g.readyWait > 0 || (D.resolveWith(a, [g]), g.fn.triggerHandler && (g(a).triggerHandler("ready"), g(a).off("ready"))))
					}
				}), g.ready.promise = function(e) {
					if(!D)
						if(D = g.Deferred(), "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll) n.setTimeout(g.ready);
						else if(a.addEventListener) a.addEventListener("DOMContentLoaded", j), n.addEventListener("load", j);
					else {
						a.attachEvent("onreadystatechange", j), n.attachEvent("onload", j);
						var t = !1;
						try {
							t = null == n.frameElement && a.documentElement
						} catch(e) {}
						t && t.doScroll && function e() {
							if(!g.isReady) {
								try {
									t.doScroll("left")
								} catch(t) {
									return n.setTimeout(e, 50)
								}
								F(), g.ready()
							}
						}()
					}
					return D.promise(e)
				}, g.ready.promise(), g(h)) break;
			h.ownFirst = "0" === H, h.inlineBlockNeedsLayout = !1, g(function() {
					var e, t, n, i;
					(n = a.getElementsByTagName("body")[0]) && n.style && (t = a.createElement("div"), (i = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", h.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
				}),
				function() {
					var e = a.createElement("div");
					h.deleteExpando = !0;
					try {
						delete e.test
					} catch(e) {
						h.deleteExpando = !1
					}
					e = null
				}();
			var $, R = function(e) {
					var t = g.noData[(e.nodeName + " ").toLowerCase()],
						n = +e.nodeType || 1;
					return(1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
				},
				O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				B = /([A-Z])/g;

			function W(e, t, n) {
				if(void 0 === n && 1 === e.nodeType) {
					var i = "data-" + t.replace(B, "-$1").toLowerCase();
					if("string" == typeof(n = e.getAttribute(i))) {
						try {
							n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : O.test(n) ? g.parseJSON(n) : n)
						} catch(e) {}
						g.data(e, t, n)
					} else n = void 0
				}
				return n
			}

			function q(e) {
				var t;
				for(t in e)
					if(("data" !== t || !g.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
				return !0
			}

			function z(e, t, n, i) {
				if(R(e)) {
					var r, a, s = g.expando,
						l = e.nodeType,
						u = l ? g.cache : e,
						c = l ? e[s] : e[s] && s;
					if(c && u[c] && (i || u[c].data) || void 0 !== n || "string" != typeof t) return c || (c = l ? e[s] = o.pop() || g.guid++ : s), u[c] || (u[c] = l ? {} : {
						toJSON: g.noop
					}), "object" != typeof t && "function" != typeof t || (i ? u[c] = g.extend(u[c], t) : u[c].data = g.extend(u[c].data, t)), a = u[c], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[g.camelCase(t)] = n), "string" == typeof t ? null == (r = a[t]) && (r = a[g.camelCase(t)]) : r = a, r
				}
			}

			function Y(e, t, n) {
				if(R(e)) {
					var i, r, o = e.nodeType,
						a = o ? g.cache : e,
						s = o ? e[g.expando] : g.expando;
					if(a[s]) {
						if(t && (i = n ? a[s] : a[s].data)) {
							r = (t = g.isArray(t) ? t.concat(g.map(t, g.camelCase)) : t in i ? [t] : (t = g.camelCase(t)) in i ? [t] : t.split(" ")).length;
							for(; r--;) delete i[t[r]];
							if(n ? !q(i) : !g.isEmptyObject(i)) return
						}(n || (delete a[s].data, q(a[s]))) && (o ? g.cleanData([e], !0) : h.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
					}
				}
			}
			g.extend({
				cache: {},
				noData: {
					"applet ": !0,
					"embed ": !0,
					"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
				},
				hasData: function(e) {
					return !!(e = e.nodeType ? g.cache[e[g.expando]] : e[g.expando]) && !q(e)
				},
				data: function(e, t, n) {
					return z(e, t, n)
				},
				removeData: function(e, t) {
					return Y(e, t)
				},
				_data: function(e, t, n) {
					return z(e, t, n, !0)
				},
				_removeData: function(e, t) {
					return Y(e, t, !0)
				}
			}), g.fn.extend({
				data: function(e, t) {
					var n, i, r, o = this[0],
						a = o && o.attributes;
					if(void 0 === e) {
						if(this.length && (r = g.data(o), 1 === o.nodeType && !g._data(o, "parsedAttrs"))) {
							for(n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && W(o, i = g.camelCase(i.slice(5)), r[i]);
							g._data(o, "parsedAttrs", !0)
						}
						return r
					}
					return "object" == typeof e ? this.each(function() {
						g.data(this, e)
					}) : arguments.length > 1 ? this.each(function() {
						g.data(this, e, t)
					}) : o ? W(o, e, g.data(o, e)) : void 0
				},
				removeData: function(e) {
					return this.each(function() {
						g.removeData(this, e)
					})
				}
			}), g.extend({
				queue: function(e, t, n) {
					var i;
					if(e) return t = (t || "fx") + "queue", i = g._data(e, t), n && (!i || g.isArray(n) ? i = g._data(e, t, g.makeArray(n)) : i.push(n)), i || []
				},
				dequeue: function(e, t) {
					t = t || "fx";
					var n = g.queue(e, t),
						i = n.length,
						r = n.shift(),
						o = g._queueHooks(e, t);
					"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
						g.dequeue(e, t)
					}, o)), !i && o && o.empty.fire()
				},
				_queueHooks: function(e, t) {
					var n = t + "queueHooks";
					return g._data(e, n) || g._data(e, n, {
						empty: g.Callbacks("once memory").add(function() {
							g._removeData(e, t + "queue"), g._removeData(e, n)
						})
					})
				}
			}), g.fn.extend({
				queue: function(e, t) {
					var n = 2;
					return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? g.queue(this[0], e) : void 0 === t ? this : this.each(function() {
						var n = g.queue(this, e, t);
						g._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && g.dequeue(this, e)
					})
				},
				dequeue: function(e) {
					return this.each(function() {
						g.dequeue(this, e)
					})
				},
				clearQueue: function(e) {
					return this.queue(e || "fx", [])
				},
				promise: function(e, t) {
					var n, i = 1,
						r = g.Deferred(),
						o = this,
						a = this.length,
						s = function() {
							--i || r.resolveWith(o, [o])
						};
					for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = g._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
					return s(), r.promise(t)
				}
			}), h.shrinkWrapBlocks = function() {
				return null != $ ? $ : ($ = !1, (t = a.getElementsByTagName("body")[0]) && t.style ? (e = a.createElement("div"), (n = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(a.createElement("div")).style.width = "5px", $ = 3 !== e.offsetWidth), t.removeChild(n), $) : void 0);
				var e, t, n
			};
			var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				G = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$", "i"),
				X = ["Top", "Right", "Bottom", "Left"],
				K = function(e, t) {
					return e = t || e, "none" === g.css(e, "display") || !g.contains(e.ownerDocument, e)
				};

			function U(e, t, n, i) {
				var r, o = 1,
					a = 20,
					s = i ? function() {
						return i.cur()
					} : function() {
						return g.css(e, t, "")
					},
					l = s(),
					u = n && n[3] || (g.cssNumber[t] ? "" : "px"),
					c = (g.cssNumber[t] || "px" !== u && +l) && G.exec(g.css(e, t));
				if(c && c[3] !== u) {
					u = u || c[3], n = n || [], c = +l || 1;
					do {
						c /= o = o || ".5", g.style(e, t, c + u)
					} while (o !== (o = s() / l) && 1 !== o && --a)
				}
				return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
			}
			var Q, J, Z, ee = function(e, t, n, i, r, o, a) {
					var s = 0,
						l = e.length,
						u = null == n;
					if("object" === g.type(n))
						for(s in r = !0, n) ee(e, t, s, n[s], !0, o, a);
					else if(void 0 !== i && (r = !0, g.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
							return u.call(g(e), n)
						})), t))
						for(; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
					return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
				},
				te = /^(?:checkbox|radio)$/i,
				ne = /<([\w:-]+)/,
				ie = /^$|\/(?:java|ecma)script/i,
				re = /^\s+/,
				oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

			function ae(e) {
				var t = oe.split("|"),
					n = e.createDocumentFragment();
				if(n.createElement)
					for(; t.length;) n.createElement(t.pop());
				return n
			}
			Q = a.createElement("div"), J = a.createDocumentFragment(), Z = a.createElement("input"), Q.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", h.leadingWhitespace = 3 === Q.firstChild.nodeType, h.tbody = !Q.getElementsByTagName("tbody").length, h.htmlSerialize = !!Q.getElementsByTagName("link").length, h.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, Z.type = "checkbox", Z.checked = !0, J.appendChild(Z), h.appendChecked = Z.checked, Q.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!Q.cloneNode(!0).lastChild.defaultValue, J.appendChild(Q), (Z = a.createElement("input")).setAttribute("type", "radio"), Z.setAttribute("checked", "checked"), Z.setAttribute("name", "t"), Q.appendChild(Z), h.checkClone = Q.cloneNode(!0).cloneNode(!0).lastChild.checked, h.noCloneEvent = !!Q.addEventListener, Q[g.expando] = 1, h.attributes = !Q.getAttribute(g.expando);
			var se = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: h.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			};

			function le(e, t) {
				var n, i, r = 0,
					o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
				if(!o)
					for(o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || g.nodeName(i, t) ? o.push(i) : g.merge(o, le(i, t));
				return void 0 === t || t && g.nodeName(e, t) ? g.merge([e], o) : o
			}

			function ue(e, t) {
				for(var n, i = 0; null != (n = e[i]); i++) g._data(n, "globalEval", !t || g._data(t[i], "globalEval"))
			}
			se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td;
			var ce = /<|&#?\w+;/,
				de = /<tbody/i;

			function pe(e) {
				te.test(e.type) && (e.defaultChecked = e.checked)
			}

			function fe(e, t, n, i, r) {
				for(var o, a, s, l, u, c, d, p = e.length, f = ae(t), m = [], v = 0; v < p; v++)
					if((a = e[v]) || 0 === a)
						if("object" === g.type(a)) g.merge(m, a.nodeType ? [a] : a);
						else if(ce.test(a)) {
					for(l = l || f.appendChild(t.createElement("div")), u = (ne.exec(a) || ["", ""])[1].toLowerCase(), d = se[u] || se._default, l.innerHTML = d[1] + g.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
					if(!h.leadingWhitespace && re.test(a) && m.push(t.createTextNode(re.exec(a)[0])), !h.tbody)
						for(o = (a = "table" !== u || de.test(a) ? "<table>" !== d[1] || de.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; o--;) g.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
					for(g.merge(m, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
					l = f.lastChild
				} else m.push(t.createTextNode(a));
				for(l && f.removeChild(l), h.appendChecked || g.grep(le(m, "input"), pe), v = 0; a = m[v++];)
					if(i && g.inArray(a, i) > -1) r && r.push(a);
					else if(s = g.contains(a.ownerDocument, a), l = le(f.appendChild(a), "script"), s && ue(l), n)
					for(o = 0; a = l[o++];) ie.test(a.type || "") && n.push(a);
				return l = null, f
			}! function() {
				var e, t, i = a.createElement("div");
				for(e in {
						submit: !0,
						change: !0,
						focusin: !0
					}) t = "on" + e, (h[e] = t in n) || (i.setAttribute(t, "t"), h[e] = !1 === i.attributes[t].expando);
				i = null
			}();
			var he = /^(?:input|select|textarea)$/i,
				ge = /^key/,
				me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
				ve = /^(?:focusinfocus|focusoutblur)$/,
				ye = /^([^.]*)(?:\.(.+)|)/;

			function we() {
				return !0
			}

			function be() {
				return !1
			}

			function xe() {
				try {
					return a.activeElement
				} catch(e) {}
			}

			function Te(e, t, n, i, r, o) {
				var a, s;
				if("object" == typeof t) {
					for(s in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, s, n, i, t[s], o);
					return e
				}
				if(null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = be;
				else if(!r) return e;
				return 1 === o && (a = r, (r = function(e) {
					return g().off(e), a.apply(this, arguments)
				}).guid = a.guid || (a.guid = g.guid++)), e.each(function() {
					g.event.add(this, t, r, i, n)
				})
			}
			g.event = {
				global: {},
				add: function(e, t, n, i, r) {
					var o, a, s, l, u, c, d, p, f, h, m, v = g._data(e);
					if(v) {
						for(n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = g.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || ((c = v.handle = function(e) {
								return void 0 === g || e && g.event.triggered === e.type ? void 0 : g.event.dispatch.apply(c.elem, arguments)
							}).elem = e), s = (t = (t || "").match(I) || [""]).length; s--;) f = m = (o = ye.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), f && (u = g.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = g.event.special[f] || {}, d = g.extend({
							type: f,
							origType: m,
							data: i,
							handler: n,
							guid: n.guid,
							selector: r,
							needsContext: r && g.expr.match.needsContext.test(r),
							namespace: h.join(".")
						}, l), (p = a[f]) || ((p = a[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), g.event.global[f] = !0);
						e = null
					}
				},
				remove: function(e, t, n, i, r) {
					var o, a, s, l, u, c, d, p, f, h, m, v = g.hasData(e) && g._data(e);
					if(v && (c = v.events)) {
						for(u = (t = (t || "").match(I) || [""]).length; u--;)
							if(f = m = (s = ye.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
								for(d = g.event.special[f] || {}, p = c[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
								l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || g.removeEvent(e, f, v.handle), delete c[f])
							} else
								for(f in c) g.event.remove(e, f + t[u], n, i, !0);
						g.isEmptyObject(c) && (delete v.handle, g._removeData(e, "events"))
					}
				},
				trigger: function(e, t, i, r) {
					var o, s, l, u, c, d, p, h = [i || a],
						m = f.call(e, "type") ? e.type : e,
						v = f.call(e, "namespace") ? e.namespace.split(".") : [];
					if(l = d = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !ve.test(m + g.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), s = m.indexOf(":") < 0 && "on" + m, (e = e[g.expando] ? e : new g.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : g.makeArray(t, [e]), c = g.event.special[m] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, t))) {
						if(!r && !c.noBubble && !g.isWindow(i)) {
							for(u = c.delegateType || m, ve.test(u + m) || (l = l.parentNode); l; l = l.parentNode) h.push(l), d = l;
							d === (i.ownerDocument || a) && h.push(d.defaultView || d.parentWindow || n)
						}
						for(p = 0;
							(l = h[p++]) && !e.isPropagationStopped();) e.type = p > 1 ? u : c.bindType || m, (o = (g._data(l, "events") || {})[e.type] && g._data(l, "handle")) && o.apply(l, t), (o = s && l[s]) && o.apply && R(l) && (e.result = o.apply(l, t), !1 === e.result && e.preventDefault());
						if(e.type = m, !r && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), t)) && R(i) && s && i[m] && !g.isWindow(i)) {
							(d = i[s]) && (i[s] = null), g.event.triggered = m;
							try {
								i[m]()
							} catch(e) {}
							g.event.triggered = void 0, d && (i[s] = d)
						}
						return e.result
					}
				},
				dispatch: function(e) {
					e = g.event.fix(e);
					var t, n, i, r, o, a, l = s.call(arguments),
						u = (g._data(this, "events") || {})[e.type] || [],
						c = g.event.special[e.type] || {};
					if(l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
						for(a = g.event.handlers.call(this, e, u), t = 0;
							(r = a[t++]) && !e.isPropagationStopped();)
							for(e.currentTarget = r.elem, n = 0;
								(o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((g.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
						return c.postDispatch && c.postDispatch.call(this, e), e.result
					}
				},
				handlers: function(e, t) {
					var n, i, r, o, a = [],
						s = t.delegateCount,
						l = e.target;
					if(s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
						for(; l != this; l = l.parentNode || this)
							if(1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
								for(i = [], n = 0; n < s; n++) void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? g(r, this).index(l) > -1 : g.find(r, this, null, [l]).length), i[r] && i.push(o);
								i.length && a.push({
									elem: l,
									handlers: i
								})
							}
					return s < t.length && a.push({
						elem: this,
						handlers: t.slice(s)
					}), a
				},
				fix: function(e) {
					if(e[g.expando]) return e;
					var t, n, i, r = e.type,
						o = e,
						s = this.fixHooks[r];
					for(s || (this.fixHooks[r] = s = me.test(r) ? this.mouseHooks : ge.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new g.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
					return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
				},
				props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function(e, t) {
						return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function(e, t) {
						var n, i, r, o = t.button,
							s = t.fromElement;
						return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || a).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
					}
				},
				special: {
					load: {
						noBubble: !0
					},
					focus: {
						trigger: function() {
							if(this !== xe() && this.focus) try {
								return this.focus(), !1
							} catch(e) {}
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function() {
							if(this === xe() && this.blur) return this.blur(), !1
						},
						delegateType: "focusout"
					},
					click: {
						trigger: function() {
							if(g.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
						},
						_default: function(e) {
							return g.nodeName(e.target, "a")
						}
					},
					beforeunload: {
						postDispatch: function(e) {
							void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
						}
					}
				},
				simulate: function(e, t, n) {
					var i = g.extend(new g.Event, n, {
						type: e,
						isSimulated: !0
					});
					g.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
				}
			}, g.removeEvent = a.removeEventListener ? function(e, t, n) {
				e.removeEventListener && e.removeEventListener(t, n)
			} : function(e, t, n) {
				var i = "on" + t;
				e.detachEvent && (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n))
			}, g.Event = function(e, t) {
				if(!(this instanceof g.Event)) return new g.Event(e, t);
				e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : be) : this.type = e, t && g.extend(this, t), this.timeStamp = e && e.timeStamp || g.now(), this[g.expando] = !0
			}, g.Event.prototype = {
				constructor: g.Event,
				isDefaultPrevented: be,
				isPropagationStopped: be,
				isImmediatePropagationStopped: be,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = we, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = we, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
				},
				stopImmediatePropagation: function() {
					var e = this.originalEvent;
					this.isImmediatePropagationStopped = we, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
				}
			}, g.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			}, function(e, t) {
				g.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function(e) {
						var n, i = e.relatedTarget,
							r = e.handleObj;
						return i && (i === this || g.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
					}
				}
			}), h.submit || (g.event.special.submit = {
				setup: function() {
					if(g.nodeName(this, "form")) return !1;
					g.event.add(this, "click._submit keypress._submit", function(e) {
						var t = e.target,
							n = g.nodeName(t, "input") || g.nodeName(t, "button") ? g.prop(t, "form") : void 0;
						n && !g._data(n, "submit") && (g.event.add(n, "submit._submit", function(e) {
							e._submitBubble = !0
						}), g._data(n, "submit", !0))
					})
				},
				postDispatch: function(e) {
					e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && g.event.simulate("submit", this.parentNode, e))
				},
				teardown: function() {
					if(g.nodeName(this, "form")) return !1;
					g.event.remove(this, "._submit")
				}
			}), h.change || (g.event.special.change = {
				setup: function() {
					if(he.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (g.event.add(this, "propertychange._change", function(e) {
						"checked" === e.originalEvent.propertyName && (this._justChanged = !0)
					}), g.event.add(this, "click._change", function(e) {
						this._justChanged && !e.isTrigger && (this._justChanged = !1), g.event.simulate("change", this, e)
					})), !1;
					g.event.add(this, "beforeactivate._change", function(e) {
						var t = e.target;
						he.test(t.nodeName) && !g._data(t, "change") && (g.event.add(t, "change._change", function(e) {
							!this.parentNode || e.isSimulated || e.isTrigger || g.event.simulate("change", this.parentNode, e)
						}), g._data(t, "change", !0))
					})
				},
				handle: function(e) {
					var t = e.target;
					if(this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
				},
				teardown: function() {
					return g.event.remove(this, "._change"), !he.test(this.nodeName)
				}
			}), h.focusin || g.each({
				focus: "focusin",
				blur: "focusout"
			}, function(e, t) {
				var n = function(e) {
					g.event.simulate(t, e.target, g.event.fix(e))
				};
				g.event.special[t] = {
					setup: function() {
						var i = this.ownerDocument || this,
							r = g._data(i, t);
						r || i.addEventListener(e, n, !0), g._data(i, t, (r || 0) + 1)
					},
					teardown: function() {
						var i = this.ownerDocument || this,
							r = g._data(i, t) - 1;
						r ? g._data(i, t, r) : (i.removeEventListener(e, n, !0), g._removeData(i, t))
					}
				}
			}), g.fn.extend({
				on: function(e, t, n, i) {
					return Te(this, e, t, n, i)
				},
				one: function(e, t, n, i) {
					return Te(this, e, t, n, i, 1)
				},
				off: function(e, t, n) {
					var i, r;
					if(e && e.preventDefault && e.handleObj) return i = e.handleObj, g(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
					if("object" == typeof e) {
						for(r in e) this.off(r, t, e[r]);
						return this
					}
					return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = be), this.each(function() {
						g.event.remove(this, e, n, t)
					})
				},
				trigger: function(e, t) {
					return this.each(function() {
						g.event.trigger(e, t, this)
					})
				},
				triggerHandler: function(e, t) {
					var n = this[0];
					if(n) return g.event.trigger(e, t, n, !0)
				}
			});
			var Se = / jQuery\d+="(?:null|\d+)"/g,
				Ce = new RegExp("<(?:" + oe + ")[\\s/>]", "i"),
				Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
				Ae = /<script|<style|<link/i,
				ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Le = /^true\/(.*)/,
				_e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
				Ne = ae(a).appendChild(a.createElement("div"));

			function Pe(e, t) {
				return g.nodeName(e, "table") && g.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
			}

			function Me(e) {
				return e.type = (null !== g.find.attr(e, "type")) + "/" + e.type, e
			}

			function De(e) {
				var t = Le.exec(e.type);
				return t ? e.type = t[1] : e.removeAttribute("type"), e
			}

			function He(e, t) {
				if(1 === t.nodeType && g.hasData(e)) {
					var n, i, r, o = g._data(e),
						a = g._data(t, o),
						s = o.events;
					if(s)
						for(n in delete a.handle, a.events = {}, s)
							for(i = 0, r = s[n].length; i < r; i++) g.event.add(t, n, s[n][i]);
					a.data && (a.data = g.extend({}, a.data))
				}
			}

			function Ie(e, t) {
				var n, i, r;
				if(1 === t.nodeType) {
					if(n = t.nodeName.toLowerCase(), !h.noCloneEvent && t[g.expando]) {
						for(i in (r = g._data(t)).events) g.removeEvent(t, i, r.handle);
						t.removeAttribute(g.expando)
					}
					"script" === n && t.text !== e.text ? (Me(t).text = e.text, De(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), h.html5Clone && e.innerHTML && !g.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && te.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
				}
			}

			function Fe(e, t, n, i) {
				t = l.apply([], t);
				var r, o, a, s, u, c, d = 0,
					p = e.length,
					f = p - 1,
					m = t[0],
					v = g.isFunction(m);
				if(v || p > 1 && "string" == typeof m && !h.checkClone && ke.test(m)) return e.each(function(r) {
					var o = e.eq(r);
					v && (t[0] = m.call(this, r, o.html())), Fe(o, t, n, i)
				});
				if(p && (r = (c = fe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === c.childNodes.length && (c = r), r || i)) {
					for(a = (s = g.map(le(c, "script"), Me)).length; d < p; d++) o = c, d !== f && (o = g.clone(o, !0, !0), a && g.merge(s, le(o, "script"))), n.call(e[d], o, d);
					if(a)
						for(u = s[s.length - 1].ownerDocument, g.map(s, De), d = 0; d < a; d++) o = s[d], ie.test(o.type || "") && !g._data(o, "globalEval") && g.contains(u, o) && (o.src ? g._evalUrl && g._evalUrl(o.src) : g.globalEval((o.text || o.textContent || o.innerHTML || "").replace(_e, "")));
					c = r = null
				}
				return e
			}

			function je(e, t, n) {
				for(var i, r = t ? g.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || g.cleanData(le(i)), i.parentNode && (n && g.contains(i.ownerDocument, i) && ue(le(i, "script")), i.parentNode.removeChild(i));
				return e
			}
			g.extend({
				htmlPrefilter: function(e) {
					return e.replace(Ee, "<$1></$2>")
				},
				clone: function(e, t, n) {
					var i, r, o, a, s, l = g.contains(e.ownerDocument, e);
					if(h.html5Clone || g.isXMLDoc(e) || !Ce.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ne.innerHTML = e.outerHTML, Ne.removeChild(o = Ne.firstChild)), !(h.noCloneEvent && h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || g.isXMLDoc(e)))
						for(i = le(o), s = le(e), a = 0; null != (r = s[a]); ++a) i[a] && Ie(r, i[a]);
					if(t)
						if(n)
							for(s = s || le(e), i = i || le(o), a = 0; null != (r = s[a]); a++) He(r, i[a]);
						else He(e, o);
					return(i = le(o, "script")).length > 0 && ue(i, !l && le(e, "script")), i = s = r = null, o
				},
				cleanData: function(e, t) {
					for(var n, i, r, a, s = 0, l = g.expando, u = g.cache, c = h.attributes, d = g.event.special; null != (n = e[s]); s++)
						if((t || R(n)) && (a = (r = n[l]) && u[r])) {
							if(a.events)
								for(i in a.events) d[i] ? g.event.remove(n, i) : g.removeEvent(n, i, a.handle);
							u[r] && (delete u[r], c || void 0 === n.removeAttribute ? n[l] = void 0 : n.removeAttribute(l), o.push(r))
						}
				}
			}), g.fn.extend({
				domManip: Fe,
				detach: function(e) {
					return je(this, e, !0)
				},
				remove: function(e) {
					return je(this, e)
				},
				text: function(e) {
					return ee(this, function(e) {
						return void 0 === e ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
					}, null, e, arguments.length)
				},
				append: function() {
					return Fe(this, arguments, function(e) {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
					})
				},
				prepend: function() {
					return Fe(this, arguments, function(e) {
						if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var t = Pe(this, e);
							t.insertBefore(e, t.firstChild)
						}
					})
				},
				before: function() {
					return Fe(this, arguments, function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this)
					})
				},
				after: function() {
					return Fe(this, arguments, function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
					})
				},
				empty: function() {
					for(var e, t = 0; null != (e = this[t]); t++) {
						for(1 === e.nodeType && g.cleanData(le(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
						e.options && g.nodeName(e, "select") && (e.options.length = 0)
					}
					return this
				},
				clone: function(e, t) {
					return e = null != e && e, t = null == t ? e : t, this.map(function() {
						return g.clone(this, e, t)
					})
				},
				html: function(e) {
					return ee(this, function(e) {
						var t = this[0] || {},
							n = 0,
							i = this.length;
						if(void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Se, "") : void 0;
						if("string" == typeof e && !Ae.test(e) && (h.htmlSerialize || !Ce.test(e)) && (h.leadingWhitespace || !re.test(e)) && !se[(ne.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = g.htmlPrefilter(e);
							try {
								for(; n < i; n++) 1 === (t = this[n] || {}).nodeType && (g.cleanData(le(t, !1)), t.innerHTML = e);
								t = 0
							} catch(e) {}
						}
						t && this.empty().append(e)
					}, null, e, arguments.length)
				},
				replaceWith: function() {
					var e = [];
					return Fe(this, arguments, function(t) {
						var n = this.parentNode;
						g.inArray(this, e) < 0 && (g.cleanData(le(this)), n && n.replaceChild(t, this))
					}, e)
				}
			}), g.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function(e, t) {
				g.fn[e] = function(e) {
					for(var n, i = 0, r = [], o = g(e), a = o.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), g(o[i])[t](n), u.apply(r, n.get());
					return this.pushStack(r)
				}
			});
			var $e, Re = {
				HTML: "block",
				BODY: "block"
			};

			function Oe(e, t) {
				var n = g(t.createElement(e)).appendTo(t.body),
					i = g.css(n[0], "display");
				return n.detach(), i
			}

			function Be(e) {
				var t = a,
					n = Re[e];
				return n || ("none" !== (n = Oe(e, t)) && n || ((t = (($e = ($e || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || $e[0].contentDocument).document).write(), t.close(), n = Oe(e, t), $e.detach()), Re[e] = n), n
			}
			var We = /^margin/,
				qe = new RegExp("^(" + V + ")(?!px)[a-z%]+$", "i"),
				ze = function(e, t, n, i) {
					var r, o, a = {};
					for(o in t) a[o] = e.style[o], e.style[o] = t[o];
					for(o in r = n.apply(e, i || []), t) e.style[o] = a[o];
					return r
				},
				Ye = a.documentElement;
			! function() {
				var e, t, i, r, o, s, l = a.createElement("div"),
					u = a.createElement("div");

				function c() {
					var c, d, p = a.documentElement;
					p.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", e = i = s = !1, t = o = !0, n.getComputedStyle && (d = n.getComputedStyle(u), e = "1%" !== (d || {}).top, s = "2px" === (d || {}).marginLeft, i = "4px" === (d || {
						width: "4px"
					}).width, u.style.marginRight = "50%", t = "4px" === (d || {
						marginRight: "4px"
					}).marginRight, (c = u.appendChild(a.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", u.style.width = "1px", o = !parseFloat((n.getComputedStyle(c) || {}).marginRight), u.removeChild(c)), u.style.display = "none", (r = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (c = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === c[0].offsetHeight) && (c[0].style.display = "", c[1].style.display = "none", r = 0 === c[0].offsetHeight)), p.removeChild(l)
				}
				u.style && (u.style.cssText = "float:left;opacity:.5", h.opacity = "0.5" === u.style.opacity, h.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === u.style.backgroundClip, (l = a.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), h.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, g.extend(h, {
					reliableHiddenOffsets: function() {
						return null == e && c(), r
					},
					boxSizingReliable: function() {
						return null == e && c(), i
					},
					pixelMarginRight: function() {
						return null == e && c(), t
					},
					pixelPosition: function() {
						return null == e && c(), e
					},
					reliableMarginRight: function() {
						return null == e && c(), o
					},
					reliableMarginLeft: function() {
						return null == e && c(), s
					}
				}))
			}();
			var Ve, Ge, Xe = /^(top|right|bottom|left)$/;

			function Ke(e, t) {
				return {
					get: function() {
						if(!e()) return(this.get = t).apply(this, arguments);
						delete this.get
					}
				}
			}
			n.getComputedStyle ? (Ve = function(e) {
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = n), t.getComputedStyle(e)
			}, Ge = function(e, t, n) {
				var i, r, o, a, s = e.style;
				return "" !== (a = (n = n || Ve(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || g.contains(e.ownerDocument, e) || (a = g.style(e, t)), n && !h.pixelMarginRight() && qe.test(a) && We.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
			}) : Ye.currentStyle && (Ve = function(e) {
				return e.currentStyle
			}, Ge = function(e, t, n) {
				var i, r, o, a, s = e.style;
				return null == (a = (n = n || Ve(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), qe.test(a) && !Xe.test(t) && (i = s.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
			});
			var Ue = /alpha\([^)]*\)/i,
				Qe = /opacity\s*=\s*([^)]*)/i,
				Je = /^(none|table(?!-c[ea]).+)/,
				Ze = new RegExp("^(" + V + ")(.*)$", "i"),
				et = {
					position: "absolute",
					visibility: "hidden",
					display: "block"
				},
				tt = {
					letterSpacing: "0",
					fontWeight: "400"
				},
				nt = ["Webkit", "O", "Moz", "ms"],
				it = a.createElement("div").style;

			function rt(e) {
				if(e in it) return e;
				for(var t = e.charAt(0).toUpperCase() + e.slice(1), n = nt.length; n--;)
					if((e = nt[n] + t) in it) return e
			}

			function ot(e, t) {
				for(var n, i, r, o = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (o[a] = g._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && K(i) && (o[a] = g._data(i, "olddisplay", Be(i.nodeName)))) : (r = K(i), (n && "none" !== n || !r) && g._data(i, "olddisplay", r ? n : g.css(i, "display"))));
				for(a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
				return e
			}

			function at(e, t, n) {
				var i = Ze.exec(t);
				return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
			}

			function st(e, t, n, i, r) {
				for(var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += g.css(e, n + X[o], !0, r)), i ? ("content" === n && (a -= g.css(e, "padding" + X[o], !0, r)), "margin" !== n && (a -= g.css(e, "border" + X[o] + "Width", !0, r))) : (a += g.css(e, "padding" + X[o], !0, r), "padding" !== n && (a += g.css(e, "border" + X[o] + "Width", !0, r)));
				return a
			}

			function lt(e, t, n) {
				var i = !0,
					r = "width" === t ? e.offsetWidth : e.offsetHeight,
					o = Ve(e),
					a = h.boxSizing && "border-box" === g.css(e, "boxSizing", !1, o);
				if(r <= 0 || null == r) {
					if(((r = Ge(e, t, o)) < 0 || null == r) && (r = e.style[t]), qe.test(r)) return r;
					i = a && (h.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
				}
				return r + st(e, t, n || (a ? "border" : "content"), i, o) + "px"
			}

			function ut(e, t, n, i, r) {
				return new ut.prototype.init(e, t, n, i, r)
			}
			g.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if(t) {
								var n = Ge(e, "opacity");
								return "" === n ? "1" : n
							}
						}
					}
				},
				cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {
					float: h.cssFloat ? "cssFloat" : "styleFloat"
				},
				style: function(e, t, n, i) {
					if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var r, o, a, s = g.camelCase(t),
							l = e.style;
						if(t = g.cssProps[s] || (g.cssProps[s] = rt(s) || s), a = g.cssHooks[t] || g.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
						if("string" == (o = typeof n) && (r = G.exec(n)) && r[1] && (n = U(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (g.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
							l[t] = n
						} catch(e) {}
					}
				},
				css: function(e, t, n, i) {
					var r, o, a, s = g.camelCase(t);
					return t = g.cssProps[s] || (g.cssProps[s] = rt(s) || s), (a = g.cssHooks[t] || g.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ge(e, t, i)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
				}
			}), g.each(["height", "width"], function(e, t) {
				g.cssHooks[t] = {
					get: function(e, n, i) {
						if(n) return Je.test(g.css(e, "display")) && 0 === e.offsetWidth ? ze(e, et, function() {
							return lt(e, t, i)
						}) : lt(e, t, i)
					},
					set: function(e, n, i) {
						var r = i && Ve(e);
						return at(0, n, i ? st(e, t, i, h.boxSizing && "border-box" === g.css(e, "boxSizing", !1, r), r) : 0)
					}
				}
			}), h.opacity || (g.cssHooks.opacity = {
				get: function(e, t) {
					return Qe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
				},
				set: function(e, t) {
					var n = e.style,
						i = e.currentStyle,
						r = g.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
						o = i && i.filter || n.filter || "";
					n.zoom = 1, (t >= 1 || "" === t) && "" === g.trim(o.replace(Ue, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Ue.test(o) ? o.replace(Ue, r) : o + " " + r)
				}
			}), g.cssHooks.marginRight = Ke(h.reliableMarginRight, function(e, t) {
				if(t) return ze(e, {
					display: "inline-block"
				}, Ge, [e, "marginRight"])
			}), g.cssHooks.marginLeft = Ke(h.reliableMarginLeft, function(e, t) {
				if(t) return(parseFloat(Ge(e, "marginLeft")) || (g.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ze(e, {
					marginLeft: 0
				}, function() {
					return e.getBoundingClientRect().left
				}) : 0)) + "px"
			}), g.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function(e, t) {
				g.cssHooks[e + t] = {
					expand: function(n) {
						for(var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + X[i] + t] = o[i] || o[i - 2] || o[0];
						return r
					}
				}, We.test(e) || (g.cssHooks[e + t].set = at)
			}), g.fn.extend({
				css: function(e, t) {
					return ee(this, function(e, t, n) {
						var i, r, o = {},
							a = 0;
						if(g.isArray(t)) {
							for(i = Ve(e), r = t.length; a < r; a++) o[t[a]] = g.css(e, t[a], !1, i);
							return o
						}
						return void 0 !== n ? g.style(e, t, n) : g.css(e, t)
					}, e, t, arguments.length > 1)
				},
				show: function() {
					return ot(this, !0)
				},
				hide: function() {
					return ot(this)
				},
				toggle: function(e) {
					return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
						K(this) ? g(this).show() : g(this).hide()
					})
				}
			}), g.Tween = ut, ut.prototype = {
				constructor: ut,
				init: function(e, t, n, i, r, o) {
					this.elem = e, this.prop = n, this.easing = r || g.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (g.cssNumber[n] ? "" : "px")
				},
				cur: function() {
					var e = ut.propHooks[this.prop];
					return e && e.get ? e.get(this) : ut.propHooks._default.get(this)
				},
				run: function(e) {
					var t, n = ut.propHooks[this.prop];
					return this.options.duration ? this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ut.propHooks._default.set(this), this
				}
			}, ut.prototype.init.prototype = ut.prototype, ut.propHooks = {
				_default: {
					get: function(e) {
						var t;
						return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = g.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
					},
					set: function(e) {
						g.fx.step[e.prop] ? g.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[g.cssProps[e.prop]] && !g.cssHooks[e.prop] ? e.elem[e.prop] = e.now : g.style(e.elem, e.prop, e.now + e.unit)
					}
				}
			}, ut.propHooks.scrollTop = ut.propHooks.scrollLeft = {
				set: function(e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
				}
			}, g.easing = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2
				},
				_default: "swing"
			}, g.fx = ut.prototype.init, g.fx.step = {};
			var ct, dt, pt = /^(?:toggle|show|hide)$/,
				ft = /queueHooks$/;

			function ht() {
				return n.setTimeout(function() {
					ct = void 0
				}), ct = g.now()
			}

			function gt(e, t) {
				var n, i = {
						height: e
					},
					r = 0;
				for(t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = X[r])] = i["padding" + n] = e;
				return t && (i.opacity = i.width = e), i
			}

			function mt(e, t, n) {
				for(var i, r = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
					if(i = r[o].call(n, t, e)) return i
			}

			function vt(e, t, n) {
				var i, r, o = 0,
					a = vt.prefilters.length,
					s = g.Deferred().always(function() {
						delete l.elem
					}),
					l = function() {
						if(r) return !1;
						for(var t = ct || ht(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
						return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (s.resolveWith(e, [u]), !1)
					},
					u = s.promise({
						elem: e,
						props: g.extend({}, t),
						opts: g.extend(!0, {
							specialEasing: {},
							easing: g.easing._default
						}, n),
						originalProperties: t,
						originalOptions: n,
						startTime: ct || ht(),
						duration: n.duration,
						tweens: [],
						createTween: function(t, n) {
							var i = g.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
							return u.tweens.push(i), i
						},
						stop: function(t) {
							var n = 0,
								i = t ? u.tweens.length : 0;
							if(r) return this;
							for(r = !0; n < i; n++) u.tweens[n].run(1);
							return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
						}
					}),
					c = u.props;
				for(function(e, t) {
						var n, i, r, o, a;
						for(n in e)
							if(r = t[i = g.camelCase(n)], o = e[n], g.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = g.cssHooks[i]) && "expand" in a)
								for(n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
							else t[i] = r
					}(c, u.opts.specialEasing); o < a; o++)
					if(i = vt.prefilters[o].call(u, e, c, u.opts)) return g.isFunction(i.stop) && (g._queueHooks(u.elem, u.opts.queue).stop = g.proxy(i.stop, i)), i;
				return g.map(c, mt, u), g.isFunction(u.opts.start) && u.opts.start.call(e, u), g.fx.timer(g.extend(l, {
					elem: e,
					anim: u,
					queue: u.opts.queue
				})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
			}
			g.Animation = g.extend(vt, {
					tweeners: {
						"*": [function(e, t) {
							var n = this.createTween(e, t);
							return U(n.elem, e, G.exec(t), n), n
						}]
					},
					tweener: function(e, t) {
						g.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(I);
						for(var n, i = 0, r = e.length; i < r; i++) n = e[i], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
					},
					prefilters: [function(e, t, n) {
						var i, r, o, a, s, l, u, c = this,
							d = {},
							p = e.style,
							f = e.nodeType && K(e),
							m = g._data(e, "fxshow");
						for(i in n.queue || (null == (s = g._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
								s.unqueued || l()
							}), s.unqueued++, c.always(function() {
								c.always(function() {
									s.unqueued--, g.queue(e, "fx").length || s.empty.fire()
								})
							})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (u = g.css(e, "display")) ? g._data(e, "olddisplay") || Be(e.nodeName) : u) && "none" === g.css(e, "float") && (h.inlineBlockNeedsLayout && "inline" !== Be(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.shrinkWrapBlocks() || c.always(function() {
								p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
							})), t)
							if(r = t[i], pt.exec(r)) {
								if(delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
									if("show" !== r || !m || void 0 === m[i]) continue;
									f = !0
								}
								d[i] = m && m[i] || g.style(e, i)
							} else u = void 0;
						if(g.isEmptyObject(d)) "inline" === ("none" === u ? Be(e.nodeName) : u) && (p.display = u);
						else
							for(i in m ? "hidden" in m && (f = m.hidden) : m = g._data(e, "fxshow", {}), o && (m.hidden = !f), f ? g(e).show() : c.done(function() {
									g(e).hide()
								}), c.done(function() {
									var t;
									for(t in g._removeData(e, "fxshow"), d) g.style(e, t, d[t])
								}), d) a = mt(f ? m[i] : 0, i, c), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
					}],
					prefilter: function(e, t) {
						t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
					}
				}), g.speed = function(e, t, n) {
					var i = e && "object" == typeof e ? g.extend({}, e) : {
						complete: n || !n && t || g.isFunction(e) && e,
						duration: e,
						easing: n && t || t && !g.isFunction(t) && t
					};
					return i.duration = g.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in g.fx.speeds ? g.fx.speeds[i.duration] : g.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
						g.isFunction(i.old) && i.old.call(this), i.queue && g.dequeue(this, i.queue)
					}, i
				}, g.fn.extend({
					fadeTo: function(e, t, n, i) {
						return this.filter(K).css("opacity", 0).show().end().animate({
							opacity: t
						}, e, n, i)
					},
					animate: function(e, t, n, i) {
						var r = g.isEmptyObject(e),
							o = g.speed(t, n, i),
							a = function() {
								var t = vt(this, g.extend({}, e), o);
								(r || g._data(this, "finish")) && t.stop(!0)
							};
						return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
					},
					stop: function(e, t, n) {
						var i = function(e) {
							var t = e.stop;
							delete e.stop, t(n)
						};
						return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
							var t = !0,
								r = null != e && e + "queueHooks",
								o = g.timers,
								a = g._data(this);
							if(r) a[r] && a[r].stop && i(a[r]);
							else
								for(r in a) a[r] && a[r].stop && ft.test(r) && i(a[r]);
							for(r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
							!t && n || g.dequeue(this, e)
						})
					},
					finish: function(e) {
						return !1 !== e && (e = e || "fx"), this.each(function() {
							var t, n = g._data(this),
								i = n[e + "queue"],
								r = n[e + "queueHooks"],
								o = g.timers,
								a = i ? i.length : 0;
							for(n.finish = !0, g.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
							for(t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
							delete n.finish
						})
					}
				}), g.each(["toggle", "show", "hide"], function(e, t) {
					var n = g.fn[t];
					g.fn[t] = function(e, i, r) {
						return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(gt(t, !0), e, i, r)
					}
				}), g.each({
					slideDown: gt("show"),
					slideUp: gt("hide"),
					slideToggle: gt("toggle"),
					fadeIn: {
						opacity: "show"
					},
					fadeOut: {
						opacity: "hide"
					},
					fadeToggle: {
						opacity: "toggle"
					}
				}, function(e, t) {
					g.fn[e] = function(e, n, i) {
						return this.animate(t, e, n, i)
					}
				}), g.timers = [], g.fx.tick = function() {
					var e, t = g.timers,
						n = 0;
					for(ct = g.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
					t.length || g.fx.stop(), ct = void 0
				}, g.fx.timer = function(e) {
					g.timers.push(e), e() ? g.fx.start() : g.timers.pop()
				}, g.fx.interval = 13, g.fx.start = function() {
					dt || (dt = n.setInterval(g.fx.tick, g.fx.interval))
				}, g.fx.stop = function() {
					n.clearInterval(dt), dt = null
				}, g.fx.speeds = {
					slow: 600,
					fast: 200,
					_default: 400
				}, g.fn.delay = function(e, t) {
					return e = g.fx && g.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, i) {
						var r = n.setTimeout(t, e);
						i.stop = function() {
							n.clearTimeout(r)
						}
					})
				},
				function() {
					var e, t = a.createElement("input"),
						n = a.createElement("div"),
						i = a.createElement("select"),
						r = i.appendChild(a.createElement("option"));
					(n = a.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", h.getSetAttribute = "t" !== n.className, h.style = /top/.test(e.getAttribute("style")), h.hrefNormalized = "/a" === e.getAttribute("href"), h.checkOn = !!t.value, h.optSelected = r.selected, h.enctype = !!a.createElement("form").enctype, i.disabled = !0, h.optDisabled = !r.disabled, (t = a.createElement("input")).setAttribute("value", ""), h.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), h.radioValue = "t" === t.value
				}();
			var yt = /\r/g,
				wt = /[\x20\t\r\n\f]+/g;
			g.fn.extend({
				val: function(e) {
					var t, n, i, r = this[0];
					return arguments.length ? (i = g.isFunction(e), this.each(function(n) {
						var r;
						1 === this.nodeType && (null == (r = i ? e.call(this, n, g(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : g.isArray(r) && (r = g.map(r, function(e) {
							return null == e ? "" : e + ""
						})), (t = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
					})) : r ? (t = g.valHooks[r.type] || g.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
				}
			}), g.extend({
				valHooks: {
					option: {
						get: function(e) {
							var t = g.find.attr(e, "value");
							return null != t ? t : g.trim(g.text(e)).replace(wt, " ")
						}
					},
					select: {
						get: function(e) {
							for(var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
								if(((n = i[l]).selected || l === r) && (h.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !g.nodeName(n.parentNode, "optgroup"))) {
									if(t = g(n).val(), o) return t;
									a.push(t)
								}
							return a
						},
						set: function(e, t) {
							for(var n, i, r = e.options, o = g.makeArray(t), a = r.length; a--;)
								if(i = r[a], g.inArray(g.valHooks.option.get(i), o) > -1) try {
									i.selected = n = !0
								} catch(e) {
									i.scrollHeight
								} else i.selected = !1;
							return n || (e.selectedIndex = -1), r
						}
					}
				}
			}), g.each(["radio", "checkbox"], function() {
				g.valHooks[this] = {
					set: function(e, t) {
						if(g.isArray(t)) return e.checked = g.inArray(g(e).val(), t) > -1
					}
				}, h.checkOn || (g.valHooks[this].get = function(e) {
					return null === e.getAttribute("value") ? "on" : e.value
				})
			});
			var bt, xt, Tt = g.expr.attrHandle,
				St = /^(?:checked|selected)$/i,
				Ct = h.getSetAttribute,
				Et = h.input;
			g.fn.extend({
				attr: function(e, t) {
					return ee(this, g.attr, e, t, arguments.length > 1)
				},
				removeAttr: function(e) {
					return this.each(function() {
						g.removeAttr(this, e)
					})
				}
			}), g.extend({
				attr: function(e, t, n) {
					var i, r, o = e.nodeType;
					if(3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? g.prop(e, t, n) : (1 === o && g.isXMLDoc(e) || (t = t.toLowerCase(), r = g.attrHooks[t] || (g.expr.match.bool.test(t) ? xt : bt)), void 0 !== n ? null === n ? void g.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = g.find.attr(e, t)) ? void 0 : i)
				},
				attrHooks: {
					type: {
						set: function(e, t) {
							if(!h.radioValue && "radio" === t && g.nodeName(e, "input")) {
								var n = e.value;
								return e.setAttribute("type", t), n && (e.value = n), t
							}
						}
					}
				},
				removeAttr: function(e, t) {
					var n, i, r = 0,
						o = t && t.match(I);
					if(o && 1 === e.nodeType)
						for(; n = o[r++];) i = g.propFix[n] || n, g.expr.match.bool.test(n) ? Et && Ct || !St.test(n) ? e[i] = !1 : e[g.camelCase("default-" + n)] = e[i] = !1 : g.attr(e, n, ""), e.removeAttribute(Ct ? n : i)
				}
			}), xt = {
				set: function(e, t, n) {
					return !1 === t ? g.removeAttr(e, n) : Et && Ct || !St.test(n) ? e.setAttribute(!Ct && g.propFix[n] || n, n) : e[g.camelCase("default-" + n)] = e[n] = !0, n
				}
			}, g.each(g.expr.match.bool.source.match(/\w+/g), function(e, t) {
				var n = Tt[t] || g.find.attr;
				Et && Ct || !St.test(t) ? Tt[t] = function(e, t, i) {
					var r, o;
					return i || (o = Tt[t], Tt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Tt[t] = o), r
				} : Tt[t] = function(e, t, n) {
					if(!n) return e[g.camelCase("default-" + t)] ? t.toLowerCase() : null
				}
			}), Et && Ct || (g.attrHooks.value = {
				set: function(e, t, n) {
					if(!g.nodeName(e, "input")) return bt && bt.set(e, t, n);
					e.defaultValue = t
				}
			}), Ct || (bt = {
				set: function(e, t, n) {
					var i = e.getAttributeNode(n);
					if(i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
				}
			}, Tt.id = Tt.name = Tt.coords = function(e, t, n) {
				var i;
				if(!n) return(i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
			}, g.valHooks.button = {
				get: function(e, t) {
					var n = e.getAttributeNode(t);
					if(n && n.specified) return n.value
				},
				set: bt.set
			}, g.attrHooks.contenteditable = {
				set: function(e, t, n) {
					bt.set(e, "" !== t && t, n)
				}
			}, g.each(["width", "height"], function(e, t) {
				g.attrHooks[t] = {
					set: function(e, n) {
						if("" === n) return e.setAttribute(t, "auto"), n
					}
				}
			})), h.style || (g.attrHooks.style = {
				get: function(e) {
					return e.style.cssText || void 0
				},
				set: function(e, t) {
					return e.style.cssText = t + ""
				}
			});
			var At = /^(?:input|select|textarea|button|object)$/i,
				kt = /^(?:a|area)$/i;
			g.fn.extend({
				prop: function(e, t) {
					return ee(this, g.prop, e, t, arguments.length > 1)
				},
				removeProp: function(e) {
					return e = g.propFix[e] || e, this.each(function() {
						try {
							this[e] = void 0, delete this[e]
						} catch(e) {}
					})
				}
			}), g.extend({
				prop: function(e, t, n) {
					var i, r, o = e.nodeType;
					if(3 !== o && 8 !== o && 2 !== o) return 1 === o && g.isXMLDoc(e) || (t = g.propFix[t] || t, r = g.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
				},
				propHooks: {
					tabIndex: {
						get: function(e) {
							var t = g.find.attr(e, "tabindex");
							return t ? parseInt(t, 10) : At.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
						}
					}
				},
				propFix: {
					for: "htmlFor",
					class: "className"
				}
			}), h.hrefNormalized || g.each(["href", "src"], function(e, t) {
				g.propHooks[t] = {
					get: function(e) {
						return e.getAttribute(t, 4)
					}
				}
			}), h.optSelected || (g.propHooks.selected = {
				get: function(e) {
					var t = e.parentNode;
					return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
				},
				set: function(e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
				}
			}), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
				g.propFix[this.toLowerCase()] = this
			}), h.enctype || (g.propFix.enctype = "encoding");
			var Lt = /[\t\r\n\f]/g;

			function _t(e) {
				return g.attr(e, "class") || ""
			}
			g.fn.extend({
				addClass: function(e) {
					var t, n, i, r, o, a, s, l = 0;
					if(g.isFunction(e)) return this.each(function(t) {
						g(this).addClass(e.call(this, t, _t(this)))
					});
					if("string" == typeof e && e)
						for(t = e.match(I) || []; n = this[l++];)
							if(r = _t(n), i = 1 === n.nodeType && (" " + r + " ").replace(Lt, " ")) {
								for(a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
								r !== (s = g.trim(i)) && g.attr(n, "class", s)
							}
					return this
				},
				removeClass: function(e) {
					var t, n, i, r, o, a, s, l = 0;
					if(g.isFunction(e)) return this.each(function(t) {
						g(this).removeClass(e.call(this, t, _t(this)))
					});
					if(!arguments.length) return this.attr("class", "");
					if("string" == typeof e && e)
						for(t = e.match(I) || []; n = this[l++];)
							if(r = _t(n), i = 1 === n.nodeType && (" " + r + " ").replace(Lt, " ")) {
								for(a = 0; o = t[a++];)
									for(; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
								r !== (s = g.trim(i)) && g.attr(n, "class", s)
							}
					return this
				},
				toggleClass: function(e, t) {
					var n = typeof e;
					return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : g.isFunction(e) ? this.each(function(n) {
						g(this).toggleClass(e.call(this, n, _t(this), t), t)
					}) : this.each(function() {
						var t, i, r, o;
						if("string" === n)
							for(i = 0, r = g(this), o = e.match(I) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
						else void 0 !== e && "boolean" !== n || ((t = _t(this)) && g._data(this, "__className__", t), g.attr(this, "class", t || !1 === e ? "" : g._data(this, "__className__") || ""))
					})
				},
				hasClass: function(e) {
					var t, n, i = 0;
					for(t = " " + e + " "; n = this[i++];)
						if(1 === n.nodeType && (" " + _t(n) + " ").replace(Lt, " ").indexOf(t) > -1) return !0;
					return !1
				}
			}), g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
				g.fn[t] = function(e, n) {
					return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
				}
			}), g.fn.extend({
				hover: function(e, t) {
					return this.mouseenter(e).mouseleave(t || e)
				}
			});
			var Nt = n.location,
				Pt = g.now(),
				Mt = /\?/,
				Dt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
			g.parseJSON = function(e) {
				if(n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
				var t, i = null,
					r = g.trim(e + "");
				return r && !g.trim(r.replace(Dt, function(e, n, r, o) {
					return t && n && (i = 0), 0 === i ? e : (t = r || n, i += !o - !r, "")
				})) ? Function("return " + r)() : g.error("Invalid JSON: " + e)
			}, g.parseXML = function(e) {
				var t;
				if(!e || "string" != typeof e) return null;
				try {
					n.DOMParser ? t = (new n.DOMParser).parseFromString(e, "text/xml") : ((t = new n.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
				} catch(e) {
					t = void 0
				}
				return t && t.documentElement && !t.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + e), t
			};
			var Ht = /#.*$/,
				It = /([?&])_=[^&]*/,
				Ft = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
				jt = /^(?:GET|HEAD)$/,
				$t = /^\/\//,
				Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
				Ot = {},
				Bt = {},
				Wt = "*/".concat("*"),
				qt = Nt.href,
				zt = Rt.exec(qt.toLowerCase()) || [];

			function Yt(e) {
				return function(t, n) {
					"string" != typeof t && (n = t, t = "*");
					var i, r = 0,
						o = t.toLowerCase().match(I) || [];
					if(g.isFunction(n))
						for(; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
				}
			}

			function Vt(e, t, n, i) {
				var r = {},
					o = e === Bt;

				function a(s) {
					var l;
					return r[s] = !0, g.each(e[s] || [], function(e, s) {
						var u = s(t, n, i);
						return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
					}), l
				}
				return a(t.dataTypes[0]) || !r["*"] && a("*")
			}

			function Gt(e, t) {
				var n, i, r = g.ajaxSettings.flatOptions || {};
				for(i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
				return n && g.extend(!0, e, n), e
			}

			function Xt(e) {
				return e.style && e.style.display || g.css(e, "display")
			}
			g.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: qt,
					type: "GET",
					isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(zt[1]),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": Wt,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": !0,
						"text json": g.parseJSON,
						"text xml": g.parseXML
					},
					flatOptions: {
						url: !0,
						context: !0
					}
				},
				ajaxSetup: function(e, t) {
					return t ? Gt(Gt(e, g.ajaxSettings), t) : Gt(g.ajaxSettings, e)
				},
				ajaxPrefilter: Yt(Ot),
				ajaxTransport: Yt(Bt),
				ajax: function(e, t) {
					"object" == typeof e && (t = e, e = void 0), t = t || {};
					var i, r, o, a, s, l, u, c, d = g.ajaxSetup({}, t),
						p = d.context || d,
						f = d.context && (p.nodeType || p.jquery) ? g(p) : g.event,
						h = g.Deferred(),
						m = g.Callbacks("once memory"),
						v = d.statusCode || {},
						y = {},
						w = {},
						b = 0,
						x = "canceled",
						T = {
							readyState: 0,
							getResponseHeader: function(e) {
								var t;
								if(2 === b) {
									if(!c)
										for(c = {}; t = Ft.exec(a);) c[t[1].toLowerCase()] = t[2];
									t = c[e.toLowerCase()]
								}
								return null == t ? null : t
							},
							getAllResponseHeaders: function() {
								return 2 === b ? a : null
							},
							setRequestHeader: function(e, t) {
								var n = e.toLowerCase();
								return b || (e = w[n] = w[n] || e, y[e] = t), this
							},
							overrideMimeType: function(e) {
								return b || (d.mimeType = e), this
							},
							statusCode: function(e) {
								var t;
								if(e)
									if(b < 2)
										for(t in e) v[t] = [v[t], e[t]];
									else T.always(e[T.status]);
								return this
							},
							abort: function(e) {
								var t = e || x;
								return u && u.abort(t), S(0, t), this
							}
						};
					if(h.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || qt) + "").replace(Ht, "").replace($t, zt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = g.trim(d.dataType || "*").toLowerCase().match(I) || [""], null == d.crossDomain && (i = Rt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === zt[1] && i[2] === zt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (zt[3] || ("http:" === zt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = g.param(d.data, d.traditional)), Vt(Ot, d, t, T), 2 === b) return T;
					for(r in (l = g.event && d.global) && 0 == g.active++ && g.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !jt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Mt.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = It.test(o) ? o.replace(It, "$1_=" + Pt++) : o + (Mt.test(o) ? "&" : "?") + "_=" + Pt++)), d.ifModified && (g.lastModified[o] && T.setRequestHeader("If-Modified-Since", g.lastModified[o]), g.etag[o] && T.setRequestHeader("If-None-Match", g.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : d.accepts["*"]), d.headers) T.setRequestHeader(r, d.headers[r]);
					if(d.beforeSend && (!1 === d.beforeSend.call(p, T, d) || 2 === b)) return T.abort();
					for(r in x = "abort", {
							success: 1,
							error: 1,
							complete: 1
						}) T[r](d[r]);
					if(u = Vt(Bt, d, t, T)) {
						if(T.readyState = 1, l && f.trigger("ajaxSend", [T, d]), 2 === b) return T;
						d.async && d.timeout > 0 && (s = n.setTimeout(function() {
							T.abort("timeout")
						}, d.timeout));
						try {
							b = 1, u.send(y, S)
						} catch(e) {
							if(!(b < 2)) throw e;
							S(-1, e)
						}
					} else S(-1, "No Transport");

					function S(e, t, i, r) {
						var c, y, w, x, S, C = t;
						2 !== b && (b = 2, s && n.clearTimeout(s), u = void 0, a = r || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (x = function(e, t, n) {
							for(var i, r, o, a, s = e.contents, l = e.dataTypes;
								"*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
							if(r)
								for(a in s)
									if(s[a] && s[a].test(r)) {
										l.unshift(a);
										break
									}
							if(l[0] in n) o = l[0];
							else {
								for(a in n) {
									if(!l[0] || e.converters[a + " " + l[0]]) {
										o = a;
										break
									}
									i || (i = a)
								}
								o = o || i
							}
							if(o) return o !== l[0] && l.unshift(o), n[o]
						}(d, T, i)), x = function(e, t, n, i) {
							var r, o, a, s, l, u = {},
								c = e.dataTypes.slice();
							if(c[1])
								for(a in e.converters) u[a.toLowerCase()] = e.converters[a];
							for(o = c.shift(); o;)
								if(e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
									if("*" === o) o = l;
									else if("*" !== l && l !== o) {
								if(!(a = u[l + " " + o] || u["* " + o]))
									for(r in u)
										if((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
											!0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
											break
										}
								if(!0 !== a)
									if(a && e.throws) t = a(t);
									else try {
										t = a(t)
									} catch(e) {
										return {
											state: "parsererror",
											error: a ? e : "No conversion from " + l + " to " + o
										}
									}
							}
							return {
								state: "success",
								data: t
							}
						}(d, x, T, c), c ? (d.ifModified && ((S = T.getResponseHeader("Last-Modified")) && (g.lastModified[o] = S), (S = T.getResponseHeader("etag")) && (g.etag[o] = S)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, y = x.data, c = !(w = x.error))) : (w = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || C) + "", c ? h.resolveWith(p, [y, C, T]) : h.rejectWith(p, [T, C, w]), T.statusCode(v), v = void 0, l && f.trigger(c ? "ajaxSuccess" : "ajaxError", [T, d, c ? y : w]), m.fireWith(p, [T, C]), l && (f.trigger("ajaxComplete", [T, d]), --g.active || g.event.trigger("ajaxStop")))
					}
					return T
				},
				getJSON: function(e, t, n) {
					return g.get(e, t, n, "json")
				},
				getScript: function(e, t) {
					return g.get(e, void 0, t, "script")
				}
			}), g.each(["get", "post"], function(e, t) {
				g[t] = function(e, n, i, r) {
					return g.isFunction(n) && (r = r || i, i = n, n = void 0), g.ajax(g.extend({
						url: e,
						type: t,
						dataType: r,
						data: n,
						success: i
					}, g.isPlainObject(e) && e))
				}
			}), g._evalUrl = function(e) {
				return g.ajax({
					url: e,
					type: "GET",
					dataType: "script",
					cache: !0,
					async: !1,
					global: !1,
					throws: !0
				})
			}, g.fn.extend({
				wrapAll: function(e) {
					if(g.isFunction(e)) return this.each(function(t) {
						g(this).wrapAll(e.call(this, t))
					});
					if(this[0]) {
						var t = g(e, this[0].ownerDocument).eq(0).clone(!0);
						this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
							for(var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
							return e
						}).append(this)
					}
					return this
				},
				wrapInner: function(e) {
					return g.isFunction(e) ? this.each(function(t) {
						g(this).wrapInner(e.call(this, t))
					}) : this.each(function() {
						var t = g(this),
							n = t.contents();
						n.length ? n.wrapAll(e) : t.append(e)
					})
				},
				wrap: function(e) {
					var t = g.isFunction(e);
					return this.each(function(n) {
						g(this).wrapAll(t ? e.call(this, n) : e)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
					}).end()
				}
			}), g.expr.filters.hidden = function(e) {
				return h.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
					if(!g.contains(e.ownerDocument || a, e)) return !0;
					for(; e && 1 === e.nodeType;) {
						if("none" === Xt(e) || "hidden" === e.type) return !0;
						e = e.parentNode
					}
					return !1
				}(e)
			}, g.expr.filters.visible = function(e) {
				return !g.expr.filters.hidden(e)
			};
			var Kt = /%20/g,
				Ut = /\[\]$/,
				Qt = /\r?\n/g,
				Jt = /^(?:submit|button|image|reset|file)$/i,
				Zt = /^(?:input|select|textarea|keygen)/i;

			function en(e, t, n, i) {
				var r;
				if(g.isArray(t)) g.each(t, function(t, r) {
					n || Ut.test(e) ? i(e, r) : en(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
				});
				else if(n || "object" !== g.type(t)) i(e, t);
				else
					for(r in t) en(e + "[" + r + "]", t[r], n, i)
			}
			g.param = function(e, t) {
				var n, i = [],
					r = function(e, t) {
						t = g.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
					};
				if(void 0 === t && (t = g.ajaxSettings && g.ajaxSettings.traditional), g.isArray(e) || e.jquery && !g.isPlainObject(e)) g.each(e, function() {
					r(this.name, this.value)
				});
				else
					for(n in e) en(n, e[n], t, r);
				return i.join("&").replace(Kt, "+")
			}, g.fn.extend({
				serialize: function() {
					return g.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map(function() {
						var e = g.prop(this, "elements");
						return e ? g.makeArray(e) : this
					}).filter(function() {
						var e = this.type;
						return this.name && !g(this).is(":disabled") && Zt.test(this.nodeName) && !Jt.test(e) && (this.checked || !te.test(e))
					}).map(function(e, t) {
						var n = g(this).val();
						return null == n ? null : g.isArray(n) ? g.map(n, function(e) {
							return {
								name: t.name,
								value: e.replace(Qt, "\r\n")
							}
						}) : {
							name: t.name,
							value: n.replace(Qt, "\r\n")
						}
					}).get()
				}
			}), g.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
				return this.isLocal ? an() : a.documentMode > 8 ? on() : /^(get|post|head|put|delete|options)$/i.test(this.type) && on() || an()
			} : on;
			var tn = 0,
				nn = {},
				rn = g.ajaxSettings.xhr();

			function on() {
				try {
					return new n.XMLHttpRequest
				} catch(e) {}
			}

			function an() {
				try {
					return new n.ActiveXObject("Microsoft.XMLHTTP")
				} catch(e) {}
			}
			n.attachEvent && n.attachEvent("onunload", function() {
				for(var e in nn) nn[e](void 0, !0)
			}), h.cors = !!rn && "withCredentials" in rn, (rn = h.ajax = !!rn) && g.ajaxTransport(function(e) {
				var t;
				if(!e.crossDomain || h.cors) return {
					send: function(i, r) {
						var o, a = e.xhr(),
							s = ++tn;
						if(a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
							for(o in e.xhrFields) a[o] = e.xhrFields[o];
						for(o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
						a.send(e.hasContent && e.data || null), t = function(n, i) {
							var o, l, u;
							if(t && (i || 4 === a.readyState))
								if(delete nn[s], t = void 0, a.onreadystatechange = g.noop, i) 4 !== a.readyState && a.abort();
								else {
									u = {}, o = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
									try {
										l = a.statusText
									} catch(e) {
										l = ""
									}
									o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
								}
							u && r(o, l, u, a.getAllResponseHeaders())
						}, e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = nn[s] = t : t()
					},
					abort: function() {
						t && t(void 0, !0)
					}
				}
			}), g.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /\b(?:java|ecma)script\b/
				},
				converters: {
					"text script": function(e) {
						return g.globalEval(e), e
					}
				}
			}), g.ajaxPrefilter("script", function(e) {
				void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
			}), g.ajaxTransport("script", function(e) {
				if(e.crossDomain) {
					var t, n = a.head || g("head")[0] || a.documentElement;
					return {
						send: function(i, r) {
							(t = a.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
								(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
							}, n.insertBefore(t, n.firstChild)
						},
						abort: function() {
							t && t.onload(void 0, !0)
						}
					}
				}
			});
			var sn = [],
				ln = /(=)\?(?=&|$)|\?\?/;
			g.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function() {
					var e = sn.pop() || g.expando + "_" + Pt++;
					return this[e] = !0, e
				}
			}), g.ajaxPrefilter("json jsonp", function(e, t, i) {
				var r, o, a, s = !1 !== e.jsonp && (ln.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ln.test(e.data) && "data");
				if(s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = g.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ln, "$1" + r) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
					return a || g.error(r + " was not called"), a[0]
				}, e.dataTypes[0] = "json", o = n[r], n[r] = function() {
					a = arguments
				}, i.always(function() {
					void 0 === o ? g(n).removeProp(r) : n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, sn.push(r)), a && g.isFunction(o) && o(a[0]), a = o = void 0
				}), "script"
			}), g.parseHTML = function(e, t, n) {
				if(!e || "string" != typeof e) return null;
				"boolean" == typeof t && (n = t, t = !1), t = t || a;
				var i = E.exec(e),
					r = !n && [];
				return i ? [t.createElement(i[1])] : (i = fe([e], t, r), r && r.length && g(r).remove(), g.merge([], i.childNodes))
			};
			var un = g.fn.load;

			function cn(e) {
				return g.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
			}
			g.fn.load = function(e, t, n) {
				if("string" != typeof e && un) return un.apply(this, arguments);
				var i, r, o, a = this,
					s = e.indexOf(" ");
				return s > -1 && (i = g.trim(e.slice(s, e.length)), e = e.slice(0, s)), g.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && g.ajax({
					url: e,
					type: r || "GET",
					dataType: "html",
					data: t
				}).done(function(e) {
					o = arguments, a.html(i ? g("<div>").append(g.parseHTML(e)).find(i) : e)
				}).always(n && function(e, t) {
					a.each(function() {
						n.apply(this, o || [e.responseText, t, e])
					})
				}), this
			}, g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
				g.fn[t] = function(e) {
					return this.on(t, e)
				}
			}), g.expr.filters.animated = function(e) {
				return g.grep(g.timers, function(t) {
					return e === t.elem
				}).length
			}, g.offset = {
				setOffset: function(e, t, n) {
					var i, r, o, a, s, l, u = g.css(e, "position"),
						c = g(e),
						d = {};
					"static" === u && (e.style.position = "relative"), s = c.offset(), o = g.css(e, "top"), l = g.css(e, "left"), ("absolute" === u || "fixed" === u) && g.inArray("auto", [o, l]) > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), g.isFunction(t) && (t = t.call(e, n, g.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
				}
			}, g.fn.extend({
				offset: function(e) {
					if(arguments.length) return void 0 === e ? this : this.each(function(t) {
						g.offset.setOffset(this, e, t)
					});
					var t, n, i = {
							top: 0,
							left: 0
						},
						r = this[0],
						o = r && r.ownerDocument;
					return o ? (t = o.documentElement, g.contains(t, r) ? (void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = cn(o), {
						top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
						left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
					}) : i) : void 0
				},
				position: function() {
					if(this[0]) {
						var e, t, n = {
								top: 0,
								left: 0
							},
							i = this[0];
						return "fixed" === g.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), g.nodeName(e[0], "html") || (n = e.offset()), n.top += g.css(e[0], "borderTopWidth", !0), n.left += g.css(e[0], "borderLeftWidth", !0)), {
							top: t.top - n.top - g.css(i, "marginTop", !0),
							left: t.left - n.left - g.css(i, "marginLeft", !0)
						}
					}
				},
				offsetParent: function() {
					return this.map(function() {
						for(var e = this.offsetParent; e && !g.nodeName(e, "html") && "static" === g.css(e, "position");) e = e.offsetParent;
						return e || Ye
					})
				}
			}), g.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			}, function(e, t) {
				var n = /Y/.test(t);
				g.fn[e] = function(i) {
					return ee(this, function(e, i, r) {
						var o = cn(e);
						if(void 0 === r) return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
						o ? o.scrollTo(n ? g(o).scrollLeft() : r, n ? r : g(o).scrollTop()) : e[i] = r
					}, e, i, arguments.length, null)
				}
			}), g.each(["top", "left"], function(e, t) {
				g.cssHooks[t] = Ke(h.pixelPosition, function(e, n) {
					if(n) return n = Ge(e, t), qe.test(n) ? g(e).position()[t] + "px" : n
				})
			}), g.each({
				Height: "height",
				Width: "width"
			}, function(e, t) {
				g.each({
					padding: "inner" + e,
					content: t,
					"": "outer" + e
				}, function(n, i) {
					g.fn[i] = function(i, r) {
						var o = arguments.length && (n || "boolean" != typeof i),
							a = n || (!0 === i || !0 === r ? "margin" : "border");
						return ee(this, function(t, n, i) {
							var r;
							return g.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? g.css(t, n, a) : g.style(t, n, i, a)
						}, t, o ? i : void 0, o, null)
					}
				})
			}), g.fn.extend({
				bind: function(e, t, n) {
					return this.on(e, null, t, n)
				},
				unbind: function(e, t) {
					return this.off(e, null, t)
				},
				delegate: function(e, t, n, i) {
					return this.on(t, e, n, i)
				},
				undelegate: function(e, t, n) {
					return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
				}
			}), g.fn.size = function() {
				return this.length
			}, g.fn.andSelf = g.fn.addBack, void 0 === (i = function() {
				return g
			}.apply(t, [])) || (e.exports = i);
			var dn = n.jQuery,
				pn = n.$;
			return g.noConflict = function(e) {
				return n.$ === g && (n.$ = pn), e && n.jQuery === g && (n.jQuery = dn), g
			}, r || (n.jQuery = n.$ = g), g
		}, "object" == typeof e && "object" == typeof e.exports ? e.exports = r.document ? o(r, !0) : function(e) {
			if(!e.document) throw new Error("jQuery requires a window with a document");
			return o(e)
		} : o(r)
	}, , , , , , , , , , , , function(e, t) {
		/*!
		 * Lazy Load - jQuery plugin for lazy loading images
		 *
		 * Copyright (c) 2007-2015 Mika Tuupola
		 *
		 * Licensed under the MIT license:
		 *   http://www.opensource.org/licenses/mit-license.php
		 *
		 * Project home:
		 *   http://www.appelsiini.net/projects/lazyload
		 *
		 * Version:  1.9.7
		 *
		 */
		! function(e, t, n, i) {
			var r = e(t);
			e.fn.lazyload = function(i) {
				var o, a = this,
					s = {
						threshold: 0,
						failure_limit: 0,
						event: "scroll",
						effect: "show",
						container: t,
						data_attribute: "original",
						skip_invisible: !1,
						appear: null,
						load: null,
						placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
					};

				function l() {
					var t = 0;
					a.each(function() {
						var n = e(this);
						if(!s.skip_invisible || n.is(":visible"))
							if(e.abovethetop(this, s) || e.leftofbegin(this, s));
							else if(e.belowthefold(this, s) || e.rightoffold(this, s)) {
							if(++t > s.failure_limit) return !1
						} else n.trigger("appear"), t = 0
					})
				}
				return i && (void 0 !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), void 0 !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), e.extend(s, i)), o = void 0 === s.container || s.container === t ? r : e(s.container), 0 === s.event.indexOf("scroll") && o.bind(s.event, function() {
					return l()
				}), this.each(function() {
					var t = this,
						n = e(t);
					t.loaded = !1, void 0 !== n.attr("src") && !1 !== n.attr("src") || n.is("img") && n.attr("src", s.placeholder), n.one("appear", function() {
						if(!this.loaded) {
							if(s.appear) {
								var i = a.length;
								s.appear.call(t, i, s)
							}
							e("<img />").bind("load", function() {
								var i = n.attr("data-" + s.data_attribute);
								n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[s.effect](s.effect_speed), t.loaded = !0;
								var r = e.grep(a, function(e) {
									return !e.loaded
								});
								if(a = e(r), s.load) {
									var o = a.length;
									s.load.call(t, o, s)
								}
							}).attr("src", n.attr("data-" + s.data_attribute))
						}
					}), 0 !== s.event.indexOf("scroll") && n.bind(s.event, function() {
						t.loaded || n.trigger("appear")
					})
				}), r.bind("resize", function() {
					l()
				}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(t) {
					t.originalEvent && t.originalEvent.persisted && a.each(function() {
						e(this).trigger("appear")
					})
				}), e(n).ready(function() {
					l()
				}), this
			}, e.belowthefold = function(n, i) {
				return(void 0 === i.container || i.container === t ? (t.innerHeight ? t.innerHeight : r.height()) + r.scrollTop() : e(i.container).offset().top + e(i.container).height()) <= e(n).offset().top - i.threshold
			}, e.rightoffold = function(n, i) {
				return(void 0 === i.container || i.container === t ? r.width() + r.scrollLeft() : e(i.container).offset().left + e(i.container).width()) <= e(n).offset().left - i.threshold
			}, e.abovethetop = function(n, i) {
				return(void 0 === i.container || i.container === t ? r.scrollTop() : e(i.container).offset().top) >= e(n).offset().top + i.threshold + e(n).height()
			}, e.leftofbegin = function(n, i) {
				return(void 0 === i.container || i.container === t ? r.scrollLeft() : e(i.container).offset().left) >= e(n).offset().left + i.threshold + e(n).width()
			}, e.inviewport = function(t, n) {
				return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
			}, e.extend(e.expr[":"], {
				"below-the-fold": function(t) {
					return e.belowthefold(t, {
						threshold: 0
					})
				},
				"above-the-top": function(t) {
					return !e.belowthefold(t, {
						threshold: 0
					})
				},
				"right-of-screen": function(t) {
					return e.rightoffold(t, {
						threshold: 0
					})
				},
				"left-of-screen": function(t) {
					return !e.rightoffold(t, {
						threshold: 0
					})
				},
				"in-viewport": function(t) {
					return e.inviewport(t, {
						threshold: 0
					})
				},
				"above-the-fold": function(t) {
					return !e.belowthefold(t, {
						threshold: 0
					})
				},
				"right-of-fold": function(t) {
					return e.rightoffold(t, {
						threshold: 0
					})
				},
				"left-of-fold": function(t) {
					return !e.rightoffold(t, {
						threshold: 0
					})
				}
			})
		}(jQuery, window, document)
	}, , , , , , , , , , , , , , , function(module, exports) {
		var YK = {};
		YK.https = "https:" == location.protocol ? "https:" : "http:";
		var DEBUG__ = 0,
			console = window.console;
		console || (console = {}, console.log = function() {});
		var debug = {
			log: function(e) {
				DEBUG__ && console.log(e)
			}
		};
		window.YKU = {};
		var YKP = {
				playerType: "",
				playerState: {
					PLAYER_STATE_INIT: "PLAYER_STATE_INIT",
					PLAYER_STATE_READY: "PLAYER_STATE_READY",
					PLAYER_STATE_AD: "PLAYER_STATE_AD",
					PLAYER_STATE_PLAYING: "PLAYER_STATE_PLAYING",
					PLAYER_STATE_END: "PLAYER_STATE_END",
					PLAYER_STATE_ERROR: "PLAYER_STATE_ERROR"
				},
				playerCurrentState: "PLAYER_STATE_INIT",
				isLoadFinishH5: !1,
				isPC: !0,
				videoList: [],
				isAndroidYouku: !1
			},
			StaticDomain = YK.https + "//player.youku.com";

		function browserRedirect() {
			var e = navigator.userAgent.toLowerCase(),
				t = "ipad" == e.match(/ipad/i),
				n = "iphone os" == e.match(/iphone os/i),
				i = "iphone" == e.match(/iphone/i),
				r = "midp" == e.match(/midp/i),
				o = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i),
				a = "ucweb" == e.match(/ucweb/i),
				s = "android" == e.match(/android/i),
				l = "windows ce" == e.match(/windows ce/i),
				u = "windows mobile" == e.match(/windows mobile/i);
			YKP.isPC = !(t || n || i || r || o || a || s || l || u);
			var c = "youku" == e.match(/youku/i);
			s && c && (YKP.isAndroidYouku = !0), i && c && (YKP.isIphoneYouku = !0)
		}

		function createIFrame(e, t, n, i, r, o, a, s) {
			if(YKP.isPC) {
				for(var l = document.getElementById(n + "").getElementsByTagName("iframe"); l.length;) {
					var u = l[0].parentNode;
					u && u.removeChild(l[0])
				}
				var c = document.createElement("iframe");
				c.setAttribute("width", e), c.setAttribute("height", t), c.setAttribute("allow", "autoplay");
				var d = StaticDomain + "/embed/" + i + "?client_id=" + r + "&password=" + o + "&autoplay=" + a;
				return s && s.onPlayStart && (d += "&onPlayStart=" + s.onPlayStart), s && s.onPlayEnd && (d += "&onPlayEnd=" + s.onPlayEnd), c.setAttribute("src", d), c.setAttribute("id", "iframeId"), c.setAttribute("frameborder", 0), c.setAttribute("allowfullscreen", !0), c.setAttribute("scrolling", "no"), document.getElementById(n + "").appendChild(c), c
			}
			return null
		}
		browserRedirect();
		var urlParameter = function(e) {
			var t = [];
			for(var n in e) t.push(n + "=" + e[n]);
			return t.join("&")
		};

		function parseJsonStr(e) {
			if("string" != typeof e) return e;
			if(/{[^{^}]{0,}}/.test(e)) try {
				e = JSON.parse(e)
			} catch(e) {}
			return e
		}
		window.QS = function() {
			var e = {},
				t = window.location.search.match(new RegExp("[?&][^?&]+=[^?&]+", "g"));
			if(null != t)
				for(var n = 0; n < t.length; n++) {
					var i = t[n],
						r = i.indexOf("="),
						o = i.substring(1, r),
						a = i.substring(r + 1);
					try {
						a = decodeURI(a)
					} catch(e) {}
					"true" == a ? a = !0 : "false" == a || (a = isNaN(a) ? parseJsonStr(a) : +a), void 0 === e[o] ? e[o] = a : e[o] instanceof Array ? e[o].push(a) : e[o] = [e[o], a]
				}
			return e
		};
		var dynamicLoading = {
			css: function(e) {
				if(!e || 0 === e.length) throw new Error('argument "path" is required !');
				var t = document.getElementsByTagName("head")[0],
					n = document.createElement("link");
				n.href = e, n.rel = "stylesheet", n.type = "text/css", t.appendChild(n)
			},
			js: function(e, t, n) {
				if(!e || 0 === e.length) throw new Error('argument "path" is required !');
				var i = document.getElementsByTagName("head")[0],
					r = document.createElement("script");
				r.src = e, r.type = "text/javascript", n && (r.id = n.id, r.setAttribute("pageType", n.pageType), r.setAttribute("isHidden", n.isHidden)), i.appendChild(r), r.onload = function() {
					t && (t.selectH5(), YKP.isLoadFinishH5 = !0)
				}
			}
		};
		dynamicLoading.css(YK.https + "//player.youku.com/unifull/css/unifull.min.css?v=2018082801");
		var YoukuPlayerSelect = function(e) {
			YK.initConfig = e, this._vid = e.vid, this._target = e.target, this._partnerId = e.partnerId, this._videoFlag = e.videoFlag, e.client_id && (this._partnerId = e.client_id), this._vid && this._target && this._partnerId ? (this._events = e.events, YK.playerEvents = e.events, this._id = e.id, null == this._id && (this._id = "youku-player"), YKP.playerId = this._id, this._width = e.width, this._height = e.height, this._expand = e.expand, null == e.width || null == e.height ? null == e.expand && (this._expand = 0) : null == e.expand && (this._expand = 1), this._starttime = e.starttime, this._password = e.password ? e.password : "", this._poster = e.poster, this._autoplay = !!e.autoplay, this._canWide = e.canWide, void 0 !== e.show_related && (this._showRelated = !!e.show_related), this._embed_content = e.embed_content, this._embed_vid = e.embed_vid, this._cancelFullScreen = e.cancelFullScreen, this._titleStyle = e.titleStyle, this._source = e.source, this._newPlayer = e.newPlayer, this._winType = e.wintype, this._playlistconfig = e.playlistconfig, this._isMobile = YKP.isMobile, this._isMobileIOS = YKP.isMobileIOS, YK.isWeixin = YKP.isWeixin, void 0 !== e.weixin && (YK.isWeixin = !!e.weixin), this._loop = !!e.loop || !1, this._playerType = "") : alert("[Fail]The params of {vid,target,client_id} are necessary !")
		};
		YoukuPlayerSelect.prototype = {
			isPC: function() {
				return YKP.isPC
			},
			select: function() {
				this.selectHandler()
			},
			selectHandler: function() {
				var e;
				if(this.isPC() ? YKP.isLoadFinishH5 = !0 : e = YK.https + "//player.youku.com/unifull/js/unifull.min.js?v=2018082801", YKP.isLoadFinishH5 ? this.selectH5() : dynamicLoading.js(e, this), this._events && this._events.onPlayerReady) var t = this._events.onPlayerReady,
					n = setInterval(function() {
						try {
							t()
						} catch(e) {}
						clearInterval(n)
					}, 500)
			},
			selectH5: function() {
				YKP.isPC ? this.selectPCH5() : this.selectMobileH5()
			},
			selectMobileH5: function() {
				var e = document.getElementById(this._target);
				if(this._width > 0 && this._height > 0) e.style.width = this._width + "px", e.style.height = this._height + "px";
				else {
					var t = e.offsetWidth,
						n = e.offsetHeight;
					! function(e) {
						e.style.width = t + "px", e.style.height = n + "px"
					}(e)
				}
				var i = 0;
				1 == this._cancelFullScreen && YKP.isAndroidYouku && (i = 1);
				var r = {
					videoId: this._vid,
					ccode: "0590",
					client_id: this._partnerId,
					control: {
						laguange: "",
						hd: "mp4hd",
						autoplay: !1
					},
					logconfig: {},
					adConfig: {},
					password: this._password,
					wintype: "",
					type: "",
					events: this._events,
					embed_vid: this._embed_vid,
					embed_content: this._embed_content,
					titleStyle: this._titleStyle,
					source: this._source,
					closeFullFullScreen: i,
					isIphoneYouku: YKP.isIphoneYouku,
					imgPoster: this._poster
				};
				this._h5player = YKPlayer.Player(this._target, r)
			},
			selectPCH5: function() {
				var e, t;
				this._width > 0 && this._height > 0 ? (e = this._width, t = this._height) : (e = "100%", t = "100%"), createIFrame(e, t, this._target, this._vid, this._partnerId, this._password, this._autoplay, this._events)
			},
			onorientationchange: function() {
				var e = document.getElementById(this._target);
				setTimeout(function() {
					var t = document.documentElement.clientWidth;
					document.documentElement.clientHeight, e.style.width = t + "px", e.style.height = 9 * t / 16 + "px"
				}, 300)
			},
			isThirdParty: function() {
				var e = this._partnerId;
				return null != e && 16 == (e + "").length
			}
		}, YKU.Player = function(e, t) {
			t.target = e, this.select = new YoukuPlayerSelect(t), this.select.select(), this._player = ""
		}, YKU.Player.prototype = {
			player: function() {
				return "" != this._player ? this._player : (YKP.isPC ? this._player = new YKFlashPlayer : this._player = new YKH5Player(this.select._h5player), this._player)
			},
			resize: function(e, t, n) {
				e && Number(t) && Number(n) ? (e.style && (e.style.width = t + "px"), e.style && (e.style.height = n + "px")) : console.log("resize鏂规硶涓嶅彲鐢�,缂哄皯鍙傛暟!")
			},
			currentTime: function() {
				return this.player().currentTime()
			},
			totalTime: function() {
				return this.player().totalTime()
			},
			playVideo: function() {
				this.player().playVideo()
			},
			startPlayVideo: function() {
				this.player().startPlayVideo()
			},
			pauseVideo: function() {
				this.player().pauseVideo()
			},
			seekTo: function(e) {
				this.player().seekTo(e)
			},
			hideControls: function() {
				this.player().hideControls()
			},
			showControls: function() {
				this.player().showControls()
			},
			playVideoById: function(e) {
				this.player().playVideoById(e)
			},
			switchFullScreen: function() {
				try {
					this.player().switchFullScreen()
				} catch(e) {}
			},
			getVideoList: function() {
				return this.player().getVideoList()
			}
		};
		var YKFlashPlayer = function() {
			this._player = document.getElementById(YKP.playerId)
		};
		YKFlashPlayer.prototype = {
			resize: function(e, t) {
				this._player.style.width = e + "px", this._player.style.height = t + "px"
			},
			currentTime: function() {
				var e = this._player.getPlayerState().split("|");
				return e.length >= 3 ? e[2] : -1
			},
			totalTime: function() {
				var e = this._player.getPlayerState().split("|");
				return e.length >= 4 ? e[3] : -1
			},
			playVideo: function() {
				this._player.pauseVideo(!1)
			},
			pauseVideo: function() {
				this._player.pauseVideo(!0)
			},
			seekTo: function(e) {
				this._player.nsseek(e)
			},
			playVideoById: function(e) {
				this._player.playVideoByID(e)
			},
			hideControls: function() {
				this._player.showControlBar(!1)
			},
			showControls: function() {
				this._player.showControlBar(!0)
			},
			state: function() {
				this._player.state()
			}
		};
		var YKH5Player = function(e) {
			this._player = e
		};

		function executeScript() {
			for(var _scripts = document.getElementsByTagName("script"), _len = _scripts.length, i = 0; i < _len; i++)
				if(_scripts[i].src.indexOf("//player.youku.com/jsapi") > -1) {
					eval(_scripts[i].innerHTML);
					break
				}
		}
		YKH5Player.prototype = {
			resize: function(e, t) {
				this._player.style.width = e + "px", this._player.style.height = t + "px"
			},
			currentTime: function() {
				return this._player.currentTime
			},
			totalTime: function() {
				return this._player.totalTime
			},
			playVideo: function() {
				this._player.play()
			},
			pauseVideo: function() {
				this._player.pause()
			},
			seekTo: function(e) {
				try {
					this._player.seek(e)
				} catch(e) {}
			}
		}, executeScript()
	}]
]);