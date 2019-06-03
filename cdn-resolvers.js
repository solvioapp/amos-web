const moduleToCdn = require(`module-to-cdn`)

function resolve(name, version) {
  const list = [
    {
      name: `history`,
      var: `History`,
      url: `https://unpkg.com/history@${version}/umd/history.min.js`,
      version
    },
    {
      name: `ramda`,
      var: `R`,
      url: `https://unpkg.com/ramda@${version}/dist/ramda.min.js`,
      version
    },
    {
      name: `react-redux`,
      var: `ReactRedux`,
      url: `https://unpkg.com/react-redux@${version}/dist/react-redux.min.js`,
      version
    },
    {
      name: `redux-saga`,
      var: `ReduxSaga`,
      url: `https://unpkg.com/redux-saga@${version}/dist/redux-saga.umd.min.js`,
      version
    },
    {
      name: `regenerator-runtime`,
      var: `regeneratorRuntime`,
      url: `https://unpkg.com/regenerator-runtime@${version}/runtime.js`,
      version
    },
    {
      name: `reselect`,
      var: `Reselect`,
      url: `https://unpkg.com/reselect@${version}/dist/reselect.min.js`,
      version
    },
    {
      name: `styled-components`,
      var: `styled`,
      url: `https://unpkg.com/styled-components@${version}/dist/styled-components.min.js`,
      version

    },
  ]

  return list.find(pkg => pkg.name === name)
}

module.exports = (name, version, opts) => (
  resolve(name, version) ||
  moduleToCdn(name, version, opts)
)
