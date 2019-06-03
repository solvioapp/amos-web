const express = require(`express`)
const fs = require(`fs`)
const http = require(`http`)

const app = express()

app.use(express.static(`public`, {maxAge: `1d`}))

app.use(`*`, (req, res) => {
  fs.createReadStream(`./public/index.html`).pipe(res)
})

const server = http.Server(app)
const port = process.env.PORT || 3000

server.listen(port, () => {
  console.info(`🚀 Server ready at ${port}`)
})
