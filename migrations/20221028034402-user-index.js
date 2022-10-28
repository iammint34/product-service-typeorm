'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.addIndex('user', 'IDX_a95e949168be7b7ece1a2382fe', 'uuid', true, callback)
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
