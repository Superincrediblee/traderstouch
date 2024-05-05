import Navbar from '@/component/navbar';
import './globals.css';
import Appbar from '@/component/appbar';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '@/component/footer';
export const metadata = {
  title: 'Traders Touch Contactors',
  description:
    'Traders Touch Contractors - Your Partner in Renovation and Construction Projects. Specializing in Quality Craftsmanship and Reliable Service',
  icons: {
    icon: [`favicon.ico`],
    apple: [`apple-touch-icon.png`],
    shortcut: [`apple-touch-icon.png`],
  },
  manifest: `/site.webmanifest`,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Appbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
