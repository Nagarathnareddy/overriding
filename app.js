var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile = /** @class */ (function () {
    function Mobile() {
        this.GetDisplayDetails = function () {
            console.log("LTPS IPS LCD");
        };
        this.GetCameraDetails = function () {
            console.log("Dual-LED flash, panorama, HDR");
        };
        this.GetLaunchDate = function () {
            console.log("Launced in 2008, June");
        };
        this.NameOfMobile = "oneplus";
    }
    return Mobile;
}());
var oneplusone = /** @class */ (function (_super) {
    __extends(oneplusone, _super);
    function oneplusone() {
        var _this = _super.call(this) || this;
        _this.GetDisplayDetails = function () {
            console.log("5.5 inches, 83.4 cm2");
        };
        _this.GetCameraDetails = function () {
            console.log("Dual-LED flash, panorama, HDRclear");
        };
        _this.GetLaunchDate = function () {
            console.log("Launched in 2014");
        };
        return _this;
    }
    return oneplusone;
}(Mobile));
var mobile = new oneplusone();
mobile.NameOfMobile = "oneplus";
console.log("First Class");
console.log("this mobile is " + mobile.NameOfMobile + "one");
mobile.GetDisplayDetails();
mobile.GetCameraDetails();
mobile.GetLaunchDate();
console.log("------------------>>>>>>>>>>>>>>>");
var oneplustwo = /** @class */ (function (_super) {
    __extends(oneplustwo, _super);
    function oneplustwo() {
        var _this = _super.call(this) || this;
        _this.GetDisplayDetails = function () {
            console.log("5.5 inches, 83.4 cm2");
        };
        _this.GetCameraDetails = function () {
            console.log("Dual-LED flash, panorama");
        };
        _this.GetLaunchDate = function () {
            console.log("iphone is launched in 2015");
        };
        return _this;
    }
    return oneplustwo;
}(oneplusone));
var mobile1 = new oneplustwo();
mobile1.NameOfMobile = "oneplustwo";
console.log("Second Class");
console.log("this mobile " + mobile1.NameOfMobile);
mobile1.GetDisplayDetails();
mobile1.GetCameraDetails();
mobile1.GetLaunchDate();
console.log("------------------>>>>>>>>>>>>>>>");
var oneplusnord = /** @class */ (function (_super) {
    __extends(oneplusnord, _super);
    function oneplusnord() {
        var _this = _super.call(this) || this;
        _this.GetDisplayDetails = function () {
            console.log("6.44 inches, 100.6 cm2");
        };
        _this.GetCameraDetails = function () {
            console.log("Dual-LED flash, HDR, panorama");
        };
        _this.GetLaunchDate = function () {
            console.log("iphone is launched in 2020");
        };
        return _this;
    }
    return oneplusnord;
}(oneplustwo));
var mobile2 = new oneplusnord();
mobile2.NameOfMobile = "oneplusnord";
console.log("third Class");
console.log("this mobile " + mobile2.NameOfMobile);
mobile2.GetDisplayDetails();
mobile2.GetCameraDetails();
mobile2.GetLaunchDate();
console.log("------------------>>>>>>>>>>>>>>>");
var oneplus9pro = /** @class */ (function (_super) {
    __extends(oneplus9pro, _super);
    function oneplus9pro() {
        var _this = _super.call(this) || this;
        _this.GetDisplayDetails = function () {
            console.log("6.7 inches, 108.4 cm2");
        };
        _this.GetCameraDetails = function () {
            console.log("Hasselblad Color Calibration, dual-LED flash, HDR, panorama");
        };
        _this.GetLaunchDate = function () {
            console.log("iphone is launched in 2021");
        };
        return _this;
    }
    return oneplus9pro;
}(oneplusnord));
var mobile3 = new oneplus9pro();
mobile3.NameOfMobile = "oneplus9pro";
console.log("fourth Class");
console.log("this mobile " + mobile3.NameOfMobile);
mobile3.GetDisplayDetails();
mobile3.GetCameraDetails();
mobile3.GetLaunchDate();
console.log("------------------>>>>>>>>>>>>>>>");
var oneplus9R = /** @class */ (function (_super) {
    __extends(oneplus9R, _super);
    function oneplus9R() {
        var _this = _super.call(this) || this;
        _this.GetDisplayDetails = function () {
            console.log("6.55 inches, 103.6 cm2");
        };
        _this.GetCameraDetails = function () {
            console.log("Dual-LED flash, HDR, panorama");
        };
        _this.GetLaunchDate = function () {
            console.log("iphone is launched in April 2021");
        };
        return _this;
    }
    return oneplus9R;
}(oneplus9pro));
var mobile4 = new oneplus9R();
mobile4.NameOfMobile = "oneplus9R";
console.log("fifth Class");
console.log("this mobile " + mobile4.NameOfMobile);
mobile4.GetDisplayDetails();
mobile4.GetCameraDetails();
mobile4.GetLaunchDate();
console.log("------------------>>>>>>>>>>>>>>>");
var oneplus8 = /** @class */ (function (_super) {
    __extends(oneplus8, _super);
    function oneplus8() {
        var _this = _super.call(this) || this;
        _this.GetDisplayDetails = function () {
            console.log("Fluid AMOLED, 90Hz");
        };
        _this.GetCameraDetails = function () {
            console.log("Dual-LED flash, HDR, panorama");
        };
        _this.GetLaunchDate = function () {
            console.log("iphone is launched in April 2020");
        };
        return _this;
    }
    return oneplus8;
}(oneplus9R));
var mobile5 = new oneplus8();
mobile5.NameOfMobile = "oneplus8";
console.log("sixth Class");
console.log("this mobile " + mobile5.NameOfMobile);
mobile5.GetDisplayDetails();
mobile5.GetCameraDetails();
mobile5.GetLaunchDate();
console.log("------------------>>>>>>>>>>>>>>>");
var oneplus8R = /** @class */ (function (_super) {
    __extends(oneplus8R, _super);
    function oneplus8R() {
        var _this = _super.call(this) || this;
        _this.GetDisplayDetails = function () {
            console.log("Fluid AMOLED, 90Hz");
        };
        _this.GetCameraDetails = function () {
            console.log("Dual-LED flash, HDR, panorama");
        };
        _this.GetLaunchDate = function () {
            console.log("iphone is launched in April 2021");
        };
        return _this;
    }
    return oneplus8R;
}(oneplus8));
var mobile6 = new oneplus8R();
mobile6.NameOfMobile = "oneplus8R";
console.log("seventh Class");
console.log("this mobile " + mobile6.NameOfMobile);
mobile6.GetDisplayDetails();
mobile6.GetCameraDetails();
mobile6.GetLaunchDate();
console.log("------------------>>>>>>>>>>>>>>>");
