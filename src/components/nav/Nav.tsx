export const Nav = (): JSX.Element => {
  const items = ['Projects', 'About'];

  return (
    <nav className='flex justify-between w-full p-5 text-white'>
      <div className=''>Jordi Suijkerbuijk</div>
      <div className='flex justify-center gap-x-4'>
        {items.map((item, key) => (
          <div className='' key={key}>
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};
