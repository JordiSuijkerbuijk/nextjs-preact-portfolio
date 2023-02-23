export const Nav = (): JSX.Element => {
  const items = ['Projects', 'About'];

  return (
    <div className='w-full flex items-end p-5 text-white'>
      <div className=''>Jordi Suijkerbuijk</div>
      <div className=''>
        <div className='' />
        {items.map((item, key) => (
          <div className='' key={key}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
