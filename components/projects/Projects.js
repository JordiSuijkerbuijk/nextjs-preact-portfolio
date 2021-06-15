import style from './projects.module.scss'; 

export default function Hero() {

  return (
    <div className={style.projects}>
      <div className={style.card}>
        <div className={style.title}>
          gitCommit
        </div>
        <div className={style.description}>
          gitCommit is a project that can find commits done on a specifik date
        </div>
        <div className={style.backgroundColor} />
      </div>
      <div className={style.card}>
        <div className={style.title}>
          gitCommit
        </div>
        <div className={style.description}>
          gitCommit is a project that can find commits done on a specifik date
        </div>
        <div className={style.backgroundColor} />
      </div>
    </div>
  );
}