const req = require.context(`.`, true, /\.svg$/)

req.keys().forEach(key => {
  const icon = key.replace(/\.\/(.+).svg/, `$1`)
  module.exports[icon] = req(key).default
})
