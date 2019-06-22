const R = require(`ramda`)
const BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin
const CopyPlugin = require(`copy-webpack-plugin`)
const DynamicCdnWebpackPlugin = require(`dynamic-cdn-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const SpritePlugin = require(`svg-sprite-loader/plugin`)
const cdnResolvers = require(`./cdn-resolvers`)
const path = require(`path`)

const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const rootPath = dir => path.resolve(__dirname, dir)

const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: `file-loader`,
          options: {
            name: `[hash].[ext]`,
          }
        }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: `svg-sprite-loader`,
            options: {extract: true}
          },
          `svgo-loader`,
        ]
      },
    ]
  },
  output: {
    filename: `bundle.js`,
    path: rootPath(`./public`)
  },
  resolve: {
    alias: {
      root: rootPath(`.`),
      common: rootPath(`./src/common`),
      components: rootPath(`./src/components`),
      containers: rootPath(`./src/containers`),
      store: rootPath(`./src/store`),
      constants: rootPath(`./src/constants/`),
    }
  },
  plugins: [
    new SpritePlugin(),
    new HtmlWebPackPlugin({
      template: rootPath(`./src/index.html`)
    }),
  ],
}

const develop = {
  mode: `development`,
  // ErrorOverlayPlugin doesn't work with `eval-source-map`
  devtool: `cheap-module-source-map`,
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CopyPlugin([{
      from: rootPath(`./public`)
    }]),
    new ErrorOverlayPlugin(),
  ],
}

const production = {
  mode: `production`,
  plugins: [
    new DynamicCdnWebpackPlugin({
      env: `production`,
      resolver: cdnResolvers
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: `static`,
      reportFilename: rootPath(`bundle-report.html`)
    }),
  ],
}

const makeConfigs = R.mergeDeepWith(R.concat, common)

const config = (
  process.env.NODE_ENV === `production`
    ? makeConfigs(production)
    : makeConfigs(develop)
)

module.exports = config
