import axios from 'axios';

export default async function fetchRecipes() {
  const response = await axios.get('http://localhost:3001/recipes');
  return response.data;
}