const express = require('express');
const app = express();

app.use('/dist', express.static('./dist'));

app.use(express.static('./'))

app.listen(8000, ()=>{
    console.log('app listening in port 8000');
})