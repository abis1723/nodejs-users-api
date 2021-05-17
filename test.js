"use strict";
/* jshint node: true */
let { validRequest } = require("./handler/helper");
let { upsertUser, fetchUserDetails } = require('./handler/api-handler')

const event = {
  body:{
    entityType: "ab",
    entityPayload: {
      firstName: "Akhil",
      lastName: "Biswas"
    }
  }
  }

//function to call upsert 
async function upsertuser(event) {
    //const request = JSON.parse(event.body);
    const request = event.body;

if (validRequest(request)) {
  console.log(event);
  return await upsertUser(request);
}
}

async function fetchuser(event) {
  console.log(event.pathParameters);
  if (event.pathParameters) {
    const entityId = event.pathParameters.entityid;
    return await fetchUserDetails(entityId);
  }
}

// exports.upsertuser = async (event, context) => {
//   return upsertuser(event);
// };

// exports.fetchuser = async (event, Context) => {
//   return await fetchuser(event);
// };




const aa =  upsertuser(event)