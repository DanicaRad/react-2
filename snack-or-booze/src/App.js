import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import NewItemForm from "./NewItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacksAndDrinks() {
      let snacks = await SnackOrBoozeApi.getItems("snacks");
      let drinks = await SnackOrBoozeApi.getItems("drinks");
      setDrinks(drinks)
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacksAndDrinks();
  }, []);

  function handleAdd(newItemObj, itemType) {
    if( itemType === "drinks") {
      setDrinks(drinks => ([...drinks, {id: newItemObj.name, ...newItemObj}]));
    };
    setSnacks(snacks => ([...snacks, {id: newItemObj.name, ...newItemObj}]));
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} itemType="snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} itemType="drinks" />
            </Route>
            <Route path="/snacks/new">
              <NewItemForm addItem={handleAdd} itemType="snacks"/>
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/new">
              <NewItemForm addItem={handleAdd} itemType="drinks"/>
            </Route>
            <Route path="/drinks/:id">
              <MenuItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add">
              <NewItemForm addItem={handleAdd} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
