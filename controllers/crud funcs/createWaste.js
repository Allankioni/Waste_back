const Waste = require("../../Schemas/Waste");

const createWaste = (req, res) => {
  console.log(req.body);
  const { category, reusability, refurb, location } = req.body;

  Waste.create({
    type: category,
    reusability,
    refabishability: refurb,
    location,
    image: req.file.path,
  });
  res.status(500);
};

module.exports = createWaste;
