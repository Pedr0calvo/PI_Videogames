import style from "./Footer.module.css";
import linkeind from "./Icons/linkedin-square-logo-24.png";
import github from './Icons/github-logo-24.png'

export const Footer = () => {
  return (
    <div className={style.footer}>
      <a href="https://github.com/Pedr0calvo">
        <img
          src={github}
          alt="notfound"
          className={style.img}
        ></img>
      </a>
      <div>🕹️ | Created by Pedro Calvo</div>
      <a href="https://www.linkedin.com/in/pedro-calvo/">
        <img
          src={linkeind}
          alt="notfound"
          className={style.img}
        ></img>
      </a>
    </div>
  );
};
