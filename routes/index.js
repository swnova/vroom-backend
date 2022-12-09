const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.get("/api", (req,res) => {
//     return res.send("/api")
// })

router.use((req, res)=> {
    console.log(req)
    return res.send('Wrong route11!')
});

module.exports = router;