const axios = require('axios');

const predict = async (req, res) => {
    try {
        // Data input yang dikirim dari request body
        const modelRequest = {
          instances: [
            {
              aset: req.body.aset,    
              hobi: req.body.hobi,
              ide_bisnis: req.body.ide_bisnis,
              lama_pengalaman: req.body.lama_pengalaman,
              pekerjaan: req.body.pekerjaan,
            }
          ]
        };
    
        // Melakukan permintaan POST ke TensorFlow Serving
        const response = await axios.post('http://localhost:8501/v1/models/ide_bisnis_model:predict', modelRequest);
    
        // Mengembalikan respons dari TensorFlow Serving sebagai respons JSON
        res.json(response.data);
      } catch (error) {
        console.error('Error loading model:', error);
        res.status(500).send('Error loading model');
      }     
  
};

module.exports = {
  predict,
};
