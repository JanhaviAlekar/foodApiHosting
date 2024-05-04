import express from "express";
import cors from 'cors';
import fetch from 'cross-fetch';

const app = express();
app.use(cors());

const dataop ={};

app.get('/api/restaurants', (req, res) => {
    const { lat, lng } = req.query;
    console.log(req.query);
    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.972866&lng=77.705453&page_type=DESKTOP_WEB_LISTING"
  
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred');
      });
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});