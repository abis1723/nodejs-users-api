const axios = require('axios');

let { logger, apiUrl} = require('../config/index')
let { compileResponse, errorResponse } = require('./response');



  async function fetchUserDetails(entityId) {
      console.log(`${apiUrl}/${entityId}`);
    return await axios.get(`${apiUrl}/${entityId}`)
        .then((response) => {
            // handle success
            if (response) {
                const resp = response.data
                return compileResponse(resp);
            } else {
                return {}
            }
        })
        .catch((error) => {
            logger.error(error);
            return errorResponse(403, error);
        })
}

async function upsertUser(data) {
    const body = {
        "entityType": data.entityType,
        "entityPayload": data.entityPayload
    }
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': ''
    }
    return axios.post(apiUrl, body, { headers: headers })
        .then((response) => {
            logger.info(`statusCode: ${response.status}`, 'INFO')
            return compileResponse(response.data);
        })
        .catch((error) => {
            logger.error(error, 'ERROR');
            if (error.message == 'Request failed with status code 503'){
                const message = 'Too many request';
                return errorResponse(503, message);
            }
            return errorResponse(403, error);
        })
}

module.exports = {
    upsertUser: upsertUser,
    fetchUserDetails: fetchUserDetails
}
