"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../../api/errors/owner-error.js");

const WARNINGS = {
  CreateUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class OwnerAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("owner");
  }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("listDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );
    let dtoOut = await this.dao.list(awid, dtoIn.pageInfo);

    return {...dtoOut, uuAppErrorMap}
  }
}

module.exports = new OwnerAbl();
