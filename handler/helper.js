"use strict";
/* jshint node: true */
const { logger } = require('../config/index').logger;


function validRequest(request) {
  let data = {}
  try {
    if (request && request.entityType && request.entityPayload) {
      if (request.entityType)
        data['entityType'] = request.entityType;
      if (request.entityPayload && request.entityPayload.firstName && request.entityPayload.lastName)
        data['entityPayload'] = request.entityPayload;
    }
    else {
      logger.error('Required parameter is missing');
      return;
    }
    return data;

  } catch (error) {
    logger.error(error);
    return;
  }
}
module.exports = {
  validRequest
};