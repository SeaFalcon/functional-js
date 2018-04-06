const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.format({
    html: () => res.send(`accept: text/html`),
    json: () => res.json({accept: "application/json"})
  })
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(1111, () => console.log("listening"));