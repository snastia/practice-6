import { Route, Routes } from "react-router-dom";
import GreatsPage from "Pages/GreatsPage";
import CatsPage from "Pages/CatsPage";
import CatDetailPage from "Pages/CatDetailPage";
import DogDetailPage from "Pages/DogDetailPage";
import DogsPage from "Pages/DogsPage";
import Layout from "Pages/Layout";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
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
