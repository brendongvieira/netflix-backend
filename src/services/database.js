const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://brendongvieira:Umdiadechuva7@cluster0.aaagw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
