import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3zEkpfaFBz_8LIWPikYdr6iLUIF74pOUgM1t9dw2AVQ'
  }
});
