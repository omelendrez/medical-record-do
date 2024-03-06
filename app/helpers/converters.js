const getFileName = (name, file) => {
  const ext = file.originalname.split('.').pop()
  const fileName = `${name}.${ext.toLowerCase()}`
  return fileName
}

module.exports = { getFileName }
