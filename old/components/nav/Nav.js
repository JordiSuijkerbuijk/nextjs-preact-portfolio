import clsx from 'clsx';

import style from './nav.module.scss'; 

export default function Nav() {
  const items = ['Projects', 'About'];

  return (
    <div className={style.nav}>
      <div className={clsx([style.name, style.underline])}>Jordi Suijkerbuijk</div>
      <div className={style.container}>
        <div className={style.dash} />
        {items.map(item => (
          <div className={clsx([style.item, style.underline])}>{item}</div>
        ))}
      </div>
    </div>
  );
}