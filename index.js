
const fs = require('fs').promises;
const express = require('express');
const app = express();
const port = 8080;


// Endpoint to create a text file with the current timestamp
app.post('/Folder', async (req, res) => {
  try {
    const currentDate = new Date();
    const formatedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const formatedTime = `${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}`;

    const fileName = `${formatedDate}_${formatedTime}.txt`;
    const timestamp = currentDate.toISOString();

    await fs.writeFile(`./Folder/${fileName}`, `TimeStamp: ${timestamp}`);
    res.status(201).json({ message: 'File created successfully', fileName });
  } catch (error) {
    console.error('Error creating file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to retrieve all text files in the folder
app.get('/getAllFiles', async (req, res) => {
  try {
    const files = await fs.readdir(`./Folder`);
    res.json({ files });
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
