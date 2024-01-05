module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("master", "master.liquid");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addWatchTarget("./_css/");
  eleventyConfig.addWatchTarget("./_includes/");
  return {
    dir: {
      output: "docs",
      input: "src",
      includes: "../_includes",
      layouts: "../_layouts",
    },
  };
};
