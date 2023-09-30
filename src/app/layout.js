export const metadata = {
  title: 'Stating Page',
  description: 'Powered by Laravel Backend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
