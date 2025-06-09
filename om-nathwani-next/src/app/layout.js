import './globals.css';
import Navbar from '../components/Navbar';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
  title: 'Om Nathwani - Portfolio',
  description: 'Personal portfolio showcasing my projects and experience in AI, ML, and software development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen antialiased">
        <Navbar />
        <main className="pt-16">
          <ClientLayout>
            {children}
          </ClientLayout>
        </main>
      </body>
    </html>
  );
}
