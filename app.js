const express = require('express')
const LoremIpsum = require("lorem-ipsum").LoremIpsum;


const lorem = new LoremIpsum();
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));
app.use(express.json());


app.post('/api/', (req, res) => {

  const {num} = req.body;
  const generatedText  = lorem.generateWords(num);
  
  res.json({text: `${generatedText}`});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})