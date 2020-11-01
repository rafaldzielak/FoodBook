const axios = require("axios");
const config = require("config");

const setHeaders = () => {
  axios.defaults.headers.common["user-key"] = config.get("userKey");
};

module.exports = setHeaders;
