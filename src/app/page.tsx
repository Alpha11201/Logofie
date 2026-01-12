export default function HomePage() {
  return (
    <div>
      <h2>Bienvenue sur la nouvelle architecture</h2>
      <p>Next.js 16 + React 18 + TypeScript</p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Testez les fonctionnalités :</h3>
        <ul>
          <li><a href="/">🏠 Page d'accueil</a></li>
          <li><a href="/api/analytics/web-vitals">📊 API Web Vitals</a></li>
          <li><a href="/dashboard/performance"> Dashboard Performance</a></li>
        </ul>
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Stack technique 2026 :</h3>
        <ul>
          <li>Next.js 16 avec App Router</li>
          <li>TypeScript 5+</li>
          <li>Tailwind CSS v4</li>
          <li>TanStack Query v5</li>
          <li>Zustand + Jotai</li>
          <li>Meilisearch</li>
        </ul>
      </div>
    </div>
  )
}
