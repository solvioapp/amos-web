const SpritePlugin = require(`svg-sprite-loader/plugin`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.(less|css)$/,
        use: [
          `style-loader`,
          `css-loader`,
        ]
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
      common: rootPath(`../src/common`),
      components: rootPath(`../src/components`),
      containers: rootPath(`../src/containers`),
    }
  },
  plugins: [
    new SpritePlugin(),
  ],
}

module.exports = config
