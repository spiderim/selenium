// import { Builder, Browser, By, Key } from "selenium-webdriver";
// import {
//   getChromeBuild,
//   openBrowserLink,
//   maximizeBrowser,
//   setImplicitTimeout,
//   getElementByCssSelector,
//   getElementByName,
//   getElementByXpath,
//   getElementById,
//   clickByXpath,
// } from "../common/Utils.js";

// describe("test for search & intelligence page", () => {
//   it("test login", async () => {
//     const driver = await getChromeBuild();
//     await setImplicitTimeout(driver, 100000);
//     await openBrowserLink(
//       driver,
//       "https://admin-ignite.microsoft.com/Adminportal/Home?#/MicrosoftSearch/Connectors/add"
//     );
//     await maximizeBrowser(driver);

//     //filling username and hitting enter
//     await getElementByCssSelector(
//       driver,
//       "#i0116",
//       "Vish@bawmonitor.onmicrosoft.com",
//       Key.RETURN
//     );
//     //filling password
//     await getElementByName(driver, "passwd", "Bingatwork16!");

//     //click on button Sign in
//     await clickByXpath(driver, '//input[@value="Sign in"]');

//     //click on yes button on stay signed in
//     await clickByXpath(driver, '//input[@value="Yes"]');

//     //select Azure Sql Connection

//     await getElementById(driver, "AzureSqlConnectorThumbnail", Key.RETURN);

//     //clilck on next button
//     await clickByXpath(
//       driver,
//       '//button[@data-automation-id="udtCatalogPickerWizardNextBtn"]'
//     );

//     // click on search,intelligence and discovery radio button
//     await clickByXpath(driver, '//input[@type="radio"]/following::label');

//     //select Microsoft Search option
//     await clickByXpath(driver, '//input[@type="checkbox"]/following::label');

//     //clilck on next button
//     await clickByXpath(
//       driver,
//       '//button[@data-automation-id="addConnectorWizardNextBtn"]'
//     );

//     let name = Math.floor(Math.random() * 100000).toString();

//     //fill set connector name
//     await getElementByXpath(
//       driver,
//       '//input[@data-automation-id="SetConnector_name"]',
//       name
//     );

//     //fill connection name
//     await getElementByXpath(
//       driver,
//       '//input[@data-automation-id="SetConnector_ConnectionId"]',
//       name
//     );

//     //click on checkbox below the description
//     await clickByXpath(driver, '//input[@type="checkbox"]//following::label');

//     // await driver.quit();
//   });
// });
