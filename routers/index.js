const express = require('express');
const router = express.Router();

const homeControler = require('../controlers/homeControler')


module.exports = () => {
  router.get('/', homeControler.mostrartrabajos);

  return router
}



