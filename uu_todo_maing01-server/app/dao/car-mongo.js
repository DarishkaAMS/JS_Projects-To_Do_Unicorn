"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class CarMongo extends UuObjectDao {

  async createSchema(){}

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async list(awid, pageInfo) {
    return super.find({ awid }, pageInfo);
  }

  async delete(awid, id) {
    return super.deleteOne({ awid, id });
  }

  async update(uuObject) {
    const {id, awid} =uuObject
    return super.findOneAndUpdate({ awid, id },uuObject );
  }
  async get(awid, id) {
    return super.findOne({ awid, id });
  }
}


module.exports = CarMongo;
