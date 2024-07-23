const express = require("express");
const https = require("https")
const cors = require("cors");
const PORT = 8000;
const urlRouter = require("./router/urlRouter");
const { ConnectToMongo } = require("./connect");
const { URL } = require("./model/urlSchema");

// connect Mongoose
const dburl = "mongodb://localhost:27017/easy-url";
ConnectToMongo(dburl);

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", urlRouter);

app.get("/:shortedId", async (req, res) => {
  const shortedId = req.params.shortedId;
  console.log(shortedId)
  const Entry = await URL.findOneAndUpdate(
    { shortedId : shortedId }, {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      }
    });
  console.log("entry:" + Entry);

  const SendUrl = Entry.redirectUrl;
  const ht = 'https://'

  if (SendUrl.includes(ht)) {
    res.redirect(sendUrl);
    console.log("https was present")
  } else {
    const newUrl = ht+SendUrl;
    console.log(`https not found! made new URL: ${newUrl}`)
    res.redirect(newUrl);
  }
});

app.listen(PORT, () => {
  console.log(`App running at Port: ${PORT}`);
});
