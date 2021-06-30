"use strict";
const CarAbl = require("../../abl/car-abl.js");

class CarController {

  delete(ucEnv) {
    return CarAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return CarAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return CarAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  update(ucEnv) {
    return CarAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new CarController();
