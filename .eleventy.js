// require("nunjucks");

module.exports = function(eleventyconfig) {

    eleventyconfig.addPassthroughCopy("./assets/css/");
    eleventyconfig.addWatchTarget("./assets/css/");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
  }

  var md = require('markdown-it')()
            .use(require('markdown-it-container'), 'blog');