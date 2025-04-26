export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div style={{ width: "1200px", height: "760px", backgroundColor: "white" }}>{children}</div>
    </div>
  );
}
