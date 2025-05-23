import Menu_Footer from "./menu_footer";
import Menu_Header from "./menu_header";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Menu_Header />
      {children}
      <Menu_Footer />
    </div>
  );
}
