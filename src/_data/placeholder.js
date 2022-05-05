const axios = require("axios");
module.exports =  async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(result);
}