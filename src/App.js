import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' //External CSS
import Appbar from  './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Cards from './components/Cards';
import './cards.css'

function App() {
  return (
    <div>
      <Appbar/>

<h1 >Top NetFlix Movies for Free🔥</h1>

    <ul className="cards">
    <Cards name='Amazing Spider man' link="https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0317_1024x1024.jpeg?v=1571444288"/>
    <Cards name='Fast and furious' link="https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg"/>
    <Cards name='RRR' link ="https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"/>
    <Cards name='Pirates of the caribbean' link = "https://m.media-amazon.com/images/I/91fPdJwTMBL._SL1500_.jpg"/>
    <Cards name='The Shawshank Redemption' link = "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"/>
    <Cards name='Avatar' link="https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"/>
    <Cards name='Bahubali' link="https://m.media-amazon.com/images/M/MV5BODY0NTQ0MzctNmNlMi00MWUxLThmNTEtMGFhNjczYmVjYjcxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"/>

    </ul> 
    </div>
  );
}

export default App;
