import fetchRecipes from '@/services/fetchRecipes';
import RecipeList, { Props, Recipe } from '@/components/RecipeList';

export default async function Home() {
  const initialData = await fetchRecipes();
  return (
    <>
      <h1 className="text-center mt-2 text-2xl font-bold">Recipe App</h1>
      <RecipeList props={initialData} />
    </>
  )
}
