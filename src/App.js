import { useState, useEffect } from 'react';
import Header from './components/Header'
import Products from './components/Products'
import './App.css';




function App() {

  const [productArr, setProducts] = useState([])

  const [categoryState, setCategoryState] = useState("all categories")

  function filteredCategory(category) {
    setCategoryState(category)
  }


  function fetchProd() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchProd();
  }, []);

  
const groupBy = (xs, key) => xs.reduce((rv, x) => {
  (rv[x[key]] = true || []);
  return rv;
}, {});


const categories = Object.keys(groupBy(productArr, 'category'));



  
  

      return (
        <div className="App">

            <Header categories={categories} filteredCategory={filteredCategory}/>
             <Products productArr={productArr.filter(obj => (obj.category === categoryState) || (categoryState === "all categories"))} /> 
        </div>
      );
    }

export default App;
