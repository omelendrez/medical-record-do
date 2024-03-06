const fs = require('fs')

const { getFileName } = require('../helpers/converters.js')

exports.uploadDocument = async (req, res) => {
  try {
    const document = await req.file

    if (!document) {
      return res.status(400).send({
        message: 'No file is selected.'
      })
    }

    const fileName = getFileName(req.body.name, document)

    const inputFile = `${process.env.COMPRESS_TEMP_FOLDER}/${document.filename}`

    const outputFile = `${process.env.ADDITIONAL_TEST_FOLDER}/${fileName}`

    fs.rename(inputFile, outputFile, () =>
      res.send({
        message: 'Document uploaded successfully',
        outputFile
      })
    )
  } catch (err) {
    console.error(err)
    log.error(err)
    res.status(500).send(err)
  }
}

exports.deleteDocument = async (req, res) => {
  const fileName = `${process.env.ADDITIONAL_TEST_FOLDER}/${req.params.filename}`
  if (await fs.existsSync(fileName)) {
    await fs.unlinkSync(fileName)
  }
  res.send({
    message: 'Document eliminado'
  })
}
