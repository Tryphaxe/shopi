import Header from "@/components/Bar/Header";
import Footer from "@/components/Bar/Footer";
import "@/styles/globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Shopping à Babi",
  description: "Faites le show dans tout Babi",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="">
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
