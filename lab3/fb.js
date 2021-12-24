import { Builder, By } from "selenium-webdriver";
import assert from "assert/strict";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("0123456789abcdefghjiklomnpqrstuvwxyz", 12);

const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

const email = `${nanoid()}@gmail.com`;

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
  await passwordElem.sendKeys(nanoid());
  const birthdayMonthElem = await driver.findElement(By.name("birthday_month"));
  await birthdayMonthElem.sendKeys("Mar");
  const birthdayDayElem = await driver.findElement(By.name("birthday_day"));
  await birthdayDayElem.sendKeys(15);
  const birthdayYearElem = await driver.findElement(By.name("birthday_year"));
  await birthdayYearElem.sendKeys(2006);
  const sexElem = await driver.findElement(
    By.xpath('//input[@name="sex" and @value="2"]')
  );
  await sexElem.click();
  const submitBtn = await driver.findElement(By.name("websubmit"));
  await wait(2000);
  await submitBtn.click();
  await wait(10000);
  const signUpConfirmation = await driver.findElement(
    By.xpath("//*[text()='Enter the code from your email']")
  );
  assert.deepEqual(!!signUpConfirmation, true);
})();
