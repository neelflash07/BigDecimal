import Providers from '../components/Providers';
import './globals.css';

export const metadata = {
  title: 'Bluechip Insights - AI Stock Learning',
  description: 'Understand bluechip stocks simply and confidently.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
