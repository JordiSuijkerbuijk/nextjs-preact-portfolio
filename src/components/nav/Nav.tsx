export const Nav = (): JSX.Element => {
  const items = ['Projects', 'About'];

  return (
    <nav className='flex items-end w-full p-5 text-white'>
      <div className=''>Jordi Suijkerbuijk</div>
      <div className=''>
        <div className='' />
        {items.map((item, key) => (
          <div className='' key={key}>
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};
