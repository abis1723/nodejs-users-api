"use strict";
/* jshint node: true */
let { validRequest } = require("./handler/helper");
let { upsertUser, fetchUserDetails } = require('./handler/api-handler')



//function to call upsert 
async function upsertuser(event) {
  const request = JSON.parse(event.body);
  if (validRequest(request)) {
     return await upsertUser(request);
  }
} 

async function fetchuser(event) {
    if (event.pathParameters) {
        const entityId = event.pathParameters.entityid; 
       return await fetchUserDetails(entityId);
    }
  }

exports.upsertuser = async (event, context) => {
  return upsertuser(event);
};

exports.fetchuser = async (event, context) => {
  return await fetchuser(event);
};
