const axios = require('axios');

const peticionAxios = async (url, data) => {
  try {
    const respuesta = await axios.post(url,data)
    console.log(respuesta);
  } catch (error) {
    
  }
}

module.exports = peticionAxios;