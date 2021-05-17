const logging = require("../logging/logging");

const AWS = {
  awsRegion: "ap-southeast-2"
};
/* logger */
const LOG_LOGGER = new logging.Logger(
  process.env.DEBUG == 'true' ? logging.LEVEL.DEBUG : logging.LEVEL.INFO,
  logging.Formater('transportnsw', process.env.LOGGER_FLAG || 'transport-nsw-api')
)

const apiUrl = "https://0ce3u81gy0.execute-api.ap-southeast-2.amazonaws.com/uat/v1/entity";

module.exports = { 
  logger: LOG_LOGGER,
  apiUrl: apiUrl
};
