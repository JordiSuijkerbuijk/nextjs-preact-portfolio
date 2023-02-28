import { useEffect } from 'preact/hooks';

export default function Hero() {
  useEffect(() => {
    // anime({
    //   targets: '.revealContainer',
    //   scaleX: [
    //     {
    //       value: 1,
    //       duration: 275,
    //     },
    //     {
    //       value: 0,
    //       duration: 250,
    //     },
    //   ],
    //   transformOrigin: [
    //     {
    //       value: '0% 50%',
    //       duration: 250,
    //     },
    //     {
    //       value: '100% 100%',
    //       duration: 0,
    //     },
    //   ],
    //   easing: 'linear',
    // });
    // anime({
    //   targets: '.name',
    //   opacity: [
    //     {
    //       value: 0,
    //       duration: 250,
    //     },
    //     {
    //       value: 1,
    //       duration: 100,
    //     },
    //   ],
    //   easing: 'linear',
    //   duration: 500,
    // });
  }, []);

  return (
    <div className=''>
      <div className=''>
        <div className='' />
        <div className=''>Jordi Suijkerbuijk.</div>
      </div>
      <div className=''>A frontend developer, just graduated in computer science </div>
    </div>
  );
}
