const express = require('express');
const predictRoutes = require('./routes/predict')

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());

app.use("/predict", predictRoutes);

app.get("/", (req, res) => { 
    res.json({message: 'Cancerwise model API'}); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});