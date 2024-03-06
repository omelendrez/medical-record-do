const controller = require('../controllers/upload-controller')
const middleware = require('../middleware/upload-middleware')

module.exports = (app) => {
  const router = require('express').Router()

  const upload = middleware.upload

  router.post(
    process.env.ADDITIONAL_TEST_ENDPOINT,
    upload.single('file'),
    controller.uploadDocument
  )

  router.delete(
    `${process.env.ADDITIONAL_TEST_ENDPOINT}/:filename`,
    controller.deleteDocument
  )

  app.use('/', router)
}
