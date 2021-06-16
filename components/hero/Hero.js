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
          duration: 275
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
      opacity: [
        {
          value: 0,
          duration: 250,
        },
        {
          value: 1,
          duration: 100
        }
      ],
      easing: 'linear',
      duration: 500
    });
  }, [])


  return (
    <div className={style.hero}>
      <div className={style.container}>
        <div className={clsx([style.revealContainer, 'revealContainer'])} />
        <div className={clsx([style.name, 'name', style.underline, style.default])}>Jordi Suijkerbuijk.</div>
      </div>
      <div className={clsx([style.description, style.underline, style.white])}> A frontend developer, just graduated in computer science </div>
    </div>
  );
}