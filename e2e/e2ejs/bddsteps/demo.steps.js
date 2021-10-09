"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(() => __awaiter(this, void 0, void 0, function* () {
}));
cucumber_1.Given("User open browser", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield cucumber_1.setDefaultTimeout(60 * 1000);
        yield console.log("chrome browser opened");
    });
});
cucumber_1.Then("user enters {string}", function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield cucumber_1.setDefaultTimeout(60 * 1000);
        yield protractor_1.browser.manage().deleteAllCookies();
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.get(url);
    });
});
//# sourceMappingURL=demo.steps.js.map