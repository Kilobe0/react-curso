import style from "./Rodape.module.css";

const Rodape = (props) => {
  const { user } = props;
  const ano = new Date().getFullYear();

  return (
    <div className={style.Rodape}>
      <p>
        React Básico - {ano} - {user}
      </p>
    </div>
  );
};

export { Rodape };
