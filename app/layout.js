import "./globals.css";

export const metadata = {
  title: "Chelsea Pejic | Actor",
  description:
    "Official website of Chelsea Pejic, a Chicago-based actor working in film, television, theatre, and commercial projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <a className="logo" href="/">
            CHELSEA PEJIC
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#headshots">Headshots</a>
            <a href="#resume">Résumé</a>
            <a href="#media">Media</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
