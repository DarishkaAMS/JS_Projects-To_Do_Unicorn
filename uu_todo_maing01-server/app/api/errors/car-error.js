"use strict";

const TestMainUseCaseError = require("./todo-main-use-case-error.js");
const CAR_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}car/`;

const Create = {
  UC_CODE: `${CAR_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  CarCreateDaoFailed: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}testCaseCreateDaoFailed`;
      this.message = "Creating test case by testCase DAO create failed.";
    }
  },
};

const List = {
  UC_CODE: `${CAR_ERROR_PREFIX}list/`,

};

const Delete = {
  UC_CODE: `${CAR_ERROR_PREFIX}delete/`,

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
      this.message = "Deleting test case by testCase DAO delete failed.";
    }
  },
}

const Update = {
  UC_CODE: `${CAR_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  CarDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}testCaseDeleteDaoFailed`;
      this.message = "Update test case by testCase DAO update failed.";
    }
  },
  CarUpdateDaoFailed: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}testCaseDeleteDaoFailed`;
      this.message = "Update test case by testCase DAO update failed.";
    }
  }
};

module.exports = {
  Delete,
  List,
  Create,
  Update,
};
