const axios = require('axios');
const { API_URL } = require('../config.js');

module.exports = {
  add: function(obj) {
    return axios.post(API_URL, obj);
  },
  delete: function(id)  {
    return axios.delete(`${API_URL}/${id}`);
  },
  getAll: function() {
    return axios.get(`${API_URL}/all`);
  },
  updatePosition: function(id, position) {
    return axios.patch(`${API_URL}/${id}/position`, {
      position,
    });
  },
  updateSize: function(id, dimensions, position) {
    return axios.patch(`${API_URL}/${id}/size`, {
      dimensions,
    });
  },
};