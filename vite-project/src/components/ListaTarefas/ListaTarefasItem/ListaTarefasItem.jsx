import style from "./ListaTarefasItem.module.css";
import { Botao, TIPO_BOTAO } from "../../Botao";
import { useAppContext } from "../../../hooks";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { removerTarefa } = useAppContext();

  return (
    <li className={style.ListaTarefasItem}>
      {nome}
      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      ></Botao>
    </li>
  );
};

export { ListaTarefasItem };
