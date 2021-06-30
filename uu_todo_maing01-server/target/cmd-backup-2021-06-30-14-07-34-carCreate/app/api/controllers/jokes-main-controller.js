"use strict";
const JokesMainAbl = require("../../abl/jokes-main-abl.js");

class JokesMainController {

  sayHello(ucEnv) {
    return JokesMainAbl.sayHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new JokesMainController();
