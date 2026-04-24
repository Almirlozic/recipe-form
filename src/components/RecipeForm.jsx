"use client";

const RecipeForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-xl space-y-4">
        <h1 className="text-2xl font-semibold">Create Recipe</h1>
        <input className="w-full border px-3 py-2" placeholder="Title" />
        <textarea className="w-full border px-3 py-2" placeholder="Instructions" />
        <div className="flex gap-2">
          <input className="w-full border px-3 py-2" placeholder="Ingredient" />
          <button type="button" className="border px-4">
            Add
          </button>
        </div>
        <ul className="list-disc pl-5">
          <li>Tomato</li>
          <li>Cheese</li>
        </ul>
        <button type="submit" className="border border-black py-2 w-full">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
