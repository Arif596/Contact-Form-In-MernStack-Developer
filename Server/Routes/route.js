const router = require("express").Router();
const contact = require("../Modal/contact");

router.post("/post", async (req, res) => {
  try {
    const { name, address, pnumber, state, city, message } = req.body;
    const newContact = new contact({
      name,
      pnumber,
      address,
      state,
      city,
      message,
    });

    await newContact.save();

    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Technical error occurred", error: error.message });
  }
});

module.exports = router;
