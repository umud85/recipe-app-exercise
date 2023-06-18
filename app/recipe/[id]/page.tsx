import Recipe from "@/components/Recipe";

export default function ShowRecipe({ params }: { params: { id: string; }; }) {
  return (
    <section className="container max-w-lg">
      <Recipe id={params.id} />
    </section>
  );
}