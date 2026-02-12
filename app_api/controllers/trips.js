const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async(req, res) => {
    const q = await Model
        .find({})
        .exec();


    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
            res.set('Cache-Control', 'no-store');
            return res
                .status(200)
                .json(q);
    }
};

const tripsFindByCode = async(req,res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();

        console.log(q);

    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

// PUT: /trips/:tripCode - Adds a new trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
  try {
    const q = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        $set: {
          code: req.body.code,
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description: req.body.description,
        }
      },
      {
        new: true,           // return updated document
        runValidators: true  // enforce schema
      }
    ).exec();

    if (!q) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(q);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip ({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

        if(!q)
        {
            return res
                .status(400)
                .json(err);
        }else {
            return res
                .status(201)
                .json(q);
        }

            console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};