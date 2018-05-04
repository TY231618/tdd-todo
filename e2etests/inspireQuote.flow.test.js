const expect = require('chai').expect;

describe('Inspire Quote', () => {
  it('should have a get quote button on load', () => {
    browser.url('http://localhost:8081/');
    const button = browser.isVisible('.quote-submit');

    expect(button).to.eql(true);
  })

  it('should return a quote on click', () => {
    browser.url('http://localhost:8081/');
    browser.click('.quote-submit');
    const quote = browser.element('.quote-text');

    expect(quote).to.eql(true);
  })
})