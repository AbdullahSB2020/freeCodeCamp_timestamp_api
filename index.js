const express = require('express');

const app = express();

app.use('/', require('./routes/data.route'));

// app.use((req,res) => {
//     res.json({msg: 'body not found'})
// })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`app listens on ${PORT}`)});