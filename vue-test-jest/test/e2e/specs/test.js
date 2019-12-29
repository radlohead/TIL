module.exports = {
  "default e2e tests": function(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent("#toggle-message")
      .assert.containsText("button", "Change message")
      .assert.elementCount("li", 2)
      .end();
  }
};
