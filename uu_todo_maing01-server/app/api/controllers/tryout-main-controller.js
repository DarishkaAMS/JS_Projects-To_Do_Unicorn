"use strict";
const TryoutMainAbl = require("../../abl/tryout-main-abl.js");

class TryoutMainController {

  secondTryout(ucEnv) {
    return TryoutMainAbl.secondTryout(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new TryoutMainController();
