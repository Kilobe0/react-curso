import { Routes, Route } from "react-router-dom";

import { Inicial, SobreNos, PageNotFound } from "./pages";
import { LayoutPadrao } from "./layouts";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export { Router };
