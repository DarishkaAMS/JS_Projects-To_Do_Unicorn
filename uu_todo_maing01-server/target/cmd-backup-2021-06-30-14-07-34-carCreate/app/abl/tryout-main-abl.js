"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/tryout-main-error.js");

const WARNINGS = {

};

class TryoutMainAbl {

  constructor() {
    this.validator = Validator.load();
    // this.dao = DaoFactory.getDao("tryoutMain");
  }

  async secondTryout(awid, dtoIn) {
    
  }

}

module.exports = new TryoutMainAbl();
