import { useQuery } from '@tanstack/react-query';
import fetchRecipe from '@/services/fetchRecipe';

export function useRecipeQuery(id: string) {
  const query = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => fetchRecipe(id),
  });
  return query;
}