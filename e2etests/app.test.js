const expect = require('chai').expect;

describe('Todolist', () => {
  it('should load with the right title', () => {
    browser.url('http://localhost:8081');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.equal('React Redux');
  })

  it('should allow me to create a todo', () => {
    browser.url('http://localhost:8081');
    const newTodo = 'get better at testing';
    browser.element('.todo-input').setValue(newTodo);
    browser.click('.todo-submit');

    const actual = browser.element('.todo-text').getText();
    expect(actual).to.equal(newTodo);
  })

  it('should allow me to delete a todo', () => {
    browser.url('http://localhost:8081');
    const newTodo = 'get better at testing';
    browser.element('.todo-input').setValue(newTodo);
    browser.click('.todo-submit');
    browser.click('.todo-delete');

    const actual = browser.element('.todo-text');
    expect(actual.state).to.equal('failure');
  })
})