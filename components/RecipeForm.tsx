"use client";

import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

interface IFormInput {
  title: string;
  ingredients: string;
  instructions: string;
}

export default function RecipeForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    const result = {
      id: uuidv4(),
      ...data
    };
    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ maxWidth: "500px", margin: "3rem auto" }}>
        <Typography variant="h5" sx={{
          textAlign: "center",
          marginBottom: "1rem"
        }}>
          Add Recipe
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("title", { required: true })}
              label="Title"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("servings", { required: true })}
              label="Servings"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("ingredients", { required: true })}
              label="Ingredients"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("instructions", { required: true })}
              label="Instructions"
              multiline
              rows={8}
              variant="standard"
              fullWidth
            />
          </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Recipe
            </Button>
        </Grid>
      </Box>
    </form>
  );
}