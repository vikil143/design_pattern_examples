// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./index.ts", // Entry point of your application
  mode: "development", // or 'production' if you need sourcemaps and debugging
  module: {
    rules: [
      {
        test: /\.ts$/, // Match TypeScript files
        use: "ts-loader", // Use ts-loader for TypeScript files
        exclude: /node_modules/, // Exclude node_modules
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve TypeScript and JavaScript extensions
  },
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
