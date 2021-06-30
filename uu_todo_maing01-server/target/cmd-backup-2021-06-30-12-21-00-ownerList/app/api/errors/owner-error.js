"use strict";

const HatcheryMainUseCaseError = require("./todo-main-use-case-error");
const OWNER_ERROR_PREFIX = `${HatcheryMainUseCaseError.ERROR_PREFIX}owner/`;

const Create = {
  UC_CODE: `${OWNER_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  OwnerCreateDaoFailed: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}testCaseCreateDaoFailed`;
      this.message = "Creating test case by testCase DAO create failed.";
    }
  },
};

module.exports = {
  Create
};
