import { useEffect } from 'react';

import anime from 'animejs';
import clsx from 'clsx';

import style from './hero.module.scss'; 

export default function Hero() {
  useEffect(() => {
    anime({
      targets: '.revealContainer',
      scaleX: [
        {
          value: 1,
          duration: 250
        }, 
        {
          value: 0,
          duration: 250
        }
      ],
      transformOrigin: [
        {
          value: '0% 50%',
          duration: 250,
        },
        {
          value: '100% 100%',
          duration: 0
        }
      ],
      easing: 'linear',
    });

    anime({
      targets: '.name',
      keyframes: [
        {opacity: 1}
      ],
      easing: 'linear',
      duration: 500
    });
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