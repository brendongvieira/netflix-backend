const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://brendongvieira:bowandarrow7@cluster0.syauv.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
