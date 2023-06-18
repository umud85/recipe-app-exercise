"use client";

import { useRecipesQuery } from '@/hooks/useRecipesQuery';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import Paper from '@mui/material/Paper/Paper';
import TableBody from '@mui/material/TableBody/TableBody';
import TableRow from '@mui/material/TableRow/TableRow';
import TableCell from '@mui/material/TableCell/TableCell';
import IconButton from '@mui/material/IconButton/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table/Table';
import Stack from '@mui/material/Stack/Stack';
import { useRouter } from 'next/navigation';


export interface Recipe {
  id: string;
  title: string;
  ingredients: string;
  servings: string;
}

export default function RecipeList({ initialRecipes }: { initialRecipes: Recipe[] }) {
  const { data: recipes, isLoading, isError } = useRecipesQuery(initialRecipes);
  const router = useRouter();
  if (isLoading) {
    <h2>Loading...</h2>
  }
  if (isError) {
    <h2>Error...</h2>
  }

  console.log(recipes);

  const recipesRow = recipes?.map((recipe: Recipe) => (
    <TableRow key={recipe.id} sx={{
      borderBottom: "1px solid rgb(224, 224, 224)",
      display: "flex",
      justifyContent: "space-between",
    }}>
        <TableCell sx={{ border: "none" }}>{recipe.title}</TableCell>
        <TableCell sx={{ border: "none" }}>
          <IconButton onClick={() => router.push(`/recipe/${recipe.id}`)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer sx={{ maxWidth: "700px", margin: "1em auto" }} component={Paper}>
      <Table>
        <TableBody>
          {recipesRow}
        </TableBody>
      </Table>
    </TableContainer>
  );
}