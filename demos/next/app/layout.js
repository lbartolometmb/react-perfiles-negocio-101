import "./estilos.css";

export const metadata = {
  title: "Red de transporte — Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
