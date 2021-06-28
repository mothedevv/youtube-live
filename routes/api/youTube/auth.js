const express = require("express");
const router = express.Router();


router.get(
    "/",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: "select_account",
    })
  );

  
  