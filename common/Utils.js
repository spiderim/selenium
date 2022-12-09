// const { Builder, Browser, By, Key } = require("selenium-webdriver");
import { Builder, Browser, By, Key } from "selenium-webdriver";

export const getChromeBuild = async () => {
  return await new Builder().forBrowser(Browser.CHROME).build();
};

export const openBrowserLink = async (driver, link) => {
  driver.get(link);
};

export const maximizeBrowser = async (driver) => {
  await driver.manage().window().maximize();
};

export const setImplicitTimeout = async (driver, TIMEOUT) => {
  await driver
    .manage()
    .setTimeouts({ implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT });
};

export const getElementByCssSelector = async (driver, Id, ...stringsToSend) => {
  return await driver.findElement(By.css(Id)).sendKeys(...stringsToSend);
};

export const getElementByName = async (driver, Id, ...stringsToSend) => {
  return await driver.findElement(By.name(Id)).sendKeys(...stringsToSend);
};

export const getElementByXpath = async (driver, Id, ...stringsToSend) => {
  return await driver.findElement(By.xpath(Id)).sendKeys(...stringsToSend);
};

export const getElementById = async (driver, Id, ...stringsToSend) => {
  return await driver.findElement(By.id(Id)).sendKeys(...stringsToSend);
};

export const clickByXpath = async (driver, Id) => {
  await driver.findElement(By.xpath(Id)).click();
};
