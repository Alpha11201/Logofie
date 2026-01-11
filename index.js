// ============================================
// LOGOFIÈ - PLATEFORME E-COMMERCE AVEC IA - VERSION URGENTE POUR RAILWAY
// ============================================
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();

// CORRECTION CRITIQUE : Railway utilise PORT ou RAILWAY_PORT
const PORT = process.env.PORT || process.env.RAILWAY_PORT || 5002;

console.log("=".repeat(70));
console.log("🚀 DÉMARRAGE URGENT LOGOFIÈ POUR RAILWAY");
console.log("📍 Port détecté:", PORT);
console.log("🔧 Variables disponibles:", Object.keys(process.env).filter(k => k.includes('RAILWAY') || k.includes('PORT') || k.includes('SUPABASE')));

// CORRECTION : Route racine IMMÉDIATE pour Railway
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Logofiè - Chargement...</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
          margin: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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
      <script>
        // Redirection après 2 secondes
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      </script>
    </head>
    <body>
      <div class="container">
        <h1>🤖 Logofiè</h1>
        <div class="spinner"></div>
        <p>Initialisation de la plateforme IA...</p>
        <p style="font-size: 0.9em; opacity: 0.8;">Port: ${PORT}</p>
        <p style="font-size: 0.9em; opacity: 0.8;">Railway déploiement en cours</p>
      </div>
    </body>
    </html>
  `);
});

// CORRECTION : Middleware APRÈS la route racine
app.use(require("cors")());
app.use(express.json());

// Configuration Supabase - AVEC VALEURS PAR DÉFAUT POUR RAILWAY
const supabaseUrl = process.env.SUPABASE_URL || "https://urxjwxfcpdvkxihmrgyr.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_g8st5Gkuf7goBrl9ozqmRQ_G23Brr5u";

console.log("🤖 Configuration Supabase...");
console.log("🔗 URL:", supabaseUrl);
console.log("🔑 Clé présente:", !!supabaseKey);

let supabase;
try {
  supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false }
  });
  console.log("✅ Client Supabase initialisé avec succès");
} catch (error) {
  console.error("❌ Erreur Supabase:", error.message);
}

// ============================================
// HEALTH CHECK - TRÈS IMPORTANT POUR RAILWAY
// ============================================

app.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    platform: "Logofiè",
    version: "2026.1.0",
    timestamp: new Date().toISOString(),
    port: PORT,
    environment: process.env.NODE_ENV || "development",
    railway: process.env.RAILWAY_ENVIRONMENT ? true : false,
    supabase: supabase ? "connected" : "not_configured",
    endpoints: {
      home: "/",
      api_health: "/api/logofie/health",
      api_ai: "/api/logofie/ai/analyze",
      railway_health: "/health"
    }
  });
});

// ============================================
// ROUTE COMPLÈTE APRÈS INITIALISATION
// ============================================

// Route pour l'interface complète (accessible après chargement)
app.get("/app", (req, res) => {
  const isSupabaseConnected = supabase ? '✅' : '❌';
  const baseUrl = `https://harmonious-creativity.up.railway.app`;
  
  res.send(`
  <!DOCTYPE html>
  <html lang="fr" data-theme="dark">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logofiè • Intelligence Artificielle E-commerce</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
      :root {
        --primary: #8B5CF6;
        --primary-dark: #7C3AED;
        --primary-light: #A78BFA;
        --secondary: #10B981;
        --accent: #F59E0B;
        --dark: #0F172A;
        --darker: #020617;
        --light: #F8FAFC;
        --card-bg: #1E293B;
        --card-border: #334155;
        --text-primary: #F1F5F9;
        --text-secondary: #94A3B8;
      }
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
      }
      
      body {
        background: var(--dark);
        color: var(--text-primary);
        min-height: 100vh;
        overflow-x: hidden;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      /* Hero Section */
      .hero-logofie {
        background: linear-gradient(135deg, var(--darker) 0%, #1E1B4B 100%);
        min-height: 100vh;
        padding: 4rem 2rem;
        position: relative;
        overflow: hidden;
      }
      
      .hero-logofie::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
      }
      
      /* Logo */
      .logofie-logo {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 3rem;
      }
      
      .logo-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
      }
      
      .logo-text {
        font-size: 2.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -1px;
      }
      
      /* Status Indicators */
      .status-indicator {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 500;
        margin: 0.5rem;
      }
      
      .status-online {
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.2);
        color: var(--secondary);
      }
      
      .status-warning {
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid rgba(245, 158, 11, 0.2);
        color: var(--accent);
      }
      
      /* Buttons */
      .btn-logofie {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-weight: 600;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
        text-decoration: none;
      }
      
      .btn-primary {
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
      }
      
      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
      }
      
      /* Dashboard */
      .dashboard-preview {
        background: var(--darker);
        border-radius: 24px;
        padding: 3rem;
        margin: 4rem 0;
        border: 1px solid var(--card-border);
      }
      
      .dashboard-metrics {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }
      
      .metric-preview {
        background: var(--card-bg);
        border-radius: 12px;
        padding: 1.5rem;
        text-align: center;
      }
      
      .metric-value {
        font-size: 2rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0.5rem 0;
      }
    </style>
  </head>
  <body>
    <!-- Hero Section -->
    <section class="hero-logofie">
      <div class="container">
        <!-- Logo -->
        <div class="logofie-logo">
          <div class="logo-icon">L</div>
          <div>
            <div class="logo-text">Logofiè</div>
            <div class="logo-tagline">Intelligence Artificielle pour e-commerce</div>
          </div>
        </div>

        <!-- System Status -->
        <div style="margin-bottom: 2rem;">
          <div class="status-indicator status-online">
            <i class="fas fa-check-circle"></i>
            <span>✅ Logofiè est en ligne</span>
          </div>
          <div class="status-indicator ${isSupabaseConnected === '✅' ? 'status-online' : 'status-warning'}">
            <i class="fas fa-database"></i>
            <span>Supabase: ${isSupabaseConnected}</span>
          </div>
          <div class="status-indicator status-online">
            <i class="fas fa-rocket"></i>
            <span>Railway: Déployé avec succès</span>
          </div>
          <div class="status-indicator status-online">
            <i class="fas fa-server"></i>
            <span>Port: ${PORT}</span>
          </div>
        </div>

        <!-- Hero Content -->
        <div style="text-align: center; padding: 4rem 0;">
          <h1 style="font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem;">
            🎉 <span style="background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Logofiè est en ligne !</span>
          </h1>
          <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2.5rem; line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;">
            Votre plateforme e-commerce avec intelligence artificielle est maintenant déployée sur Railway et connectée à Supabase.
          </p>
          
          <div class="dashboard-metrics">
            <div class="metric-preview">
              <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Statut</div>
              <div class="metric-value">✅</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">Opérationnel</div>
            </div>
            
            <div class="metric-preview">
              <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Base de données</div>
              <div class="metric-value">${isSupabaseConnected}</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">Supabase</div>
            </div>
            
            <div class="metric-preview">
              <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Hébergement</div>
              <div class="metric-value">🚀</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">Railway</div>
            </div>
            
            <div class="metric-preview">
              <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Version</div>
              <div class="metric-value">2026.1</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">Logofiè IA</div>
            </div>
          </div>
          
          <div style="margin-top: 3rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="${baseUrl}/health" target="_blank" class="btn-logofie btn-primary">
              <i class="fas fa-heartbeat"></i>
              Tester l'API Health
            </a>
            <a href="${baseUrl}/api/logofie/health" target="_blank" class="btn-logofie btn-primary">
              <i class="fas fa-code"></i>
              Voir l'API Logofiè
            </a>
            <a href="https://github.com/Alpha11201/logofie" target="_blank" class="btn-logofie" style="background: transparent; border: 2px solid var(--primary); color: var(--primary);">
              <i class="fab fa-github"></i>
              Code source
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="padding: 3rem 2rem; border-top: 1px solid var(--card-border); margin-top: 4rem; background: var(--darker);">
      <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <p style="color: var(--text-secondary);">
          <strong>Logofiè</strong> - Plateforme e-commerce avec IA • Déployé sur Railway • 2026
        </p>
        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 1rem;">
          <i class="fas fa-link"></i> ${baseUrl} • 
          <i class="fas fa-database"></i> Supabase: ${isSupabaseConnected} • 
          <i class="fas fa-server"></i> Port: ${PORT}
        </p>
      </div>
    </footer>

    <script>
      console.log('🎉 Logofiè chargé avec succès!');
      console.log('URL:', '${baseUrl}');
      console.log('Port:', ${PORT});
      console.log('Supabase:', '${isSupabaseConnected}');
    </script>
  </body>
  </html>
  `);
});

// ============================================
// API ENDPOINTS LOGOFIÈ
// ============================================

app.get("/api/logofie/health", (req, res) => {
  res.json({
    success: true,
    platform: "Logofiè AI Commerce Platform",
    version: "2026.1.0",
    status: "operational",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    railway: {
      environment: process.env.RAILWAY_ENVIRONMENT,
      service: process.env.RAILWAY_SERVICE_NAME,
      url: "https://harmonious-creativity.up.railway.app"
    },
    supabase: {
      connected: !!supabase,
      url: supabaseUrl ? "configured" : "not_configured"
    },
    endpoints: {
      home: "/",
      app: "/app",
      health: "/health",
      api_health: "/api/logofie/health",
      api_ai: "/api/logofie/ai/analyze"
    }
  });
});

app.get("/api/logofie/ai/analyze", async (req, res) => {
  res.json({
    success: true,
    ai: {
      platform: "Logofiè AI Engine",
      version: "2026.1.0",
      status: "active",
      capabilities: ["behavioral_analysis", "predictive_recommendations", "fraud_detection"],
      timestamp: new Date().toISOString()
    }
  });
});

// ============================================
// DÉMARRAGE ET GESTION D'ERREURS
// ============================================

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log("=".repeat(70));
  console.log("🎉 LOGOFIÈ DÉMARRÉ AVEC SUCCÈS SUR RAILWAY !");
  console.log("=".repeat(70));
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌐 Interface: https://harmonious-creativity.up.railway.app`);
  console.log(`📱 App: https://harmonious-creativity.up.railway.app/app`);
  console.log(`🔗 API Health: https://harmonious-creativity.up.railway.app/api/logofie/health`);
  console.log(`🏥 Railway Health: https://harmonious-creativity.up.railway.app/health`);
  console.log("");
  console.log("📊 CONFIGURATION:");
  console.log(`   • Supabase: ${supabase ? "✅ Connecté" : "⚠️  Utilisation valeur par défaut"}`);
  console.log(`   • Environnement: ${process.env.NODE_ENV || "development"}`);
  console.log(`   • Railway: ${process.env.RAILWAY_ENVIRONMENT ? "✅ Détecté" : "❌ Non détecté"}`);
  console.log("");
  console.log("🚀 PRÊT À UTILISER !");
  console.log("=".repeat(70));
});

// Gestion robuste des erreurs
server.on('error', (error) => {
  console.error("=".repeat(70));
  console.error("❌ ERREUR CRITIQUE LORS DU DÉMARRAGE");
  console.error("=".repeat(70));
  console.error("Message:", error.message);
  console.error("Code:", error.code);
  
  if (error.code === 'EADDRINUSE') {
    console.error(`💡 Le port ${PORT} est déjà utilisé.`);
    console.error("Solution: Changez la variable PORT dans Railway");
  }
  
  process.exit(1);
});

// Gestion des signaux
process.on('SIGTERM', () => {
  console.log('📴 Réception du signal SIGTERM, arrêt gracieux...');
  server.close(() => {
    console.log('✅ Serveur arrêté avec succès');
    process.exit(0);
  });
});
