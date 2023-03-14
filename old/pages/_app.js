import '../global-styles/main.scss';

import { } from 'next/font/google';

const inter = Inter({subets: ['']})

export default function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}