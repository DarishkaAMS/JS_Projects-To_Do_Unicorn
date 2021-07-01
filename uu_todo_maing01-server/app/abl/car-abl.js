"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/car-error.js");

const WARNINGS = {
  CreateUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class CarAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("car");
  }

  async delete(awid, dtoIn, uuAppErrorMap={}) {
    let validationResult = this.validator.validate("deleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    let dtoOut;

    try {
      dtoOut = await this.dao.delete( awid, dtoIn.id);
    } catch (e) {
      throw Errors.Delete.DeleteDaoFailed(uuAppErrorMap, {dtoIn, cause: e})
    }

    return { ...dtoOut, uuAppErrorMap };
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("listDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    let dtoOut = await this.dao.list(awid, dtoIn);

    return { ...dtoOut, uuAppErrorMap };
  }

  async create(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("createDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let dtoOut;

    try {
      dtoOut = await this.dao.create({...dtoIn, awid});
    } catch (e) {
      throw Errors.Create.CarCreateDaoFailed(uuAppErrorMap, {dtoIn, cause: e})
    }

    return { ...dtoOut, uuAppErrorMap };
  }
  async update(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("updateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    const car = await this.dao.get(awid, dtoIn.id);

    if (!car) throw new Errors.Update.CarDoesNotExist(uuAppErrorMap, { carId: dtoIn.id });

    const uuObject = { ...car, ...dtoIn };
    let dtoOut = null;

    try {
      dtoOut = await this.dao.update(uuObject );
    } catch (e) {
      throw new Errors.Update.CarUpdateDaoFailed(uuAppErrorMap, {dtoIn, cause: e})
    }

    return { ...dtoOut, uuAppErrorMap };
  }
}

module.exports = new CarAbl();
