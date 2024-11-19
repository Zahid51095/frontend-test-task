import './globals.scss';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Responsive Web Page',
  description: 'A fully responsive static web page.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
