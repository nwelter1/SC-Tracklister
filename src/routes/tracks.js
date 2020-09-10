let router = require('express').Router();

let testFunc = require('../getsong');


router.get('/song/:songtitle', async(req,res) => {
    let trackList = await testFunc(req.params.songtitle);

    res.json({status: 'success', body: trackList})
})

module.exports = router;