﻿function RichDate() {	var base = new Date();	Date.apply(base, arguments);		base.__proto__ = RichDate.prototype;	return base;};RichDate.prototype = {	__proto__: Date.prototype,	constructor: RichDate};(function Scope_RichDate(Date) {    var toEval = loadText(application.getFolder("path") + "/Modules/date.js"); 	eval(toEval);}(RichDate));exports.RichDate = RichDate;