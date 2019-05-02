
const Autoprefixer = require('autoprefixer');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const PostCSSCustomProperties = require('postcss-custom-properties');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const rtl = require('postcss-rtl');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = ['index'];
const entry = {};
const plugins = [];

pages.forEach(function(page) {
  entry[page] = path.resolve(path.join(__dirname, 'src', 'site', page));

  const plugin = new HtmlWebpackPlugin({
    chunks: [page],
    filename: `${page}.html`,
    template: path.join(__dirname, 'src', 'site', `${page}.html`)
  });

  plugins.push(plugin);
});

plugins.push(new MiniCssExtractPlugin({
  filename: `[name].css`,
}));

plugins.push(new PostCSSAssetsPlugin({
  test: /\.css$/,
  log: false,
  plugins: [
    PostCSSCustomProperties({ preserve: true }),
  ],
}));

// Create the app-level configuration
const config = {
  entry : entry,
  output: {
		path: path.join(__dirname, "docs"),
		filename: '[name].js'
	},
  devtool: 'cheap-source-map',
  resolveLoader: {
    modules: [path.resolve(path.join(__dirname, 'node_modules'))],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],
    alias: {
      'react' : path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom' : path.resolve(__dirname, 'node_modules', 'react-dom')
    },
  },
  plugins : plugins,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets : [["@babel/preset-env", { "targets" : { "browsers": ["ie >= 11"] }, "useBuiltIns" : false }], "@babel/preset-react", "@babel/preset-flow"],
            plugins : ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-modules-commonjs', '@babel/plugin-syntax-object-rest-spread']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|otf|eot|ttf|svg|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: false, // Issue logged: https://github.com/cerner/terra-toolkit/issues/122
              sourceMap: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // Add unique ident to prevent the loader from searching for a postcss.config file. Additionally see: https://github.com/postcss/postcss-loader#plugins
              ident: 'postcss',
              plugins() {
                return [
                  rtl(),
                  Autoprefixer({ browsers: [
                    'iOS >= 10',
                    'last 2 and_chr versions',
                    'last 2 android versions',
                    'last 2 chrome versions',
                    'last 2 edge versions',
                    'last 2 firefox versions',
                    'last 2 ie versions',
                    'last 2 safari versions',
                  ] }),
                ];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ]
  }
}

module.exports = config;
