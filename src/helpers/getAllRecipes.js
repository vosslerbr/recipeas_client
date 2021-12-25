import axios from 'axios';

const getAllRecipes = async () => {
  try {
    const records = await axios.get('https://recipeas-server.herokuapp.com/recipeas');

    return records.data;
  } catch (err) {
    console.error(err);
  }
};

export default getAllRecipes;
