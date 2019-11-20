module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: "source-map",
  watch: true,
  mode: "development"
};
