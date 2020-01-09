import axios from 'axios';

export const getProducts = async () => {
  const res = await axios.get(`https://alg.li/doc-ecommerce.json`);
  console.log('The data is', res);
};
