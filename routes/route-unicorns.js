const express = require('express');
const router  = express.Router();

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    res.send({
       message: 'unicorn post request recieved',
       name
     });
  }

  catch(err) {
    const message = 'something went wrong';
    res.status(422).send({ err , message });
  }

});

module.exports = router;
