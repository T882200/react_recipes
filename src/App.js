import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';



const App = () => {
  
  const APP_ID = "2c100604";
  const APP_KEY = "c2238fb86e0823363eedaf4bc9f9f4e5";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken");
  
  useEffect(() => {
    getRecipes();
  }, [query]);
 
  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  }
 
 const updateSearch = e => {
   setSearch(e.target.value);
 }

 const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
 }
 
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">search</button>
      </form>
      <div className={recipes}>

      </div>
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label} 
        image={recipe.recipe.image} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
