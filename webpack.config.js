const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(webm|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }  
          }
        ]
      },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, use: "url-loader?limit=200000" },
      // {
      //   test: /\.(png|jpe?g|gif|jp2|webp|jpg)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "images/[name].[ext]",
      //   },
      // },
      // {
      //   test: /\.html$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //       options: {
      //         attributes: {
      //           list: [
      //             {
      //               tag: "source",
      //               attribute: "src",
      //               type: "src",
      //             },
      //           ],
      //         },
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(sass|scss)?$/,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
