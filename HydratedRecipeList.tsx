import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "./app/getQueryClient";
import RecipeList from '@/components/RecipeList';
import fetchRecipes from '@/services/fetchRecipes';


export default async function HydratedRecipeList() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['recipes'], fetchRecipes);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <RecipeList />
    </Hydrate>
  );
}