export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">{children} </body>
    </html>
  );
}  