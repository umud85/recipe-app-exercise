import { useQuery } from '@tanstack/react-query';
import fetchRecipes from '@/services/fetchRecipes';
import { Recipe } from '@/components/RecipeList';

export function useRecipesQuery() {
  const query = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
  });
  return query;
}