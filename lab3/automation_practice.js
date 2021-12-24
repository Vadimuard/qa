import { Builder, By } from "selenium-webdriver";
import assert from "assert/strict";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("0123456789abcdefghjiklomnpqrstuvwxyz", 12);

const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

const email = `${nanoid()}@gmail.com`;
const firstName = "Pedro";
const lastName = "Saragoza";
const address = "108 Hillburn St, Mississippi State, MS 39762";
const postalCode = "39762";
const city = "Starkville";
const state = "Mississippi";
const country = "United States";
const phone = "1-541-754-3010";

(async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://automationpractice.com");
  const currentUrl = await driver.getCurrentUrl();
  assert.deepEqual(currentUrl, "http://automationpractice.com/index.php");

  const signInBtn = await driver.findElement(By.linkText("Sign in"));
  assert.deepEqual(true, !!signInBtn);
  await signInBtn.click();
  await wait(1500);

  const emailElem = await driver.findElement(By.name("email_create"));
  await emailElem.sendKeys(email);

  const createAccountBtn = await driver.findElement(By.id("SubmitCreate"));
  await createAccountBtn.click();
  await wait(2500);

  const sexElem = await driver.findElement(By.id("id_gender1"));
  await sexElem.click();

  const customerFirstNameElem = await driver.findElement(
    By.name("customer_firstname")
  );
  await customerFirstNameElem.sendKeys(firstName);
  const customerLastNameElem = await driver.findElement(
    By.name("customer_lastname")
  );
  await customerLastNameElem.sendKeys(lastName);

  const passwordElem = await driver.findElement(By.name("passwd"));
  await passwordElem.sendKeys(nanoid());

  const birthdayMonthElem = await driver.findElement(By.name("months"));
  await birthdayMonthElem.sendKeys("Mar");
  const birthdayDayElem = await driver.findElement(By.name("days"));
  await birthdayDayElem.sendKeys(15);
  const birthdayYearElem = await driver.findElement(By.name("years"));
  await birthdayYearElem.sendKeys(2006);

  const firstNameElem = await driver.findElement(By.name("firstname"));
  await firstNameElem.sendKeys(firstName);
  const lastNameElem = await driver.findElement(By.name("lastname"));
  await lastNameElem.sendKeys(lastName);

  const addressElem = await driver.findElement(By.name("address1"));
  await addressElem.sendKeys(address);

  const cityElem = await driver.findElement(By.name("city"));
  await cityElem.sendKeys(city);

  const stateElem = await driver.findElement(By.name("id_state"));
  await stateElem.sendKeys(state);

  const postalCodeElem = await driver.findElement(By.name("postcode"));
  await postalCodeElem.sendKeys(postalCode);

  const countryElem = await driver.findElement(By.name("id_country"));
  await countryElem.sendKeys(country);

  const mobilePhoneElem = await driver.findElement(By.name("phone_mobile"));
  await mobilePhoneElem.sendKeys(phone);

  const submitBtn = await driver.findElement(By.name("submitAccount"));
  await submitBtn.click();
  await wait(4000);
  const signUpConfirmation = await driver.findElement(
    By.xpath("//*[text()='My account']")
  );
  assert.deepEqual(!!signUpConfirmation, true);
})();
