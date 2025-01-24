const express = require("express");
const indexRouter = require("./routes/indexRouter");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log('server running on port', PORT);
});


app.get('/', indexRouter);