const express = require('express');
const router  = express.Router();

router.get('/', (req, res ) => {
  res.send({ message: 'Unicorns I love them API' });
});

module.exports = router;
