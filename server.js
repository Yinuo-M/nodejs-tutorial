import express from 'express';
const app = express();
const port = 3001;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.status(200);
  res.json({
    name: 'Yinuo',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
