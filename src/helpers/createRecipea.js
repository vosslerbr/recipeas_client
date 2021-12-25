import axios from 'axios';

const createRecipea = async (recipeaData) => {
  try {
    const response = await axios.post(
      'https://recipeas-server.herokuapp.com/recipeas',
      recipeaData
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.error('Error creating recipea', err);
    return err;
  }
};

export default createRecipea;
