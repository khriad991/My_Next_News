
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
         <NextTopLoader color="#E60000" height={2} speed={200}/>
      </body>

    </html>
  );
}
