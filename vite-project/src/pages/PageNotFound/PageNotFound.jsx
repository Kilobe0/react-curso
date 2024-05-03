import style from "./PageNotFound.module.css";

const PageNotFound = () => {
    return (
        <div className={style.PageNotFound}>
            <h1>404</h1>
            <h2>Página não encontrada.</h2>
        </div>
    )
};

export { PageNotFound };