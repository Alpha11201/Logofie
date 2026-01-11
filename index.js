// ============================================
// LOGOFIÈ - SOLUTION ULTIME POUR RAILWAY
// ============================================

// 1. IMPORTATIONS IMMÉDIATES
const express = require("express");
const app = express();

// 2. CONFIGURATION PORT - TRÈS IMPORTANT
const PORT = process.env.PORT || 5002;

console.log(`🚀 DÉMARRAGE IMMÉDIAT SUR LE PORT: ${PORT}`);

// 3. ROUTE RACINE ABSOLUMENT IMMÉDIATE - POUR RAILWAY
app.get("/", (req, res) => {
  console.log("✅ Requête reçue sur / - Réponse immédiate");
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Logofiè - En ligne</title>
      <meta http-equiv="refresh" content="0; url=/app">
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px;
        }
        h1 { font-size: 3em; margin-bottom: 20px; }
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid white;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 20px auto;
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
        <div class="spinner"></div>
        <p>Redirection vers l'application...</p>
        <p style="font-size: 0.9em; opacity: 0.8;">Si la redirection ne fonctionne pas, <a href="/app" style="color: white; text-decoration: underline;">cliquez ici</a></p>
      </div>
    </body>
    </html>
  `);
});

// 4. DÉMARRAGE DU SERVEUR IMMÉDIATEMENT
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
  console.log(`🌐 Accessible à: http://0.0.0.0:${PORT}`);
  
  // Ensuite, charger le reste de l'application
  setTimeout(() => {
    initializeFullApplication();
  }, 100);
});

// 5. HEALTH CHECK IMMÉDIAT POUR RAILWAY
app.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    message: "Logofiè est en ligne",
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// 6. FONCTION POUR INITIALISER LE RESTE DE L'APPLICATION
function initializeFullApplication() {
  console.log("🔄 Initialisation de l'application complète...");
  
  // Charger les autres dépendances
  const { createClient } = require("@supabase/supabase-js");
  require("dotenv").config();
  
  // Configuration Supabase
  const supabaseUrl = process.env.SUPABASE_URL || "https://urxjwxfcpdvkxihmrgyr.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_g8st5Gkuf7goBrl9ozqmRQ_G23Brr5u";
  
  console.log("🔗 Supabase URL:", supabaseUrl);
  console.log("🔑 Clé présente:", !!supabaseKey);
  
  let supabase;
  try {
    supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    });
    console.log("✅ Supabase connecté avec succès");
  } catch (error) {
    console.error("❌ Erreur Supabase:", error.message);
  }
  
  // Middleware
  app.use(require("cors")());
  app.use(express.json());
  
  // ============================================
  // ROUTE DE L'APPLICATION COMPLÈTE
  // ============================================
  
  app.get("/app", (req, res) => {
    const isSupabaseConnected = supabase ? '✅' : '❌';
    const baseUrl = `https://harmonious-creativity.up.railway.app`;
    
    res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Logofiè - Plateforme IA E-commerce</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
          margin: 0;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-top: 50px;
        }
        h1 { 
          font-size: 3.5em; 
          margin-bottom: 20px;
          background: linear-gradient(135deg, #8B5CF6, #10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .status {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: bold;
          margin: 10px;
        }
        .status-success { background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.5); }
        .status-warning { background: rgba(245, 158, 11, 0.2); border: 1px solid rgba(245, 158, 11, 0.5); }
        .metric-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 40px 0;
        }
        .metric {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 10px;
        }
        .metric-value {
          font-size: 2.5em;
          font-weight: bold;
          margin: 10px 0;
        }
        .btn {
          display: inline-block;
          padding: 15px 30px;
          background: white;
          color: #764ba2;
          text-decoration: none;
          border-radius: 10px;
          font-weight: bold;
          margin: 10px;
          transition: transform 0.3s;
        }
        .btn:hover {
          transform: translateY(-3px);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🤖 Logofiè</h1>
        <p style="font-size: 1.2em; opacity: 0.9;">Plateforme e-commerce avec Intelligence Artificielle</p>
        
        <div style="margin: 30px 0;">
          <div class="status status-success">✅ EN LIGNE</div>
          <div class="status ${isSupabaseConnected === '✅' ? 'status-success' : 'status-warning'}">
            🗄️ Supabase: ${isSupabaseConnected}
          </div>
          <div class="status status-success">🚀 Railway</div>
        </div>
        
        <div class="metric-grid">
          <div class="metric">
            <div>Port</div>
            <div class="metric-value">${PORT}</div>
            <div>Actif</div>
          </div>
          <div class="metric">
            <div>Version</div>
            <div class="metric-value">2026.1</div>
            <div>Logofiè IA</div>
          </div>
          <div class="metric">
            <div>Statut</div>
            <div class="metric-value">✅</div>
            <div>Opérationnel</div>
          </div>
          <div class="metric">
            <div>Environnement</div>
            <div class="metric-value">🚀</div>
            <div>Production</div>
          </div>
        </div>
        
        <div style="margin-top: 40px;">
          <h3>🔗 Accès rapide</h3>
          <div>
            <a href="${baseUrl}/health" class="btn" target="_blank">
              🏥 Health Check
            </a>
            <a href="${baseUrl}/api/logofie/health" class="btn" target="_blank">
              🔗 API Logofiè
            </a>
            <a href="https://github.com/Alpha11201/logofie" class="btn" target="_blank" style="background: #333; color: white;">
              💻 Code source
            </a>
          </div>
        </div>
        
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.2);">
          <p style="opacity: 0.8;">
            <strong>URL:</strong> ${baseUrl}<br>
            <strong>Déployé sur:</strong> Railway<br>
            <strong>Base de données:</strong> Supabase (Fenigama-dw)<br>
            <strong>Statut:</strong> ${isSupabaseConnected === '✅' ? 'Connecté' : 'En attente'}
          </p>
        </div>
      </div>
      
      <script>
        console.log('🎉 Logofiè chargé avec succès!');
        console.log('Port:', ${PORT});
        console.log('Supabase:', '${isSupabaseConnected}');
        
        // Tester l'API automatiquement
        setTimeout(() => {
          fetch('${baseUrl}/health')
            .then(response => response.json())
            .then(data => {
              console.log('✅ Health Check:', data);
            })
            .catch(error => {
              console.log('⚠️  Health Check erreur:', error.message);
            });
        }, 1000);
      </script>
    </body>
    </html>
    `);
  });
  
  // ============================================
  // API ENDPOINTS
  // ============================================
  
  app.get("/api/logofie/health", (req, res) => {
    res.json({
      success: true,
      platform: "Logofiè AI Commerce Platform",
      version: "2026.1.0",
      status: "operational",
      timestamp: new Date().toISOString(),
      supabase: supabase ? "connected" : "not_configured",
      railway: process.env.RAILWAY_ENVIRONMENT ? "detected" : "not_detected",
      endpoints: {
        home: "/",
        app: "/app",
        health: "/health",
        api_health: "/api/logofie/health"
      }
    });
  });
  
  app.get("/api/logofie/ai/analyze", (req, res) => {
    res.json({
      success: true,
      ai: {
        platform: "Logofiè AI Engine",
        version: "2026.1.0",
        capabilities: [
          "behavioral_analysis",
          "predictive_recommendations",
          "customer_segmentation",
          "fraud_detection"
        ],
        status: "active",
        timestamp: new Date().toISOString()
      }
    });
  });
  
  console.log("=".repeat(70));
  console.log("🎉 LOGOFIÈ COMPLÈTEMENT INITIALISÉ !");
  console.log("=".repeat(70));
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌐 Interface: https://harmonious-creativity.up.railway.app/app`);
  console.log(`🔗 API: https://harmonious-creativity.up.railway.app/api/logofie/health`);
  console.log(`🏥 Health: https://harmonious-creativity.up.railway.app/health`);
  console.log("");
  console.log("📊 CONFIGURATION:");
  console.log(`   • Railway: ${process.env.RAILWAY_ENVIRONMENT ? '✅' : '❌'}`);
  console.log(`   • Supabase: ${supabase ? '✅' : '❌'}`);
  console.log(`   • Port: ${PORT}`);
  console.log("=".repeat(70));
}

// 7. GESTION D'ERREURS ROBUSTE
server.on('error', (error) => {
  console.error("❌ ERREUR DE DÉMARRAGE:", error.message);
  console.error("Code:", error.code);
  
  if (error.code === 'EADDRINUSE') {
    console.error(`💡 Solution: Le port ${PORT} est utilisé.`);
    console.error("Dans Railway Variables, essayez PORT=3000 ou PORT=8080");
  }
  
  process.exit(1);
});

// 8. CAPTURE DES SIGNALS
process.on('SIGTERM', () => {
  console.log('📴 Arrêt gracieux demandé...');
  server.close(() => {
    console.log('✅ Serveur arrêté');
    process.exit(0);
  });
});
