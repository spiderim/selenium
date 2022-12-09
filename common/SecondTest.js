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

  // driver.manage().window().maximize();

  await driver
    .manage()
    .setTimeouts({ implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT });

  let startTime = new Date().getTime();

  await driver.findElement(By.css("#i0116")).then((el) => {
    el.sendKeys("Vish@bawmonitor.onmicrosoft.com", Key.RETURN);
  });

  await driver.findElement(By.name("passwd")).sendKeys("Bingatwork16!");

  await driver
    .findElement(By.xpath('//input[@value="Sign in"]'))
    .sendKeys(Key.RETURN);

  await driver.findElement(By.xpath('//input[@value="Yes"]')).click();

  await driver.findElement(By.id("AzureSqlConnectorThumbnail")).click();

  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="udtCatalogPickerWizardNextBtn"]')
    )
    .click();

  await driver
    .findElement(By.xpath('//input[@type="radio"]/following::label'))
    .click();

  await driver
    .findElement(By.xpath('//input[@type="checkbox"]/following::label'))
    .click();

  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();

  let name = Math.floor(Math.random() * 100000).toString();

  await driver
    .findElement(By.xpath('//input[@data-automation-id="SetConnector_name"]'))
    .sendKeys(name);
  await driver
    .findElement(
      By.xpath('//input[@data-automation-id="SetConnector_ConnectionId"]')
    )
    .sendKeys(name);

  await driver
    .findElement(By.xpath('//input[@type="checkbox"]//following::label'))
    .click();

  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();

  await driver
    .findElement(
      By.xpath('//input[@aria-label="Enter server name or IP address"]')
    )
    .sendKeys("azuresqlconnector.database.windows.net");
  await driver
    .findElement(By.xpath('//input[@aria-label="Enter Database Name"]'))
    .sendKeys("AdventureWorks");
  await driver
    .findElement(By.xpath('//span[contains(text(),"Select method")]'))
    .click();

  await driver.findElement(By.xpath('//button[@title="Basic"]')).click();

  await driver
    .findElement(By.xpath('//input[@aria-label="Enter Username"]'))
    .sendKeys("connector");
  await driver
    .findElement(By.xpath('//input[@aria-label="Enter Password"]'))
    .sendKeys("N1t01r7b3Q");

  await driver
    .findElement(
      By.xpath(
        '//button[@data-automation-id="MicrosoftSearch,testConnectionBtnBtn"]'
      )
    )
    .click();
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();

  await driver
    .findElement(
      By.xpath("//textarea[@aria-label='Paste your SQL query here']")
    )
    .sendKeys(
      "SELECT [colint],[coluniqueidentifier] FROM [DatatypeAcltable] WHERE [colint] > @watermark Order by [colint]"
    );

  await driver.findElement(By.xpath("//span[@aria-live]")).click();
  await driver.findElement(By.xpath('//button[@data-index="5"]')).click();
  await driver
    .findElement(
      By.xpath(
        '//button[@data-automation-id="MicrosoftSearch,fullCrawlValidateQueryBtnBtn"]'
      )
    )
    .click();
  await driver
    .findElement(By.xpath('//div[@data-automation-id="WatermarkColumnName"]'))
    .click();
  await driver.findElement(By.xpath('//button[@title="colint"]')).click();
  await driver
    .findElement(By.xpath('//div[@data-automation-id="UniqueKey"]'))
    .click();
  await driver
    .findElement(By.xpath('//input[@aria-label="colint"]//following::label'))
    .click();
  // next element is not visible . So to make it visible click on some other element
  await driver
    .findElement(By.xpath('//div[@data-automation-id="WatermarkColumnName"]'))
    .click();
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();
  //we are having same next button so it is instantly clicking the above button so sleep is used to wait and load the next next button
  await driver.sleep(2000);
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();
  await driver.findElement(By.xpath('//input[@value="Select"]')).click();
  await driver.findElement(By.xpath('//button[@data-index="1"]')).click();
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();
  await driver.sleep(3000);
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();
  await driver
    .findElement(By.xpath('//input[@type="radio"]//following::label'))
    .click();
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();
  await driver.sleep(3000);
  //refresh connection
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();

  await driver.sleep(3000);

  //review connection
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();

  let endTime = new Date().getTime();

  console.log(endTime - startTime);
  await driver.sleep(2000);
  // Review connection
  console.log("review connection");
  await driver
    .findElement(
      By.xpath('//button[@data-automation-id="addConnectorWizardNextBtn"]')
    )
    .click();

  await driver.sleep(2000);
  console.log("initializing done");
  //Done making connection
  await driver
    .findElement(By.xpath("//button[@data-automation-id='Connector_Done']"))
    .click();
}

example();
