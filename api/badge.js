module.exports = async (req, res) => {
  let f = await fetch("https://api.github.com/users/creuserr/repos")
  let raw = await f.json()
  let count = raw.length
  f = await fetch("https://https:/api.github.com/users/dlvdls18/repos")
  raw = await f.json()
  count += raw.length
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Location", `https://img.shields.io/static/v1?label=Repositories&message=${count}&color=6bdf85&style=for-the-badge&logo=github`)
  res.statusCode = 302
  res.end()
}
