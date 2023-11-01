import { test, expect } from '@playwright/test';
import { signUp } from "../POM/SignUp";
import { personalInfo } from "../POM/Pesronal";
import exp from 'constants';

test('Sign Up', async ({ page }) => {
  const Signup = new signUp(page)
  const PersonalInfo = new personalInfo(page)

  // Generate a random 9-digit number
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);

  // Click on Sign up and create a new account
  await Signup.navigateToUrl();
  await Signup.newAccount.click();
  await Signup.clickNext();
  await Signup.clickNext();
  await Signup.clickNext();
  await Signup.companyName.fill("Benim");
  await Signup.companyTaxNumber.fill("${randomNumber}")
  await Signup.clickNext()

  // Fill in personal information
  await PersonalInfo.firstName.fill('Ali');
  await PersonalInfo.familyName.fill('Slety');
  await PersonalInfo.phoneNumber.fill('01233445566');
  await PersonalInfo.clickNext();

  await PersonalInfo.passCode.fill('15936')
  await expect(PersonalInfo.isFiveDigits('15936')).toBeTruthy();

  // Fill in Company details
  await page.getByRole('button', { name: 'اختار مجال عمل شركتك من هنا' }).click();
  await page.getByRole('button', { name: 'Kiosk' }).click();
  await PersonalInfo.clickNext();
  await page.getByPlaceholder('إكتب رقم المبنى، إسم الشارع').fill('hussein');
  await page.getByRole('button', { name: 'اختار المحافظة' }).click();
  await page.getByRole('button', { name: 'الجيزة' }).click();
  await page.getByRole('button', { name: 'اختار المدينة' }).click();
  await page.getByRole('button', { name: 'الطالبية' }).click();
  await PersonalInfo.clickNext();

  // Uploading ID Docs
  await page.locator('div').filter({ hasText: /^بطاقتك الشخصية إرفع الملف$/ }).first().click();
  await page.locator('div').filter({ hasText: /^إرفع الملفانواع الملفات:JPEG \/ PDF$/ }).first().click();
  await page.locator('div').filter({ hasText: /^إرفع الملفانواع الملفات:JPEG \/ PDF$/ }).nth(2).click();
  await expect.soft(page.getByRole('button', { name: 'إرفع ملف كمان' })).toBeVisible();
  await PersonalInfo.clickPrevious()

  // Uploading Commercial Record Docs
  await page.locator('div').filter({ hasText: /^السجل التجاري إرفع الملف$/ }).first().click();
  await page.locator('div').filter({ hasText: /^إرفع الملفانواع الملفات:JPEG \/ PDF$/ }).first().click();
  await expect.soft(page.getByRole('button', { name: 'إرفع ملف كمان' })).toBeVisible();
  await PersonalInfo.clickPrevious()

  // Uploading Tax ID
  await page.locator('div').filter({ hasText: /^البطاقة الضريبية إرفع الملف$/ }).first().click();
  await page.locator('div').filter({ hasText: /^إرفع الملفانواع الملفات:JPEG \/ PDF$/ }).first().click();
  await expect.soft(page.getByRole('button', { name: 'إرفع ملف كمان' })).toBeVisible();
  await PersonalInfo.clickPrevious()
  await page.getByRole('button', { name: 'إنهاء' }).click();
})