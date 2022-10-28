'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.addIndex('product', 'IDX_1442fd7cb5e0b32ff5d0b6c13d', ['uuid'], true, callback)
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
