import axios from 'axios';

export const getShoppingList = async () => {
  const list = await axios.get('/shopping-list');

  return list.data;
};

export const deleteShoppingItem = async productId => {
  const item = await axios.patch(`/shopping-list/${productId}`);

  return item.data;
};

export const addShoppingItem = async body => {
  const item = await axios.post(`/shopping-list/`, body);

  return item.data;
};