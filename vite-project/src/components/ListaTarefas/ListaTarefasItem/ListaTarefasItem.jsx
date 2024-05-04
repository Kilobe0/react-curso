import style from "./ListaTarefasItem.module.css";
import { Botao, TIPO_BOTAO } from "../../Botao";
import { CampoTexto, Loading } from "../../../components";
import { useAppContext } from "../../../hooks";
import { useState } from "react";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { loadingEditar, loadingDeletar, removerTarefa, editarTarefa } =
    useAppContext();
  const [estaEditando, setEstaEditando] = useState(false);

  const handleBlur = (event) => {
    editarTarefa(id, event.currentTarget.value);
    setEstaEditando(false);
  };

  const loadingEstaEditando = loadingEditar == id;
  const loadingEstaDeletando = loadingDeletar == id;

  return (
    <li className={style.ListaTarefasItem}>
      {(loadingEstaEditando || estaEditando) && (
        <CampoTexto defaultValue={nome} onBlur={handleBlur} autoFocus />
      )}

      {!loadingEstaEditando && !estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}

      {loadingEstaEditando && <Loading />}

      <Botao
        texto={loadingEstaDeletando ? <Loading /> : "-"}
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      ></Botao>
    </li>
  );
};

export { ListaTarefasItem };
