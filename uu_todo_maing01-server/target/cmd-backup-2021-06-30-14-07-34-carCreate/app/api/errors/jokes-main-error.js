"use strict";

const TodoMainUseCaseError = require("./todo-main-use-case-error.js");
const JOKES_MAIN_ERROR_PREFIX = `${TodoMainUseCaseError.ERROR_PREFIX}jokesMain/`;

const SayHello = {
  UC_CODE: `${JOKES_MAIN_ERROR_PREFIX}sayHello/`,
  
};

module.exports = {
  SayHello
};
