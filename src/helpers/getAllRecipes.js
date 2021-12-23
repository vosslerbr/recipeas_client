import axios from 'axios';

const getAllRecipes = async () => {
  try {
    const records = await axios.get('http://localhost:3000/recipeas');

    return records.data;
  } catch (err) {
    console.error(err);
  }
};

export default getAllRecipes;
