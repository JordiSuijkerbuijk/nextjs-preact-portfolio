import { Nav } from '@/components/nav/Nav';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
