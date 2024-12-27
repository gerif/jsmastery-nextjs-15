export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Layout of Dashboard</h1>
      {children}
    </div>
  );
}
