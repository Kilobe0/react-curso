import style from "./ListaTarefasItem.module.css";
import { Botao, TIPO_BOTAO } from "../../Botao";
import { CampoTexto } from "../../CampoTexto";
import { useAppContext } from "../../../hooks";
import { useState } from "react";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { removerTarefa, editarTarefa } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [novoNome, setNovoNome] = useState(nome);

  const duploClique = () => {
    setIsEditing(true);
  };

  const salvarEdicao = () => {
    editarTarefa(id, novoNome);
    setIsEditing(false);
  };

  const manipularEdicao = (event) => {
    setNovoNome(event.target.value);
  };

  return (
    <li className={style.ListaTarefasItem} onDoubleClick={duploClique}>
      {isEditing ? (
        <CampoTexto
          value={novoNome}
          onChange={manipularEdicao}
          onBlur={salvarEdicao}
          autoFocus
        />
      ) : (
        <span>{nome}</span>
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
