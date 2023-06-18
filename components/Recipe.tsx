"use client";

import * as React from 'react';
import { useRecipeQuery } from '@/hooks/useRecipeQuery';


export default function Recipe({ id }: { id: string; }) {
 
  const { data: recipe, isLoading, isError } = useRecipeQuery(id);

  if (isLoading) {
    <h2>Loading...</h2>
  }
  if (isError) {
    <h2>Error...</h2>
  }

  const ingredients = recipe?.ingredients.split('|');

  return (
    <>
      <h2 className='text-2xl font-bold my-8'>{recipe?.title}</h2>
      <p>Ingredients for { recipe?.servings }</p>
      <ul>
        {ingredients?.map((ingredient: string, index: number) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>
      <p>Instructions</p>
      <p>{recipe?.instructions}</p>
    </>
  );
}