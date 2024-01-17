module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addWatchTarget("./_css/");
  eleventyConfig.addWatchTarget("./_includes/");

  eleventyConfig.addLayoutAlias("master", "master.liquid");
  eleventyConfig.addGlobalData("description", "Author: H. Ekelöf, Category: Books");

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

  eleventyConfig.addLiquidTag("aliases", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = tagToken.args;
      },
      render: async function (scope, hash) {
        var str = await this.liquid.evalValue(this.str, scope);
        return `<p class="titleAliases">${str}</p>`;
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
    eleventyNavigation: {
      tjena: data => data.tjena
    }
  };
};
