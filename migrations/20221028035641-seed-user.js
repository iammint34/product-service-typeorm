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
  db.runSql(`INSERT INTO user
  (uuid, user_id, firstname, middlename, lastname, role) 
  VALUES
  (uuid(), 1691, 'Nest', null, 'JS', 'ADMIN')
  `, callback)
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
