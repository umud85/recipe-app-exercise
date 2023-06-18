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
import { useRouter } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box/Box';

export interface Recipe {
  id: string;
  title: string;
  ingredients: string;
  servings: string;
}

export default function RecipeList() {
  const { data: recipes, isLoading, isError } = useRecipesQuery();
  const router = useRouter();
  if (isLoading) {
    <h2>Loading...</h2>
  }
  if (isError) {
    <h2>Error...</h2>
  }

  return (
    <Box sx={{ maxWidth: "700px", margin: "1em auto" }}>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton size="large" onClick={() => router.push("/recipe/add")}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {recipes?.map((recipe: Recipe) => (
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}