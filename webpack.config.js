const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: './src/js/main.ts',
  devtool: "source-map",
  output: {
    path: `${__dirname}/dist/js`,
    filename: "main.js"
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        type: "asset/inline",
      }
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  target: ["web", "es5"],
};