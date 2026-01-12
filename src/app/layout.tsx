export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: '20px', fontFamily: 'Arial' }}>
        <header>
          <h1>Logofiè Marketplace 2026</h1>
        </header>
        <main>
          {children}
        </main>
        <footer style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
          <p>Architecture Next.js 15+ moderne</p>
        </footer>
      </body>
    </html>
  )
}
