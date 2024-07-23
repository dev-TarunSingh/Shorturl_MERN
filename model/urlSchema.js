const mongoose = require("mongoose");

const urlschema = new mongoose.Schema(
  {
    shortedId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlschema);

module.exports = {
  URL,
};
