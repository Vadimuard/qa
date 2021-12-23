import { Builder, By, Key, until } from "selenium-webdriver";
import assert from "assert/strict";

const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

const generatePseudoRandomStr = () => {
  return (Math.random() + 1).toString(36).substring(2);
};

const email = `${generatePseudoRandomStr()}@gmail.com`;

(async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://www.fb.com");
  const currentUrl = await driver.getCurrentUrl();
  assert.deepEqual(currentUrl, "https://www.facebook.com/");
  const createAccountBtn = await driver.findElement(
    By.linkText("Create new account")
  );
  assert.deepEqual(true, !!createAccountBtn);
  await createAccountBtn.click();
  await wait(1000);

  const firstNameElem = await driver.findElement(By.name("firstname"));
  await firstNameElem.sendKeys("Pedro");
  const lastNameElem = await driver.findElement(By.name("lastname"));
  await lastNameElem.sendKeys("Saragoza");
  const emailElem = await driver.findElement(By.name("reg_email__"));
  await emailElem.sendKeys(email);
  const reEnterEmailElem = await driver.findElement(
    By.name("reg_email_confirmation__")
  );
  await reEnterEmailElem.sendKeys(email);
  const passwordElem = await driver.findElement(By.name("reg_passwd__"));
  await passwordElem.sendKeys(generatePseudoRandomStr());
  //   await driver.quit();
})();
