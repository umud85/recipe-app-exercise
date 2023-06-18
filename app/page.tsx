import fetchRecipes from '@/services/fetchRecipes';
import HydratedRecipeList from '@/HydratedRecipeList';

export default async function Home() {
  const initialData = await fetchRecipes();
  return (
    <>
      <h1 className="text-center mt-2 text-2xl font-bold">Recipe App</h1>
      <HydratedRecipeList />
    </>
  )
}
