const keys = {
  ENTER : "\uE007"
};

const navigateCommand = {
  goTo(namePage){
    this
      .setValue('@prompt', [namePage, keys.ENTER])
      .api.pause(1000);
    return this;
  }
};

module.exports = {
  url: 'http://josecarlosaparicio.com',
  commands: [navigateCommand],
  elements: {
    prompt: {
      selector : 'input.menu-prompt'
    }, 
    knowledgeBlock:{
      selector : '.block-knowledge'
    }
  }
};