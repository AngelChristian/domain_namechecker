const router = require('express').Router();
const {checker} = require("../controllers/checker");

router.post("/", checker);



module.exports = router;