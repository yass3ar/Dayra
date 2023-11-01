const {test, expect, page} = require('@playwright/test')
exports.personalInfo = class personalInfo {
constructor (page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('اكتب اسمك الأول');
    this.familyName = page.getByPlaceholder('اكتب اسم عائلتك');
    this.phoneNumber = page.getByPlaceholder('رقم الموبايل')
    this.nextPage = page.getByRole('button', { name: 'التالي' });
    this.previousPage = page.getByRole('button', { name: 'الرجوع' });
    this.passCode= page.locator('#password');
}

async clickNext() {
  await this.nextPage.click()

}

async clickPrevious() {
  await this.previousPage.click()

}

async isFiveDigits(number) {
    // Check if the number is 5 digits
    if (number.length !== 5) {
      return false;
    }
  
    // Check if the number has repeated digits
    var repeated = [];
    for (var i = 0; i < number.length; i++) {
      if (repeated[number[i]]) {
        return false;
      }
      repeated[number[i]] = true;
    }
  
    // Check if the number has sequential digits
    for (var i = 0; i < number.length - 1; i++) {
      if (number[i] + 1 === number[i + 1]) {
        return false;
      }
    }
  
    // The number is 5 digits and does not have repeated digits or sequential digits
    return true;
}
}