const http = require('http');
const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
app.set("trust proxy", 1);
app.use(express.json({ limit: "4mb" }));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

//root route
app.get("/api", (req, res) => {
  res.send(`Hello World`);
});

app.use('/', routes);

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));