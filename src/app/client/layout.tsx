export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mobile-view">{children}</div>;
}
