const axios = require("axios");
module.exports =  async () => {
    const result = axios.get("https://api.thecatapi.com/v1/images/search");
    const mydata = await result;
    return mydata.data[0].url;
}