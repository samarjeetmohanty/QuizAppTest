/*
    Making an API component that can be reused in different places in the app 
*/

const BASE_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

export const getQuizData = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log('API service manager data',data);
    return data.results;
  } catch (error) {
    console.log('API request failed', error);
  }
};
