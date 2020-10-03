const mongoose = require("mongoose");


const ChannelSchema = new mongoose.Schema(
  {
    ChannelID: { type: String, unique : true },
    ChannelName: { type: String },
    PerDayCostinINR: { type: Number },
  },
  { collection: "Mst_Channels" }
);


const Mst_Channels = mongoose.model("Mst_Channels", ChannelSchema);
module.exports = Mst_Channels;
