const InputView = require('../view/InputView');

class Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    
  }

  play() {
    InputView.readAttempts((msg) => {
      console.log(msg);
    });
  }
}

module.exports = Controller;
