// ============================================
// LOGOFIÈ - SERVEUR PRINCIPAL POUR RAILWAY
// ============================================
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;

console.log('🚀 Démarrage Logofiè sur le port:', PORT);

// ============================================
// 1. ROUTE RACINE - RÉPONSE IMMÉDIATE POUR RAILWAY
// ============================================
app.get('/', (req, res) => {
  console.log('✅ Requête reçue sur /');
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Logofiè - Plateforme IA E-commerce</title>
      <meta http-equiv="refresh" content="0; url=/app">
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 100px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
          margin: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.1);
          padding: 50px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        h1 { 
          font-size: 3.5em; 
          margin-bottom: 20px;
          color: white;
        }
        .status {
          display: inline-block;
          padding: 15px 30px;
          background: rgba(16, 185, 129, 0.2);
          border: 2px solid rgba(16, 185, 129, 0.5);
          border-radius: 50px;
          font-weight: bold;
          font-size: 1.2em;
          margin: 20px 0;
        }
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid white;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
          margin: 30px auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🤖 Logofiè</h1>
        <div class="status">✅ APPLICATION EN LIGNE</div>
        <div class="spinner"></div>
        <p>Redirection vers l'application...</p>
        <p style="opacity: 0.8; font-size: 0.9em;">
          Port: ${PORT}<br>
          Si la redirection ne fonctionne pas, <a href="/app" style="color: white; text-decoration: underline;">cliquez ici</a>
        </p>
      </div>
    </body>
    </html>
  `);
});

// ============================================
// 2. HEALTH CHECK - CRITIQUE POUR RAILWAY
// ============================================
app.get('/health', (req, res) => {
  console.log('✅ Health check appelé');
  res.json({
    status: 'healthy',
    service: 'Logofiè',
    version: '2026.1.0',
    timestamp: new Date().toISOString(),
    port: PORT,
    environment: process.env.NODE_ENV || 'development'
  });
});

// ============================================
// 3. APPLICATION PRINCIPALE
// ============================================
app.get('/app', (req, res) => {
  const baseUrl = 'https://harmonious-creativity.up.railway.app';
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Logofiè - Dashboard</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: white;
          margin: 0;
          min-height: 100vh;
        }
        .header {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          padding: 40px 20px;
          text-align: center;
          border-bottom: 1px solid #334155;
        }
        .logo {
          font-size: 3.5em;
          font-weight: bold;
          background: linear-gradient(135deg, #8b5cf6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }
        .tagline {
          color: #94a3b8;
          font-size: 1.2em;
          margin-bottom: 30px;
        }
        .status-badge {
          display: inline-block;
          padding: 10px 20px;
          background: #10b981;
          color: white;
          border-radius: 20px;
          font-weight: bold;
          margin: 10px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 40px 0;
        }
        .metric-card {
          background: #1e293b;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #334155;
          text-align: center;
        }
        .metric-value {
          font-size: 2.5em;
          font-weight: bold;
          margin: 15px 0;
          color: #8b5cf6;
        }
        .btn {
          display: inline-block;
          padding: 15px 30px;
          background: #8b5cf6;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: bold;
          margin: 10px;
          transition: all 0.3s;
        }
        .btn:hover {
          background: #7c3aed;
          transform: translateY(-2px);
        }
        .url-list {
          background: #1e293b;
          padding: 30px;
          border-radius: 15px;
          border: 1px solid #334155;
          margin-top: 40px;
        }
        .url-item {
          background: #334155;
          padding: 15px;
          margin: 10px 0;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer {
          text-align: center;
          padding: 30px;
          color: #94a3b8;
          border-top: 1px solid #334155;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">🤖 Logofiè</div>
        <div class="tagline">Plateforme e-commerce avec Intelligence Artificielle</div>
        <div class="status-badge">✅ EN LIGNE - Port: ${PORT}</div>
      </div>
      
      <div class="container">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2em; margin-bottom: 10px;">🎉 FÉLICITATIONS !</h2>
          <p style="color: #94a3b8; font-size: 1.2em;">Votre plateforme Logofiè est maintenant en ligne sur Railway</p>
        </div>
        
        <div class="metrics">
          <div class="metric-card">
            <div>Statut Serveur</div>
            <div class="metric-value">✅</div>
            <div>Opérationnel</div>
          </div>
          
          <div class="metric-card">
            <div>Port</div>
            <div class="metric-value">${PORT}</div>
            <div>Actif</div>
          </div>
          
          <div class="metric-card">
            <div>Hébergement</div>
            <div class="metric-value">🚀</div>
            <div>Railway</div>
          </div>
          
          <div class="metric-card">
            <div>Version</div>
            <div class="metric-value">2026.1</div>
            <div>Logofiè IA</div>
          </div>
        </div>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="${baseUrl}/health" class="btn" target="_blank">🏥 Tester Health Check</a>
          <a href="${baseUrl}/api/logofie/health" class="btn" target="_blank">🔗 Tester l'API</a>
          <a href="https://github.com/Alpha11201/logofie" class="btn" target="_blank">💻 Code Source</a>
        </div>
        
        <div class="url-list">
          <h3>🔗 URLs disponibles</h3>
          
          <div class="url-item">
            <div>
              <strong>GET /</strong><br>
              <span style="color: #94a3b8;">Page d'accueil avec redirection</span>
            </div>
            <a href="/" class="btn" style="padding: 8px 16px; font-size: 0.9em;">Ouvrir</a>
          </div>
          
          <div class="url-item">
            <div>
              <strong>GET /health</strong><br>
              <span style="color: #94a3b8;">Health check Railway (JSON)</span>
            </div>
            <a href="/health" class="btn" style="padding: 8px 16px; font-size: 0.9em;">Tester</a>
          </div>
          
          <div class="url-item">
            <div>
              <strong>GET /app</strong><br>
              <span style="color: #94a3b8;">Cette page de dashboard</span>
            </div>
            <a href="/app" class="btn" style="padding: 8px 16px; font-size: 0.9em;">Rafraîchir</a>
          </div>
          
          <div class="url-item">
            <div>
              <strong>API Logofiè</strong><br>
              <span style="color: #94a3b8;">/api/logofie/health</span>
            </div>
            <a href="/api/logofie/health" class="btn" style="padding: 8px 16px; font-size: 0.9em;">API</a>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>Logofiè</strong> - Plateforme e-commerce avec IA</p>
        <p>Déployé sur Railway • Connecté à Supabase • 2026</p>
        <p>URL: ${baseUrl} • Port: ${PORT}</p>
      </div>
      
      <script>
        console.log('🎉 Logofiè Dashboard chargé avec succès!');
        console.log('URL:', '${baseUrl}');
        console.log('Port:', ${PORT});
        
        // Tester automatiquement la santé
        fetch('/health')
          .then(r => r.json())
          .then(data => {
            console.log('✅ Health check réussi:', data);
          })
          .catch(err => {
            console.log('⚠️ Health check erreur:', err);
          });
      </script>
    </body>
    </html>
  `);
});

// ============================================
// 4. API ENDPOINTS
// ============================================
app.get('/api/logofie/health', (req, res) => {
  res.json({
    success: true,
    platform: 'Logofiè AI Platform',
    version: '2026.1.0',
    status: 'operational',
    timestamp: new Date().toISOString(),
    server: {
      port: PORT,
      environment: process.env.NODE_ENV || 'development'
    },
    urls: {
      home: '/',
      app: '/app',
      health: '/health',
      api_health: '/api/logofie/health'
    }
  });
});

app.get('/api/logofie/ai/analyze', (req, res) => {
  res.json({
    success: true,
    ai: {
      engine: 'Logofiè AI',
      version: '2026.1.0',
      capabilities: ['behavioral_analysis', 'predictive_recommendations'],
      status: 'active'
    }
  });
});

// ============================================
// 5. DÉMARRAGE DU SERVEUR
// ============================================
app.listen(PORT, '0.0.0.0', () => {
  console.log('='.repeat(70));
  console.log('🎉 LOGOFIÈ DÉMARRÉ AVEC SUCCÈS !');
  console.log('='.repeat(70));
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌐 Accueil: https://harmonious-creativity.up.railway.app/`);
  console.log(`📱 App: https://harmonious-creativity.up.railway.app/app`);
  console.log(`🏥 Health: https://harmonious-creativity.up.railway.app/health`);
  console.log(`🔗 API: https://harmonious-creativity.up.railway.app/api/logofie/health`);
  console.log('');
  console.log('🚀 PRÊT À UTILISER !');
  console.log('='.repeat(70));
});
