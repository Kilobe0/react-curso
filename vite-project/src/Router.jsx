import { Routes, Route } from "react-router-dom";

import { Inicial, SobreNos } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/sobre-nos" element={<SobreNos />} />
    </Routes>
  );
};

export { Router };
