const expect = require('chai').expect;

describe('Todolist', () => {
  it('should load with the right title', () => {
    browser.url('http://localhost:8081');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('React Redux');
  })
})