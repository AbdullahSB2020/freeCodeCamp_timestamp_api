const express = require('express')
const router = express.Router();

// [project url]/api/2015-12-25
// [project url]/api/

router.get('/api/:date', (req, res) => {
    let dodo = req.params.date ;
    
    if(!dodo.includes('-')) dodo = Number(dodo)
    
    let date = new Date(dodo)
    if(!Boolean(date.valueOf())){
        return res.status(400).json({msg: `this date (${req.params.date}) is Invalid`})
    }
    // {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
    let response = {
        unix: `${date.valueOf()}`,
        utc: `${date.toUTCString()}`
    }
    res.json(response);
})


module.exports = router ; 