export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <header />
        {children} 
        <footer />
      </body>
    </html>
  );
}  