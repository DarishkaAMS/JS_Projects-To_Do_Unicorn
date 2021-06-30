"use strict";
const OwnerAbl = require("../../abl/owner-abl.js");

class OwnerController {

  create(ucEnv) {
    return OwnerAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new OwnerController();
