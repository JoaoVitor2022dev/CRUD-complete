// import use state
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Card from './components/Card';

// import de css
import './App.css';

function App() {
  const [values, setValues] = useState(); 
  const [listGames, setListGames] = useState(); 

  console.log(listGames);


  // function sobre valores recebidos dos inputs... 
     const handleChangeValues = (value) => {
        setValues( (prevValue) => ({
          ...prevValue, [value.target.name] : value.target.value, 
        }));
     }; 

    // valores enviados para o back and... 
     const handleClickButton = () => {
       const port = 3002;  
         axios.post(`http://localhost:${port}/resgister`, { 
          name: values.name, 
          cost: values.cost,
          category: values.category, 
         }).then( ( response ) => {
              console.log(response);
         })
     }; 

     // receber os dados do banco de dados... 
     useEffect(() =>{
      axios.get("http://localhost:3002/getCards").then( (response) => { 
        setListGames(response.data);
      })
     }, []); 

  return (
    <div className="app--container">
      <div className="register--container">
           <h1 className="register--title">Store Games</h1>
             <input type="text"
              name="name"
              placeholder="Nome"
              className="register--input"
              onChange={handleChangeValues}
            />
              <input type="text"
              name="cost"
              placeholder="Preço"
              className="register--input"
              onChange={handleChangeValues}
            />
              <input type="text"
              name="category"
              placeholder="Categoria"
              className="register--input"
              onChange={handleChangeValues}
            />
            <button className="register--button" onClick={ () => handleClickButton()}>Cadastrar</button>
      </div>
      { typeof listGames !== "undefined" &&
           listGames.map((value) => {
            return (
            <Card 
            key={value.id_games}
            listCard={listGames} 
            setListGames={setListGames}
            id={value.id_games}
            name={value.name}
            cost={value.cost}
            category={value.category}
            ></Card>)
      })}
    </div>
  );
}

export default App;
