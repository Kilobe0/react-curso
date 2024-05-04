import style from "./ListaTarefasItem.module.css";
import { Botao, TIPO_BOTAO } from "../../Botao";
import { CampoTexto } from "../../../components";
import { useAppContext } from "../../../hooks";
import { useState } from "react";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { removerTarefa, editarTarefa } = useAppContext();
  const [estaEditando, setEstaEditando] = useState(false);

  const handleBlur = (event) => {
    editarTarefa(id, event.currentTarget.value);
    setEstaEditando(false);
  };

  return (
    <li className={style.ListaTarefasItem}>
      {estaEditando ? (
        <CampoTexto defaultValue={nome} onBlur={handleBlur} autoFocus />
      ) : (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}
      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      ></Botao>
    </li>
  );
};

export { ListaTarefasItem };
