"use strict";
const OwnerAbl = require("../../abl/owner-abl.js");
const ListAbl = require("../../abl/owner/list");

class OwnerController {

  list(ucEnv) {
    return ListAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return OwnerAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new OwnerController();
