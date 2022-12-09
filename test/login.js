// const { Builder, Browser, By, Key } = require("selenium-webdriver");
import { Builder, Browser, By, Key } from "selenium-webdriver";
// const { elementLocated } = require("selenium-webdriver/lib/until");
const TIMEOUT = 60000;
// const { Keyboard } = require("selenium-webdriver/lib/input");

async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get(
    "https://admin-ignite.microsoft.com/Adminportal/Home?#/MicrosoftSearch/Connectors/add"
  );
  //   driver.manage().setTimeouts({ implicit: 20000 });

  //   driver.manage().window().maximize();
  await driver
    .manage()
    .setTimeouts({ implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT });
  //   let startTime = new Date().getTime();

  await driver.findElement(By.css("#i0116")).then((el) => {
    el.sendKeys("Vish@bawmonitor.onmicrosoft.com", Key.RETURN);
  });

  let startTime = new Date().getTime();
  await driver.findElement(By.name("passwd")).sendKeys("Bingatwork16!");

  await driver
    .findElement(By.xpath('//input[@value="Sign in"]'))
    .sendKeys(Key.RETURN);

  let endTime = new Date().getTime();

  console.log(endTime - startTime);

  await driver.quit();
}

// describe("my test", async () => {
//   it("login", async () => {
//     let startTime = new Date().getTime();
//     let driver = await new Builder().forBrowser(Browser.CHROME).build();

//     await driver.get(
//       "https://admin-ignite.microsoft.com/Adminportal/Home?#/MicrosoftSearch/Connectors/add"
//     );
//     //   driver.manage().setTimeouts({ implicit: 20000 });

//     driver.manage().window().maximize();
//     await driver
//       .manage()
//       .setTimeouts({ implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT });

//     await driver.findElement(By.css("#i0116")).then((el) => {
//       el.sendKeys("Vish@bawmonitor.onmicrosoft.com");
//     });

//     await driver.findElement(By.xpath('//input[@value="Next"]')).click();

//     await driver.findElement(By.name("passwd")).sendKeys("Bingatwork16!");

//     await driver
//       .findElement(By.xpath('//input[@value="Sign in"]'))
//       .sendKeys(Key.RETURN);

//     await driver.findElement(By.xpath('//input[@value="Yes"]')).click();

//     await driver.quit();

//     let endTime = new Date().getTime();

//     console.log(endTime - startTime);
//   });
// });

example();
