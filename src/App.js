import { BgStyle } from './AppStyles.js'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/NAV.jsx'

import { useState } from 'react'

function App () {
  const [characters, setCharacters] = useState([])

  function onSearch(id) {
    const urlBASE="https://be-a-rym.up.railway.app/api";
    const key="5c7b65ba57e1.21d29bcea914b4f4d504";

    fetch(`${urlBASE}/character/${id}/?key=${key}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find(char=>char.id===data.id)) {

             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose=(id)=>{
    setCharacters(characters.filter((char)=>char.id!==id));
  }

  return (
    <BgStyle className='App' style={{ padding: "25px" }}>
      <div style={{textAlign:"center"}}>
        <Nav onSearch= {onSearch}/>
      </div>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </BgStyle>
  )
};

export default App
