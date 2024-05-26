const express = require('express');

const app = express();

app.get('/start', (req, res) => {
  console.log('Starting the process...');
  res.send('Process completed successfully!');
});


const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});