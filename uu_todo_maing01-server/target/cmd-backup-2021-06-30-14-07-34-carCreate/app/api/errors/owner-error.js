"use strict";

const TestMainUseCaseError = require("./todo-main-use-case-error.js");
const OWNER_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}owner/`;

const Create = {
  UC_CODE: `${OWNER_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  OwnerCreateDaoFailed: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}testCaseCreateDaoFailed`;
      this.message = "Creating test case by testCase DAO create failed.";
    }
  },
};

const List = {
  UC_CODE: `${OWNER_ERROR_PREFIX}list/`,

};

const Delete = {
  UC_CODE: `${OWNER_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  DeleteDaoFailed: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}testCaseDeleteDaoFailed`;
      this.message = "Deleting test case by testCase DAO create failed.";
    }
  }
};

module.exports = {
  Delete,
  List,
  Create
};
