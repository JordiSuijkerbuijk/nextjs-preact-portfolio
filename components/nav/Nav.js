import style from './nav.module.scss'; 

export default function Nav() {
  const items = ['Projects', 'About'];

  return (
    <div className={style.nav}>
      <div className={style.name}>Jordi Suijkerbuijk</div>
      <div className={style.container}>
        <div className={style.dash} />
        {items.map(item => (
          <div className={style.item}>{item}</div>
        ))}
      </div>
    </div>
  );
}