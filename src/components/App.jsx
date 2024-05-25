import { Route, Router, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>hello</h1>}/>
      </Routes>
    </div>
  );
};
