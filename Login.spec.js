import { test, expect } from '@playwright/test';
import { signUp } from "../POM/SignUp";
import { personalInfo } from "../POM/Pesronal";
import exp from 'constants';

test('Sign Up', async ({ page }) => {
    const Signup = new signUp(page)
    const PersonalInfo = new personalInfo(page)
    await Signup.navigateToUrl();

    await page.getByRole('button', { name: 'تسجيل الدخول' }).click();
    await PersonalInfo.phoneNumber.fill('01557742435')
    await PersonalInfo.passCode.fill('15935');
    await page.getByRole('button', { name: 'تسجيل الدخول' }).click();
})