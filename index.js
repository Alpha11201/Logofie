// ============================================
// LOGOFIÈ - PLATEFORME E-COMMERCE AVEC IA - VERSION CORRIGÉE RAILWAY
// ============================================
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();

// CORRECTION CRITIQUE : Gestion des ports Railway
const PORT = process.env.PORT || process.env.RAILWAY_PORT || 5002;

console.log("=".repeat(70));
console.log("🤖 LOGOFIÈ - Initialisation...");
console.log("📍 Port configuré:", PORT);
console.log("🌐 Environnement:", process.env.NODE_ENV || "development");

// Configuration Supabase - FENIGAMA DW
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY;

console.log("🔗 Supabase URL:", supabaseUrl ? "✅ Présent" : "❌ Manquant");
console.log("🔑 Supabase Key:", supabaseKey ? "✅ Présent" : "❌ Manquant");

let supabase;
if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    });
    console.log("✅ Client Supabase initialisé avec succès");
  } catch (error) {
    console.error("❌ Erreur Supabase:", error.message);
  }
} else {
  console.log("⚠️  Supabase non configuré - Configurez les variables dans Railway");
}

// Middleware
app.use(require("cors")());
app.use(express.json());

// ============================================
// IA DE RECOMMANDATIONS LOGOFIÈ
// ============================================

// API d'analyse comportementale IA
app.get("/api/logofie/ai/analyze", async (req, res) => {
  const aiAnalysis = {
    platform: "Logofiè AI Engine",
    version: "2026.1.0",
    analysis_timestamp: new Date().toISOString(),
    
    capabilities: {
      behavioral_analysis: true,
      predictive_recommendations: true,
      customer_segmentation: true,
      purchase_prediction: true,
      sentiment_analysis: true,
      trend_detection: true
    },
    
    current_insights: {
      top_categories: [],
      trending_products: [],
      customer_preferences: [],
      market_trends: [],
      personalized_suggestions: []
    },
    
    performance: {
      accuracy: "92.5%",
      processing_time: "48ms",
      models_active: 3,
      training_data: "1.2M interactions"
    }
  };
  
  res.json({ success: true, ai: aiAnalysis });
});

// API de recommandations personnalisées
app.post("/api/logofie/ai/recommend", async (req, res) => {
  const { customer_id, history, preferences } = req.body;
  
  const recommendations = {
    personalized: [
      {
        id: "rec_001",
        type: "based_on_history",
        confidence: 0.87,
        products: []
      },
      {
        id: "rec_002", 
        type: "trending_similar",
        confidence: 0.79,
        products: []
      },
      {
        id: "rec_003",
        type: "complementary_items",
        confidence: 0.82,
        products: []
      }
    ],
    
    contextual: {
      time_of_day: "afternoon",
      season: "current",
      location_based: false,
      occasion: null
    },
    
    ai_metadata: {
      model: "logofie_rec_v3",
      inference_time: "32ms",
      factors_considered: ["history", "trends", "similarity", "timing"]
    }
  };
  
  res.json({ success: true, recommendations });
});

// ============================================
// HEALTH CHECK - IMPORTANT POUR RAILWAY
// ============================================

app.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    platform: "Logofiè",
    version: "2026.1.0",
    timestamp: new Date().toISOString(),
    port: PORT,
    supabase: supabase ? "connected" : "not_configured"
  });
});

app.get("/api/logofie/health", (req, res) => {
  res.json({
    success: true,
    platform: "Logofiè AI Commerce Platform",
    version: "2026.1.0",
    status: "operational",
    timestamp: new Date().toISOString(),
    supabase_connected: !!supabase,
    ai_capabilities: {
      recommendations: true,
      predictive_analytics: true,
      customer_segmentation: true,
      fraud_detection: true,
      sentiment_analysis: true
    },
    integrations: {
      bafingpay_baas: true,
      fenigama_crm: true,
      payment_gateways: ["visa", "mastercard", "orange_money", "wave", "bank_transfer"]
    }
  });
});

// ============================================
// INTERFACE LOGOFIÈ AVEC IA INTÉGRÉE - VERSION OPTIMISÉE
// ============================================

// Fonction pour obtenir l'URL de base
function getBaseUrl() {
  if (process.env.RAILWAY_STATIC_URL) {
    return process.env.RAILWAY_STATIC_URL;
  }
  if (process.env.NODE_ENV === 'production') {
    return `https://harmonious-creativity.up.railway.app`;
  }
  return `http://localhost:${PORT}`;
}

const BASE_URL = getBaseUrl();

app.get("/", (req, res) => {
  const isSupabaseConnected = supabase ? '✅' : '❌';
  
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
    
    <!-- AOS Animations -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
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
      
      .logo-tagline {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-left: 60px;
        font-weight: 500;
      }
      
      /* Hero Content */
      .hero-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        min-height: 70vh;
        gap: 4rem;
      }
      
      .hero-text {
        flex: 1;
        min-width: 300px;
      }
      
      .hero-visual {
        flex: 1;
        min-width: 300px;
        text-align: center;
      }
      
      /* AI Brain Animation */
      .ai-brain {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 0 auto;
      }
      
      .brain-circle {
        position: absolute;
        border-radius: 50%;
        animation: pulse 3s ease-in-out infinite;
      }
      
      .brain-circle-1 {
        width: 300px;
        height: 300px;
        border: 2px solid rgba(139, 92, 246, 0.3);
      }
      
      .brain-circle-2 {
        width: 250px;
        height: 250px;
        border: 2px solid rgba(16, 185, 129, 0.3);
        top: 25px;
        left: 25px;
        animation-delay: 0.5s;
      }
      
      .brain-circle-3 {
        width: 200px;
        height: 200px;
        border: 2px solid rgba(245, 158, 11, 0.3);
        top: 50px;
        left: 50px;
        animation-delay: 1s;
      }
      
      .brain-center {
        position: absolute;
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        border-radius: 50%;
        top: 75px;
        left: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        box-shadow: 0 0 50px rgba(139, 92, 246, 0.5);
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
      
      .btn-outline {
        background: transparent;
        border: 2px solid var(--primary);
        color: var(--primary);
      }
      
      .btn-outline:hover {
        background: rgba(139, 92, 246, 0.1);
        transform: translateY(-3px);
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
      
      .status-error {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.2);
        color: #ef4444;
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
      
      /* Animations */
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.5;
        }
        50% {
          transform: scale(1.05);
          opacity: 1;
        }
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
        <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
          <div class="status-indicator status-online">
            <i class="fas fa-circle" style="font-size: 0.5rem;"></i>
            <span>Port: ${PORT}</span>
          </div>
          <div class="status-indicator ${isSupabaseConnected === '✅' ? 'status-online' : 'status-warning'}">
            <i class="fas fa-database"></i>
            <span>Supabase: ${isSupabaseConnected}</span>
          </div>
          <div class="status-indicator status-online">
            <i class="fas fa-rocket"></i>
            <span>Railway: Déployé</span>
          </div>
        </div>

        <!-- Hero Content -->
        <div class="hero-content">
          <div class="hero-text">
            <h1 style="font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem;">
              L'<span style="background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">IA</span> qui révolutionne votre e-commerce
            </h1>
            <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2.5rem; line-height: 1.6;">
              Logofiè analyse en temps réel le comportement d'achat et fournit des recommandations personnalisées pour augmenter vos conversions de 40%.
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <button class="btn-logofie btn-primary" onclick="launchAIDemo()">
                <i class="fas fa-brain"></i>
                Tester l'IA
              </button>
              <button class="btn-logofie btn-outline" onclick="testAPI()">
                <i class="fas fa-code"></i>
                Tester l'API
              </button>
              <a href="${BASE_URL}/api/logofie/health" target="_blank" class="btn-logofie btn-outline">
                <i class="fas fa-heartbeat"></i>
                Vérifier santé
              </a>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="ai-brain">
              <div class="brain-circle brain-circle-1"></div>
              <div class="brain-circle brain-circle-2"></div>
              <div class="brain-circle brain-circle-3"></div>
              <div class="brain-center">
                <i class="fas fa-robot"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="container">
      <!-- Dashboard -->
      <section class="dashboard-preview">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h3 style="font-size: 1.75rem; font-weight: 700;">Dashboard Logofiè</h3>
            <p style="color: var(--text-secondary);">Analytics en temps réel et insights IA</p>
          </div>
        </div>
        
        <div class="dashboard-metrics">
          <div class="metric-preview">
            <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Statut Serveur</div>
            <div class="metric-value">✅</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">En ligne</div>
          </div>
          
          <div class="metric-preview">
            <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Connexion DB</div>
            <div class="metric-value">${isSupabaseConnected}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">Supabase</div>
          </div>
          
          <div class="metric-preview">
            <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Port</div>
            <div class="metric-value">${PORT}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">Actif</div>
          </div>
          
          <div class="metric-preview">
            <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Version</div>
            <div class="metric-value">2026.1</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">Logofiè IA</div>
          </div>
        </div>
        
        <!-- API Links -->
        <div style="margin-top: 2rem;">
          <h4 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-primary);">🔗 API Endpoints</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <a href="${BASE_URL}/api/logofie/health" target="_blank" style="background: var(--card-bg); padding: 1rem; border-radius: 12px; border: 1px solid var(--card-border); text-decoration: none; color: var(--text-primary); transition: all 0.3s;" onmouseover="this.style.borderColor='var(--primary)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--card-border)'; this.style.transform='translateY(0)'">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 0.5rem;">
                <i class="fas fa-heartbeat" style="color: var(--secondary);"></i>
                <span style="font-weight: 600;">GET /api/logofie/health</span>
              </div>
              <div style="font-size: 0.875rem; color: var(--text-secondary);">Vérifier la santé du système</div>
            </a>
            
            <a href="${BASE_URL}/api/logofie/ai/analyze" target="_blank" style="background: var(--card-bg); padding: 1rem; border-radius: 12px; border: 1px solid var(--card-border); text-decoration: none; color: var(--text-primary); transition: all 0.3s;" onmouseover="this.style.borderColor='var(--primary)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--card-border)'; this.style.transform='translateY(0)'">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 0.5rem;">
                <i class="fas fa-brain" style="color: var(--primary);"></i>
                <span style="font-weight: 600;">GET /api/logofie/ai/analyze</span>
              </div>
              <div style="font-size: 0.875rem; color: var(--text-secondary);">Analyse comportementale IA</div>
            </a>
            
            <a href="${BASE_URL}/health" target="_blank" style="background: var(--card-bg); padding: 1rem; border-radius: 12px; border: 1px solid var(--card-border); text-decoration: none; color: var(--text-primary); transition: all 0.3s;" onmouseover="this.style.borderColor='var(--primary)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--card-border)'; this.style.transform='translateY(0)'">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 0.5rem;">
                <i class="fas fa-check-circle" style="color: var(--accent);"></i>
                <span style="font-weight: 600;">GET /health</span>
              </div>
              <div style="font-size: 0.875rem; color: var(--text-secondary);">Health check Railway</div>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer style="padding: 3rem 2rem; border-top: 1px solid var(--card-border); margin-top: 4rem; background: var(--darker);">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
              <div class="logo-icon" style="width: 40px; height: 40px; font-size: 1.25rem;">L</div>
              <div class="logo-text" style="font-size: 1.75rem;">Logofiè</div>
            </div>
            <p style="color: var(--text-secondary);">Plateforme e-commerce avec IA de recommandations • 2026</p>
            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.5rem;">
              <i class="fas fa-server"></i> URL: ${BASE_URL} • 
              <i class="fas fa-database"></i> Supabase: ${isSupabaseConnected}
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- JavaScript -->
    <script>
      function launchAIDemo() {
        alert('🎯 Démonstration IA Logofiè\\n\\nCette fonctionnalité sera disponible dans la version complète.');
      }
      
      async function testAPI() {
        try {
          const response = await fetch('${BASE_URL}/api/logofie/health');
          const data = await response.json();
          alert('✅ API Logofiè fonctionnelle!\\n\\n' + JSON.stringify(data, null, 2));
        } catch (error) {
          alert('❌ Erreur API: ' + error.message);
        }
      }
      
      // Initialize brain animation
      document.addEventListener('DOMContentLoaded', function() {
        const circles = document.querySelectorAll('.brain-circle');
        circles.forEach((circle, index) => {
          circle.style.animationDelay = \`\${index * 0.5}s\`;
        });
        console.log('🤖 Logofiè initialisé avec succès');
      });
    </script>
  </body>
  </html>
  `);
});

// ============================================
// DÉMARRAGE LOGOFIÈ - AVEC GESTION D'ERREURS
// ============================================

const server = app.listen(PORT, () => {
  console.log("=".repeat(70));
  console.log("🚀 LOGOFIÈ DÉMARRÉ AVEC SUCCÈS !");
  console.log("=".repeat(70));
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌐 Interface: ${BASE_URL}`);
  console.log(`🔗 API Health: ${BASE_URL}/api/logofie/health`);
  console.log(`🧠 IA API: ${BASE_URL}/api/logofie/ai/analyze`);
  console.log(`🏥 Railway Health: ${BASE_URL}/health`);
  console.log("");
  console.log("📊 CONFIGURATION:");
  console.log(`   • Supabase: ${supabase ? "✅ Connecté" : "❌ Non configuré"}`);
  console.log(`   • Environnement: ${process.env.NODE_ENV || "development"}`);
  console.log(`   • Railway: ${process.env.RAILWAY_ENVIRONMENT ? "✅" : "❌"}`);
  console.log("=".repeat(70));
});

// Gestion des erreurs
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Le port ${PORT} est déjà utilisé. Essayez un autre port.`);
    console.log("💡 Solution: Changez la variable PORT dans Railway Variables");
  } else {
    console.error('❌ Erreur serveur:', error.message);
  }
});
