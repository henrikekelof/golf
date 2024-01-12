module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("master", "master.liquid");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addWatchTarget("./_css/");
  eleventyConfig.addWatchTarget("./_includes/");

  eleventyConfig.addLiquidTag("subtitle", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = tagToken.args;
      },
      render: async function (scope, hash) {
        var str = await this.liquid.evalValue(this.str, scope);
        return `<p class="subTitle">${str}</p>`;
      },
    };
  });

  return {
    dir: {
      output: "docs",
      input: "src",
      includes: "../_includes",
      layouts: "../_layouts",
    },
  };
};
