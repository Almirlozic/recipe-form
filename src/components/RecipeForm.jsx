"use client";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [error, setError] = useState("");
  const handleAddIngredient = () => {
    if (!ingredientInput.trim()) return;

    setIngredients((prev) => [...prev, ingredientInput]);
    setIngredientInput("");
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !instructions || ingredients.length === 0) {
      setError("Please fill out all fields before submitting");
      return;
    }
    setError("");

    const recipe = {
      title,
      instructions,
      ingredients,
    };

    console.log(recipe);
    setTitle("");
    setInstructions("");
    setIngredients([]);
    setIngredientInput("");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Create Recipe</h1>
        <p className="text-sm text-gray-500">Add a new recipe</p>
      </div>
      <form className="mt-10 flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          className="w-full py-2 px-2 border border-gray-400 focus:outline-gray-500/80"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Pizza"
        />
        <textarea
          className="w-full border border-gray-400 px-3 py-2 leading-relaxed focus:outline-gray-500/80"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions..."
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add ingredient"
            className="w-full border border-gray-400 px-3 py-2 focus:outline-gray-500/80"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddIngredient();
              }
            }}
          />
          <button
            type="button"
            onClick={handleAddIngredient}
            className="border border-gray-400 px-4"
          >
            ADD
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {ingredients.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm w-fit flex items-center"
            >
              {item}
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                className="ml-2 text-gray-500 hover:text-red-500"
              >
                <RiDeleteBinLine />
              </button>
            </span>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="border border-black py-2 hover:bg-black hover:text-white transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
