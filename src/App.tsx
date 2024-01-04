import { useState } from 'react';
import './App.css';

interface Ingredient {
  name: string;
  amount: string;
  groceryStoreArea: string;
}

const ingredients: Array<Ingredient> = [
  {
    name: 'Carrots',
    amount: '3',
    groceryStoreArea: 'Vegetables & fruit',
  },
  {
    name: 'Ice cream',
    amount: '1 bucket',
    groceryStoreArea: 'Frozen section',
  },
];

export default function App() {
  return (
    <>
      <h1>Carrot ice cream recipe</h1>
      <p>
        This is my favourite carrot ice cream recipe. Grate the carrots and sprinkle ontop of the ice cream. Enjoy!
      </p>
      <IngredientsList items={ingredients} />
    </>
  );
}

interface IngredienstListProps {
  items: Array<Ingredient>;
}

function IngredientsList(props: IngredienstListProps) {
  const [ingredientDetails, showIngredientDetails] = useState<Ingredient>();

  return (
    <>
      <ul>
        {props.items.map((item) => (
          <IngredientItem ingredient={item} showIngredientDetails={showIngredientDetails} />
        ))}
      </ul>
      <IngredientDetails
        ingredient={ingredientDetails}
        close={() => showIngredientDetails(undefined)} />
    </>
  );
}

interface IngredientItemProps {
  ingredient: Ingredient;
  showIngredientDetails: (ingredient: Ingredient) => void;
}

function IngredientItem(props: IngredientItemProps) {
  return (
    <>
      <li>
        <span>{`${props.ingredient.amount} ${props.ingredient.name}`}</span>
        <button
          className="infoButton"
          onClick={() => props.showIngredientDetails(props.ingredient)}>
          Info
        </button>
      </li>
    </>
  );
}

interface IngredientDetailsProps {
  ingredient?: Ingredient;
  close: () => void; // Sets ingredient to `undefined`
}

function IngredientDetails(props: IngredientDetailsProps) {
  if (props.ingredient === undefined) {
    return null;
  }

  return (
    <>
      <div className="overlay" />
      <div className="details">
        <button className="closeDetailsButton" onClick={props.close}>X</button>
        <div>Name: {props.ingredient.name}</div>
        <div>Amount: {props.ingredient.amount}</div>
        <div>Where: {props.ingredient.groceryStoreArea}</div>
      </div>
    </>
  );
}
