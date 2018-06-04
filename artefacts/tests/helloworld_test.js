module.exports = {

  keys: null,

  before : function(browser) {
    console.log('Setting up...');
    this.keys = browser.Keys;
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {

  },

  afterEach : function() {

  },

  'Demo josecarlosaparicio.com' : function (client) {
    var josecarlosaparicio = client.page.mainpage();
    josecarlosaparicio.navigate();
    josecarlosaparicio.expect.element('@prompt').to.be.enabled;
    josecarlosaparicio.goTo('cv');
    josecarlosaparicio.expect.element('@knowledgeBlock').to.contain.text('Mi nombre es José Carlos Aparicio Moreno');
    client.end();
  }
};