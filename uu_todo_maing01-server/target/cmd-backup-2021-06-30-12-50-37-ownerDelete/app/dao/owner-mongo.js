"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class OwnerMongo extends UuObjectDao {

  async createSchema(){}

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async list(awid, pageInfo) {
    return super.find({ awid }, pageInfo);
  }
}

module.exports = OwnerMongo;
