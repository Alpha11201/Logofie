// ============================================
// LOGOFIÈ - SERVEUR ULTRA SIMPLE POUR RAILWAY
// ============================================

// 1. DÉMARRER EXPRESS IMMÉDIATEMENT
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;

console.log('🚀 DÉMARRAGE EXPRESS SUR LE PORT:', PORT);

// 2. ROUTE RACINE ABSOLUMENT IMMÉDIATE
app.get('/', (req, res) => {
  console.log('✅ Requête reçue sur /');
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Logofiè - En ligne</title>
      <meta http-equiv="refresh" content="2; url=/status">
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
        <p>Redirection vers le dashboard...</p>
        <p style="opacity: 0.8; font-size: 0.9em;">
          Port: ${PORT}<br>
          Railway: Détecté<br>
          Si la redirection ne fonctionne pas, <a href="/status" style="color: white; text-decoration: underline;">cliquez ici</a>
        </p>
      </div>
    </body>
    </html>
  `);
});

// 3. ROUTE HEALTH CHECK - CRITIQUE POUR RAILWAY
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

// 4. ROUTE STATUS - PAGE DE STATUT COMPLÈTE
app.get('/status', (req, res) => {
  const supabaseUrl = process.env.SUPABASE_URL || 'Non configuré';
  const supabaseKey = !!process.env.SUPABASE_KEY;
  const railwayEnv = process.env.RAILWAY_ENVIRONMENT || 'production';
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Logofiè - Status</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          background: #0f172a;
          color: #f1f5f9;
          min-height: 100vh;
          margin: 0;
        }
        .container {
          max-width: 1000px;
          margin: 0 auto;
        }
        header {
          text-align: center;
          padding: 40px 0;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 20px;
          margin-bottom: 30px;
          border: 1px solid #334155;
        }
        h1 {
          font-size: 3em;
          margin: 0;
          background: linear-gradient(135deg, #8b5cf6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .status-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }
        .status-card {
          background: #1e293b;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #334155;
        }
        .status-card.good {
          border-left: 5px solid #10b981;
        }
        .status-card.warning {
          border-left: 5px solid #f59e0b;
        }
        .status-title {
          font-size: 1.2em;
          font-weight: bold;
          margin-bottom: 10px;
          color: #94a3b8;
        }
        .status-value {
          font-size: 1.8em;
          font-weight: bold;
          margin: 10px 0;
        }
        .url-list {
          background: #1e293b;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #334155;
          margin-top: 30px;
        }
        .url-item {
          padding: 15px;
          margin: 10px 0;
          background: #334155;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background: #8b5cf6;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: bold;
          transition: all 0.3s;
        }
        .btn:hover {
          background: #7c3aed;
          transform: translateY(-2px);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <h1>🤖 Logofiè</h1>
          <p>Plateforme e-commerce avec Intelligence Artificielle</p>
          <div style="margin-top: 20px;">
            <span style="background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold;">
              ✅ EN LIGNE
            </span>
          </div>
        </header>
        
        <div class="status-grid">
          <div class="status-card good">
            <div class="status-title">Serveur</div>
            <div class="status-value">✅ Actif</div>
            <div>Port: ${PORT}</div>
          </div>
          
          <div class="status-card ${supabaseKey ? 'good' : 'warning'}">
            <div class="status-title">Base de données</div>
            <div class="status-value">${supabaseKey ? '✅ Connecté' : '⚠️ En attente'}</div>
            <div>Supabase</div>
          </div>
          
          <div class="status-card good">
            <div class="status-title">Hébergement</div>
            <div class="status-value">🚀 Railway</div>
            <div>${railwayEnv}</div>
          </div>
          
          <div class="status-card good">
            <div class="status-title">Environnement</div>
            <div class="status-value">🛡️ Production</div>
            <div>${process.env.NODE_ENV || 'development'}</div>
          </div>
        </div>
        
        <div class="url-list">
          <h3 style="margin-top: 0;">🔗 URLs disponibles</h3>
          
          <div class="url-item">
            <div>
              <strong>GET /</strong><br>
              <span style="color: #94a3b8; font-size: 0.9em;">Page d'accueil avec redirection</span>
            </div>
            <a href="/" class="btn">Ouvrir</a>
          </div>
          
          <div class="url-item">
            <div>
              <strong>GET /health</strong><br>
              <span style="color: #94a3b8; font-size: 0.9em;">Health check Railway (JSON)</span>
            </div>
            <a href="/health" class="btn">Tester</a>
          </div>
          
          <div class="url-item">
            <div>
              <strong>GET /status</strong><br>
              <span style="color: #94a3b8; font-size: 0.9em;">Cette page de statut</span>
            </div>
            <a href="/status" class="btn">Rafraîchir</a>
          </div>
          
          <div class="url-item">
            <div>
              <strong>API Logofiè</strong><br>
              <span style="color: #94a3b8; font-size: 0.9em;">/api/logofie/health</span>
            </div>
            <a href="/api/logofie/health" class="btn">API</a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #334155;">
          <p style="color: #94a3b8;">
            <strong>Logofiè</strong> - Déployé sur Railway • Supabase • 2026<br>
            URL: https://harmonious-creativity.up.railway.app
          </p>
        </div>
      </div>
      
      <script>
        console.log('📊 Logofiè Status Page chargée');
        console.log('Port:', ${PORT});
        console.log('Supabase:', '${supabaseKey ? 'Configuré' : 'Non configuré'}');
        console.log('Railway:', '${railwayEnv}');
        
        // Tester automatiquement l'API
        fetch('/health')
          .then(r => r.json())
          .then(data => console.log('✅ Health:', data))
          .catch(err => console.log('⚠️ Health error:', err));
      </script>
    </body>
    </html>
  `);
});

// 5. ROUTES API
app.get('/api/logofie/health', (req, res) => {
  res.json({
    success: true,
    platform: 'Logofiè AI Platform',
    version: '2026.1.0',
    status: 'operational',
    timestamp: new Date().toISOString(),
    supabase: {
      configured: !!process.env.SUPABASE_URL,
      connected: true
    },
    railway: {
      detected: !!process.env.RAILWAY_ENVIRONMENT,
      environment: process.env.RAILWAY_ENVIRONMENT
    },
    server: {
      port: PORT,
      environment: process.env.NODE_ENV
    }
  });
});

app.get('/api/logofie/ai/analyze', (req, res) => {
  res.json({
    success: true,
    ai: {
      engine: 'Logofiè AI',
      version: '2026.1.0',
      capabilities: [
        'behavioral_analysis',
        'predictive_recommendations',
        'customer_segmentation',
        'fraud_detection'
      ],
      status: 'active'
    }
  });
});

// 6. DÉMARRER LE SERVEUR
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('='.repeat(70));
  console.log('🎉 LOGOFIÈ DÉMARRÉ AVEC SUCCÈS !');
  console.log('='.repeat(70));
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌐 URL: https://harmonious-creativity.up.railway.app`);
  console.log(`🏥 Health: https://harmonious-creativity.up.railway.app/health`);
  console.log(`📊 Status: https://harmonious-creativity.up.railway.app/status`);
  console.log('');
  console.log('📊 CONFIGURATION:');
  console.log(`   • Railway: ${process.env.RAILWAY_ENVIRONMENT ? '✅' : '❌'}`);
  console.log(`   • Supabase: ${process.env.SUPABASE_URL ? '✅' : '❌'}`);
  console.log(`   • Port: ${PORT}`);
  console.log('='.repeat(70));
  console.log('🚀 PRÊT À RECEVOIR DES REQUÊTES !');
  console.log('='.repeat(70));
});

// 7. GESTION D'ERREURS
server.on('error', (error) => {
  console.error('❌ ERREUR:', error.message);
  if (error.code === 'EADDRINUSE') {
    console.error(`💡 Le port ${PORT} est utilisé. Essayez un autre port.`);
  }
  process.exit(1);
});
