import axios from 'axios';

const createRecipea = async (recipeaData) => {
  try {
    const response = await axios.post('http://localhost:3000/recipeas', recipeaData);

    console.log(response);
    return response.data;
  } catch (err) {
    console.error('Error creating recipea', err);
  }
};

export default createRecipea;
