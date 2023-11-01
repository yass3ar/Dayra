const { test, expect, page } = require('@playwright/test')
exports.signUp = class signUp {
  constructor(page) {
    this.page = page;
    this.newAccount = page.getByRole('button', { name: 'حساب جديد' });
    this.companyName = page.getByPlaceholder('اسم الشركة');
    this.companyTaxNumber = page.getByPlaceholder('رقم البطاقة الضريبية')
    this.nextPage = page.getByRole('button', { name: 'التالي' });
  }

  async clickNext() {
    await this.nextPage.click()

  }
  async navigateToUrl() {
    await page.goto('https://kyb.testdayra.com/?passport_client_id=9a75fd18-6b3b-461a-8169-a56249763037&lang=ar')
  }

}