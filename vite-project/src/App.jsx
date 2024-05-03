import { Cabecalho, Conteudo, Rodape } from "./components"

import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana"/>
      <Conteudo>
        <h1>Título</h1>
        <p>Texto texto texto</p>
      </Conteudo>
      <Rodape user="Matheus"/>
    </>
  );
};

export { App };
