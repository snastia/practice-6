import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

// import DogDetailPage from "components/PageDetail/DogDetailPage";
// import DogsPage from "components/Pages/DogsPage";

const GreatsPage = lazy(() => import('./Pages/GreatsPage.jsx'));
const CatsPage = lazy(() => import('./Pages/CatsPage.jsx'));
const CatDetailPage = lazy(() => import('./PageDetail/CatDetailPage.jsx'))
const Layout = lazy(() => import('./Pages/Layout.jsx'))

export const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout/>}>

          <Route path="/" element={<GreatsPage/>}/>

          {/* <Route path="/dogs" element={<DogsPage/>}/>
          <Route path="/dogs/:dogsId" element={<DogDetailPage/>}>
              <Route path="breeds_for_what" element={<p>Для чого виведена порода</p>}/>
              <Route path="height_dog" element={<p>Вага собаки</p>}/> 
          </Route> */}

          <Route path="/cats" element={<CatsPage/>}/>
            <Route path="/cats/:catId" element={<CatDetailPage/>}>
                <Route path="description" element={<p>Опис котика</p>}/>
                <Route path="breeds_history" element={<p>Історія породи</p>}/>
            </Route>
        </Route>
      </Routes>
    </div>
  );
};
