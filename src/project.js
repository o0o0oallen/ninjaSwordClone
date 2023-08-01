window.__require = function t(e, o, n) {
	function i(r, s) {
		if (!o[r]) {
			if (!e[r]) {
				var c = r.split("/");
				if (c = c[c.length - 1], !e[c]) {
					var d = "function" == typeof __require && __require;
					if (!s && d) return d(c, !0);
					if (a) return a(c, !0);
					throw new Error("Cannot find module '" + r + "'")
				}
			}
			var l = o[r] = {
				exports: {}
			};
			e[r][0].call(l.exports, function (t) {
				return i(e[r][1][t] || t)
			}, l, l.exports, t, e, o, n)
		}
		return o[r].exports
	}
	for (var a = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
	return i
}({
	Ark: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "3a66ai0urxMaaFn3MX0iyUj", "Ark");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./GameObjectMgr"),
			r = t("./GameObject"),
			s = cc._decorator,
			c = s.ccclass,
			d = (s.property, function (t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return n(e, t), e.prototype.start = function () {
					var t = a.default.instance.LevelProperty;
					this.preAdddiamondCnt = t.ArkReward
				}, e = i([c], e)
			}(r.default));
		o.default = d, cc._RF.pop()
	}, {
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr"
	}],
	Arrow: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "d0b68/eiY9P4rHBFR17LWjg", "Arrow");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./GameObjectMgr"),
			r = t("./GameObject"),
			s = cc._decorator,
			c = s.ccclass,
			d = s.property,
			l = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.icon = null, e.targetNode = null, e.targetType = -1, e.tiledMap = null, e._isPrint = !1, e._scaleT = 15, e._isSc = !1, e
				}
				return n(e, t), e.prototype.start = function () {
					this.node.opacity = 0, this.schedule(this.updatePos, 1 / 60)
				}, e.prototype.setTarget = function (t, e) {
					if (this.targetNode = t, this.targetType = e, this.icon.node.color = cc.color(0, 255, 0), e === r.ObjectType.BlockBomb) {
						var o = t.getComponent("Bomb").getBombTime();
						this.icon.node.runAction(cc.tintTo(o, 255, 0, 0))
					}
				}, e.prototype.sc = function () {
					this._isSc || (this._isSc = !0, cc.isValid(this.icon) && this.icon.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .9), cc.scaleTo(.4, 1)))))
				}, e.prototype.setTileMap = function (t) {
					this.tiledMap = t
				}, e.prototype.updatePos = function () {
					if (!(this.targetType < 0) && this.tiledMap)
						if (cc.isValid(this.targetNode)) {
							var t = a.default.instance.tileSize,
								e = this.targetNode.position.add(this.tiledMap.node.position);
							if (e.x >= -cc.winSize.width / 2 + t.width / 2 && e.x <= cc.winSize.width / 2 - t.width / 2 && e.y >= -cc.winSize.height / 2 + t.height / 2 && e.y <= cc.winSize.height / 2 - t.height / 2) this.node.opacity = 0;
							else {
								this.node.opacity = 255;
								var o = e.mag(),
									n = 180 * Math.acos(e.x / o) / Math.PI * (e.y / Math.abs(e.y) * -1),
									i = -1 * Math.acos(-cc.winSize.width / 2 / cc.v2(-cc.winSize.width / 2, cc.winSize.height / 2).mag()) * 180 / Math.PI,
									s = -1 * Math.acos(cc.winSize.width / 2 / cc.v2(cc.winSize.width / 2, cc.winSize.height / 2).mag()) * 180 / Math.PI,
									c = 180 * Math.acos(-cc.winSize.width / 2 / cc.v2(-cc.winSize.width / 2, -cc.winSize.height / 2).mag()) / Math.PI,
									d = 180 * Math.acos(cc.winSize.width / 2 / cc.v2(cc.winSize.width / 2, -cc.winSize.height / 2).mag()) / Math.PI;
								if (n >= s && n < d ? (this.node.x = cc.winSize.width / 2, this.node.y = e.y / e.x * this.node.x, this.node.rotation = n) : n >= d && n < c ? (this.node.y = -cc.winSize.height / 2, this.node.x = e.x / e.y * this.node.y, this.node.rotation = n) : n >= i && n < s ? (this.node.y = cc.winSize.height / 2, this.node.x = e.x / e.y * this.node.y, this.node.rotation = n) : (this.node.x = -cc.winSize.width / 2, this.node.y = e.y / e.x * this.node.x, this.node.rotation = n), this.targetType === r.ObjectType.BlockBomb && cc.isValid(this.targetNode)) this.targetNode.getComponent("Bomb").getLeftBombTime() <= this._scaleT && this.sc()
							}
						} else this.node.destroy()
				}, i([d(cc.Sprite)], e.prototype, "icon", void 0), e = i([c], e)
			}(cc.Component);
		o.default = l, cc._RF.pop()
	}, {
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr"
	}],
	AssassinData: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "0f9c2x/539P2ZVhTinTxKUt", "AssassinData"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("../YdhwSDK/YdhwSDK"),
			i = t("./UserData"),
			a = {
				baseHp: 100,
				baseSpeed: 600,
				data: {
					1: {
						id: 1,
						hpPer: 0,
						spdPer: 0,
						originProbability: 100,
						limitProbability: 100,
						addPerTimes: 0,
						tryUseProbability: 0
					},
					2: {
						id: 2,
						hpPer: 0,
						spdPer: 0,
						originProbability: 80,
						limitProbability: 80,
						addPerTimes: 0,
						tryUseProbability: 2
					},
					3: {
						id: 3,
						hpPer: 20,
						spdPer: 0,
						originProbability: 40,
						limitProbability: 60,
						addPerTimes: 5,
						tryUseProbability: 2
					},
					4: {
						id: 4,
						hpPer: 0,
						spdPer: 20,
						originProbability: 40,
						limitProbability: 60,
						addPerTimes: 5,
						tryUseProbability: 5
					},
					5: {
						id: 5,
						hpPer: 40,
						spdPer: 0,
						originProbability: 20,
						limitProbability: 45,
						addPerTimes: 5,
						tryUseProbability: 5
					},
					6: {
						id: 6,
						hpPer: 0,
						spdPer: 40,
						originProbability: 20,
						limitProbability: 45,
						addPerTimes: 5,
						tryUseProbability: 8
					},
					7: {
						id: 7,
						hpPer: 60,
						spdPer: 0,
						originProbability: 5,
						limitProbability: 40,
						addPerTimes: 5,
						tryUseProbability: 8
					},
					8: {
						id: 8,
						hpPer: 0,
						spdPer: 60,
						originProbability: 5,
						limitProbability: 40,
						addPerTimes: 5,
						tryUseProbability: 6
					},
					9: {
						id: 9,
						hpPer: 100,
						spdPer: 0,
						originProbability: 0,
						limitProbability: 30,
						addPerTimes: 5,
						tryUseProbability: 6
					},
					10: {
						id: 10,
						hpPer: 0,
						spdPer: 100,
						originProbability: 0,
						limitProbability: 30,
						addPerTimes: 5,
						tryUseProbability: 6
					}
				},
				unLockCost: [1e3, 5e3, 1e4, 2e4, 3e4, 4e4, 5e4, 7e4, 1e5],
				getAssassinData: function (t) {
					return t < 1 || t > 10 ? (console.error("assassinId is error  , id: ", t), null) : this.data["" + t]
				},
				getUnLockCost: function () {
					var t = i.default.getOwnAssassins().length - 1;
					return t >= this.unLockCost.length ? 1e7 : this.unLockCost[t]
				},
				AssassinIsUnLock: function (t) {
					return i.default.getOwnAssassins().indexOf(t) > -1
				},
				getTryUseAssassin: function () {
					var t = this,
						e = -1,
						o = [];
					for (var i in this.data) this.AssassinIsUnLock(this.data[i].id) || o.push(this.data[i].id);
					if (0 === o.length) return e;
					var a = 0;
					o.forEach(function (e) {
						a += 100 * t.data["" + e].tryUseProbability
					});
					for (var r = n.default.Util.random(1, a), s = 0, c = 0; c < o.length; c++) {
						var d = 100 * this.data["" + o[c]].tryUseProbability;
						if (s < r && r <= s + d) {
							e = o[c];
							break
						}
						s += d
					}
					return e
				}
			};
		o.default = a, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./UserData": "UserData"
	}],
	AssassinShopItem: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "bbae09uOxNN86MRKt8+dnzl", "AssassinShopItem");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./UserData"),
			r = t("../YdhwSDK/YdhwSDK"),
			s = t("./Txt"),
			c = cc._decorator,
			d = c.ccclass,
			l = c.property,
			u = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.propertyLabel = null, e.bg = null, e.selectIcon = null, e.assassin = null, e.ownBg = null, e.selectBg = null, e.unLockBg = null, e._data = null, e
				}
				return n(e, t), e.prototype.start = function () { }, e.prototype.updateInfo = function (t) {
					if (t) {
						this._data = t, this.assassin.getComponent("Assassin").setActor(t.id);
						var e = "";
						0 == t.hpPer && 0 == t.spdPer ? e = s.default.getTxt("Normal") : 0 != t.hpPer ? e = "+" + t.hpPer + "% " + s.default.getTxt("Life") : 0 != t.spdPer && (e = "+" + t.spdPer + "% " + s.default.getTxt("Speed")), s.default.setFont(this.propertyLabel, e), a.default.CurAssassin == t.id ? (this.bg.spriteFrame = this.selectBg, this.selectIcon.node.active = !0) : (this.selectIcon.node.active = !1, t.isOwn ? this.bg.spriteFrame = this.ownBg : this.bg.spriteFrame = this.unLockBg)
					}
				}, e.prototype.fresh = function () {
					this._data && this.updateInfo(this._data)
				}, e.prototype.setSelected = function (t, e) {
					void 0 === e && (e = !1), e && (this._data.isOwn = !0), t ? (this.bg.spriteFrame = this.selectBg, this.selectIcon.node.active = !0) : (this.selectIcon.node.active = !1, this._data.isOwn ? this.bg.spriteFrame = this.ownBg : this.bg.spriteFrame = this.unLockBg)
				}, e.prototype.onClicked = function () {
					if (this._data.isOwn && this._data.id !== a.default.CurAssassin) {
						var t = a.default.CurAssassin;
						a.default.CurAssassin = this._data.id;
						var e = this.node.parent.getChildByName("AssassinShopItem" + t);
						e && e.getComponent("AssassinShopItem").setSelected(!1), this.setSelected(!0)
					} else this._data.isOwn || r.default.showToast(s.default.getTxt("Tips1"))
				}, i([l(cc.Label)], e.prototype, "propertyLabel", void 0), i([l(cc.Sprite)], e.prototype, "bg", void 0), i([l(cc.Sprite)], e.prototype, "selectIcon", void 0), i([l(cc.Node)], e.prototype, "assassin", void 0), i([l(cc.SpriteFrame)], e.prototype, "ownBg", void 0), i([l(cc.SpriteFrame)], e.prototype, "selectBg", void 0), i([l(cc.SpriteFrame)], e.prototype, "unLockBg", void 0), e = i([d], e)
			}(cc.Component);
		o.default = u, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	AssassinShopLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "2579fFjXdtIJqWPhMwSRCLH", "AssassinShopLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./UserData"),
			r = t("./Events"),
			s = t("../YdhwSDK/YdhwSDK"),
			c = t("./AssassinData"),
			d = t("./Txt"),
			l = cc._decorator,
			u = l.ccclass,
			h = l.property,
			p = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.videoBtn = null, e.buyBtn = null, e.closeBtn = null, e.cellLayout = null, e.videoReward = null, e.randomUnLock = null, e.currDiamond = null, e.warn_tag = null, e.upGradeLabel = null, e._isPlayVideoStatus = !1, e._videoReward = 200, e._unLockAssassins = [], e._isDrawing = !1, e._openFrom = "", e
				}
				return n(e, t), e.prototype.start = function () {
					this.videoReward.string = "" + this._videoReward, d.default.setFont(this.randomUnLock, d.default.getTxt("RandomUnLock")), d.default.setFont(this.upGradeLabel, d.default.getTxt("UpgradeLabel")), this.initCells(), this.freshDiamondLabel(), this.addEvts(), s.default.createVideo(s.default.Platform.videoId[0])
				}, e.prototype.addEvts = function () {
					var t = this;
					cc.director.on(r.default.FRESH_DIAMOND, function (e) {
						t.freshDiamondLabel()
					}, this)
				}, e.prototype.onDestroy = function () {
					cc.director.targetOff(this)
				}, e.prototype.initCells = function () {
					var t = this;
					this._unLockAssassins = [], s.default.PrefabManager.loadPrefab("prefab/assassinShopItem", function (e) {
						for (var o in c.default.data) {
							var n = c.default.data[o];
							n.isOwn = c.default.AssassinIsUnLock(n.id), n.isOwn || t._unLockAssassins.push(n.id);
							var i = cc.instantiate(e);
							i.name = "AssassinShopItem" + n.id, i.parent = t.cellLayout, i.getComponent("AssassinShopItem").updateInfo(n)
						}
						t.freshBuyBtn()
					})
				}, e.prototype.freshBuyBtn = function () {
					this._unLockAssassins.length > 0 ? this.buyBtn.node.active = !0 : this.buyBtn.node.active = !1
				}, e.prototype.setFromLayer = function (t) {
					this._openFrom = t
				}, e.prototype.onCloseBtnClicked = function () {
					if (this._isDrawing) s.default.showToast(d.default.getTxt("Tips2"));
					else {
						if (s.default.showInsertAd(), this.node.destroy(), "startLayer" === this._openFrom) {
							var t = new cc.Event.EventCustom(r.default.OPEN_START_LAYER, !0);
							cc.director.dispatchEvent(t)
						} else {
							t = new cc.Event.EventCustom(r.default.CLOSE_ASSASSIN_SHOP, !0);
							cc.director.dispatchEvent(t)
						}
						s.default.Audio.playEffect("click.mp3")
					}
				}, e.prototype.onVideoBtnClicked = function () {
					var t = this;
					this._isPlayVideoStatus || (this._isPlayVideoStatus = !0, console.log("ninjasword ===> onVideoBtnClicked"), s.default.showVideo(function (e) {
						t._isPlayVideoStatus = !1, console.log("ninjasword ===> showVideoCallfunc"), e ? (a.default.Diamond += t._videoReward, s.default.showToast(cc.js.formatStr(d.default.getTxt("Tips3"), t._videoReward))) : s.default.showToast(d.default.getTxt("Tips4"))
					}, function (e) {
						e || (console.log("ninjasword ===> fail showVideo"), t._isPlayVideoStatus = !1, s.default.showToast(d.default.getTxt("Tips5")))
					}), s.default.Audio.playEffect("click.mp3"), s.default.reportAnalytics(r.default.ReportEvt.UpgradeAssassinWacthVideo))
				}, e.prototype.onBuyBtnClicked = function () {
					if (s.default.Audio.playEffect("click.mp3"), this._isDrawing) s.default.showToast(d.default.getTxt("Tips2"));
					else if (a.default.Diamond >= c.default.getUnLockCost()) this._isDrawing = !0, a.default.Diamond -= c.default.getUnLockCost(), this.unLockAssassin();
					else {
						var t = new cc.Event.EventCustom(r.default.OPEN_RANDOMDRAW_LAYER, !0);
						cc.director.dispatchEvent(t)
					}
				}, e.prototype.unLockAssassin = function () {
					var t, e = this,
						o = s.default.Util.random(10, 20),
						n = 0,
						i = .6 / o,
						c = .5,
						d = a.default.CurAssassin,
						l = function () {
							e.scheduleOnce(function () {
								if (n++, 1 == e._unLockAssassins.length && (n = o), c > .2 ? c -= i : c += i, (t = e.cellLayout.getChildByName("AssassinShopItem" + d)) && t.getComponent("AssassinShopItem").setSelected(!1), d = e.randomAnUnLockAssassin(d, n >= o), (t = e.cellLayout.getChildByName("AssassinShopItem" + d)) && t.getComponent("AssassinShopItem").setSelected(!0, n >= o), n >= o) {
									e._isDrawing = !1;
									var u = a.default.getOwnAssassins();
									s.default.reportAnalytics(r.default.ReportEvt["UnlockAssassin" + u.length]), a.default.addOwnAssassin(d), a.default.CurAssassin = d, e.freshDiamondLabel(), e.unClockAssassin(d)
								} else l()
							}, c)
						};
					l()
				}, e.prototype.randomAnUnLockAssassin = function (t, e) {
					if (void 0 === e && (e = !1), 1 == this._unLockAssassins.length) return this._unLockAssassins[0];
					if (e) {
						var o = new Array(this._unLockAssassins.length);
						this._unLockAssassins.forEach(function (t, e) {
							var n = a.default.getOwnAssassins().length - 1,
								i = c.default.getAssassinData(t),
								r = i.originProbability + n * i.addPerTimes;
							r = r > i.limitProbability ? i.limitProbability : r, o[e] = r
						});
						var n = 0;
						o.forEach(function (t) {
							n += t
						});
						for (var i = s.default.Util.random(1, n), r = 0, d = 0, l = 0; l < o.length; l++) {
							var u = o[l];
							if (i > d && i <= d + u) {
								r = l;
								break
							}
							d += u
						}
						return this._unLockAssassins[r]
					}
					var h = 0;
					do {
						h = s.default.Util.random(0, this._unLockAssassins.length - 1)
					} while (t === this._unLockAssassins[h]);
					return this._unLockAssassins[h]
				}, e.prototype.unClockAssassin = function (t) {
					this._unLockAssassins = this._unLockAssassins.filter(function (e) {
						return e !== t
					}), this.freshBuyBtn()
				}, e.prototype.freshDiamondLabel = function () {
					var t = c.default.getUnLockCost();
					this.currDiamond.string = a.default.Diamond + "/" + t, a.default.Diamond >= t ? this.warn_tag.active = !0 : this.warn_tag.active = !1
				}, i([h(cc.Button)], e.prototype, "videoBtn", void 0), i([h(cc.Button)], e.prototype, "buyBtn", void 0), i([h(cc.Button)], e.prototype, "closeBtn", void 0), i([h(cc.Node)], e.prototype, "cellLayout", void 0), i([h(cc.Label)], e.prototype, "videoReward", void 0), i([h(cc.Label)], e.prototype, "randomUnLock", void 0), i([h(cc.Label)], e.prototype, "currDiamond", void 0), i([h(cc.Node)], e.prototype, "warn_tag", void 0), i([h(cc.Label)], e.prototype, "upGradeLabel", void 0), e = i([u], e)
			}(cc.Component);
		o.default = p, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./AssassinData": "AssassinData",
		"./Events": "Events",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	Assassin: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "2249cPpvxVAV7tfQmQDzHVa", "Assassin");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("./GameObject"),
			s = t("./GameObjectMgr"),
			c = t("./AssassinData"),
			d = cc._decorator,
			l = d.ccclass,
			u = d.property,
			h = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.body = null, e.leftLeg = null, e.rightLeg = null, e._fullHp = 0, e
				}
				return n(e, t), e.prototype.start = function () {
					var t = this;
					this.addEvts(), this._fullHp = this.hp, this.InVisible = !0, this.scheduleOnce(function () {
						t.InVisible = !1
					}, 3)
				}, e.prototype.atked = function (t) {
					void 0 === t && (t = 0), this.hp -= t, this.hp <= 0 && this.death(), this.hp / this._fullHp <= .2 ? this.setColor(cc.color(238, 95, 164)) : this.hp / this._fullHp <= .4 ? this.setColor(cc.color(218, 135, 175)) : this.hp / this._fullHp <= .6 ? this.setColor(cc.color(231, 152, 180)) : this.hp / this._fullHp <= .8 && this.setColor(cc.color(223, 189, 205))
				}, e.prototype.setColor = function (t) {
					this.body.color = t, this.leftLeg.color = t, this.rightLeg.color = t
				}, e.prototype.update = function () {
					if (s.default.instance.isGameStart && this.status !== r.ObjectStatus.Default && !this.isTiming) {
						var t = this.getCoord(),
							e = s.default.instance.guards;
						for (var o in e)
							if (e[o]) {
								var n = e[o].getComponent("Guard").getCoord(),
									i = e[o].getComponent("Guard").InVisible;
								if (t && t.equals(n) && !i) {
									var c = e[o].position;
									e[o].getComponent("Guard").death(), (u = new cc.Event.EventCustom(a.default.GUARD_DEATH, !0)).setUserData(c), cc.director.dispatchEvent(u)
								}
							} var d = s.default.instance.customBlocks;
						for (var o in d) {
							if (d[o])
								if (s.default.instance.getBlockType(o) === r.ObjectType.BlockArk) {
									var l = d[o].getComponent("Ark").getCoord();
									if (t && t.equals(l)) {
										d[o].getComponent("Ark").collect();
										var u = new cc.Event.EventCustom(a.default.BLOCK_COLLECT, !0);
										cc.director.dispatchEvent(u)
									}
								}
						}
						var h = s.default.instance.props;
						for (var o in h)
							if (h[o]) {
								var p = h[o].getComponent("Prop").getCoord();
								if (t && t.equals(p)) {
									var f = h[o].getComponent("Prop").PropType,
										g = null;
									f == r.PropType.timing ? g = {
										propType: h[o].getComponent("Prop").PropType,
										lastTime: h[o].getComponent("Prop").LastTime,
										targetType: [r.ObjectType.Guard, r.ObjectType.BlockBomb]
									} : f == r.PropType.invisible && (g = {
										propType: h[o].getComponent("Prop").PropType,
										lastTime: h[o].getComponent("Prop").LastTime,
										targetType: [this.type]
									}, this.unscheduleAllCallbacks()), (u = new cc.Event.EventCustom(a.default.GET_PROP, !0)).setUserData(g), cc.director.dispatchEvent(u), h[o].getComponent("Prop").swallow()
								}
							} var y = s.default.instance.followGuard,
								m = s.default.instance.followCoord;
						if (cc.isValid(y)) {
							var v = y.getComponent("Guard").getCoord();
							if (v && !v.equals(m)) {
								s.default.instance.setAutoFollowCoord(v);
								var _ = s.default.instance.coord2Point(v),
									w = this.getClosestPath(_);
								this.move(w)
							}
						}
						this.status === r.ObjectStatus.Static ? this.staticTime += 1 / 60 : this.staticTime = 0
					}
				}, e.prototype.onDestroy = function () {
					this.status !== r.ObjectStatus.Default && this.clearPath()
				}, e.prototype.setActor = function (t) {
					var e = this;
					cc.loader.loadRes("actors/assassin" + t, cc.SpriteFrame, function (o, n) {
						o ? console.error(o) : e.body && (e.body.getComponent(cc.Sprite).spriteFrame = n, cc.loader.loadRes("actors/assassinLeg" + t, cc.SpriteFrame, function (t, o) {
							t ? console.error(t) : e.leftLeg && (e.leftLeg.getComponent(cc.Sprite).spriteFrame = o, e.rightLeg.getComponent(cc.Sprite).spriteFrame = o, e.node.active || (e.node.active = !0))
						}))
					});
					var o = c.default.getAssassinData(t);
					this.hp += o.hpPer / 100 * this.hp, this.moveSpd += o.spdPer / 100 * this.moveSpd
				}, i([u(cc.Node)], e.prototype, "body", void 0), i([u(cc.Node)], e.prototype, "leftLeg", void 0), i([u(cc.Node)], e.prototype, "rightLeg", void 0), e = i([l], e)
			}(r.default);
		o.default = h, cc._RF.pop()
	}, {
		"./AssassinData": "AssassinData",
		"./Events": "Events",
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr"
	}],
	Bomb: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "1d6364bPGdNAbnW/bvTWG7M", "Bomb");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("../YdhwSDK/YdhwSDK"),
			s = t("./GameObjectMgr"),
			c = t("./UserData"),
			d = t("./GameObject"),
			l = t("./Txt"),
			u = cc._decorator,
			h = u.ccclass,
			p = u.property,
			f = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.icon = null, e.timer = null, e.notice = null, e.progress = null, e._mutex = !1, e._interval = 1, e._currT = 0, e._dismantleT = 5, e._bombTime = 0, e
				}
				return n(e, t), e.prototype.start = function () {
					this.addEvts(), this.progress.node.active = !1, this.notice.node.active = !1, l.default.setFont(this.notice, l.default.getTxt("BombNotice"));
					var t = s.default.instance.LevelProperty;
					this.preAdddiamondCnt = t.BombReward
				}, e.prototype.setBombTime = function (t) {
					this._bombTime = t, this.timer.string = "" + t, this._mutex = !0
				}, e.prototype.getBombTime = function () {
					return this._bombTime
				}, e.prototype.getLeftBombTime = function () {
					return parseInt(this.timer.string)
				}, e.prototype.dismantled = function () {
					this._mutex = !0, this.progress.progress = 0, this.progress.node.active = !0, this.notice.node.active = !0
				}, e.prototype.cancelDismantled = function () {
					this._mutex = !0, this.progress.node.active = !1, this.progress.progress = 0, this.notice.node.active = !1
				}, e.prototype.dismantledFail = function () {
					this.removeBomb(), setTimeout(function () {
						if (0 == s.default.instance.getBlocksLeftNumber()) s.default.instance.isGameStart && (r.default.showToast(l.default.getTxt("Tips12")), setTimeout(function () {
							c.default.PreGetDiamond = 0, s.default.instance.TryAssassinId = -1, s.default.instance.reset();
							var t = new cc.Event.EventCustom(a.default.OPEN_START_LAYER, !0);
							cc.director.dispatchEvent(t)
						}, 3e3));
						else {
							var t = s.default.instance.assassin;
							cc.isValid(t) && t.getComponent("Assassin").death(d.DeadType.BombDead)
						}
					}, 200), r.default.Audio.playEffect("bomb.mp3")
				}, e.prototype.dismantledSuccess = function () {
					if (c.default.addPreGetDiamond(this.preAdddiamondCnt), this.preAdddiamondCnt > 0) {
						var t = new cc.Event.EventCustom(a.default.SHOW_PREADDDIAMOND, !0);
						t.setUserData(this.preAdddiamondCnt), cc.director.dispatchEvent(t)
					}
					this.removeBomb(), 0 == s.default.instance.getBlocksLeftNumber() && this.showRst(), r.default.Audio.playEffect("collect.mp3")
				}, e.prototype.removeBomb = function () {
					s.default.instance.removeBlocks(this.id);
					var t = new cc.Event.EventCustom(a.default.BLOCK_COLLECT, !0);
					cc.director.dispatchEvent(t)
				}, e.prototype.getCoords = function () {
					var t = this.getCoord(null, !0);
					return t.x != Math.floor(t.x) ? [cc.v2(Math.floor(t.x), t.y), cc.v2(Math.ceil(t.x), t.y)] : [cc.v2(t.x, Math.floor(t.y)), cc.v2(t.x, Math.ceil(t.y))]
				}, e.prototype.update = function () {
					var t = s.default.instance.assassin;
					if (s.default.instance.isGameStart) {
						if (this._mutex && !this.isTiming && (this._currT += 1 / 60, this._currT >= this._interval && (this._currT = 0, parseInt(this.timer.string) > 0 ? (this.timer.string = "" + (parseInt(this.timer.string) - 1), parseInt(this.timer.string) <= 5 && r.default.Audio.playEffect("clock.mp3")) : this.dismantledFail())), this.progress.node.active) {
							var e = 1 / 60 * (1 / this._dismantleT);
							this.progress.progress += e, this.progress.progress >= 1 && (this.progress.progress = 1, this.progress.node.active = !0, this.dismantledSuccess())
						}
						cc.isValid(t) ? t.getComponent("Assassin").getStatus() !== d.ObjectStatus.Static && this.progress.node.active && this.cancelDismantled() : this.progress.node.active && this.cancelDismantled()
					} else !cc.isValid(t) && this.progress.node.active && this.cancelDismantled()
				}, i([p(cc.Sprite)], e.prototype, "icon", void 0), i([p(cc.Label)], e.prototype, "timer", void 0), i([p(cc.Label)], e.prototype, "notice", void 0), i([p(cc.ProgressBar)], e.prototype, "progress", void 0), e = i([h], e)
			}(d.default);
		o.default = f, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	Bullet: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "e45c9rlNHNB4ad7shYeVPcL", "Bullet");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./GameObjectMgr"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.bullet = null, e
				}
				return n(e, t), e.prototype.start = function () { }, e.prototype.setTmxData = function (t) {
					this.tmxData = t
				}, e.prototype.getTmxData = function () {
					return this.tmxData
				}, e.prototype.setEmitComponent = function (t) {
					this.emiter = t
				}, e.prototype.atk = function () {
					var t = this.node.getComponent(cc.Animation);
					t && t.play("bulletAni", 0)
				}, e.prototype.update = function (t) {
					var e = a.default.instance.assassin;
					if (e) {
						var o = e.parent;
						if (o && cc.isValid(this.node)) {
							var n = this.node.parent.convertToWorldSpaceAR(this.bullet.position),
								i = o.convertToNodeSpaceAR(n),
								r = a.default.instance.tileSize,
								s = a.default.instance.mapSize,
								c = i.add(cc.v2(r.width * s.width / 2, r.height * s.height / 2)),
								d = a.default.instance.point2Coord(c);
							if (d && !(d.x < 0 || d.x >= s.width || d.y < 0 || d.y >= s.height)) {
								var l, u = e.getComponent("Assassin").getCoord();
								if (d.x >= this.tmxData.length) return (l = this.node.getComponent(cc.Animation)) && (l.pause(), l.setCurrentTime(0)), void a.default.instance.destroyBullet(this.node);
								if (d.y >= this.tmxData[d.x].length) return (l = this.node.getComponent(cc.Animation)) && (l.pause(), l.setCurrentTime(0)), void a.default.instance.destroyBullet(this.node);
								if (d.equals(u) || 0 != this.tmxData[d.x][d.y]) d.equals(u) && e.getComponent("Assassin").atked(this.emiter.atk), (l = this.node.getComponent(cc.Animation)) && (l.pause(), l.setCurrentTime(0)), a.default.instance.destroyBullet(this.node)
							}
						}
					}
				}, i([c(cc.Node)], e.prototype, "bullet", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"./GameObjectMgr": "GameObjectMgr"
	}],
	DiamondNode: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "acfe6ZaCPlH/bT1Xqz1jCwC", "DiamondNode");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK/YdhwSDK"),
			r = t("./GameObjectMgr"),
			s = cc._decorator,
			c = s.ccclass,
			d = s.property,
			l = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.label = null, e.text = "hello", e.pathInfo = {}, e
				}
				return n(e, t), e.prototype.start = function () { }, e.prototype.palyDiamondAni = function (t, e) {
					for (var o = this, n = this.node.children, i = Math.floor(n.length / t.length), r = 0, s = 0; s < t.length; s++)
						if (0 !== i) {
							for (var c = 0; c < i; c++)
								if ((r = i * s + c) < n.length) {
									var d = n[r].name;
									this.pathInfo[d] = t[s]
								}
						} else if (s < n.length) {
							d = n[s].name;
							this.pathInfo[d] = t[s]
						}
					if (0 !== i)
						for (s = r; s < n.length; s++) {
							d = n[s].name;
							var l = a.default.Util.random(0, t.length - 1);
							this.pathInfo[d] = t[l]
						}
					var u = 0,
						h = function (t) {
							var i = p.pathInfo[n[t].name];
							p.move(n[t], i, "out", .3 / (i.length - 1), null, function () {
								if (++u == n.length) {
									u = 0;
									for (var t = 0; t < n.length; t++) o.move(n[t], i, "in", .3 / (i.length - 1), null, function () {
										++u == n.length && e && e()
									})
								}
							})
						},
						p = this;
					for (s = 0; s < n.length; s++) h(s)
				}, e.prototype.move = function (t, e, o, n, i, s, c) {
					var d = this;
					if (0 !== e.length) {
						var l = r.default.instance.tileSize,
							u = r.default.instance.mapSize;
						if (void 0 === c && (c = "out" === o ? 0 : e.length - 1), !i) {
							var h = e[c];
							if ("out" === o ? c++ : c--, (i = r.default.instance.coord2Point(h)).x = i.x - l.width * u.width / 2 - this.node.x, i.y = i.y - l.height * u.height / 2 - this.node.y, 0 === e.length) return void (s && s())
						}
						var p = e[c];
						"out" === o ? c++ : c--;
						var f = r.default.instance.coord2Point(p);
						f.x = f.x - l.width * u.width / 2 - this.node.x + a.default.Util.random(-l.width / 2, l.width / 2), f.y = f.y - l.height * u.height / 2 - this.node.y + a.default.Util.random(-l.width / 2, l.width / 2);
						"out" === o ? cc.easeSineOut() : cc.easeSineIn();
						t.stopAllActions(), t.runAction(cc.sequence(cc.moveTo(n, f), cc.callFunc(function () {
							c > 0 && c < e.length - 1 ? d.move(t, e, o, n, f, s, c) : s && s()
						})))
					} else s && s()
				}, i([d(cc.Label)], e.prototype, "label", void 0), i([d], e.prototype, "text", void 0), e = i([c], e)
			}(cc.Component);
		o.default = l, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./GameObjectMgr": "GameObjectMgr"
	}],
	Events: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "4682bq9p7dNl7qKjZuUdqYf", "Events"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		o.default = {
			UPDATE_CAMERA_POSITION: "UPDATE_CAMERA_POSITION",
			GUARD_DEATH: "GUARD_DEATH",
			BLOCK_COLLECT: "BLOCK_COLLECT",
			ASSASSIN_DEATH: "ASSASSIN_DEATH",
			OPEN_GAME_RESULT: "OPEN_GAME_RESULT",
			OPEN_GAME_RELIFE: "OPEN_GAME_RELIFE",
			OPEN_GAME_PAUSE: "OPEN_GAME_PAUSE",
			OPEN_ASSASSIN_SHOP: "OPEN_ASSASSIN_SHOP",
			OPEN_ASSASSIN_TRY: "OPEN_ASSASSIN_TRY",
			CLOSE_ASSASSIN_SHOP: "CLOSE_ASSASSIN_SHOP",
			GAME_RELIFE: "GAME_RELIFE",
			GAME_RESET: "GAME_RESET",
			GAME_RESUME: "GAME_RESUME",
			GAME_NEXT: "GAME_NEXT",
			GAME_START: "GAME_START",
			OPEN_START_LAYER: "OPEN_START_LAYER",
			ASSASSIN_MOVE: "ASSASSIN_MOVE",
			CLEAR_PATH: "CLEAR_PATH",
			SHOW_PREADDDIAMOND: "SHOW_PREADDDIAMOND",
			CAMERA_MOVE: "CAMERA_MOVE",
			FRESH_DIAMOND: "FRESH_DIAMOND",
			CHANGE_SELECTED_ASSASSIN: "CHANGE_SELECTED_ASSASSIN",
			ON_GAME_START: "ON_GAME_START",
			SCROLL_TO_MAIN: "SCROLL_TO_MAIN",
			OPEN_HELP_FRAME: "OPEN_HELP_FRAME",
			GET_PROP: "GET_PROP",
			REMOVE_PROP: "REMOVE_PROP",
			OPEN_RANDOMDRAW_LAYER: "OPEN_RANDOMDRAW_LAYER",
			ENTER_NEW_MODE: "ENTER_NEW_MODE",
			OPEN_UNLOCKMODELAYER: "OPEN_UNLOCKMODELAYER",
			ReportEvt: {
				EnterHome: "EnterHome",
				ClickGameStart: "ClickGameStart",
				EnterUpgradeFromStart: "EnterUpgradeFromStart",
				EnterUpgradeFromFail: "EnterUpgradeFromFail",
				EnterUpgradeFromSucc: "EnterUpgradeFromSucc",
				UnlockAssassin1: "UnlockAssassin1",
				UnlockAssassin2: "UnlockAssassin2",
				UnlockAssassin3: "UnlockAssassin3",
				UnlockAssassin4: "UnlockAssassin4",
				UnlockAssassin5: "UnlockAssassin5",
				UnlockAssassin6: "UnlockAssassin6",
				UnlockAssassin7: "UnlockAssassin7",
				UnlockAssassin8: "UnlockAssassin8",
				UnlockAssassin9: "UnlockAssassin9",
				PassNormal1: "PassNormal1",
				PassNormal5: "PassNormal5",
				PassNormal10: "PassNormal10",
				PassNormal15: "PassNormal15",
				PassNormal20: "PassNormal20",
				StartArkMode1: "StartArkMode1",
				PassAtkMode1: "PassAtkMode1",
				PassAtkMode5: "PassAtkMode5",
				PassAtkMode10: "PassAtkMode10",
				StartBombMode1: "StartBombMode1",
				PassBombMode1: "PassBombMode1",
				PassBombMode5: "PassBombMode5",
				PassBombMode10: "PassBombMode10",
				NormalModeRelife: "NormalModeRelife",
				AtkModeRelife: "AtkModeRelife",
				BombModeRelife: "BombModeRelife",
				TryUseAssassin: "TryUseAssassin",
				WatchVideo3times: "WatchVideo3times",
				ShareVideo3times: "ShareVideo3times",
				UpgradeAssassinWacthVideo: "UpgradeAssassinWacthVideo",
				DiamondNotEnough: "DiamondNotEnough"
			}
		}, cc._RF.pop()
	}, {}],
	GameObjectMgr: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "37e4dOnMOhAo4rzOJukSHDH", "GameObjectMgr"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("../YdhwSDK/YdhwSDK"),
			i = t("./UserData"),
			a = t("./GameObject"),
			r = t("./LevelData"),
			s = cc._decorator,
			c = (s.ccclass, s.property, function () {
				function t() {
					this.guards = {}, this.ZID = 0, this.stageLv = -1, this.isGameStart = !1, this.followGuard = null, this.randomMap = 0, this.difficulty = 1, this.tryAssassinId = -1, this.guardFightType = a.FightType.NormalMode, this.customBlocks = {}, this.props = {}, this.blockType = {}
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.gameObjectMgr || (this.gameObjectMgr = new t), this.gameObjectMgr
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.reset = function () {
					this.isGameStart = !1, this.followGuard = null, this.followCoord = null, this.followAssassinCoord = null
				}, t.prototype.setAssassin = function (t) {
					this.assassin = t
				}, t.prototype.removeAssassin = function () {
					this.assassin && (this.assassin.destroy(), this.assassin = null)
				}, t.prototype.pushGuards = function (t) {
					this.ZID++, t.getComponent("Guard").setId(this.ZID), this.guards[this.ZID] = t
				}, t.prototype.pushBlocks = function (t, e) {
					this.ZID++, e == a.ObjectType.BlockArk ? t.getComponent("Ark").setId(this.ZID) : e == a.ObjectType.BlockBomb && t.getComponent("Bomb").setId(this.ZID), this.blockType[this.ZID] = e, this.customBlocks[this.ZID] = t
				}, t.prototype.pushProps = function (t) {
					this.ZID++, t.getComponent("Prop").setId(this.ZID), this.props[this.ZID] = t
				}, t.prototype.getBlockType = function (t) {
					return this.blockType[t]
				}, t.prototype.removeGuards = function (t) {
					void 0 === t && (t = -1);
					for (var e in this.guards)
						if (t < 0) this.guards[e] && (this.guards[e].destroy(), this.guards[e] = null);
						else if (e === "" + t) {
							this.guards[e] && (this.guards[e].destroy(), this.guards[e] = null);
							break
						}
				}, t.prototype.removeBlocks = function (t) {
					void 0 === t && (t = -1);
					for (var e in this.customBlocks)
						if (t < 0) this.customBlocks[e] && (this.customBlocks[e].destroy(), this.customBlocks[e] = null);
						else if (e === "" + t) {
							this.customBlocks[e] && (this.customBlocks[e].destroy(), this.customBlocks[e] = null);
							break
						}
				}, t.prototype.removeProps = function (t) {
					void 0 === t && (t = -1);
					for (var e in this.props)
						if (t < 0) this.props[e] && (this.props[e].destroy(), this.props[e] = null);
						else if (e === "" + t) {
							this.props[e] && (this.props[e].destroy(), this.props[e] = null);
							break
						}
				}, t.prototype.getGuardsLeftNumber = function () {
					var t = 0;
					for (var e in this.guards) this.guards[e] && t++;
					return t
				}, t.prototype.getBlocksLeftNumber = function () {
					var t = 0;
					for (var e in this.customBlocks) this.customBlocks[e] && t++;
					return t
				}, t.prototype.getGuardsNumber = function () {
					return this.getLevelData().guardNum
				}, t.prototype.getArksNumber = function () {
					return this.getLevelData().ArkModeNum
				}, t.prototype.getBombsNumber = function () {
					var t = this.getLevelData();
					return t.BombModeTimes instanceof Array ? t.BombModeTimes.length : 0
				}, t.prototype.getPropsNumber = function (t) {
					var e = this.getLevelData();
					return t == a.PropType.timing ? e.TimingPropNum ? e.TimingPropNum : 0 : t == a.PropType.invisible ? e.HidePropNum ? e.HidePropNum : 0 : void console.error("getPropsNumber propType is error: ", t)
				}, t.prototype.getBombsTimes = function () {
					return this.getLevelData().BombModeTimes
				}, t.prototype.getKillGuardsNumber = function () {
					var t = 0;
					for (var e in this.guards) this.guards[e] && t++;
					return this.getGuardsNumber() - t
				}, t.prototype.getCollectArksNumber = function () {
					var t = 0;
					for (var e in this.customBlocks) this.customBlocks[e] && t++;
					return this.getArksNumber() - t
				}, t.prototype.getCollectBombsNumber = function () {
					var t = 0;
					for (var e in this.customBlocks) this.customBlocks[e] && t++;
					return this.getBombsNumber() - t
				}, t.prototype.coord2Point = function (t) {
					return t && t.x ? cc.v2(t.x * this.tileSize.width + this.tileSize.width / 2, (this.mapSize.height - t.y) * this.tileSize.height - this.tileSize.height / 2) : cc.v2()
				}, t.prototype.point2Coord = function (t, e) {
					return void 0 === e && (e = !1), e ? cc.v2(this.mergeValue((t.x - this.tileSize.width / 2) / this.tileSize.width), this.mapSize.height - this.mergeValue((t.y + this.tileSize.height / 2) / this.tileSize.height)) : cc.v2(Math.round((t.x - this.tileSize.width / 2) / this.tileSize.width), this.mapSize.height - Math.round((t.y + this.tileSize.height / 2) / this.tileSize.height))
				}, t.prototype.mergeValue = function (t) {
					var e = Math.abs(t - Math.floor(t)),
						o = Math.abs(t - (Math.floor(t) + .5)),
						n = Math.abs(t - Math.ceil(t)),
						i = Math.min(e, o, n);
					return e == i ? Math.floor(t) : o == i ? Math.floor(t) + .5 : Math.ceil(t)
				}, t.prototype.createObjectPool = function () {
					var t = this;
					this.nodePool = new cc.NodePool, n.default.PrefabManager.loadPrefab("prefab/bulletNode", function (e) {
						if (e) {
							t.bulletPrefab = e;
							for (var o = 0; o < 10; o++) {
								var n = cc.instantiate(e);
								t.nodePool.put(n)
							}
						}
					})
				}, t.prototype.getBulletIns = function () {
					return 0 == this.nodePool.size() ? cc.instantiate(this.bulletPrefab) : this.nodePool.get()
				}, t.prototype.destroyBullet = function (t) {
					this.nodePool.put(t)
				}, t.prototype.addLevel = function () {
					this.stageLv = this.getLevel(), this.stageLv += 1, this.FightType === a.FightType.NormalMode ? i.default.Level = this.stageLv : this.FightType === a.FightType.ArkMode ? i.default.ArkLevel = this.stageLv : this.FightType === a.FightType.BombMode ? i.default.BombLevel = this.stageLv : this.FightType === a.FightType.ExtricateMode && (i.default.ExLevel = this.stageLv)
				}, t.prototype.getLevel = function () {
					return this.FightType === a.FightType.NormalMode ? i.default.Level : this.FightType === a.FightType.ArkMode ? i.default.ArkLevel : this.FightType === a.FightType.BombMode ? i.default.BombLevel : this.FightType === a.FightType.ExtricateMode ? i.default.ExLevel : i.default.Level
				}, t.prototype.setLevel = function (t) {
					this.stageLv = t
				}, Object.defineProperty(t.prototype, "LevelProperty", {
					get: function () {
						return this.getLevelData()
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.getLevelData = function () {
					var t;
					return this.FightType === a.FightType.NormalMode ? t = r.default.NormalMode : this.FightType === a.FightType.ArkMode ? t = r.default.ArkMode : this.FightType === a.FightType.BombMode ? t = r.default.BombMode : this.FightType === a.FightType.ExtricateMode && (t = r.default.ExtricateMode), t.length < 14 && console.error("level data is error!!!!!!!!!!!!this.FightType: ", this.FightType), this.stageLv = this.getLevel(), this.stageLv <= 5 ? 1 === this.stageLv ? t[0] : t[1] : this.stageLv <= 10 ? t[2] : this.stageLv <= 15 ? t[3] : this.stageLv <= 20 ? t[4] : this.stageLv <= 25 ? t[5] : this.stageLv <= 30 ? t[6] : this.stageLv <= 35 ? t[7] : this.stageLv <= 40 ? t[8] : this.stageLv <= 45 ? t[9] : this.stageLv <= 50 ? t[10] : this.stageLv <= 55 ? t[11] : this.stageLv <= 65 ? t[12] : t[13]
				}, t.prototype.setAutoFollowGuard = function (t) {
					this.followGuard = t
				}, t.prototype.setAutoFollowCoord = function (t) {
					this.followCoord = t
				}, t.prototype.setAutoFollowAssassinCoord = function (t) {
					this.followAssassinCoord = t
				}, Object.defineProperty(t.prototype, "GameStart", {
					get: function () {
						return this.isGameStart
					},
					set: function (t) {
						this.isGameStart = t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "RandomMap", {
					get: function () {
						return this.randomMap
					},
					set: function (t) {
						this.randomMap = t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "Difficulty", {
					get: function () {
						return n.default.Util.random(0, 5)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "TryAssassinId", {
					get: function () {
						return this.tryAssassinId
					},
					set: function (t) {
						this.tryAssassinId = t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "FightType", {
					get: function () {
						return this.guardFightType
					},
					set: function (t) {
						this.guardFightType = t
					},
					enumerable: !0,
					configurable: !0
				}), t.gameObjectMgr = null, t
			}());
		o.default = c, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./GameObject": "GameObject",
		"./LevelData": "LevelData",
		"./UserData": "UserData"
	}],
	GameObject: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "7fc89cKjVlFrZJghC3ujU+S", "GameObject");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("../YdhwSDK/YdhwSDK"),
			s = t("./GameObjectMgr"),
			c = t("./UserData"),
			d = t("./Txt"),
			l = cc._decorator,
			u = l.ccclass,
			h = l.property;
		o.ObjectStatus = cc.Enum({
			AddSpd: 0,
			NormalMove: 1,
			Static: 2,
			Atk: 3,
			Dead: 4,
			PreAtk: 5,
			Atked: 6,
			Sweeping: 7,
			Default: 100
		}), o.ObjectType = cc.Enum({
			Assassin: 0,
			Guard: 1,
			BlockArk: 2,
			BlockBomb: 3,
			Prop: 4
		}), o.PropType = cc.Enum({
			timing: 0,
			invisible: 1,
			Default: 100
		}), o.FightType = cc.Enum({
			NormalMode: 0,
			ArkMode: 1,
			BombMode: 2,
			ExtricateMode: 3
		}), o.DeadType = cc.Enum({
			GunDead: 0,
			BombDead: 1
		});
		var p = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.atk = 0, e.moveSpd = 1, e.addSpd = 1, e.status = 0, e.type = 0, e.hp = 0, e.preAdddiamondCnt = 0, e.id = 1, e.collision = [], e.light = null, e.rotate = 0, e.speed = 0, e.cachMovePath = null, e.cachCb = null, e.cachFrom = null, e.isMove = !1, e.staticTime = 0, e.autoSeekTime = 10, e.sweepingActionTag = 100, e.moveActionTag = 101, e.fightType = 0, e.isInvisible = !1, e.isTiming = !1, e._currPaths = null, e._currFrom = null, e._currcb = null, e
			}
			return n(e, t), e.prototype.start = function () { }, e.prototype.move = function (t, e, n) {
				var i = this;
				if (0 !== t.length) {
					if (this.status === o.ObjectStatus.AddSpd) this.speed = this.addSpd;
					else {
						if (this.status !== o.ObjectStatus.NormalMove) return void console.error("\u975e\u8fd0\u52a8\u72b6\u6001\uff0c\u4e0d\u7528\u79fb\u52a8");
						this.speed = this.moveSpd
					}
					if (!this.isTiming) {
						if (this.isMove) return this.cachMovePath = t, this.cachCb = n, void (this.cachFrom = e);
						if (this.node.getActionByTag(this.sweepingActionTag) && this.node.stopActionByTag(this.sweepingActionTag), this.type === o.ObjectType.Assassin && !e) {
							var r = new cc.Event.EventCustom(a.default.ASSASSIN_MOVE, !0);
							r.setUserData(t), cc.director.dispatchEvent(r)
						}
						var c = s.default.instance.tileSize,
							d = s.default.instance.mapSize;
						if (this.type === o.ObjectType.Guard) {
							var l = this.node.position.add(cc.v2(c.width * d.width / 2, c.height * d.height / 2)),
								u = s.default.instance.coord2Point(this.getCoord());
							l && l.equals(u)
						}
						if (e || ((e = s.default.instance.coord2Point(t.shift())).x -= c.width * d.width / 2, e.y -= c.height * d.height / 2, 0 !== t.length)) {
							var h = s.default.instance.coord2Point(t.shift());
							h.x -= c.width * d.width / 2, h.y -= c.height * d.height / 2;
							var p = h.sub(e),
								f = p.mag();
							if (this.speed <= 0) console.error("\u5bf9\u8c61\u79fb\u52a8\u901f\u5ea6\u672a\u8bbe\u5b9a");
							else {
								var g = Math.abs(f / this.speed),
									y = g,
									m = 0;
								p.x > 0 ? 0 == p.y ? m = 0 : p.y > 0 ? m = -45 : p.y < 0 && (m = 45) : p.x < 0 ? 0 == p.y ? m = this.node.rotation < 0 ? -180 : 180 : p.y > 0 ? m = this.node.rotation < 45 ? -135 : 225 : p.y < 0 && (m = this.node.rotation < -45 ? -225 : 135) : 0 == p.x && (p.y > 0 ? m = this.node.rotation < 90 ? -90 : 270 : p.y < 0 && (m = this.node.rotation < -90 ? -270 : 90));
								var v = this.node.getComponent(cc.Animation),
									_ = "assassin";
								this.type === o.ObjectType.Guard ? _ = "guardMove" : (this.checkHasGuard(h) && (g = 3 * g / 5), this.clearPath(e)), v.getAnimationState(_).isPlaying || v.play(_, 0);
								var w = this.checkCollision(h);
								if (w) return n && n(), this.moveEnd(), void (w.type === o.ObjectType.BlockBomb && this.type === o.ObjectType.Assassin && w.obj.getComponent("Bomb").dismantled());
								this._currPaths = t, this._currFrom = h, this._currcb = n, this.isMove = !0;
								var b = cc.sequence(cc.spawn(cc.moveTo(g, h), cc.rotateTo(g / 2, m)), cc.callFunc(function () {
									if (i.isMove = !1, i.cachMovePath) {
										var e = s.default.instance.coord2Point(i.cachMovePath.pop());
										if (e) {
											var o = i.getClosestPath(e);
											o.length > 1 ? (t = o, n = i.cachCb, h = null) : console.error("\u65e0\u8def\u53ef\u8d70\uff1a", s.default.instance.point2Coord(e))
										}
										i.cachMovePath = null
									}
									t.length > 0 ? i.move(t, h, n) : (n && n(), i.moveEnd()), -180 == m ? i.node.rotation = 180 : 270 == m ? i.node.rotation = -90 : -270 == m ? i.node.rotation = 90 : 225 == m ? i.node.rotation = -135 : -225 == m && (i.node.rotation = 135)
								}));
								if (b.setTag(this.moveActionTag), this.node.runAction(b), this.type === o.ObjectType.Assassin) {
									var S = new cc.Event.EventCustom(a.default.CAMERA_MOVE, !0);
									S.setUserData({
										to: h,
										t: 1 * y
									}), cc.director.dispatchEvent(S)
								}
							}
						}
					}
				}
			}, e.prototype.clearPath = function (t) {
				var e = null;
				if (t) {
					var o = s.default.instance.tileSize,
						n = s.default.instance.mapSize,
						i = t.add(cc.v2(o.width * n.width / 2, o.height * n.height / 2));
					e = s.default.instance.point2Coord(i)
				}
				var r = new cc.Event.EventCustom(a.default.CLEAR_PATH, !0);
				r.setUserData(e), cc.director.dispatchEvent(r)
			}, e.prototype.checkCollision = function (t) {
				t = this.getCoord(t);
				if (this.collision.indexOf(o.ObjectType.Guard) > -1) {
					var e = s.default.instance.guards;
					for (var n in e) {
						if (e[n])
							if ((a = e[n].getComponent("Guard").getCoord()) && a.equals(t)) return {
								obj: e[n],
								type: o.ObjectType.Guard
							}
					}
				}
				var i = s.default.instance.customBlocks;
				for (var n in i) {
					var a, r = s.default.instance.getBlockType(n);
					if (this.collision.indexOf(r) > -1 && i[n])
						if (r === o.ObjectType.BlockArk) {
							if ((a = i[n].getComponent("Ark").getCoord()) && a.equals(t)) return {
								obj: i[n],
								type: r
							}
						} else if (r === o.ObjectType.BlockBomb) {
							var c = i[n].getComponent("Bomb").getCoords();
							if (c)
								for (var d = 0; d < c.length; d++)
									if (c[d] && c[d].equals(t)) return {
										obj: i[n],
										type: r
									}
						}
				}
			}, e.prototype.moveEnd = function (t) {
				void 0 === t && (t = !0);
				var e = this.node.getComponent(cc.Animation);
				e.pause(), e.setCurrentTime(0), e.stop(), this.type === o.ObjectType.Assassin ? (this.clearPath(), this.status = o.ObjectStatus.Static) : t && this.sweep(), this.cachMovePath = null, this._currPaths = null, this._currFrom = null, this._currcb = null
			}, e.prototype.movePause = function () {
				this.status == o.ObjectStatus.Sweeping && (this.node.stopActionByTag(this.sweepingActionTag), this.status = o.ObjectStatus.Static)
			}, e.prototype.moveResume = function () {
				this._currPaths && this._currPaths.length > 0 && (this.status = o.ObjectStatus.NormalMove, this.move(this._currPaths, this._currFrom, this._currcb))
			}, e.prototype.sweep = function () {
				var t = this;
				if (!this.isTiming && this.type === o.ObjectType.Guard) {
					this.status = o.ObjectStatus.Sweeping;
					var e = cc.sequence(cc.rotateBy(1, 45), cc.rotateBy(2, -90), cc.rotateBy(1, 45), cc.callFunc(function () {
						t.status = o.ObjectStatus.Static
					}));
					e.setTag(this.sweepingActionTag), this.node.runAction(e)
				}
			}, e.prototype.death = function (t) {
				var e = this;
				if (void 0 === t && (t = o.DeadType.GunDead), this.playDiamondEffect(), this.status = o.ObjectStatus.Dead, this.type === o.ObjectType.Assassin) {
					s.default.instance.removeAssassin();
					var n = d.default.getTxt("Tips11");
					t == o.DeadType.BombDead && (n = d.default.getTxt("Tips12")), r.default.showToast(n), setTimeout(function () {
						e.relife()
					}, 3e3), r.default.Audio.playEffect("playerkilled.mp3")
				} else {
					var i = s.default.instance.guards[this.id];
					if (i && i.getComponent("Guard").checkWarn(), c.default.addPreGetDiamond(this.preAdddiamondCnt), this.preAdddiamondCnt > 0) {
						var l = new cc.Event.EventCustom(a.default.SHOW_PREADDDIAMOND, !0);
						l.setUserData(this.preAdddiamondCnt), cc.director.dispatchEvent(l)
					}
					s.default.instance.removeGuards(this.id), 0 == s.default.instance.getGuardsLeftNumber() && s.default.instance.FightType == o.FightType.NormalMode && this.showRst(), r.default.Audio.playEffect("knife_hit.mp3")
				}
			}, e.prototype.collect = function () {
				if (c.default.addPreGetDiamond(this.preAdddiamondCnt), this.preAdddiamondCnt > 0) {
					var t = new cc.Event.EventCustom(a.default.SHOW_PREADDDIAMOND, !0);
					t.setUserData(this.preAdddiamondCnt), cc.director.dispatchEvent(t)
				}
				s.default.instance.removeBlocks(this.id), 0 == s.default.instance.getBlocksLeftNumber() && this.showRst(), r.default.Audio.playEffect("collect.mp3")
			}, e.prototype.swallow = function () {
				s.default.instance.removeProps(this.id), r.default.Audio.playEffect("collect.mp3")
			}, e.prototype.relife = function () {
				if (s.default.instance.isGameStart) {
					var t = new cc.Event.EventCustom(a.default.OPEN_GAME_RELIFE, !0);
					t.setUserData(!1), cc.director.dispatchEvent(t), r.default.stopRecord(), s.default.instance.reset()
				}
			}, e.prototype.showRst = function () {
				if (s.default.instance.isGameStart) {
					var t = [1, 5, 10, 15, 20],
						e = "PassNormal",
						n = s.default.instance.getLevel(),
						i = s.default.instance.FightType;
					i === o.FightType.NormalMode ? (t = [1, 5, 10, 15, 20], e = "PassNormal") : i === o.FightType.ArkMode ? (t = [1, 5, 10], e = "PassAtkMode") : i === o.FightType.BombMode && (t = [1, 5, 10], e = "PassBombMode"), t.indexOf(n) > -1 && r.default.reportAnalytics(a.default.ReportEvt[e + n]);
					var c = new cc.Event.EventCustom(a.default.OPEN_GAME_RESULT, !0);
					c.setUserData(!0), cc.director.dispatchEvent(c), r.default.stopRecord(), s.default.instance.reset()
				}
			}, e.prototype.setTmxData = function (t) {
				this.tmxData = t
			}, e.prototype.getTmxData = function () {
				return this.tmxData
			}, e.prototype.initTmpRoundRata = function (t) {
				var e = this;
				void 0 === t && (t = !1);
				var n = s.default.instance.tileSize,
					i = s.default.instance.mapSize;
				this.tmpRoundRata = new Array(i.width);
				for (var a = 0; a < i.width; a++) {
					this.tmpRoundRata[a] = new Array(i.height);
					for (var r = 0; r < i.height; r++) this.tmpRoundRata[a][r] = 0
				}
				if (this.type === o.ObjectType.Assassin && !t) {
					var c = s.default.instance.followGuard,
						d = s.default.instance.followCoord;
					if (cc.isValid(c) && d && cc.isValid(this.node)) {
						var l = c.rotation;
						if (this.getCoord().sub(d).mag() * n.width <= s.default.instance.LevelProperty.shieldDis) return;
						this.surroundPoint(d).forEach(function (t) {
							t.x < i.width && t.y < i.height && (e.tmpRoundRata[t.x][t.y] = 1)
						}), l > 180 ? l -= 360 : l < -180 && (l += 360), l > -45 && l <= 45 ? d.x - 1 > 0 && (this.tmpRoundRata[d.x - 1][d.y] = 0, d.y + 1 < i.height && (this.tmpRoundRata[d.x - 1][d.y + 1] = 0), d.y - 1 > 0 && (this.tmpRoundRata[d.x - 1][d.y - 1] = 0)) : l > 45 && l <= 135 ? d.y - 1 > 0 && (this.tmpRoundRata[d.x][d.y - 1] = 0, d.x + 1 < i.width && (this.tmpRoundRata[d.x + 1][d.y - 1] = 0), d.x - 1 > 0 && (this.tmpRoundRata[d.x - 1][d.y - 1] = 0)) : l > -135 && l <= -45 ? d.y + 1 < i.height && (this.tmpRoundRata[d.x][d.y + 1] = 0, d.x + 1 < i.width && (this.tmpRoundRata[d.x + 1][d.y + 1] = 0), d.x - 1 > 0 && (this.tmpRoundRata[d.x - 1][d.y + 1] = 0)) : (l <= -135 || l > 135) && d.x + 1 < i.width && (this.tmpRoundRata[d.x + 1][d.y] = 0, d.y + 1 < i.height && (this.tmpRoundRata[d.x + 1][d.y + 1] = 0), d.y - 1 > 0 && (this.tmpRoundRata[d.x + 1][d.y - 1] = 0))
					}
				}
			}, e.prototype.setCameraMoveInfo = function (t) {
				this.cameraMoveInfo = t
			}, e.prototype.setCanMoveTilesPosition = function (t) {
				this.canMoveTiles = t
			}, e.prototype.setId = function (t) {
				this.id = t
			}, e.prototype.getId = function () {
				return this.id
			}, e.prototype.setStatus = function (t) {
				this.status = t
			}, e.prototype.getStatus = function () {
				return this.status
			}, e.prototype.getClosestPath = function (t) {
				if (this.initTmpRoundRata(), !t) {
					r.default.Util.shuffle(this.canMoveTiles);
					for (var e = 0; e < this.canMoveTiles.length; e++)
						if (!this.node || !this.node.position.equals(this.canMoveTiles[e])) {
							t = this.canMoveTiles[e];
							break
						}
				}
				var n = s.default.instance.tileSize,
					i = s.default.instance.mapSize,
					a = cc.v2(this.node.x + n.width * i.width / 2, this.node.y + n.height * i.height / 2),
					c = s.default.instance.point2Coord(a),
					d = s.default.instance.point2Coord(t),
					l = this.searchRoad(c.x, c.y, d.x, d.y);
				return this.type === o.ObjectType.Assassin && 0 == l.length && s.default.instance.followGuard && (this.initTmpRoundRata(!0), l = this.searchRoad(c.x, c.y, d.x, d.y)), l.unshift(c), l
			}, e.prototype.searchRoad = function (t, e, o, n) {
				var i, a = [],
					r = [],
					c = [];
				a.push({
					x: t,
					y: e,
					G: 0
				});
				do {
					var d = a.pop();
					r.push(d);
					var l = this.surroundPoint(d);
					for (var u in l) {
						var h = l[u];
						if (h.x >= 0 && h.y >= 0 && h.x < s.default.instance.mapSize.width && h.y < s.default.instance.mapSize.height && 0 == this.tmxData[h.x][h.y] && 0 == this.tmpRoundRata[h.x][h.y] && !this.existList(h, r) && 0 == this.tmxData[h.x][d.y] && 0 == this.tmxData[d.x][h.y]) {
							var p = d.G + ((d.x - h.x) * (d.y - h.y) == 0 ? 10 : 14);
							if (this.existList(h, a)) {
								var f = this.existList(h, a);
								p < a[f].G && (a[f].parent = d, a[f].G = p, a[f].F = p + a[f].H)
							} else h.H = 10 * Math.abs(o - h.x) + 10 * Math.abs(n - h.y), h.G = p, h.F = h.H + h.G, h.parent = d, a.push(h)
						}
					}
					if (0 == a.length) break;
					a.sort(this.sortF)
				} while (!(i = this.existList({
					x: o,
					y: n
				}, a)));
				if (i) {
					var g = a[i];
					do {
						c.unshift({
							x: g.x,
							y: g.y
						}), g = g.parent
					} while (g.x != t || g.y != e)
				} else c = [];
				return c
			}, e.prototype.sortF = function (t, e) {
				return e.F - t.F
			}, e.prototype.surroundPoint = function (t) {
				var e = t.x,
					o = t.y;
				return [{
					x: e,
					y: o - 1
				}, {
					x: e - 1,
					y: o - 1
				}, {
					x: e + 1,
					y: o
				}, {
					x: e + 1,
					y: o + 1
				}, {
					x: e,
					y: o + 1
				}, {
					x: e - 1,
					y: o + 1
				}, {
					x: e - 1,
					y: o
				}, {
					x: e + 1,
					y: o - 1
				}]
			}, e.prototype.existList = function (t, e) {
				for (var o in e)
					if (t.x == e[o].x && t.y == e[o].y) return o;
				return null
			}, e.prototype.getRect = function () {
				var t = s.default.instance.tileSize,
					e = cc.size(t.width / 2 + 1, t.height / 2 + 1),
					o = this.node.position;
				return cc.rect(o.x - e.width / 2, o.y - e.height / 2, e.width, e.height)
			}, e.prototype.getCoord = function (t, e) {
				void 0 === e && (e = !1);
				var o = s.default.instance.tileSize,
					n = s.default.instance.mapSize,
					i = (t = t || this.node.position).add(cc.v2(o.width * n.width / 2, o.height * n.height / 2));
				return s.default.instance.point2Coord(i, e)
			}, e.prototype.getStepCoords = function () {
				var t = this,
					e = [],
					o = this.getCoord();
				return this.surroundPoint(o).forEach(function (n) {
					0 === t.tmxData[n.x][n.y] && e.push([o, cc.v2(n.x, n.y)])
				}), e
			}, e.prototype.playDiamondEffect = function () {
				if (cc.isValid(this.node)) {
					var t = this.node.parent.getChildByName("diamondNode");
					t && (t.active = !0, t.position = this.node.position, t.getComponent("DiamondNode").palyDiamondAni(this.getStepCoords(), function () {
						t.active = !1
					}))
				}
			}, e.prototype.checkHasGuard = function (t) {
				var e = this.getCoord(t),
					o = s.default.instance.guards,
					n = !1;
				for (var i in o)
					if (o[i]) {
						var a = o[i].getComponent("Guard").getCoord();
						if (e && e.equals(a)) {
							n = !0;
							break
						}
					} return n
			}, e.prototype.getFightType = function () {
				return this.fightType
			}, e.prototype.addTargetIcon = function () {
				var t = this,
					e = "targetIcon";
				r.default.PrefabManager.loadPrefab("prefab/targetIcon", function (o) {
					if (cc.isValid(t.node) && !t.node.getChildByName(e)) {
						var n = cc.instantiate(o);
						n.name = e, n.parent = t.node, n.getComponent(cc.Animation).on("finished", function () {
							n.destroy()
						}, t)
					}
				})
			}, Object.defineProperty(e.prototype, "InVisible", {
				get: function () {
					return this.isInvisible
				},
				set: function (t) {
					this.status !== o.ObjectStatus.Default && (this.isInvisible = t, this.node.opacity = t ? 150 : 255)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "Timing", {
				get: function () {
					return this.isTiming
				},
				set: function (t) {
					if (this.status !== o.ObjectStatus.Default) {
						this.isTiming = t;
						var e = this.node.getComponent(cc.Animation);
						t ? this.type !== o.ObjectType.Assassin && this.type !== o.ObjectType.Guard || (e && e.pause(), this.movePause()) : this.type !== o.ObjectType.Assassin && this.type !== o.ObjectType.Guard || (e && e.resume(), this.moveResume())
					}
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.addEvts = function () {
				var t = this;
				cc.director.on(a.default.REMOVE_PROP, function (e) {
					var n = e.getUserData();
					n.targetType.indexOf(t.type) > -1 && (n.propType == o.PropType.timing ? t.Timing = !1 : n.propType == o.PropType.invisible && (t.InVisible = !1))
				}, this), cc.director.on(a.default.GET_PROP, function (e) {
					var n = e.getUserData();
					n.targetType.indexOf(t.type) > -1 && (n.propType == o.PropType.timing ? t.Timing = !0 : n.propType == o.PropType.invisible && (t.InVisible = !0))
				}, this)
			}, e.prototype.onDestroy = function () {
				cc.director.targetOff(this)
			}, e.prototype.update = function () { }, i([h({
				displayName: "\u653b\u51fb\u529b"
			})], e.prototype, "atk", void 0), i([h({
				displayName: "\u79fb\u52a8\u901f\u5ea6(\u50cf\u7d20)"
			})], e.prototype, "moveSpd", void 0), i([h({
				displayName: "\u52a0\u901f\u540e\u79fb\u52a8\u901f\u5ea6(\u50cf\u7d20)"
			})], e.prototype, "addSpd", void 0), i([h({
				type: cc.Enum(o.ObjectStatus),
				displayName: "\u72b6\u6001"
			})], e.prototype, "status", void 0), i([h({
				type: cc.Enum(o.ObjectType),
				displayName: "\u7c7b\u578b"
			})], e.prototype, "type", void 0), i([h({
				displayName: "\u8840\u91cf"
			})], e.prototype, "hp", void 0), i([h({
				displayName: "\u6b7b\u4ea1\u7206\u51fa\u94bb\u77f3\u6570\u91cf"
			})], e.prototype, "preAdddiamondCnt", void 0), i([h({
				displayName: "ID"
			})], e.prototype, "id", void 0), i([h({
				type: cc.Enum(o.ObjectType),
				displayName: "\u548c\u54ea\u4e9b\u5bf9\u8c61\u68c0\u6d4b\u78b0\u649e"
			})], e.prototype, "collision", void 0), i([h(cc.Node)], e.prototype, "light", void 0), e = i([u], e)
		}(cc.Component);
		o.default = p, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObjectMgr": "GameObjectMgr",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	GamePause: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "ac291ghxHJJ+5cDFkh+FO/H", "GamePause");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("../YdhwSDK/YdhwSDK"),
			s = t("./UserData"),
			c = t("./GameObjectMgr"),
			d = cc._decorator,
			l = d.ccclass,
			u = d.property,
			h = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.goHomeBtn = null, e.continueBtn = null, e.resetBtn = null, e
				}
				return n(e, t), e.prototype.start = function () {
					cc.director.pause(), r.default.showBanner()
				}, e.prototype.onEnable = function () { }, e.prototype.onDisable = function () {
					r.default.hideBanner(), cc.director.resume()
				}, e.prototype.onGoHomeClick = function () {
					s.default.PreGetDiamond = 0, c.default.instance.TryAssassinId = -1, c.default.instance.reset();
					var t = new cc.Event.EventCustom(a.default.OPEN_START_LAYER, !0);
					cc.director.dispatchEvent(t), this.node.destroy(), r.default.Audio.playEffect("click.mp3")
				}, e.prototype.onContinueClick = function () {
					var t = new cc.Event.EventCustom(a.default.GAME_RESUME, !0);
					cc.director.dispatchEvent(t), this.node.destroy(), r.default.Audio.playEffect("click.mp3")
				}, e.prototype.onResetClick = function () {
					var t = new cc.Event.EventCustom(a.default.GAME_RESET, !0);
					cc.director.dispatchEvent(t), this.node.destroy(), r.default.Audio.playEffect("click.mp3")
				}, i([u(cc.Button)], e.prototype, "goHomeBtn", void 0), i([u(cc.Button)], e.prototype, "continueBtn", void 0), i([u(cc.Button)], e.prototype, "resetBtn", void 0), e = i([l], e)
			}(cc.Component);
		o.default = h, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObjectMgr": "GameObjectMgr",
		"./UserData": "UserData"
	}],
	GameRelife: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "033a8I0SOVHCocoYbhDTQfc", "GameRelife");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("../YdhwSDK/YdhwSDK"),
			s = t("./UserData"),
			c = t("./GameObjectMgr"),
			d = t("./Txt"),
			l = t("./GameObject"),
			u = cc._decorator,
			h = u.ccclass,
			p = u.property,
			f = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.reLifeBtn = null, e.closeBtn = null, e.progressBar = null, e.relifeBtnLabel = null, e.closeBtnLabel = null, e.upgradeBtnLabel = null, e._isPlayVideoStatus = !1, e._openAssassinShop = !1, e
				}
				return n(e, t), e.prototype.start = function () {
					var t = this;
					this.progressBar.progress = 0, this.schedule(function () {
						t._isPlayVideoStatus || t._openAssassinShop || (t.progressBar.progress + .1 / 60 <= 1 ? t.progressBar.progress += .1 / 60 : t.onCloseBtnClicked())
					}, 1 / 60), d.default.setFont(this.relifeBtnLabel, d.default.getTxt("Relife")), d.default.setFont(this.closeBtnLabel, d.default.getTxt("NoUse")), d.default.setFont(this.upgradeBtnLabel, d.default.getTxt("UpgradeLabel")), this.addEvt(), this.closeBtn.node.active = !1, this.scheduleOnce(function () {
						cc.isValid(t.closeBtn) && (t.closeBtn.node.active = !0)
					}, 3), r.default.createVideo(r.default.Platform.videoId[1])
				}, e.prototype.addEvt = function () {
					var t = this;
					cc.director.on(a.default.CLOSE_ASSASSIN_SHOP, function (e) {
						t._openAssassinShop = !1
					}, this)
				}, e.prototype.onDestroy = function () {
					cc.director.targetOff(this)
				}, e.prototype.onRelifeBtnClicked = function () {
					var t = this;
					this._openAssassinShop || this._isPlayVideoStatus || (this._isPlayVideoStatus = !0, r.default.showVideo(function (e) {
						if (t._isPlayVideoStatus = !1, e) {
							if (!cc.isValid(t.node)) return;
							t.node.destroy(), s.default.addRelifeNumber();
							var o = new cc.Event.EventCustom(a.default.GAME_RELIFE, !0);
							cc.director.dispatchEvent(o);
							var n = c.default.instance.FightType,
								i = "";
							n === l.FightType.NormalMode ? i = "NormalModeRelife" : n === l.FightType.ArkMode ? i = "AtkModeRelife" : n === l.FightType.BombMode && (i = "BombModeRelife"), r.default.reportAnalytics(a.default.ReportEvt[i])
						} else r.default.showToast(d.default.getTxt("Tips4"))
					}, function (e) {
						e || (t._isPlayVideoStatus = !1, r.default.showToast(d.default.getTxt("Tips5")))
					}), r.default.Audio.playEffect("click.mp3"), r.default.reportAnalytics(a.default.ReportEvt.TryUseAssassin))
				}, e.prototype.onCloseBtnClicked = function () {
					this.node.destroy(), c.default.instance.TryAssassinId = -1;
					var t = new cc.Event.EventCustom(a.default.OPEN_GAME_RESULT, !0);
					t.setUserData(!1), cc.director.dispatchEvent(t), r.default.Audio.playEffect("click.mp3")
				}, e.prototype.onGradeBtnClicked = function () {
					if (!this._openAssassinShop && !this._isPlayVideoStatus) {
						this._openAssassinShop = !0;
						var t = new cc.Event.EventCustom(a.default.OPEN_ASSASSIN_SHOP, !0);
						t.setUserData(this.node.name), cc.director.dispatchEvent(t), r.default.Audio.playEffect("click.mp3"), r.default.reportAnalytics(a.default.ReportEvt.EnterUpgradeFromFail)
					}
				}, i([p(cc.Button)], e.prototype, "reLifeBtn", void 0), i([p(cc.Button)], e.prototype, "closeBtn", void 0), i([p(cc.ProgressBar)], e.prototype, "progressBar", void 0), i([p(cc.Label)], e.prototype, "relifeBtnLabel", void 0), i([p(cc.Label)], e.prototype, "closeBtnLabel", void 0), i([p(cc.Label)], e.prototype, "upgradeBtnLabel", void 0), e = i([h], e)
			}(cc.Component);
		o.default = f, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	GameResultLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "40e8clbeZpNMb9fI33xFYPp", "GameResultLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("./GameObjectMgr"),
			s = t("../YdhwSDK/YdhwSDK"),
			c = t("./UserData"),
			d = t("./Txt"),
			l = t("./GameObject"),
			u = t("./MenuLayer"),
			h = cc._decorator,
			p = h.ccclass,
			f = h.property,
			g = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.nodeBase = null, e.shareBtn = null, e.videoBtn = null, e.nextBtn = null, e.nextLvLabel = null, e.upgradeBtn = null, e.resetBtnLabel = null, e.resetBtn = null, e.level = null, e.preAddDiamondText = null, e.diamondTex = null, e.diamondPrefab = null, e.shareVideoBtnLabel = null, e.videoBtnNode = null, e.videoBtnLabel = null, e.videoBtnTxt = null, e.title = null, e.failTitle = null, e.succTitleNode = null, e.failTitleNode = null, e.upgradeBtnLabel = null, e.shareVideoRewardLabel = null, e.toggle = null, e._isPlayVideoStatus = !1, e._openAssassinShop = !1, e._isSuccess = !0, e._isOpenUnLock = !1, e
				}
				return n(e, t), e.prototype.start = function () {
					if (d.default.setFont(this.nextLvLabel, d.default.getTxt("nextLevel")), d.default.setFont(this.shareVideoBtnLabel, d.default.getTxt("shareSelfVideo")), d.default.setFont(this.videoBtnLabel, d.default.getTxt("getSoon")), d.default.setFont(this.upgradeBtnLabel, d.default.getTxt("UpgradeLabel")), d.default.setFont(this.resetBtnLabel, d.default.getTxt("niceTry")), d.default.setFont(this.videoBtnTxt, d.default.getTxt("videoGet3times")), d.default.setFont(this.title, d.default.getTxt("PassWord")), d.default.setFont(this.failTitle, d.default.getTxt("failText")), this.diamondTex.string = "" + c.default.Diamond, s.default.Util.isTTEnv()) {
						var t = r.default.instance.LevelProperty;
						this.shareVideoRewardLabel.string = "+" + t.shareVideoReward, this.shareBtn.node.active = !0, this.upgradeBtn.node.active = !1
					} else this.shareBtn.node.active = !1, this.upgradeBtn.node.active = !0;
					this.videoBtn.node.active = !0, s.default.Config.isShowVideo || (this.toggle.isChecked = !1, this.toggle.node.active = !1, this.videoBtnTxt.node.active = !1), this.addEvt(), s.default.showInsertAd(), s.default.showBanner(), s.default.createVideo(s.default.Platform.videoId[0])
				}, e.prototype.setIsSuccess = function (t) {
					d.default.setFont(this.level, cc.js.formatStr(d.default.getTxt("LevelIdx"), r.default.instance.getLevel())), this._isSuccess = t, t ? (this.succTitleNode.active = !0, this.failTitleNode.active = !1, this.nextBtn.node.active = !0, this.resetBtn.node.active = !1, r.default.instance.addLevel()) : (this.succTitleNode.active = !1, this.failTitleNode.active = !0, this.nextBtn.node.active = !1, this.resetBtn.node.active = !0), this.freshPreaddDiamond()
				}, e.prototype.addEvt = function () {
					var t = this;
					cc.director.on(a.default.CLOSE_ASSASSIN_SHOP, function (e) {
						t._openAssassinShop = !1
					}, this), cc.director.on(a.default.ENTER_NEW_MODE, function (e) {
						t.onNewModeGamePlay()
					}, this)
				}, e.prototype.onDestroy = function () {
					c.default.PreGetDiamond = 0, cc.director.targetOff(this), s.default.hideBanner()
				}, e.prototype.onShareBtnClicked = function () {
					var t = this;
					s.default.shareVideo(function (e, o) {
						e ? t.reward(t.shareBtn) : (o = o || d.default.getTxt("Tips7"), s.default.showToast(o))
					}), s.default.Audio.playEffect("click.mp3"), s.default.reportAnalytics(a.default.ReportEvt.ShareVideo3times)
				}, e.prototype.freshPreaddDiamond = function () {
					if (this.toggle) {
						var t = 0,
							e = 1,
							o = r.default.instance.LevelProperty;
						this.toggle.isChecked && (e = 3), t = this._isSuccess ? c.default.PreGetDiamond * e : o.failReward * e, this.preAddDiamondText.string = "+" + t
					}
				}, e.prototype.onVideoBtnClicked = function () {
					var t = this;
					!this.toggle || this.toggle.isChecked ? this._openAssassinShop || this._isPlayVideoStatus || (this._isPlayVideoStatus = !0, s.default.showVideo(function (e) {
						t._isPlayVideoStatus = !1, e ? t.reward(t.videoBtn) : s.default.showToast(d.default.getTxt("Tips4"))
					}, function (e) {
						e || (t._isPlayVideoStatus = !1, s.default.showToast(d.default.getTxt("Tips5")))
					}), s.default.Audio.playEffect("click.mp3"), s.default.reportAnalytics(a.default.ReportEvt.WatchVideo3times)) : this.onGetBtnClicked()
				}, e.prototype.onGetBtnClicked = function () {
					console.log("onGetBtnClicked"), this.reward(this.videoBtn), s.default.Audio.playEffect("click.mp3")
				}, e.prototype.reward = function (t) {
					if (cc.isValid(t)) {
						var e = parseInt(this.preAddDiamondText.string);
						t == this.shareBtn && (e = parseInt(this.shareVideoRewardLabel.string)), e > 0 && (c.default.Diamond += e), this.rewardDiamond(t), t == this.videoBtn ? this.videoBtnNode.active = !1 : t.node.active = !1
					}
				}, e.prototype.rewardDiamond = function (t, e) {
					var o = this,
						n = cc.v2(0, 0);
					e && this.node.convertToNodeSpaceAR(e);
					for (var i = this.diamondTex.node.parent.position, a = 0, r = s.default.Util.random(20, 30), c = function (e) {
						var c = cc.instantiate(d.diamondPrefab);
						c.position = cc.v2(0, n.y + 150), c.parent = d.nodeBase;
						var l = [cc.v2(c.position.x + 10 * (r / 2 - e), c.position.y - s.default.Util.random(30, 50)), cc.v2(c.position.x + 30 * (r / 2 - e), c.position.y + s.default.Util.random(5, 20)), i],
							u = .1 * s.default.Util.random(8, 13);
						c.runAction(cc.sequence(cc.spawn(cc.bezierTo(u, l), cc.rotateTo(u, 1800)), cc.callFunc(function (e, n) {
							c.destroy(), o.addDiamond(r), ++a === r && o.scheduleOnce(function () {
								o.showNext(t)
							}, .5)
						})))
					}, d = this, l = 0; l < r; l++) c(l)
				}, e.prototype.addDiamond = function (t) {
					var e = parseInt(this.preAddDiamondText.string),
						o = Math.ceil(e / t),
						n = parseInt(this.diamondTex.string) + o;
					n > c.default.Diamond && (n = c.default.Diamond), this.diamondTex.string = "" + n
				}, e.prototype.freshDiamond = function () {
					this.diamondTex.string = "" + c.default.Diamond
				}, e.prototype.showNext = function (t) {
					cc.isValid(t) && (this.upgradeBtn.node.active || (this.upgradeBtn.node.active = !0, this.upgradeBtn.node.position = t.node.position))
				}, e.prototype.onToggleClicked = function () {
					this.freshPreaddDiamond()
				}, e.prototype.onGoHomeBtnClicked = function () {
					this.node.destroy();
					var t = new cc.Event.EventCustom(a.default.OPEN_START_LAYER, !0);
					cc.director.dispatchEvent(t), s.default.Audio.playEffect("click.mp3")
				}, e.prototype.onGradeBtnClicked = function () {
					if (!this._openAssassinShop && !this._isPlayVideoStatus) {
						this._openAssassinShop = !0;
						var t = new cc.Event.EventCustom(a.default.OPEN_ASSASSIN_SHOP, !0);
						t.setUserData(this.node.name), cc.director.dispatchEvent(t), s.default.Audio.playEffect("click.mp3"), s.default.reportAnalytics(a.default.ReportEvt.EnterUpgradeFromSucc)
					}
				}, e.prototype.onNextBtnClicked = function () {
					this.checkUnLockNewMode() ? this.openUnLockModeLayer() : this.onNewModeGamePlay(), s.default.Audio.playEffect("click.mp3")
				}, e.prototype.onResetBtnClicked = function () {
					this.onNewModeGamePlay(), s.default.Audio.playEffect("click.mp3")
				}, e.prototype.onNewModeGamePlay = function () {
					this.node.destroy(), this.gameStart()
				}, e.prototype.gameStart = function () {
					c.default.PreGetDiamond = 0;
					var t = new cc.Event.EventCustom(a.default.GAME_START, !0);
					cc.director.dispatchEvent(t)
				}, e.prototype.checkUnLockNewMode = function () {
					if (this._isSuccess && !this._isOpenUnLock) {
						var t = r.default.instance.FightType;
						if (t < l.FightType.ExtricateMode) {
							var e = 0;
							if (t == l.FightType.NormalMode ? e = u.ModeUnLockLevel.arkUnLock : t == l.FightType.ArkMode ? e = u.ModeUnLockLevel.bombUnLock : t == l.FightType.BombMode && (e = u.ModeUnLockLevel.exUnLock), e > 0 && r.default.instance.getLevel() == e) return this._isOpenUnLock = !0, !0
						}
					}
					return !1
				}, e.prototype.openUnLockModeLayer = function () {
					var t = new cc.Event.EventCustom(a.default.OPEN_UNLOCKMODELAYER, !0);
					t.setUserData(r.default.instance.FightType + 1), cc.director.dispatchEvent(t)
				}, i([f(cc.Node)], e.prototype, "nodeBase", void 0), i([f(cc.Button)], e.prototype, "shareBtn", void 0), i([f(cc.Button)], e.prototype, "videoBtn", void 0), i([f(cc.Button)], e.prototype, "nextBtn", void 0), i([f(cc.Label)], e.prototype, "nextLvLabel", void 0), i([f(cc.Button)], e.prototype, "upgradeBtn", void 0), i([f(cc.Label)], e.prototype, "resetBtnLabel", void 0), i([f(cc.Button)], e.prototype, "resetBtn", void 0), i([f(cc.Label)], e.prototype, "level", void 0), i([f(cc.Label)], e.prototype, "preAddDiamondText", void 0), i([f(cc.Label)], e.prototype, "diamondTex", void 0), i([f(cc.Prefab)], e.prototype, "diamondPrefab", void 0), i([f(cc.Label)], e.prototype, "shareVideoBtnLabel", void 0), i([f(cc.Node)], e.prototype, "videoBtnNode", void 0), i([f(cc.Label)], e.prototype, "videoBtnLabel", void 0), i([f(cc.Label)], e.prototype, "videoBtnTxt", void 0), i([f(cc.Label)], e.prototype, "title", void 0), i([f(cc.Label)], e.prototype, "failTitle", void 0), i([f(cc.Node)], e.prototype, "succTitleNode", void 0), i([f(cc.Node)], e.prototype, "failTitleNode", void 0), i([f(cc.Label)], e.prototype, "upgradeBtnLabel", void 0), i([f(cc.Label)], e.prototype, "shareVideoRewardLabel", void 0), i([f(cc.Toggle)], e.prototype, "toggle", void 0), e = i([p], e)
			}(cc.Component);
		o.default = g, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr",
		"./MenuLayer": "MenuLayer",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	GameScene: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "335c8o8xARNO49plGCYGB8W", "GameScene");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK/YdhwSDK"),
			r = t("./Events"),
			s = t("./GameObjectMgr"),
			c = t("./GameObject"),
			d = t("./UserData"),
			l = t("./AssassinData"),
			u = cc._decorator,
			h = u.ccclass,
			p = u.property,
			f = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.camera = null, e.tiledMap = null, e.floor = null, e.wall = null, e.box = null, e.playerLayer = null, e.stageLabel = null, e.guardNumLabel = null, e.stageNode = null, e.propNode = null, e.startLayer = null, e.maskNode = null, e.path_1_pre = null, e.path_2_pre = null, e.path_3_pre = null, e.path_4_pre = null, e.path_5_pre = null, e.path_6_pre = null, e.path_8_pre = null, e.targetIcon = null, e.targetIconRes = [], e._cameraMoveInfo = {}, e._canMoveTiles = [], e._canLayBomb = [], e._layerNames = [], e._walkNode = null, e._mapMoveArr = [], e._isCameraMove = !1, e._guideIndex = 0, e._finger = null, e._elementVec = [], e
				}
				return n(e, t), e.prototype.onLoad = function () {
					var t = cc.sys.language;
					t == cc.sys.LANGUAGE_CHINESE ? a.default.Config.language = a.default.Config.LanguageCfg.CH : t == cc.sys.LANGUAGE_PORTUGUESE ? a.default.Config.language = a.default.Config.LanguageCfg.PT : a.default.Config.language = a.default.Config.LanguageCfg.EN, s.default.instance.createObjectPool(), d.default.init()
				}, e.prototype.start = function () {
					this.addEvts(), this.preloadPrefabs(), a.default.Net.getSwitch(), this.scheduleOnce(function () {
						a.default.gameLoadResult()
					}, .3)
				}, e.prototype.initTargetIcon = function () {
					var t = null,
						e = 1;
					switch (s.default.instance.FightType) {
						case c.FightType.NormalMode:
							this.targetIconRes.length > 0 && (t = this.targetIconRes[0]);
							break;
						case c.FightType.BombMode:
							this.targetIconRes.length > 1 && (t = this.targetIconRes[1]);
							break;
						case c.FightType.ArkMode:
							this.targetIconRes.length > 2 && (t = this.targetIconRes[2], e = .75)
					}
					t && (this.targetIcon.spriteFrame = t, this.targetIcon.node.scale = e)
				}, e.prototype.loadPrefab = function (t, e) {
					var o = this;
					if (0 != t.length) {
						var n = t.shift();
						a.default.PrefabManager.loadPrefab(n, function () {
							t.length > 0 ? o.loadPrefab(t, e) : e && e()
						})
					}
				}, e.prototype.preloadPrefabs = function () {
					var t = ["prefab/findNode", "prefab/warnNode", "prefab/preGetDiamondNode", "prefab/diamondNode", "prefab/helpLayer", "prefab/Ark", "prefab/Bomb", "prefab/arrow", "prefab/path_1", "prefab/path_2", "prefab/path_3", "prefab/path_4", "prefab/path_5", "prefab/path_6"],
						e = s.default.instance.getLevel();
					if (e < 50) {
						var o = "tiles/map" + e;
						t.push(o)
					}
					this.loadPrefab(t, function () { })
				}, e.prototype.addEvts = function () {
					var t = this;
					cc.director.on(r.default.GUARD_DEATH, function (e) {
						e.getUserData();
						t.freshGuardsNum()
					}, this), cc.director.on(r.default.BLOCK_COLLECT, function (e) {
						t.freshArksNum(), t.freshBombsNum()
					}, this), cc.director.on(r.default.SHOW_PREADDDIAMOND, function (e) {
						t.showPreAddDiamond(e.getUserData())
					}, this), cc.director.on(r.default.OPEN_GAME_RESULT, function (e) {
						t.openResultLayer(e.getUserData()), t.removeListener()
					}, this), cc.director.on(r.default.OPEN_GAME_RELIFE, function (e) {
						t.openRelifeLayer(), t.removeListener()
					}, this), cc.director.on(r.default.OPEN_GAME_PAUSE, function (e) {
						t.openGamePauseLayer(), t.GamePause()
					}, this), cc.director.on(r.default.GAME_RESUME, function (e) {
						t.GameResume()
					}, this), cc.director.on(r.default.OPEN_ASSASSIN_SHOP, function (e) {
						t.openAssassinShopLayer(e.getUserData())
					}, this), cc.director.on(r.default.OPEN_ASSASSIN_TRY, function (e) {
						t.openAssassinTryLayer()
					}, this), cc.director.on(r.default.GAME_RELIFE, function (e) {
						t.GameRelife()
					}, this), cc.director.on(r.default.GAME_RESET, function (e) {
						t.GameReset()
					}, this), cc.director.on(r.default.GAME_NEXT, function (e) {
						t.GameNext()
					}, this), cc.director.on(r.default.GAME_START, function (e) {
						t.GameStart()
					}, this), cc.director.on(r.default.OPEN_START_LAYER, function (e) {
						t.ShowStartLayer()
					}, this), cc.director.on(r.default.ASSASSIN_MOVE, function (e) {
						var o = e.getUserData();
						t.drawWalkPath(o)
					}, this), cc.director.on(r.default.CAMERA_MOVE, function (e) {
						var o = e.getUserData();
						t.moveCamera(o.to, o.t)
					}, this), cc.director.on(r.default.CLEAR_PATH, function (e) {
						var o = e.getUserData();
						t.clearWalkPath(o)
					}, this), cc.director.on(r.default.OPEN_HELP_FRAME, function (e) {
						t.openHelpFrame()
					}, this), cc.director.on(r.default.GET_PROP, function (e) {
						t.getProp(e.getUserData())
					}, this), cc.director.on(r.default.REMOVE_PROP, function (e) {
						t.freshPropPos(e.getUserData())
					}, this), cc.director.on(r.default.OPEN_RANDOMDRAW_LAYER, function (e) {
						t.openRandomDrawLayer()
					}, this), cc.director.on(r.default.OPEN_UNLOCKMODELAYER, function (e) {
						t.openUnLockModeLayer(e.getUserData())
					}, this)
				}, e.prototype.onDestroy = function () {
					cc.director.targetOff(this)
				}, e.prototype.initMap = function (t) {
					var e = this;
					void 0 === t && (t = !1), this._elementVec = [];
					var o = s.default.instance.getLevel(),
						n = o;
					t ? o > 50 && (n = s.default.instance.RandomMap) : o > 50 && (n = a.default.Util.random(1, 50), s.default.instance.RandomMap = n), cc.loader.loadRes("tiles/map" + n, function (o, n) {
						if (o) cc.error(o);
						else {
							var i = s.default.instance.FightType;
							e.tiledMap.tmxAsset = n, e.wall = e.tiledMap.getLayer("wall"), e.box = e.tiledMap.getLayer("box"), e.floor = e.tiledMap.getLayer("floor"), e.playerLayer = e.tiledMap.getLayer("player"), e.initGameraZone(), e.initCanMoveTiles(), e.resetGamera(), s.default.instance.assassin || e.initAssassin(), t || (i == c.FightType.ArkMode ? e.initArks(s.default.instance.getArksNumber()) : i == c.FightType.BombMode ? e.initBombs(s.default.instance.getBombsNumber()) : c.FightType.ExtricateMode, e.initProps(), e.initGuard(s.default.instance.getGuardsNumber())), e.initWalkNode(), e.createDiamondEffect(), e.addListener(), e.stageNode.active = !0, e.initTargetIcon(), s.default.instance.GameStart = !0, e.scheduleOnce(function () {
								a.default.startRecord()
							}, 1)
						}
					})
				}, e.prototype.freshGuardsNum = function () {
					s.default.instance.FightType === c.FightType.NormalMode && (this.guardNumLabel.string = s.default.instance.getKillGuardsNumber() + "/" + s.default.instance.getGuardsNumber(), this.guardNumLabel.node.active || (this.guardNumLabel.node.active = !0, this.guardNumLabel.node.runAction(cc.fadeIn(.2))))
				}, e.prototype.freshArksNum = function () {
					s.default.instance.FightType === c.FightType.ArkMode && (this.guardNumLabel.string = s.default.instance.getCollectArksNumber() + "/" + s.default.instance.getArksNumber(), this.guardNumLabel.node.active || (this.guardNumLabel.node.active = !0, this.guardNumLabel.node.runAction(cc.fadeIn(.2))))
				}, e.prototype.freshBombsNum = function () {
					s.default.instance.FightType === c.FightType.BombMode && (this.guardNumLabel.string = s.default.instance.getCollectBombsNumber() + "/" + s.default.instance.getBombsNumber(), this.guardNumLabel.node.active || (this.guardNumLabel.node.active = !0, this.guardNumLabel.node.runAction(cc.fadeIn(.2))))
				}, e.prototype.onPauseClick = function () {
					cc.isValid(s.default.instance.assassin) && (this.openGamePauseLayer(), this.GamePause(), a.default.Audio.playEffect("click.mp3"))
				}, e.prototype.GameRelife = function () {
					d.default.getRelifeNumber() > 1 && (s.default.instance.TryAssassinId = -1), this.initMap(!0)
				}, e.prototype.GameReset = function () {
					d.default.PreGetDiamond = 0, this.GameStart()
				}, e.prototype.GamePause = function () {
					this.removeListener()
				}, e.prototype.GameResume = function () {
					this.addListener()
				}, e.prototype.GameNext = function () {
					s.default.instance.removeAssassin(), s.default.instance.removeGuards(), s.default.instance.removeBlocks(), s.default.instance.removeProps(), this.propNode.removeAllChildren(), this.initMap()
				}, e.prototype.GameStart = function () {
					this.initMapLayer(), this.tiledMap.node.active = !0;
					var t = s.default.instance.FightType;
					if (s.default.instance.FightType !== c.FightType.NormalMode) {
						var e = s.default.instance.getLevel(),
							o = "StartArkMode";
						if (t === c.FightType.BombMode && (o = "StartBombMode"), 1 == e && a.default.reportAnalytics(r.default.ReportEvt[o + e]), e <= 2) return void this.openHelpFrame()
					}
					if (s.default.instance.getLevel() > 2 && d.default.isCanTryAssassin()) {
						var n = l.default.getTryUseAssassin();
						if (n > 0) {
							var i = l.default.getAssassinData(n);
							return void this.openAssassinTryLayer(function (t) {
								t && t.getComponent("TryuseAssassinLayer").setData(i)
							})
						}
					}
					s.default.instance.TryAssassinId = -1, this.initMap()
				}, e.prototype.initMapLayer = function () {
					s.default.instance.removeAssassin(), s.default.instance.removeGuards(), s.default.instance.removeBlocks(), s.default.instance.removeProps(), this.propNode.removeAllChildren(), this.resetGamera(), this.stageNode.active = !1, this.guardNumLabel.node.active = !1
				}, e.prototype.ShowStartLayer = function () {
					var t = this;
					this.initMapLayer(), this.startLayer.active = !0, this.startLayer.getComponent("StartLayer").updateInfo(), this.startLayer.opacity = 0, this.startLayer.runAction(cc.fadeIn(.2)), this.tiledMap.node.active = !1, this.scheduleOnce(function () {
						t.tiledMap.node.active = !0
					}, .2)
				}, e.prototype.showPreAddDiamond = function (t) {
					a.default.PrefabManager.loadPrefab("prefab/preGetDiamondNode", function (e) {
						var o = s.default.instance.assassin;
						if (o) {
							var n = cc.instantiate(e);
							n.position = o.position, n.zIndex = o.zIndex + 1, n.parent = o.parent, n.getComponent("PreGetDiamondNode").setAddDiamondCnt(t)
						}
					})
				}, e.prototype.addListener = function () {
					this.tiledMap.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
				}, e.prototype.removeListener = function () {
					this.tiledMap.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
				}, e.prototype.onTouchEnd = function (t) {
					if (s.default.instance.GameStart) {
						var e = s.default.instance.assassin;
						if (e && !e.getComponent("Assassin").isTiming) {
							var o = this.tiledMap.getTileSize(),
								n = this.tiledMap.getMapSize(),
								i = t.getLocation(),
								a = cc.v2();
							a.x = i.x - cc.winSize.width / 2 - this.tiledMap.node.x + o.width * n.width / 2, a.y = i.y - cc.winSize.height / 2 - this.tiledMap.node.y + o.height * n.height / 2;
							var r = s.default.instance.point2Coord(a);
							if (0 === this._mapData[r.x][r.y]) {
								e.getComponent("Assassin").setStatus(c.ObjectStatus.NormalMove), s.default.instance.setAutoFollowGuard(null), s.default.instance.setAutoFollowCoord(null);
								var d = s.default.instance.guards;
								for (var l in d) {
									var u = d[l];
									if (u && !u.getComponent("Guard").InVisible) {
										var h = u.getComponent("Guard").getCoord(),
											p = u.position,
											f = u.getContentSize();
										if (cc.rect(p.x + o.width * n.width / 2 - f.width / 2, p.y + o.height * n.height / 2 - f.height / 2, f.width, f.height).contains(a)) {
											u.getComponent("Guard").addTargetIcon(), s.default.instance.setAutoFollowGuard(u), s.default.instance.setAutoFollowCoord(h);
											break
										}
									}
								}
								if (!s.default.instance.followCoord) {
									var g = s.default.instance.customBlocks;
									for (var l in g) {
										var y = g[l];
										if (y) {
											var m = y.position;
											f = y.getContentSize();
											if (cc.rect(m.x + o.width * n.width / 2 - f.width / 2, m.y + o.height * n.height / 2 - f.height / 2, f.width, f.height).contains(a)) {
												s.default.instance.getBlockType(l) === c.ObjectType.BlockBomb ? y.getComponent("Bomb").addTargetIcon() : y.getComponent("Ark").addTargetIcon();
												break
											}
										}
									}
								}
								if (!s.default.instance.followCoord) {
									var v = s.default.instance.props;
									for (var l in v) {
										var _ = v[l];
										if (_) {
											var w = _.position;
											f = _.getContentSize();
											if (cc.rect(w.x + o.width * n.width / 2 - f.width / 2, w.y + o.height * n.height / 2 - f.height / 2, f.width, f.height).contains(a)) {
												_.getComponent("Prop").addTargetIcon();
												break
											}
										}
									}
								}
								if (s.default.instance.followCoord) a = s.default.instance.coord2Point(s.default.instance.followCoord), this.removeFinger(), this.checkAddFinger();
								else if (cc.isValid(this._finger)) {
									var b = this._finger.position.add(cc.v2(o.width * n.width / 2, o.height * n.height / 2)),
										S = s.default.instance.point2Coord(b);
									S && S.equals(r) && (this.removeFinger(), this.checkAddFinger())
								}
								var T = e.getComponent("Assassin").getClosestPath(a);
								e.getComponent("Assassin").move(T)
							}
						}
					}
				}, e.prototype.initGameraZone = function () {
					var t = this.tiledMap.getTileSize(),
						e = this.tiledMap.getMapSize(),
						o = cc.winSize,
						n = t.width * e.width,
						i = t.height * e.height;
					this._cameraMoveInfo.left = -n / 2 + t.width / 2 + o.width / 2, this._cameraMoveInfo.right = -this._cameraMoveInfo.left, this._cameraMoveInfo.bottom = -i / 2 + t.height / 2 + o.height / 2, this._cameraMoveInfo.up = -this._cameraMoveInfo.bottom, s.default.instance.tileSize = t, s.default.instance.mapSize = e, this.maskNode.width = n, this.maskNode.height = i
				}, e.prototype.initStaticUIPos = function () {
					var t = s.default.instance.assassin;
					if (cc.isValid(t)) {
						var e = this.getCameraEndPosition(t.position);
						this._stageLabelOriginPos || (this._stageLabelOriginPos = this.stageLabel.node.position), this.stageLabel.node.position = this._stageLabelOriginPos.add(cc.v2(e.x, e.y))
					}
				}, e.prototype.getCameraEndPosition = function (t) {
					var e = cc.v2();
					return t.x < this._cameraMoveInfo.left ? e.x = this._cameraMoveInfo.left : t.x > this._cameraMoveInfo.right ? e.x = this._cameraMoveInfo.right : e.x = t.x, t.y < this._cameraMoveInfo.bottom ? e.y = this._cameraMoveInfo.bottom : t.y > this._cameraMoveInfo.up ? e.y = this._cameraMoveInfo.up : e.y = t.y, e
				}, e.prototype.setCameraPos = function (t) {
					var e = s.default.instance.assassin;
					if (!t && cc.isValid(e) && (t = e.position), t) {
						var o = this.getCameraEndPosition(t);
						this.tiledMap.node.position = cc.v2(-o.x, -o.y)
					}
				}, e.prototype.resetGamera = function () {
					var t = this.tiledMap.getTileSize(),
						e = this.tiledMap.getMapSize();
					this._mapMoveArr = [], this._isCameraMove = !1, this.tiledMap.node.stopAllActions();
					var o = this.checkEnterPosition();
					o && (o.x = o.x - t.width * e.width / 2, o.y = o.y - t.height * e.height / 2, this.setCameraPos(o))
				}, e.prototype.moveCamera = function (t, e) {
					this._mapMoveArr.push({
						to: t,
						t: e
					}), this.move()
				}, e.prototype.move = function () {
					var t = this;
					if (!this._isCameraMove && 0 != this._mapMoveArr.length) {
						var e = this._mapMoveArr.shift(),
							o = this.getCameraEndPosition(e.to);
						this._isCameraMove = !0, this.tiledMap.node.runAction(cc.sequence(cc.moveTo(e.t, cc.v2(-o.x, -o.y)), cc.callFunc(function () {
							t._isCameraMove = !1, t.move()
						})))
					}
				}, e.prototype.initCanMoveTiles = function () {
					this.tiledMap.getTileSize();
					var t = this.tiledMap.getMapSize(),
						e = s.default.instance.FightType;
					this._canMoveTiles = [], this._canLayBomb = [], this._mapData = new Array(t.width);
					for (var o = 0; o < t.width; o++) this._mapData[o] = new Array(t.height);
					for (o = 0; o < t.width; o++)
						for (var n = 0; n < t.height; n++) {
							var i = this.wall.getTileGIDAt(o, n),
								a = this.box.getTileGIDAt(o, n);
							if (i || a) this._mapData[o][n] = a ? 1 : 2;
							else if (this._canMoveTiles.push(s.default.instance.coord2Point(cc.v2(o, n))), this._mapData[o][n] = 0, e === c.FightType.BombMode) {
								if (n + 1 < t.height && 0 === this.wall.getTileGIDAt(o, n + 1) && 0 === this.box.getTileGIDAt(o, n + 1)) {
									var r = {
										pos: s.default.instance.coord2Point(cc.v2(o, n + .5)),
										d: "v"
									};
									this._canLayBomb.push(r)
								}
								if (o + 1 < t.width && 0 === this.wall.getTileGIDAt(o + 1, n) && 0 === this.box.getTileGIDAt(o + 1, n)) {
									r = {
										pos: s.default.instance.coord2Point(cc.v2(o + .5, n)),
										d: "h"
									};
									this._canLayBomb.push(r)
								}
							}
						}
				}, e.prototype.initAssassin = function () {
					var t = this,
						e = this.tiledMap.getTileSize(),
						o = this.tiledMap.getMapSize();
					a.default.PrefabManager.loadPrefab("prefab/assassin", function (n) {
						var i = cc.instantiate(n),
							a = t.checkEnterPosition(!0);
						i.x = a.x - e.width * o.width / 2, i.y = a.y - e.height * o.height / 2, i.zIndex = 3, i.parent = t.playerLayer.node, i.getComponent("Assassin").setCameraMoveInfo(t._cameraMoveInfo), i.getComponent("Assassin").setTmxData(t._mapData), i.getComponent("Assassin").setCanMoveTilesPosition(t._canMoveTiles);
						var r = d.default.CurAssassin;
						s.default.instance.TryAssassinId > 0 && (r = s.default.instance.TryAssassinId), i.getComponent("Assassin").setActor(r), s.default.instance.setAssassin(i)
					})
				}, e.prototype.checkEnterPosition = function (t) {
					void 0 === t && (t = !1);
					var e = this.tiledMap.getMapSize();
					if (s.default.instance.assassin && !t) {
						var o = s.default.instance.assassin.getComponent("Assassin").getCoord();
						if (o) return s.default.instance.coord2Point(o)
					}
					if (!this.wall) return null;
					for (var n = 0; n < e.width; n++) {
						if (0 === this.wall.getTileGIDAt(n, e.height - 1)) return s.default.instance.coord2Point(cc.v2(n, e.height - 2))
					}
					return null
				}, e.prototype.initGuard = function (t) {
					var e = this;
					void 0 === t && (t = 3);
					var o = this.tiledMap.getTileSize(),
						n = this.tiledMap.getMapSize(),
						i = this.randomLayGuardPosition(t, 2, !0);
					a.default.PrefabManager.loadPrefab("prefab/guard", function (a) {
						for (var r = 0; r < t; r++) {
							var c = cc.instantiate(a),
								d = i[r];
							d && (c.x = d.x - o.width * n.width / 2, c.y = d.y - o.height * n.height / 2, c.zIndex = 1, c.parent = e.playerLayer.node, c.getComponent("Guard").setCameraMoveInfo(e._cameraMoveInfo), c.getComponent("Guard").setTmxData(e._mapData), c.getComponent("Guard").setCanMoveTilesPosition(e._canMoveTiles), s.default.instance.pushGuards(c))
						}
						e.freshGuardsNum(), e.checkAddFinger()
					})
				}, e.prototype.checkAddFinger = function () {
					if (!(this._guideIndex >= 2) && s.default.instance.FightType === c.FightType.NormalMode && 1 === s.default.instance.getLevel()) {
						var t = this.tiledMap.getTileSize(),
							e = this.tiledMap.getMapSize(),
							o = null,
							n = s.default.instance.guards;
						for (var i in n)
							if (cc.isValid(n[i])) {
								o = n[i];
								break
							} if (0 === this._guideIndex) {
								var a = o.getComponent("Guard").getCoord(),
									r = s.default.instance.coord2Point(a),
									d = s.default.instance.assassin.getComponent("Assassin").getClosestPath(r),
									l = Math.floor(d.length / 2);
								l < d.length && ((r = s.default.instance.coord2Point(d[l])).x -= t.width * e.width / 2, r.y -= t.height * e.height / 2, this.addFinger(null, r))
							} else this.addFinger(o)
					}
				}, e.prototype.addFinger = function (t, e) {
					var o = this;
					this.removeFinger(), a.default.PrefabManager.loadPrefab("prefab/finger", function (n) {
						var i = cc.instantiate(n);
						i.parent = t || o.playerLayer.node, i.zIndex = 5, t ? i.scale = 2 : i.position = e, o._guideIndex++, o._finger = i
					})
				}, e.prototype.removeFinger = function () {
					cc.isValid(this._finger) && this._finger.destroy()
				}, e.prototype.initArks = function (t) {
					var e = this;
					void 0 === t && (t = 3);
					var o = this.tiledMap.getTileSize(),
						n = this.tiledMap.getMapSize(),
						i = this.randomLayGuardPosition(t, 4);
					a.default.PrefabManager.loadPrefab("prefab/Ark", function (a) {
						for (var r = 0; r < t; r++) {
							var d = cc.instantiate(a),
								l = i[r];
							l && (d.x = l.x - o.width * n.width / 2, d.y = l.y - o.height * n.height / 2, d.parent = e.playerLayer.node, s.default.instance.pushBlocks(d, c.ObjectType.BlockArk), e.initArrow(d, c.ObjectType.BlockArk)), e._elementVec.push(l)
						}
						e.freshArksNum()
					})
				}, e.prototype.initBombs = function (t) {
					var e = this;
					void 0 === t && (t = 3);
					var o = this.tiledMap.getTileSize(),
						n = this.tiledMap.getMapSize(),
						i = this.randomLayBombPosition(t),
						r = s.default.instance.getBombsTimes();
					a.default.PrefabManager.loadPrefab("prefab/Bomb", function (a) {
						for (var d = 0; d < t; d++) {
							var l = cc.instantiate(a),
								u = i[d].pos,
								h = i[d].d;
							if (u) {
								l.x = u.x - o.width * n.width / 2, l.y = u.y - o.height * n.height / 2, l.parent = e.playerLayer.node;
								var p = 300;
								if (d < r.length && (p = r[d]), l.getComponent("Bomb").setBombTime(p), s.default.instance.pushBlocks(l, c.ObjectType.BlockBomb), e.initArrow(l, c.ObjectType.BlockBomb), "v" === h) {
									var f = 90;
									l.x < 0 && (f = -90), l.rotation = f, e._elementVec.push(u.add(cc.v2(0, o.height / 2))), e._elementVec.push(u.add(cc.v2(0, -o.height / 2)))
								} else e._elementVec.push(u.add(cc.v2(o.width / 2, 0))), e._elementVec.push(u.add(cc.v2(-o.width / 2, 0)))
							}
						}
						e.freshBombsNum()
					})
				}, e.prototype.initProps = function () {
					var t = this,
						e = s.default.instance.getPropsNumber(c.PropType.timing),
						o = s.default.instance.getPropsNumber(c.PropType.invisible);
					if (e || o) {
						var n = this.tiledMap.getTileSize(),
							i = this.tiledMap.getMapSize(),
							r = e + o,
							d = this.randomLayGuardPosition(r, 5);
						a.default.PrefabManager.loadPrefab("prefab/Prop", function (o) {
							for (var a = 0; a < r; a++) {
								var l = cc.instantiate(o),
									u = d[a];
								if (u) {
									l.x = u.x - n.width * i.width / 2, l.y = u.y - n.height * i.height / 2, l.parent = t.playerLayer.node, s.default.instance.pushProps(l);
									var h = c.PropType.timing;
									a >= e && (h = c.PropType.invisible), l.getComponent("Prop").PropType = h
								}
								t._elementVec.push(u)
							}
						})
					}
				}, e.prototype.initArrow = function (t, e) {
					var o = this;
					a.default.PrefabManager.loadPrefab("prefab/arrow", function (n) {
						var i = cc.instantiate(n);
						i.getComponent("Arrow").setTarget(t, e), i.getComponent("Arrow").setTileMap(o.tiledMap), i.parent = o.node
					})
				}, e.prototype.randomLayGuardPosition = function (t, e, o) {
					var n = this;
					void 0 === t && (t = 1), void 0 === e && (e = 2), void 0 === o && (o = !0);
					var i = this.tiledMap.getTileSize(),
						r = this.tiledMap.getMapSize(),
						s = 250,
						c = [];
					a.default.Util.shuffle(this._canMoveTiles);
					var d = function () {
						for (var a = 0; a < n._canMoveTiles.length; a++) {
							var l = n._canMoveTiles[a];
							if (l.y >= i.height * r.height / e) {
								var u = !0;
								if (o) {
									for (var h = 0; h < c.length; h++)
										if (c[h].sub(l).mag() < s) {
											u = !1;
											break
										} for (h = 0; h < n._elementVec.length; h++)
										if (n._elementVec[h].sub(l).mag() < s) {
											u = !1;
											break
										}
								}
								if (u && (c.push(l), c.length >= t)) break
							}
						}
						c.length < t && s > 0 && (s -= 50, d())
					};
					return d(), c
				}, e.prototype.randomLayBombPosition = function (t, e) {
					void 0 === t && (t = 1), void 0 === e && (e = 5);
					var o = this.tiledMap.getTileSize(),
						n = this.tiledMap.getMapSize(),
						i = [];
					a.default.Util.shuffle(this._canLayBomb);
					for (var r = 0; r < this._canLayBomb.length; r++) {
						var s = this._canLayBomb[r].pos;
						if (s.y >= o.height * n.height / e) {
							for (var c = !0, d = 0; d < i.length; d++)
								if (i[d].pos.sub(s).mag() < 500) {
									c = !1;
									break
								} for (d = 0; d < this._elementVec.length; d++)
								if (this._elementVec[d].sub(s).mag() < 500) {
									c = !1;
									break
								} if (c && (i.push(this._canLayBomb[r]), i.length >= t)) break
						}
					}
					return i
				}, e.prototype.initWalkNode = function () {
					var t = this;
					this._walkNode && cc.isValid(this._walkNode) ? this._walkNode.removeAllChildren() : a.default.PrefabManager.loadPrefab("prefab/walkNode", function (e) {
						t._walkNode = cc.instantiate(e), t._walkNode.x = 0, t._walkNode.y = 0, t._walkNode.zIndex = 2, t._walkNode.parent = t.playerLayer.node
					})
				}, e.prototype.drawWalkPath = function (t) {
					if (this.initWalkNode(), this._walkNode && t && !(t.length <= 1))
						for (var e = s.default.instance.tileSize, o = this.tiledMap.getMapSize(), n = null, i = null, a = null, r = null, c = new Array(t.length), d = 0; d < t.length; d++) {
							n = null, i = null, null, c[d] = {}, a = null, r = null, i = s.default.instance.coord2Point(cc.v2(t[d].x, t[d].y)), d - 1 >= 0 && (n = s.default.instance.coord2Point(cc.v2(t[d - 1].x, t[d - 1].y)), r = i.sub(n)), d + 1 < t.length && (a = s.default.instance.coord2Point(cc.v2(t[d + 1].x, t[d + 1].y)).sub(i));
							var l = null,
								u = 1,
								h = 1,
								p = 0,
								f = i;
							if (a) 0 == a.x && a.y > 0 ? r ? 0 == r.x && r.y > 0 ? (l = this.path_1_pre, f = i, c[d].start = "bottom", c[d].end = "up") : 0 == r.y && r.x > 0 ? (l = this.path_2_pre, u = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "left", c[d].end = "up") : 0 == r.y && r.x < 0 ? (l = this.path_2_pre, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "right", c[d].end = "up") : r.y > 0 && r.x > 0 ? "right" === c[d - 1].end ? (l = this.path_3_pre, p = 90, f = i.add(cc.v2(0, e.height / 2)), c[d].start = "left", c[d].end = "up") : "up" === c[d - 1].end ? (l = this.path_8_pre, p = 90, f = i.add(cc.v2(0, e.height / 2)), c[d].start = "bottom", c[d].end = "up") : (console.error("path: ", t), console.error("i", d)) : r.y > 0 && r.x < 0 && ("left" === c[d - 1].end ? (l = this.path_3_pre, h = -1, p = 90, f = i.add(cc.v2(0, e.height / 2)), c[d].start = "right", c[d].end = "up") : "up" === c[d - 1].end ? (l = this.path_8_pre, p = 90, h = -1, f = i.add(cc.v2(0, e.height / 2)), c[d].start = "bottom", c[d].end = "up") : (console.error("path: ", t), console.error("i", d))) : (l = this.path_1_pre, c[d].start = "bottom", c[d].end = "up") : 0 == a.x && a.y < 0 ? r ? 0 == r.x && r.y < 0 ? (l = this.path_1_pre, f = i, c[d].start = "up", c[d].end = "bottom") : 0 == r.y && r.x > 0 ? (l = this.path_2_pre, u = -1, h = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "left", c[d].end = "bottom") : 0 == r.y && r.x < 0 ? (l = this.path_2_pre, h = -1, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "right", c[d].end = "bottom") : r.y < 0 && r.x > 0 ? "right" === c[d - 1].end ? (l = this.path_3_pre, u = -1, p = 90, f = i.sub(cc.v2(0, e.height / 2)), c[d].start = "left", c[d].end = "bottom") : "bottom" === c[d - 1].end ? (l = this.path_8_pre, p = 90, u = -1, f = i.sub(cc.v2(0, e.height / 2)), c[d].start = "up", c[d].end = "bottom") : (console.error("path: ", t), console.error("i", d)) : r.y < 0 && r.x < 0 && ("left" === c[d - 1].end ? (l = this.path_3_pre, u = -1, h = -1, p = 90, f = i.sub(cc.v2(0, e.height / 2)), c[d].start = "right", c[d].end = "bottom") : "bottom" === c[d - 1].end ? (l = this.path_8_pre, u = -1, h = -1, p = 90, f = i.sub(cc.v2(0, e.height / 2)), c[d].start = "up", c[d].end = "bottom") : (console.error("path: ", t), console.error("i", d))) : (l = this.path_1_pre, c[d].start = "up", c[d].end = "bottom") : a.x > 0 && 0 == a.y ? r ? 0 == r.x && r.y < 0 ? (l = this.path_2_pre, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "up", c[d].end = "right") : 0 == r.y && r.x > 0 ? (l = this.path_1_pre, p = 90, f = i, c[d].start = "left", c[d].end = "right") : r.y < 0 && r.x > 0 ? "bottom" === c[d - 1].end ? (l = this.path_3_pre, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "up", c[d].end = "right") : "right" === c[d - 1].end ? (l = this.path_8_pre, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "left", c[d].end = "right") : (console.error("path: ", t), console.error("i", d)) : r.y > 0 && r.x > 0 ? "up" === c[d - 1].end ? (l = this.path_3_pre, h = -1, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "bottom", c[d].end = "right") : "right" === c[d - 1].end ? (l = this.path_8_pre, h = -1, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "left", c[d].end = "right") : (console.error("path: ", t), console.error("i", d)) : r.y > 0 && 0 == r.x && (l = this.path_2_pre, h = -1, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "bottom", c[d].end = "right") : (l = this.path_1_pre, p = 90, c[d].start = "left", c[d].end = "right") : a.x > 0 && a.y > 0 ? r ? r.x > 0 && r.y < 0 ? (l = this.path_5_pre, c[d].start = "up", c[d].end = "up", console.error("v.x > 0 && v.y > 0 => v0.x > 0 && v0.y < 0")) : 0 == r.y && r.x > 0 ? (l = this.path_3_pre, u = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "left", c[d].end = "up") : r.y > 0 && r.x > 0 ? "up" === c[d - 1].end ? (l = this.path_6_pre, h = -1, c[d].start = "bottom", c[d].end = "up") : "right" === c[d - 1].end && (l = this.path_6_pre, p = 90, c[d].start = "left", c[d].end = "right") : r.y > 0 && 0 == r.x ? (l = this.path_3_pre, u = -1, h = -1, p = 90, f = i.sub(cc.v2(0, e.height / 2)), c[d].start = "bottom", c[d].end = "right") : r.y > 0 && r.x < 0 && (l = this.path_5_pre, p = -90, f = i, c[d].start = "right", c[d].end = "right", console.error("v.x > 0 && v.y > 0 => v0.y > 0 && v0.x < 0")) : (l = this.path_2_pre, u = -1, f = i, c[d].start = "left", c[d].end = "up") : a.x > 0 && a.y < 0 ? r ? 0 == r.x && r.y < 0 ? (l = this.path_3_pre, h = -1, p = 90, f = i.add(cc.v2(0, e.height / 2)), c[d].start = "up", c[d].end = "right") : r.y < 0 && r.x < 0 ? (l = this.path_5_pre, p = -90, f = i, c[d].start = "right", c[d].end = "right", console.error("v.x > 0 && v.y < 0 => v0.y < 0 && v0.x < 0")) : r.x > 0 && r.y < 0 ? "right" === c[d - 1].end ? (l = this.path_6_pre, u = -1, p = 90, c[d].start = "left", c[d].end = "right") : "bottom" === c[d - 1].end && (l = this.path_6_pre, c[d].start = "up", c[d].end = "bottom") : r.x > 0 && 0 == r.y ? (l = this.path_3_pre, u = -1, h = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "left", c[d].end = "bottom") : r.y > 0 && r.x > 0 && (l = this.path_5_pre, h = -1, f = i, c[d].start = "bottom", c[d].end = "bottom", console.error("v.x > 0 && v.y < 0 => v0.y > 0 && v0.x > 0")) : (l = this.path_2_pre, u = -1, h = -1, f = i, c[d].start = "left", c[d].end = "bottom") : a.x < 0 && 0 == a.y ? r ? 0 == r.x && r.y < 0 ? (l = this.path_2_pre, u = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "up", c[d].end = "left") : r.y < 0 && r.x < 0 ? "bottom" === c[d - 1].end ? (l = this.path_3_pre, u = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "up", c[d].end = "left") : "left" === c[d - 1].end && (l = this.path_8_pre, u = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "right", c[d].end = "left") : r.x < 0 && 0 == r.y ? (l = this.path_1_pre, p = 90, c[d].start = "right", c[d].end = "left") : r.x < 0 && r.y > 0 ? "up" === c[d - 1].end ? (l = this.path_3_pre, u = -1, h = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "bottom", c[d].end = "left") : "left" === c[d - 1].end && (l = this.path_8_pre, u = -1, h = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "right", c[d].end = "left") : r.y > 0 && 0 == r.x && (l = this.path_2_pre, u = -1, h = -1, f = i.sub(cc.v2(e.width / 2, 0)), c[d].start = "bottom", c[d].end = "left") : (l = this.path_1_pre, p = 90, f = i, c[d].start = "right", c[d].end = "left") : a.x < 0 && a.y > 0 ? r ? 0 == r.x && r.y > 0 ? (l = this.path_3_pre, u = -1, p = 90, f = i.sub(cc.v2(0, e.height / 2)), c[d].start = "bottom", c[d].end = "left") : r.y < 0 && r.x < 0 ? (l = this.path_5_pre, f = i, c[d].start = "up", c[d].end = "up", console.error("v.x < 0 && v.y > 0 => v0.y < 0 && v0.x < 0")) : r.x < 0 && r.y > 0 ? "left" === c[d - 1].end ? (l = this.path_6_pre, u = -1, p = 90, c[d].start = "right", c[d].end = "left") : "up" === c[d - 1].end && (l = this.path_6_pre, c[d].start = "bottom", c[d].end = "up") : r.x < 0 && 0 == r.y ? (l = this.path_3_pre, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "right", c[d].end = "up") : r.y > 0 && r.x > 0 && (l = this.path_5_pre, p = 90, f = i, c[d].start = "left", c[d].end = "left", console.error("v.x < 0 && v.y > 0 => v0.y > 0 && v0.x > 0")) : (l = this.path_2_pre, u = -1, h = -1, f = i, c[d].start = "bottom", c[d].end = "left") : a.x < 0 && a.y < 0 && (r ? r.x > 0 && r.y < 0 ? (l = this.path_5_pre, p = 90, c[d].start = "left", c[d].end = "left", console.error("v.x < 0 && v.y < 0 => v0.x > 0 && v0.y < 0")) : 0 == r.x && r.y < 0 ? (l = this.path_3_pre, u = -1, h = -1, p = -90, f = i.add(cc.v2(0, e.height / 2)), c[d].start = "up", c[d].end = "left") : r.y < 0 && r.x < 0 ? "left" === c[d - 1].end ? (l = this.path_6_pre, p = 90, c[d].start = "right", c[d].end = "left") : "bottom" === c[d - 1].end && (l = this.path_6_pre, u = -1, c[d].start = "up", c[d].end = "bottom") : 0 == r.y && r.x < 0 ? (l = this.path_3_pre, h = -1, f = i.add(cc.v2(e.width / 2, 0)), c[d].start = "right", c[d].end = "bottom") : r.y > 0 && r.x < 0 && (l = this.path_5_pre, h = -1, f = i, c[d].start = "bottom", c[d].end = "bottom", console.error("v.x < 0 && v.y < 0 => v0.y > 0 && v0.x < 0")) : (l = this.path_2_pre, h = -1, f = i, c[d].start = "right", c[d].end = "bottom"));
							else {
								if (!r) return void console.error("v0 is error: ", r);
								l = this.path_4_pre, 0 == r.x && r.y > 0 ? f = i.sub(cc.v2(0, e.height / 2 + 10)) : 0 == r.x && r.y < 0 ? (h = -1, f = i.add(cc.v2(0, e.height / 2 + 10))) : r.x > 0 && 0 == r.y ? (p = -90, f = i.sub(cc.v2(e.width / 2 + 10, 0))) : r.x > 0 && r.y > 0 ? (p = -45, f = i.sub(cc.v2(e.width / 2 + 10, e.height / 2 + 10))) : r.x > 0 && r.y < 0 ? (p = -135, f = i.sub(cc.v2(e.width / 2 + 10, -e.height / 2 - 10))) : r.x < 0 && 0 == r.y ? (p = 90, f = i.add(cc.v2(e.width / 2 + 10, 0))) : r.x < 0 && r.y > 0 ? (p = 45, f = i.add(cc.v2(e.width / 2 + 10, -e.height / 2 - 10))) : r.x < 0 && r.y < 0 && (p = 135, f = i.add(cc.v2(e.width / 2 + 10, e.height / 2 + 10)))
							}
							if (!l) return void console.error("pre is null, pathNode.position =>:", t[d]);
							f.x -= e.width * o.width / 2, f.y -= e.height * o.height / 2;
							var g = 10 * t[d].x + t[d].y,
								y = cc.instantiate(l);
							y.scaleX = u, y.scaleY = h, y.rotation = -p, y.position = f, y.name = "" + g, y.parent = this._walkNode
						}
				}, e.prototype.clearWalkPath = function (t) {
					if (t && this._walkNode) {
						var e = 10 * t.x + t.y,
							o = this._walkNode.getChildByName("" + e);
						o && o.destroy()
					} else this.initWalkNode()
				}, e.prototype.clearNoUsePath = function (t) {
					this._walkNode && this._walkNode.children.forEach(function (e) {
						for (var o = !1, n = 0; n < t.length; n++) {
							"" + (10 * t[n].x + t[n].y) == e.name && (o = !0)
						}
						o || e.destroy()
					})
				}, e.prototype.createDiamondEffect = function () {
					var t = this;
					a.default.PrefabManager.loadPrefab("prefab/diamondNode", function (e) {
						if (!t.playerLayer.node.getChildByName("diamondNode")) {
							var o = cc.instantiate(e);
							o.zIndex = 10, o.name = "diamondNode", o.active = !1, o.parent = t.playerLayer.node
						}
					})
				}, e.prototype.openResultLayer = function (t) {
					this.addLayer("GameResultLayer", 1, !1, function (e) {
						e.getComponent("GameResultLayer").setIsSuccess(t)
					})
				}, e.prototype.openRelifeLayer = function () {
					this.addLayer("relifeLayer")
				}, e.prototype.openGamePauseLayer = function () {
					this.addLayer("pauseLayer")
				}, e.prototype.openAssassinShopLayer = function (t) {
					a.default.showInsertAd();
					this.addLayer("assassinShopLayer", 1, !1, function (e) {
						e.getComponent("AssassinShopLayer").setFromLayer(t)
					})
				}, e.prototype.openAssassinTryLayer = function (t) {
					this.addLayer("tryuseAssassinLayer", 1, !1, t)
				}, e.prototype.openHelpFrame = function () {
					this.addLayer("helpLayer")
				}, e.prototype.openRandomDrawLayer = function () {
					this.addLayer("randomDrawLayer")
				}, e.prototype.openUnLockModeLayer = function (t) {
					this.addLayer("unLockModeLayer", 1, !1, function (e) {
						e.getComponent("UnLockModeLayer").setUnLockMode(t)
					})
				}, e.prototype.addLayer = function (t, e, o, n) {
					var i = this;
					void 0 === e && (e = 1), void 0 === o && (o = !1), a.default.PrefabManager.loadPrefab("prefab/" + t, function (a) {
						if (!i.node.getChildByName(t)) {
							var r = cc.instantiate(a);
							r.name = t, r.zIndex = e, r.parent = i.node, console.log("this.node.height: ", i.node.height), o ? (r.opacity = 0, i.scheduleOnce(function () {
								r.opacity = 255, n && n(r)
							}, .3)) : n && n(r)
						}
					})
				}, e.prototype.getProp = function (t) {
					var e = this;
					a.default.PrefabManager.loadPrefab("prefab/PropComponent", function (o) {
						if (o) {
							var n = e.propNode.children.length,
								i = t.propType,
								a = c.PropType[i],
								r = e.propNode.getChildByName(a);
							r || ((r = cc.instantiate(o)).name = a, r.position = cc.v2(0, -r.height * n), r.parent = e.propNode), t.name = a, r.getComponent("PropComponent").setData(t)
						}
					})
				}, e.prototype.freshPropPos = function (t) {
					var e = 0;
					this.propNode.children.forEach(function (o) {
						o.name !== t.name && (o.position = cc.v2(0, -o.height * e), e++)
					})
				}, e.prototype.update = function () { }, i([p(cc.Camera)], e.prototype, "camera", void 0), i([p(cc.TiledMap)], e.prototype, "tiledMap", void 0), i([p(cc.TiledLayer)], e.prototype, "floor", void 0), i([p(cc.TiledLayer)], e.prototype, "wall", void 0), i([p(cc.TiledLayer)], e.prototype, "box", void 0), i([p(cc.TiledLayer)], e.prototype, "playerLayer", void 0), i([p(cc.Label)], e.prototype, "stageLabel", void 0), i([p(cc.Label)], e.prototype, "guardNumLabel", void 0), i([p(cc.Node)], e.prototype, "stageNode", void 0), i([p(cc.Node)], e.prototype, "propNode", void 0), i([p(cc.Node)], e.prototype, "startLayer", void 0), i([p(cc.Node)], e.prototype, "maskNode", void 0), i([p(cc.Prefab)], e.prototype, "path_1_pre", void 0), i([p(cc.Prefab)], e.prototype, "path_2_pre", void 0), i([p(cc.Prefab)], e.prototype, "path_3_pre", void 0), i([p(cc.Prefab)], e.prototype, "path_4_pre", void 0), i([p(cc.Prefab)], e.prototype, "path_5_pre", void 0), i([p(cc.Prefab)], e.prototype, "path_6_pre", void 0), i([p(cc.Prefab)], e.prototype, "path_8_pre", void 0), i([p(cc.Sprite)], e.prototype, "targetIcon", void 0), i([p(cc.SpriteFrame)], e.prototype, "targetIconRes", void 0), e = i([h], e)
			}(cc.Component);
		o.default = f, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./AssassinData": "AssassinData",
		"./Events": "Events",
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr",
		"./UserData": "UserData"
	}],
	Guard: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "d73f5F2uFZDTo/fzCS38ov+", "Guard");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./GameObject"),
			r = t("./GameObjectMgr"),
			s = t("../YdhwSDK/YdhwSDK"),
			c = cc._decorator,
			d = c.ccclass,
			l = c.property,
			u = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.bulletNode = null, e._staticDelay = 0, e._delayTotal = 0, e._atkInterval = .12, e._interval = 0, e._difficulty = 0, e._warnningR = 0, e._warnningP = 0, e._isWarnning = !1, e._isSamePos = !1, e
				}
				return n(e, t), e.prototype.start = function () {
					this.addEvts(), this.status = a.ObjectStatus.Static, this.fightType = r.default.instance.FightType, this.fightType === a.FightType.ArkMode && (this.InVisible = !0);
					var t = r.default.instance.LevelProperty;
					this.atk += t.guardAtkPer / 100 * this.atk, this.moveSpd += t.guardSpdPer / 100 * this.moveSpd, this.addSpd += t.guardSpdPer / 100 * this.addSpd, this._warnningR = t.warnningR, this._warnningP = t.warnningP, this.autoSeekTime = t.autoSeekTime, this.preAdddiamondCnt = t.guardReward, this.light && this.light.getComponent("Light").addRadius(t.lightZonePer)
				}, e.prototype.onDestroy = function () {
					this._findNode && (this._findNode.destroy(), this._findNode = null), this._warnNode && (this._warnNode.destroy(), this._warnNode = null)
				}, e.prototype.playWarnAni = function () {
					var t = this;
					this._warnNode || this._findNode || s.default.PrefabManager.loadPrefab("prefab/warnNode", function (e) {
						t._warnNode = cc.instantiate(e), t._warnNode.position = t.node.position, t._warnNode.scale = .5, t._warnNode.parent = t.node.parent;
						var o = t._warnNode.getComponent(cc.Animation);
						o.play(), o.on("finished", function () {
							var e;
							t._warnNode.destroy(), t._warnNode = null, t.status = a.ObjectStatus.AddSpd;
							var o = 0;
							do {
								var n = void 0,
									i = r.default.instance.assassin,
									s = void 0;
								if (i && (s = i.getComponent("Assassin").getCoord()), s && 0 == t.tmxData[s.x][s.y]) {
									var c = t.getCoord(),
										d = s.sub(c).mag();
									(Math.random() > .5 || d < 6) && (n = r.default.instance.coord2Point(s))
								}
								n && ++o > 10 && (t._atkCoord = null, n = null), e = t.getClosestPath(n)
							} while (e.length <= 1);
							t.move(e)
						}, t)
					})
				}, e.prototype.playFindAni = function () {
					var t = this;
					this.status = a.ObjectStatus.Atk, this.playAtk(), this.light && this.light.getComponent("Light").playFindAni(), this._warnNode || this._findNode || (s.default.PrefabManager.loadPrefab("prefab/findNode", function (e) {
						t._findNode = cc.instantiate(e), t._findNode.position = t.node.position, t._findNode.scale = .5, t._findNode.parent = t.node.parent;
						var o = t._findNode.getComponent(cc.Animation);
						o.play(), o.on("finished", function () {
							t._findNode.destroy(), t._findNode = null
						}, t)
					}), this.checkWarn())
				}, e.prototype.checkWarn = function () {
					var t = r.default.instance.guards;
					for (var e in t)
						if (cc.isValid(t[e])) {
							var o = t[e].getComponent("Guard").getStatus();
							o !== a.ObjectStatus.NormalMove && o !== a.ObjectStatus.AddSpd && o !== a.ObjectStatus.Sweeping || t[e].getComponent("Guard").playWarnAni()
						}
				}, e.prototype.playAtk = function () {
					var t = r.default.instance.getBulletIns();
					t.parent = this.bulletNode, t.getComponent("Bullet").setTmxData(this.tmxData), t.getComponent("Bullet").setEmitComponent(this), t.getComponent("Bullet").atk(), t.y = -35, s.default.Audio.playEffect("gun.mp3")
				}, e.prototype.reset = function () {
					this.status = a.ObjectStatus.Static
				}, e.prototype.checkIsCanAtk = function (t) {
					var e = this,
						o = r.default.instance.assassin;
					if (o)
						if (o.getComponent("Assassin").InVisible) t && t(!1);
						else {
							var n, i, s = o.position.sub(this.node.position),
								c = this.getCoord(),
								d = o.getComponent("Assassin").getCoord(),
								l = [];
							c.x != d.x && void 0 * (n = (d.y - c.y) / (d.x - c.x)) + (i = (d.y * c.x - c.y * d.x) / (c.x - d.x));
							for (var u = Math.min(c.x, d.x), h = Math.min(c.y, d.y), p = u == c.x ? d.x : c.x, f = h == c.y ? d.y : c.y, g = u; g <= p; g++)
								for (var y = h; y <= f; y++)(c.x != d.x ? Math.abs(n * g - y + i) / Math.sqrt(n * n + 1) : 0) <= Math.sqrt(2) / 2 && l.push(cc.v2(g, y));
							var m = !0;
							for (g = 0; g < l.length; g++) {
								var v = l[g];
								if (v && 0 != this.tmxData[v.x][v.y]) {
									m = !1;
									break
								}
							}
							if (m) {
								this._atkCoord = d, this.status = a.ObjectStatus.PreAtk;
								var _ = 180 * Math.acos(Math.abs(s.x) / s.mag()) / Math.PI;
								s.y > 0 ? s.x >= 0 ? _ *= -1 : _ = -180 + _ : s.y < 0 ? s.x < 0 && (_ = 180 - _) : _ = s.x >= 0 ? 0 : 180, this.node.stopAllActions(), this.isMove = !1;
								var w = this.node.getComponent(cc.Animation);
								w.pause(), w.setCurrentTime(0), w.stop();
								var b = void 0,
									S = _;
								(b = Math.abs(this.node.rotation - _)) > 180 && (b = 360 - b, S = this.node.rotation < 0 ? this.node.rotation - b : this.node.rotation + b), this.node.runAction(cc.sequence(cc.rotateTo(Math.abs(b / 360), S), cc.callFunc(function () {
									e.node.rotation = _, t && t(!0)
								})))
							} else t && t(!1)
						}
					else t && t(!1)
				}, e.prototype.isAtkZone = function (t) {
					if (!this.light) return console.error("\u6ca1\u6709\u627e\u5230\u63a2\u706f\uff01"), !1;
					var e = this.light.getComponent("Light").getRadius();
					if (e <= 0) return console.log("radius is error!"), !1;
					var o = this.light.getComponent("Light").getMaxAngle(),
						n = r.default.instance.tileSize,
						i = r.default.instance.mapSize,
						a = r.default.instance.coord2Point(t);
					return a.x -= n.width * i.width / 2, a.y -= n.height * i.height / 2, a = this.node.parent.convertToWorldSpaceAR(a), (a = this.light.convertToNodeSpaceAR(a)).mag() <= e && a.x >= 0 && Math.abs(Math.atan(a.y / a.x)) <= o
				}, e.prototype.getRadias = function (t) {
					return t * Math.PI / 180
				}, e.prototype.getAtkCoords = function () {
					for (var t = this.getCoord(), e = this.light.getComponent("Light").getRadius() * this.node.scaleX, o = r.default.instance.tileSize, n = Math.ceil(e / o.width), i = [], a = t.x - n; a < t.x + n; a++)
						for (var s = t.y - n; s < t.y + n; s++) this.isAtkZone(cc.v2(a, s)) && i.push(cc.v2(a, s));
					return i
				}, e.prototype.getLightZoneVerts = function () {
					for (var t = this, e = this.getCoord(), o = this.light.getComponent("Light").getRadius() * this.node.scaleX, n = r.default.instance.tileSize, i = r.default.instance.mapSize, a = Math.ceil(o / n.width), s = [], c = e.x - a; c <= e.x + a; c++)
						for (var d = e.y - a; d <= e.y + a; d++)
							if (this.tmxData instanceof Array && c < this.tmxData.length && this.tmxData[c] instanceof Array && d < this.tmxData[c].length && 0 !== this.tmxData[c][d]) {
								for (var l = [cc.v2(c - .55, d + .55), cc.v2(c - .55, d - .55), cc.v2(c + .55, d - .55), cc.v2(c + .55, d + .55)], u = [], h = 0; h < 3; h++) u.push(cc.v2(l[0].x, l[0].y - 1.1 * h / 3)), u.push(cc.v2(l[1].x + 1.1 * h / 3, l[1].y)), u.push(cc.v2(l[2].x, l[2].y + 1.1 * h / 3)), u.push(cc.v2(l[3].x - 1.1 * h / 3, l[3].y));
								for (var p = 0; p < u.length; p++)
									if (this.isAtkZone(u[p])) {
										s.push(l);
										break
									}
							} return s.forEach(function (e, o) {
								e.forEach(function (e, a) {
									(e = r.default.instance.coord2Point(e)).x -= n.width * i.width / 2, e.y -= n.height * i.height / 2, e = t.node.parent.convertToWorldSpaceAR(e), s[o][a] = t.light.convertToNodeSpaceAR(e)
								})
							}), s
				}, e.prototype.update = function () {
					var t = this;
					if (r.default.instance.isGameStart && !this.isTiming) {
						var e = r.default.instance.tileSize;
						r.default.instance.mapSize;
						if (this.status == a.ObjectStatus.Static) {
							if (this._delayTotal += 1 / 60, this._delayTotal >= this._staticDelay) {
								this._delayTotal = 0;
								var o = void 0,
									n = 0;
								do {
									if (!(d = void 0))
										if (u = r.default.instance.assassin)
											if (u.getComponent("Assassin").staticTime >= this.autoSeekTime) {
												var i = u.getComponent("Assassin").getCoord();
												d = r.default.instance.coord2Point(i)
											} else if (this._difficulty > 0) {
												this._difficulty--;
												i = u.getComponent("Assassin").getCoord();
												d = r.default.instance.coord2Point(i)
											}
									this.status = this._atkCoord ? a.ObjectStatus.AddSpd : a.ObjectStatus.NormalMove, this._atkCoord = null, d && ++n > 10 && (d = null), o = this.getClosestPath(d)
								} while (o.length <= 1);
								this.move(o)
							}
						} else if (this.status === a.ObjectStatus.Atk) {
							if (!(u = r.default.instance.assassin)) return void this.reset();
							if (u.getComponent("Assassin").InVisible) return void this.reset();
							this._difficulty = r.default.instance.Difficulty, this.node.stopAllActions(), this.isMove = !1;
							var c = this.node.getComponent(cc.Animation);
							if (c.pause(), c.setCurrentTime(0), c.stop(), this._interval += 1 / 60, this._interval >= this._atkInterval && (this._interval = 0, this.playAtk()), !(h = u.getComponent("Assassin").getCoord())) return void this.reset();
							!this.isAtkZone(h) || h.equals(this.getCoord()) ? this.reset() : this._atkCoord && !this._atkCoord.equals(h) && this.checkIsCanAtk(function (e) {
								e ? t.status = a.ObjectStatus.Atk : t.reset()
							})
						} else if (this.status === a.ObjectStatus.NormalMove || this.status === a.ObjectStatus.AddSpd || this.status === a.ObjectStatus.Sweeping) {
							if (!(u = r.default.instance.assassin)) return;
							if (u.getComponent("Assassin").InVisible) return;
							if (!(h = u.getComponent("Assassin").getCoord())) return;
							if (h.equals(this.getCoord())) this._isSamePos || (this._isSamePos = !0);
							else if (this.isAtkZone(h)) this.checkIsCanAtk(function (e) {
								e && t.playFindAni()
							});
							else if (this._isSamePos) {
								this._isSamePos = !1, r.default.instance.setAutoFollowAssassinCoord(h), this.status = a.ObjectStatus.AddSpd;
								var d = r.default.instance.coord2Point(h);
								o = this.getClosestPath(d);
								this.move(o)
							}
						} else {
							if (!(u = r.default.instance.assassin)) return;
							(h = u.getComponent("Assassin").getCoord()) && h.equals(this.getCoord()) && this.reset()
						}
						if (this._isWarnning) {
							if (!(u = r.default.instance.assassin)) return void (this._isWarnning = !1);
							if (u.getComponent("Assassin").InVisible) return void (this._isWarnning = !1);
							if (this.status !== a.ObjectStatus.Atk) {
								var l = r.default.instance.followAssassinCoord;
								h = u.getComponent("Assassin").getCoord(), this.getCoord();
								if (h && !h.equals(l) && !h.equals(this.getCoord())) {
									r.default.instance.setAutoFollowAssassinCoord(h), this.status = a.ObjectStatus.AddSpd;
									d = r.default.instance.coord2Point(h), o = this.getClosestPath(d);
									this.move(o)
								}
							}
						} else {
							var u;
							if (!(u = r.default.instance.assassin)) return;
							if (u.getComponent("Assassin").InVisible) return;
							var h = u.getComponent("Assassin").getCoord();
							if (this.getCoord().sub(h).mag() * e.width <= this._warnningR)
								if (s.default.Util.random(1, 100) <= this._warnningP && h && !h.equals(this.getCoord())) {
									this._isWarnning = !0, r.default.instance.setAutoFollowAssassinCoord(h), this.status = a.ObjectStatus.AddSpd;
									var d = r.default.instance.coord2Point(h),
										o = this.getClosestPath(d);
									this.move(o)
								}
						}
					}
				}, i([l(cc.Node)], e.prototype, "bulletNode", void 0), e = i([d], e)
			}(a.default);
		o.default = u, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr"
	}],
	HelpLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "53094JzX2pJ8KdCCQb53P6j", "HelpLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Txt"),
			r = t("./GameObject"),
			s = t("../YdhwSDK/YdhwSDK"),
			c = t("./Events"),
			d = t("./GameObjectMgr"),
			l = cc._decorator,
			u = l.ccclass,
			h = l.property,
			p = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.modeIcon = null, e.modeLabel = null, e.intro = null, e.closeBtn = null, e.closeBtnLabel = null, e.modeIconRes = [], e
				}
				return n(e, t), e.prototype.start = function () {
					a.default.setFont(this.closeBtnLabel, a.default.getTxt("known")), this.initModeIcon()
				}, e.prototype.initModeIcon = function () {
					var t, e = d.default.instance.FightType,
						o = "",
						n = "";
					if (this.modeIconRes.length < 4) console.error("this.modeIconRes.length error");
					else {
						switch (e) {
							case r.FightType.ArkMode:
								t = this.modeIconRes[1], o = a.default.getTxt("ArkMode"), n = a.default.getTxt("ArkModeIntro");
								break;
							case r.FightType.NormalMode:
								t = this.modeIconRes[0], o = a.default.getTxt("NormalMode"), n = a.default.getTxt("NormalModeIntro");
								break;
							case r.FightType.BombMode:
								t = this.modeIconRes[2], o = a.default.getTxt("BombMode"), n = a.default.getTxt("BombModeIntro");
								break;
							case r.FightType.ExtricateMode:
								t = this.modeIconRes[3], o = a.default.getTxt("ExMode"), n = a.default.getTxt("ExModeIntro")
						}
						this.modeIcon.spriteFrame = t, this.intro.string = n, a.default.setFont(this.modeLabel, o)
					}
				}, e.prototype.onClickClose = function () {
					this.node.destroy(), s.default.Audio.playEffect("click.mp3"), d.default.instance.TryAssassinId = -1;
					var t = new cc.Event.EventCustom(c.default.GAME_NEXT, !0);
					cc.director.dispatchEvent(t)
				}, i([h(cc.Sprite)], e.prototype, "modeIcon", void 0), i([h(cc.Label)], e.prototype, "modeLabel", void 0), i([h(cc.Label)], e.prototype, "intro", void 0), i([h(cc.Button)], e.prototype, "closeBtn", void 0), i([h(cc.Label)], e.prototype, "closeBtnLabel", void 0), i([h(cc.SpriteFrame)], e.prototype, "modeIconRes", void 0), e = i([u], e)
			}(cc.Component);
		o.default = p, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr",
		"./Txt": "Txt"
	}],
	LevelData: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "b21072RkexPyqwzb1Rc1ifJ", "LevelData"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		o.default = {
			NormalMode: [{
				guardNum: 2,
				guardReward: 10,
				guardSpdPer: 0,
				guardAtkPer: -100,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 0,
				shieldDis: 200,
				autoSeekTime: 100,
				shareVideoReward: 50,
				failReward: 10
			}, {
				guardNum: 2,
				guardReward: 10,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 20,
				shieldDis: 200,
				autoSeekTime: 4,
				shareVideoReward: 50,
				failReward: 10
			}, {
				guardNum: 3,
				guardReward: 10,
				guardSpdPer: 10,
				guardAtkPer: 25,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 50,
				shieldDis: 200,
				autoSeekTime: 4,
				shareVideoReward: 60,
				failReward: 10
			}, {
				guardNum: 3,
				guardReward: 10,
				guardSpdPer: 10,
				guardAtkPer: 25,
				lightZonePer: 5,
				warnningR: 200,
				warnningP: 55,
				shieldDis: 250,
				autoSeekTime: 3,
				shareVideoReward: 60,
				failReward: 10
			}, {
				guardNum: 4,
				guardReward: 10,
				guardSpdPer: 20,
				guardAtkPer: 50,
				lightZonePer: 5,
				warnningR: 200,
				warnningP: 60,
				shieldDis: 250,
				autoSeekTime: 3,
				shareVideoReward: 80,
				failReward: 10
			}, {
				guardNum: 4,
				guardReward: 10,
				guardSpdPer: 20,
				guardAtkPer: 50,
				lightZonePer: 10,
				warnningR: 300,
				warnningP: 65,
				shieldDis: 300,
				autoSeekTime: 3,
				shareVideoReward: 80,
				failReward: 20
			}, {
				guardNum: 5,
				guardReward: 10,
				guardSpdPer: 25,
				guardAtkPer: 75,
				lightZonePer: 10,
				warnningR: 300,
				warnningP: 70,
				shieldDis: 300,
				autoSeekTime: 3,
				shareVideoReward: 100,
				failReward: 20
			}, {
				guardNum: 5,
				guardReward: 10,
				guardSpdPer: 25,
				guardAtkPer: 75,
				lightZonePer: 15,
				warnningR: 300,
				warnningP: 75,
				shieldDis: 350,
				autoSeekTime: 3,
				shareVideoReward: 100,
				failReward: 20
			}, {
				guardNum: 6,
				guardReward: 10,
				guardSpdPer: 30,
				guardAtkPer: 100,
				lightZonePer: 15,
				warnningR: 400,
				warnningP: 80,
				shieldDis: 350,
				autoSeekTime: 3,
				shareVideoReward: 120,
				failReward: 20
			}, {
				guardNum: 6,
				guardReward: 10,
				guardSpdPer: 30,
				guardAtkPer: 100,
				lightZonePer: 20,
				warnningR: 400,
				warnningP: 85,
				shieldDis: 400,
				autoSeekTime: 2,
				shareVideoReward: 120,
				failReward: 20
			}, {
				guardNum: 7,
				guardReward: 10,
				guardSpdPer: 35,
				guardAtkPer: 125,
				lightZonePer: 20,
				warnningR: 400,
				warnningP: 90,
				shieldDis: 400,
				autoSeekTime: 2,
				shareVideoReward: 140,
				failReward: 30
			}, {
				guardNum: 7,
				guardReward: 10,
				guardSpdPer: 35,
				guardAtkPer: 125,
				lightZonePer: 25,
				warnningR: 400,
				warnningP: 95,
				shieldDis: 450,
				autoSeekTime: 2,
				shareVideoReward: 140,
				failReward: 30
			}, {
				guardNum: 8,
				guardReward: 10,
				guardSpdPer: 40,
				guardAtkPer: 150,
				lightZonePer: 25,
				warnningR: 400,
				warnningP: 100,
				shieldDis: 450,
				autoSeekTime: 2,
				shareVideoReward: 160,
				failReward: 30
			}, {
				guardNum: 8,
				guardReward: 10,
				guardSpdPer: 40,
				guardAtkPer: 150,
				lightZonePer: 30,
				warnningR: 400,
				warnningP: 100,
				shieldDis: 450,
				autoSeekTime: 2,
				shareVideoReward: 160,
				failReward: 30
			}],
			ArkMode: [{
				guardNum: 2,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 0,
				shieldDis: 200,
				autoSeekTime: 100,
				ArkModeNum: 3,
				ArkReward: 15,
				HidePropNum: 0,
				HidePropLast: 10,
				guardReward: 0,
				shareVideoReward: 50,
				failReward: 10
			}, {
				guardNum: 2,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 20,
				shieldDis: 200,
				autoSeekTime: 4,
				ArkModeNum: 3,
				ArkReward: 15,
				HidePropNum: 0,
				HidePropLast: 10,
				guardReward: 0,
				shareVideoReward: 50,
				failReward: 10
			}, {
				guardNum: 3,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 50,
				shieldDis: 200,
				autoSeekTime: 4,
				ArkModeNum: 4,
				ArkReward: 15,
				HidePropNum: 1,
				HidePropLast: 8,
				guardReward: 0,
				shareVideoReward: 60,
				failReward: 10
			}, {
				guardNum: 3,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 55,
				shieldDis: 250,
				autoSeekTime: 3,
				ArkModeNum: 4,
				ArkReward: 15,
				HidePropNum: 1,
				HidePropLast: 10,
				guardReward: 0,
				shareVideoReward: 60,
				failReward: 10
			}, {
				guardNum: 4,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 60,
				shieldDis: 250,
				autoSeekTime: 3,
				ArkModeNum: 5,
				ArkReward: 15,
				HidePropNum: 2,
				HidePropLast: 6,
				guardReward: 0,
				shareVideoReward: 75,
				failReward: 10
			}, {
				guardNum: 4,
				guardSpdPer: 20,
				guardAtkPer: 25,
				lightZonePer: 5,
				warnningR: 200,
				warnningP: 65,
				shieldDis: 300,
				autoSeekTime: 3,
				ArkModeNum: 5,
				ArkReward: 15,
				HidePropNum: 2,
				HidePropLast: 10,
				guardReward: 0,
				shareVideoReward: 75,
				failReward: 20
			}, {
				guardNum: 5,
				guardSpdPer: 20,
				guardAtkPer: 25,
				lightZonePer: 10,
				warnningR: 200,
				warnningP: 70,
				shieldDis: 300,
				autoSeekTime: 3,
				ArkModeNum: 6,
				ArkReward: 15,
				HidePropNum: 3,
				HidePropLast: 6,
				guardReward: 0,
				shareVideoReward: 90,
				failReward: 20
			}, {
				guardNum: 5,
				guardSpdPer: 20,
				guardAtkPer: 25,
				lightZonePer: 10,
				warnningR: 200,
				warnningP: 75,
				shieldDis: 350,
				autoSeekTime: 3,
				ArkModeNum: 6,
				ArkReward: 15,
				HidePropNum: 3,
				HidePropLast: 9,
				guardReward: 0,
				shareVideoReward: 90,
				failReward: 20
			}, {
				guardNum: 6,
				guardSpdPer: 25,
				guardAtkPer: 25,
				lightZonePer: 15,
				warnningR: 200,
				warnningP: 80,
				shieldDis: 350,
				autoSeekTime: 3,
				ArkModeNum: 7,
				ArkReward: 15,
				HidePropNum: 3,
				HidePropLast: 8,
				guardReward: 0,
				shareVideoReward: 105,
				failReward: 20
			}, {
				guardNum: 6,
				guardSpdPer: 25,
				guardAtkPer: 50,
				lightZonePer: 15,
				warnningR: 200,
				warnningP: 85,
				shieldDis: 400,
				autoSeekTime: 2,
				ArkModeNum: 7,
				ArkReward: 15,
				HidePropNum: 4,
				HidePropLast: 10,
				guardReward: 0,
				shareVideoReward: 105,
				failReward: 20
			}, {
				guardNum: 7,
				guardSpdPer: 25,
				guardAtkPer: 50,
				lightZonePer: 20,
				warnningR: 300,
				warnningP: 90,
				shieldDis: 400,
				autoSeekTime: 2,
				ArkModeNum: 8,
				ArkReward: 15,
				HidePropNum: 4,
				HidePropLast: 5,
				guardReward: 0,
				shareVideoReward: 120,
				failReward: 30
			}, {
				guardNum: 7,
				guardSpdPer: 30,
				guardAtkPer: 50,
				lightZonePer: 20,
				warnningR: 300,
				warnningP: 95,
				shieldDis: 450,
				autoSeekTime: 2,
				ArkModeNum: 8,
				ArkReward: 15,
				HidePropNum: 4,
				HidePropLast: 10,
				guardReward: 0,
				shareVideoReward: 120,
				failReward: 30
			}, {
				guardNum: 7,
				guardSpdPer: 30,
				guardAtkPer: 50,
				lightZonePer: 25,
				warnningR: 300,
				warnningP: 100,
				shieldDis: 450,
				autoSeekTime: 2,
				ArkModeNum: 9,
				ArkReward: 15,
				HidePropNum: 5,
				HidePropLast: 10,
				guardReward: 0,
				shareVideoReward: 135,
				failReward: 30
			}, {
				guardNum: 8,
				guardSpdPer: 30,
				guardAtkPer: 50,
				lightZonePer: 25,
				warnningR: 300,
				warnningP: 100,
				shieldDis: 450,
				autoSeekTime: 2,
				ArkModeNum: 9,
				ArkReward: 15,
				HidePropNum: 5,
				HidePropLast: 5,
				guardReward: 0,
				shareVideoReward: 135,
				failReward: 30
			}],
			BombMode: [{
				guardNum: 2,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 0,
				shieldDis: 200,
				autoSeekTime: 100,
				HidePropNum: 0,
				HidePropLast: 20,
				TimingPropNum: 0,
				TimingPropLast: 0,
				BombModeTimes: [60, 80],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 50,
				failReward: 10
			}, {
				guardNum: 2,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 20,
				shieldDis: 200,
				autoSeekTime: 4,
				HidePropNum: 0,
				HidePropLast: 8,
				TimingPropNum: 0,
				TimingPropLast: 0,
				BombModeTimes: [25, 30, 40],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 50,
				failReward: 10
			}, {
				guardNum: 3,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 50,
				shieldDis: 200,
				autoSeekTime: 4,
				HidePropNum: 1,
				HidePropLast: 7,
				TimingPropNum: 1,
				TimingPropLast: 15,
				BombModeTimes: [20, 25, 30, 35],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 50,
				failReward: 10
			}, {
				guardNum: 3,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 55,
				shieldDis: 250,
				autoSeekTime: 3,
				HidePropNum: 1,
				HidePropLast: 8,
				TimingPropNum: 1,
				TimingPropLast: 15,
				BombModeTimes: [20, 10, 30, 40],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 50,
				failReward: 10
			}, {
				guardNum: 4,
				guardSpdPer: 0,
				guardAtkPer: 0,
				lightZonePer: 0,
				warnningR: 200,
				warnningP: 60,
				shieldDis: 250,
				autoSeekTime: 3,
				HidePropNum: 1,
				HidePropLast: 10,
				TimingPropNum: 1,
				TimingPropLast: 15,
				BombModeTimes: [10, 15, 30, 30, 30],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 60,
				failReward: 10
			}, {
				guardNum: 4,
				guardSpdPer: 20,
				guardAtkPer: 25,
				lightZonePer: 5,
				warnningR: 200,
				warnningP: 65,
				shieldDis: 300,
				autoSeekTime: 3,
				HidePropNum: 1,
				HidePropLast: 6,
				TimingPropNum: 2,
				TimingPropLast: 15,
				BombModeTimes: [10, 10, 15, 30, 30],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 60,
				failReward: 20
			}, {
				guardNum: 5,
				guardSpdPer: 20,
				guardAtkPer: 25,
				lightZonePer: 10,
				warnningR: 200,
				warnningP: 70,
				shieldDis: 300,
				autoSeekTime: 3,
				HidePropNum: 1,
				HidePropLast: 8,
				TimingPropNum: 2,
				TimingPropLast: 15,
				BombModeTimes: [10, 15, 20, 30, 40],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 60,
				failReward: 20
			}, {
				guardNum: 5,
				guardSpdPer: 20,
				guardAtkPer: 25,
				lightZonePer: 10,
				warnningR: 200,
				warnningP: 75,
				shieldDis: 350,
				autoSeekTime: 3,
				HidePropNum: 2,
				HidePropLast: 5,
				TimingPropNum: 2,
				TimingPropLast: 15,
				BombModeTimes: [10, 15, 10, 20, 15, 20],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 60,
				failReward: 20
			}, {
				guardNum: 6,
				guardSpdPer: 25,
				guardAtkPer: 50,
				lightZonePer: 15,
				warnningR: 200,
				warnningP: 80,
				shieldDis: 350,
				autoSeekTime: 3,
				HidePropNum: 2,
				HidePropLast: 8,
				TimingPropNum: 3,
				TimingPropLast: 15,
				BombModeTimes: [15, 20, 20, 30, 20, 50],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 90,
				failReward: 20
			}, {
				guardNum: 6,
				guardSpdPer: 25,
				guardAtkPer: 50,
				lightZonePer: 5,
				warnningR: 200,
				warnningP: 85,
				shieldDis: 400,
				autoSeekTime: 2,
				HidePropNum: 2,
				HidePropLast: 10,
				TimingPropNum: 3,
				TimingPropLast: 15,
				BombModeTimes: [10, 20, 20, 30, 25, 45],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 90,
				failReward: 20
			}, {
				guardNum: 7,
				guardSpdPer: 25,
				guardAtkPer: 50,
				lightZonePer: 20,
				warnningR: 300,
				warnningP: 90,
				shieldDis: 400,
				autoSeekTime: 2,
				HidePropNum: 2,
				HidePropLast: 5,
				TimingPropNum: 3,
				TimingPropLast: 20,
				BombModeTimes: [10, 20, 20, 10, 15, 30],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 90,
				failReward: 30
			}, {
				guardNum: 7,
				guardSpdPer: 30,
				guardAtkPer: 75,
				lightZonePer: 20,
				warnningR: 300,
				warnningP: 95,
				shieldDis: 450,
				autoSeekTime: 2,
				HidePropNum: 3,
				HidePropLast: 8,
				TimingPropNum: 4,
				TimingPropLast: 18,
				BombModeTimes: [10, 10, 10, 10, 10, 15],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 90,
				failReward: 30
			}, {
				guardNum: 7,
				guardSpdPer: 30,
				guardAtkPer: 75,
				lightZonePer: 25,
				warnningR: 300,
				warnningP: 100,
				shieldDis: 450,
				autoSeekTime: 2,
				HidePropNum: 3,
				HidePropLast: 15,
				TimingPropNum: 4,
				TimingPropLast: 18,
				BombModeTimes: [10, 25, 25, 20, 25, 30],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 120,
				failReward: 30
			}, {
				guardNum: 8,
				guardSpdPer: 30,
				guardAtkPer: 75,
				lightZonePer: 25,
				warnningR: 300,
				warnningP: 100,
				shieldDis: 450,
				autoSeekTime: 2,
				HidePropNum: 3,
				HidePropLast: 6,
				TimingPropNum: 4,
				TimingPropLast: 18,
				BombModeTimes: [10, 10, 10, 20, 20, 30],
				BombReward: 15,
				guardReward: 0,
				shareVideoReward: 120,
				failReward: 30
			}],
			ExtricateMode: []
		}, cc._RF.pop()
	}, {}],
	Light: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "4f7e2AJEfVIwosEXDPtM59P", "Light");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			r = a.ccclass,
			s = a.property,
			c = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.radius = 10, e.startAngle = Math.PI / 4, e.endAngle = 7 * Math.PI / 4, e.averageNum = 10, e.isPlayAni = !1, e._g = null, e._cl = cc.color(255, 255, 255, 120), e.segments = [], e
				}
				return n(e, t), e.prototype.start = function () {
					this._g = this.node.getComponent(cc.Graphics)
				}, e.prototype.addRadius = function (t) {
					this.radius += t / 100 * this.radius
				}, e.prototype.getRadius = function () {
					return this.radius
				}, e.prototype.getMaxAngle = function () {
					return (2 * Math.PI - (this.endAngle - this.startAngle)) / 2
				}, e.prototype.playFindAni = function () {
					var t = this;
					if (!this.isPlayAni) {
						this.isPlayAni = !0;
						var e = 0;
						this.node.runAction(cc.repeat(cc.sequence(cc.callFunc(function () {
							t._cl = cc.color(255, 0, 0, 120)
						}), cc.delayTime(.15), cc.callFunc(function () {
							2 === ++e && (t.isPlayAni = !1), t._cl = cc.color(255, 255, 255, 120)
						}), cc.delayTime(.15)), 2))
					}
				}, e.prototype.getIntersection = function (t, e) {
					var o = t.a.x,
						n = t.a.y,
						i = t.b.x - t.a.x,
						a = t.b.y - t.a.y,
						r = e.a.x,
						s = e.a.y,
						c = e.b.x - e.a.x,
						d = e.b.y - e.a.y,
						l = Math.sqrt(i * i + a * a),
						u = Math.sqrt(c * c + d * d);
					if (i / l == c / u && a / l == d / u) return null;
					var h = (i * (s - n) + a * (o - r)) / (c * a - d * i),
						p = (r + c * h - o) / i;
					return p < 0 ? null : h < 0 || h > 1 ? null : {
						x: o + i * p,
						y: n + a * p,
						param: p
					}
				}, e.prototype.getSightPolygon = function (t, e) {
					for (var o = function (t) {
						var e = [];
						return t.forEach(function (t) {
							e.push(t.a, t.b)
						}), e
					}(this.segments), n = function (t) {
						var e = {};
						return o.filter(function (t) {
							var o = t.x + "," + t.y;
							return !(o in e) && (e[o] = !0, !0)
						})
					}(), i = [], a = 0; a < n.length; a++) {
						var r = n[a],
							s = Math.atan2(r.y - e, r.x - t);
						r.angle = s, i.push(s)
					}
					var c = [];
					for (a = 0; a < i.length; a++) {
						s = i[a];
						for (var d = {
							a: {
								x: t,
								y: e
							},
							b: {
								x: t + Math.cos(s),
								y: e + Math.sin(s)
							}
						}, l = null, u = 0; u < this.segments.length; u++) {
							var h = this.getIntersection(d, this.segments[u]);
							h && ((!l || h.param < l.param) && (l = h))
						}
						l && (l.angle = s, c.push(l))
					}
					return c = c.sort(function (t, e) {
						return t.angle - e.angle
					})
				}, e.prototype.drawPolygon = function (t, e, o) {
					e.fillColor.fromHEX(o), e.moveTo(t[0].x, t[0].y);
					for (var n = 1; n < t.length; n++) {
						var i = t[n];
						e.lineTo(i.x, i.y)
					}
					e.close(), e.stroke(), e.fill()
				}, e.prototype.drawLine = function () {
					this._g.clear();
					var t = cc.v2(.1, 0),
						e = [this.getSightPolygon(t.x, t.y)];
					this.drawPolygon(e[0], this._g, this._cl.toHEX("#rrggbbaa"))
				}, e.prototype.averageArc = function (t) {
					this.segments = [];
					var e, o, n = 2 * Math.PI - this.endAngle + this.startAngle,
						i = n / t,
						a = cc.v2(0, 0),
						r = cc.v2(Math.cos(n / 2) * this.radius, Math.sin(n / 2) * this.radius);
					this.segments.push({
						a: a,
						b: r
					});
					for (var s = r, c = 0; c < t; c++) e = n / 2 - i * (c + 1), o = cc.v2(Math.cos(e) * this.radius, Math.sin(e) * this.radius), this.segments.push({
						a: s,
						b: o
					}), s = o;
					this.segments.push({
						a: s,
						b: a
					})
				}, e.prototype.freshSegments = function (t) {
					var e = this;
					this.averageArc(this.averageNum), t.forEach(function (t) {
						t.forEach(function (o, n) {
							var i, a = o;
							i = n + 1 < t.length ? t[n + 1] : t[0], e.segments.push({
								a: a,
								b: i
							})
						})
					}), this.drawLine()
				}, e.prototype.update = function () {
					if (cc.isValid(this.node)) {
						var t = this.node.parent;
						if (cc.isValid(t)) {
							var e = t.getComponent("Guard").getLightZoneVerts();
							this.freshSegments(e)
						}
					}
				}, i([s], e.prototype, "radius", void 0), e = i([r], e)
			}(cc.Component);
		o.default = c, cc._RF.pop()
	}, {}],
	MenuItem: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "fb100DuhKBBF4SB+ObpH5Af", "MenuItem");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./GameObjectMgr"),
			r = t("./Events"),
			s = t("../YdhwSDK/YdhwSDK"),
			c = t("./Txt"),
			d = cc._decorator,
			l = d.ccclass,
			u = d.property,
			h = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.bg = null, e.modeTitle = null, e.modeLevel = null, e.notice = null, e.difficult = null, e.stars = [], e._data = null, e._isOpen = !1, e
				}
				return n(e, t), e.prototype.start = function () { }, e.prototype.updateData = function (t, e) {
					if (void 0 === e && (e = !1), t) {
						this._data = t, c.default.setFont(this.modeTitle, t.title), t.modeLevelIsShow || t.unLockCondition ? (this.modeLevel.node.active = !0, this.notice.node.active = !1, this.modeLevel.string = t.modeLevelString, this.setIsOpen(!0)) : (this.modeLevel.node.active = !1, this.notice.node.active = !0, this.notice.string = t.noticeString, this.setIsOpen(!1)), this.difficult.string = t.difficultString, this.stars.forEach(function (t) {
							t.node.active = !1
						}), t.difficultStar > 5 && (t.difficultStar = 5);
						for (var o = 0; o < t.difficultStar; o++) this.stars[o].node.active = !0;
						s.default.Config.language == s.default.Config.LanguageCfg.AR ? (this.modeTitle.node.anchorX = 1, this.modeTitle.node.x = 165) : (this.modeTitle.node.anchorX = 0, this.modeTitle.node.x = -218), e && this.loadBg(t.bgRes)
					}
				}, e.prototype.setIsOpen = function (t) {
					var e = cc.color(255, 255, 255);
					t || (e = cc.color(131, 131, 131)), this.bg.node.color = e, this.modeTitle.node.color = e, this.notice.node.color = e, this.stars.forEach(function (t) {
						t.node.color = e
					}), this._isOpen = t
				}, e.prototype.onClicked = function () {
					if (s.default.Audio.playEffect("click.mp3"), s.default.showInsertAd(), this._isOpen) {
						a.default.instance.FightType = this._data.mode;
						var t = new cc.Event.EventCustom(r.default.ON_GAME_START, !0);
						cc.director.dispatchEvent(t)
					} else s.default.showToast(this._data.noticeString)
				}, e.prototype.loadBg = function (t) {
					var e = this;
					cc.loader.loadRes(t, cc.SpriteFrame, function (t, o) {
						t ? console.error(t) : cc.isValid(e.node) && (e.bg.spriteFrame = o)
					})
				}, i([u(cc.Sprite)], e.prototype, "bg", void 0), i([u(cc.Label)], e.prototype, "modeTitle", void 0), i([u(cc.Label)], e.prototype, "modeLevel", void 0), i([u(cc.Label)], e.prototype, "notice", void 0), i([u(cc.Label)], e.prototype, "difficult", void 0), i([u(cc.Sprite)], e.prototype, "stars", void 0), e = i([l], e)
			}(cc.Component);
		o.default = h, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObjectMgr": "GameObjectMgr",
		"./Txt": "Txt"
	}],
	MenuLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "b45abEx87tAWIy1uS/uEK3o", "MenuLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Txt"),
			r = t("./GameObject"),
			s = t("./UserData"),
			c = t("../YdhwSDK/YdhwSDK"),
			d = t("./Events"),
			l = cc._decorator,
			u = l.ccclass,
			h = l.property;
		o.ModeUnLockLevel = {
			normalUnLock: 0,
			arkUnLock: 3,
			bombUnLock: 5,
			exUnLock: 10000000005
		};
		var p = function () {
			function t() { }
			return t.getData = function () {
				return {
					1: {
						title: a.default.getTxt("NormalMode"),
						mode: r.FightType.NormalMode,
						modeLevelIsShow: !0,
						modeLevelString: cc.js.formatStr(a.default.getTxt("LevelIdx"), s.default.Level),
						noticeString: "",
						difficultString: a.default.getTxt("Difficulty"),
						difficultStar: 3,
						unLockCondition: !1,
						bgRes: "image/start/jindian_2"
					},
					2: {
						title: a.default.getTxt("ArkMode"),
						mode: r.FightType.ArkMode,
						modeLevelIsShow: !1,
						modeLevelString: cc.js.formatStr(a.default.getTxt("LevelIdx"), s.default.ArkLevel),
						noticeString: cc.js.formatStr(a.default.getTxt("Tips8"), o.ModeUnLockLevel.arkUnLock),
						difficultString: a.default.getTxt("Difficulty"),
						difficultStar: 4,
						unLockCondition: s.default.Level >= o.ModeUnLockLevel.arkUnLock,
						bgRes: "image/start/duobao_2"
					},
					3: {
						title: a.default.getTxt("BombMode"),
						mode: r.FightType.BombMode,
						modeLevelIsShow: !1,
						modeLevelString: cc.js.formatStr(a.default.getTxt("LevelIdx"), s.default.BombLevel),
						noticeString: cc.js.formatStr(a.default.getTxt("Tips9"), o.ModeUnLockLevel.bombUnLock),
						difficultString: a.default.getTxt("Difficulty"),
						difficultStar: 4,
						unLockCondition: s.default.ArkLevel >= o.ModeUnLockLevel.bombUnLock,
						bgRes: "image/start/chaidan_2"
					},
					4: {
						title: a.default.getTxt("ExMode"),
						mode: r.FightType.ExtricateMode,
						modeLevelIsShow: !1,
						modeLevelString: cc.js.formatStr(a.default.getTxt("LevelIdx"), s.default.ExLevel),
						noticeString: a.default.getTxt("notOpen"),
						difficultString: a.default.getTxt("Difficulty"),
						difficultStar: 5,
						unLockCondition: !1,
						bgRes: "image/start/yinjiu_2"
					}
				}
			}, t
		}();
		o.MenuItemData = p;
		var f = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.item1 = null, e.item2 = null, e.item3 = null, e.item4 = null, e.returnBtnLabel = null, e.selectLabel = null, e.title = null, e
			}
			return n(e, t), e.prototype.start = function () {
				a.default.setFont(this.returnBtnLabel, a.default.getTxt("Return")), a.default.setFont(this.selectLabel, a.default.getTxt("SelectMode")), this.initItems()
			}, e.prototype.updateInfo = function () {
				this.initItems()
			}, e.prototype.initItems = function () {
				var t = p.getData();
				for (var e in t) this["item" + e].getComponent("MenuItem").updateData(t[e])
			}, e.prototype.onReturnBtnClicked = function () {
				var t = new cc.Event.EventCustom(d.default.SCROLL_TO_MAIN, !0);
				cc.director.dispatchEvent(t), c.default.Audio.playEffect("click.mp3")
			}, e.prototype.onHelpBtnClicked = function () {
				c.default.Audio.playEffect("click.mp3")
			}, i([h(cc.Node)], e.prototype, "item1", void 0), i([h(cc.Node)], e.prototype, "item2", void 0), i([h(cc.Node)], e.prototype, "item3", void 0), i([h(cc.Node)], e.prototype, "item4", void 0), i([h(cc.Label)], e.prototype, "returnBtnLabel", void 0), i([h(cc.Label)], e.prototype, "selectLabel", void 0), i([h(cc.Node)], e.prototype, "title", void 0), e = i([u], e)
		}(cc.Component);
		o.default = f, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObject": "GameObject",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	PreGetDiamondNode: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "78a73aawVFLe5pnQX9aLr69", "PreGetDiamondNode");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./UserData"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.addDiamond = null, e
				}
				return n(e, t), e.prototype.start = function () { }, e.prototype.setAddDiamondCnt = function (t) {
					var e = this;
					t = t || a.default.PreGetDiamond, this.addDiamond.string = "+" + t, this.node.runAction(cc.sequence(cc.moveBy(.3, 0, 110), cc.delayTime(.8), cc.fadeOut(.1), cc.callFunc(function () {
						e.node.destroy()
					})))
				}, i([c(cc.Label)], e.prototype, "addDiamond", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"./UserData": "UserData"
	}],
	PropComponent: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "8e16ew69hRF/6ameAXSVn81", "PropComponent");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("./GameObjectMgr"),
			s = t("./GameObject"),
			c = cc._decorator,
			d = c.ccclass,
			l = c.property,
			u = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.icon = null, e.bar = null, e.progressBar = null, e.iconRes = [], e.barRes = [], e.lastTime = 0, e.propType = s.PropType.Default, e.targetType = [], e.data = null, e
				}
				return n(e, t), e.prototype.start = function () { }, e.prototype.setData = function (t) {
					this.propType = t.propType, this.lastTime = t.lastTime, this.targetType = t.targetType, this.data = t, this.initUI()
				}, e.prototype.initUI = function () {
					if (!(this.iconRes.length <= 1 || this.barRes.length <= 1)) {
						r.default.instance.getLevelData();
						this.propType === s.PropType.timing ? (this.icon.spriteFrame = this.iconRes[0], this.bar.spriteFrame = this.barRes[0]) : this.propType === s.PropType.invisible && (this.icon.spriteFrame = this.iconRes[1], this.bar.spriteFrame = this.barRes[1]), this.progressBar.progress = 1
					}
				}, e.prototype.update = function () {
					var t = 1 / this.lastTime * (1 / 60);
					if (this.progressBar.progress - t < 0) {
						var e = new cc.Event.EventCustom(a.default.REMOVE_PROP, !0);
						e.setUserData(this.data), cc.director.dispatchEvent(e), this.node.destroy()
					} else this.progressBar.progress -= t
				}, i([l(cc.Sprite)], e.prototype, "icon", void 0), i([l(cc.Sprite)], e.prototype, "bar", void 0), i([l(cc.ProgressBar)], e.prototype, "progressBar", void 0), i([l(cc.SpriteFrame)], e.prototype, "iconRes", void 0), i([l(cc.SpriteFrame)], e.prototype, "barRes", void 0), e = i([d], e)
			}(cc.Component);
		o.default = u, cc._RF.pop()
	}, {
		"./Events": "Events",
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr"
	}],
	Prop: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "0e5e9oRbWdDuLPBR8ZXWkFH", "Prop");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./GameObjectMgr"),
			r = t("./GameObject"),
			s = cc._decorator,
			c = s.ccclass,
			d = s.property,
			l = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.icon = null, e.iconRes = [], e._propType = r.PropType.Default, e._lastTime = 0, e
				}
				return n(e, t), e.prototype.start = function () { }, Object.defineProperty(e.prototype, "PropType", {
					get: function () {
						return this._propType
					},
					set: function (t) {
						this._propType = t, this.initIcon()
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.initIcon = function () {
					if (!(this.iconRes.length <= 1)) {
						var t = a.default.instance.getLevelData();
						this.PropType === r.PropType.timing ? (this.icon.spriteFrame = this.iconRes[0], this._lastTime = t.TimingPropLast) : this.PropType === r.PropType.invisible && (this.icon.spriteFrame = this.iconRes[1], this._lastTime = t.HidePropLast)
					}
				}, Object.defineProperty(e.prototype, "LastTime", {
					get: function () {
						return this._lastTime
					},
					enumerable: !0,
					configurable: !0
				}), i([d(cc.Sprite)], e.prototype, "icon", void 0), i([d(cc.SpriteFrame)], e.prototype, "iconRes", void 0), e = i([c], e)
			}(r.default);
		o.default = l, cc._RF.pop()
	}, {
		"./GameObject": "GameObject",
		"./GameObjectMgr": "GameObjectMgr"
	}],
	RandomDrawLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "53ff52Nbl1IRoLPjJAIyCXP", "RandomDrawLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("../YdhwSDK/YdhwSDK"),
			s = t("./UserData"),
			c = t("./Txt"),
			d = cc._decorator,
			l = d.ccclass,
			u = d.property,
			h = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.label = null, e.info = null, e.info1 = null, e.drawBtn = null, e.closeBtn = null, e.drawBtnLabel = null, e.closeBtnLabel = null, e._isPlayVideoStatus = !1, e._data = null, e._low = 50, e._up = 350, e
				}
				return n(e, t), e.prototype.start = function () {
					this.label.string = c.default.getTxt("rewardIntro"), this.info.string = c.default.getTxt("diamondNoEoungh"), this.info1.string = cc.js.formatStr(c.default.getTxt("rewardText"), this._low, this._up), c.default.setFont(this.drawBtnLabel, c.default.getTxt("drawNow")), c.default.setFont(this.closeBtnLabel, c.default.getTxt("NoUse")), r.default.createVideo(r.default.Platform.videoId[1])
				}, e.prototype.onDestroy = function () { }, e.prototype.onClickedDraw = function () {
					var t = this;
					this._isPlayVideoStatus || (this._isPlayVideoStatus = !0, r.default.showVideo(function (e) {
						if (t._isPlayVideoStatus = !1, e) {
							if (!cc.isValid(t.node)) return;
							t.node.destroy();
							var o = r.default.Util.random(t._low, t._up);
							s.default.Diamond += o, r.default.showToast(cc.js.formatStr(c.default.getTxt("Tips3"), o))
						} else r.default.showToast(c.default.getTxt("Tips4"))
					}, function (e) {
						e || (t._isPlayVideoStatus = !1, r.default.showToast(c.default.getTxt("Tips5")))
					}), r.default.Audio.playEffect("click.mp3"), r.default.reportAnalytics(a.default.ReportEvt.DiamondNotEnough))
				}, e.prototype.onClickedClose = function () {
					this.node.destroy(), r.default.Audio.playEffect("click.mp3")
				}, i([u(cc.Label)], e.prototype, "label", void 0), i([u(cc.Label)], e.prototype, "info", void 0), i([u(cc.Label)], e.prototype, "info1", void 0), i([u(cc.Button)], e.prototype, "drawBtn", void 0), i([u(cc.Button)], e.prototype, "closeBtn", void 0), i([u(cc.Label)], e.prototype, "drawBtnLabel", void 0), i([u(cc.Label)], e.prototype, "closeBtnLabel", void 0), e = i([l], e)
			}(cc.Component);
		o.default = h, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	StartLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "72583UyHqRICbDfosrhLpO7", "StartLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./UserData"),
			r = t("./Events"),
			s = t("../YdhwSDK/YdhwSDK"),
			c = t("./AssassinData"),
			d = t("./Txt"),
			l = cc._decorator,
			u = l.ccclass,
			h = l.property,
			p = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.diamond = null, e.startLabel = null, e.startBtn = null, e.upGradeBtn = null, e.upGradeLabel = null, e.diamondProLabel = null, e.assassin = null, e.progress = null, e.warn_tag = null, e.mainNode = null, e.menuNode = null, e.logo = null, e.logoRes = [], e.audioOpenIcon = null, e.audioCloseIcon = null, e._isCroll = !1, e
				}
				return n(e, t), e.prototype.start = function () {
					this.freshDiamondNum(), this.addEvts(), s.default.reportAnalytics(r.default.ReportEvt.EnterHome), this.freshAudioIcon()
				}, e.prototype.addEvts = function () {
					var t = this;
					cc.director.on(r.default.FRESH_DIAMOND, function (e) {
						t.freshDiamondNum()
					}, this), cc.director.on(r.default.CHANGE_SELECTED_ASSASSIN, function (e) {
						t.updateInfo()
					}, this), cc.director.on(r.default.ON_GAME_START, function (e) {
						t.gameStart()
					}, this), cc.director.on(r.default.SCROLL_TO_MAIN, function (e) {
						t.menuScrollToMain()
					}, this)
				}, e.prototype.onEnable = function () { }, e.prototype.onDisable = function () { }, e.prototype.onDestroy = function () {
					cc.director.targetOff(this)
				}, e.prototype.updateInfo = function () {
					d.default.setFont(this.startLabel, d.default.getTxt("GameStart")), d.default.setFont(this.upGradeLabel, d.default.getTxt("UpgradeLabel")), this.assassin.getComponent("Assassin").setActor(a.default.CurAssassin), s.default.Config.language !== s.default.Config.LanguageCfg.CH && this.logoRes.length > 1 && (this.logo.spriteFrame = this.logoRes[1]), this.logo.node.active = !0;
					var t = c.default.getUnLockCost();
					this.diamondProLabel.string = a.default.Diamond + "/" + t, this.progress.progress = a.default.Diamond / t, a.default.Diamond >= t ? this.warn_tag.active = !0 : this.warn_tag.active = !1, this.menuNode.getComponent("MenuLayer").updateInfo()
				}, e.prototype.onStartBtnClicked = function () {
					this.mainScrollToMenu(), s.default.Audio.playEffect("click.mp3"), s.default.reportAnalytics(r.default.ReportEvt.ClickGameStart)
				}, e.prototype.mainScrollToMenu = function () {
					var t = this;
					this._isCroll || (this._isCroll = !0, this.mainNode.runAction(cc.moveBy(.3, cc.v2(cc.winSize.width, 0))), this.menuNode.runAction(cc.sequence(cc.moveBy(.3, cc.v2(cc.winSize.width, 0)), cc.callFunc(function () {
						t._isCroll = !1
					}))))
				}, e.prototype.menuScrollToMain = function () {
					var t = this;
					this._isCroll || (this._isCroll = !0, this.mainNode.runAction(cc.moveBy(.3, cc.v2(-cc.winSize.width, 0))), this.menuNode.runAction(cc.sequence(cc.moveBy(.3, cc.v2(-cc.winSize.width, 0)), cc.callFunc(function () {
						t._isCroll = !1
					}))))
				}, e.prototype.freshDiamondNum = function () {
					this.diamond.string = "" + a.default.Diamond, this.updateInfo()
				}, e.prototype.onUpGradeBtnClicked = function () {
					this.node.active = !1;
					var t = new cc.Event.EventCustom(r.default.OPEN_ASSASSIN_SHOP, !0);
					t.setUserData(this.node.name), cc.director.dispatchEvent(t), s.default.Audio.playEffect("click.mp3"), s.default.reportAnalytics(r.default.ReportEvt.EnterUpgradeFromStart)
				}, e.prototype.onAudioBtnClicked = function () {
					var t = s.default.Audio.isAudioEnalbe();
					s.default.Audio.setAudioEnable(!t), this.freshAudioIcon()
				}, e.prototype.freshAudioIcon = function () {
					s.default.Audio.isAudioEnalbe() ? (this.audioOpenIcon.active = !0, this.audioCloseIcon.active = !1) : (this.audioOpenIcon.active = !1, this.audioCloseIcon.active = !0)
				}, e.prototype.gameStart = function () {
					this.node.active = !1, a.default.PreGetDiamond = 0;
					var t = new cc.Event.EventCustom(r.default.GAME_START, !0);
					cc.director.dispatchEvent(t)
				}, i([h(cc.Label)], e.prototype, "diamond", void 0), i([h(cc.Label)], e.prototype, "startLabel", void 0), i([h(cc.Button)], e.prototype, "startBtn", void 0), i([h(cc.Button)], e.prototype, "upGradeBtn", void 0), i([h(cc.Label)], e.prototype, "upGradeLabel", void 0), i([h(cc.Label)], e.prototype, "diamondProLabel", void 0), i([h(cc.Node)], e.prototype, "assassin", void 0), i([h(cc.ProgressBar)], e.prototype, "progress", void 0), i([h(cc.Node)], e.prototype, "warn_tag", void 0), i([h(cc.Node)], e.prototype, "mainNode", void 0), i([h(cc.Node)], e.prototype, "menuNode", void 0), i([h(cc.Sprite)], e.prototype, "logo", void 0), i([h(cc.SpriteFrame)], e.prototype, "logoRes", void 0), i([h(cc.Node)], e.prototype, "audioOpenIcon", void 0), i([h(cc.Node)], e.prototype, "audioCloseIcon", void 0), e = i([u], e)
			}(cc.Component);
		o.default = p, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./AssassinData": "AssassinData",
		"./Events": "Events",
		"./Txt": "Txt",
		"./UserData": "UserData"
	}],
	TryuseAssassinLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "2ba0cDQS+xGxJah9MY5ScV3", "TryuseAssassinLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Events"),
			r = t("../YdhwSDK/YdhwSDK"),
			s = t("./GameObjectMgr"),
			c = t("./Txt"),
			d = cc._decorator,
			l = d.ccclass,
			u = d.property,
			h = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.propertyLabel = null, e.info = null, e.assassin = null, e.tryUseBtn = null, e.closeBtn = null, e.tryUseBtnLabel = null, e.closeBtnLabel = null, e._isPlayVideoStatus = !1, e._data = null, e
				}
				return n(e, t), e.prototype.start = function () {
					this.info.string = c.default.getTxt("TryAssassinInfo"), c.default.setFont(this.tryUseBtnLabel, c.default.getTxt("TryPlayNow")), c.default.setFont(this.closeBtnLabel, c.default.getTxt("NoUse")), r.default.createVideo(r.default.Platform.videoId[1])
				}, e.prototype.onDestroy = function () { }, e.prototype.setData = function (t) {
					this._data = t, this.assassin.getComponent("Assassin").setActor(t.id);
					var e = "";
					0 == t.hpPer && 0 == t.spdPer ? e = c.default.getTxt("Normal") : 0 != t.hpPer ? e = "+" + t.hpPer + "% " + c.default.getTxt("Life") : 0 != t.spdPer && (e = "+" + t.spdPer + "% " + c.default.getTxt("Speed")), c.default.setFont(this.propertyLabel, e)
				}, e.prototype.onClickedTryUse = function () {
					var t = this;
					this._isPlayVideoStatus || (this._isPlayVideoStatus = !0, r.default.showVideo(function (e) {
						if (t._isPlayVideoStatus = !1, e) {
							if (!cc.isValid(t.node)) return;
							t.node.destroy(), s.default.instance.TryAssassinId = t._data.id;
							var o = new cc.Event.EventCustom(a.default.GAME_NEXT, !0);
							cc.director.dispatchEvent(o)
						} else r.default.showToast(c.default.getTxt("Tips4"))
					}, function (e) {
						e || (t._isPlayVideoStatus = !1, r.default.showToast(c.default.getTxt("Tips5")))
					}), r.default.Audio.playEffect("click.mp3"), r.default.reportAnalytics(a.default.ReportEvt.TryUseAssassin))
				}, e.prototype.onClickedClose = function () {
					this.node.destroy(), s.default.instance.TryAssassinId = -1;
					var t = new cc.Event.EventCustom(a.default.GAME_NEXT, !0);
					cc.director.dispatchEvent(t), r.default.Audio.playEffect("click.mp3")
				}, i([u(cc.Label)], e.prototype, "propertyLabel", void 0), i([u(cc.Label)], e.prototype, "info", void 0), i([u(cc.Node)], e.prototype, "assassin", void 0), i([u(cc.Button)], e.prototype, "tryUseBtn", void 0), i([u(cc.Button)], e.prototype, "closeBtn", void 0), i([u(cc.Label)], e.prototype, "tryUseBtnLabel", void 0), i([u(cc.Label)], e.prototype, "closeBtnLabel", void 0), e = i([l], e)
			}(cc.Component);
		o.default = h, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObjectMgr": "GameObjectMgr",
		"./Txt": "Txt"
	}],
	Txt: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "c1e7eC0UIpFT7pCwcGikw9i", "Txt"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("../YdhwSDK/YdhwSDK"),
			i = {
				English: {
					NormalMode: "CLASSIC",
					BombMode: "Bomb Mode",
					ExMode: "Rescue Mode",
					SneakMode: "Sneak Mode",
					ArkMode: "Treasure",
					Mercenary: "Mercenary",
					UpgradeLabel: "Upgrade Ninja",
					HP: "HP",
					Attack: "Attack",
					RescuedSucces: "Rescued successfully",
					JoinTeam: "Mercenary has joined the team",
					Normal: "Normal",
					Life: "Life",
					Speed: "Speed",
					LevelIdx: "Level %s",
					TryAssassinInfo: "You are so lucky! You meet a new role for a free trial!",
					RandomUnLock: "Random unlock",
					GameStart: "Game Start",
					GetReward: "Get",
					NoUse: "Not use",
					Relife: "Revive",
					Reward: "Reward:",
					ThreeTimesGet: "3x claim",
					TryPlayNow: "Try now",
					ShareVideo: "Share Video",
					WatchVideo: "Watch Video",
					PassWord: "Pass",
					LevelLabel: "Level",
					BombNotice: "Bomb disposing",
					Tips1: "Locked. Can't select",
					Tips2: "Drawing a prize. Please wait!",
					Tips3: "Congratulations! You win %s diamonds. ",
					Tips4: "Watch video to get a reward",
					Tips5: "Failed to load the ad",
					Tips6: "Not enough diamonds!",
					Tips7: "Sharinig recording failed",
					ArkModeIntro: "In Sneak Mode, you will have to collect diamonds on the field without using any weapons! Be careful!",
					BombModeIntro: "Please dispose bombs with proper order and timing. And do not forget to defeat enemies around you!",
					ExModeIntro: "Your fellows have been kidnapped! Use your wit and take your weapon to save them! They will join you after saving them!",
					Difficulty: "Difficulty:",
					Return: "Back to homepage",
					SelectMode: "Select mode",
					Tips8: "Clear lv %s in Classic mode to unlock",
					Tips9: "Clear lv %s in Treasure mode to unlock",
					notOpen: "Not available",
					known: "Got it",
					NormalModeIntro: "Move like wind and kill with accuracy. This is called a Ninja Sword",
					rewardIntro: "100% winning chance",
					diamondNoEoungh: "Not enough diamonds",
					rewardText: "Randomly get [%s-%s] diamonds",
					drawNow: "Draw now",
					getSoon: "Get Now",
					videoGet3times: "Watch Video 3x claim",
					shareSelfVideo: "Share Video",
					niceTry: "Try Again",
					nextLevel: "Next Level",
					failText: "Failed",
					Tips10: "Gosh\uff0cyou have unlocked new %s.Pls Try now!",
					Tips11: "You were shot",
					Tips12: "You were blown to death"
				},
				Chinese: {
					NormalMode: "\u7ecf\u5178\u6a21\u5f0f",
					BombMode: "\u62c6\u5f39\u6a21\u5f0f",
					ExMode: "\u8425\u6551\u6a21\u5f0f",
					SneakMode: "\u6f5c\u884c\u6a21\u5f0f",
					ArkMode: "\u593a\u5b9d\u6a21\u5f0f",
					Mercenary: "\u4f63\u5175",
					UpgradeLabel: "\u5347\u7ea7\u5fcd\u8005",
					HP: "\u8840\u91cf",
					Attack: "\u653b\u51fb",
					RescuedSucces: "\u8425\u6551\u6210\u529f",
					JoinTeam: "\u4f63\u5175\u52a0\u5165\u961f\u4f0d",
					Normal: "\u666e\u901a",
					Life: "\u751f\u547d",
					Speed: "\u901f\u5ea6",
					LevelIdx: "\u7b2c%s\u5173",
					TryAssassinInfo: "\u4f60\u771f\u5e78\u8fd0\uff0c\u78b0\u4e0a\u4e86\u53ef\u514d\u8d39\u8bd5\u73a9\u7684\u65b0\u89d2\u8272\uff01",
					RandomUnLock: "\u968f\u673a\u89e3\u9501",
					GameStart: "\u5f00\u59cb\u6e38\u620f",
					GetReward: "\u9886 \u53d6",
					NoUse: "\u4e0d \u7528 \u4e86",
					Relife: "\u590d\u6d3b\u4e00\u6b21",
					Reward: "\u5956\u54c1\uff1a",
					ThreeTimesGet: "\u4e09\u500d\u9886\u53d6",
					TryPlayNow: "\u9a6c\u4e0a\u8bd5\u73a9",
					ShareVideo: "\u5206\u4eab\u89c6\u9891",
					WatchVideo: "\u89c2\u770b\u89c6\u9891",
					PassWord: "\u901a \u8fc7",
					LevelLabel: "\u5173\u5361",
					BombNotice: "\u62c6\u5f39\u4e2d",
					Tips1: "\u5c1a\u672a\u89e3\u9501\uff0c\u4e0d\u80fd\u9009\u62e9",
					Tips2: "\u62bd\u5956\u4e2d\uff0c\u8bf7\u7a0d\u540e!",
					Tips3: "\u606d\u559c\u83b7\u5f97%s\u94bb\u77f3",
					Tips4: "\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6!~",
					Tips5: "\u5e7f\u544a\u672a\u52a0\u8f7d\u6210\u529f",
					Tips6: "\u94bb\u77f3\u4e0d\u8db3!",
					Tips7: "\u5206\u4eab\u5f55\u5c4f\u5931\u8d25",
					ArkModeIntro: "\u5728\u8be5\u6a21\u5f0f\u4e2d\uff0c\u4f60\u5c06\u6682\u65f6\u4e0d\u80fd\u4f7f\u7528\u6b66\u5668\uff0c\u8bf7\u5229\u7528\u4f60\u7684\u7075\u5de7\u6b65\u4f10\u6536\u96c6\u573a\u4e0a\u7684\u94bb\u77f3\u6765\u901a\u5173\uff01",
					BombModeIntro: "\u5371\u673a\u4e00\u89e6\u5373\u53d1\uff01\u8bf7\u52a1\u5fc5\u5408\u7406\u5b89\u6392\u62c6\u5f39\u7684\u987a\u5e8f\u548c\u65f6\u95f4\uff0c\u540c\u65f6\u89e3\u51b3\u6389\u56db\u5468\u4f0f\u51fb\u7684\u654c\u4eba\uff01",
					ExModeIntro: "\u5c0f\u4f19\u4f34\u88ab\u654c\u4eba\u7ed1\u67b6\u4e86\uff01\u8fd0\u7528\u4f60\u7684\u6b66\u5668\u548c\u667a\u6167\u53bb\u89e3\u6551\uff0c\u4ed6\u4eec\u5c06\u52a0\u5165\u4f60\u7684\u961f\u4f0d\u5171\u540c\u6740\u654c\uff01",
					Difficulty: "\u96be\u5ea6\uff1a",
					Return: "\u8fd4\u56de\u4e3b\u9875",
					SelectMode: "\u9009\u62e9\u6a21\u5f0f",
					Tips8: "\u901a\u5173\u7ecf\u5178\u6a21\u5f0f%s\u5173\u89e3\u9501",
					Tips9: "\u901a\u5173\u593a\u5b9d\u6a21\u5f0f%s\u5173\u89e3\u9501",
					notOpen: "\u6682\u672a\u5f00\u653e",
					known: "\u77e5\u9053\u4e86",
					NormalModeIntro: "\u9b3c\u9b45\u7684\u6b65\u4f10+\u7cbe\u51c6\u7684\u51fb\u6740\uff0c\u8fd9\u5c31\u662f\u5fcd\u8005\u4e4b\u5203\uff01",
					rewardIntro: "100%\u4e2d\u5956",
					diamondNoEoungh: "\u94bb\u77f3\u4e0d\u591f\u5566!",
					rewardText: "\u968f\u673a\u62bd\u53d6[%s-%s]\u9897\u94bb\u77f3!",
					drawNow: "\u9a6c\u4e0a\u62bd",
					getSoon: "\u9a6c\u4e0a\u9886\u53d6",
					videoGet3times: "\u770b\u89c6\u98913\u500d\u9886\u53d6",
					shareSelfVideo: "\u5206\u4eab\u5f55\u5c4f",
					niceTry: "\u518d\u6b21\u5c1d\u8bd5",
					nextLevel: "\u4e0b\u4e00\u5173",
					failText: "\u5931\u8d25",
					Tips10: "\u5929\u5566\uff0c\u4f60\u5c45\u7136\u89e3\u9501\u4e86%s\u6a21\u5f0f\uff01\u8981\u9a6c\u4e0a\u8bd5\u73a9\u5417\uff1f",
					Tips11: "\u4f60\u88ab\u67aa\u6740\u4e86",
					Tips12: "\u4f60\u88ab\u70b8\u6b7b\u4e86"
				},
				Portuguese: {
					NormalMode: "CL\xc1SSICO",
					BombMode: "Modo Bomba",
					ExMode: "Modo Resgate",
					SneakMode: "Modo Furtivo",
					ArkMode: "Tesouro",
					Mercenary: "Mercen\xe1rio",
					UpgradeLabel: "Melhorar Ninja",
					HP: "PV",
					Attack: "Atacar",
					RescuedSucces: "Resgate com sucesso",
					JoinTeam: "O Mercen\xe1rio se juntou \xe0 equipe",
					Normal: "Normal",
					Life: "Vida",
					Speed: "Velocidade",
					LevelIdx: "N\xedvel %s",
					TryAssassinInfo: "Espada NinjaVoc\xea tem muita sorte! Voc\xea recebeu uma nova fun\xe7\xe3o para um teste gr\xe1tis!",
					RandomUnLock: "Desbloqueio aleat\xf3rio",
					GameStart: "In\xedcio de jogo",
					GetReward: "Obter",
					NoUse: "N\xe3o usar",
					Relife: "Reviver",
					Reward: "Recompensa:",
					ThreeTimesGet: "Reivindica\xe7\xe3o 3x",
					TryPlayNow: "Experimente agora",
					ShareVideo: "Compartilhar v\xeddeo",
					WatchVideo: "Assistir ao v\xeddeo",
					PassWord: "Senha",
					LevelLabel: "N\xedvel",
					BombNotice: "Disposi\xe7\xe3o de bombas",
					Tips1: "Bloqueado. N\xe3o \xe9 poss\xedvel selecionar.",
					Tips2: "Sorteando um pr\xeamio. Por favor, aguarde.!",
					Tips3: "Parab\xe9ns! Voc\xea ganhou %s diamantes. ",
					Tips4: "Assista ao v\xeddeo para receber uma recompensa",
					Tips5: "Falha ao carregar o an\xfancio",
					Tips6: "Diamantes insuficientes!",
					Tips7: "Falha no registro do compartilhamento",
					ArkModeIntro: "No Modo Furtivo, voc\xea ter\xe1 que coletar diamantes no campo sem usar nenhuma arma! Tenha cuidado!",
					BombModeIntro: "Disponha as bombas na ordem e no momento certo. E n\xe3o se esque\xe7a de derrotar os inimigos ao seu redor!",
					ExModeIntro: "Seus companheiros foram sequestrados! Use sua intelig\xeancia e pegue sua arma para salv\xe1-los! Eles se juntar\xe3o a voc\xea depois que voc\xea os salvar!",
					Difficulty: "Dificuldade:",
					Return: "Voltar para a p\xe1gina inicial",
					SelectMode: "Selecione o modo",
					Tips8: "Conclua o Nv. %s no modo Cl\xe1ssico para desbloquear",
					Tips9: "Conclua o Nv. %s no modo Tesouro para desbloquear",
					notOpen: "N\xe3o dispon\xedvel",
					known: "Entendi",
					NormalModeIntro: "Mova-se como o vento e abata com precis\xe3o. Isso \xe9 chamado de uma Espada Ninja.",
					rewardIntro: "100% de chance de ganhar",
					diamondNoEoungh: "Diamantes insuficientes",
					rewardText: "Obtenha aleatoriamente [%s-%s] diamantes",
					drawNow: "Sortear agora",
					getSoon: "Obter",
					videoGet3times: "Assistir ao v\xeddeo.Reivindica\xe7\xe3o 3x",
					shareSelfVideo: "Compartilhar v\xeddeo",
					niceTry: "Tente novamente",
					nextLevel: "Pr\xf3ximo n\xedvel",
					failText: "Falhou",
					Tips10: "Puxa, voc\xea desbloqueou o novo modo %s.Voc\xea quer tentar?",
					Tips11: "voc\xea foi baleado",
					Tips12: "Voc\xea foi soprado para a morte"
				},
				Indonesian: {
					NormalMode: "KLASIK",
					BombMode: "Mode Bom",
					ExMode: "Mode Pertolongan",
					SneakMode: "Mode Senyap",
					ArkMode: "Harta Karun",
					Mercenary: "Tentara bayaran",
					UpgradeLabel: "Upgrade Ninja",
					HP: "HP",
					Attack: "Serangan",
					RescuedSucces: "Berhasil ditolong",
					JoinTeam: "Tentara bayaran sudah bergabung dengan tim",
					Normal: "Normal",
					Life: "Kehidupan",
					Speed: "Kecepatan",
					LevelIdx: "Level %s",
					TryAssassinInfo: "Kamu begitu beruntung! Kamu mematuhi kriteria peran baru untuk coba gratis!",
					RandomUnLock: "Buka acak",
					GameStart: "Game Mulai",
					GetReward: "Dapatkan",
					NoUse: "Tidak digunakan",
					Relife: "Hidupkan kembali",
					Reward: "Imbalan:",
					ThreeTimesGet: "3x klaim",
					TryPlayNow: "Coba sekarang",
					ShareVideo: "Bagikan Video",
					WatchVideo: "Tonton Video",
					PassWord: "Kata sandi",
					LevelLabel: "Level",
					BombNotice: "Pembuangan bom",
					Tips1: "Dikunci. Tidak bisa dipilih",
					Tips2: "Menarik hadiah. Harap tunggu",
					Tips3: "Selamat! Kamu memenangkan %s berlian. ",
					Tips4: "Tonton video untuk mendapatkan hadiah",
					Tips5: "Gagal memuat iklan",
					Tips6: "Berlian tidak cukup!",
					Tips7: "Gagal berbagi rekaman",
					ArkModeIntro: "Dalam Mode Senyap, kamu harus mengumpulkan berlian di lokasi itu tanpa menggunakan senjata! Hati-hatilah!",
					BombModeIntro: "Buang bom dengan urutan dan waktu yang tepat. Dan jangan lupa, kalahkan musuh-musuh di sekitarmu!",
					ExModeIntro: "Pengikutmu ditangkap! Gunakan akalmu dan ambil senjata untuk menyelamatkan mereka! Mereka akan bergabung kamu setelah menyelamatkan mereka!",
					Difficulty: "Tingkat kesulitan:",
					Return: "Kembali ke beranda",
					SelectMode: "Pilih mode",
					Tips8: "Tuntaskan lv %s dalam mode Klasik untuk membuka",
					Tips9: "Tuntaskan lv %s dalam mode Harta Karun untuk membuka",
					notOpen: "Tidak tersedia",
					known: "Paham",
					NormalModeIntro: "Bergerak seperti angin dan membunuh dengan akurat. Ini disebut Pedang Ninja",
					rewardIntro: "100% kesempatan menang",
					diamondNoEoungh: "Berlian tidak cukup",
					rewardText: "Secara acak dapatkan [%s-%s] berlian",
					drawNow: "Tarik sekarang",
					getSoon: "Dapatkan",
					videoGet3times: "Tonton Video 3x klaim",
					shareSelfVideo: "Bagikan Video",
					niceTry: "Coba Lagi",
					nextLevel: "Level selanjutnya",
					failText: "Gagal",
					Tips10: "Astaga, Anda telah membuka kunci mode %s baru. Apakah Anda ingin mencoba?",
					Tips11: "Anda tertembak",
					Tips12: "Anda diledakkan sampai mati"
				},
				Thai: {
					NormalMode: "\u7ecf\u5178\u6a21\u5f0f",
					BombMode: "\u62c6\u5f39\u6a21\u5f0f",
					ExMode: "\u8425\u6551\u6a21\u5f0f",
					SneakMode: "\u6f5c\u884c\u6a21\u5f0f",
					ArkMode: "\u593a\u5b9d\u6a21\u5f0f",
					Mercenary: "\u4f63\u5175",
					UpgradeLabel: "\u5347\u7ea7\u5fcd\u8005",
					HP: "\u8840\u91cf",
					Attack: "\u653b\u51fb",
					RescuedSucces: "\u8425\u6551\u6210\u529f",
					JoinTeam: "\u4f63\u5175\u52a0\u5165\u961f\u4f0d",
					Normal: "\u666e\u901a",
					Life: "\u751f\u547d",
					Speed: "\u901f\u5ea6",
					LevelIdx: "\u7b2c%s\u5173",
					TryAssassinInfo: "\u4f60\u771f\u5e78\u8fd0\uff0c\u78b0\u4e0a\u4e86\u53ef\u514d\u8d39\u8bd5\u73a9\u7684\u65b0\u89d2\u8272\uff01",
					RandomUnLock: "\u968f\u673a\u89e3\u9501",
					GameStart: "\u5f00\u59cb\u6e38\u620f",
					GetReward: "\u9886 \u53d6",
					NoUse: "\u4e0d \u7528 \u4e86",
					Relife: "\u590d\u6d3b\u4e00\u6b21",
					Reward: "\u5956\u54c1\uff1a",
					ThreeTimesGet: "\u4e09\u500d\u9886\u53d6",
					TryPlayNow: "\u9a6c\u4e0a\u8bd5\u73a9",
					ShareVideo: "\u5206\u4eab\u89c6\u9891",
					WatchVideo: "\u89c2\u770b\u89c6\u9891",
					PassWord: "\u901a \u8fc7",
					LevelLabel: "\u5173\u5361",
					BombNotice: "\u62c6\u5f39\u4e2d",
					Tips1: "\u5c1a\u672a\u89e3\u9501\uff0c\u4e0d\u80fd\u9009\u62e9",
					Tips2: "\u62bd\u5956\u4e2d\uff0c\u8bf7\u7a0d\u540e!",
					Tips3: "\u606d\u559c\u83b7\u5f97%s\u94bb\u77f3",
					Tips4: "\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6!~",
					Tips5: "\u5e7f\u544a\u672a\u52a0\u8f7d\u6210\u529f",
					Tips6: "\u94bb\u77f3\u4e0d\u8db3!",
					Tips7: "\u5206\u4eab\u5f55\u5c4f\u5931\u8d25",
					ArkModeIntro: "\u5728\u8be5\u6a21\u5f0f\u4e2d\uff0c\u4f60\u5c06\u6682\u65f6\u4e0d\u80fd\u4f7f\u7528\u6b66\u5668\uff0c\u8bf7\u5229\u7528\u4f60\u7684\u7075\u5de7\u6b65\u4f10\u6536\u96c6\u573a\u4e0a\u7684\u94bb\u77f3\u6765\u901a\u5173\uff01",
					BombModeIntro: "\u5371\u673a\u4e00\u89e6\u5373\u53d1\uff01\u8bf7\u52a1\u5fc5\u5408\u7406\u5b89\u6392\u62c6\u5f39\u7684\u987a\u5e8f\u548c\u65f6\u95f4\uff0c\u540c\u65f6\u89e3\u51b3\u6389\u56db\u5468\u4f0f\u51fb\u7684\u654c\u4eba\uff01",
					ExModeIntro: "\u5c0f\u4f19\u4f34\u88ab\u654c\u4eba\u7ed1\u67b6\u4e86\uff01\u8fd0\u7528\u4f60\u7684\u6b66\u5668\u548c\u667a\u6167\u53bb\u89e3\u6551\uff0c\u4ed6\u4eec\u5c06\u52a0\u5165\u4f60\u7684\u961f\u4f0d\u5171\u540c\u6740\u654c\uff01",
					Difficulty: "\u96be\u5ea6\uff1a",
					Return: "\u8fd4\u56de\u4e3b\u9875",
					SelectMode: "\u9009\u62e9\u6a21\u5f0f",
					Tips8: "\u7ecf\u5178\u6a21\u5f0f%s\u5173\u89e3\u9501",
					Tips9: "\u593a\u5b9d\u6a21\u5f0f%s\u5173\u89e3\u9501",
					notOpen: "\u6682\u672a\u5f00\u653e",
					known: "\u77e5\u9053\u4e86",
					NormalModeIntro: "\u9b3c\u9b45\u7684\u6b65\u4f10+\u7cbe\u51c6\u7684\u51fb\u6740\uff0c\u8fd9\u5c31\u662f\u5fcd\u8005\u4e4b\u5203\uff01",
					rewardIntro: "100%\u4e2d\u5956",
					diamondNoEoungh: "\u94bb\u77f3\u4e0d\u591f\u5566!",
					rewardText: "\u968f\u673a\u62bd\u53d6[%s-%s]\u9897\u94bb\u77f3!",
					drawNow: "\u9a6c\u4e0a\u62bd",
					getSoon: "\u9a6c\u4e0a\u9886\u53d6",
					videoGet3times: "\u770b\u89c6\u98913\u500d\u9886\u53d6",
					shareSelfVideo: "\u5206\u4eab\u5f55\u5c4f",
					niceTry: "\u518d\u6b21\u5c1d\u8bd5",
					nextLevel: "\u4e0b\u4e00\u5173",
					failText: "\u5931\u8d25",
					Tips10: "\u5929\u5566\uff0c\u4f60\u5c45\u7136\u89e3\u9501\u4e86%s\u6a21\u5f0f\uff01\u8981\u9a6c\u4e0a\u8bd5\u73a9\u5417\uff1f",
					Tips11: "\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e22\u0e34\u0e07",
					Tips12: "\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e40\u0e1b\u0e48\u0e32\u0e08\u0e19\u0e15\u0e32\u0e22"
				},
				Hindi: {
					NormalMode: "\u0915\u094d\u200d\u0932\u093e\u0938\u093f\u0915",
					BombMode: "\u092c\u092e \u092e\u094b\u0921",
					ExMode: "\u092c\u091a\u093e\u0935 \u092e\u094b\u0921",
					SneakMode: "\u0917\u0941\u092a\u094d\u200d\u0924 \u092e\u094b\u0921",
					ArkMode: "\u0916\u091c\u093e\u0928\u093e",
					Mercenary: "\u092d\u093e\u0921\u093c\u094b\u0924\u094d\u0930\u0940",
					UpgradeLabel: "\u0928\u093f\u0902\u091c\u093e \u0905\u092a\u0917\u094d\u0930\u0947\u0921 \u0915\u0930\u0947\u0902",
					HP: "Hp",
					Attack: "\u0939\u092e\u0932\u093e",
					RescuedSucces: "\u0938\u092b\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u092c\u091a\u093e\u092f\u093e \u0932\u093f\u092f\u093e \u0917\u092f\u093e",
					JoinTeam: "\u0938\u094d\u200d\u0935\u093e\u0930\u094d\u0925\u0940 \u091f\u0940\u092e \u092e\u0947\u0902 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b \u0917\u092f\u093e \u0939\u0948",
					Normal: "\u0938\u093e\u092e\u093e\u0928\u094d\u200d\u092f",
					Life: "\u0932\u093e\u0907\u092b",
					Speed: "\u0917\u0924\u093f",
					LevelIdx: "\u0932\u0947\u0935\u0932 %s",
					TryAssassinInfo: "\u0906\u092a \u092c\u0939\u0941\u0924 \u092d\u093e\u0917\u094d\u092f\u0936\u093e\u0932\u0940 \u0939\u0948\u0902! \u0906\u092a \u090f\u0915 \u0928\u093f\u0936\u0941\u0932\u094d\u0915 \u0906\u091c\u092e\u093e\u0907\u0936 \u0915\u0947 \u0932\u093f\u090f \u090f\u0915 \u0928\u0908 \u092d\u0942\u092e\u093f\u0915\u093e \u0938\u0947 \u092e\u093f\u0932\u0924\u0947 \u0939\u0948\u0902!",
					RandomUnLock: "\u092c\u0947\u0924\u0930\u0924\u0940\u092c \u0905\u0928\u0932\u0949\u0915 \u0915\u0930\u0947\u0902",
					GameStart: "\u0917\u0947\u092e \u0936\u0941\u0930\u0941 \u0915\u0930\u0947\u0902",
					GetReward: "\u092a\u093e\u090f\u0902",
					NoUse: "\u092a\u094d\u0930\u092f\u094b\u0917 \u0928\u0939\u0940\u0902",
					Relife: "\u092a\u0941\u0928\u0930\u094d\u091c\u0940\u0935\u093f\u0924",
					Reward: "\u0907\u0928\u093e\u092e:",
					ThreeTimesGet: "3x \u092a\u0930 \u0926\u093e\u0935\u093e \u0915\u0930\u0947\u0902",
					TryPlayNow: "\u0905\u092d\u0940 \u0906\u091c\u092e\u093e\u090f\u0902",
					ShareVideo: "\u0935\u0940\u0921\u093f\u092f\u094b \u0938\u093e\u0902\u0902\u091d\u093e \u0915\u0930\u0947\u0902",
					WatchVideo: "\u0935\u0940\u0921\u093f\u092f\u094b \u0926\u0947\u0916\u0947\u0902",
					PassWord: "\u092a\u093e\u0938\u0935\u0930\u094d\u0921",
					LevelLabel: "\u0932\u0947\u0935\u0932",
					BombNotice: "\u092c\u092e \u0928\u093f\u092a\u091f\u093e\u0928\u093e",
					Tips1: "\u0932\u0949\u0915 \u0915\u0930 \u0926\u093f\u092f\u093e\u0964 \u091a\u0941\u0928 \u0928\u0939\u0940\u0902 \u0938\u0915\u0924\u0947",
					Tips2: "\u092a\u0941\u0930\u0938\u094d\u0915\u093e\u0930 \u092c\u0928\u093e\u090f\u0902\u0964 \u0915\u0943\u092a\u092f\u093e \u0907\u0902\u0924\u091c\u093e\u0930 \u0915\u0930\u0947\u0902!",
					Tips3: "\u092c\u0927\u093e\u0908 \u0939\u094b! \u0906\u092a\u0928\u0947 %s \u0939\u0940\u0930\u0947 \u091c\u0940\u0924\u0947\u0964 ",
					Tips4: "\u090f\u0915 \u0930\u093f\u0935\u0949\u0930\u094d\u0921 \u092a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0935\u0940\u0921\u093f\u092f\u094b \u0926\u0947\u0916\u0947\u0902",
					Tips5: "\u0935\u093f\u091c\u094d\u091e\u093e\u092a\u0928 \u0932\u094b\u0921 \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0935\u093f\u092b\u0932",
					Tips6: "\u092a\u0930\u094d\u092f\u093e\u092a\u094d\u200d\u0924 \u0939\u0940\u0930\u0947 \u0928\u0939\u0940\u0902 \u0939\u0948!",
					Tips7: "\u0930\u093f\u0915\u0949\u0930\u094d\u0921\u093f\u0902\u0917 \u0938\u093e\u0902\u091d\u093e \u0915\u0930\u0928\u093e \u0935\u093f\u092b\u0932 \u0930\u0939\u0940",
					ArkModeIntro: "\u0917\u0941\u092a\u094d\u200d\u0924 \u092e\u094b\u0921 \u092e\u0947\u0902, \u0906\u092a\u0915\u094b \u0915\u093f\u0938\u0940 \u092d\u0940 \u0939\u0925\u093f\u092f\u093e\u0930 \u0915\u093e \u092a\u094d\u0930\u092f\u094b\u0917 \u0915\u093f\u090f \u092c\u093f\u0928\u093e \u0939\u0940\u0930\u094b\u0902 \u0915\u094b \u092e\u0948\u0926\u093e\u0928 \u092a\u0930 \u090f\u0915\u0924\u094d\u0930\u093f\u0924 \u0915\u0930\u0928\u093e \u0939\u094b\u0917\u093e! \u0938\u093e\u0935\u0927\u093e\u0928 \u0930\u0939\u0947!",
					BombModeIntro: "\u0915\u0943\u092a\u092f\u093e \u0909\u091a\u093f\u0924 \u0915\u094d\u0930\u092e \u0914\u0930 \u0938\u092e\u092f \u0915\u0947 \u0938\u093e\u0925 \u092c\u092e \u0915\u094b \u0928\u093f\u092a\u091f\u093e\u090f\u0902\u0964 \u0914\u0930 \u0905\u092a\u0928\u0947 \u091a\u093e\u0930\u094b\u0902 \u0913\u0930 \u0926\u0941\u0936\u094d\u092e\u0928\u094b\u0902 \u0915\u094b \u0939\u0930\u093e\u0928\u093e \u092e\u0924 \u092d\u0942\u0932\u0947\u0902!",
					ExModeIntro: "\u0906\u092a\u0915\u0947 \u0938\u093e\u0925\u093f\u092f\u094b\u0902 \u0915\u093e \u0905\u092a\u0939\u0930\u0923 \u0915\u0930 \u0932\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948! \u0909\u0928\u094d\u0939\u0947\u0902 \u092c\u091a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0905\u092a\u0928\u0940 \u092c\u0941\u0926\u094d\u0927\u093f \u0915\u093e \u092a\u094d\u0930\u092f\u094b\u0917 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0905\u092a\u0928\u0947 \u0939\u0925\u093f\u092f\u093e\u0930 \u0932\u0947 \u0932\u094b! \u0909\u0928\u094d\u0939\u0947\u0902 \u092c\u091a\u093e\u0928\u0947 \u0915\u0947 \u092c\u093e\u0926 \u0935\u0947 \u0906\u092a \u092e\u0947\u0902 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b\u0902\u0917\u0947!",
					Difficulty: "\u0915\u0920\u093f\u0928\u093e\u0908:",
					Return: "\u0939\u094b\u092e\u092a\u0947\u091c \u092a\u0930 \u0935\u093e\u092a\u0938 \u091c\u093e\u090f\u0902",
					SelectMode: "\u092e\u094b\u0921 \u091a\u0941\u0928\u0947\u0902",
					Tips8: "\u0905\u0928\u0932\u0949\u0915 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0915\u094d\u0932\u093e\u0938\u093f\u0915 \u092e\u094b\u0921 \u092e\u0947\u0902 lv %s \u092a\u093e\u0930 \u0915\u0930\u0947\u0902",
					Tips9: "\u0905\u0928\u0932\u0949\u0915 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0916\u091c\u093e\u0928\u093e \u092e\u094b\u0921 \u092e\u0947\u0902 lv %s \u092a\u093e\u0930 \u0915\u0930\u0947\u0902",
					notOpen: "\u0909\u092a\u0932\u092c\u094d\u200d\u0927 \u0928\u0939\u0940\u0902",
					known: "\u0938\u092e\u091d \u0917\u090f",
					NormalModeIntro: "\u0939\u0935\u093e \u0915\u0940 \u0924\u0930\u0939 \u091a\u0932\u0947\u0902 \u0914\u0930 \u0938\u091f\u0940\u0915\u0924\u093e \u0915\u0947 \u0938\u093e\u0925 \u092e\u093e\u0930\u0947\u0902\u0964 \u0907\u0938\u0947 \u0928\u093f\u0902\u091c\u093e \u0924\u0932\u0935\u093e\u0930 \u0915\u0939\u093e \u091c\u093e\u0924\u093e \u0939\u0948",
					rewardIntro: "100% \u091c\u0940\u0924\u0928\u0947 \u0915\u093e \u092e\u094c\u0915\u093e",
					diamondNoEoungh: "\u092a\u0930\u094d\u092f\u093e\u092a\u094d\u0924 \u0939\u0940\u0930\u0947 \u0928\u0939\u0940\u0902",
					rewardText: "\u092c\u0947\u0924\u0930\u0924\u0940\u092c \u0922\u0902\u0917 \u0938\u0947 \u092e\u093f\u0932\u0924\u093e \u0939\u0948 [%s-%s] \u0939\u0940\u0930\u0947",
					drawNow: "\u0905\u092d\u0940 \u0921\u094d\u0930\u0949 \u0915\u0930\u0947\u0902",
					getSoon: "\u092a\u093e\u090f\u0902",
					videoGet3times: "\u0935\u0940\u0921\u093f\u092f\u094b \u0926\u0947\u0916\u0947\u0902 3x \u092a\u0930 \u0926\u093e\u0935\u093e \u0915\u0930\u0947\u0902",
					shareSelfVideo: "\u0935\u0940\u0921\u093f\u092f\u094b \u0938\u093e\u0902\u0902\u091d\u093e \u0915\u0930\u0947\u0902",
					niceTry: "\u092b\u093f\u0930 \u0938\u0947 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u094b",
					nextLevel: "\u0905\u0917\u0932\u093e \u0938\u094d\u0924\u0930",
					failText: "\u0935\u093f\u092b\u0932",
					Tips10: "\u092d\u0917\u0935\u093e\u0928, \u0906\u092a\u0928\u0947 \u0928\u092f\u093e \u092e\u094b\u0921 \u0916\u094b\u0932 \u0926\u093f\u092f\u093e \u0939\u0948 %s, \u0915\u094d\u092f\u093e \u0906\u092a \u0907\u0938\u0947 \u0906\u091c\u093c\u092e\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902?",
					Tips11: "\u0906\u092a\u0915\u094b \u0917\u094b\u0932\u0940 \u092e\u093e\u0930 \u0926\u0940 \u0917\u0908",
					Tips12: "\u0906\u092a \u0915\u094b \u092e\u094c\u0924 \u0915\u0947 \u0918\u093e\u091f \u0909\u0924\u093e\u0930 \u0926\u093f\u092f\u093e \u0917\u092f\u093e"
				},
				Vietnamese: {
					NormalMode: "C\u1ed4 \u0110I\u1ec2N",
					BombMode: "Ch\u1ebf \u0111\u1ed9 Bom",
					ExMode: "Ch\u1ebf \u0111\u1ed9 Gi\u1ea3i C\u1ee9u",
					SneakMode: "Ch\u1ebf \u0111\u1ed9 L\xe9n L\xfat",
					ArkMode: "Kho b\xe1u",
					Mercenary: "L\xednh \u0111\xe1nh thu\xea",
					UpgradeLabel: "N\xe2ng c\u1ea5p ninja",
					HP: "HP",
					Attack: "T\u1ea5n c\xf4ng",
					RescuedSucces: "\u0110\xe3 gi\u1ea3i c\u1ee9u th\xe0nh c\xf4ng",
					JoinTeam: "L\xednh \u0111\xe1nh thu\xea \u0111\xe3 v\xe0o \u0111\u1ed9i",
					Normal: "Th\u01b0\u1eddng",
					Life: "Cu\u1ed9c s\u1ed1ng",
					Speed: "T\u1ed1c \u0111\u1ed9",
					LevelIdx: "C\u1ea5p %s",
					TryAssassinInfo: "B\u1ea1n th\u1eadt may m\u1eafn! B\u1ea1n \u0111\xe3 g\u1eb7p m\u1ed9t vai tr\xf2 m\u1edbi \u0111\u1ec3 th\u1eed mi\u1ec5n ph\xed!",
					RandomUnLock: "M\u1edf kh\xf3a ng\u1eabu nhi\xean",
					GameStart: "B\u1eaft \u0111\u1ea7u",
					GetReward: "Nh\u1eadn",
					NoUse: "Kh\xf4ng d\xf9ng",
					Relife: "H\u1ed3i ph\u1ee5c",
					Reward: "Ph\u1ea7n th\u01b0\u1edfng:",
					ThreeTimesGet: "Nh\u1eadn 3x",
					TryPlayNow: "Th\u1eed ngay",
					ShareVideo: "Chia s\u1ebb video",
					WatchVideo: "Xem Video",
					PassWord: "Pass",
					LevelLabel: "C\u1ea5p",
					BombNotice: "G\u1ee1 bom",
					Tips1: "B\u1ecb kh\xf3a. Kh\xf4ng th\u1ec3 ch\u1ecdn",
					Tips2: "\u0110ang r\xfat th\u0103m gi\u1ea3i. H\xe3y \u0111\u1ee3i!",
					Tips3: "Ch\xfac m\u1eebng! B\u1ea1n gi\xe0nh %s kim c\u01b0\u01a1ng.",
					Tips4: "Xem video \u0111\u1ec3 nh\u1eadn th\u01b0\u1edfng",
					Tips5: "T\u1ea3i qu\u1ea3ng c\xe1o th\u1ea5t b\u1ea1i",
					Tips6: "Kh\xf4ng \u0111\u1ee7 Kim c\u01b0\u01a1ng!",
					Tips7: "Chia s\u1ebb b\u1ea3n thu th\u1ea5t b\u1ea1i",
					ArkModeIntro: "Trong ch\u1ebf \u0111\u1ed9 L\xe9n L\xfat, b\u1ea1n ph\u1ea3i l\u1ea5y kim c\u01b0\u01a1ng tr\xean chi\u1ebfn tr\u01b0\u1eddng m\xe0 kh\xf4ng d\xf9ng v\u0169 kh\xed n\xe0o! H\xe3y",
					BombModeIntro: "H\xe3y g\u1ee1 bom \u0111\xfang th\u1ee9 t\u1ef1 v\xe0 th\u1eddi gian. \u0110\u1eebng qu\xean nh\u1eefng k\u1ebb th\xf9 xung quanh b\u1ea1n!",
					ExModeIntro: "\u0110\u1ed3ng \u0111\u1ed9i c\u1ee7a b\u1ea1n \u0111\xe3 b\u1ecb b\u1eaft c\xf3c! H\xe3y d\xf9ng tr\xed th\xf4ng minh v\xe0 v\u0169 kh\xed \u0111\u1ec3 c\u1ee9u h\u1ecd! H\u1ecd s\u1ebd tham gia c\xf9ng b\u1ea1n sau khi \u0111\u01b0\u1ee3c c\u1ee9u!",
					Difficulty: "\u0110\u1ed9 kh\xf3:",
					Return: "Tr\u1edf v\u1ec1 trang ch\u1ee7",
					SelectMode: "Ch\u1ecdn ch\u1ebf \u0111\u1ed9",
					Tips8: "Ho\xe0n t\u1ea5t m\xe0n %s trong ch\u1ebf \u0111\u1ed9 C\u1ed5 \u0110i\u1ec3n \u0111\u1ec3 m\u1edf kh\xf3a",
					Tips9: "Ho\xe0n t\u1ea5t m\xe0n %s trong ch\u1ebf \u0111\u1ed9 Kho B\xe1u \u0111\u1ec3 m\u1edf kh\xf3a",
					notOpen: "Kh\xf4ng c\xf3 s\u1eb5n",
					known: "\u0110\xe3 bi\u1ebft",
					NormalModeIntro: "Di chuy\u1ec3n nh\u01b0 gi\xf3, ti\xeau di\u1ec7t ch\xednh x\xe1c. \u0110\xf3 g\u1ecdi l\xe0 L\u01b0\u1ee1i Ki\u1ebfm Ninja",
					rewardIntro: "C\u01a1 h\u1ed9i th\u1eafng 100%",
					diamondNoEoungh: "Kh\xf4ng \u0111\u1ee7 Kim c\u01b0\u01a1ng",
					rewardText: "Nh\u1eadn ng\u1eabu nhi\xean [%s-%s] kim c\u01b0\u01a1ng",
					drawNow: "R\xfat th\u0103m",
					getSoon: "Nh\u1eadn",
					videoGet3times: "Xem Video.Nh\u1eadn 3x",
					shareSelfVideo: "Chia s\u1ebb video",
					niceTry: "Th\u1eed l\u1ea1i",
					nextLevel: "C\u1ea5p \u0111\u1ed9 ti\u1ebfp theo",
					failText: "Th\u1ea5t b\u1ea1i",
					Tips10: "Tr\u1eddi \u1ea1, b\u1ea1n \u0111\xe3 m\u1edf kh\xf3a ch\u1ebf \u0111\u1ed9 m\u1edbi %s. B\u1ea1n mu\u1ed1n th\u1eed n\xf3 ngay b\xe2y gi\u1edd?",
					Tips11: "b\u1ea1n \u0111\xe3 b\u1ecb b\u1eafn",
					Tips12: "B\u1ea1n \u0111\xe3 b\u1ecb th\u1ed5i \u0111\u1ebfn ch\u1ebft"
				},
				Arabic: {
					NormalMode: "\u0643\u0644\u0627\u0633\u064a\u0643\u064a",
					BombMode: "\u0648\u0636\u0639 \u0648\u0636\u0639 \u0627\u0644\u0642\u0646\u0627\u0628\u0644",
					ExMode: "\u0648\u0636\u0639 \u0627\u0644\u0625\u0646\u0642\u0627\u0630",
					SneakMode: "\u0648\u0636\u0639 \u0627\u0644\u062a\u0633\u0644\u0644",
					ArkMode: "\u0643\u0646\u0632",
					Mercenary: "\u0627\u0644\u0645\u0631\u062a\u0632\u0642\u0629",
					UpgradeLabel: "\u062a\u0631\u0642\u064a\u0629 \u0627\u0644\u0646\u064a\u0646\u062c\u0627",
					HP: "\u0646\u0642\u0627\u0637 \u0627\u0644\u0635\u062d\u0629",
					Attack: "\u0627\u0644\u0647\u062c\u0648\u0645",
					RescuedSucces: "\u0646\u062c\u062d \u0627\u0644\u0625\u0646\u0642\u0627\u0630",
					JoinTeam: "\u0627\u0646\u0636\u0645 \u0645\u0631\u062a\u0632\u0642 \u0625\u0644\u0649 \u0641\u0631\u064a\u0642\u0643",
					Normal: "\u0639\u0627\u062f\u064a",
					Life: "\u0627\u0644\u062d\u064a\u0627\u0629",
					Speed: "\u0633\u0631\u0639\u0629",
					LevelIdx: "\u0627\u0644\u0645\u0633\u062a\u0648\u0649 %s",
					TryAssassinInfo: "\u0644\u0642\u062f \u062d\u0627\u0644\u0641\u0643 \u0627\u0644\u062d\u0638! \u0623\u0635\u0628\u062d\u062a \u0645\u0624\u0647\u0644\u0627\u064b \u0644\u062f\u0648\u0631 \u062c\u062f\u064a\u062f \u0641\u064a \u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629!",
					RandomUnLock: "\u0641\u062a\u062d \u0639\u0634\u0648\u0627\u0626\u064a",
					GameStart: "\u0628\u062f\u0621 \u0627\u0644\u0644\u0639\u0628\u0629",
					GetReward: "\u0627\u0633\u062a\u0644\u0645",
					NoUse: "\u0644\u0627 \u064a\u0633\u062a\u062e\u062f\u0645",
					Relife: "\u0625\u062d\u064a\u0627\u0621",
					Reward: "\u0627\u0644\u0645\u0643\u0627\u0641\u0623\u0629:",
					ThreeTimesGet: "\u0645\u0637\u0627\u0644\u0628\u0629 3x",
					TryPlayNow: "\u062c\u0631\u0628 \u0627\u0644\u0622\u0646",
					ShareVideo: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
					WatchVideo: "\u0645\u0634\u0627\u0647\u062f\u0629 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
					PassWord: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631",
					LevelLabel: "\u0627\u0644\u0645\u0633\u062a\u0648\u0649",
					BombNotice: "\u0631\u0645\u064a \u0627\u0644\u0642\u0646\u0628\u0644\u0629",
					Tips1: "\u0645\u0642\u0641\u0644. \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631",
					Tips2: "\u064a\u062c\u0631\u064a \u0633\u062d\u0628 \u062c\u0627\u0626\u0632\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631!",
					Tips3: "\u0645\u0628\u0631\u0648\u0643! \u0644\u0642\u062f \u0631\u0628\u062d\u062a %s \u0645\u0627\u0633. ",
					Tips4: "\u0634\u0627\u0647\u062f \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u0644\u062a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0645\u0643\u0627\u0641\u0623\u0629",
					Tips5: "\u0641\u0634\u0644 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0625\u0639\u0644\u0627\u0646",
					Tips6: "\u0627\u0644\u0645\u0627\u0633 \u0644\u0627 \u064a\u0643\u0641\u064a!",
					Tips7: "\u0641\u0634\u0644\u062a \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u062a\u0633\u062c\u064a\u0644",
					ArkModeIntro: "\u0641\u064a \u0648\u0636\u0639 \u0627\u0644\u062a\u0633\u0644\u0644\u060c \u0639\u0644\u064a\u0643 \u062c\u0645\u0639 \u0627\u0644\u0645\u0627\u0633 \u062f\u0648\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u064a \u0633\u0644\u0627\u062d! \u0643\u0646 \u062d\u0630\u0631\u064b\u0627!",
					BombModeIntro: "\u064a\u0631\u062c\u0649 \u0631\u0645\u064a \u0627\u0644\u0642\u0646\u0627\u0628\u0644 \u0628\u0627\u0644\u062a\u0631\u062a\u064a\u0628 \u0648\u0627\u0644\u062a\u0648\u0642\u064a\u062a \u0627\u0644\u0635\u062d\u064a\u062d\u060c \u0648\u0644\u0627 \u062a\u0646\u0633\u064e \u0647\u0632\u064a\u0645\u0629 \u0627\u0644\u0623\u0639\u062f\u0627\u0621 \u062d\u0648\u0644\u0643!",
					ExModeIntro: "\u062a\u0639\u0631\u0636 \u0623\u0635\u062f\u0642\u0627\u0624\u0643 \u0644\u0644\u0627\u062e\u062a\u0637\u0627\u0641! \u0627\u0633\u062a\u062e\u062f\u0645 \u0630\u0643\u0627\u0621\u0643 \u0648\u0633\u0644\u0627\u062d\u0643 \u0644\u0625\u0646\u0642\u0627\u0630\u0647\u0645! \u0633\u064a\u0636\u0645 \u0643\u0644 \u0645\u0646 \u062a\u0646\u0642\u0630\u0647 \u0625\u0644\u0649 \u0641\u0631\u064a\u0642\u0643!",
					Difficulty: "\u0627\u0644\u0635\u0639\u0648\u0628\u0629",
					Return: "\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
					SelectMode: "\u0627\u062e\u062a\u0631 \u0627\u0644\u0646\u0645\u0637",
					Tips8: "\u0623\u0643\u0645\u0644 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 %s \u0641\u064a \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0643\u0644\u0627\u0633\u064a\u0643\u064a \u0644\u064a\u0635\u0628\u062d \u0645\u062a\u0627\u062d\u064b\u0627",
					Tips9: "\u0623\u0643\u0645\u0644 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 %s \u0641\u064a \u0646\u0645\u0637 \u0627\u0644\u0643\u0646\u0632 \u0644\u064a\u0635\u0628\u062d \u0645\u062a\u0627\u062d\u064b\u0627",
					notOpen: "\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631",
					known: "\u0641\u0647\u0645\u062a",
					NormalModeIntro: "\u062a\u062d\u0631\u0643 \u0628\u0631\u0634\u0627\u0642\u0629 \u0627\u0644\u0631\u064a\u062d \u0648\u0627\u0642\u062a\u0644 \u0628\u062f\u0642\u0629\u060c \u0641\u0647\u0630\u0627 \u0633\u064a\u0641 \u0627\u0644\u0646\u064a\u0646\u062c\u0627",
					rewardIntro: "\u0641\u0631\u0635\u0629 \u0641\u0648\u0632 %100",
					diamondNoEoungh: "\u0627\u0644\u0645\u0627\u0633 \u0644\u0627 \u064a\u0643\u0641\u064a",
					rewardText: "\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 [%s-%s] \u0645\u0627\u0633",
					drawNow: "\u0627\u0633\u062d\u0628 \u0627\u0644\u0622\u0646",
					getSoon: "\u0627\u0633\u062a\u0644\u0645",
					videoGet3times: "\u0645\u0637\u0627\u0644\u0628\u0629 3x \u0645\u0634\u0627\u0647\u062f\u0629 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
					shareSelfVideo: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",
					niceTry: "\u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649",
					nextLevel: "\u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629",
					failText: "\u0641\u0634\u0644",
					Tips10: "\u0627\u0644\u0644\u0647 \u060c \u0644\u0642\u062f \u0641\u062a\u062d\u062a \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062c\u062f\u064a\u062f %s. \u0647\u0644 \u062a\u0631\u064a\u062f \u062a\u062c\u0631\u0628\u062a\u0647\u0627 \u0627\u0644\u0622\u0646\u061f",
					Tips11: "\u062a\u0645 \u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u0646\u0627\u0631 \u0639\u0644\u064a\u0643",
					Tips12: "\u062a\u0645 \u062a\u0641\u062c\u064a\u0631\u0643 \u062d\u062a\u0649 \u0627\u0644\u0645\u0648\u062a"
				},
				getTxt: function (t) {
					return this[n.default.Config.language][t]
				},
				getFont: function () {
					var t = n.default.Config.language,
						e = "Font_ch";
					return t !== n.default.Config.LanguageCfg.HI && t !== n.default.Config.LanguageCfg.VI && t !== n.default.Config.LanguageCfg.AR || (e = "font_arial"), e
				},
				setFont: function (t, e) {
					var o = this.getFont();
					t.font && t.font.name && "Font_ch" === t.font.name && o !== t.font.name ? (t.string = "", cc.loader.loadRes("font/" + o, cc.BitmapFont, function (o, n) {
						if (o) return console.error(o), void (t.string = e);
						t.font = n, t.string = e
					})) : t.string = e
				}
			};
		o.default = i, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK"
	}],
	UnLockModeLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "30a64+p58VFaorrhN9gUDXM", "UnLockModeLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./Txt"),
			r = t("./MenuLayer"),
			s = t("../YdhwSDK/YdhwSDK"),
			c = t("./GameObjectMgr"),
			d = t("./Events"),
			l = cc._decorator,
			u = l.ccclass,
			h = l.property,
			p = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.noticeLabel = null, e.closeBtn = null, e.closeBtnLabel = null, e.tryBtnLabel = null, e.menuItem = null, e._fightType = 1, e
				}
				return n(e, t), e.prototype.start = function () {
					var t = this;
					a.default.setFont(this.closeBtnLabel, a.default.getTxt("NoUse")), a.default.setFont(this.tryBtnLabel, a.default.getTxt("TryPlayNow")), this.closeBtn.node.active = !1, this.scheduleOnce(function () {
						t.closeBtn.node.active = !0
					}, 3)
				}, e.prototype.setUnLockMode = function (t) {
					this._fightType = t;
					var e = r.MenuItemData.getData()[t + 1];
					e ? (this.menuItem.getComponent("MenuItem").updateData(e, !0), a.default.setFont(this.noticeLabel, cc.js.formatStr(a.default.getTxt("Tips10"), e.title))) : console.error("data: ", e)
				}, e.prototype.oncloseBtnClicked = function () {
					this.node.destroy(), s.default.Audio.playEffect("click.mp3")
				}, e.prototype.onTryBtnClicked = function () {
					c.default.instance.FightType = this._fightType;
					var t = new cc.Event.EventCustom(d.default.ENTER_NEW_MODE, !0);
					cc.director.dispatchEvent(t), this.node.destroy(), s.default.Audio.playEffect("click.mp3")
				}, i([h(cc.Label)], e.prototype, "noticeLabel", void 0), i([h(cc.Button)], e.prototype, "closeBtn", void 0), i([h(cc.Label)], e.prototype, "closeBtnLabel", void 0), i([h(cc.Label)], e.prototype, "tryBtnLabel", void 0), i([h(cc.Node)], e.prototype, "menuItem", void 0), e = i([u], e)
			}(cc.Component);
		o.default = p, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events",
		"./GameObjectMgr": "GameObjectMgr",
		"./MenuLayer": "MenuLayer",
		"./Txt": "Txt"
	}],
	UserData: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "2cfd0ezeAVLMIXuv+Lrm6Rl", "UserData"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("../YdhwSDK/YdhwSDK"),
			i = t("./Events"),
			a = {
				saveList: {
					_level: 1,
					_bombLevel: 1,
					_arkLevel: 1,
					_extricateLevel: 1,
					_diamond: 0,
					_ownAssassins: [1],
					_currAssassin: 1,
					_nextAssassinTry: 0,
					_lastAssassinTry: 0,
					_relifleInfo: {},
					_cmulativePlayCount: 0,
					_nextTryPlayCount: 0
				},
				preGetDiamond: 0,
				showInsertAdRound: 2,
				_curRound: 0,
				init: function () {
					for (var t in this.saveList) this.saveList[t] = this.getData(t);
					console.log("this.saveList:  ", this.saveList)
				},
				set Level(t) {
					this.saveList._level = t, this.saveData("_level")
				},
				get Level() {
					return this.saveList._level
				},
				set BombLevel(t) {
					this.saveList._bombLevel = t, this.saveData("_bombLevel")
				},
				get BombLevel() {
					return this.saveList._bombLevel
				},
				set ArkLevel(t) {
					this.saveList._arkLevel = t, this.saveData("_arkLevel")
				},
				get ArkLevel() {
					return this.saveList._arkLevel
				},
				set ExLevel(t) {
					this.saveList._extricateLevel = t, this.saveData("_extricateLevel")
				},
				get ExLevel() {
					return this.saveList._extricateLevel
				},
				set Diamond(t) {
					this.saveList._diamond = t, this.saveData("_diamond");
					var e = new cc.Event.EventCustom(i.default.FRESH_DIAMOND, !0);
					cc.director.dispatchEvent(e)
				},
				get Diamond() {
					return this.saveList._diamond
				},
				addPreGetDiamond: function (t) {
					this.PreGetDiamond = this.preGetDiamond + t
				},
				set PreGetDiamond(t) {
					this.preGetDiamond = t
				},
				get PreGetDiamond() {
					return this.preGetDiamond
				},
				saveData: function (t) {
					var e = this.saveList[t];
					"object" == typeof e ? e = JSON.stringify(e) : "number" == typeof e ? e = "" + e : "string" == typeof e || console.error("data is invalid, typeof: ", typeof e), n.default.StoreManager.setLocalData(t, e)
				},
				getData: function (t) {
					var e = this.saveList[t],
						o = n.default.StoreManager.getLocalData(t);
					return "object" == typeof e ? o = "0" === o ? e : JSON.parse(o) : "number" == typeof e ? o = "0" === o ? e : parseInt(o) : "string" == typeof e ? "0" === o && (o = e) : console.error("data is invalid, typeof: ", typeof o), o
				},
				addOwnAssassin: function (t) {
					this.saveList._ownAssassins.indexOf(t) > -1 || (this.saveList._ownAssassins.push(t), this.saveData("_ownAssassins"))
				},
				getOwnAssassins: function () {
					return this.saveList._ownAssassins
				},
				set CurAssassin(t) {
					if (t !== this.saveList._currAssassin) {
						this.saveList._currAssassin = t, this.saveData("_currAssassin");
						var e = new cc.Event.EventCustom(i.default.CHANGE_SELECTED_ASSASSIN, !0);
						cc.director.dispatchEvent(e)
					}
				},
				get CurAssassin() {
					return this.saveList._currAssassin
				},
				set CumulativePlayCount(t) {
					this.saveList._cmulativePlayCount = t, this.saveData("_cmulativePlayCount")
				},
				get CumulativePlayCount() {
					return this.saveList._cmulativePlayCount
				},
				set NextTryPlayCount(t) {
					this.saveList._nextTryPlayCount = t, this.saveData("_nextTryPlayCount")
				},
				get NextTryPlayCount() {
					return 0 == this.saveList._nextTryPlayCount && (this.NextTryPlayCount = n.default.Util.random(2, 4)), this.saveList._nextTryPlayCount
				},
				isCanTryAssassin: function () {
					return this.CumulativePlayCount >= this.NextTryPlayCount ? (this.CumulativePlayCount = 0, this.NextTryPlayCount = 0, !0) : (this.CumulativePlayCount += 1, !1)
				},
				addRelifeNumber: function (t) {
					t = t || this.Level, this.saveList._relifleInfo["" + t] || (this.saveList._relifleInfo["" + t] = 0), this.saveList._relifleInfo["" + t]++
				},
				getRelifeNumber: function (t) {
					return t = t || this.Level, this.saveList._relifleInfo["" + t] || (this.saveList._relifleInfo["" + t] = 0), this.saveList._relifleInfo["" + t]
				},
				isShowInsertAd: function () {
					return this._curRound++, this._curRound >= this.showInsertAdRound && (this._curRound = 0, !0)
				}
			};
		o.default = a, cc._RF.pop()
	}, {
		"../YdhwSDK/YdhwSDK": "YdhwSDK",
		"./Events": "Events"
	}],
	XwwFb: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "0d7a72I7QNI4a3yJ1eoNinG", "XwwFb");
		var n = this && this.__awaiter || function (t, e, o, n) {
			return new (o || (o = Promise))(function (i, a) {
				function r(t) {
					try {
						c(n.next(t))
					} catch (t) {
						a(t)
					}
				}

				function s(t) {
					try {
						c(n.throw(t))
					} catch (t) {
						a(t)
					}
				}

				function c(t) {
					t.done ? i(t.value) : new o(function (e) {
						e(t.value)
					}).then(r, s)
				}
				c((n = n.apply(t, e || [])).next())
			})
		},
			i = this && this.__generator || function (t, e) {
				var o, n, i, a, r = {
					label: 0,
					sent: function () {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return a = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
					return this
				}), a;

				function s(t) {
					return function (e) {
						return c([t, e])
					}
				}

				function c(a) {
					if (o) throw new TypeError("Generator is already executing.");
					for (; r;) try {
						if (o = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
						switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
							case 0:
							case 1:
								i = a;
								break;
							case 4:
								return r.label++, {
									value: a[1],
									done: !1
								};
							case 5:
								r.label++, n = a[1], a = [0];
								continue;
							case 7:
								a = r.ops.pop(), r.trys.pop();
								continue;
							default:
								if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
									r = 0;
									continue
								}
								if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
									r.label = a[1];
									break
								}
								if (6 === a[0] && r.label < i[1]) {
									r.label = i[1], i = a;
									break
								}
								if (i && r.label < i[2]) {
									r.label = i[2], r.ops.push(a);
									break
								}
								i[2] && r.ops.pop(), r.trys.pop();
								continue
						}
						a = e.call(t, r)
					} catch (t) {
						a = [6, t], n = 0
					} finally {
							o = i = 0
						}
					if (5 & a[0]) throw a[1];
					return {
						value: a[0] ? a[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./YdhwUtil"),
			r = t("./YdhwStoreManager"),
			s = function () {
				function t() {
					this._loginT = 0, this._lastShowInsertAdT = 0, this._interval = 30, this._isNewPlayer = !0, this._lastShowBannerT = 0, this.bannerId = ["4864743603539728_5324942390853178", "4864743603539728_5324942390853178", "4864743603539728_5324942390853178", "4864743603539728_5324942390853178"], this.videoId = ["4864743603539728_5324944030853014", "4864743603539728_5324944030853014", "4864743603539728_5324944030853014", "4864743603539728_5324944030853014"], this.insertAd = ["4864743603539728_5324943400853077", "4864743603539728_5324943400853077", "4864743603539728_5324943400853077", "4864743603539728_5324943400853077"], this._button = null, this._banner = null, this._hasBanner = !1, this._bannerIsSmall = !1, this._video = null, this._video_preload = !1, this._hasVideo = !0, this._insertAd = null, this._insertAd_preload = !1, this._loginT = a.default.instance.getLocalTime();
					var t = r.default.instance.getLocalData("isNew", "0");
					this._isNewPlayer = "0" == t, r.default.instance.setLocalData("isNew", "1")
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.xwwFb || (this.xwwFb = new t), this.xwwFb
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.getLaunchOptionsSync = function () { }, t.prototype.previewImg = function (t) { }, t.prototype.login = function (t) { }, t.prototype.authorize = function (t, e) { }, t.prototype.destroyAuthBt = function () { }, t.prototype.isAuthorize = function (t) { }, t.prototype.getUserInfo = function () { }, t.prototype.showShareMenu = function () { }, t.prototype.onShareAppMessage = function (t, e) {
					void 0 === e && (e = "")
				}, t.prototype.shareMessage = function (t, e, o, n) { }, t.prototype.isIphoneX = function () {
					return !1
				}, t.prototype.isSupportAPI = function (t) {
					var e = FBInstant.getSupportedAPIs();
					return e instanceof Array && e.indexOf(t) > -1
				}, t.prototype.createBanner = function (t, e) {
					void 0 === e && (e = !1)
				}, t.prototype.getBannerUnitId = function () {
					return ""
				}, t.prototype.showBanner = function (t, e, o) {
					var n = this;
					(void 0 === t && (t = !1), void 0 === e && (e = !1), this.isSupportAPI("loadBannerAdAsync")) ? a.default.instance.getLocalTime() - this._lastShowBannerT < this._interval ? console.log("\u8ddd\u79bb\u4e0a\u6b21\u5237\u65b0banner\u65f6\u95f4\u5c0f\u4e8e" + this._interval + ", \u672c\u8f6e\u653e\u5f03banner\u5c55\u793a") : FBInstant.loadBannerAdAsync(this.bannerId[0]).then(function () {
						console.log("success"), n._lastShowBannerT = a.default.instance.getLocalTime()
					}) : console.error("\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u521b\u5efabanner")
				}, t.prototype.hideBanner = function () {
					this.isSupportAPI("hideBannerAdAsync") ? FBInstant.hideBannerAdAsync() : console.error("\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u9690\u85cfbanner")
				}, t.prototype.destroyBanner = function () { }, t.prototype.bannerIsShow = function () {
					return this._hasBanner
				}, t.prototype.createVideo = function (t) {
					/*return n(this, void 0, void 0, function () {
						var t = this;
						return i(this, function (e) {
							return [2, new Promise(function (e) {
								return t.isSupportAPI("getRewardedVideoAsync") ? t._video ?
									(console.log("\u89c6\u9891\u5df2\u521d\u59cb\u5316"),
									void (t._video_preload || t._video.loadAsync().then(function () {
									t._video_preload = !0, e(!0)
								}).catch(function (o) {
									console.error("Interstitial failed to preload: " + o.message), t._video_preload = !1, e(!1)
								}))) : void FBInstant.getRewardedVideoAsync(t.videoId[0]).then(function (e) {
									return console.log("Rewarded video init"), t._video = e, t._video.loadAsync()
								}).then(function () {
									console.log("Rewarded video preloaded"), t._video_preload = !0, e(!0)
								}).catch(function (o) {
									console.error("Rewarded video failed to preload: " + o.message), t._video_preload = !1, e(!1)
								}) : (console.error("\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u89c6\u9891\u5e7f\u544a"), void e(!1))
							})]
						})
					})*/
				}, t.prototype.showVideo = function (t, e) {
					return n(this, void 0, void 0, function () {
						var o = this;
						return i(this, function (n) {
							return t && t(!0), o._video = null, o._video_preload = !1, console.log("Rewarded video watched successfully");
							/*switch (n.label) {
								case 0:
									return this._video ? [3, 2] : [4, this.createVideo()];
								case 1:
									if (!n.sent()) return e && e(!1), console.error("preload reward video failed=="), [2];
									n.label = 2;
								case 2:
									return t && t(!0), o._video = null, o._video_preload = !1, console.log("Rewarded video watched successfully"); *//*this._video.showAsync().then(function () {
										console.log("Rewarded video watched successfully"), o._video = null, o._video_preload = !1, t && t(!0)
									}).catch(function (t) {
										console.log("Rewarded video watched failed"), e && e(!1)
									}), [2]*//*
							}*/
						})
					})
				}, t.prototype.canShowVideo = function () {
					return this._hasVideo
				}, t.prototype.createInsertAd = function (t) {
					return n(this, void 0, void 0, function () {
						var t = this;
						return i(this, function (e) {
							return [2, new Promise(function (e) {
								return t.isSupportAPI("getInterstitialAdAsync") ? t._insertAd ? (console.log("\u63d2\u5c4f\u5df2\u521d\u59cb\u5316"), void (t._insertAd_preload || t._insertAd.loadAsync().then(function () {
									t._insertAd_preload = !0, e(!0)
								}).catch(function (o) {
									t._insertAd_preload = !1, console.error("Interstitial failed to preload: " + o.message), e(!1)
								}))) : void FBInstant.getInterstitialAdAsync(t.insertAd[0]).then(function (e) {
									return console.log("Interstitial init"), t._insertAd = e, t._insertAd.loadAsync()
								}).then(function () {
									console.log("Interstitial preloaded"), t._insertAd_preload = !0, e(!0)
								}).catch(function (o) {
									console.error("Interstitial failed to preload: " + o.message), t._insertAd_preload = !1, e(!1)
								}) : (console.error("\u5ba2\u6237\u7aef\u4e0d\u652f\u6301\u63d2\u5c4f\u5e7f\u544a"), void e(!1))
							})]
						})
					})
				}, t.prototype.showInsertAd = function (t) {
					return n(this, void 0, void 0, function () {
						var e, o = this;
						return i(this, function (n) {
							switch (n.label) {
								case 0:
									return (e = a.default.instance.getLocalTime()) - this._loginT < this._interval ? (console.log("\u767b\u5f55\u65f6\u957f\u5c0f\u4e8e" + this._interval + ", \u4e0d\u663e\u793a\u63d2\u5c4f\u3002"), t && t(!1), [2]) : e - this._lastShowInsertAdT < this._interval ? (console.log("\u8ddd\u79bb\u4e0a\u6b21\u663e\u793a\u63d2\u5c4f\u65f6\u957f\u5c0f\u4e8e" + this._interval + ", \u4e0d\u663e\u793a\u63d2\u5c4f\u3002"), t && t(!1), [2]) : this._insertAd ? [3, 2] : [4, this.createInsertAd()];
								case 1:
									if (!n.sent()) return t && t(!1), [2];
									n.label = 2;
								case 2:
									return this._insertAd.showAsync().then(function () {
										o._insertAd = null, o._lastShowInsertAdT = a.default.instance.getLocalTime(), console.log("Interstitial ad finished successfully"), t && t(!0)
									}).catch(function (e) {
										console.error(e.message), t && t(!1)
									}), [2]
							}
						})
					})
				}, t.prototype.destroyInsertAd = function () { }, t.prototype.gotoMiniGame = function (t, e, o, n, i) { }, t.prototype.getShareInfo = function (t, e) { }, t.prototype.gameClub = function (t, e) { }, t.prototype.showModal = function (t, e, o, n, i, a) {
					void 0 === n && (n = !0), void 0 === i && (i = "\u53d6\u6d88"), void 0 === a && (a = "\u786e\u5b9a")
				}, t.prototype.openCustomerServiceConversation = function (t) { }, t.prototype.getMenuButtonBoundingClientRect = function () { }, t.prototype.vibrateShort = function (t, e, o) { }, t.prototype.vibrateLong = function (t, e, o) { }, t.prototype.registerOnShow = function () { }, t.prototype.registerOnHide = function () { }, t.prototype.getClipboardData = function (t) { }, t.prototype.setClipboardData = function (t, e) { }, t.xwwFb = null, t
			}();
		o.default = s, cc._RF.pop()
	}, {
		"./YdhwStoreManager": "YdhwStoreManager",
		"./YdhwUtil": "YdhwUtil"
	}],
	XwwOPPO: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "dd0cbYdrQZMKLAO9PjN3jBB", "XwwOPPO"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwUtil"),
			i = t("../YdhwCfg"),
			a = t("./YdhwStoreManager"),
			r = function () {
				function t() {
					this.bannerId = ["155457", "155457", "155457", "155457", "155457"], this.videoId = ["155458", "155458"], this.insertAd = ["155459"], this.defaultPkgs = ["com.android.browser", "com.coloros.browser", "com.nearme.browser", "com.heytap.browser", "com.nearme.play", "com.nearme.gamecenter", "com.coloros.yoli", "com.oppo.store", "com.finshell.wallet", "com.coloros.wallet"], this.pkgsInstallInfo = {}, this._pkgTimer = null, this._button = null, this._banner = null, this._hasBanner = !1, this._bannerIsSmall = !1, this._video = null, this._hasVideo = !0, this._timer = null, this._bReturn = !1, this._videoShowCallfunc = null, this._insertAd = null, n.default.instance.isOPPOEnv() && (qg.getSystemInfo({
						success: function (t) {
							console.log("\u7cfb\u7edf\u4fe1\u606f: " + JSON.stringify(t)), i.default.platformVersion = t.platformVersion
						},
						fail: function (t) {
							console.log("\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u51fa\u9519: " + JSON.stringify(t))
						}
					}), this.registerOnShow(), this.registerOnHide())
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.xwwOPPO || (this.xwwOPPO = new t), this.xwwOPPO
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.judgeIsApkInstalled = function (t) {
					var e = this;
					if (qg._callNativeMethod) {
						this._pkgTimer && (clearTimeout(this._pkgTimer), this._pkgTimer = null);
						var o = 0,
							n = this.defaultPkgs.length,
							i = !1;
						this.defaultPkgs.forEach(function (a) {
							qg._callNativeMethod({
								method: "is_apk_installed",
								args: {
									package: a
								},
								success: function (t) {
									console.log("success", t);
									var o = "";
									a.split(".").forEach(function (t) {
										o += t
									}), console.log("key: ", o), e.pkgsInstallInfo[o] = t
								},
								fail: function (t) {
									console.log("fail", t), e.pkgsInstallInfo[a] = !1
								},
								complete: function () {
									console.log("complete"), ++o == n && (i = !0, t && t(), e._pkgTimer && (clearTimeout(e._pkgTimer), e._pkgTimer = null))
								}
							})
						}), this._pkgTimer = setTimeout(function () {
							i || (e.showToast("\u76ee\u6807app\u65e0\u54cd\u5e94\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5!"), e._pkgTimer = null)
						}, 1e4)
					} else console.error("qg._callNativeMethod not find"), t && t()
				}, t.prototype.has_install = function (t) {
					var e = "";
					return t.split(".").forEach(function (t) {
						e += t
					}), this.pkgsInstallInfo[e]
				}, t.prototype.convertUrl = function (t) {
					if (0 == t.indexOf("http://") || 0 == t.indexOf("https://")) {
						console.log("url: ", t);
						var e = 0 == t.indexOf("http://") ? "http" : "https",
							o = "default";
						i.default.platformVersion >= 1051 && (this.has_install("com.android.browser") ? o = "com.android.browser" : this.has_install("com.coloros.browser") ? o = "com.coloros.browser" : this.has_install("com.nearme.browser") ? o = "com.nearme.browser" : this.has_install("com.heytap.browser") && (o = "com.heytap.browser"));
						var n = t.substring(e.length + 3);
						console.log("subUrl: ", n), t = "default" === o ? "intent://" + n + "#Intent;scheme=" + e + ";action=android.intent.action.VIEW;category=android.intent.category.DEFAULT;end" : "intent://" + n + "#Intent;scheme=" + e + ";action=android.intent.action.VIEW;package=" + o + ";end"
					}
					return t
				}, t.prototype.jumpMarketDetail = function (t) {
					if (n.default.instance.isOPPOEnv()) {
						console.log("jumpMarketDetail");
						var e = "market://details?id=" + t;
						qg._callNativeMethod({
							method: "jump_app",
							args: {
								deeplink: e
							},
							success: function (t) {
								console.log("\u8c03\u7528\u6210\u529f\uff1a", t)
							},
							fail: function (t) {
								console.log("\u8c03\u7528\u5931\u8d25\uff1a", t), this.showToast("\u8df3\u8f6c\u5e94\u7528\u5546\u5e97\u5931\u8d25\uff01url: " + e)
							},
							complete: function () {
								console.log("\u8c03\u7528\u5b8c\u6210")
							}
						})
					}
				}, t.prototype.jumpNativeApp = function (t, e) {
					if (n.default.instance.isOPPOEnv()) {
						console.log("jumpNativeApp");
						var o = "false";
						0 == (t = this.convertUrl(t)).indexOf("oaps://qg/") && (o = "true"), qg._callNativeMethod({
							method: "jump_app",
							args: {
								deeplink: t,
								force_dl: o
							},
							success: function (t) {
								console.log("\u8c03\u7528\u6210\u529f\uff1a", t)
							},
							fail: function (t) {
								console.log("\u8c03\u7528\u5931\u8d25\uff1a", t), this.has_install(e) ? this.showToast("\u8df3\u8f6c\u5e94\u7528\u5931\u8d25\uff01\uff01") : this.jumpMarketDetail(e)
							},
							complete: function () {
								console.log("\u8c03\u7528\u5b8c\u6210")
							}
						})
					}
				}, t.prototype.onBackPressed = function () {
					if (n.default.instance.isOPPOEnv()) {
						console.log("onBackPressed"), qg.onBackPressed(function () {
							qg.exitApplication({})
						})
					}
				}, t.prototype.getLaunchOptionsSync = function () {
					return n.default.instance.isOPPOEnv() ? qg.getLaunchOptionsSync() : {}
				}, t.prototype.previewImg = function (t) {
					n.default.instance.isOPPOEnv() && qg.previewImage({
						urls: [t]
					})
				}, t.prototype.login = function (t) {
					n.default.instance.isOPPOEnv() && qg.login({
						success: function (e) {
							console.log("qg.login succ res: ", e), t && t(e.data)
						},
						fail: function (e) {
							console.log("qg.login fail res: ", e), t && t()
						},
						complete: function (t) {
							console.log("qg.login.complete()!")
						}
					})
				}, t.prototype.authorize = function (t, e) {
					var o = this;
					n.default.instance.isOPPOEnv() ? qg.getSystemInfo({
						success: function (n) {
							var i = n.windowWidth,
								a = n.windowHeight,
								r = i / cc.view.getDesignResolutionSize().width,
								s = t.width * r,
								c = t.height * r,
								d = i / 2 + t.x * r - s / 2,
								l = a / 2 - t.y * r - c / 2;
							o._button = qg.createUserInfoButton({
								type: "text",
								text: "",
								style: {
									left: d,
									top: l,
									width: s,
									height: c,
									textAlign: "center",
									fontSize: 16,
									borderRadius: 4,
									borderColor: "#f0ff00",
									borderWidth: 1
								}
							}), o._button.onTap(function (t) {
								t.userInfo ? e && e(t.userInfo) : (console.log("\u5fae\u4fe1\u8fd4\u56de\u7684userInfo \u4e3a\u7a7a \uff01"), e && e(null))
							})
						}
					}) : e && e(null)
				}, t.prototype.destroyAuthBt = function () {
					this._button && (this._button.destroy(), this._button = null)
				}, t.prototype.isAuthorize = function (t) {
					n.default.instance.isOPPOEnv() ? qg.getSetting({
						success: function (e) {
							e.authSetting["scope.userInfo"] ? t(!0) : t(!1)
						}
					}) : t && t(!1)
				}, t.prototype.getUserInfo = function () {
					n.default.instance.isOPPOEnv() && qg.getUserInfo({
						success: function (t) { }
					})
				}, t.prototype.showShareMenu = function () {
					n.default.instance.isOPPOEnv() && qg.showShareMenu()
				}, t.prototype.onShareAppMessage = function (t, e) {
					void 0 === e && (e = ""), n.default.instance.isOPPOEnv() && qg.onShareAppMessage(function () {
						return {
							title: t,
							imageUrl: e
						}
					})
				}, t.prototype.shareMessage = function (t, e, o, i) {
					n.default.instance.isOPPOEnv() && qg.shareAppMessage({
						title: t,
						imageUrl: e,
						query: o || {},
						success: function (t) { },
						fail: function (t) { },
						complete: function (t) { }
					})
				}, t.prototype.isIphoneX = function () {
					return !!n.default.instance.isOPPOEnv() && ("" + qg.getSystemInfoSync().model).indexOf("iPhone X") >= 0
				}, t.prototype.createBanner = function (t, e) {
					var o = this;
					if (void 0 === e && (e = !1), n.default.instance.isOPPOEnv()) {
						this._banner && (this._banner.destroy(), this._banner = null);
						var a = qg.getSystemInfoSync(),
							r = e ? 300 : a.windowWidth,
							s = (a.windowWidth - r) / 2;
						this._banner = qg.createBannerAd({
							adUnitId: t,
							style: {
								left: s,
								top: a.windowHeight,
								width: r
							}
						}), this._banner.onLoad(function () {
							console.log("\u62c9\u53d6banner\u6210\u529f\uff01"), o._hasBanner ? o._banner.show() : console.log("banner\u56e0\u88ab\u9500\u6bc1\u6216\u8005\u9690\u85cf\uff0c\u672c\u6b21\u672a\u80fd\u5c55\u793a\uff01")
						}), this._banner.onError(function (t) {
							console.log("\u62c9\u53d6banner\u5931\u8d25\uff01"), o._banner = null
						}), this._banner.onResize(function (t) {
							var e = t.height;
							o.isIphoneX() && (e += i.default.offsetY * (a.windowHeight / cc.winSize.height)), o._banner.style.top = a.windowHeight - e, o._banner.style.left = (a.windowWidth - t.width) / 2, i.default.adNormalHeight = cc.winSize.height / a.windowHeight * e + i.default.offsetY, i.default.adHeight = i.default.adNormalHeight - i.default.offsetY - cc.winSize.height / a.windowHeight * t.height / 2;
							var n = new cc.Event.EventCustom(i.default.Evt.RESET_BANNER_HEIGHT, !1);
							cc.director.dispatchEvent(n)
						})
					}
				}, t.prototype.getBannerUnitId = function () {
					return this._banner ? this._banner.adUnitId : ""
				}, t.prototype.showBanner = function (t, e, o) {
					if (void 0 === t && (t = !1), void 0 === e && (e = !1), !this._banner || t) {
						this.destroyBanner(), this._hasBanner = !0;
						var i = n.default.instance.random(0, this.bannerId.length - 1),
							a = this.bannerId[i];
						console.log("bannerId : " + a), this.createBanner(a, e), this._bannerIsSmall = e
					} else if (this._hasBanner = !0, this._banner.show(), this._bannerIsSmall !== e || o) {
						this._bannerIsSmall = e;
						var r = qg.getSystemInfoSync(),
							s = e ? 300 : r.windowWidth;
						this._banner.style.width === s && (e ? s += .1 : s -= .1);
						var c = (r.windowWidth - s) / 2;
						this._banner.style.left = c, this._banner.style.width = s
					}
				}, t.prototype.hideBanner = function () {
					this._hasBanner = !1, this._banner && this._banner.hide()
				}, t.prototype.destroyBanner = function () {
					this._hasBanner = !1, this._banner ? (this._banner.destroy(), this._banner = null) : console.log("banner \u672a\u521b\u5efa\uff01")
				}, t.prototype.bannerIsShow = function () {
					return this._hasBanner
				}, t.prototype.createVideo = function (t) {
					var e = this;
					if (n.default.instance.isOPPOEnv())
						if (this._video) {
							if (this._video.adUnitId === t) return;
							this._video.adUnitId = t || i.default.videoId[0]
						} else this._video = qg.createRewardedVideoAd({
							adUnitId: t || i.default.videoId[0]
						}), this._video.onLoad(function () {
							console.log("\u89c6\u9891\u52a0\u8f7d\u6210\u529f\uff01"), e._hasVideo = !0, e._video.show()
						}), this._video.onClose(function (t) {
							t && t.isEnded ? e._onVideoClose && e._onVideoClose(!0) : e._onVideoClose && e._onVideoClose(!1)
						}), this._video.onError(function (t) {
							console.log("\u89c6\u9891\u5c55\u793a\u5931\u8d25\u4e86\uff01err: ", t), e._bReturn || (e._bReturn = !0, e._videoShowCallfunc && e._videoShowCallfunc(!1))
						}), this._video.onVideoStart(function () {
							console.log("\u89c6\u9891\u5c55\u793a\u6210\u529f\u4e86\uff01"), e._bReturn || (e._bReturn = !0, e._videoShowCallfunc && e._videoShowCallfunc(!0))
						})
				}, t.prototype.showVideo = function (t, e) {
					var o = this;
					this._video && (this._onVideoClose = t, this._videoShowCallfunc = e, this._bReturn = !1, this._timer && (clearTimeout(this._timer), this._timer = null), this._timer = setTimeout(function () {
						o._timer = null, o._bReturn || (console.log("4\u79d2\u5185\u65e0\u89c6\u9891\u56de\u8c03\uff0c\u81ea\u52a8\u56de\u8c03\u52a0\u8f7d\u5931\u8d25!"), o._bReturn = !0, e && e(!1))
					}, 4e3), this._video.load())
				}, t.prototype.canShowVideo = function () {
					return this._hasVideo
				}, t.prototype.createInsertAd = function (t) {
					var e = this;
					this._insertAd = qg.createInsertAd({
						adUnitId: t || this.insertAd[0]
					}), this._insertAd.onLoad(function () {
						console.log("insert ad onLoad"), e._insertAd.show()
					}), this._insertAd.onShow(function () {
						console.log("insert ad show")
					}), this._insertAd.onClose(function () {
						console.log("insert ad close")
					}), this._insertAd.onError(function (t) {
						console.error("createInsertAd err: ", t)
					})
				}, t.prototype.showInsertAd = function () {
					this._insertAd ? this._insertAd.load() : this.createInsertAd(this.insertAd[0])
				}, t.prototype.destroyInsertAd = function () {
					this._insertAd && (this._insertAd.destroy(), this._insertAd = null)
				}, t.prototype.gotoMiniGame = function (t, e, o, i, a) {
					n.default.instance.isOPPOEnv() && qg.navigateToMiniProgram({
						appId: t,
						extraData: e,
						path: o,
						success: function (t) {
							i && i(!0)
						},
						fail: function (t) {
							i && i(!1)
						}
					})
				}, t.prototype.getShareInfo = function (t, e) {
					n.default.instance.isOPPOEnv() && qg.getShareInfo({
						shareTicket: t,
						success: function (t) {
							e && e(t)
						},
						fail: function (t) { }
					})
				}, t.prototype.gameClub = function (t, e) {
					n.default.instance.isOPPOEnv() && qg.getSystemInfo({
						success: function (o) {
							var n = o.windowWidth,
								i = o.windowHeight,
								a = n / cc.view.getDesignResolutionSize().width,
								r = t.width * a,
								s = t.height * a,
								c = n / 2 + t.x * a - r / 2,
								d = i / 2 - t.y * a - s / 2;
							qg.createGameClubButton({
								type: "text",
								text: "",
								style: {
									left: c,
									top: d,
									width: r,
									height: s,
									textAlign: "center",
									fontSize: 16,
									borderRadius: 4
								}
							}).onTap(function (t) {
								console.log("\u6e38\u620f\u5708\uff1ares = " + JSON.stringify(t)), e && e(!0)
							})
						}
					})
				}, t.prototype.updateScore = function (t, e, o, i) {
					if (n.default.instance.isOPPOEnv()) {
						var a = this._objectToKVArray(t);
						qg.setUserCloudStorage({
							KVDataList: a,
							success: e,
							fail: o,
							complete: i
						})
					}
				}, t.prototype._objectToKVArray = function (t) {
					var e = [];
					if (t instanceof Object)
						for (var o in t) e.push({
							key: o,
							value: t[o] + ""
						});
					else t instanceof Array && (e = t);
					return e
				}, t.prototype.showToast = function (t, e) {
					n.default.instance.isOPPOEnv() && (e = e || 3e3, qg.showToast({
						icon: "none",
						title: t,
						duration: e
					}))
				}, t.prototype.showModal = function (t, e, o, i, a, r) {
					void 0 === i && (i = !0), void 0 === a && (a = "\u53d6\u6d88"), void 0 === r && (r = "\u786e\u5b9a"), n.default.instance.isOPPOEnv() && qg.showModal({
						title: t,
						content: e,
						showCancel: i,
						cancelText: a,
						confirmText: r,
						success: function (t) {
							t.confirm ? o && o(!0) : t.cancel && o && o(!1)
						}
					})
				}, t.prototype.openCustomerServiceConversation = function (t) {
					n.default.instance.isOPPOEnv() && qg.openCustomerServiceConversation(t)
				}, t.prototype.getMenuButtonBoundingClientRect = function () {
					return n.default.instance.isOPPOEnv() ? qg.getMenuButtonBoundingClientRect() : {}
				}, t.prototype.requestMidasPayment = function (t, e) {
					if (n.default.instance.isOPPOEnv()) {
						var o = t.price ? 10 * t.price : 100;
						qg.requestMidasPayment({
							mode: "game",
							offerId: "1450019488",
							buyQuantity: o,
							env: 0,
							zoneId: 1,
							currencyType: "CNY",
							platform: "android",
							success: function () {
								console.warn("\u652f\u4ed8\u6210\u529f"), e && e(!0)
							},
							fail: function (t) {
								var o = t.errMsg,
									n = t.errCode;
								console.error(o, n), e && e(!1)
							}
						})
					}
				}, t.prototype.vibrateShort = function (t, e, o) {
					n.default.instance.isOPPOEnv() && (t = t || function () { }, e = e || function () { }, o = o || function () { }, qg.vibrateShort({
						success: t,
						fail: e,
						complete: o
					}))
				}, t.prototype.vibrateLong = function (t, e, o) {
					n.default.instance.isOPPOEnv() && (t = t || function () { }, e = e || function () { }, o = o || function () { }, qg.vibrateLong({
						success: t,
						fail: e,
						complete: o
					}))
				}, t.prototype.registerOnShow = function () {
					qg.onShow(function (t) {
						console.log("====>onShow");
						var e = new cc.Event.EventCustom(i.default.Evt.ON_SHOW, !0);
						cc.director.dispatchEvent(e)
					})
				}, t.prototype.registerOnHide = function () {
					qg.onHide(function () {
						var t = (new Date).getTime();
						a.default.instance.setLocalData("leaveGameTime", "" + t), console.log("\u672c\u6b21\u79bb\u5f00\u6e38\u620f\u7684\u65f6\u95f4\u662f" + t);
						var e = new cc.Event.EventCustom(i.default.Evt.ON_HIDE, !0);
						cc.director.dispatchEvent(e)
					})
				}, t.prototype.isLiuHaiScreen = function () {
					var t = qg.getSystemInfoSync();
					return t.screenHeight / t.screenWidth > 2
				}, t.prototype.getClipboardData = function (t) {
					qg.getClipboardData({
						success: function (e) {
							console.log(e.data), t && t(e.data)
						},
						fail: function (e) {
							t && t(null)
						},
						complete: function (t) { }
					})
				}, t.prototype.setClipboardData = function (t, e) {
					qg.setClipboardData({
						data: t,
						success: function (t) {
							e && e(!0)
						},
						fail: function (t) {
							e && e(!1)
						},
						complete: function (t) { }
					})
				}, t.xwwOPPO = null, t
			}();
		o.default = r, cc._RF.pop()
	}, {
		"../YdhwCfg": "YdhwCfg",
		"./YdhwStoreManager": "YdhwStoreManager",
		"./YdhwUtil": "YdhwUtil"
	}],
	YdhwAudio: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "43d9eIe5F9B/bjoU6wWrqK9", "YdhwAudio"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwStoreManager"),
			i = function () {
				function t() {
					this.em = !0, this.ee = !0, this._current = -1
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwAudio || (this.ydhwAudio = new t), this.ydhwAudio
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.init = function () {
					var t = parseInt(n.default.instance.getLocalData("YdhwAudio", "0"));
					this.ee = this.em = 0 !== t
				}, t.prototype.isEnableMusic = function () {
					return this.em
				}, t.prototype.setMusicEnable = function (t) {
					this.em = t
				}, t.prototype.isEnableEffect = function () {
					return this.ee
				}, t.prototype.setEffectEnable = function (t) {
					this.ee = t
				}, t.prototype.setAudioEnable = function (t) {
					this.setMusicEnable(t), this.setEffectEnable(t);
					var e = t ? "1" : "0";
					n.default.instance.setLocalData("YdhwAudio", e)
				}, t.prototype.isAudioEnalbe = function () {
					return this.ee
				}, t.prototype.playMusic = function (t, e) {
					void 0 === e && (e = !0);
					var o = this;
					cc.loader.load(cc.url.raw("resources/audio/" + t), function (t, n) {
						o._current > -1 && cc.audioEngine.stop(o._current), o.em && (o._current = cc.audioEngine.play(n, e, 1), cc.audioEngine.setVolume(o._current, .4))
					})
				}, t.prototype.stopMusic = function () {
					this._current > -1 && (cc.audioEngine.stop(this._current), this._current = -1)
				}, t.prototype.playEffect = function (t, e, o) {
					void 0 === e && (e = !1), void 0 === o && (o = 1), o = (o = o || 1) > 1 ? 1 : o;
					var n = this;
					this.ee && cc.loader.load(cc.url.raw("resources/audio/" + t), function (t, i) {
						if (n.ee && o >= 0 && o <= 1) {
							var a = cc.audioEngine.play(i, e, 1);
							cc.audioEngine.setVolume(a, o)
						}
					})
				}, t.prototype.preload = function (t) {
					t.forEach(function (t) {
						cc.audioEngine.preload(cc.url.raw("resources/audio/" + t))
					})
				}, t.ydhwAudio = null, t
			}();
		o.default = i, cc._RF.pop()
	}, {
		"./YdhwStoreManager": "YdhwStoreManager"
	}],
	YdhwCfg: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "77eb4RHkY9GiqUap6rlJ1RO", "YdhwCfg"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		o.default = {
			debug: 1,
			appid: "wx535481e2c3ff79bc",
			version: "",
			TTversion: "1.0.1",
			HGversion: "1.0.2",
			QGversion: "1.0.0",
			url: "http://wx-ggs.r2games.com.cn:9201/",
			isShowVideo: !1,
			env: "online",
			account_id: 0,
			new_player: !1,
			nickName: "",
			avatarUrl: "",
			friendNickName: "",
			friendAvatarUrl: "",
			videoId: ["adunit-623732b4ea136f06", "adunit-f8d7a9ff5221f680", "adunit-81ee8f391d677f24", "adunit-699d55279c25efcd", "adunit-02da2611065834ef", "adunit-ef78e6226fde1af5", "adunit-ac2aacc0795815b0", "adunit-c8903939163430ab"],
			bannerId: ["adunit-ca4160cbb4f52dfc", "adunit-531abcc62a9bb8fa", "adunit-a8d21ef912db4cb6", "adunit-4fcc693a3f0f1231"],
			keySwitch: !1,
			mistouch_switch: !1,
			otherMiniGameByWall: !1,
			integralWall: [],
			adNormalHeight: 0,
			adHeight: 0,
			addMineGame: 0,
			shareInfo: [],
			shareScene: "normal",
			defaultShareInfo: {
				content: "\u654c\u4eba\u5934\u9885\u4ece\u4ed6\u5200\u5203\u5212\u843d\u7684\u4e00\u523b\uff0c\u53ea\u542c\u89c1\u98ce\u7684\u58f0\u97f3\u3002 ",
				url: "shareImg/share.jpg"
			},
			isShareCancel: !1,
			Evt: {
				RESET_BANNER_HEIGHT: "RESET_BANNER_HEIGHT",
				OTHER_MINIGAME_BACK: "otherMiniGameBack",
				GROUP_BACK: "groupBackGame",
				FINISHED_ADD_MINIPROGRAM: "finished_add_miniProgram",
				CHECK_PUBLIC_SCENE: "checkPublicAddress",
				SIDEBOX_CLICKED: "SIDEBOX_CLICKED",
				SIDEBOX_GAME_CLICKED: "SIDEBOX_GAME_CLICKED",
				MORE_GAME_CLICKED: "MORE_GAME_CLICKED",
				GUESS_YOULIKE_GAME_CLICKED: "GUESS_YOULIKE_CLICKED",
				GAME_BOX_GAME_CLICKED: "GAME_BOX_GAME_CLICKED",
				ON_SHOW: "ON_SHOW",
				ON_HIDE: "ON_HIDE"
			},
			offsetY: 60,
			LanguageCfg: {
				EN: "English",
				CH: "Chinese",
				HI: "Hindi",
				ID: "Indonesian",
				TH: "Thai",
				VI: "Vietnamese",
				PT: "Portuguese",
				AR: "Arabic"
			},
			language: "",
			platformVersion: 1051
		}, cc._RF.pop()
	}, {}],
	YdhwComponent: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "9c07fXX66lBTLChn6+oZ6HT", "YdhwComponent");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("./YdhwPrefabManager"),
			r = cc._decorator,
			s = r.ccclass,
			c = (r.property, function (t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				var o;
				return n(e, t), o = e, Object.defineProperty(e, "instance", {
					get: function () {
						return this.ydhwComponent || (this.ydhwComponent = new o), this.ydhwComponent
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.start = function () { }, e.prototype.showSidebox = function (t, e, o) {
					a.default.instance.loadPrefab("prefab/YdhwComponents/YdhwSideBox", function (n) {
						if (n) {
							var i = cc.instantiate(n);
							i.zIndex = 1e3, i.parent = o || cc.director.getScene(), t && (i.position = t), e && e()
						}
					})
				}, e.prototype.showTryPlay = function (t, e, o) {
					a.default.instance.loadPrefab("prefab/YdhwComponents/YdhwTryPlay", function (n) {
						if (n) {
							var i = cc.instantiate(n);
							i.zIndex = 1e3, i.parent = o || cc.director.getScene(), t && (i.position = t), e && e()
						}
					})
				}, e.prototype.showGuessYouLike = function (t, e, o) {
					a.default.instance.loadPrefab("prefab/YdhwComponents/YdhwGuessYouLike", function (n) {
						if (n) {
							var i = cc.instantiate(n);
							i.zIndex = 1e3, i.parent = o || cc.director.getScene(), t && (i.position = t), e && e()
						}
					})
				}, e.prototype.showSignDay = function (t, e, o) {
					a.default.instance.loadPrefab("prefab/YdhwComponents/YdhwSignDayLayer", function (n) {
						if (n) {
							var i = cc.instantiate(n);
							i.zIndex = 1e3, i.parent = o || cc.director.getScene(), t && (i.position = t), e && e()
						}
					})
				}, e.prototype.showRankLayer = function (t, e, o) {
					a.default.instance.loadPrefab("prefab/YdhwComponents/YdhwRankLayer", function (n) {
						if (n) {
							var i = cc.instantiate(n);
							i.zIndex = 1e3, i.parent = o || cc.director.getScene(), t && (i.position = t), e && e()
						}
					})
				}, e.prototype.showTurnTable = function (t, e, o) {
					a.default.instance.loadPrefab("prefab/YdhwComponents/YdhwTurnTable", function (n) {
						if (n) {
							var i = cc.instantiate(n);
							i.zIndex = 1e3, i.parent = o || cc.director.getScene(), t && (i.position = t), e && e()
						}
					})
				}, e.prototype.showTips = function (t, e) {
					a.default.instance.loadPrefab("prefab/YdhwComponents/tipsNode", function (o) {
						if (o) {
							var n = cc.instantiate(o);
							n.zIndex = 1e3, n.position = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2), n.parent = cc.director.getScene(), n.getComponent("YdhwTips").showToast(t, e)
						}
					})
				}, e.ydhwComponent = null, e = o = i([s], e)
			}(cc.Component));
		o.default = c, cc._RF.pop()
	}, {
		"./YdhwPrefabManager": "YdhwPrefabManager"
	}],
	YdhwDataStatistics: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "ca7200ACu9OuY7YHF1OMMaf", "YdhwDataStatistics");
		var n = this && this.__decorate || function (t, e, o, n) {
			var i, a = arguments.length,
				r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
			else
				for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
			return a > 3 && r && Object.defineProperty(e, o, r), r
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = t("../YdhwCfg"),
			a = t("../YdhwModule/YdhwHttp"),
			r = cc._decorator,
			s = r.ccclass,
			c = (r.property, function () {
				function t() {
					this.maxPostLength = 50, this.commitDelayTime = 30, this.cacheMaxLength = 1e4, this.intervalTime = 0, this.database = null, this.maxPostLength = 50, this.commitDelayTime = 30, this.cacheMaxLength = 1e4, this.database = this.getSaveCommit(), this.commit(), this.setCurrentTime(), this.startSchedule()
				}
				var e;
				return e = t, Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwDataStatistics || (this.ydhwDataStatistics = new e), this.ydhwDataStatistics
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.eventOnHide = function () {
					this.saveCommit()
				}, t.prototype.setCurrentTime = function () {
					var t = this.getTime();
					this.intervalTime = t
				}, t.prototype.isFixIntervalTime = function () {
					var t = this.getTime();
					return Math.floor(t - this.intervalTime) > this.commitDelayTime
				}, t.prototype.commit = function () {
					var t = this.database;
					if (0 !== t.length)
						if (t.length >= this.maxPostLength) {
							for (var e = [], o = 0; o < this.maxPostLength; o++) e.push(t.shift());
							this.commitReq(e)
						} else this.commitReq(t, !0)
				}, t.prototype.commitReq = function (t, e) {
					var o = this;
					void 0 === e && (e = !1);
					var n = i.default.url + "statistics/event?appid=" + i.default.appid + "&account_id=" + i.default.account_id,
						r = {
							events: t
						};
					a.default.instance.post(n, JSON.stringify(r), function (n, i) {
						if (0 == (i = JSON.parse(i)).code) e && o.clearSaveCommit();
						else
							for (var a = 0; a < t.length; a++) o.database.unshift(t.pop())
					})
				}, t.prototype.saveCommit = function () {
					if (this.database.length > this.cacheMaxLength)
						for (var t = this.cacheMaxLength; t < this.database.length; t++) this.database.shift();
					cc.sys.localStorage.setItem("wrapperbase_statistics" + i.default.appid, JSON.stringify(this.database))
				}, t.prototype.getSaveCommit = function () {
					var t = cc.sys.localStorage.getItem("wrapperbase_statistics" + i.default.appid) || [];
					return 0 === t.length ? [] : JSON.parse(t)
				}, t.prototype.clearSaveCommit = function () {
					cc.sys.localStorage.setItem("wrapperbase_statistics" + i.default.appid, ""), this.database = []
				}, t.prototype.getTime = function () {
					return Math.floor((new Date).valueOf() / 1e3)
				}, t.prototype.startSchedule = function () {
					clearInterval(), setInterval(this.commit.bind(this), 1e3 * this.commitDelayTime)
				}, t.prototype.stopSchedule = function () {
					clearInterval()
				}, t.prototype.logEvent = function (t, e) {
					e || (e = "default"), this.database.push({
						event: t,
						scene: e,
						time: this.getTime()
					})
				}, t.ydhwDataStatistics = null, t = e = n([s], t)
			}());
		o.default = c, cc._RF.pop()
	}, {
		"../YdhwCfg": "YdhwCfg",
		"../YdhwModule/YdhwHttp": "YdhwHttp"
	}],
	YdhwFrameBox: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "b5d3dyxtfhDX5jrP4xGipIt", "YdhwFrameBox");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.channel = "", e._data = null, e._items = [], e
				}
				return n(e, t), e.prototype.start = function () {
					var t = this;
					this._items = this.node.children, a.default.Net.getSideBoxData(function (e) {
						!e || !e.boxconfig || e.boxconfig.length <= 0 || (t._data = e.boxconfig, t.updateData(), t.schedule(function () {
							t.updateData()
						}, 5))
					})
				}, e.prototype.updateData = function () {
					var t = this,
						e = 0;
					a.default.Util.shuffle(this._data), this._items.forEach(function (o) {
						if ("YdhwGameIconBigItem" === o.name) {
							var n = t._data[e];
							o.getComponent("YdhwGameIconItem").updateCell(n), o.getComponent("YdhwGameIconItem").setSource("Result_Box", t.channel), o.getComponent("YdhwGameIconItem").setClickCallfunc(function (e) {
								t.itemClickCallfunc(e)
							}), e++
						}
					})
				}, e.prototype.itemClickCallfunc = function (t) {
					var e = "";
					t && t.data && t.data.appid && (e = t.data.appid), a.default.reportAldEvent("\u6e38\u620f\u5927\u56fe\u6807\u6e38\u620f\u6309\u94ae\u70b9\u51fb", {
						appid: e,
						channel: this.channel
					})
				}, i([c], e.prototype, "channel", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwGameIconItem: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "018364ij9pGrIsKiiDTWL9J", "YdhwGameIconItem");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.appIcon = null, e.gameName = null, e.redPoint = null, e.personCnt = null, e.id = -1, e.type = -1, e.appid = "", e.path = "", e.img = "", e.iconUrl = "", e.title = "", e.channel = "", e.source = "", e.data = null, e._clickCallfunc = null, e
				}
				return n(e, t), e.prototype.start = function () {
					if (this.personCnt) {
						var t = a.default.Util.random(100, 900);
						this.personCnt.string = t + "\u4e07\u4eba\u5728\u73a9"
					}
				}, e.prototype.updateCell = function (t) {
					var e = this;
					this.data = t, t && t.id ? (this.id = t.id, this.type = t.type, 0 == t.type ? (this.appid = t.data.appid, this.path = t.data.path) : this.img = t.data.img, this.iconUrl = t.icon, this.title = t.title, this.iconUrl && "" !== this.iconUrl && a.default.Util.isWxEnv() && (t.texture ? this.setTex(t.texture) : cc.director.on("loadGameIcon_" + this.id, function (t) {
						e.setTex(t.getUserData())
					}, this)), this.gameName.string = this.title) : console.error("error data: ", t)
				}, e.prototype.setTex = function (t) {
					if (cc.isValid(this.node)) {
						var e = this.appIcon.node.getContentSize();
						this.appIcon.spriteFrame = new cc.SpriteFrame(t), this.appIcon.node.setContentSize(e)
					}
				}, e.prototype.onBtClick = function () {
					var t = this;
					!this.data || this.type < 0 || (this.redPoint && (this.redPoint.node.active = !1), 0 === this.type ? a.default.WX.gotoMiniGame(this.appid, {
						appid: this.appid
					}, this.path, function (e) {
						e ? a.default.Net.reportClickEvent(t.appid, "enable", t.node.parent.name + "_" + t.channel) : a.default.Net.reportClickEvent(t.appid, "cancel", t.node.parent.name + "_" + t.channel)
					}) : this.previewImg(this.img), this._clickCallfunc && this._clickCallfunc(this.data))
				}, e.prototype.previewImg = function (t) {
					a.default.Util.isWxEnv() && a.default.WX.previewImg(t)
				}, e.prototype.setSource = function (t, e) {
					this.source = t, this.channel = e
				}, e.prototype.setClickCallfunc = function (t) {
					this._clickCallfunc = t
				}, e.prototype.onDestroy = function () {
					cc.director.targetOff(this)
				}, i([c(cc.Sprite)], e.prototype, "appIcon", void 0), i([c(cc.Label)], e.prototype, "gameName", void 0), i([c(cc.Sprite)], e.prototype, "redPoint", void 0), i([c(cc.Label)], e.prototype, "personCnt", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwGuessYouLike: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "54cd5NJp0BLn5vQH1E1R3jA", "YdhwGuessYouLike");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.scroll = null, e.layout = null, e.itemPrefab = null, e.channel = "", e._data = null, e.beginIndex = 0, e
				}
				return n(e, t), e.prototype.start = function () {
					this.beginIndex = 0, this.updateList()
				}, e.prototype.updateList = function () {
					var t = this;
					this.unscheduleAllCallbacks(), this.layout.removeAllChildren(), a.default.Net.getSideBoxData(function (e) {
						if (e && e.boxconfig && (t._data = e, e && e.boxconfig && e.boxconfig.length > 0)) {
							for (var o = 0; o < e.boxconfig.length; o++) {
								var n = t.beginIndex + o;
								n >= e.boxconfig.length && (n -= e.boxconfig.length);
								var i = e.boxconfig[n];
								if ("" + i.status == "1")
									if (cc.sys.os === cc.sys.OS_IOS && 0 == i.type && 1 == i.data.shield_ios);
									else {
										var a = cc.instantiate(t.itemPrefab);
										a.parent = t.layout, a.getComponent("YdhwGameIconItem").updateCell(i), a.getComponent("YdhwGameIconItem").setSource("GuessYouLike", t.channel), a.getComponent("YdhwGameIconItem").setClickCallfunc(function (e) {
											t.itemClickCallfunc(e)
										})
									}
							}
							t.scheduleOnce(function () {
								t.beginIndex += 4, t.beginIndex >= e.boxconfig.length && (t.beginIndex -= e.boxconfig.length), t.updateList()
							}, 10)
						}
					})
				}, e.prototype.itemClickCallfunc = function (t) {
					var e = "";
					t && t.data && t.data.appid && (e = t.data.appid), a.default.reportAldEvent("\u731c\u4f60\u559c\u6b22\u6e38\u620f\u6309\u94ae\u70b9\u51fb", {
						appid: e,
						channel: this.channel
					})
				}, e.prototype.scollEvent = function (t) {
					var e = this;
					this.unscheduleAllCallbacks(), this.scheduleOnce(function () {
						e.beginIndex += 4, e._data && e._data.boxconfig && e.beginIndex >= e._data.boxconfig.length && (e.beginIndex -= e._data.boxconfig.length), e.updateList()
					}, 10)
				}, i([c(cc.ScrollView)], e.prototype, "scroll", void 0), i([c(cc.Node)], e.prototype, "layout", void 0), i([c(cc.Prefab)], e.prototype, "itemPrefab", void 0), i([c], e.prototype, "channel", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwHg: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "7062eNfEwRByLTTdRDjjlWF", "YdhwHg"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwUtil"),
			i = t("./YdhwComponent"),
			a = function () {
				function t() {
					this._recorderStatus = !1, this._recorderPath = "", this._recorderBeginTime = 0, this._recorderEndTime = 0, this.bannerId = [], this.videoId = ["10196", "10196"], this._banner = null, this._hasBanner = !1, this._bannerIsSmall = !1, this._video = null, this._hasVideo = !0, this._onVideoClose = null, this._timer = null, this.bReturn = !1
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwHg || (this.ydhwHg = new t), this.ydhwHg
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.gameLoadResult = function () {
					hg && hg.gameLoadResult && hg.gameLoadResult({
						code: 0
					})
				}, t.prototype.shareMessage = function (t, e, o, i) {
					n.default.instance.isHGEnv() && hg.showShareMenu({
						title: t,
						content: i + " https://go.onelink.me/7pHf/7dc6e868",
						goToUrl: "https://go.onelink.me/7pHf/7dc6e868",
						imageUrl: e
					})
				}, t.prototype.startRecord = function (t) {
					void 0 === t && (t = {
						duration: 120
					})
				}, t.prototype.stopRecord = function () { }, t.prototype.onStartRecord = function () { }, t.prototype.onStopRecord = function () { }, t.prototype.onErrorRecord = function () { }, t.prototype.clipVideo = function (t, e, o) { }, t.prototype.shareVideo = function (t) { }, t.prototype.checkVersion = function () { }, t.prototype.showToast = function (t, e) {
					n.default.instance.isHGEnv() && (e = e / 1e3 || 3, i.default.instance.showTips(t, e))
				}, t.prototype.isIphoneX = function () {
					return !!n.default.instance.isHGEnv() && ("" + hg.getSystemInfoSync().model).indexOf("iPhone X") >= 0
				}, t.prototype.createBanner = function (t, e) {
					void 0 === e && (e = !1)
				}, t.prototype.getBannerUnitId = function () {
					return this._banner ? this._banner.adUnitId : ""
				}, t.prototype.showBanner = function (t, e, o) {
					void 0 === t && (t = !1), void 0 === e && (e = !1)
				}, t.prototype.hideBanner = function () {
					this._hasBanner = !1, this._banner && this._banner.hide()
				}, t.prototype.destroyBanner = function () {
					this._hasBanner = !1, this._banner ? (this._banner.destroy(), this._banner = null) : console.log("tt banner \u672a\u521b\u5efa\uff01")
				}, t.prototype.bannerIsShow = function () {
					return this._hasBanner
				}, t.prototype.createVideo = function (t) {
					var e = this;
					n.default.instance.isHGEnv() && (this._video = hg.createRewardedVideoAd({
						adUnitId: parseInt(t)
					}), this._video.onClose = function (t) {
						t && t.isEnded ? (console.log("hg \u6b63\u5e38\u64ad\u653e\u7ed3\u675f"), e._onVideoClose && e._onVideoClose(!0)) : (console.log("hg \u4e2d\u9014\u64ad\u653e\u9000\u51fa"), e._onVideoClose && e._onVideoClose(!1))
					}, this._video.cancel = function () {
						e.bReturn || (e.bReturn = !0, console.log("cancel hg \u4e2d\u9014\u64ad\u653e\u9000\u51fa"), e._onVideoClose && e._onVideoClose(!1))
					}, this._video.onError = function () {
						console.log("ninjasword ===> rewardedVideoAd.onError()"), e.bReturn || (e.bReturn = !0, e._onVideoClose && e._onVideoClose(!1))
					})
				}, t.prototype.showVideo = function (t, e) {
					var o = this;
					if (this._video) {
						this._onVideoClose = t, this.bReturn = !1;
						var n = function () {
							o._timer && (clearTimeout(o._timer), o._timer = null)
						};
						n(), this._timer = setTimeout(function () {
							o._timer = null, o.bReturn || (console.log("10\u79d2\u5185\u65e0\u89c6\u9891\u56de\u8c03\uff0c\u81ea\u52a8\u56de\u8c03\u52a0\u8f7d\u5931\u8d25!"), o.bReturn = !0, e && e(!1))
						}, 1e4), console.log("ninjasword ===> rewardedVideoAd.show()"), this._video.show().then(function () {
							o.bReturn || (n(), console.log("hg \u89c6\u9891\u64ad\u653e\u6210\u529f\uff01"), e && e(!0))
						}, function (t) {
							o.bReturn || (o.bReturn = !0, n(), console.log("hg \u89c6\u9891\u64ad\u653e\u5931\u8d25\uff01"), e && e(!1))
						}).catch(function (t) {
							o.bReturn || (console.log("hg \u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff01"), o.bReturn = !0, n(), e && e(!1))
						})
					}
				}, t.prototype.canShowVideo = function () {
					return this._hasVideo
				}, t.prototype.getSystemInfoSync = function () {
					return hg.getSystemInfoSync()
				}, t.ydhwHg = null, t
			}();
		o.default = a, cc._RF.pop()
	}, {
		"./YdhwComponent": "YdhwComponent",
		"./YdhwUtil": "YdhwUtil"
	}],
	YdhwHttp: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "b25b3S75XRLFaIpfdqhEqw4", "YdhwHttp"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = function () {
			function t() { }
			return Object.defineProperty(t, "instance", {
				get: function () {
					return this.ydhwHttp || (this.ydhwHttp = new t), this.ydhwHttp
				},
				enumerable: !0,
				configurable: !0
			}), t.prototype.post = function (t, e, o) {
				var n = new XMLHttpRequest;
				n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.onreadystatechange = function () {
					4 == n.readyState && (n.status >= 200 && n.status <= 207 ? o(!0, n.responseText) : o(!1, n.responseText))
				}, n.open("POST", t, !0), n.send(e)
			}, t.prototype.get = function (t, e) {
				var o = new XMLHttpRequest;
				o.ontimeout = function (t) {
					e(!1, "timeout")
				}, o.onerror = function (t) {
					e(!1, "neterror")
				}, o.onreadystatechange = function () {
					4 == o.readyState && (o.status >= 200 && o.status <= 207 ? e(!0, o.responseText) : e(!1, "status error:" + o.status))
				}, o.open("GET", t, !0), cc.sys.isNative && o.setRequestHeader("Accept-Encoding", "gzip,deflate"), o.timeout = 3e3, o.send()
			}, t.ydhwHttp = null, t
		}();
		o.default = n, cc._RF.pop()
	}, {}],
	YdhwNet: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "71221PCPwJOnIbpgtlMLsnM", "YdhwNet"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("../YdhwCfg"),
			i = t("./YdhwHttp"),
			a = t("./YdhwWx"),
			r = t("../YdhwSDK"),
			s = t("./YdhwUtil"),
			c = function () {
				function t() {
					this._shareInfo = [], this._sideBoxInfo = null
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwNet || (this.ydhwNet = new t), this.ydhwNet
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.login = function (t) {
					var e = this;
					a.default.instance.login(function (o) {
						if (0 === o.code) {
							var n = {},
								i = a.default.instance.getLaunchOptionsSync();
							console.log("login launchOptions ================= ", i), i.scene && (n.scene = i.scene), i.query && (i.query.detail && (n.detail = i.query.detail), n.query = JSON.stringify(i.query)), e._loginServer(o.wxcode, n, t)
						}
					})
				}, t.prototype._loginServer = function (t, e, o) {
					var a = n.default.url + "newlogin?appid=" + n.default.appid + "&code=" + t + "&version=" + n.default.version + "&env=" + n.default.env + "&extra_data=" + JSON.stringify(e);
					0 != n.default.account_id && n.default.account_id && (a += "&account_id=" + n.default.account_id), console.log("_loginServer   url ===== ", a), i.default.instance.get(a, function (t, e) {
						if (t) {
							console.warn("data.responseText: " + e.responseText);
							var i = JSON.parse(e.responseText);
							r.default.setAccountId(i.account_id), "off" == i.switch ? (n.default.keySwitch = !1, n.default.shareScene = "examine") : (n.default.keySwitch = !0, n.default.shareScene = "normal"), console.log("obj.mistouch_switch ====  ", i.mistouch_switch), "off" == i.mistouch_switch ? n.default.mistouch_switch = !1 : n.default.mistouch_switch = !0, n.default.new_player = i.new_player, o && o()
						}
					})
				}, t.prototype.getShareTexture = function (t) {
					var e = this,
						o = n.default.url + "sharecard?appid=" + n.default.appid + "&scene=" + n.default.shareScene + "&env=" + n.default.env;
					i.default.instance.get(o, function (o, i) {
						if (o) {
							var a = JSON.parse(i.responseText);
							n.default.shareInfo = [], e._shareInfo = a.sharecard_config, e._preLoadShareTex(0), t && t()
						}
					})
				}, t.prototype._preLoadShareTex = function (t) {
					t < this._shareInfo.length && cc.loader.load(this._shareInfo[t].img, function (e, o) {
						e || (n.default.shareInfo.push(this._shareInfo[t]), t++, this._preLoadShareTex(t))
					}.bind(this))
				}, t.prototype.getSideBoxData = function (t) {
					var e = this;
					if (this._sideBoxInfo) t && t(this._sideBoxInfo);
					else {
						var o = n.default.url + "newestsidebox?appid=" + n.default.appid + "&version=" + n.default.version;
						i.default.instance.get(o, function (o, n) {
							if (o) {
								var i = JSON.parse(n.responseText);
								e._sideBoxInfo = i, e._loadGameIcon(0), t && t(e._sideBoxInfo)
							} else t && t(null)
						})
					}
				}, t.prototype._loadGameIcon = function (t) {
					var e = this;
					if (t < this._sideBoxInfo.boxconfig.length) {
						var o = this._sideBoxInfo.boxconfig[t];
						o.icon && "" !== o.icon ? cc.loader.load(o.icon, function (n, i) {
							if (!n) {
								e._sideBoxInfo.boxconfig[t].texture = i;
								var a = new cc.Event.EventCustom("loadGameIcon_" + o.id, !0);
								a.setUserData(i), cc.director.dispatchEvent(a)
							}
							t++, e._loadGameIcon(t)
						}) : (t++, this._loadGameIcon(t))
					}
				}, t.prototype.reportClickEvent = function (t, e, o) {
					var a = n.default.url + "clickcount?appid=" + n.default.appid + "&account_id=" + n.default.account_id + "&source=" + o + "&action=" + e + "&target=" + t;
					i.default.instance.get(a, function (t, e) { })
				}, t.prototype.getSwitch = function () {
					var t = n.default.url + "?cmd=getConfig";
					i.default.instance.get(t, function (t, e) {
						console.log("data: ", e), t && ("string" == typeof e && (e = JSON.parse(e)), 0 == e.code && (s.default.instance.isTTEnv() ? n.default.TTversion == e.data.TTGAME ? n.default.isShowVideo = !1 : n.default.isShowVideo = !0 : s.default.instance.isHGEnv() ? n.default.HGversion == e.data.HAGO ? n.default.isShowVideo = !1 : n.default.isShowVideo = !0 : s.default.instance.isOPPOEnv() ? n.default.QGversion == e.data.OPPO ? n.default.isShowVideo = !1 : n.default.isShowVideo = !0 : n.default.isShowVideo = !1))
					})
				}, t.ydhwNet = null, t
			}();
		o.default = c, cc._RF.pop()
	}, {
		"../YdhwCfg": "YdhwCfg",
		"../YdhwSDK": "YdhwSDK",
		"./YdhwHttp": "YdhwHttp",
		"./YdhwUtil": "YdhwUtil",
		"./YdhwWx": "YdhwWx"
	}],
	YdhwPrefabManager: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "feebbyIt09P4blTvZdbwVfE", "YdhwPrefabManager"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = function () {
			function t() {
				this._prefab = {}, this._times = 1, this._data = {}, this._paths = {}
			}
			return Object.defineProperty(t, "instance", {
				get: function () {
					return this.ydhwPrefabManager || (this.ydhwPrefabManager = new t), this.ydhwPrefabManager
				},
				enumerable: !0,
				configurable: !0
			}), t.prototype.loadPrefab = function (t, e) {
				var o = this,
					n = this.getName(t);
				this._prefab[n] ? e && e(this._prefab[n]) : cc.loader.loadRes(t, function (i, a) {
					if (i) return cc.error(i), o._times++, void (o._times > 3 ? (o._times = 1, e && e(null)) : o.loadPrefab(n, e));
					o._prefab[n] = a, o._paths[n] = t, e && e(o._prefab[n])
				})
			}, t.prototype.loadJson = function (t, e) {
				var o = this;
				this._data[t] ? e && e(this._data[t]) : cc.loader.loadRes(t, function (n, i) {
					n ? cc.error(n) : (o._data[t] = i, e && e(o._data[t]))
				})
			}, t.prototype.unloadPrefab = function (t) {
				var e = this.getName(t);
				if (this._prefab[e]) {
					var o = this.getPath(e);
					cc.loader.releaseRes(o), this._prefab[e] = null, this._paths[e] = null
				}
			}, t.prototype.getName = function (t) {
				var e = t.lastIndexOf("/");
				return e >= 0 ? t.substr(e + 1, t.length - e) : t
			}, t.prototype.getPath = function (t) {
				return this._paths[t]
			}, t.ydhwPrefabManager = null, t
		}();
		o.default = n, cc._RF.pop()
	}, {}],
	YdhwQQ: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "c05d9gmgz5L5oyRvG6S9H0p", "YdhwQQ"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwUtil"),
			i = t("../YdhwCfg"),
			a = t("./YdhwStoreManager"),
			r = t("../YdhwDataStatistics/YdhwDataStatistics"),
			s = t("../YdhwSDK"),
			c = function () {
				function t() {
					this.bannerId = ["3c9ea1d369cb18174093eac43474de01", "a4ee43ca6b549ead2fd9fa3b4b60b812", "9923d32503b8e4df1a673ecbac4d5100", "21135fdacb63647983a9f63039a52efe", "1bc90a822fd4fc8b1b75a08e700f113d"], this.videoId = ["d7130d73e2c21a33fefcdf921a1d09bc", "23c7c2102872f86e6585a22904ec3007"], this._button = null, this._banner = null, this._hasBanner = !1, this._bannerIsSmall = !1, this._video = null, this._hasVideo = !0, this._onVideoClose = null, this._timer = null, n.default.instance.isQQEnv() && (qq.updateShareMenu({
						withShareTicket: !0
					}), qq.showShareMenu(), this.onShareAppMessage(i.default.defaultShareInfo.content, i.default.defaultShareInfo.url), this.registerOnShow(), this.registerOnHide())
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwQQ || (this.ydhwQQ = new t), this.ydhwQQ
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.getLaunchOptionsSync = function () {
					return n.default.instance.isQQEnv() ? qq.getLaunchOptionsSync() : {}
				}, t.prototype.previewImg = function (t) {
					n.default.instance.isQQEnv() && qq.previewImage({
						urls: [t]
					})
				}, t.prototype.login = function (t) {
					n.default.instance.isQQEnv() && qq.login({
						success: function (e) {
							var o = {};
							e.code ? (o.code = 0, o.qqcode = e.code) : (o.code = -1, o.msg = e.errMsg), t && t(o)
						},
						fail: function (e) {
							var o = {
								code: -1
							};
							o.msg = e.errMsg, t && t(o)
						},
						complete: function (t) {
							console.log("qq.login.complete()!")
						}
					})
				}, t.prototype.authorize = function (t, e) {
					var o = this;
					n.default.instance.isQQEnv() ? qq.getSystemInfo({
						success: function (n) {
							var i = n.windowWidth,
								a = n.windowHeight,
								r = i / cc.view.getDesignResolutionSize().width,
								s = t.width * r,
								c = t.height * r,
								d = i / 2 + t.x * r - s / 2,
								l = a / 2 - t.y * r - c / 2;
							o._button = qq.createUserInfoButton({
								type: "text",
								text: "",
								style: {
									left: d,
									top: l,
									width: s,
									height: c,
									textAlign: "center",
									fontSize: 16,
									borderRadius: 4,
									borderColor: "#f0ff00",
									borderWidth: 1
								}
							}), o._button.onTap(function (t) {
								t.userInfo ? e && e(t.userInfo) : (console.log("\u5fae\u4fe1\u8fd4\u56de\u7684userInfo \u4e3a\u7a7a \uff01"), e && e(null))
							})
						}
					}) : e && e(null)
				}, t.prototype.destroyAuthBt = function () {
					this._button && (this._button.destroy(), this._button = null)
				}, t.prototype.isAuthorize = function (t) {
					n.default.instance.isQQEnv() ? qq.getSetting({
						success: function (e) {
							e.authSetting["scope.userInfo"] ? t(!0) : t(!1)
						}
					}) : t && t(!1)
				}, t.prototype.getUserInfo = function () {
					n.default.instance.isQQEnv() && qq.getUserInfo({
						success: function (t) { }
					})
				}, t.prototype.showShareMenu = function () {
					n.default.instance.isQQEnv() && qq.showShareMenu()
				}, t.prototype.onShareAppMessage = function (t, e) {
					void 0 === e && (e = ""), n.default.instance.isQQEnv() && qq.onShareAppMessage(function () {
						return {
							title: t,
							imageUrl: e
						}
					})
				}, t.prototype.shareMessage = function (t, e, o, i) {
					n.default.instance.isQQEnv() && qq.shareAppMessage({
						title: t,
						imageUrl: e,
						query: o || {},
						success: function (t) { },
						fail: function (t) { },
						complete: function (t) { }
					})
				}, t.prototype.isIphoneX = function () {
					return !!n.default.instance.isQQEnv() && ("" + qq.getSystemInfoSync().model).indexOf("iPhone X") >= 0
				}, t.prototype.createBanner = function (t, e) {
					var o = this;
					if (void 0 === e && (e = !1), n.default.instance.isQQEnv()) {
						this._banner && (this._banner.destroy(), this._banner = null);
						var a = qq.getSystemInfoSync(),
							r = e ? 300 : a.windowWidth,
							s = (a.windowWidth - r) / 2;
						this._banner = qq.createBannerAd({
							adUnitId: t,
							style: {
								left: s,
								top: a.windowHeight,
								width: r
							}
						}), this._banner.onLoad(function () {
							console.log("\u62c9\u53d6banner\u6210\u529f\uff01"), o._hasBanner ? o._banner.show() : console.log("banner\u56e0\u88ab\u9500\u6bc1\u6216\u8005\u9690\u85cf\uff0c\u672c\u6b21\u672a\u80fd\u5c55\u793a\uff01")
						}), this._banner.onError(function (t) {
							console.log("\u62c9\u53d6banner\u5931\u8d25\uff01"), o._banner = null
						}), this._banner.onResize(function (t) {
							var e = t.height;
							o.isIphoneX() && (e += i.default.offsetY * (a.windowHeight / cc.winSize.height)), o._banner.style.top = a.windowHeight - e, o._banner.style.left = (a.windowWidth - t.width) / 2, i.default.adNormalHeight = cc.winSize.height / a.windowHeight * e + i.default.offsetY, i.default.adHeight = i.default.adNormalHeight - i.default.offsetY - cc.winSize.height / a.windowHeight * t.height / 2;
							var n = new cc.Event.EventCustom(i.default.Evt.RESET_BANNER_HEIGHT, !1);
							cc.director.dispatchEvent(n)
						})
					}
				}, t.prototype.getBannerUnitId = function () {
					return this._banner ? this._banner.adUnitId : ""
				}, t.prototype.showBanner = function (t, e, o) {
					if (void 0 === t && (t = !1), void 0 === e && (e = !1), !this._banner || t) {
						this.destroyBanner(), this._hasBanner = !0;
						var i = n.default.instance.random(0, this.bannerId.length - 1),
							a = this.bannerId[i];
						console.log("bannerId : " + a), this.createBanner(a, e), this._bannerIsSmall = e
					} else if (this._hasBanner = !0, this._banner.show(), this._bannerIsSmall !== e || o) {
						this._bannerIsSmall = e;
						var r = qq.getSystemInfoSync(),
							s = e ? 300 : r.windowWidth;
						this._banner.style.width === s && (e ? s += .1 : s -= .1);
						var c = (r.windowWidth - s) / 2;
						this._banner.style.left = c, this._banner.style.width = s
					}
				}, t.prototype.hideBanner = function () {
					this._hasBanner = !1, this._banner && this._banner.hide()
				}, t.prototype.destroyBanner = function () {
					this._hasBanner = !1, this._banner ? (this._banner.destroy(), this._banner = null) : console.log("banner \u672a\u521b\u5efa\uff01")
				}, t.prototype.bannerIsShow = function () {
					return this._hasBanner
				}, t.prototype.createVideo = function (t) {
					var e = this;
					if (n.default.instance.isQQEnv())
						if (this._video) {
							if (this._video.adUnitId === t) return;
							this._video.adUnitId = t || i.default.videoId[0]
						} else this._video = qq.createRewardedVideoAd({
							adUnitId: t || i.default.videoId[0]
						}), this._video.onLoad(function () {
							console.log("\u89c6\u9891\u52a0\u8f7d\u6210\u529f\uff01"), e._hasVideo = !0
						}), this._video.onClose(function (t) {
							t && t.isEnded || void 0 === t ? e._onVideoClose && e._onVideoClose(!0) : e._onVideoClose && e._onVideoClose(!1)
						}), this._video.onError(function (t) {
							console.log("\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\u4e86\uff01"), e._hasVideo = !1, setTimeout(function () {
								e._video && e._video.load().then(function () {
									e._hasVideo = !0
								})
							}, 3e3)
						})
				}, t.prototype.showVideo = function (t, e) {
					var o = this;
					if (this._video) {
						this._onVideoClose = t;
						var n = !1;
						this._timer && (clearTimeout(this._timer), this._timer = null), this._timer = setTimeout(function () {
							o._timer = null, n || (console.log("4\u79d2\u5185\u65e0\u89c6\u9891\u56de\u8c03\uff0c\u81ea\u52a8\u56de\u8c03\u52a0\u8f7d\u5931\u8d25!"), n = !0, e && e(!1))
						}, 4e3), this._video.load().then(function () {
							n || (n = !0, o._timer && (clearTimeout(o._timer), o._timer = null), o._video.show().then(function () {
								console.log("\u89c6\u9891\u64ad\u653e\u6210\u529f\uff01"), e && e(!0)
							}).catch(function (t) {
								console.log("\u89c6\u9891\u64ad\u653e\u5931\u8d25\uff01"), e && e(!1)
							}))
						}).catch(function (t) {
							n || (console.log("\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff01"), n = !0, o._timer && (clearTimeout(o._timer), o._timer = null), e && e(!1))
						})
					}
				}, t.prototype.canShowVideo = function () {
					return this._hasVideo
				}, t.prototype.gotoMiniGame = function (t, e, o, i, a) {
					n.default.instance.isQQEnv() && qq.navigateToMiniProgram({
						appId: t,
						extraData: e,
						path: o,
						success: function (t) {
							i && i(!0)
						},
						fail: function (t) {
							i && i(!1)
						}
					})
				}, t.prototype.getShareInfo = function (t, e) {
					n.default.instance.isQQEnv() && qq.getShareInfo({
						shareTicket: t,
						success: function (t) {
							e && e(t)
						},
						fail: function (t) { }
					})
				}, t.prototype.gameClub = function (t, e) {
					n.default.instance.isQQEnv() && qq.getSystemInfo({
						success: function (o) {
							var n = o.windowWidth,
								i = o.windowHeight,
								a = n / cc.view.getDesignResolutionSize().width,
								r = t.width * a,
								s = t.height * a,
								c = n / 2 + t.x * a - r / 2,
								d = i / 2 - t.y * a - s / 2;
							qq.createGameClubButton({
								type: "text",
								text: "",
								style: {
									left: c,
									top: d,
									width: r,
									height: s,
									textAlign: "center",
									fontSize: 16,
									borderRadius: 4
								}
							}).onTap(function (t) {
								console.log("\u6e38\u620f\u5708\uff1ares = " + JSON.stringify(t)), e && e(!0)
							})
						}
					})
				}, t.prototype.updateScore = function (t, e, o, i) {
					if (n.default.instance.isQQEnv()) {
						var a = this._objectToKVArray(t);
						qq.setUserCloudStorage({
							KVDataList: a,
							success: e,
							fail: o,
							complete: i
						})
					}
				}, t.prototype._objectToKVArray = function (t) {
					var e = [];
					if (t instanceof Object)
						for (var o in t) e.push({
							key: o,
							value: t[o] + ""
						});
					else t instanceof Array && (e = t);
					return e
				}, t.prototype.showToast = function (t, e) {
					n.default.instance.isQQEnv() && (e = e || 3e3, qq.showToast({
						icon: "none",
						title: t,
						duration: e
					}))
				}, t.prototype.showModal = function (t, e, o, i, a, r) {
					void 0 === i && (i = !0), void 0 === a && (a = "\u53d6\u6d88"), void 0 === r && (r = "\u786e\u5b9a"), n.default.instance.isQQEnv() && qq.showModal({
						title: t,
						content: e,
						showCancel: i,
						cancelText: a,
						confirmText: r,
						success: function (t) {
							t.confirm ? o && o(!0) : t.cancel && o && o(!1)
						}
					})
				}, t.prototype.openCustomerServiceConversation = function (t) {
					n.default.instance.isQQEnv() && qq.openCustomerServiceConversation(t)
				}, t.prototype.getMenuButtonBoundingClientRect = function () {
					return n.default.instance.isQQEnv() ? qq.getMenuButtonBoundingClientRect() : {}
				}, t.prototype.requestMidasPayment = function (t, e) {
					if (n.default.instance.isQQEnv()) {
						var o = t.price ? 10 * t.price : 100;
						qq.requestMidasPayment({
							mode: "game",
							offerId: "1450019488",
							buyQuantity: o,
							env: 0,
							zoneId: 1,
							currencyType: "CNY",
							platform: "android",
							success: function () {
								console.warn("\u652f\u4ed8\u6210\u529f"), e && e(!0)
							},
							fail: function (t) {
								var o = t.errMsg,
									n = t.errCode;
								console.error(o, n), e && e(!1)
							}
						})
					}
				}, t.prototype.vibrateShort = function (t, e, o) {
					n.default.instance.isQQEnv() && (t = t || function () { }, e = e || function () { }, o = o || function () { }, qq.vibrateShort({
						success: t,
						fail: e,
						complete: o
					}))
				}, t.prototype.vibrateLong = function (t, e, o) {
					n.default.instance.isQQEnv() && (t = t || function () { }, e = e || function () { }, o = o || function () { }, qq.vibrateLong({
						success: t,
						fail: e,
						complete: o
					}))
				}, t.prototype.registerOnShow = function () {
					var t = this;
					qq.onShow(function (e) {
						if (i.default.otherMiniGameByWall) {
							i.default.otherMiniGameByWall = !1, console.log("\u901a\u8fc7\u79ef\u5206\u5899\u4ece\u5176\u4ed6\u5c0f\u6e38\u620f\u56de\u6765\u4e86\uff01");
							var o = new cc.Event.EventCustom(i.default.Evt.OTHER_MINIGAME_BACK, !0);
							cc.director.dispatchEvent(o)
						}
						e.shareTicket && "" !== e.shareTicket && (e.query.req_account_id && "" + i.default.account_id == "" + e.query.req_account_id && (console.log("\u81ea\u5df1\u4ece\u7fa4\u91cc\u56de\u5230\u6e38\u620f\uff01"), e.query.shareTicket = e.shareTicket, (o = new cc.Event.EventCustom(i.default.Evt.GROUP_BACK, !0)).setUserData(e.query), cc.director.dispatchEvent(o)));
						if (a.default.instance.getLocalData("isOpenAddMineGame") && (1089 == e.scene || 1023 == e.scene || 1103 == e.scene || 1104 == e.scene) && 0 != i.default.account_id && "" + i.default.addMineGame == "0") {
							i.default.addMineGame = 1, a.default.instance.setLocalData("addMineGame", "1");
							o = new cc.Event.EventCustom(i.default.Evt.FINISHED_ADD_MINIPROGRAM, !0);
							cc.director.dispatchEvent(o)
						}
						var r = new cc.Event.EventCustom(i.default.Evt.CHECK_PUBLIC_SCENE, !0);
						r.setUserData(e.scene), cc.director.dispatchEvent(r);
						var c = parseInt(a.default.instance.getLocalData("leaveGameTime"));
						if (!isNaN(c) && c) {
							Math.floor(((new Date).getTime() - c) / 1e3);
							a.default.instance.setLocalData("leaveGameTime", "0")
						}
						if (n.default.instance.getShareMutex()) {
							var d = n.default.instance.getShareCallfunc();
							if (d) {
								var l = function (e, o) {
									t.showModal("\u6e29\u99a8\u63d0\u793a", e, function (e) {
										if (e) {
											var i = n.default.instance.getShareParam();
											t.shareMessage(i.content, i.url, i.query), n.default.instance.setShareTime()
										} else o(!1), n.default.instance.setShareCallFunc(null), n.default.instance.setShareMutex(!1)
									})
								},
									u = function (t) {
										t(!0), n.default.instance.setShareCallFunc(null), n.default.instance.setShareMutex(!1)
									},
									h = n.default.instance.getShareParam();
								if (h.shareType === s.ShareType.NormalShare) n.default.instance.getLocalTime() - n.default.instance.getShareTime() < 2 ? l("\u8bf7\u5206\u4eab\u7ed9\u4e0d\u540c\u7684\u7fa4", d) : u(d);
								else if (h.shareType === s.ShareType.SpecialShare) {
									n.default.instance.addShareCount();
									var p = n.default.instance.getShareCount();
									if (1 === p) l("\u901a\u8baf\u5931\u8d25", d);
									else if (2 === p) {
										n.default.instance.getLocalTime() - n.default.instance.getShareTime() < 5 ? l("\u8bf7\u5206\u4eab\u7ed9\u4e0d\u540c\u7684\u7fa4", d) : u(d)
									} else if (p >= 3) {
										n.default.instance.getLocalTime() - n.default.instance.getShareTime() < 3 ? (d(!1), n.default.instance.setShareCallFunc(null), n.default.instance.setShareMutex(!1)) : u(d)
									}
								}
							}
						}
					})
				}, t.prototype.registerOnHide = function () {
					qq.onHide(function () {
						var t = (new Date).getTime();
						a.default.instance.setLocalData("leaveGameTime", "" + t), console.log("\u672c\u6b21\u79bb\u5f00\u6e38\u620f\u7684\u65f6\u95f4\u662f" + t), r.default.instance.eventOnHide()
					})
				}, t.prototype.isLiuHaiScreen = function () {
					var t = qq.getSystemInfoSync();
					return t.screenHeight / t.screenWidth > 2
				}, t.ydhwQQ = null, t
			}();
		o.default = c, cc._RF.pop()
	}, {
		"../YdhwCfg": "YdhwCfg",
		"../YdhwDataStatistics/YdhwDataStatistics": "YdhwDataStatistics",
		"../YdhwSDK": "YdhwSDK",
		"./YdhwStoreManager": "YdhwStoreManager",
		"./YdhwUtil": "YdhwUtil"
	}],
	YdhwRankLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "94a28Pn3NRNEZj0q5viTm2Y", "YdhwRankLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = t("../YdhwCfg"),
			s = cc._decorator,
			c = s.ccclass,
			d = s.property,
			l = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.wxRankNode = null, e.groupBtn = null, e.closeBtn = null, e.bannerIsShow = !1, e
				}
				return n(e, t), e.prototype.start = function () {
					this.fitScreen()
				}, e.prototype.addEvts = function () {
					var t = this;
					cc.director.on(a.default.Config.Evt.RESET_BANNER_HEIGHT, function (e, o) {
						t.fitScreen()
					}, this)
				}, e.prototype.onDestroy = function () {
					a.default.PrefabManager.unloadPrefab(this.node.name), this.bannerIsShow || a.default.hideBanner(), cc.director.targetOff(this)
				}, e.prototype.onEnable = function () {
					this.wxRankNode.getComponent("wxRankListPrefab").showFriendRank()
				}, e.prototype.onCloseBtn = function () {
					this.node.destroy(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.rankCloseBtn)
				}, e.prototype.checkGroup = function () {
					this.share(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.rankGroupBtn)
				}, e.prototype.share = function () {
					r.default.keySwitch ? a.default.share() : (console.error("\u76ee\u524d\u72b6\u6001\u4e0d\u80fdshare"), a.default.WX.showToast("\u6b21\u6570\u4e0d\u8db3\uff0c\u8bf7\u660e\u65e5\u518d\u6765\uff01"))
				}, e.prototype.onReturnBtnCallfunc = function () {
					this.node.destroy()
				}, e.prototype.fitScreen = function () {
					var t = this,
						e = cc.winSize.height / 2 + this.closeBtn.y - this.closeBtn.height / 2,
						o = (a.default.Config.adNormalHeight > e ? a.default.Config.adNormalHeight : e) - e;
					this.closeBtn.y += o, this.scheduleOnce(function () {
						t.closeBtn.active = !0
					}, 1)
				}, i([d(cc.Node)], e.prototype, "wxRankNode", void 0), i([d(cc.Node)], e.prototype, "groupBtn", void 0), i([d(cc.Node)], e.prototype, "closeBtn", void 0), e = i([c], e)
			}(cc.Component);
		o.default = l, cc._RF.pop()
	}, {
		"../YdhwCfg": "YdhwCfg",
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwSDK: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "25a74bo6clPvr1N13GUqxaT", "YdhwSDK"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n, i = t("./YdhwModule/YdhwPrefabManager"),
			a = t("./YdhwModule/YdhwNet"),
			r = t("./YdhwModule/YdhwStoreManager"),
			s = t("./YdhwModule/YdhwWx"),
			c = t("./YdhwModule/YdhwTT"),
			d = t("./YdhwModule/YdhwHg"),
			l = t("./YdhwModule/YdhwWeb"),
			u = t("./YdhwModule/YdhwQQ"),
			h = t("./YdhwModule/YdhwUtil"),
			p = t("./YdhwModule/YdhwComponent"),
			f = t("./YdhwModule/YdhwAudio"),
			g = t("./YdhwCfg"),
			y = t("./YdhwDataStatistics/YdhwDataStatistics"),
			m = t("./YdhwModule/XwwOPPO"),
			v = t("./YdhwModule/XwwFb");
		(function (t) {
			t[t.NormalShare = 1] = "NormalShare", t[t.SpecialShare = 2] = "SpecialShare"
		})(n = o.ShareType || (o.ShareType = {}));
		var _ = new (function () {
			function t() {
				this.PrefabManager = null, this.Net = null, this.StoreManager = null, this.Platform = null, this.Util = null, this.Component = null, this.Audio = null, this.Config = g.default, this.DataStatistics = null, this._isSmallBanner = !1, console.log("\u8fdb\u5165SDK\u6784\u9020\u51fd\u6570\uff01"), this.PrefabManager || (this.PrefabManager = i.default.instance, this.Net = a.default.instance, this.StoreManager = r.default.instance, this.Platform = l.default.instance, this.Util = h.default.instance, this.Component = p.default.instance, this.Audio = f.default.instance, this.DataStatistics = y.default.instance, h.default.instance.isTTEnv() ? this.Platform = c.default.instance : h.default.instance.isQQEnv() ? this.Platform = u.default.instance : h.default.instance.isHGEnv() ? this.Platform = d.default.instance : h.default.instance.isWxEnv() ? this.Platform = s.default.instance : h.default.instance.isOPPOEnv() ? this.Platform = m.default.instance : h.default.instance.isFBEnv() && (this.Platform = v.default.instance), this.init())
			}
			return t.prototype.init = function () {
				g.default.account_id = parseInt(this.StoreManager.getLocalData("account_id", "0")), this.Audio.init()
			}, t.prototype.share = function (t, e, o) {
				var i = {
					content: g.default.defaultShareInfo.content,
					url: g.default.defaultShareInfo.url,
					query: e,
					shareType: o || n.NormalShare
				},
					a = g.default.shareInfo.length > 0 ? this.Util.random(0, g.default.shareInfo.length - 1) : -1; - 1 !== a && (i.content = g.default.shareInfo[a].title, i.url = g.default.shareInfo[a].img), this.Util.setShareCallFunc(t), this.Util.setShareMutex(!0), this.Util.setShareTime(), this.Util.setShareCount(0), this.Util.setShareParam(i), this.Platform.shareMessage(i.content, i.url, i.query)
			}, t.prototype.setAccountId = function (t) {
				g.default.account_id = t, this.StoreManager.setLocalData("account_id", "" + t)
			}, t.prototype.setBannerType = function (t) {
				this._isSmallBanner = t
			}, t.prototype.showBanner = function (t, e, o) {
				void 0 === t && (t = !1);
				var n = !e && (!1 === e || this._isSmallBanner);
				this.Platform.showBanner(t, n, o)
			}, t.prototype.hideBanner = function () {
				this.Platform.hideBanner()
			}, t.prototype.bannerIsShow = function () {
				return this.Platform.bannerIsShow()
			}, t.prototype.createVideo = function (t) {
				this.Platform.createVideo(t)
			}, t.prototype.showVideo = function (t, e) {
				this.Platform.showVideo(t, e)
			}, t.prototype.startRecord = function (t) {
				void 0 === t && (t = {
					duration: 120
				}), h.default.instance.isTTEnv() && this.Platform.startRecord(t)
			}, t.prototype.stopRecord = function () {
				h.default.instance.isTTEnv() && this.Platform.stopRecord()
			}, t.prototype.shareVideo = function (t) {
				h.default.instance.isTTEnv() ? this.Platform.shareVideo(t) : t && t(!1)
			}, t.prototype.reportEvent = function (t, e) {
				this.DataStatistics.logEvent(t, e)
			}, t.prototype.reportAldEvent = function (t, e) {
				this.Util.isWxEnv() && wx.aldSendEvent(t, e)
			}, t.prototype.reportAnalytics = function (t, e) {
				this.Util.isTTEnv() && this.Platform.reportAnalytics(t, e)
			}, t.prototype.isLiuHaiScreen = function () {
				return !!this.Util.isWxEnv() && this.Platform.isLiuHaiScreen()
			}, t.prototype.showToast = function (t, e) {
				this.Platform.showToast ? this.Platform.showToast(t, e) : l.default.instance.showToast(t, e)
			}, t.prototype.getSystemInfo = function () {
				return this.Util.isHGEnv() ? this.Platform.getSystemInfoSync() : null
			}, t.prototype.gameLoadResult = function () {
				this.Util.isHGEnv() && this.Platform.gameLoadResult()
			}, t.prototype.showInsertAd = function (t) {
				this.Platform.showInsertAd && this.Platform.showInsertAd(t)
			}, t
		}());
		o.default = _, cc._RF.pop()
	}, {
		"./YdhwCfg": "YdhwCfg",
		"./YdhwDataStatistics/YdhwDataStatistics": "YdhwDataStatistics",
		"./YdhwModule/XwwFb": "XwwFb",
		"./YdhwModule/XwwOPPO": "XwwOPPO",
		"./YdhwModule/YdhwAudio": "YdhwAudio",
		"./YdhwModule/YdhwComponent": "YdhwComponent",
		"./YdhwModule/YdhwHg": "YdhwHg",
		"./YdhwModule/YdhwNet": "YdhwNet",
		"./YdhwModule/YdhwPrefabManager": "YdhwPrefabManager",
		"./YdhwModule/YdhwQQ": "YdhwQQ",
		"./YdhwModule/YdhwStoreManager": "YdhwStoreManager",
		"./YdhwModule/YdhwTT": "YdhwTT",
		"./YdhwModule/YdhwUtil": "YdhwUtil",
		"./YdhwModule/YdhwWeb": "YdhwWeb",
		"./YdhwModule/YdhwWx": "YdhwWx"
	}],
	YdhwSideBox: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "9e68dEWA3xDKZCIiL4OU1bb", "YdhwSideBox");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.mask = null, e.content = null, e.layout = null, e.contentbg = null, e.contentInner = null, e.view = null, e.btnInOut = null, e.scroll = null, e.itemPrefab = null, e.channel = "", e.pos = null, e
				}
				return n(e, t), e.prototype.onLoad = function () {
					this.pos = this.content.position
				}, e.prototype.start = function () {
					var t = this;
					a.default.Net.getSideBoxData(function (e) {
						e && t.setData(e)
					})
				}, e.prototype.setData = function (t) {
					var e = this;
					t.boxconfig && t.boxconfig.length > 0 && (t.boxconfig.forEach(function (t) {
						if ("" + t.status == "1")
							if (cc.sys.os === cc.sys.OS_IOS && 0 == t.type && 1 == t.data.shield_ios);
							else {
								var o = cc.instantiate(e.itemPrefab);
								o.parent = e.layout, o.getComponent("YdhwGameIconItem").updateCell(t), o.getComponent("YdhwGameIconItem").setSource("SideBox", e.channel), o.getComponent("YdhwGameIconItem").setClickCallfunc(function (t) {
									e.itemClickCallfunc(t)
								})
							}
					}), this.scheduleOnce(function () {
						e.contentbg.height = e.layout.height + (e.contentbg.height - e.scroll.node.height), e.contentInner.height = e.layout.height + (e.contentInner.height - e.scroll.node.height), e.view.height = e.layout.height, e.scroll.node.height = e.layout.height
					}, .5))
				}, e.prototype.onBtOutIn = function () {
					var t = this;
					if (this.btnInOut.interactable = !1, Math.abs(this.content.x) > cc.winSize.width / 2) {
						this.mask.runAction(cc.fadeTo(.25, 170)), this.setPropagation(!0);
						var e = cc.moveTo(.25, cc.v2(this.contentbg.width / 2 - cc.winSize.width / 2 - 15, this.pos.y)),
							o = cc.callFunc(function () {
								t.btnInOut.interactable = !0
							}),
							n = cc.sequence(e, o);
						this.content.runAction(n), a.default.reportAldEvent("\u4fa7\u8fb9\u76d2\u5b50\u6253\u5f00\u6309\u94ae\u70b9\u51fb")
					} else {
						this.mask.runAction(cc.fadeTo(.25, 0));
						e = cc.moveTo(.25, this.pos), o = cc.callFunc(function () {
							this.btnInOut.interactable = !0, this.setPropagation(!1)
						}.bind(this)), n = cc.sequence(e, o);
						this.content.runAction(n)
					}
				}, e.prototype.setPropagation = function (t) {
					t ? (this.mask.on("touchstart", this.Propagation, this), this.mask.on("touchend", this.Propagation, this)) : (this.mask.off("touchstart", this.Propagation, this), this.mask.off("touchend", this.Propagation, this))
				}, e.prototype.Propagation = function (t) {
					t.stopPropagation()
				}, e.prototype.itemClickCallfunc = function (t) {
					var e = "";
					t && t.data && t.data.appid && (e = t.data.appid), a.default.reportAldEvent("\u4fa7\u8fb9\u76d2\u5b50\u6e38\u620f\u6309\u94ae\u70b9\u51fb", {
						appid: e,
						channel: this.channel
					})
				}, i([c(cc.Node)], e.prototype, "mask", void 0), i([c(cc.Node)], e.prototype, "content", void 0), i([c(cc.Node)], e.prototype, "layout", void 0), i([c(cc.Node)], e.prototype, "contentbg", void 0), i([c(cc.Node)], e.prototype, "contentInner", void 0), i([c(cc.Node)], e.prototype, "view", void 0), i([c(cc.Button)], e.prototype, "btnInOut", void 0), i([c(cc.ScrollView)], e.prototype, "scroll", void 0), i([c(cc.Prefab)], e.prototype, "itemPrefab", void 0), i([c], e.prototype, "channel", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwSignDayItem: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "20c285oA/NJAK3nldb3Vsr8", "YdhwSignDayItem");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.dayLabel = null, e.role = null, e.role_effect = null, e.icon = null, e.num = null, e.todayMark = null, e.checkIcon = null, e.videoBtn = null, e.videoBtnClicked = !1, e._data = null, e
				}
				return n(e, t), e.prototype.start = function () {
					a.default.createVideo(a.default.Config.videoId[1])
				}, e.prototype.setIcon = function (t, e) {
					this.icon.spriteFrame = t, this.icon.node.setContentSize(e)
				}, e.prototype.updateItem = function (t, e) {
					void 0 === e && (e = !1), this._data = t, e ? (this.dayLabel.string = "\u4eca\u5929", this.dayLabel.node.color = cc.color(255, 199, 20)) : (this.dayLabel.string = "\u7b2c" + t.id + "\u5929", this.todayMark.node.active = !1), this.videoBtn.node.active = !1, this.checkIcon.node.active = !1, 0 === t.status ? e || (this.videoBtn.node.active = !0) : 1 === t.status && (this.checkIcon.node.active = !0), console.log("data.type: " + t.type), 1 === t.type ? this.num.string = t.count : (this.num.string = "\u89d2\u8272", this.icon.node.active = !1, this.role.active = !0, this.role.getComponent("Role").setRoleID(t.count, !1), this.role_effect.active = !0)
				}, e.prototype.onVideoBtnCallfunc = function () {
					var t = this;
					this.videoBtnClicked || (this.videoBtnClicked = !0, a.default.showVideo(function (e) {
						t.videoBtnClicked = !1, cc.isValid(t.node) && (e ? t.success() : a.default.WX.showToast("\u4eb2\uff0c\u770b\u5b8c15\u79d2\u7684\u89c6\u9891\u624d\u80fd\u9886\u53d6\u5956\u52b1\u54e6\uff01~"))
					}, function (e) {
						t.videoBtnClicked = !1, cc.isValid(t.node) && "failed" === e && a.default.WX.showToast("\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01")
					}), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.signBuQianClicked))
				}, e.prototype.success = function () {
					var t = new cc.Event.EventCustom("get_reward_success", !0);
					t.setUserData(this._data.id), cc.director.dispatchEvent(t), 1 === this._data.type ? a.default.WX.showToast("\u606d\u559c\u60a8\u83b7\u5f97" + this._data.count + "\u4e2a\u94bb\u77f3\uff01") : a.default.WX.showToast("\u606d\u559c\u60a8\u89e3\u9501\u65b0\u89d2\u8272\uff01")
				}, i([c(cc.Label)], e.prototype, "dayLabel", void 0), i([c(cc.Node)], e.prototype, "role", void 0), i([c(cc.Node)], e.prototype, "role_effect", void 0), i([c(cc.Sprite)], e.prototype, "icon", void 0), i([c(cc.Label)], e.prototype, "num", void 0), i([c(cc.Sprite)], e.prototype, "todayMark", void 0), i([c(cc.Sprite)], e.prototype, "checkIcon", void 0), i([c(cc.Button)], e.prototype, "videoBtn", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwSignDayLayer: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "20a85sR1ntIh73BxOB+GAmY", "YdhwSignDayLayer");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.closeBtn = null, e.getBtn = null, e.upLayout = null, e.bottomLayout = null, e.getMoreNode = null, e.getMoreBtn = null, e.getMoreCloseBtn = null, e.getMoreBtnLabel = null, e.giftIcon = null, e.giftNum = null, e.itemPrefab = null, e.iconsArr = [], e.toggle = null, e.shareIcon = null, e.videoIcon = null, e.signDayData = null, e.rewardData = null, e.todayTh = 1, e.items = {}, e.videoBtnClicked = !1, e.shareBtnClicked = !1, e
				}
				return n(e, t), e.prototype.initData = function () {
					var t = a.default.StoreManager.getLocalData("SignDayData");
					if ("0" !== t) {
						var e = JSON.parse(t),
							o = Math.abs((a.default.Util.getLocalTime() - e.createTime) / 86400);
						o >= 7 ? this.createDefaultData() : (this.todayTh = Math.floor(o) + 1, this.signDayData = e, this.initNativeStatus(this.todayTh))
					} else this.createDefaultData();
					console.log("this.todayTh: " + this.todayTh), this.updateData()
				}, e.prototype.updateData = function () {
					var t = {};
					this.rewardData = [{
						id: 1,
						type: t[1].PriseType,
						icon: 1,
						size: cc.size(59, 63),
						count: t[1].PriseValue,
						twiceType: t[1].MorePriseType,
						twiceCount: t[1].MorePriseValue,
						status: this.signDayData.firstDay.status
					}, {
						id: 2,
						type: t[2].PriseType,
						icon: 1,
						size: cc.size(59, 63),
						count: t[2].PriseValue,
						twiceType: t[2].MorePriseType,
						twiceCount: t[2].MorePriseValue,
						status: this.signDayData.secondDay.status
					}, {
						id: 3,
						type: t[3].PriseType,
						icon: 2,
						size: cc.size(79, 63),
						count: t[3].PriseValue,
						twiceType: t[3].MorePriseType,
						twiceCount: t[3].MorePriseValue,
						status: this.signDayData.thirdDay.status
					}, {
						id: 4,
						type: t[4].PriseType,
						icon: 2,
						size: cc.size(79, 63),
						count: t[4].PriseValue,
						twiceType: t[4].MorePriseType,
						twiceCount: t[4].MorePriseValue,
						status: this.signDayData.fourthDay.status
					}, {
						id: 5,
						type: t[5].PriseType,
						icon: 2,
						size: cc.size(79, 63),
						count: t[5].PriseValue,
						twiceType: t[5].MorePriseType,
						twiceCount: t[5].MorePriseValue,
						status: this.signDayData.fifthDay.status
					}, {
						id: 6,
						type: t[6].PriseType,
						icon: 3,
						size: cc.size(90, 79),
						count: t[6].PriseValue,
						twiceType: t[6].MorePriseType,
						twiceCount: t[6].MorePriseValue,
						status: this.signDayData.sixthDay.status
					}, {
						id: 7,
						type: t[7].PriseType,
						icon: 3,
						size: cc.size(90, 79),
						count: t[7].PriseValue,
						twiceType: t[7].MorePriseType,
						twiceCount: t[7].MorePriseValue,
						status: this.signDayData.seventhDay.status
					}];
					for (var e = [], o = this.rewardData[6].count, n = 0; n < 9; n++) {
						if (o += n, !e.find(function (t) {
							return t.id == o
						})) break
					}
					o > 36 ? (this.rewardData[6].type = this.rewardData[6].twiceType, this.rewardData[6].count = this.rewardData[6].twiceCount) : this.rewardData[6].count = o, this.checkTodayStatus()
				}, e.prototype.createDefaultData = function () {
					this.todayTh = 1, this.signDayData = {
						createTime: "",
						firstDay: {
							status: 0
						},
						secondDay: {
							status: 2
						},
						thirdDay: {
							status: 2
						},
						fourthDay: {
							status: 2
						},
						fifthDay: {
							status: 2
						},
						sixthDay: {
							status: 2
						},
						seventhDay: {
							status: 2
						}
					}, this.signDayData.createTime = a.default.Util.getTodayZeroTime(), this.save()
				}, e.prototype.save = function () {
					a.default.StoreManager.setLocalData("SignDayData", JSON.stringify(this.signDayData))
				}, e.prototype.changeStatus = function (t, e) {
					void 0 === e && (e = 1);
					var o = ["firstDay", "secondDay", "thirdDay", "fourthDay", "fifthDay", "sixthDay", "seventhDay"];
					if (!(t > o.length)) {
						var n = o[t - 1];
						this.signDayData[n].status = e, this.save(), this.updateData()
					}
				}, e.prototype.initNativeStatus = function (t, e, o) {
					void 0 === e && (e = 2), void 0 === o && (o = 0);
					var n = ["firstDay", "secondDay", "thirdDay", "fourthDay", "fifthDay", "sixthDay", "seventhDay"];
					if (!(t > n.length)) {
						for (var i = 0; i < t; i++) {
							var a = n[i];
							this.signDayData[a].status == e && (this.signDayData[a].status = o)
						}
						this.save()
					}
				}, e.prototype.getStatus = function (t) {
					var e = ["firstDay", "secondDay", "thirdDay", "fourthDay", "fifthDay", "sixthDay", "seventhDay"];
					if (t > e.length) return 2;
					var o = e[t - 1];
					return this.signDayData[o].status
				}, e.prototype.onLoad = function () {
					this.initData(), this.addItems(), this.addEvts(), a.default.Config.mistouch_switch ? (console.log("mistouch_switch true 2222222222222"), a.default.hideBanner(), this.scheduleOnce(function () {
						a.default.isLiuHaiScreen() ? this.closeBtn.node.y += 300 : this.closeBtn.node.y += 200, a.default.showBanner(!1, !0, !0)
					}.bind(this), 1)) : (console.log("mistouch_switch false11111111111111111111111"), a.default.hideBanner(), a.default.isLiuHaiScreen() ? this.closeBtn.node.getComponent(cc.Widget).bottom += 300 : this.closeBtn.node.getComponent(cc.Widget).bottom += 200, this.scheduleOnce(function () {
						a.default.showBanner(!1, !0, !0)
					}, 1)), a.default.StoreManager.setLocalData("SignLastOpen", a.default.Util.getTodayDate())
				}, e.prototype.addItems = function () {
					for (var t = 0; t < 7; t++) {
						var e = this.rewardData[t],
							o = cc.instantiate(this.itemPrefab);
						o.parent = t < 3 ? this.upLayout : this.bottomLayout, e.icon - 1 < this.iconsArr.length && 1 === e.type && o.getComponent("YdhwSignDayItem").setIcon(this.iconsArr[e.icon - 1], e.size), o.getComponent("YdhwSignDayItem").updateItem(e, t + 1 === this.todayTh), this.items[e.id] = o
					}
				}, e.prototype.addEvts = function () {
					var t = this;
					cc.director.on("get_reward_success", function (e) {
						var o = e.getUserData();
						t.changeStatus(o), t.items[o] && t.items[o].getComponent("YdhwSignDayItem").updateItem(t.rewardData[o - 1], o === t.todayTh)
					}, this), cc.director.on(a.default.Config.Evt.RESET_BANNER_HEIGHT, function (e, o) {
						t.onFit()
					}, this)
				}, e.prototype.onDestroy = function () {
					cc.director.targetOff(this), a.default.hideBanner()
				}, e.prototype.checkTodayStatus = function () {
					this.todayTh - 1 >= this.rewardData.length || this.rewardData[this.todayTh - 1] && (console.log("this.rewardData[this.todayTh - 1]: " + JSON.stringify(this.rewardData[this.todayTh - 1])), 1 === this.rewardData[this.todayTh - 1].status && (this.getBtn.interactable = !1))
				}, e.prototype.onCloseCallfunc = function () {
					this.node.destroy(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.signCloseClicked)
				}, e.prototype.onGetBtnCallfunc = function () {
					this.success(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.signGetBtnClicked)
				}, e.prototype.success = function () {
					if (this.todayTh - 1 >= this.rewardData.length) console.error("this.todayTh: " + this.todayTh);
					else {
						var t = this.rewardData[this.todayTh - 1],
							e = new cc.Event.EventCustom("get_reward_success", !0);
						e.setUserData(t.id), cc.director.dispatchEvent(e), 1 === t.type ? a.default.showToast("\u606d\u559c\u60a8\u83b7\u5f97" + t.count + "\u4e2a\u94bb\u77f3\uff01") : a.default.showToast("\u606d\u559c\u60a8\u89e3\u9501\u65b0\u89d2\u8272\uff01"), this.getMoreNode.active = !0, this.checkShare(), this.judeToggleEnable(), t.icon - 1 >= this.iconsArr.length ? console.error("todayData.icon: " + t.icon) : (this.giftIcon.spriteFrame = this.iconsArr[t.icon - 1], this.giftNum.string = "+" + t.twiceCount, a.default.Config.mistouch_switch ? (a.default.hideBanner(), this.getMoreCloseBtn.node.active = !0, this.scheduleOnce(function () {
							a.default.isLiuHaiScreen() ? this.getMoreCloseBtn.node.y += 300 : this.getMoreCloseBtn.node.y += 200, a.default.showBanner(!1, !0, !0)
						}.bind(this), 1)) : (this.getMoreCloseBtn.node.active = !0, a.default.isLiuHaiScreen() ? this.getMoreCloseBtn.node.getComponent(cc.Widget).bottom += 300 : this.getMoreCloseBtn.node.getComponent(cc.Widget).bottom += 200, this.scheduleOnce(function () {
							a.default.showBanner(!1, !0, !0)
						}, 1)))
					}
				}, e.prototype.onFit = function () {
					cc.winSize, a.default.Config.adNormalHeight
				}, e.prototype.onGetMoreCloseCallfunc = function () {
					this.getMoreNode.active = !1, a.default.showBanner(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.signGetMoreCloseClicked)
				}, e.prototype.checkShare = function () {
					a.default.Config.keySwitch || (this.toggle.node.active = !1)
				}, e.prototype.onGetMoreBtnCallfunc = function () {
					this.toggle.node.active && this.toggle.isChecked ? (this.share(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.signGetMoreShareClicked)) : (this.video(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.signGetMoreVideoClicked))
				}, e.prototype.judeToggleEnable = function () {
					this.toggle.node.active && this.toggle.isChecked ? this.showShareBtn() : this.showVideoBtn()
				}, e.prototype.showShareBtn = function () {
					this.shareIcon.active = !0, this.videoIcon.active = !1
				}, e.prototype.showVideoBtn = function () {
					this.shareIcon.active = !1, this.videoIcon.active = !0
				}, e.prototype.onToggleCallfunc = function () {
					this.judeToggleEnable()
				}, e.prototype.video = function () {
					var t = this;
					this.videoBtnClicked || (this.videoBtnClicked = !0, a.default.showVideo(function (e) {
						cc.isValid(t.node) && (t.videoBtnClicked = !1, e ? t.getMoreSuccess() : a.default.showToast("\u4eb2\uff0c\u770b\u5b8c15\u79d2\u7684\u89c6\u9891\u624d\u80fd\u9886\u53d6\u5956\u52b1\u54e6~"))
					}, function (e) {
						cc.isValid(t.node) && (t.videoBtnClicked = !1, "failed" === e && t.share(!0))
					}))
				}, e.prototype.share = function (t) {
					var e = this;
					void 0 === t && (t = !1), a.default.Config.keySwitch ? this.shareBtnClicked || (this.shareBtnClicked = !0, a.default.share(function (t) {
						e.shareBtnClicked = !1, t ? e.getMoreSuccess() : (e.toggle.isChecked = !1, e.judeToggleEnable(), a.default.showToast("\u8bf7\u4e0d\u8981\u9a9a\u6270\u540c\u4e00\u4e2a\u597d\u53cb\uff01"))
					}, null, a.ShareType.SpecialShare)) : t && a.default.showToast("\u4eb2\uff0c\u4eca\u65e5\u5df2\u7ecf\u6ca1\u6709\u89c6\u9891\u4e86\u54e6\uff0c\u8bf7\u660e\u65e5\u518d\u6765\uff01")
				}, e.prototype.getMoreSuccess = function () {
					if (this.onGetMoreCloseCallfunc(), this.todayTh - 1 >= this.rewardData.length) console.error("this.todayTh: " + this.todayTh);
					else {
						var t = this.rewardData[this.todayTh - 1];
						a.default.showToast("\u606d\u559c\u60a8\u518d\u6b21\u83b7\u5f97" + t.twiceCount + "\u4e2a\u94bb\u77f3\uff01")
					}
				}, i([c(cc.Button)], e.prototype, "closeBtn", void 0), i([c(cc.Button)], e.prototype, "getBtn", void 0), i([c(cc.Node)], e.prototype, "upLayout", void 0), i([c(cc.Node)], e.prototype, "bottomLayout", void 0), i([c(cc.Node)], e.prototype, "getMoreNode", void 0), i([c(cc.Button)], e.prototype, "getMoreBtn", void 0), i([c(cc.Button)], e.prototype, "getMoreCloseBtn", void 0), i([c(cc.Label)], e.prototype, "getMoreBtnLabel", void 0), i([c(cc.Sprite)], e.prototype, "giftIcon", void 0), i([c(cc.Label)], e.prototype, "giftNum", void 0), i([c(cc.Prefab)], e.prototype, "itemPrefab", void 0), i([c([cc.SpriteFrame])], e.prototype, "iconsArr", void 0), i([c(cc.Toggle)], e.prototype, "toggle", void 0), i([c(cc.Node)], e.prototype, "shareIcon", void 0), i([c(cc.Node)], e.prototype, "videoIcon", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwStoreManager: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "75d60I4ZmtHP4Hs0HBXFEZr", "YdhwStoreManager"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwUtil"),
			i = function () {
				function t() { }
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwStoreManager || (this.ydhwStoreManager = new t), this.ydhwStoreManager
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.setLocalData = function (t, e) {
					this._save({
						key: t,
						data: e
					})
				}, t.prototype.getLocalData = function (t, e) {
					return e = e || "0", this._get(t, e)
				}, t.prototype._save = function (t) {
					if (n.default.instance.isWxEnv()) try {
						wx.setStorageSync(t.key, t.data)
					} catch (e) {
						console.warn("obj: [" + JSON.stringify(t) + "] save failed!")
					} else cc.sys.localStorage.setItem(t.key, t.data)
				}, t.prototype._get = function (t, e) {
					if (n.default.instance.isWxEnv()) try {
						var o = wx.getStorageSync(t);
						return o || e
					} catch (t) {
						return e
					}
					return cc.sys.localStorage.getItem(t) || e
				}, t.ydhwStoreManager = null, t
			}();
		o.default = i, cc._RF.pop()
	}, {
		"./YdhwUtil": "YdhwUtil"
	}],
	YdhwTT: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "2c432M0H7xFZ7QT2MKBzZc0", "YdhwTT"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwUtil"),
			i = t("../YdhwCfg"),
			a = function () {
				function t() {
					this._recorderStatus = !1, this._recorderPath = "", this._recorderBeginTime = 0, this._recorderEndTime = 0, this.bannerId = ["aikh1375n5a2420cc4", "1eib36abc2e7f5o3dk", "kk1eedj9e6hrqn1l78", "k8mbxkt93p3ff20903", "677e03f1d43cgmfg37"], this.videoId = ["pkyci61k3w20k3ccid", "4eb5b6fbhe7bals6fo"], this._banner = null, this._hasBanner = !1, this._bannerIsSmall = !1, this._video = null, this._hasVideo = !0, this._onVideoClose = null, this._timer = null, tt && (tt.showShareMenu({
						withShareTicket: !0
					}), tt.onShareAppMessage(function (t) {
						return console.log(t.channel), {
							title: i.default.defaultShareInfo.content,
							imageUrl: i.default.defaultShareInfo.url,
							query: ""
						}
					}), this.onStartRecord(), this.onStopRecord(), this.onErrorRecord())
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwTT || (this.ydhwTT = new t), this.ydhwTT
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.shareMessage = function (t, e, o, i) {
					if (tt) {
						var a = n.default.instance.getShareCallfunc();
						tt.shareAppMessage({
							title: t,
							imageUrl: e,
							query: o || {},
							success: function (t) {
								a && a(!0)
							},
							fail: function (t) {
								a && a(!1)
							}
						})
					}
				}, t.prototype.startRecord = function (t) {
					void 0 === t && (t = {
						duration: 120
					}), this._recorderStatus = !0, tt.getGameRecorderManager().start(t)
				}, t.prototype.stopRecord = function () {
					this._recorderStatus = !1, tt.getGameRecorderManager().stop()
				}, t.prototype.onStartRecord = function () {
					var t = this;
					tt.getGameRecorderManager().onStart(function (e) {
						console.log("\u5f00\u59cb\u5f55\u5c4f, res: ", e), t._recorderBeginTime = n.default.instance.getLocalMilTime(), console.log("\u5f00\u59cb\u5f55\u5c4f\u65f6\u95f4 : ", t._recorderBeginTime)
					})
				}, t.prototype.onStopRecord = function () {
					var t = this;
					tt.getGameRecorderManager().onStop(function (e) {
						console.log("\u7ed3\u675f\u5f55\u5c4f\uff0c res:", e), t._recorderEndTime = n.default.instance.getLocalMilTime(), console.log("\u7ed3\u675f\u5f55\u5c4f\u65f6\u95f4 : ", t._recorderEndTime), t._recorderPath = e.videoPath, t._recorderStatus && (console.log("\u5f02\u5e38\u7ed3\u675f\uff0c\u91cd\u65b0\u5f00\u59cb\u5f55\u5c4f"), t.startRecord())
					})
				}, t.prototype.onErrorRecord = function () {
					var t = this;
					tt.getGameRecorderManager().onError(function (e) {
						console.error("\u5f55\u5c4f\u51fa\u9519\uff1a res:", e), t._recorderStatus && (console.log("\u5f02\u5e38\u7ed3\u675f\uff0c\u91cd\u65b0\u5f00\u59cb\u5f55\u5c4f"), t.startRecord())
					})
				}, t.prototype.clipVideo = function (t, e, o) {
					tt.getGameRecorderManager().clipVideo({
						path: this._recorderPath,
						timeRange: t || [15, 0],
						success: function (t) {
							console.log(t.videoPath), e && e(t)
						},
						fail: function (t) {
							o && o(t)
						}
					})
				}, t.prototype.shareVideo = function (t) {
					var e = this;
					tt.shareAppMessage({
						channel: "video",
						extra: {
							videoPath: e._recorderPath,
							videoTopics: ["\u6025\u901f\u7279\u79cd\u5175"],
							createChallenge: !0
						},
						success: function (e) {
							console.log("\u5206\u4eab\u6210\u529f\uff01"), t && t(!0, null)
						},
						fail: function (o) {
							console.error("\u5206\u4eab\u5931\u8d25\uff01err: ", o);
							var n = e._recorderEndTime - e._recorderBeginTime;
							console.error("\u5f55\u5c4f\u65f6\u95f4\u4e3a\uff1a ", n), "shareAppMessage:cancel" === o.errMsg ? o.errMsg = "\u53d6\u6d88\u5206\u4eab\u5f55\u5c4f" : o.errMsg = n < 3500 ? "\u5f55\u50cf\u5931\u8d25\uff0c\u5f55\u50cf\u89c6\u9891\u592a\u77ed\u54e6~" : "\u5206\u4eab\u5931\u8d25", t && t(!1, o.errMsg)
						}
					})
				}, t.prototype.checkVersion = function () {
					var t = tt.getUpdateManager();
					t.onCheckForUpdate(function (t) {
						console.log(t.hasUpdate)
					}), t.onUpdateReady(function () {
						tt.showModal({
							title: "\u66f4\u65b0\u63d0\u793a",
							content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f",
							success: function (e) {
								e.confirm && t.applyUpdate()
							}
						})
					}), t.onUpdateFailed(function () { })
				}, t.prototype.showToast = function (t, e) {
					n.default.instance.isTTEnv() && (e = e || 3e3, tt.showToast({
						icon: "none",
						title: t,
						duration: e
					}))
				}, t.prototype.isIphoneX = function () {
					return !!n.default.instance.isTTEnv() && ("" + tt.getSystemInfoSync().model).indexOf("iPhone X") >= 0
				}, t.prototype.createBanner = function (t, e) {
					var o = this;
					if (void 0 === e && (e = !1), n.default.instance.isTTEnv()) {
						this._banner && (this._banner.destroy(), this._banner = null);
						var a = tt.getSystemInfoSync(),
							r = e ? 300 : a.windowWidth;
						console.log("createBanner ww: ", r);
						var s = (a.windowWidth - r) / 2;
						console.log("createBanner left: ", s), this._banner = tt.createBannerAd({
							adUnitId: t,
							style: {
								left: s,
								top: a.windowHeight,
								width: r
							}
						}), this._banner.onLoad(function () {
							console.log("tt \u62c9\u53d6banner\u6210\u529f\uff01"), o._hasBanner ? o._banner.show() : console.log("tt banner\u56e0\u88ab\u9500\u6bc1\u6216\u8005\u9690\u85cf\uff0c\u672c\u6b21\u672a\u80fd\u5c55\u793a\uff01")
						}), this._banner.onError(function (t) {
							console.log("tt \u62c9\u53d6banner\u5931\u8d25\uff01"), o._banner = null
						}), this._banner.onResize(function (t) {
							console.log("onResize res:", t);
							var e = t.height;
							o.isIphoneX() && (e += i.default.offsetY * (a.windowHeight / cc.winSize.height)), o._banner.style.top = a.windowHeight - e, o._banner.style.left = (a.windowWidth - t.width) / 2, i.default.adNormalHeight = cc.winSize.height / a.windowHeight * e + i.default.offsetY, i.default.adHeight = i.default.adNormalHeight - i.default.offsetY - cc.winSize.height / a.windowHeight * t.height / 2;
							var n = new cc.Event.EventCustom(i.default.Evt.RESET_BANNER_HEIGHT, !1);
							cc.director.dispatchEvent(n)
						})
					}
				}, t.prototype.getBannerUnitId = function () {
					return this._banner ? this._banner.adUnitId : ""
				}, t.prototype.showBanner = function (t, e, o) {
					if (void 0 === t && (t = !1), void 0 === e && (e = !1), !this._banner || t) {
						this.destroyBanner(), this._hasBanner = !0;
						var i = n.default.instance.random(0, this.bannerId.length - 1),
							a = this.bannerId[i];
						console.log("tt bannerId : " + a), this.createBanner(a, e), this._bannerIsSmall = e
					} else if (this._hasBanner = !0, this._banner.show(), this._bannerIsSmall !== e || o) {
						this._bannerIsSmall = e;
						var r = tt.getSystemInfoSync(),
							s = e ? 300 : r.windowWidth;
						this._banner.style.width === s && (e ? s += .1 : s -= .1);
						var c = (r.windowWidth - s) / 2;
						this._banner.style.left = c, this._banner.style.width = s
					}
				}, t.prototype.hideBanner = function () {
					this._hasBanner = !1, this._banner && this._banner.hide()
				}, t.prototype.destroyBanner = function () {
					this._hasBanner = !1, this._banner ? (this._banner.destroy(), this._banner = null) : console.log("tt banner \u672a\u521b\u5efa\uff01")
				}, t.prototype.bannerIsShow = function () {
					return this._hasBanner
				}, t.prototype.createVideo = function (t) {
					var e = this;
					if (n.default.instance.isTTEnv())
						if (this._video) {
							if (this._video.adUnitId === t) return;
							this._video.adUnitId = t || i.default.videoId[0]
						} else this._video = tt.createRewardedVideoAd({
							adUnitId: t || i.default.videoId[0]
						}), this._video.onLoad(function () {
							console.log("\u89c6\u9891\u52a0\u8f7d\u6210\u529f\uff01"), e._hasVideo = !0
						}), this._video.onClose(function (t) {
							t && t.isEnded || void 0 === t ? e._onVideoClose && e._onVideoClose(!0) : e._onVideoClose && e._onVideoClose(!1)
						}), this._video.onError(function (t) {
							console.log("\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\u4e86\uff01"), e._hasVideo = !1, setTimeout(function () {
								e._video && e._video.load().then(function () {
									e._hasVideo = !0
								})
							}, 3e3)
						})
				}, t.prototype.showVideo = function (t, e) {
					var o = this;
					if (this._video) {
						this._onVideoClose = t;
						var n = !1;
						this._timer && (clearTimeout(this._timer), this._timer = null), this._timer = setTimeout(function () {
							o._timer = null, n || (console.log("tt 4\u79d2\u5185\u65e0\u89c6\u9891\u56de\u8c03\uff0c\u81ea\u52a8\u56de\u8c03\u52a0\u8f7d\u5931\u8d25!"), n = !0, e && e(!1))
						}, 4e3), this._video.load().then(function () {
							n || (n = !0, o._timer && (clearTimeout(o._timer), o._timer = null), o._video.show().then(function () {
								console.log("tt \u89c6\u9891\u64ad\u653e\u6210\u529f\uff01"), e && e(!0)
							}).catch(function (t) {
								console.log("tt \u89c6\u9891\u64ad\u653e\u5931\u8d25\uff01"), e && e(!1)
							}))
						}).catch(function (t) {
							n || (console.log("tt \u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff01"), n = !0, o._timer && (clearTimeout(o._timer), o._timer = null), e && e(!1))
						})
					}
				}, t.prototype.canShowVideo = function () {
					return this._hasVideo
				}, t.prototype.reportAnalytics = function (t, e) {
					tt.reportAnalytics && tt.reportAnalytics(t, e || {})
				}, t.ydhwTT = null, t
			}();
		o.default = a, cc._RF.pop()
	}, {
		"../YdhwCfg": "YdhwCfg",
		"./YdhwUtil": "YdhwUtil"
	}],
	YdhwTips: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "2bc4bLVG4lN1oZ5XKRl6RFS", "YdhwTips");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			r = a.ccclass,
			s = a.property,
			c = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.bg = null, e.text = null, e
				}
				return n(e, t), e.prototype.start = function () {
					this.node.opacity = 0
				}, e.prototype.showToast = function (t, e) {
					this.text.string = t, this.node.runAction(cc.sequence(cc.fadeIn(.3), cc.delayTime(e - 1 || 2), cc.fadeOut(.3), cc.removeSelf()))
				}, i([s(cc.Node)], e.prototype, "bg", void 0), i([s(cc.Label)], e.prototype, "text", void 0), e = i([r], e)
			}(cc.Component);
		o.default = c, cc._RF.pop()
	}, {}],
	YdhwTryPlay: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "a9df7BqFdNDbqe872yEJQbL", "YdhwTryPlay");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.appIcon = null, e.gameName = null, e.channel = "", e._data = null, e.id = -1, e.appid = "", e.path = "", e.img = "", e.iconUrl = "", e.title = "", e.showIdx = 0, e.type = -1, e
				}
				return n(e, t), e.prototype.start = function () {
					this.gameName.node.active = !1, this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(2), cc.repeat(cc.sequence(cc.rotateTo(.2, 10), cc.rotateTo(.2, -10)), 2), cc.rotateTo(.1, 0)))), this.showIdx = 0, this.updateIcon()
				}, e.prototype.updateIcon = function () {
					var t = this;
					a.default.Net.getSideBoxData(function (e) {
						e && e.boxconfig && (t._data = e, t.getCurShowData(function (e) {
							t.id = e.id, t.type = e.type, 0 == t.type ? (t.appid = e.data.appid, t.path = e.data.path) : t.img = e.data.img, t.iconUrl = e.icon, t.title = e.title, t.iconUrl && "" !== t.iconUrl ? a.default.Util.isWxEnv() && (e.texture ? t.setTex(e.texture) : cc.director.on("loadGameIcon_" + t.id, function (e) {
								t.setTex(e.getUserData())
							}, t)) : console.log("url\u662f\u7a7a\u7684\uff1athis.iconUrl = " + t.iconUrl), t.gameName.node.active = !0, t.gameName.string = t.title, t.scheduleOnce(function () {
								t.addIdx(), t.updateIcon()
							}, 5)
						}))
					})
				}, e.prototype.setTex = function (t) {
					if (cc.isValid(this.node)) {
						var e = this.appIcon.node.getContentSize();
						this.appIcon.spriteFrame = new cc.SpriteFrame(t), this.appIcon.node.setContentSize(e)
					}
				}, e.prototype.addIdx = function () {
					this._data && (this.showIdx++, this.showIdx >= this._data.boxconfig.length && (this.showIdx -= this._data.boxconfig.length))
				}, e.prototype.getCurShowData = function (t) {
					if (this._data && !(this.showIdx >= this._data.boxconfig.length)) {
						var e = this._data.boxconfig[this.showIdx];
						"" + e.status == "1" ? cc.sys.os === cc.sys.OS_IOS && 0 == e.type && 1 == e.data.shield_ios ? (this.addIdx(), this.getCurShowData(t)) : t && t(e) : (this.addIdx(), this.getCurShowData(t))
					}
				}, e.prototype.clickCallfunc = function () {
					var t = this;
					0 === this.type ? a.default.WX.gotoMiniGame(this.appid, {
						appid: this.appid
					}, this.path, function (e) {
						e ? (a.default.Net.reportClickEvent(t.appid, "enable", "palyMore"), t.addIdx(), t.updateIcon()) : a.default.Net.reportClickEvent(t.appid, "cancel", "palyMore")
					}) : this.img && this.previewImg(this.img), a.default.reportAldEvent("\u66f4\u591a\u6e38\u620f\u6309\u94ae\u70b9\u51fb", {
						appid: this.appid,
						channel: this.channel
					})
				}, e.prototype.previewImg = function (t) {
					a.default.Util.isWxEnv() && a.default.WX.previewImg(t)
				}, e.prototype.onDestroy = function () {
					cc.director.targetOff(this)
				}, i([c(cc.Sprite)], e.prototype, "appIcon", void 0), i([c(cc.Label)], e.prototype, "gameName", void 0), i([c], e.prototype, "channel", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwTurnTableItem: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "9804bExDUlDF6opqc9dwSE6", "YdhwTurnTableItem");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			r = a.ccclass,
			s = a.property,
			c = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.label = null, e.icon = null, e.diamondSpf = null, e.roleSpf = null, e._data = null, e
				}
				return n(e, t), e.prototype.start = function () { }, e.prototype.updateData = function (t) {
					this._data = t, 1 === t.Type ? (this.label.string = "x" + t.Value, this.icon.spriteFrame = this.diamondSpf, this.icon.node.scale = .5) : (this.label.string = "\u795e\u79d8\u89d2\u8272", this.icon.spriteFrame = this.roleSpf, this.icon.node.scale = 1)
				}, e.prototype.getData = function () {
					return this._data
				}, i([s(cc.Label)], e.prototype, "label", void 0), i([s(cc.Sprite)], e.prototype, "icon", void 0), i([s(cc.SpriteFrame)], e.prototype, "diamondSpf", void 0), i([s(cc.SpriteFrame)], e.prototype, "roleSpf", void 0), e = i([r], e)
			}(cc.Component);
		o.default = c, cc._RF.pop()
	}, {}],
	YdhwTurnTable: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "fa3123R9P9EzaJoQ7UoRFCC", "YdhwTurnTable");
		var n = this && this.__extends || function () {
			var t = function (e, o) {
				return (t = Object.setPrototypeOf || {
					__proto__: []
				}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o) {
				function n() {
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}(),
			i = this && this.__decorate || function (t, e, o, n) {
				var i, a = arguments.length,
					r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
				else
					for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
				return a > 3 && r && Object.defineProperty(e, o, r), r
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = t("../YdhwSDK"),
			r = cc._decorator,
			s = r.ccclass,
			c = r.property,
			d = function (t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.drawBtn = null, e.closeBtn = null, e.shareIcon = null, e.videoIcon = null, e.freeCnt = null, e.plate = null, e.items = [], e.queryNode = null, e.role = null, e.rewardIcon = null, e.rewardNum = null, e.getMoreNode = null, e.getMoreIcon = null, e.getMoreNum = null, e.getMoreCloseBtn = null, e.getMoreShareIcon = null, e.getMoreVideoIcon = null, e.sta = "END", e.latteryInfo = null, e.freeCntDefault = 1, e.shareCntDefault = 1, e.shareBtnClicked = !1, e.videoBtnClicked = !1, e.rewardID = 1, e.plateZoneNumber = 6, e.lotteryUnLockRole = [], e.hasBanner = !1, e._rate = [], e.offsetR = 0, e.same_speed_dis = 1, e.same_speed_tm = 0, e._s = 0, e._curS = 0, e._idx = 0, e._getMoreShareMutex = !1, e._getMoreVideoMutex = !1, e._getMoreData = null, e
				}
				return n(e, t), e.prototype.start = function () {
					var t = this;
					this.updateRandomRate(), this.items.forEach(function (e, o) {
						e.getComponent("YdhwTurnTableItem").updateData(t.latteryInfo[o + 1])
					}), this.updateDrawBtn(), this.hasBanner = a.default.WX.bannerIsShow(), this.hasBanner || a.default.showBanner(), this.schedule(function () {
						t.updateR()
					}, 1 / 60), this.addEvts()
				}, e.prototype.addEvts = function () {
					var t = this;
					cc.director.on(a.default.Config.Evt.RESET_BANNER_HEIGHT, function (e, o) {
						t.onFit()
					}, this)
				}, e.prototype.onDestroy = function () {
					this.hasBanner || a.default.hideBanner(), cc.director.targetOff(this)
				}, e.prototype.updateRandomRate = function () {
					this._rate = [];
					for (var t in this.latteryInfo) this._rate.push({
						id: this.latteryInfo[t].id,
						probability: 1e4 * this.latteryInfo[t].probability
					})
				}, e.prototype.getUnLockDrawRoles = function () {
					var t = this,
						e = [],
						o = [];
					for (var n in e) {
						6 == e[n].AccessType && o.push(e[n].id)
					}
					var i = [],
						a = {
							hasUnLockRoleNum: 0,
							leftUnLockRoleNum: o.length
						};
					return o.forEach(function (e) {
						i.find(function (t) {
							return "" + t.id == "" + e
						}) ? (a.hasUnLockRoleNum++, a.leftUnLockRoleNum--) : t.lotteryUnLockRole.push(e)
					}), a
				}, e.prototype.randomUnLockRole = function () {
					return 0 === this.lotteryUnLockRole.length ? (console.error("\u6ca1\u6709\u672a\u89e3\u9501\u5f97\u89d2\u8272"), 1) : (a.default.Util.shuffle(this.lotteryUnLockRole), this.lotteryUnLockRole.shift())
				}, e.prototype.getRandomReward = function () {
					var t = this.getUnLockDrawRoles();
					if (0 === t.hasUnLockRoleNum && a.default.Config.keySwitch) {
						for (var e in this.latteryInfo)
							if (2 === this.latteryInfo[e].Type) return this.latteryInfo[e].id
					} else if (0 === t.leftUnLockRoleNum || !a.default.Config.keySwitch)
						for (var e in this.latteryInfo) 2 === this.latteryInfo[e].Type && (this.latteryInfo[e].probability = 0);
					var o = 0;
					this._rate.forEach(function (t) {
						o += t.probability
					});
					var n = a.default.Util.random(1, o),
						i = 0,
						r = 0;
					return this._rate.forEach(function (t, e) {
						n > i && n <= i + t.probability && (r = t.id), i += t.probability
					}), console.log("\u968f\u673aID\uff1a " + r), r
				}, e.prototype.onCloseBtnCallfunc = function () {
					this.sta && "END" !== this.sta ? a.default.WX.showToast("\u62bd\u5956\u4e2d\uff0c\u8bf7\u7a0d\u540e\u3002\u3002") : (this.node.destroy(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.turnTableCloseBtn))
				}, e.prototype.updateDrawBtn = function () {
					var t = this.getLatteryType();
					"free" === t ? (this.shareIcon.node.active = !1, this.videoIcon.node.active = !1) : "share" === t && a.default.Config.keySwitch ? (this.shareIcon.node.active = !0, this.videoIcon.node.active = !1) : (this.shareIcon.node.active = !1, this.videoIcon.node.active = !0), this.freeCnt.string = "x" + this.getFreeCount()
				}, e.prototype.onDrawBtnCallfunc = function () {
					if (this.sta && "END" !== this.sta) a.default.WX.showToast("\u62bd\u5956\u4e2d\uff0c\u8bf7\u7a0d\u540e\u3002\u3002");
					else {
						var t = this.getLatteryType();
						"free" === t ? (this.success(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.turnTableFreeGet)) : "share" === t ? (a.default.Config.keySwitch ? this.share() : this.video(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.turnTableShareGet)) : (this.video(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.turnTableVideoGet))
					}
				}, e.prototype.share = function (t) {
					var e = this;
					void 0 === t && (t = !1), a.default.Config.keySwitch ? this.shareBtnClicked || (this.shareBtnClicked = !0, a.default.share(function (t) {
						e.shareBtnClicked = !1, t ? e.success() : (e.addDrawCountToday(), e.updateDrawBtn(), a.default.WX.showToast("\u8bf7\u4e0d\u8981\u9a9a\u6270\u540c\u4e00\u4e2a\u597d\u53cb\uff01"))
					}, null, a.ShareType.SpecialShare)) : t && a.default.WX.showToast("\u4eb2\uff0c\u4eca\u65e5\u5df2\u7ecf\u6ca1\u6709\u89c6\u9891\u4e86\u54e6\uff0c\u8bf7\u660e\u65e5\u518d\u6765\uff01")
				}, e.prototype.video = function () {
					var t = this;
					this.videoBtnClicked || (this.videoBtnClicked = !0, a.default.createVideo(a.default.Config.videoId[2]), a.default.showVideo(function (e) {
						cc.isValid(t.node) && (t.videoBtnClicked = !1, e ? t.success() : a.default.WX.showToast("\u4eb2\uff0c\u770b\u5b8c15\u79d2\u7684\u89c6\u9891\u624d\u80fd\u514d\u8d39\u62bd\u5956\u54e6~"))
					}, function (e) {
						cc.isValid(t.node) && (t.videoBtnClicked = !1, "failed" === e && t.share(!0))
					}))
				}, e.prototype.success = function () {
					this.setRewardID(this.getRandomReward()), this.setStatus("ADD_SPEED")
				}, e.prototype.getFreeCount = function () {
					var t = this.getHasDrawCountToday();
					return t >= this.freeCntDefault ? 0 : this.freeCntDefault - t
				}, e.prototype.getHasDrawCountToday = function () {
					return a.default.Util.getTodayDate() !== a.default.StoreManager.getLocalData("LastLotteryUpdateTime") ? (a.default.StoreManager.setLocalData("LotteryCountToday", "0"), 0) : parseInt(a.default.StoreManager.getLocalData("LotteryCountToday"))
				}, e.prototype.addDrawCountToday = function () {
					var t = this.getHasDrawCountToday() + 1,
						e = a.default.Util.getTodayDate();
					a.default.StoreManager.setLocalData("LastLotteryUpdateTime", e), a.default.StoreManager.setLocalData("LotteryCountToday", "" + t)
				}, e.prototype.getLatteryType = function () {
					var t = this.getHasDrawCountToday();
					return t < this.freeCntDefault ? "free" : t < this.freeCntDefault + this.shareCntDefault ? "share" : "video"
				}, e.prototype.setRewardID = function (t) {
					this.rewardID = t, console.log("=======>randomRewardID: " + t)
				}, e.prototype.getRewardID = function () {
					return this.rewardID
				}, e.prototype.setStatus = function (t) {
					this.sta = t
				}, e.prototype.updateR = function () {
					if ("END" !== this.sta)
						if (this._idx++, "ADD_SPEED" === this.sta) this.offsetR += .2, this.offsetR >= 20 && this.setStatus("SAME_SPEED"), this.next(this.offsetR);
						else if ("SAME_SPEED" === this.sta) this.same_speed_tm += 1 / 60, this.same_speed_tm >= this.same_speed_dis && (this.same_speed_tm = 0, this._s = this.getOffsetEndR(), this.publicD = this.getPublicErrand(this.offsetR), this.setStatus("REDUCE_SPEED"), this._curS += this.offsetR), this.next(this.offsetR);
						else if ("REDUCE_SPEED" === this.sta) {
							void 0 === this.publicD && (this.publicD = -.2);
							var t = !1;
							this.offsetR += this.publicD, this.offsetR < 0 && (this.offsetR -= this.publicD), this._curS += this.offsetR, this._curS > this._s && (t = !0, this.offsetR -= this._curS - this._s), this.next(this.offsetR), (this._curS >= this._s || t) && (this.setStatus("END"), this.end())
						}
				}, e.prototype.end = function () {
					this.same_speed_tm = 0, this.offsetR = 0, this._curS = 0, this.publicD = void 0, this._idx = 0;
					var t = this.getRewardID();
					this.latteryInfo["" + t] && this.showQueryNode(this.latteryInfo["" + t])
				}, e.prototype.next = function (t) {
					this.plate.node.rotation += t
				}, e.prototype.getOffsetEndR = function () {
					for (var t = this.plate.node.rotation % 360, e = 360 / this.plateZoneNumber, o = e / 2 + (this.plateZoneNumber - this.getRewardID()) * e - t, n = 1; n < 5; n++) {
						var i = o + 360 * n;
						if (i > 540 && i <= 900) {
							o = i;
							break
						}
					}
					return o
				}, e.prototype.getPublicErrand = function (t, e, o) {
					return 2 * (this.getOffsetEndR() - (o = o || 80) * t) / (o * (o - 1))
				}, e.prototype.showQueryNode = function (t) {
					if (this.queryNode.active = !0, 1 === t.Type) this.rewardIcon.active = !0, this.role.active = !1, this.rewardNum.string = "x" + t.Value;
					else {
						this.rewardIcon.active = !1, this.role.active = !0, this.rewardNum.string = "x1";
						var e = this.randomUnLockRole();
						this.role.getComponent("Role").setRoleID(e)
					}
				}, e.prototype.onQueryBtnCallfunc = function () {
					this.queryNode.active = !1, this.addDrawCountToday(), this.updateDrawBtn();
					var t = this.getRewardID();
					this.latteryInfo["" + t] && this.showGetMoreNode(this.latteryInfo["" + t]), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.turnTableGet)
				}, e.prototype.showGetMoreNode = function (t) {
					this._getMoreData = t, this.getMoreNode.active = !0, this.getMoreNum.string = "x" + t.extra, a.default.Config.keySwitch ? (this.getMoreShareIcon.active = !0, this.getMoreVideoIcon.active = !1) : (this.getMoreShareIcon.active = !1, this.getMoreVideoIcon.active = !0), a.default.Config.mistouch_switch ? (a.default.hideBanner(), this.getMoreCloseBtn.active = !0, this.getMoreCloseBtn.getComponent(cc.Widget).enabled = !0, a.default.Config.adHeight > this.getMoreCloseBtn.height / 2 && (this.getMoreCloseBtn.getComponent(cc.Widget).bottom = a.default.Config.adHeight - this.getMoreCloseBtn.height / 2), this.scheduleOnce(function () {
						a.default.showBanner(!1, !0, !0)
					}, 1)) : (this.getMoreCloseBtn.active = !1, this.scheduleOnce(function () {
						a.default.showBanner(!1, !0, !0)
					}, 1))
				}, e.prototype.onFit = function () {
					if (this.getMoreNode.active) {
						var t = cc.winSize,
							e = a.default.Config.adNormalHeight;
						this.getMoreCloseBtn.y = e + this.getMoreCloseBtn.height / 2 - t.height / 2, this.getMoreCloseBtn.active = !0
					}
				}, e.prototype.onGetMoreBtnCallfunc = function () {
					this.getMoreShareIcon.active ? (this.getMoreShare(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.turnTableGetMoreShareClicked)) : (this.getMoreVideo(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.turnTableGetMoreVideoClicked))
				}, e.prototype.getMoreShare = function (t) {
					var e = this;
					void 0 === t && (t = !1), a.default.Config.keySwitch ? this._getMoreShareMutex || (this._getMoreShareMutex = !0, a.default.share(function (t) {
						e._getMoreShareMutex = !1, t ? e.onGetMoreSuccess() : (console.log("\u5206\u4eab\u5931\u8d25"), e.getMoreShareIcon.active = !1, e.getMoreVideoIcon.active = !0, a.default.WX.showToast("\u8bf7\u4e0d\u8981\u9a9a\u6270\u540c\u4e00\u4e2a\u597d\u53cb\uff01"))
					}, null, a.ShareType.SpecialShare)) : t && a.default.WX.showToast("\u4eb2\uff0c\u4eca\u65e5\u5df2\u7ecf\u6ca1\u6709\u89c6\u9891\u4e86\u54e6\uff0c\u8bf7\u660e\u65e5\u518d\u6765\uff01")
				}, e.prototype.getMoreVideo = function () {
					var t = this;
					this._getMoreVideoMutex || (this._getMoreVideoMutex = !0, a.default.createVideo(a.default.Config.videoId[4]), a.default.showVideo(function (e) {
						cc.isValid(t.node) && (t._getMoreVideoMutex = !1, e ? t.onGetMoreSuccess() : a.default.WX.showToast("\u4eb2\uff0c\u770b\u5b8c15\u79d2\u7684\u89c6\u9891\u624d\u80fd\u9886\u53d6\u5956\u52b1\u54e6~"))
					}, function (e) {
						cc.isValid(t.node) && (t._getMoreVideoMutex = !1, "failed" === e && t.share(!0))
					}))
				}, e.prototype.onGetMoreSuccess = function () {
					a.default.WX.showToast("\u606d\u559c\u60a8\u518d\u6b21\u83b7\u5f97" + this._getMoreData.extra + "\u4e2a\u94bb\u77f3\uff01"), this.onGetMoreCloseBtnCallfunc()
				}, e.prototype.onGetMoreCloseBtnCallfunc = function () {
					this.getMoreNode.active = !1, a.default.showBanner(), a.default.DataStatistics.logEvent(a.default.Config.statisticsName.turnTableGetMoreCloseClicked)
				}, i([c(cc.Button)], e.prototype, "drawBtn", void 0), i([c(cc.Button)], e.prototype, "closeBtn", void 0), i([c(cc.Sprite)], e.prototype, "shareIcon", void 0), i([c(cc.Sprite)], e.prototype, "videoIcon", void 0), i([c(cc.Label)], e.prototype, "freeCnt", void 0), i([c(cc.Sprite)], e.prototype, "plate", void 0), i([c([cc.Node])], e.prototype, "items", void 0), i([c(cc.Node)], e.prototype, "queryNode", void 0), i([c(cc.Node)], e.prototype, "role", void 0), i([c(cc.Node)], e.prototype, "rewardIcon", void 0), i([c(cc.Label)], e.prototype, "rewardNum", void 0), i([c(cc.Node)], e.prototype, "getMoreNode", void 0), i([c(cc.Node)], e.prototype, "getMoreIcon", void 0), i([c(cc.Label)], e.prototype, "getMoreNum", void 0), i([c(cc.Node)], e.prototype, "getMoreCloseBtn", void 0), i([c(cc.Node)], e.prototype, "getMoreShareIcon", void 0), i([c(cc.Node)], e.prototype, "getMoreVideoIcon", void 0), e = i([s], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../YdhwSDK": "YdhwSDK"
	}],
	YdhwUtil: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "ad1edQHvDJP6KQjf8n/G2y8", "YdhwUtil"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwWx"),
			i = t("../YdhwCfg"),
			a = function () {
				function t() {
					this._cf = null, this._shareTime = 0, this._shareMutex = !1, this._shareParam = null, this._shareCnt = 0
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwUtil || (this.ydhwUtil = new t), this.ydhwUtil
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.isWxEnv = function () {
					return cc.sys.platform === cc.sys.WECHAT_GAME
				}, t.prototype.isTTEnv = function () {
					return "object" == typeof tt
				}, t.prototype.isHGEnv = function () {
					return "object" == typeof hg
				}, t.prototype.isQQEnv = function () {
					return "object" == typeof qq
				}, t.prototype.isOPPOEnv = function () {
					return "object" == typeof qg
				}, t.prototype.isFBEnv = function () {
					return "object" == typeof FBInstant
				}, t.prototype.random = function (t, e) {
					return Math.random(), Math.random(), Math.random(), Math.round(Math.random() * (e - t) + t)
				}, t.prototype.shuffle = function (t) {
					for (var e = void 0, o = void 0, n = t.length; n; e = Math.floor(Math.random() * n), o = t[--n], t[n] = t[e], t[e] = o);
					return t
				}, t.prototype.changeTexture = function (t, e, o) {
					cc.loader.loadRes(e, cc.SpriteFrame, function (e, n) {
						e ? console.error(e) : cc.isValid(t) && (t.spriteFrame = n, o && (t.node.active = !0))
					})
				}, t.prototype.getLocalTime = function () {
					var t = new Date;
					return Math.round(t.getTime() / 1e3)
				}, t.prototype.getLocalMilTime = function () {
					return (new Date).getTime()
				}, t.prototype.getTodayDate = function () {
					var t = new Date;
					return t.getFullYear() + "_" + (t.getMonth() + 1) + "_" + t.getDate()
				}, t.prototype.getTodayZeroTime = function () {
					var t = new Date,
						e = t.getHours(),
						o = t.getMinutes(),
						n = t.getSeconds();
					return this.getLocalTime() - (3600 * e + 60 * o + n)
				}, t.prototype.setShareCallFunc = function (t) {
					this._cf = t
				}, t.prototype.getShareCallfunc = function () {
					return this._cf
				}, t.prototype.setShareTime = function (t) {
					t || (t = this.getLocalTime()), this._shareTime = t
				}, t.prototype.getShareTime = function () {
					return this._shareTime
				}, t.prototype.setShareCount = function (t) {
					this._shareCnt = t
				}, t.prototype.addShareCount = function () {
					this._shareCnt++
				}, t.prototype.getShareCount = function () {
					return this._shareCnt
				}, t.prototype.setShareMutex = function (t) {
					this._shareMutex = t
				}, t.prototype.getShareMutex = function () {
					return this._shareMutex
				}, t.prototype.setShareParam = function (t) {
					this._shareParam = t
				}, t.prototype.getShareParam = function () {
					return this._shareParam
				}, t.prototype._randomShareInfo = function () {
					if (i.default.shareInfo.length > 0) {
						var t = this.random(0, i.default.shareInfo.length - 1);
						return i.default.shareInfo[t]
					}
					return i.default.defaultShareInfo
				}, t.prototype.randomBannerId = function () {
					var t = n.default.instance.getBannerUnitId(),
						e = this.random(0, i.default.bannerId.length - 1);
					if (t !== i.default.bannerId[e]) return i.default.bannerId[e];
					this.randomBannerId()
				}, t.prototype.cloneDeep = function (t) {
					var e;
					return t instanceof Array ? (e = new Array, this._cloneArray(e, t)) : t instanceof Object ? (e = {}, this._cloneObject(e, t)) : e = t, e
				}, t.prototype._cloneArray = function (t, e) {
					for (var o = 0; o < e.length; o++) {
						var n = e[o];
						n instanceof Array ? (t[o] = new Array, this._cloneArray(t[o], n)) : n instanceof Object ? (t[o] = {}, this._cloneObject(t[o], n)) : t[o] = n
					}
				}, t.prototype._cloneObject = function (t, e) {
					for (var o in e) {
						var n = e[o];
						n instanceof Array ? (t[o] = new Array, this._cloneArray(t[o], n)) : n instanceof Object ? (t[o] = {}, this._cloneObject(t[o], n)) : t[o] = n
					}
				}, t.prototype.remove = function (t, e) {
					for (var o = new Array, n = 0, i = 0; n < t.length; n++) t[n] !== e && (o[i++] = t[n]);
					t = o
				}, t.prototype.removeIdx = function (t, e) {
					for (var o = new Array, n = 0, i = 0; n < t.length; n++) n !== e && (o[i++] = t[n]);
					t = o
				}, t.ydhwUtil = null, t
			}();
		o.default = a, cc._RF.pop()
	}, {
		"../YdhwCfg": "YdhwCfg",
		"./YdhwWx": "YdhwWx"
	}],
	YdhwWeb: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "65c00S687tFX70CzjNb1YRk", "YdhwWeb"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwUtil"),
			i = t("./YdhwComponent"),
			a = function () {
				function t() {
					this._recorderStatus = !1, this._recorderPath = "", this._recorderBeginTime = 0, this._recorderEndTime = 0, this.bannerId = ["aikh1375n5a2420cc4", "1eib36abc2e7f5o3dk", "kk1eedj9e6hrqn1l78", "k8mbxkt93p3ff20903", "677e03f1d43cgmfg37"], this.videoId = ["pkyci61k3w20k3ccid", "4eb5b6fbhe7bals6fo"], this._banner = null, this._hasBanner = !1, this._bannerIsSmall = !1, this._video = null, this._hasVideo = !0, this._onVideoClose = null, this._timer = null
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwWeb || (this.ydhwWeb = new t), this.ydhwWeb
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.shareMessage = function (t, e, o) {
					var i = n.default.instance.getShareCallfunc();
					i && i(!0)
				}, t.prototype.startRecord = function (t) {
					void 0 === t && (t = {
						duration: 120
					})
				}, t.prototype.stopRecord = function () { }, t.prototype.onStartRecord = function () { }, t.prototype.onStopRecord = function () { }, t.prototype.onErrorRecord = function () { }, t.prototype.clipVideo = function (t, e, o) { }, t.prototype.shareVideo = function (t) { }, t.prototype.showToast = function (t, e) {
					i.default.instance.showTips(t, e)
				}, t.prototype.isIphoneX = function () {
					return !1
				}, t.prototype.createBanner = function (t, e) {
					void 0 === e && (e = !1)
				}, t.prototype.getBannerUnitId = function () {
					return this._banner ? this._banner.adUnitId : ""
				}, t.prototype.showBanner = function (t, e, o) {
					void 0 === t && (t = !1), void 0 === e && (e = !1)
				}, t.prototype.hideBanner = function () { }, t.prototype.destroyBanner = function () { }, t.prototype.bannerIsShow = function () {
					return this._hasBanner
				}, t.prototype.createVideo = function (t) { }, t.prototype.showVideo = function (t, e) {
					t && t(!0)
				}, t.prototype.canShowVideo = function () {
					return this._hasVideo
				}, t.ydhwWeb = null, t
			}();
		o.default = a, cc._RF.pop()
	}, {
		"./YdhwComponent": "YdhwComponent",
		"./YdhwUtil": "YdhwUtil"
	}],
	YdhwWx: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "102345a4DxHj66mzV8rx1O3", "YdhwWx"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = t("./YdhwUtil"),
			i = t("../YdhwCfg"),
			a = t("./YdhwStoreManager"),
			r = t("../YdhwDataStatistics/YdhwDataStatistics"),
			s = t("../YdhwSDK"),
			c = function () {
				function t() {
					this.bannerId = ["adunit-3041309e6eca220e", "adunit-c3f884c425553dcf", "adunit-d038696950c73d6e", "adunit-7b97ed97b0cb9101", "adunit-c6e2b1889cdede92"], this.videoId = ["adunit-ff2655754ac76f98", "adunit-6309339af996c363"], this._button = null, this._banner = null, this._hasBanner = !1, this._bannerIsSmall = !1, this._video = null, this._hasVideo = !0, this._onVideoClose = null, this._timer = null, n.default.instance.isWxEnv() && (wx.updateShareMenu({
						withShareTicket: !0
					}), wx.showShareMenu(), this.onShareAppMessage(i.default.defaultShareInfo.content, i.default.defaultShareInfo.url), this.registerOnShow(), this.registerOnHide())
				}
				return Object.defineProperty(t, "instance", {
					get: function () {
						return this.ydhwWx || (this.ydhwWx = new t), this.ydhwWx
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.getLaunchOptionsSync = function () {
					return n.default.instance.isWxEnv() ? wx.getLaunchOptionsSync() : {}
				}, t.prototype.previewImg = function (t) {
					n.default.instance.isWxEnv() && wx.previewImage({
						urls: [t]
					})
				}, t.prototype.login = function (t) {
					n.default.instance.isWxEnv() && wx.login({
						success: function (e) {
							var o = {};
							e.code ? (o.code = 0, o.wxcode = e.code) : (o.code = -1, o.msg = e.errMsg), t && t(o)
						},
						fail: function (e) {
							var o = {
								code: -1
							};
							o.msg = e.errMsg, t && t(o)
						},
						complete: function (t) {
							console.log("wx.login.complete()!")
						}
					})
				}, t.prototype.authorize = function (t, e) {
					var o = this;
					n.default.instance.isWxEnv() ? wx.getSystemInfo({
						success: function (n) {
							var i = n.windowWidth,
								a = n.windowHeight,
								r = i / cc.view.getDesignResolutionSize().width,
								s = t.width * r,
								c = t.height * r,
								d = i / 2 + t.x * r - s / 2,
								l = a / 2 - t.y * r - c / 2;
							o._button = wx.createUserInfoButton({
								type: "text",
								text: "",
								style: {
									left: d,
									top: l,
									width: s,
									height: c,
									textAlign: "center",
									fontSize: 16,
									borderRadius: 4,
									borderColor: "#f0ff00",
									borderWidth: 1
								}
							}), o._button.onTap(function (t) {
								t.userInfo ? e && e(t.userInfo) : (console.log("\u5fae\u4fe1\u8fd4\u56de\u7684userInfo \u4e3a\u7a7a \uff01"), e && e(null))
							})
						}
					}) : e && e(null)
				}, t.prototype.destroyAuthBt = function () {
					this._button && (this._button.destroy(), this._button = null)
				}, t.prototype.isAuthorize = function (t) {
					n.default.instance.isWxEnv() ? wx.getSetting({
						success: function (e) {
							e.authSetting["scope.userInfo"] ? t(!0) : t(!1)
						}
					}) : t && t(!1)
				}, t.prototype.getUserInfo = function () {
					n.default.instance.isWxEnv() && wx.getUserInfo({
						success: function (t) { }
					})
				}, t.prototype.showShareMenu = function () {
					n.default.instance.isWxEnv() && wx.showShareMenu()
				}, t.prototype.onShareAppMessage = function (t, e) {
					void 0 === e && (e = ""), n.default.instance.isWxEnv() && wx.onShareAppMessage(function () {
						return {
							title: t,
							imageUrl: e
						}
					})
				}, t.prototype.shareMessage = function (t, e, o, i) {
					n.default.instance.isWxEnv() && wx.shareAppMessage({
						title: t,
						imageUrl: e,
						query: o || {},
						success: function (t) { },
						fail: function (t) { },
						complete: function (t) { }
					})
				}, t.prototype.isIphoneX = function () {
					return !!n.default.instance.isWxEnv() && ("" + wx.getSystemInfoSync().model).indexOf("iPhone X") >= 0
				}, t.prototype.createBanner = function (t, e) {
					var o = this;
					if (void 0 === e && (e = !1), n.default.instance.isWxEnv()) {
						this._banner && (this._banner.destroy(), this._banner = null);
						var a = wx.getSystemInfoSync(),
							r = e ? 300 : a.windowWidth,
							s = (a.windowWidth - r) / 2;
						this._banner = wx.createBannerAd({
							adUnitId: t,
							style: {
								left: s,
								top: 0,
								width: r
							}
						}), this._banner.onLoad(function () {
							console.log("\u62c9\u53d6banner\u6210\u529f\uff01"), o._hasBanner ? o._banner.show() : console.log("banner\u56e0\u88ab\u9500\u6bc1\u6216\u8005\u9690\u85cf\uff0c\u672c\u6b21\u672a\u80fd\u5c55\u793a\uff01")
						}), this._banner.onError(function (t) {
							console.log("\u62c9\u53d6banner\u5931\u8d25\uff01"), o._banner = null
						}), this._banner.onResize(function (t) {
							var e = t.height;
							o.isIphoneX() && (e += i.default.offsetY * (a.windowHeight / cc.winSize.height)), o._banner.style.top = a.windowHeight - e, i.default.adNormalHeight = cc.winSize.height / a.windowHeight * e + i.default.offsetY, i.default.adHeight = i.default.adNormalHeight - i.default.offsetY - cc.winSize.height / a.windowHeight * t.height / 2;
							var n = new cc.Event.EventCustom(i.default.Evt.RESET_BANNER_HEIGHT, !1);
							cc.director.dispatchEvent(n)
						})
					}
				}, t.prototype.getBannerUnitId = function () {
					return this._banner ? this._banner.adUnitId : ""
				}, t.prototype.showBanner = function (t, e, o) {
					if (void 0 === t && (t = !1), void 0 === e && (e = !1), !this._banner || t) {
						this.destroyBanner(), this._hasBanner = !0;
						var i = n.default.instance.random(0, this.bannerId.length - 1),
							a = this.bannerId[i];
						console.log("bannerId : " + a), this.createBanner(a, e), this._bannerIsSmall = e
					} else if (this._hasBanner = !0, this._banner.show(), this._bannerIsSmall !== e || o) {
						this._bannerIsSmall = e;
						var r = wx.getSystemInfoSync(),
							s = e ? 300 : r.windowWidth;
						this._banner.style.width === s && (e ? s += .1 : s -= .1);
						var c = (r.windowWidth - s) / 2;
						this._banner.style.left = c, this._banner.style.width = s
					}
				}, t.prototype.hideBanner = function () {
					this._hasBanner = !1, this._banner && this._banner.hide()
				}, t.prototype.destroyBanner = function () {
					this._hasBanner = !1, this._banner ? (this._banner.destroy(), this._banner = null) : console.log("banner \u672a\u521b\u5efa\uff01")
				}, t.prototype.bannerIsShow = function () {
					return this._hasBanner
				}, t.prototype.createVideo = function (t) {
					var e = this;
					if (n.default.instance.isWxEnv())
						if (this._video) {
							if (this._video.adUnitId === t) return;
							this._video.adUnitId = t || i.default.videoId[0]
						} else this._video = wx.createRewardedVideoAd({
							adUnitId: t || i.default.videoId[0]
						}), this._video.onLoad(function () {
							console.log("\u89c6\u9891\u52a0\u8f7d\u6210\u529f\uff01"), e._hasVideo = !0
						}), this._video.onClose(function (t) {
							t && t.isEnded || void 0 === t ? e._onVideoClose && e._onVideoClose(!0) : e._onVideoClose && e._onVideoClose(!1)
						}), this._video.onError(function (t) {
							console.log("\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\u4e86\uff01"), e._hasVideo = !1, setTimeout(function () {
								e._video && e._video.load().then(function () {
									e._hasVideo = !0
								})
							}, 3e3)
						})
				}, t.prototype.showVideo = function (t, e) {
					var o = this;
					if (this._video) {
						this._onVideoClose = t;
						var n = !1;
						this._timer && (clearTimeout(this._timer), this._timer = null), this._timer = setTimeout(function () {
							o._timer = null, n || (console.log("4\u79d2\u5185\u65e0\u89c6\u9891\u56de\u8c03\uff0c\u81ea\u52a8\u56de\u8c03\u52a0\u8f7d\u5931\u8d25!"), n = !0, e && e(!1))
						}, 4e3), this._video.load().then(function () {
							n || (n = !0, o._timer && (clearTimeout(o._timer), o._timer = null), o._video.show().then(function () {
								console.log("\u89c6\u9891\u64ad\u653e\u6210\u529f\uff01"), e && e(!0)
							}).catch(function (t) {
								console.log("\u89c6\u9891\u64ad\u653e\u5931\u8d25\uff01"), e && e(!1)
							}))
						}).catch(function (t) {
							n || (console.log("\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff01"), n = !0, o._timer && (clearTimeout(o._timer), o._timer = null), e && e(!1))
						})
					}
				}, t.prototype.canShowVideo = function () {
					return this._hasVideo
				}, t.prototype.gotoMiniGame = function (t, e, o, i, a) {
					n.default.instance.isWxEnv() && wx.navigateToMiniProgram({
						appId: t,
						extraData: e,
						path: o,
						success: function (t) {
							i && i(!0)
						},
						fail: function (t) {
							i && i(!1)
						}
					})
				}, t.prototype.getShareInfo = function (t, e) {
					n.default.instance.isWxEnv() && wx.getShareInfo({
						shareTicket: t,
						success: function (t) {
							e && e(t)
						},
						fail: function (t) { }
					})
				}, t.prototype.gameClub = function (t, e) {
					n.default.instance.isWxEnv() && wx.getSystemInfo({
						success: function (o) {
							var n = o.windowWidth,
								i = o.windowHeight,
								a = n / cc.view.getDesignResolutionSize().width,
								r = t.width * a,
								s = t.height * a,
								c = n / 2 + t.x * a - r / 2,
								d = i / 2 - t.y * a - s / 2;
							wx.createGameClubButton({
								type: "text",
								text: "",
								style: {
									left: c,
									top: d,
									width: r,
									height: s,
									textAlign: "center",
									fontSize: 16,
									borderRadius: 4
								}
							}).onTap(function (t) {
								console.log("\u6e38\u620f\u5708\uff1ares = " + JSON.stringify(t)), e && e(!0)
							})
						}
					})
				}, t.prototype.updateScore = function (t, e, o, i) {
					if (n.default.instance.isWxEnv()) {
						var a = this._objectToKVArray(t);
						wx.setUserCloudStorage({
							KVDataList: a,
							success: e,
							fail: o,
							complete: i
						})
					}
				}, t.prototype._objectToKVArray = function (t) {
					var e = [];
					if (t instanceof Object)
						for (var o in t) e.push({
							key: o,
							value: t[o] + ""
						});
					else t instanceof Array && (e = t);
					return e
				}, t.prototype.showToast = function (t, e) {
					n.default.instance.isWxEnv() && (e = e || 3e3, wx.showToast({
						icon: "none",
						title: t,
						duration: e
					}))
				}, t.prototype.showModal = function (t, e, o, i, a, r) {
					void 0 === i && (i = !0), void 0 === a && (a = "\u53d6\u6d88"), void 0 === r && (r = "\u786e\u5b9a"), n.default.instance.isWxEnv() && wx.showModal({
						title: t,
						content: e,
						showCancel: i,
						cancelText: a,
						confirmText: r,
						success: function (t) {
							t.confirm ? o && o(!0) : t.cancel && o && o(!1)
						}
					})
				}, t.prototype.openCustomerServiceConversation = function (t) {
					n.default.instance.isWxEnv() && wx.openCustomerServiceConversation(t)
				}, t.prototype.getMenuButtonBoundingClientRect = function () {
					return n.default.instance.isWxEnv() ? wx.getMenuButtonBoundingClientRect() : {}
				}, t.prototype.requestMidasPayment = function (t, e) {
					if (n.default.instance.isWxEnv()) {
						var o = t.price ? 10 * t.price : 100;
						wx.requestMidasPayment({
							mode: "game",
							offerId: "1450019488",
							buyQuantity: o,
							env: 0,
							zoneId: 1,
							currencyType: "CNY",
							platform: "android",
							success: function () {
								console.warn("\u652f\u4ed8\u6210\u529f"), e && e(!0)
							},
							fail: function (t) {
								var o = t.errMsg,
									n = t.errCode;
								console.error(o, n), e && e(!1)
							}
						})
					}
				}, t.prototype.vibrateShort = function (t, e, o) {
					n.default.instance.isWxEnv() && (t = t || function () { }, e = e || function () { }, o = o || function () { }, wx.vibrateShort({
						success: t,
						fail: e,
						complete: o
					}))
				}, t.prototype.vibrateLong = function (t, e, o) {
					n.default.instance.isWxEnv() && (t = t || function () { }, e = e || function () { }, o = o || function () { }, wx.vibrateLong({
						success: t,
						fail: e,
						complete: o
					}))
				}, t.prototype.registerOnShow = function () {
					var t = this;
					wx.onShow(function (e) {
						if (i.default.otherMiniGameByWall) {
							i.default.otherMiniGameByWall = !1, console.log("\u901a\u8fc7\u79ef\u5206\u5899\u4ece\u5176\u4ed6\u5c0f\u6e38\u620f\u56de\u6765\u4e86\uff01");
							var o = new cc.Event.EventCustom(i.default.Evt.OTHER_MINIGAME_BACK, !0);
							cc.director.dispatchEvent(o)
						}
						e.shareTicket && "" !== e.shareTicket && (e.query.req_account_id && "" + i.default.account_id == "" + e.query.req_account_id && (console.log("\u81ea\u5df1\u4ece\u7fa4\u91cc\u56de\u5230\u6e38\u620f\uff01"), e.query.shareTicket = e.shareTicket, (o = new cc.Event.EventCustom(i.default.Evt.GROUP_BACK, !0)).setUserData(e.query), cc.director.dispatchEvent(o)));
						if (a.default.instance.getLocalData("isOpenAddMineGame") && (1089 == e.scene || 1023 == e.scene || 1103 == e.scene || 1104 == e.scene) && 0 != i.default.account_id && "" + i.default.addMineGame == "0") {
							i.default.addMineGame = 1, a.default.instance.setLocalData("addMineGame", "1");
							o = new cc.Event.EventCustom(i.default.Evt.FINISHED_ADD_MINIPROGRAM, !0);
							cc.director.dispatchEvent(o)
						}
						var r = new cc.Event.EventCustom(i.default.Evt.CHECK_PUBLIC_SCENE, !0);
						r.setUserData(e.scene), cc.director.dispatchEvent(r);
						var c = parseInt(a.default.instance.getLocalData("leaveGameTime"));
						if (!isNaN(c) && c) {
							Math.floor(((new Date).getTime() - c) / 1e3);
							a.default.instance.setLocalData("leaveGameTime", "0")
						}
						if (n.default.instance.getShareMutex()) {
							var d = n.default.instance.getShareCallfunc();
							if (d) {
								var l = function (e, o) {
									t.showModal("\u6e29\u99a8\u63d0\u793a", e, function (e) {
										if (e) {
											var i = n.default.instance.getShareParam();
											t.shareMessage(i.content, i.url, i.query), n.default.instance.setShareTime()
										} else o(!1), n.default.instance.setShareCallFunc(null), n.default.instance.setShareMutex(!1)
									})
								},
									u = function (t) {
										t(!0), n.default.instance.setShareCallFunc(null), n.default.instance.setShareMutex(!1)
									},
									h = n.default.instance.getShareParam();
								if (h.shareType === s.ShareType.NormalShare) n.default.instance.getLocalTime() - n.default.instance.getShareTime() < 2 ? l("\u8bf7\u5206\u4eab\u7ed9\u4e0d\u540c\u7684\u7fa4", d) : u(d);
								else if (h.shareType === s.ShareType.SpecialShare) {
									n.default.instance.addShareCount();
									var p = n.default.instance.getShareCount();
									if (1 === p) l("\u901a\u8baf\u5931\u8d25", d);
									else if (2 === p) {
										n.default.instance.getLocalTime() - n.default.instance.getShareTime() < 5 ? l("\u8bf7\u5206\u4eab\u7ed9\u4e0d\u540c\u7684\u7fa4", d) : u(d)
									} else if (p >= 3) {
										n.default.instance.getLocalTime() - n.default.instance.getShareTime() < 3 ? (d(!1), n.default.instance.setShareCallFunc(null), n.default.instance.setShareMutex(!1)) : u(d)
									}
								}
							}
						}
					})
				}, t.prototype.registerOnHide = function () {
					wx.onHide(function () {
						var t = (new Date).getTime();
						a.default.instance.setLocalData("leaveGameTime", "" + t), console.log("\u672c\u6b21\u79bb\u5f00\u6e38\u620f\u7684\u65f6\u95f4\u662f" + t), r.default.instance.eventOnHide()
					})
				}, t.prototype.isLiuHaiScreen = function () {
					var t = wx.getSystemInfoSync();
					return t.screenHeight / t.screenWidth > 2
				}, t.ydhwWx = null, t
			}();
		o.default = c, cc._RF.pop()
	}, {
		"../YdhwCfg": "YdhwCfg",
		"../YdhwDataStatistics/YdhwDataStatistics": "YdhwDataStatistics",
		"../YdhwSDK": "YdhwSDK",
		"./YdhwStoreManager": "YdhwStoreManager",
		"./YdhwUtil": "YdhwUtil"
	}],
	wxOnly3Prefab: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "1b8b4VokaFP7ItaE/uTULK8", "wxOnly3Prefab");
		var n = cc.Enum({
			"\u5934\u50cf\u4f7f\u7528\u6b63\u65b9\u5f62\u7684": 0,
			"\u5934\u50cf\u4f7f\u7528\u5706\u5f62\u7684": 1
		}),
			i = cc.Enum({
				"\u5934\u50cf\u5411\u4e0a\u5bf9\u9f50": 0,
				"\u5934\u50cf\u5c45\u4e2d\u5bf9\u9f50": 1,
				"\u5934\u50cf\u5411\u4e0b\u5bf9\u9f50": 2
			}),
			a = cc.Enum({
				"\u6587\u5b57\u59cb\u7ec8\u8d34\u8fd1\u5934\u50cf\u4e0b\u65b9": 0,
				"\u6587\u5b57\u59cb\u7ec8\u8d34\u8fd1\u5934\u50cf\u4e0a\u65b9": 1,
				"\u6587\u5b57\u5411\u4e0b\u65b9\u5bf9\u9f50": 2,
				"\u6587\u5b57\u5411\u4e0a\u65b9\u5bf9\u9f50": 3
			}),
			r = (cc.Enum({
				"\u5de6\u5bf9\u9f50": 0,
				"\u53f3\u5bf9\u9f50": 1,
				"\u5c45\u4e2d\u5bf9\u9f50": 2
			}), function (t) {
				var e = t.r.toString(16),
					o = t.g.toString(16),
					n = t.b.toString(16);
				return "#" + (1 == e.length ? "0" + e : e) + (1 == o.length ? "0" + o : o) + (1 == n.length ? "0" + n : n)
			});
		cc.Class({
			extends: cc.Component,
			properties: {
				keyList: {
					default: "bestScore",
					displayName: "\u6392\u5e8f\u6570\u636ekey:",
					tooltip: "\u6392\u5e8f\u6570\u636ekey"
				},
				KEY: {
					default: "bestScore",
					displayName: "\u83b7\u53d6\u6570\u636ekey:",
					tooltip: "\u83b7\u53d6\u6570\u636ekey"
				},
				userPhoto_Node: {
					type: cc.Node,
					default: null
				},
				userPhoto_Default_ImgUrl: {
					default: null,
					url: cc.Texture2D,
					displayName: "\u9ed8\u8ba4\u56fe\u7247:",
					tooltip: "\u6e38\u620f\u7ed3\u675f\u7684\u65f6\u5019\u5f39\u7a97\uff0c\u6ca1\u6709\u73a9\u5bb6\u7684\u65f6\u5019\u663e\u793a\u9ed8\u8ba4\u5934\u50cf;"
				},
				gameOver_userPhoto_bgUrl: {
					default: null,
					url: cc.Texture2D,
					displayName: "\u5934\u50cf\u5934\u90e8\u80cc\u666f\u8d44\u6e90:",
					tooltip: "\u5934\u50cf\u5934\u90e8\u80cc\u666f\u8d44\u6e90;"
				},
				gameOver_userphoto_interval: {
					default: 20,
					displayName: "\u5934\u50cf\u4e4b\u95f4\u7684\u95f4\u9694:",
					tooltip: "\u5934\u50cf\u4e4b\u95f4\u7684\u95f4\u9694;"
				},
				gameOver_userphoto_other_scale: {
					default: .7,
					type: cc.Float,
					displayName: "\u4e24\u8fb9\u5934\u50cf\u7f29\u653e:",
					tooltip: "\u8fd9\u91cc\u53ea\u7f29\u653e\u53e6\u5916\u4e24\u8fb9\u7684\u5934\u50cf;"
				},
				gameOver_userPhoto_Type: {
					type: cc.Enum(n),
					default: 0,
					displayName: "\u5934\u50cf\u5f62\u72b6:",
					tooltip: "\u5934\u50cf\u53ea\u6709\u4e24\u79cd\u5f62\u5f0f\uff0c\u4e00\u79cd\u662f\u5706\u5f62\u7684\uff0c\u4e00\u79cd\u662f\u65b9\u5f62\u7684\u3002"
				},
				gameOver_avatar_horizon_align_type: {
					type: cc.Enum(i),
					default: 1,
					displayName: "\u5934\u50cf\u5bf9\u9f50\u65b9\u5f0f:",
					tooltip: "\u5934\u50cf\u6a2a\u5411\u5bf9\u9f50\u65b9\u5f0f\uff1b"
				},
				gameOver_desc_fontsize: {
					default: 30,
					displayName: "\u6587\u5b57\u5927\u5c0f:",
					tooltip: "\u5934\u50cf\u4e0b\u65b9\u6587\u5b57\u7684\u5927\u5c0f;"
				},
				gameOver_descToPhoto_align_type: {
					type: cc.Enum(a),
					default: 2,
					displayName: "\u6587\u5b57\u5bf9\u5934\u50cf\u5bf9\u9f50\u65b9\u5f0f:",
					tooltip: "\u6587\u5b57\u5bf9\u5934\u50cf\u5bf9\u9f50\u65b9\u5f0f;"
				},
				gameOver_desc_color: {
					default: new cc.Color(255, 255, 255, 255),
					displayName: "\u989c\u8272:",
					tooltip: "\u5934\u50cf\u4e0b\u65b9\u6587\u5b57\u7684\u989c\u8272;"
				},
				gameOver_desc_other_color: {
					default: new cc.Color(255, 255, 255, 255),
					displayName: "\u53e6\u5916\u4e24\u8fb9\u6587\u5b57\u7684\u989c\u8272:",
					tooltip: "\u5934\u50cf\u4e0b\u65b9\u6587\u5b57\u7684\u989c\u8272;"
				},
				gameOver_desc_offset: {
					default: new cc.Vec2(0, 0),
					displayName: "\u6587\u5b57\u8bf4\u660e\u4f4d\u7f6e\u504f\u79fb:",
					tooltip: "\u5728\u6587\u5b57\u8bf4\u660e\u73b0\u6709\u7684\u5750\u6807\u57fa\u7840\u4e0a\u8fdb\u884c\u4f4d\u7f6e\u504f\u79fb;"
				},
				gameOver_desc: {
					default: "\u7b2c%s\u540d",
					displayName: "\u6587\u5b57:",
					tooltip: "\u6587\u5b57;"
				},
				gameOver_desc_bold: {
					default: !1,
					displayName: "\u6587\u5b57\u52a0\u7c97:",
					tooltip: "\u52fe\u4e0a\u5c31\u662f\u52a0\u7c97\u4e86"
				},
				gameOver_desc_isItalic: {
					default: !1,
					displayName: "\u6587\u5b57\u503e\u659c:",
					tooltip: "\u52fe\u4e0a\u5c31\u662f\u503e\u659c\u4e86"
				},
				gameOver_desc_fontFamily: {
					default: "Helvetica",
					displayName: "family:",
					tooltip: "\u6587\u5b57\u7684family"
				}
			},
			onLoad: function () {
				this.ConfigData = {
					keyList: this.keyList,
					KEY: this.KEY,
					designContentsize: cc.view.getDesignResolutionSize(),
					userPhoto_Default_ImgUrl: this.userPhoto_Default_ImgUrl,
					gameOver_userPhoto_bgUrl: this.gameOver_userPhoto_bgUrl,
					gameOver_userPhoto_contentsize: new cc.Size(this.userPhoto_Node.width, this.userPhoto_Node.height),
					gameOver_userPhoto_pos: new cc.Vec2(this.userPhoto_Node.x, this.userPhoto_Node.y),
					gameOver_userphoto_interval: this.gameOver_userphoto_interval,
					gameOver_userphoto_other_scale: this.gameOver_userphoto_other_scale,
					gameOver_userPhoto_Type: this.gameOver_userPhoto_Type,
					gameOver_avatar_horizon_align_type: this.gameOver_avatar_horizon_align_type,
					gameOver_desc_fontsize: this.gameOver_desc_fontsize,
					gameOver_descToPhoto_align_type: this.gameOver_descToPhoto_align_type,
					gameOver_desc_align_type: this.gameOver_desc_align_type,
					gameOver_desc_color: r(this.gameOver_desc_color),
					gameOver_desc_other_color: r(this.gameOver_desc_other_color),
					gameOver_desc_offset: this.gameOver_desc_offset,
					gameOver_desc: this.gameOver_desc,
					gameOver_desc_bold: this.gameOver_desc_bold ? "bold" : "",
					gameOver_desc_isItalic: this.gameOver_desc_isItalic ? "italic" : "",
					gameOver_desc_fontFamily: this.gameOver_desc_fontFamily
				}, "undefined" != typeof wx ? (this.tex = new cc.Texture2D, this.node.updateCnt = Number.MAX_VALUE) : this.node.updateCnt = 0
			},
			onEnable: function () {
				wx.getOpenDataContext().postMessage({
					key: "reqOnly3Data",
					message: this.ConfigData
				})
			},
			onDisable: function () {
				wx.getOpenDataContext().postMessage({
					key: "clearOnly3Data"
				}), this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(new cc.Texture2D)
			},
			setOwnerData: function (t) {
				"undefined" != typeof wx && wx.getOpenDataContext().postMessage({
					key: "setOwnerData",
					message: t
				})
			},
			setIsNewPass: function (t) {
				this.ConfigData.isNewPass = t
			},
			update: function () {
				this._updateWxRenderLayer()
			},
			_updateWxRenderLayer: function () {
				this.node.updateCnt > 0 && (this.node.updateCnt--, this.tex.initWithElement(sharedCanvas), this.tex.handleLoadedTexture(), this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(this.tex))
			}
		}), cc._RF.pop()
	}, {}],
	wxRankListPrefab: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "304408UOnpKcbXKpgkuHvEc", "wxRankListPrefab");
		cc.Enum({
			"\u666e\u901a\u5b57\u4f53": 0,
			"\u5b57\u4f53\u52a0\u7c97": 1
		}), cc.Enum({
			"\u666e\u901a\u5b57\u4f53": 0,
			"\u5b57\u4f53\u503e\u659c": 1
		});
		var n = cc.Enum({
			"\u5de6\u5bf9\u9f50": 0,
			"\u53f3\u5bf9\u9f50": 1,
			"\u5c45\u4e2d\u5bf9\u9f50": 2
		}),
			i = cc.Enum({
				"\u6bcf\u9694\u4e00\u4f4d\u4f7f\u7528\u8d44\u6e90": 0,
				"\u7b2c\u4e00\u4f4d\u8d44\u6e90\u5411\u4e0b\u5e73\u94fa": 1,
				"\u7b2c\u4e00\u4f4d\u548c\u7b2c\u4e8c\u4f4d\u4e24\u4e2a\u8d44\u6e90\u4ea4\u66ff\u4f7f\u7528(\u5bf9\u989c\u8272\u65e0\u6548)": 2,
				"\u8d44\u6e90\u5217\u8868\u7684\u6700\u540e\u4e00\u4f4d\u5f80\u540e\u586b\u5145(\u5bf9\u989c\u8272\u65e0\u6548)": 3
			}),
			a = cc.Enum({
				"\u5934\u50cf\u4f7f\u7528\u6b63\u65b9\u5f62\u7684": 0,
				"\u5934\u50cf\u4f7f\u7528\u5706\u5f62\u7684": 1
			}),
			r = cc.Enum({
				"\u4e0d\u5728\u5934\u50cf\u4e0a\u589e\u52a0\u56fe\u7247": 0,
				"\u5728\u5934\u50cf\u4e0a\u5e73\u94fa\u56fe\u7247": 1,
				"\u5728\u5934\u50cf\u4e0a\u6839\u636e\u5217\u8868\u987a\u5e8f\u6dfb\u52a0\u56fe\u7247": 2,
				"\u5728\u5934\u50cf\u4e0a\u6839\u636e\u5217\u8868\u987a\u5e8f\u6dfb\u52a0\u56fe\u7247\uff0c\u6700\u540e\u4e00\u5f20\u5411\u4e0b\u5e73\u94fa": 3
			}),
			s = cc.Enum({
				"\u540d\u6b21\u4e0a\u4e0d\u4f7f\u7528\u8d44\u6e90\u56fe\u7247": 0,
				"\u6839\u636e\u8d44\u6e90\u5217\u8868\u5728\u540d\u6b21\u4e0a\u589e\u52a0\u56fe\u7247\u8d44\u6e90": 1,
				"\u6839\u636e\u8d44\u6e90\u5217\u8868\u5728\u540d\u6b21\u4e0a\u589e\u52a0\u56fe\u7247\u8d44\u6e90, \u6700\u540e\u4e00\u5f20\u5411\u4e0b\u5e73\u94fa": 2
			}),
			c = cc.Class({
				name: "\u6392\u884c\u4e3b\u6846",
				properties: {
					rank_isUsedMD5: {
						default: !1,
						displayName: "\u662f\u5426\u4f7f\u7528MD5:",
						tooltip: "\u52fe\u9009;"
					},
					rank_isUsedCDN: {
						default: !1,
						displayName: "\u662f\u5426\u4f7f\u7528CDN:",
						tooltip: "\u52fe\u9009;"
					},
					rank_isShowOwnerRank: {
						default: !0,
						displayName: "\u662f\u5426\u663e\u793a\u81ea\u5df1\u7684\u6392\u884c:",
						tooltip: "\u662f\u5426\u663e\u793a\u81ea\u5df1\u7684\u6392\u884c"
					},
					rank_owner_offsetXY: {
						default: new cc.Vec2(0, 0),
						visible: function () {
							return this.rank_isShowOwnerRank
						},
						displayName: "\u504f\u79fb\u5750\u6807:",
						tooltip: "\u81ea\u5df1\u6392\u884c\u7684\u5750\u6807\u504f\u79fb\u91cf;"
					}
				}
			}),
			d = cc.Class({
				name: "\u5b50\u63a7\u4ef6",
				properties: {
					rankItem_contentsize: {
						default: new cc.Size(600, 125),
						displayName: "\u5bbd\u9ad8:",
						tooltip: "\u5b9a\u5236\u5b50\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6"
					},
					rankItem_isUseSrc: {
						default: !1,
						displayName: "\u662f\u5426\u4f7f\u7528\u56fe\u7247\u8d44\u6e90:",
						tooltip: "\u662f\u5426\u4f7f\u7528\u56fe\u7247\u8d44\u6e90"
					},
					rankItem_bg_type: {
						type: cc.Enum(i),
						default: 0,
						displayName: "\u80cc\u666f:",
						tooltip: "\u6587\u5b57\u8bf4\u660e\u5e94\u8be5\u5f88\u6e05\u695a\u4e86\u2026\u2026"
					},
					rankItem_bg_color: {
						default: new cc.Color(255, 255, 255, 255),
						visible: function () {
							return !1 === this.rankItem_isUseSrc
						},
						displayName: "\u989c\u8272:",
						tooltip: "\u5b50\u63a7\u4ef6\u80cc\u666f\u989c\u8272"
					},
					rankItem_bg_src: {
						default: [],
						url: cc.Texture2D,
						visible: function () {
							return !0 === this.rankItem_isUseSrc
						},
						displayName: "\u8def\u5f84:",
						tooltip: "\u5b50\u63a7\u4ef6\u7684\u80cc\u666f\u4f7f\u7528\u8def\u5f84;"
					}
				}
			}),
			l = cc.Class({
				name: "\u5b50\u63a7\u4ef6-\u6392\u540d/\u540d\u6b21",
				properties: {
					rank_num_defaultText: {
						default: "\u672a\u4e0a\u699c",
						displayName: "\u9ed8\u8ba4:",
						tooltip: "\u9ed8\u8ba4\u6587\u5b57"
					},
					rank_num_showLabel: {
						default: 3,
						displayName: "\u663e\u793a\u6587\u5b57\u540d\u6b21\u4f4d\u7f6e:",
						tooltip: "\u5728\u7b2c\u51e0\u4e2a\u540d\u6b21\u4f4d\u7f6e\u663e\u793alabel\u6587\u5b57\u3002"
					},
					rank_num_offset: {
						default: new cc.Vec2(10, 0),
						displayName: "\u6392\u540d\u5b57\u5750\u6807\u504f\u79fb(\u5750\u6807y\u65e0\u6548):",
						tooltip: "\u5b9a\u5236\u5b50\u63a7\u4ef6\u6392\u540d\u6587\u5b57\u7684\u5750\u6807\u504f\u79fb"
					},
					rank_num_fontsize: {
						default: 40,
						displayName: "font-size:",
						tooltip: "\u5b9a\u5236\u5b50\u63a7\u4ef6\u6392\u540d\u6587\u5b57\u7684\u6587\u5b57\u5927\u5c0f"
					},
					rank_num_align_type: {
						type: cc.Enum(n),
						default: 0,
						displayName: "\u6587\u5b57\u5bf9\u9f50:",
						tooltip: "\u6587\u5b57\u5bf9\u9f50\u65b9\u5f0f;"
					},
					rank_num_bold: {
						default: !1,
						displayName: "\u6587\u5b57\u52a0\u7c97:",
						tooltip: "\u52fe\u4e0a\u5c31\u662f\u52a0\u7c97\u4e86"
					},
					rank_num_isItalic: {
						default: !1,
						displayName: "\u6587\u5b57\u503e\u659c:",
						tooltip: "\u52fe\u4e0a\u5c31\u662f\u503e\u659c\u4e86"
					},
					rank_num_color: {
						default: new cc.Color(255, 255, 255, 255),
						displayName: "\u989c\u8272:",
						tooltip: "\u6392\u540d\u5b57\u7684\u989c\u8272"
					},
					rank_num_fontFamily: {
						default: "Helvetica",
						displayName: "family:",
						tooltip: "\u6587\u5b57\u7684family"
					},
					rank_num_tagimg_type: {
						type: cc.Enum(s),
						default: 0,
						displayName: "\u56fe\u7247\u7c7b\u578b:",
						tooltip: "\u6309\u7167\u7c7b\u578b\u9009\u62e9\u662f\u5426\u8ba9\u540d\u6b21\u4e0a\u5e26\u6709\u56fe\u7247;"
					},
					rank_num_tagimg_size: {
						default: new cc.Size(52, 70),
						visible: function () {
							return this.rank_num_tagimg_type > 0
						},
						displayName: "\u5bbd\u9ad8:",
						tooltip: "\u540d\u6b21\u56fe\u7247\u7684\u5927\u5c0f;"
					},
					rank_num_tagimg_src: {
						default: [],
						url: cc.Texture2D,
						visible: function () {
							return this.rank_num_tagimg_type > 0
						},
						displayName: "\u8d44\u6e90\u8def\u5f84\uff1a",
						tooltip: "\u81ea\u5df1\u8001\u8001\u5b9e\u5b9e\u5f80\u4e0a\u653e\u56fe\u7247\u4e0d\u597d\u5417"
					}
				}
			}),
			u = cc.Class({
				name: "\u5b50\u63a7\u4ef6-\u5934\u50cf",
				properties: {
					userphoto_type: {
						type: cc.Enum(a),
						default: 0,
						displayName: "\u5934\u50cf\u5f62\u72b6:",
						tooltip: "\u5934\u50cf\u53ea\u6709\u4e24\u79cd\u5f62\u5f0f\uff0c\u4e00\u79cd\u662f\u5706\u5f62\u7684\uff0c\u4e00\u79cd\u662f\u65b9\u5f62\u7684\u3002"
					},
					userphoto_default_avatarUrl: {
						default: null,
						url: cc.Texture2D,
						displayName: "\u9ed8\u8ba4\u5934\u50cf:",
						tooltip: "\u5fc5\u5907\u9ed8\u8ba4\u5934\u50cf;"
					},
					userphoto_pos_offset: {
						default: new cc.Vec2(0, 0),
						displayName: "\u5934\u50cf\u7684\u5750\u6807\u504f\u79fb(\u5750\u6807y\u65e0\u6548):",
						tooltip: "\u4e0d\u6ee1\u610f\u73b0\u5728\u5934\u50cf\u7684\u5750\u6807\u7684\u8bdd\uff0c\u5c31\u5728\u73b0\u6709\u7684\u57fa\u7840\u4e0a\uff0c\u5fae\u8c03\u4e00\u4e0b\u5427\u3002"
					},
					userphoto_content_offset: {
						default: new cc.Size(0, 0),
						displayName: "\u5934\u50cf\u5bbd\u9ad8\u7684\u504f\u5dee\u503c:",
						tooltip: "\u4e0d\u6ee1\u610f\u5934\u50cf\u7684\u5bbd\u548c\u9ad8\u7684\u8bdd\uff0c\u5c31\u5728\u73b0\u6709\u7684\u57fa\u7840\u4e0a\uff0c\u5fae\u8c03\u4e00\u4e0b\u5427\u3002"
					},
					userphoto_bg_type: {
						type: cc.Enum(r),
						default: 0,
						displayName: "\u5934\u50cf\u80cc\u666f\u653e\u7f6e\u7c7b\u578b:",
						tooltip: "\u6587\u5b57\u8bf4\u660e\u5e94\u8be5\u5f88\u6e05\u695a\u4e86\u2026\u2026"
					},
					userphoto_bg_url: {
						default: [],
						url: cc.Texture2D,
						visible: function () {
							return this.userphoto_bg_type > 0
						},
						displayName: "\u5934\u50cf\u80cc\u666f\u8d44\u6e90: ",
						tooltip: "\u5934\u50cf\u80cc\u666f\u8d44\u6e90;"
					}
				}
			}),
			h = cc.Class({
				name: "\u5b50\u63a7\u4ef6-\u6635\u79f0",
				properties: {
					keyList: {
						default: "bestScore,petName",
						displayName: "\u53d6\u503c\u5217\u8868:",
						tooltip: "\u901a\u8fc7key\u53d6\u503c\u7684\u5217\u8868;"
					},
					nickname_defaultText: {
						default: "0",
						displayName: "\u9ed8\u8ba4:",
						tooltip: "\u9ed8\u8ba4\u6587\u5b57"
					},
					nickname_text: {
						default: "%s",
						displayName: "\u683c\u5f0f\u5316\u6587\u5b57:",
						tooltip: "\u683c\u5f0f\u5316\u6587\u5b57"
					},
					nickname_maxwords_cnt: {
						default: 7,
						type: cc.Integer,
						displayName: "\u6700\u5927\u5b57\u6570:",
						tooltip: "\u6635\u79f0\u7684\u6700\u5927\u5bb9\u7eb3\u5b57\u6570"
					},
					nickname_offset: {
						default: new cc.Vec2(0, 0),
						displayName: "\u6635\u79f0\u5750\u6807\u504f\u79fb:",
						tooltip: "\u5b9a\u5236\u5b50\u63a7\u4ef6\u6635\u79f0\u6587\u5b57\u7684\u5750\u6807\u504f\u79fb"
					},
					nickname_fontsize: {
						default: 30,
						displayName: "font-size:",
						tooltip: "\u5b9a\u5236\u5b50\u63a7\u4ef6\u6635\u79f0\u6587\u5b57\u7684\u6587\u5b57\u5927\u5c0f"
					},
					nickname_color: {
						default: new cc.Color(255, 255, 255, 255),
						displayName: "\u989c\u8272:",
						tooltip: "\u6635\u79f0\u7684\u989c\u8272"
					},
					nickname_align_type: {
						type: cc.Enum(n),
						default: 0,
						displayName: "\u6587\u5b57\u5bf9\u9f50:",
						tooltip: "\u6587\u5b57\u5bf9\u9f50\u65b9\u5f0f;"
					},
					nickname_bold: {
						default: !1,
						displayName: "\u6587\u5b57\u52a0\u7c97:",
						tooltip: "\u52fe\u4e0a\u5c31\u662f\u52a0\u7c97\u4e86"
					},
					nickname_isItalic: {
						default: !1,
						displayName: "\u6587\u5b57\u503e\u659c:",
						tooltip: "\u52fe\u4e0a\u5c31\u662f\u503e\u659c\u4e86"
					},
					nickname_fontFamily: {
						default: "Helvetica",
						displayName: "family:",
						tooltip: "\u6587\u5b57\u7684family"
					}
				}
			}),
			p = cc.Class({
				name: "\u5b50\u63a7\u4ef6-\u5f97\u5206",
				properties: {
					keyName: {
						default: "bestScore",
						displayName: "\u53c2\u6570\u540d:",
						tooltip: "\u83b7\u53d6\u503c\u7684\u53c2\u6570\u540d;"
					},
					rank_score_defaultText: {
						default: "0",
						displayName: "\u9ed8\u8ba4:",
						tooltip: "\u9ed8\u8ba4\u6587\u5b57"
					},
					rank_score_offset: {
						default: new cc.Vec2(0, 0),
						displayName: "\u5f97\u5206\u5750\u6807\u504f\u79fb:",
						tooltip: "\u5b9a\u5236\u5b50\u63a7\u4ef6\u5f97\u5206\u6587\u5b57\u7684\u5750\u6807\u504f\u79fb"
					},
					rank_score_fontsize: {
						default: 30,
						displayName: "font-size:",
						tooltip: "\u5b9a\u5236\u5b50\u63a7\u4ef6\u5f97\u5206\u6587\u5b57\u7684\u6587\u5b57\u5927\u5c0f"
					},
					rank_score_color: {
						default: new cc.Color(255, 255, 255, 255),
						displayName: "\u989c\u8272:",
						tooltip: "\u5f97\u5206\u7684\u989c\u8272"
					},
					rank_score_align_type: {
						type: cc.Enum(n),
						default: 0,
						displayName: "\u6587\u5b57\u5bf9\u9f50:",
						tooltip: "\u6587\u5b57\u5bf9\u9f50\u65b9\u5f0f;"
					},
					rank_score_bold: {
						default: !1,
						displayName: "\u6587\u5b57\u52a0\u7c97:",
						tooltip: "\u52fe\u4e0a\u5c31\u662f\u52a0\u7c97\u4e86"
					},
					rank_score_isItalic: {
						default: !1,
						displayName: "\u6587\u5b57\u503e\u659c:",
						tooltip: "\u52fe\u4e0a\u5c31\u662f\u503e\u659c\u4e86"
					},
					rank_score_fontFamily: {
						default: "Helvetica",
						displayName: "family:",
						tooltip: "\u6587\u5b57\u7684family"
					},
					rank_score_pre_addparamete: {
						default: "",
						displayName: "\u5f97\u5206\u524d\u7f00\uff1a",
						tooltip: "\u5982\u679c\u4f60\u60f3\u7ed9\u5f97\u5206\u7684\u6570\u5b57\u589e\u52a0\u4e2a\u4ec0\u4e48\u524d\u7f00\u540d\u5b57\u7684\u8bdd\uff0c\u5c31\u8bf7\u5f80\u8fd9\u91cc\u5199\u5b57\u7b26;"
					},
					rank_score_back_addparamete: {
						default: "",
						displayName: "\u5f97\u5206\u540e\u7f00\uff1a",
						tooltip: "\u5982\u679c\u4f60\u60f3\u7ed9\u5f97\u5206\u7684\u6570\u5b57\u589e\u52a0\u4e2a\u4ec0\u4e48\u540e\u7f00\u540d\u5b57\u7684\u8bdd\uff0c\u5c31\u8bf7\u5f80\u8fd9\u91cc\u5199\u5b57\u7b26;"
					},
					rank_score_icon_isVisible: {
						default: !1,
						displayName: "\u662f\u5426\u8ffd\u52a0\u524d\u7f6e\u56fe\u6807:",
						tooltip: "\u5728\u6587\u5b57\u7684\u524d\u9762\u653e\u56fe\u7247\u77e5\u9053\u5417\uff01"
					},
					rank_score_icon_offset: {
						default: new cc.Vec2(0, 0),
						displayName: "icon\u5750\u6807\u504f\u79fb:",
						tooltip: "icon\u5750\u6807\u504f\u79fb",
						visible: function () {
							return this.rank_score_icon_isVisible
						}
					},
					rank_score_icon_url: {
						default: null,
						url: cc.Texture2D,
						visible: function () {
							return this.rank_score_icon_isVisible
						},
						displayName: "\u79ef\u5206\u524d\u56fe\u6807\u8d44\u6e90: ",
						tooltip: "\u79ef\u5206\u524d\u56fe\u6807\u8d44\u6e90;"
					},
					rank_score_bg_isVisible: {
						default: !1,
						displayName: "\u5e95\u90e8\u662f\u5426\u653e\u56fe:",
						tooltip: "\u5f97\u5206\u5e95\u90e8\u662f\u5426\u653e\u56fe\u7247"
					},
					rank_score_bg_offset: {
						default: new cc.Vec2(0, 0),
						displayName: "bg_\u5750\u6807\u504f\u79fb:",
						tooltip: "bg_\u5750\u6807\u504f\u79fb",
						visible: function () {
							return this.rank_score_bg_isVisible
						}
					},
					rank_score_bg_url: {
						default: null,
						url: cc.Texture2D,
						visible: function () {
							return this.rank_score_bg_isVisible
						},
						displayName: "\u79ef\u5206\u5e95\u90e8\u8d44\u6e90: ",
						tooltip: "\u79ef\u5206\u5e95\u90e8\u8d44\u6e90;"
					}
				}
			}),
			f = function (t) {
				var e = t.r.toString(16),
					o = t.g.toString(16),
					n = t.b.toString(16);
				return "#" + (1 == e.length ? "0" + e : e) + (1 == o.length ? "0" + o : o) + (1 == n.length ? "0" + n : n)
			};
		cc.Class({
			extends: cc.Component,
			properties: {
				scrollView: cc.Node,
				keyList: {
					default: "bestScore",
					displayName: "\u6570\u636eKEY:",
					tooltip: "\u9700\u8981\u8bfb\u5230\u7684\u53c2\u6570\u540d\u5217\u8868\uff0c\u9017\u53f7\u5206\u9694: test1,test2,test3"
				},
				sortList: {
					default: "bestScore",
					displayName: "\u6392\u5e8fKEY:",
					tooltip: "\u53c2\u6570\u5217\u8868\u5305\u62ec\u6392\u5e8f\uff0c\u8bf7\u6309\u7167\u6392\u5e8f\u7684\u987a\u5e8f\u6765\u5199\uff0c\u9017\u53f7\u5206\u9694: test1,test2,test3"
				},
				rankList_cnt: {
					default: 20,
					type: cc.Integer,
					displayName: "\u6392\u884c\u6700\u5927\u5217\u8868\u6570:",
					tooltip: "\u6392\u884c\u699c\u6700\u5927\u53ef\u4ee5\u5bb9\u7eb3\u7684\u5217\u8868\u6570\u91cf;"
				},
				RankViewConfig: {
					type: c,
					default: null,
					displayName: "\u6392\u884c\u4e3b\u6846",
					tooltip: "\u8fd9\u91cc\u5305\u542b\u6392\u884c\u699c\u5927\u6846\u67b6\u7684\u4e1c\u897f;"
				},
				RankItemConfig: {
					type: d,
					default: null,
					displayName: "\u5b50\u63a7\u4ef6",
					tooltip: "\u8fd9\u91cc\u5305\u542b\u6392\u884c\u699c\u5b50\u63a7\u4ef6\u7684\u4e00\u4e9b\u57fa\u672c\u914d\u7f6e;"
				},
				RankNumConfig: {
					type: l,
					default: null,
					displayName: "\u5b50\u63a7\u4ef6-\u6392\u540d(\u540d\u6b21)",
					tooltip: "\u8fd9\u91cc\u5305\u542b\u6392\u884c\u699c\u5b50\u63a7\u4ef6-\u6392\u540d(\u540d\u6b21)\u7684\u4e00\u4e9b\u57fa\u672c\u914d\u7f6e;"
				},
				RankUserPhotoConfig: {
					type: u,
					default: null,
					displayName: "\u5b50\u63a7\u4ef6-\u5934\u50cf",
					tooltip: "\u8fd9\u91cc\u5305\u542b\u6392\u884c\u699c\u5b50\u63a7\u4ef6-\u5934\u50cf\u7684\u4e00\u4e9b\u57fa\u672c\u914d\u7f6e;"
				},
				RankCenterConfig: {
					default: [],
					type: h,
					displayName: "\u5b50\u63a7\u4ef6-\u6635\u79f0",
					tooltip: "\u8fd9\u91cc\u5305\u542b\u6392\u884c\u699c\u5b50\u63a7\u4ef6-\u6635\u79f0\u7684\u4e00\u4e9b\u57fa\u672c\u914d\u7f6e;"
				},
				RankScoreConfig: {
					type: p,
					default: null,
					displayName: "\u5b50\u63a7\u4ef6-\u5f97\u5206",
					tooltip: "\u8fd9\u91cc\u5305\u542b\u6392\u884c\u699c\u5b50\u63a7\u4ef6-\u5f97\u5206\u7684\u4e00\u4e9b\u57fa\u672c\u914d\u7f6e;"
				}
			},
			onLoad: function () {
				var t = this;
				this.RankItemConfig.rankItem_bg_color = f(this.RankItemConfig.rankItem_bg_color), this.RankViewConfig.rank_isUsedMD5 ? this.RankItemConfig.rankItem_bg_src.forEach(function (e, o) {
					e && (t.RankItemConfig.rankItem_bg_src[o] = cc.loader.md5Pipe.transformURL(e), t.RankViewConfig.rank_isUsedCDN && (t.RankItemConfig.rankItem_bg_src[o] = t.changeResPath(t.RankItemConfig.rankItem_bg_src[o])))
				}) : this.RankViewConfig.rank_isUsedCDN && this.RankItemConfig.rankItem_bg_src.forEach(function (e, o) {
					e && (t.RankItemConfig.rankItem_bg_src[o] = t.changeResPath(e))
				}), this.RankNumConfig.rank_num_color = f(this.RankNumConfig.rank_num_color), this.RankNumConfig.rank_num_bold = this.RankNumConfig.rank_num_bold ? "bold" : "", this.RankNumConfig.rank_num_isItalic = this.RankNumConfig.rank_num_isItalic ? "italic" : "", this.RankViewConfig.rank_isUsedMD5 ? this.RankNumConfig.rank_num_tagimg_src.forEach(function (e, o) {
					e && (t.RankNumConfig.rank_num_tagimg_src[o] = cc.loader.md5Pipe.transformURL(e), t.RankViewConfig.rank_isUsedCDN && (t.RankNumConfig.rank_num_tagimg_src[o] = t.changeResPath(t.RankNumConfig.rank_num_tagimg_src[o])))
				}) : this.RankViewConfig.rank_isUsedCDN && this.RankNumConfig.rank_num_tagimg_src.forEach(function (e, o) {
					e && (t.RankNumConfig.rank_num_tagimg_src[o] = t.changeResPath(e))
				}), this.RankViewConfig.rank_isUsedMD5 ? (this.RankUserPhotoConfig.userphoto_bg_url.forEach(function (e, o) {
					e && (t.RankUserPhotoConfig.userphoto_bg_url[o] = cc.loader.md5Pipe.transformURL(e), t.RankViewConfig.rank_isUsedCDN && (t.RankUserPhotoConfig.userphoto_bg_url[o] = t.changeResPath(t.RankUserPhotoConfig.userphoto_bg_url[o])))
				}), this.RankUserPhotoConfig.userphoto_default_avatarUrl && (this.RankUserPhotoConfig.userphoto_default_avatarUrl = cc.loader.md5Pipe.transformURL(this.RankUserPhotoConfig.userphoto_default_avatarUrl), this.RankViewConfig.rank_isUsedCDN && (this.RankUserPhotoConfig.userphoto_default_avatarUrl = this.changeResPath(this.RankUserPhotoConfig.userphoto_default_avatarUrl)))) : this.RankViewConfig.rank_isUsedCDN && (this.RankUserPhotoConfig.userphoto_bg_url.forEach(function (e, o) {
					e && (t.RankUserPhotoConfig.userphoto_bg_url[o] = t.changeResPath(e))
				}), this.RankUserPhotoConfig.userphoto_default_avatarUrl && (this.RankUserPhotoConfig.userphoto_default_avatarUrl = this.changeResPath(this.RankUserPhotoConfig.userphoto_default_avatarUrl)));
				for (var e = 0; e < this.RankCenterConfig.length; e++) this.RankCenterConfig[e].nickname_color = f(this.RankCenterConfig[e].nickname_color), this.RankCenterConfig[e].nickname_bold = this.RankCenterConfig[e].nickname_bold ? "bold" : "", this.RankCenterConfig[e].nickname_isItalic = this.RankCenterConfig[e].nickname_isItalic ? "italic" : "";
				this.RankScoreConfig.rank_score_color = f(this.RankScoreConfig.rank_score_color), this.RankScoreConfig.rank_score_bold = this.RankScoreConfig.rank_score_bold ? "bold" : "", this.RankScoreConfig.rank_score_isItalic = this.RankScoreConfig.rank_score_isItalic ? "italic" : "", this.RankViewConfig.rank_isUsedMD5 ? this.RankScoreConfig.rank_score_bg_url && (this.RankScoreConfig.rank_score_bg_url = cc.loader.md5Pipe.transformURL(this.RankScoreConfig.rank_score_bg_url), this.RankViewConfig.rank_isUsedCDN && (this.RankScoreConfig.rank_score_bg_url = this.changeResPath(this.RankScoreConfig.rank_score_bg_url))) : this.RankViewConfig.rank_isUsedCDN && this.RankScoreConfig.rank_score_bg_url && (this.RankScoreConfig.rank_score_bg_url = this.changeResPath(this.RankScoreConfig.rank_score_bg_url)), this.ConfigData = {
					keyList: this.keyList,
					sortList: this.sortList,
					rankList_cnt: this.rankList_cnt,
					designContentsize: cc.view.getDesignResolutionSize(),
					rank_frame_contentsize: new cc.Size(this.scrollView.width, this.scrollView.height),
					rank_frame_pos: new cc.Vec2(this.scrollView.x, this.scrollView.y),
					frameCfg: this.RankViewConfig,
					itemCfg: this.RankItemConfig,
					numCfg: this.RankNumConfig,
					photoCfg: this.RankUserPhotoConfig,
					nickCfg: this.RankCenterConfig,
					scoreCfg: this.RankScoreConfig
				}, this.init(), "undefined" != typeof wx ? (this.tex = new cc.Texture2D, this.node.updateCnt = Number.MAX_VALUE) : this.node.updateCnt = 0, this.scrollView.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
			},
			init: function () {
				var t = wx.getOpenDataContext();
				this.sharedCanvas = t.canvas, this.sharedCanvas.width = cc.winSize.width, this.sharedCanvas.height = cc.winSize.height
			},
			changeResPath: function (t) {
				var e = "res/raw-assets/",
					o = t.indexOf(e);
				if (o < 0) return t;
				var n = "rankImg/" + t.substr(o + e.length, t.length - (o + e.length) + 1);
				return console.log(n), n
			},
			onTouchMove: function (t) {
				var e = t.getDeltaY();
				wx.getOpenDataContext().postMessage({
					message: e,
					key: "wxRankListMove"
				})
			},
			onEnable: function () { },
			update: function () {
				this._updateWxRenderLayer()
			},
			_updateWxRenderLayer: function () {
				this.node.updateCnt > 0 && (this.node.updateCnt--, this.tex.initWithElement(sharedCanvas), this.tex.handleLoadedTexture(), this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(this.tex))
			},
			showFriendRank: function () {
				void 0 !== window.wx && window.wx.getOpenDataContext().postMessage({
					key: "reqRankListData",
					message: this.ConfigData
				})
			},
			showGroupRank: function (t) {
				void 0 !== window.wx && (this.ConfigData.shareTicket = t, window.wx.getOpenDataContext().postMessage({
					key: "reqGroupCloudStrage",
					message: this.ConfigData
				}))
			},
			onDisable: function () {
				void 0 !== window.wx && (console.log("onDisable wxRankdListprefab"), window.wx.getOpenDataContext().postMessage({
					key: "clearRankListData"
				}), this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(new cc.Texture2D))
			},
			setOwnerData: function (t) {
				void 0 !== window.wx && window.wx.getOpenDataContext().postMessage({
					key: "setOwnerData",
					message: t
				})
			}
		}), cc._RF.pop()
	}, {}],
	wxSurpassPrefab: [function (t, e, o) {
		"use strict";
		cc._RF.push(e, "7ae94eqHJlA16VMz+bila54", "wxSurpassPrefab");
		var n = cc.Enum({
			"\u5934\u50cf\u4f7f\u7528\u6b63\u65b9\u5f62\u7684": 0,
			"\u5934\u50cf\u4f7f\u7528\u5706\u5f62\u7684": 1
		}),
			i = function (t) {
				var e = t.r.toString(16),
					o = t.g.toString(16),
					n = t.b.toString(16);
				return "#" + (1 == e.length ? "0" + e : e) + (1 == o.length ? "0" + o : o) + (1 == n.length ? "0" + n : n)
			},
			a = cc.Enum({
				"\u5de6\u5bf9\u9f50": 0,
				"\u53f3\u5bf9\u9f50": 1,
				"\u5c45\u4e2d\u5bf9\u9f50": 2
			});
		cc.Class({
			extends: cc.Component,
			properties: {
				keyList: {
					default: "bestScore",
					displayName: "\u6570\u636eKEY:",
					tooltip: "\u8bf7\u6c42\u6570\u636e\u7684KEY"
				},
				userPhoto_Node: {
					type: cc.Node,
					default: null,
					displayName: "\u5934\u50cf\u8282\u70b9",
					tooltip: "\u5934\u50cf\u9002\u914d\u7684\u8282\u70b9;"
				},
				surpass_userphoto_bgUrl: {
					default: null,
					url: cc.Texture2D,
					displayName: "\u80cc\u666f\u56fe\u7247\u8def\u5f84",
					tooltip: "\u8d85\u8d8a\u597d\u53cb\u5934\u50cf\u7684\u80cc\u666f\u56fe\u7247\u8d44\u6e90\u8def\u5f84"
				},
				surpass_userphoto_headBgUrl: {
					default: null,
					url: cc.Texture2D,
					displayName: "\u5934\u50cf\u5934\u90e8\u80cc\u666f\u8d44\u6e90:",
					tooltip: "\u5934\u50cf\u5934\u90e8\u80cc\u666f\u8d44\u6e90"
				},
				surpass_userPhoto_Type: {
					type: cc.Enum(n),
					default: 0,
					displayName: "\u5934\u50cf\u5f62\u72b6:",
					tooltip: "\u5934\u50cf\u53ea\u6709\u4e24\u79cd\u5f62\u5f0f\uff0c\u4e00\u79cd\u662f\u5706\u5f62\u7684\uff0c\u4e00\u79cd\u662f\u65b9\u5f62\u7684\u3002"
				},
				surpass_userphoto_offset: {
					default: new cc.Vec2(0, 0),
					displayName: "\u5934\u50cf\u4f4d\u7f6e\u504f\u79fb:",
					tooltip: "\u7528\u4e8e\u4fee\u6539\u5934\u50cf\u5bf9\u4e8e\u80cc\u666f\u7684\u4f4d\u7f6e\u504f\u79fb;"
				},
				surpass_desc_fontsize: {
					default: 30,
					displayName: "\u6587\u5b57\u5927\u5c0f:",
					tooltip: "\u6587\u5b57\u5927\u5c0f;"
				},
				surpass_desc_lineSpacing: {
					default: 5,
					displayName: "\u884c\u95f4\u8ddd:",
					tooltip: "\u8bf4\u660e\u6587\u5b57\u7684\u884c\u95f4\u8ddd;"
				},
				surpass_desc_color: {
					default: new cc.Color(255, 255, 255, 255),
					displayName: "\u989c\u8272:",
					tooltip: "\u8bf4\u660e\u6587\u5b57\u989c\u8272;"
				},
				surpass_desc_offset: {
					default: new cc.Vec2(0, 0),
					displayName: "\u6587\u5b57\u8bf4\u660e\u4f4d\u7f6e\u504f\u79fb:",
					tooltip: "\u5728\u6587\u5b57\u8bf4\u660e\u73b0\u6709\u7684\u5750\u6807\u57fa\u7840\u4e0a\u8fdb\u884c\u4f4d\u7f6e\u504f\u79fb;"
				},
				surpass_desc: {
					default: "\u8fd8\u6709%s\u5173\n\u8d85\u8d8a\u597d\u53cb",
					displayName: "\u6587\u5b57:",
					tooltip: "\u8d85\u8d8a\u597d\u53cb\u8bf4\u660e\u6587\u5b57;"
				},
				surpass_align_type: {
					type: cc.Enum(a),
					default: 0,
					displayName: "\u6587\u5b57\u5bf9\u9f50:",
					tooltip: "\u6587\u5b57\u5bf9\u9f50\u65b9\u5f0f;"
				},
				surpass_bold: {
					default: !1,
					displayName: "\u6587\u5b57\u52a0\u7c97:",
					tooltip: "\u52fe\u4e0a\u5c31\u662f\u52a0\u7c97\u4e86"
				},
				surpass_isItalic: {
					default: !1,
					displayName: "\u6587\u5b57\u503e\u659c:",
					tooltip: "\u52fe\u4e0a\u5c31\u662f\u503e\u659c\u4e86"
				},
				surpass_fontFamily: {
					default: "Helvetica",
					displayName: "family:",
					tooltip: "\u6587\u5b57\u7684family"
				},
				stopTime: 5,
				addTime: 0
			},
			onLoad: function () {
				this.ConfigData = {
					keyList: this.keyList,
					designContentsize: cc.view.getDesignResolutionSize(),
					surpass_userPhoto_contentsize: new cc.Size(this.userPhoto_Node.width, this.userPhoto_Node.height),
					surpass_userPhoto_bg_pos: new cc.Vec2(this.userPhoto_Node.x, this.userPhoto_Node.y),
					surpass_userphoto_bgUrl: this.surpass_userphoto_bgUrl,
					surpass_userphoto_headBgUrl: this.surpass_userphoto_headBgUrl,
					surpass_userPhoto_Type: this.surpass_userPhoto_Type,
					surpass_userphoto_offset: this.surpass_userphoto_offset,
					surpass_desc_fontsize: this.surpass_desc_fontsize,
					surpass_desc_lineSpacing: this.surpass_desc_lineSpacing,
					surpass_desc_maxWidth: this.surpass_desc_maxWidth,
					surpass_desc_color: i(this.surpass_desc_color),
					surpass_desc_offset: this.surpass_desc_offset,
					surpass_desc: this.surpass_desc,
					surpass_align_type: this.surpass_align_type,
					surpass_bold: this.surpass_bold ? "bold" : "",
					surpass_isItalic: this.surpass_isItalic ? "italic" : "",
					surpass_fontFamily: this.surpass_fontFamily
				}, "undefined" != typeof wx ? (this.tex = new cc.Texture2D, this.node.updateCnt = Number.MAX_VALUE) : this.node.updateCnt = 0
			},
			onEnable: function () {
				window.wx && window.wx.getOpenDataContext().postMessage({
					key: "reqSurpassData",
					message: this.ConfigData
				}), this.addTime = 0
			},
			onDisable: function () {
				console.log("onDisable clearSurpassData"), window.wx && window.wx.getOpenDataContext().postMessage({
					key: "clearSurpassData"
				}), this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(new cc.Texture2D)
			},
			clearData: function () {
				window.wx && window.wx.getOpenDataContext().postMessage({
					key: "clearSurpassData"
				})
			},
			freshData: function () {
				window.wx && window.wx.getOpenDataContext().postMessage({
					key: "reqSurpassData",
					message: this.ConfigData
				}), this.addTime = 0
			},
			update: function (t) {
				this.addTime += t, this.addTime < this.stopTime && this._updateWxRenderLayer()
			},
			_updateWxRenderLayer: function () {
				this.node.updateCnt > 0 && (this.node.updateCnt--, this.tex.initWithElement(sharedCanvas), this.tex.handleLoadedTexture(), this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(this.tex))
			},
			setOwnerData: function (t) {
				console.log("setOwnerData = ", t), void 0 !== window.wx && window.wx.getOpenDataContext().postMessage({
					key: "setOwnerData",
					message: t
				})
			}
		}), cc._RF.pop()
	}, {}]
}, {}, ["Ark", "Arrow", "Assassin", "AssassinData", "AssassinShopItem", "AssassinShopLayer", "Bomb", "Bullet", "DiamondNode", "Events", "GameObject", "GameObjectMgr", "GamePause", "GameRelife", "GameResultLayer", "GameScene", "Guard", "HelpLayer", "LevelData", "Light", "MenuItem", "MenuLayer", "PreGetDiamondNode", "Prop", "PropComponent", "RandomDrawLayer", "StartLayer", "TryuseAssassinLayer", "Txt", "UnLockModeLayer", "UserData", "YdhwCfg", "YdhwFrameBox", "YdhwGameIconItem", "YdhwGuessYouLike", "YdhwRankLayer", "YdhwSideBox", "YdhwSignDayItem", "YdhwSignDayLayer", "YdhwTips", "YdhwTryPlay", "YdhwTurnTable", "YdhwTurnTableItem", "wxOnly3Prefab", "wxRankListPrefab", "wxSurpassPrefab", "YdhwDataStatistics", "XwwFb", "XwwOPPO", "YdhwAudio", "YdhwComponent", "YdhwHg", "YdhwHttp", "YdhwNet", "YdhwPrefabManager", "YdhwQQ", "YdhwStoreManager", "YdhwTT", "YdhwUtil", "YdhwWeb", "YdhwWx", "YdhwSDK"]);