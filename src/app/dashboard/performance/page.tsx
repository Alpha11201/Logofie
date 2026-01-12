export default function PerformanceDashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1> Dashboard Performance 2026</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        marginTop: '30px' 
      }}>
        {/* Card LCP */}
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginTop: 0 }}>Largest Contentful Paint</h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>1.2s</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}> Bon</div>
          <p style={{ fontSize: '14px', color: '#666' }}>&lt;2.5s recommandé</p>
        </div>
        
        {/* Card FID */}
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginTop: 0 }}>First Input Delay</h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>85ms</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}> Bon</div>
          <p style={{ fontSize: '14px', color: '#666' }}>&lt;100ms recommandé</p>
        </div>
        
        {/* Card CLS */}
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginTop: 0 }}>Cumulative Layout Shift</h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>0.08</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}> Bon</div>
          <p style={{ fontSize: '14px', color: '#666' }}>&lt;0.1 recommandé</p>
        </div>
        
        {/* Card INP */}
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginTop: 0 }}>Interaction to Next Paint</h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>150ms</div>
          <div style={{ color: '#f59e0b', fontWeight: 'bold' }}>⚠️ Améliorable</div>
          <p style={{ fontSize: '14px', color: '#666' }}>&lt;200ms recommandé</p>
        </div>
      </div>
      
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
        <h2>Configuration requise</h2>
        <p>Pour des données réelles :</p>
        <ol>
          <li>Créez une base Vercel KV</li>
          <li>Ajoutez les variables d'environnement</li>
          <li>Redéployez l'application</li>
        </ol>
        <a 
          href="/api/analytics/web-vitals" 
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px'
          }}
        >
          Tester l'API
        </a>
      </div>
    </div>
  )
}
