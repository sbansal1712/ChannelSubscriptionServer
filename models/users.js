const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    Username: { type: String, unique : true },
    Password: { type: String },
    FirstName : {type : String},
    LastName : {type : String},
    Channels : [{type : mongoose.Schema.Types.Mixed}]
    
  },
  { collection: "Mst_Users" }
);


const Mst_Users = mongoose.model("Mst_Users", UserSchema);
module.exports = Mst_Users;
