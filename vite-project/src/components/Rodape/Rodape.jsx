import style from "./Rodape.module.css";

const Rodape = (props) => {
  const { criador } = props;
  const ano = new Date().getFullYear();

  return (
    <div className={style.Rodape}>
      <p>
        React Básico - {ano} - {criador}
      </p>
    </div>
  );
};

export { Rodape };
