import { Before, Given, When, Then } from "cucumber";
import * as assert from "assert";
import { browser } from "protractor";
import { By } from "selenium-webdriver";
import { protractor } from "protractor";


Given("User open browser", async function () {
  await console.log("chrome browser opened");
});

Then("user enters {string}",async function (url) {
  await browser.manage().deleteAllCookies();
  await browser.manage().window().maximize();
  await browser.get(url);
});
