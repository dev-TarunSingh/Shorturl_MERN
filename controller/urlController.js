const { URL } = require("../model/urlSchema");
const mongoose = require("mongoose");
const shortid = require("shortid");

async function getUrlAndShort(req, res) {
  const body = req.body;
  console.log(req.body);

  let MadeshortId = "";

  if (!body.url) {
    return res.status(400).json({ err: "No URL found!" });
  } else {
    MadeshortId = shortid();
    console.log("new short id: " + MadeshortId);
    await URL.create({
      shortedId: MadeshortId,
      redirectUrl: body.url,
      visitHostory: [],
    });
  }

  console.log("Done!!");
  return res.status(201).json({ id : MadeshortId });
  
}


module.exports = {
  getUrlAndShort
};
