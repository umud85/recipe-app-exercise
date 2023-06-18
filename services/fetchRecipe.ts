import axios from 'axios';

export default async function fetchRecipe(id: string) {
  const response = await axios.get(`http://localhost:3001/recipes/${id}`);
  console.log(response.data);
  return response.data;
}