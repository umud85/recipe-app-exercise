import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from './getQueryClient'
import fetchRecipes from './services/fetchRecipes';
import RecipeList from './components/RecipeList';

export default async function HydratedPosts() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['posts'], fetchRecipes)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <RecipeList />
    </Hydrate>
  )
}