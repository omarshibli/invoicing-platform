'use strict';

// imports
const _ = require('lodash'),
  httpStatus = require('http-status-codes');;

// local imports
const httpUtil = require('../lib/http-util'),
  consts = require('../model/consts'),
  fileStorage = require('../lib/file-storage'),
  uuid = require('../lib/uuid'),
  storage_columns = consts.storage_columns;

// logging
const bunyan = require('bunyan'),
  log = bunyan.createLogger({
    name: 'storage-api-get'
  });

exports.put = (event, context, callback) => {
  const request_id = uuid.createOrderedId();
  log.info({
    request_id,
    event
  }, 'start');
  const file_id = event.pathParameters && event.pathParameters[storage_columns.file_id];
  if (!file_id) {
    const response = httpUtil.toResponse(httpStatus.BAD_REQUEST);
    log.warn({
      request_id,
      response
    }, 'Failed to parse file_id param');
    return callback(null, response);
  } else {
    fileStorage
      .loadFile(file_id)
      .then(file => {

      })
      .catch(error => {

      });
  }
};
