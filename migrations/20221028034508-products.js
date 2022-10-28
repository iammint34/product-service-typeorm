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
  db.createTable('product', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    uuid: 'string',
    code: 'string',
    name: 'string',
    price: { type: 'decimal', precision: 9, scale: 2, default: 0 },
    created_at: { type: "datetime", notNull: "true", defaultValue: 'CURRENT_TIMESTAMP' },
    updated_at: { type: "datetime", defaultValue: null },
    status: 'string'
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('product', callback);
};

exports._meta = {
  "version": 1
};
