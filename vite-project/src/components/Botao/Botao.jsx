import { TIPO_BOTAO } from "./constants";

import style from "./Botao.module.css";

const Botao = (props) => {
  const { texto, tipo = TIPO_BOTAO.PRIMARIO, icon, ...outrasProps } = props;

  return (
    <button className={style.Botao} tipo={tipo} {...outrasProps}>
      {icon ? <img src={icon} alt="Icon" className={style.IconeNoBotao} /> : texto}
    </button>
  );
};

export { Botao };
