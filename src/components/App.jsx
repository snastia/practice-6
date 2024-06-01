import { Route, Routes } from "react-router-dom";
import GreatsPage from "components/Pages/GreatsPage";

import CatsPage from "components/Pages/CatsPage";
import CatDetailPage from "components/PageDetail/CatDetailPage";
import DogDetailPage from "components/PageDetail/DogDetailPage";

import PokemonPage from "components/Pages/PokemonPage";
import PokemonDetailPage from "components/PageDetail/PokemonDetailPage";

// import DropDMPage from "components/Pages/DropDMPage";
// import DropDDP from "./PageDetail/DropDDP";

import DogsPage from "components/Pages/DogsPage";
import Layout from "components/Pages/Layout";

import TestDetailPage from "./PageDetail/TestDetailPage";
import TestPage from "./Pages/TestPage";

export const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/tests" element={<TestPage/>}/>
          <Route path="/tests/:testId" element={<TestDetailPage/>}/>

          <Route path="/pokemon" element={<PokemonPage/>}/>
          <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage/>}/>
          
          {/* <Route path="/dropdownmenu" element={<DropDMPage/>}/>
          <Route path="/dropdownmenu/:dropdownmenuId" element={<DropDDP/>}/> */}

          <Route path="/" element={<GreatsPage/>}/>
          <Route path="/cats" element={<CatsPage/>}/>
          <Route path="/cats/:catId" element={<CatDetailPage/>}/>
          <Route path="/dogs" element={<DogsPage/>}/>
          <Route path="/dogs/:dogsId" element={<DogDetailPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};
