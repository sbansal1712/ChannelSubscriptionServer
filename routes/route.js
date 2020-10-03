const express = require("express");

const router = new express.Router();

const authController = require("../controllers/auth");
const channelController = require("../controllers/channels");
// Middleware function to validate the access token and authorize the request

router.post("/createNewUser", authController.createNewUser);
router.post("/signIn", authController.signIn);
router.post("/updateChannels", channelController.updateChannels)
router.get("/getAllChannels", channelController.getAllChannels)


module.exports = router;
