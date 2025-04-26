import Menu_Footer from "./menu_footer";
import Menu_Header from "./menu_header";
import style from "./style.module.css";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Menu_Header />
      <div>{children}</div>
      <Menu_Footer />
    </div>
  );
}
