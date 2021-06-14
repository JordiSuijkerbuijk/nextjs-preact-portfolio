import { useEffect } from 'react';

import anime from 'animejs';
import clsx from 'clsx';

import style from './hero.module.scss'; 

export default function Hero() {
  useEffect(() => {
    anime({
      targets: '.revealContainer',
      keyframes: [
        {width: '100%', left: 0},
        {width: '0', left: '100%'}
      ],
      duration: 500
    });

    anime({
      targets: '.name',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo'
    })
  }, [])


  return (
    <div className={style.hero}>
      <div className={style.container}>
        <div className={clsx([style.revealContainer, 'revealContainer'])} />
        <div className={clsx([style.name, 'name'])}>Jordi Suijkerbuijk</div>
      </div>
      <div className={style.description}> Hier moet nog tekst komen </div>

    </div>
  );
}