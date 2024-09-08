const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 9000;


mongoose.connect()

app.listen( PORT , () => console.log(`server started at PORT ${PORT}`));