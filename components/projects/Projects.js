import Link from 'next/link'

import style from './projects.module.scss'; 

export default function Hero() {

  return (
    <div className={style.projects}>
      <a href="https://github.com/JordiSuijkerbuijk/Create_React_App_Music_Player/tree/master/music_player" target='blank' className={style.card}>
        <div className={style.title}>
          React_App_Music_Player
        </div>
        <div className={style.description}>
          A music player build using Create React App.
        </div>
        <div className={style.backgroundColor} />
      </a>
      <a href="https://github.com/JordiSuijkerbuijk/gitCommit" target='blank' className={style.card}>
        <div className={style.title}>
          gitCommit
        </div>
        <div className={style.description}>
          gitCommit is a project that can find commits done on a specifik date.
        </div>
        <div className={style.backgroundColor} />
      </a>
      <a href="https://github.com/JordiSuijkerbuijk/twitter_scraper" target='blank' className={style.card}>
        <div className={style.title}>
          twitter_scraper
        </div>
        <div className={style.description}>
          Python scraper that scrapes twitter users from twitter that use a subset of words.
        </div>
        <div className={style.backgroundColor} />
      </a>
    </div>
  );
}