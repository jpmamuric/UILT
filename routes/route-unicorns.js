const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser  = bodyParser.json();
const router  = express.Router();
const Unicorns = mongoose.model('unicorns');



// Find All Unicorns
router.get('/', async (req, res) => {
  let message;

  try {
    message = 'we found them all';
    const unicorns = await Unicorns.find({});
    res.status(200).send({ message, unicorns });
  }

  catch (err) {
    message = 'unable find all unicorns';
    res.status(422).send({ err , message });
  }
});


router.post('/', jsonParser, async (req, res) => {
  const { name } = req.body;
  const unicorn = new Unicorns({
    name
  });

  let message;

  try {
    await unicorn.save();
    message = 'unicorn post request recieved';
    res.status(200).send({ message, name });
  }

  catch(err) {
    message = 'unable to process unicorn';
    res.status(422).send({ err , message });
  }

});

module.exports = router;
