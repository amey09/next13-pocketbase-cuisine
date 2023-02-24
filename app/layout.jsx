import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>
          <nav className="navbar">
            <Link href="/">Home</Link>
            <Link href="/menus">Menu</Link>
          </nav>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
