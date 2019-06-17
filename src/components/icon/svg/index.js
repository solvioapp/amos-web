const req = require.context(`.`, true, /\.svg$/)

const iconList = req.keys().reduce((list, key) => {
  const icon = key.replace(/\.\/(.+).svg/, `$1`)
  list[icon] = req(key).default

  return list
}, {})

export default iconList
