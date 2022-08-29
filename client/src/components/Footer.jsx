import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <a href="https://github.com/Pedr0calvo">
        <img
          src="https://pngimg.com/uploads/github/github_PNG58.png"
          alt="notfound"
          className={style.img}
        ></img>
      </a>
      <div>🕹️ | Created by Pedro</div>
      <a href="https://www.linkedin.com/in/pedro-calvo/">
        <img
          src="http://pngimg.com/uploads/linkedIn/small/linkedIn_PNG16.png"
          alt="notfound"
          className={style.img}
        ></img>
      </a>
    </div>
  );
};
