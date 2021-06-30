"use strict";
const OwnerAbl = require("../../abl/owner-abl.js");

class OwnerController {

  delete(ucEnv) {
    return OwnerAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return OwnerAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return OwnerAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new OwnerController();
