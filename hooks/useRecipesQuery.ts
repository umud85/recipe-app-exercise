import { useQuery } from '@tanstack/react-query';
import fetchRecipes from '@/services/fetchRecipes';
import { Recipe } from '@/components/RecipeList';

export function useRecipesQuery(initialRecipes: Recipe[]) {
  const query = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
    initialData: initialRecipes,
  });
  return query;
}