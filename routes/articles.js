const express = require('express');
const controllers = require('../controllers/articles');
const router = express.Router();

router.route('/').get(controllers.getAll).post(controllers.create);
router
  .route('/:id')
  .get(controllers.get)
  .put(controllers.update)
  .delete(controllers.delete);

module.exports = router;
