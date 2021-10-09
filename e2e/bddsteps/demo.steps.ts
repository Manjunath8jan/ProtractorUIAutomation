import { Before, Given, When, Then, setDefaultTimeout } from "cucumber";
import * as assert from "assert";
import { browser } from "protractor";
import { By } from "selenium-webdriver";
import { protractor } from "protractor";

Before( async ()=> {

});

Given("User open browser", async function () {
  await browser.waitForAngularEnabled(false);
  await setDefaultTimeout(60 * 1000);
  await console.log("chrome browser opened");
});

Then("user enters {string}",async function (url) {
  await browser.waitForAngularEnabled(false);
  await setDefaultTimeout(60 * 1000);
  await browser.manage().deleteAllCookies();
  await browser.manage().window().maximize();
  await browser.get(url);
});
