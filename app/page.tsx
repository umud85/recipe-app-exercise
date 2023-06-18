import HydratedRecipeList from '@/HydratedRecipeList';

export default function Home() {
  return (
    <main>
      <h1 className="text-center mt-2 text-2xl font-bold">Recipe App</h1>
      <HydratedRecipeList />
    </main>
  )
}
