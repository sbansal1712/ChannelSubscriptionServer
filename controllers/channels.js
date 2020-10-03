const Mst_Channels = require("../models/channels");
const Mst_Users = require("../models/users");



exports.updateChannels = async (req, res) => {
    try {
      console.log(req.body)
      var user = await Mst_Users.findOne({Username : req.body.Username}).exec()
      console.log(user)
      var channels = user.Channels
      if(channels == undefined){
        channels = []
      }
      
      channels.push(req.body.Channels)
      console.log(channels)
      user.set({Channels : channels})

      var result = await user.save()
      delete result.__v;
      delete result.password
      
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  };

  exports.getAllChannels = async (req, res) => {
    try {
      
      var result = await Mst_Channels.find().exec()
      
      
      
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  };