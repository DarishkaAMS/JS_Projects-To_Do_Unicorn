"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/jokes-main-error.js");

const WARNINGS = {

};

class JokesMainAbl {

  constructor() {
    this.validator = Validator.load();
    // this.dao = DaoFactory.getDao("jokesMain");
  }

  async sayHello(awid, dtoIn) {
    
  }

}

module.exports = new JokesMainAbl();
