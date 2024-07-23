const mongoose = require("mongoose");

mongoose

async function ConnectToMongo(dburl) {
  return mongoose.connect(dburl)
  .then( () => {
    console.log("DB Connected!")
  });
}

module.exports = { 
    ConnectToMongo
};