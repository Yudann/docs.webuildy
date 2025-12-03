import { Node, Edge, MarkerType } from 'reactflow';
import { DocSection } from '../types';

// Styling Constants dengan lebih banyak variasi
const STYLES = {
  // Warna utama
  frontend: {
    background: '#eff6ff', // blue-50
    border: '2px solid #3b82f6', // blue-500
    color: '#1e3a8a', // blue-900
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 500,
  },
  backend: {
    background: '#f8fafc', // slate-50
    border: '2px solid #64748b', // slate-500
    color: '#0f172a', // slate-900
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 500,
  },
  database: {
    background: '#fffbeb', // amber-50
    border: '2px solid #f59e0b', // amber-500
    color: '#78350f', // amber-900
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 500,
  },
  external: {
    background: '#fdf2f8', // pink-50
    border: '2px solid #ec4899', // pink-500
    color: '#831843', // pink-900
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 500,
  },
  // State & Action
  action: {
    background: '#f0fdf4', // emerald-50
    border: '2px solid #10b981', // emerald-500
    color: '#064e3b', // emerald-900
    borderRadius: '50px',
    fontSize: '13px',
    fontWeight: 600,
    padding: '8px 16px',
  },
  state: {
    background: '#fff',
    border: '2px solid #8b5cf6', // violet-500
    color: '#4c1d95',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 500,
  },
  // Status khusus
  success: {
    background: '#dcfce7', // green-100
    border: '2px solid #16a34a', // green-600
    color: '#166534', // green-800
    borderRadius: '12px',
  },
  warning: {
    background: '#fef3c7', // amber-100
    border: '2px solid #d97706', // amber-600
    color: '#92400e', // amber-800
    borderRadius: '12px',
  },
  error: {
    background: '#fee2e2', // red-100
    border: '2px solid #dc2626', // red-600
    color: '#991b1b', // red-800
    borderRadius: '12px',
  },
  // Special nodes
  diamond: {
    background: '#fff',
    border: '2px solid #6b7280',
    color: '#111827',
    borderRadius: '0',
    transform: 'rotate(45deg)',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    background: '#fff',
    border: '2px solid #6b7280',
    color: '#111827',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

// Helper untuk membuat edges dengan styling konsisten
const createEdge = (id: string, source: string, target: string, label?: string, animated: boolean = false): Edge => ({
  id,
  source,
  target,
  label,
  animated,
  type: 'smoothstep',
  style: { stroke: '#64748b', strokeWidth: 2 },
  labelStyle: { fill: '#475569', fontSize: 12, fontWeight: 500 },
  labelBgStyle: { fill: '#f8fafc', fillOpacity: 0.9 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: '#64748b',
  },
});

export const DOCUMENTATION_DATA: DocSection[] = [
  {
    id: 'system-arch',
    title: 'System Architecture',
    category: 'Architecture',
    description: 'High-level overview of the Webuildy V2 stack with detailed component breakdown.',
    direction: 'TB',
    nodes: [
      // ========== FRONTEND SECTION ==========
      // Header
      {
        id: 'frontend-header',
        data: { label: '🎨 FRONTEND - Next.js 16' },
        style: { ...STYLES.frontend, width: 700, height: 50, fontSize: '18px', fontWeight: 700 },
        position: { x: 0, y: 0 },
        type: 'default'
      },
      // Row 1
      {
        id: 'landing-page',
        data: { label: 'Landing Page\n(SEO Optimized)' },
        style: { ...STYLES.frontend, width: 200, height: 80 },
        position: { x: 0, y: 80 }
      },
      {
        id: 'auth-system',
        data: { label: 'Auth System\n(NextAuth + Supabase)' },
        style: { ...STYLES.frontend, width: 200, height: 80 },
        position: { x: 250, y: 80 }
      },
      {
        id: 'admin-panel',
        data: { label: 'Admin Panel\n(Super Admin Only)' },
        style: { ...STYLES.frontend, width: 200, height: 80 },
        position: { x: 500, y: 80 }
      },
      // Row 2
      {
        id: 'merchant-dash',
        data: { label: 'Merchant Dashboard\n(Protected Route)' },
        style: { ...STYLES.frontend, width: 200, height: 80 },
        position: { x: 0, y: 190 }
      },
      {
        id: 'customer-store',
        data: { label: 'Customer Store\n(Dynamic [slug])' },
        style: { ...STYLES.frontend, width: 200, height: 80 },
        position: { x: 250, y: 190 }
      },

      // ========== BACKEND SECTION ==========
      // Header
      {
        id: 'backend-header',
        data: { label: '⚙️ BACKEND - Supabase' },
        style: { ...STYLES.backend, width: 700, height: 50, fontSize: '18px', fontWeight: 700 },
        position: { x: 750, y: 0 },
        type: 'default'
      },
      // Row 1
      {
        id: 'postgres-db',
        data: { label: 'PostgreSQL 15\n(Relational DB)' },
        style: { ...STYLES.database, width: 200, height: 80 },
        position: { x: 750, y: 80 }
      },
      {
        id: 'supabase-auth',
        data: { label: 'Supabase Auth\n(Row Level Security)' },
        style: { ...STYLES.backend, width: 200, height: 80 },
        position: { x: 1000, y: 80 }
      },
      {
        id: 'edge-functions',
        data: { label: 'Edge Functions\n(Serverless)' },
        style: { ...STYLES.backend, width: 200, height: 80 },
        position: { x: 1250, y: 80 }
      },
      // Row 2
      {
        id: 'storage-bucket',
        data: { label: 'Storage Buckets\n(Images, Files)' },
        style: { ...STYLES.backend, width: 200, height: 80 },
        position: { x: 750, y: 190 }
      },
      {
        id: 'realtime-subs',
        data: { label: 'Realtime\nSubscriptions' },
        style: { ...STYLES.backend, width: 200, height: 80 },
        position: { x: 1000, y: 190 }
      },

      // ========== EXTERNAL SERVICES SECTION ==========
      // Header
      {
        id: 'external-header',
        data: { label: '🌐 EXTERNAL SERVICES' },
        style: { ...STYLES.external, width: 700, height: 50, fontSize: '18px', fontWeight: 700 },
        position: { x: 0, y: 320 },
        type: 'default'
      },
      // Row 1
      {
        id: 'xendit',
        data: { label: 'Xendit Payment\n(Indonesian Gateway)' },
        style: { ...STYLES.external, width: 200, height: 80 },
        position: { x: 0, y: 400 }
      },
      {
        id: 'rajaongkir',
        data: { label: 'Raja Ongkir\n(Shipping API)' },
        style: { ...STYLES.external, width: 200, height: 80 },
        position: { x: 250, y: 400 }
      },
      {
        id: 'cdn',
        data: { label: 'Vercel CDN\n(Global Delivery)' },
        style: { ...STYLES.external, width: 200, height: 80 },
        position: { x: 500, y: 400 }
      },
      // Row 2
      {
        id: 'email-service',
        data: { label: 'Resend\n(Email Service)' },
        style: { ...STYLES.external, width: 200, height: 80 },
        position: { x: 0, y: 510 }
      },
      {
        id: 'whatsapp-api',
        data: { label: 'WhatsApp Business API\n(Order Notifications)' },
        style: { ...STYLES.external, width: 200, height: 80 },
        position: { x: 250, y: 510 }
      },

      // ========== MONITORING SECTION ==========
      // Header
      {
        id: 'monitoring-header',
        data: { label: '📊 MONITORING & ANALYTICS' },
        style: { ...STYLES.backend, width: 700, height: 50, fontSize: '18px', fontWeight: 700 },
        position: { x: 750, y: 320 },
        type: 'default'
      },
      // Row 1
      {
        id: 'vercel-analytics',
        data: { label: 'Vercel Analytics\n(Performance)' },
        style: { ...STYLES.backend, width: 200, height: 80 },
        position: { x: 750, y: 400 }
      },
      {
        id: 'sentry',
        data: { label: 'Sentry\n(Error Tracking)' },
        style: { ...STYLES.backend, width: 200, height: 80 },
        position: { x: 1000, y: 400 }
      },
    ] as Node[],
    edges: [
      // Frontend internal connections
      createEdge('e1-1', 'landing-page', 'auth-system', '→ Register/Login', true),
      createEdge('e1-2', 'auth-system', 'merchant-dash', '→ Merchant Auth', true),
      createEdge('e1-3', 'auth-system', 'customer-store', '→ Customer Auth', true),

      // Frontend → Backend connections
      createEdge('e2-1', 'merchant-dash', 'supabase-auth', 'Auth Requests'),
      createEdge('e2-2', 'merchant-dash', 'postgres-db', 'CRUD Operations'),
      createEdge('e2-3', 'merchant-dash', 'storage-bucket', 'File Uploads'),
      createEdge('e2-4', 'customer-store', 'postgres-db', 'Read Products'),
      createEdge('e2-5', 'customer-store', 'realtime-subs', 'Live Updates'),

      // Backend → External connections
      createEdge('e3-1', 'merchant-dash', 'xendit', 'Create Invoice', true),
      createEdge('e3-2', 'customer-store', 'xendit', 'Process Payment', true),
      createEdge('e3-3', 'customer-store', 'rajaongkir', 'Shipping Calc', true),
      createEdge('e3-4', 'edge-functions', 'email-service', 'Send Email', true),
      createEdge('e3-5', 'edge-functions', 'whatsapp-api', 'Send WhatsApp', true),

      // External → Backend webhooks
      createEdge('e4-1', 'xendit', 'edge-functions', 'Payment Webhook', true),
      createEdge('e4-2', 'rajaongkir', 'edge-functions', 'Shipping Webhook', true),

      // Monitoring connections
      createEdge('e5-1', 'frontend-header', 'vercel-analytics', 'Send Metrics', true),
      createEdge('e5-2', 'frontend-header', 'sentry', 'Error Reports', true),
      createEdge('e5-3', 'backend-header', 'sentry', 'Error Reports', true),
    ] as Edge[]
  },
  {
    id: 'flow-registration',
    title: 'Merchant Registration Flow',
    category: 'Flows',
    description: 'Complete sequence of merchant onboarding process with validation steps.',
    direction: 'LR',
    nodes: [
      {
        id: 'start',
        data: { label: '🎯 Start\nVisit Landing Page' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 0, y: 150 },
        type: 'input'
      },
      {
        id: 'form-view',
        data: { label: '📋 Registration Form\nEmail, Password, Business Name' },
        style: { ...STYLES.frontend, width: 200 },
        position: { x: 250, y: 150 }
      },
      {
        id: 'validation',
        data: { label: '✓ Validation Check\nEmail format, Password strength' },
        style: { ...STYLES.state, width: 180 },
        position: { x: 500, y: 150 }
      },
      {
        id: 'create-user',
        data: { label: '👤 Create Auth User\nSupabase Auth API' },
        style: { ...STYLES.backend, width: 180 },
        position: { x: 750, y: 150 }
      },
      {
        id: 'create-profile',
        data: { label: '📇 Create Profile\nSet role: "merchant"' },
        style: { ...STYLES.database, width: 180 },
        position: { x: 1000, y: 50 }
      },
      {
        id: 'create-store',
        data: { label: '🏪 Create Store\nDefault store with template' },
        style: { ...STYLES.database, width: 180 },
        position: { x: 1000, y: 150 }
      },
      {
        id: 'create-subscription',
        data: { label: '📅 Free Subscription\n14-day trial period' },
        style: { ...STYLES.database, width: 180 },
        position: { x: 1000, y: 250 }
      },
      {
        id: 'send-welcome',
        data: { label: '✉️ Send Welcome Email\n+ WhatsApp notification' },
        style: { ...STYLES.external, width: 180 },
        position: { x: 1250, y: 150 }
      },
      {
        id: 'dashboard',
        data: { label: '🚀 Merchant Dashboard\nFirst-time setup wizard' },
        style: { ...STYLES.success, width: 200 },
        position: { x: 1500, y: 150 },
        type: 'output'
      },
      {
        id: 'error-node',
        data: { label: '❌ Error Handling\nShow user-friendly message' },
        style: { ...STYLES.error, width: 180 },
        position: { x: 750, y: 300 }
      },
    ] as Node[],
    edges: [
      createEdge('e1', 'start', 'form-view', 'Click "Daftar"'),
      createEdge('e2', 'form-view', 'validation', 'Submit Form', true),
      createEdge('e3', 'validation', 'create-user', 'Valid', true),
      createEdge('e4', 'validation', 'error-node', 'Invalid', true),
      createEdge('e5', 'create-user', 'create-profile', 'User Created', true),
      createEdge('e6', 'create-profile', 'create-store', 'Profile Ready', true),
      createEdge('e7', 'create-store', 'create-subscription', 'Store Ready', true),
      createEdge('e8', 'create-subscription', 'send-welcome', 'Trial Started', true),
      createEdge('e9', 'send-welcome', 'dashboard', 'Onboarding Complete', true),
      createEdge('e10', 'error-node', 'form-view', 'Retry', true),
    ] as Edge[]
  },
  {
    id: 'erd',
    title: 'Entity Relationship Diagram',
    category: 'Database',
    description: 'Complete database schema with all tables, relationships, and key fields.',
    direction: 'TB',
    nodes: [
      // Core User Tables
      {
        id: 'profiles',
        data: {
          label: 'profiles\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• email: string (UNIQUE)\n• full_name: string\n• role: enum\n• created_at: timestamp\n• updated_at: timestamp\n• avatar_url: string?',
          count: '1M+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 220 },
        position: { x: 0, y: 0 }
      },
      {
        id: 'stores',
        data: {
          label: 'stores\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• user_id: uuid (FK)\n• store_name: string\n• store_slug: string (UNIQUE)\n• template_id: uuid (FK)\n• is_active: boolean\n• settings: jsonb\n• created_at: timestamp',
          count: '50K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 220 },
        position: { x: 300, y: 0 }
      },

      // Product Catalog
      {
        id: 'products',
        data: {
          label: 'products\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• store_id: uuid (FK)\n• category_id: uuid (FK)\n• name: string\n• description: text\n• price: decimal(10,2)\n• stock: integer\n• images: jsonb[]\n• is_active: boolean\n• variants: jsonb?',
          count: '500K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 240 },
        position: { x: 600, y: 100 }
      },
      {
        id: 'categories',
        data: {
          label: 'categories\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• store_id: uuid (FK)\n• name: string\n• slug: string\n• parent_id: uuid? (FK)\n• sort_order: integer\n• is_active: boolean',
          count: '20K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 180 },
        position: { x: 900, y: 0 }
      },

      // Orders & Transactions
      {
        id: 'orders',
        data: {
          label: 'orders\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• store_id: uuid (FK)\n• order_number: string\n• customer_name: string\n• customer_email: string\n• customer_phone: string\n• total_amount: decimal(10,2)\n• status: enum\n• payment_method: string\n• shipping_address: jsonb',
          count: '100K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 240 },
        position: { x: 300, y: 250 }
      },
      {
        id: 'order_items',
        data: {
          label: 'order_items\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• order_id: uuid (FK)\n• product_id: uuid (FK)\n• quantity: integer\n• unit_price: decimal(10,2)\n• subtotal: decimal(10,2)\n• variant_data: jsonb?',
          count: '300K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 180 },
        position: { x: 600, y: 380 }
      },

      // Subscription & Billing
      {
        id: 'pricing_plans',
        data: {
          label: 'pricing_plans\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• name: string\n• slug: string\n• price_monthly: decimal(10,2)\n• price_yearly: decimal(10,2)\n• max_products: integer\n• max_storage: integer\n• features: jsonb[]\n• is_active: boolean',
          count: '5 rows'
        },
        style: { ...STYLES.database, width: 280, height: 220 },
        position: { x: 0, y: 250 }
      },
      {
        id: 'store_subscriptions',
        data: {
          label: 'store_subscriptions\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• store_id: uuid (FK)\n• plan_id: uuid (FK)\n• status: enum\n• current_period_start: timestamp\n• current_period_end: timestamp\n• cancel_at_period_end: boolean\n• xendit_invoice_id: string?',
          count: '50K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 220 },
        position: { x: 0, y: 500 }
      },
      {
        id: 'subscription_history',
        data: {
          label: 'subscription_history\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• subscription_id: uuid (FK)\n• event_type: string\n• old_plan_id: uuid?\n• new_plan_id: uuid?\n• metadata: jsonb\n• created_at: timestamp',
          count: '150K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 180 },
        position: { x: 300, y: 500 }
      },

      // Analytics & Tracking
      {
        id: 'store_usage',
        data: {
          label: 'store_usage\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• store_id: uuid (FK)\n• month: date\n• product_views: integer\n• orders_count: integer\n• revenue_total: decimal(10,2)\n• storage_used: integer\n• bandwidth_used: integer',
          count: '600K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 200 },
        position: { x: 900, y: 220 }
      },
      {
        id: 'product_reviews',
        data: {
          label: 'product_reviews\n━━━━━━━━━━━━━━━━━━\n• id: uuid (PK)\n• product_id: uuid (FK)\n• order_id: uuid (FK)\n• rating: integer (1-5)\n• comment: text?\n• is_verified: boolean\n• created_at: timestamp',
          count: '50K+ rows'
        },
        style: { ...STYLES.database, width: 280, height: 180 },
        position: { x: 900, y: 450 }
      },
    ] as Node[],
    edges: [
      // Core relationships
      createEdge('e1', 'profiles', 'stores', '1 → N\nowns'),
      createEdge('e2', 'stores', 'products', '1 → N\nhas'),
      createEdge('e3', 'stores', 'categories', '1 → N\nhas'),
      createEdge('e4', 'stores', 'orders', '1 → N\nreceives'),
      createEdge('e5', 'stores', 'store_subscriptions', '1 → 1\nhas'),
      createEdge('e6', 'stores', 'store_usage', '1 → N\ntracks'),

      // Product relationships
      createEdge('e7', 'categories', 'products', '1 → N\ncontains'),
      createEdge('e8', 'products', 'order_items', '1 → N\nordered_as'),
      createEdge('e9', 'products', 'product_reviews', '1 → N\nreceives'),

      // Order relationships
      createEdge('e10', 'orders', 'order_items', '1 → N\ncontains'),
      createEdge('e11', 'orders', 'product_reviews', '1 → 1\nverifies'),

      // Subscription relationships
      createEdge('e12', 'pricing_plans', 'store_subscriptions', '1 → N\nsubscribed_to'),
      createEdge('e13', 'store_subscriptions', 'subscription_history', '1 → N\nlogs'),
    ] as Edge[]
  },
  {
    id: 'component-arch',
    title: 'Component Architecture',
    category: 'Components',
    description: 'Detailed component hierarchy and organization in the Next.js application.',
    direction: 'TB',
    nodes: [
      // App Router Structure
      {
        id: 'app-root',
        data: { label: '📁 app/\nRoot Layout & Providers' },
        style: { ...STYLES.frontend, width: 250, height: 80 },
        position: { x: 400, y: 0 },
        type: 'input'
      },

      // Main Routes
      {
        id: 'site-pages',
        data: { label: '🌐 Site Pages\nPublic facing' },
        style: { ...STYLES.frontend, width: 200, height: 40 },
        position: { x: 100, y: 100 }
      },
      {
        id: 'auth-pages',
        data: { label: '🔐 Auth Pages\nAuthentication flows' },
        style: { ...STYLES.frontend, width: 200, height: 40 },
        position: { x: 400, y: 100 }
      },
      {
        id: 'dashboard-pages',
        data: { label: '📊 Dashboard Pages\nProtected routes' },
        style: { ...STYLES.frontend, width: 200, height: 40 },
        position: { x: 700, y: 100 }
      },
      {
        id: 'store-pages',
        data: { label: '🏪 Store Pages\nDynamic [slug] routes' },
        style: { ...STYLES.frontend, width: 200, height: 40 },
        position: { x: 1000, y: 100 }
      },

      // Specific Pages under each route
      {
        id: 'landing-page',
        data: { label: '/ (home)\nLanding page' },
        style: { ...STYLES.frontend, width: 180, height: 60 },
        parentNode: 'site-pages',
        extent: 'parent',
        position: { x: 10, y: 50 }
      },
      {
        id: 'pricing-page',
        data: { label: '/pricing\nPricing plans' },
        style: { ...STYLES.frontend, width: 180, height: 60 },
        parentNode: 'site-pages',
        extent: 'parent',
        position: { x: 10, y: 120 }
      },
      {
        id: 'login-page',
        data: { label: '/auth/login\nLogin form' },
        style: { ...STYLES.frontend, width: 180, height: 60 },
        parentNode: 'auth-pages',
        extent: 'parent',
        position: { x: 10, y: 50 }
      },
      {
        id: 'register-page',
        data: { label: '/auth/register\nRegistration' },
        style: { ...STYLES.frontend, width: 180, height: 60 },
        parentNode: 'auth-pages',
        extent: 'parent',
        position: { x: 10, y: 120 }
      },
      {
        id: 'merchant-dash',
        data: { label: '/dashboard\nOverview' },
        style: { ...STYLES.frontend, width: 180, height: 60 },
        parentNode: 'dashboard-pages',
        extent: 'parent',
        position: { x: 10, y: 50 }
      },
      {
        id: 'products-page',
        data: { label: '/dashboard/products\nProduct management' },
        style: { ...STYLES.frontend, width: 180, height: 60 },
        parentNode: 'dashboard-pages',
        extent: 'parent',
        position: { x: 10, y: 120 }
      },
      {
        id: 'store-home',
        data: { label: '/[storeSlug]\nStore homepage' },
        style: { ...STYLES.frontend, width: 180, height: 60 },
        parentNode: 'store-pages',
        extent: 'parent',
        position: { x: 10, y: 50 }
      },
      {
        id: 'product-detail',
        data: { label: '/[storeSlug]/[productId]\nProduct detail' },
        style: { ...STYLES.frontend, width: 180, height: 60 },
        parentNode: 'store-pages',
        extent: 'parent',
        position: { x: 10, y: 120 }
      },

      // Shared Components
      {
        id: 'shared-components',
        data: { label: '📦 Shared Components\nReusable UI' },
        style: { ...STYLES.backend, width: 250, height: 80 },
        position: { x: 400, y: 300 }
      },
      {
        id: 'ui-primitives',
        data: { label: 'components/ui/\nButton, Input, Card, etc.' },
        style: { ...STYLES.backend, width: 200, height: 40 },
        parentNode: 'shared-components',
        extent: 'parent',
        position: { x: 25, y: 50 }
      },
      {
        id: 'layout-components',
        data: { label: 'components/layout/\nNavbar, Footer, Sidebar' },
        style: { ...STYLES.backend, width: 200, height: 40 },
        parentNode: 'shared-components',
        extent: 'parent',
        position: { x: 25, y: 100 }
      },
      {
        id: 'dashboard-components',
        data: { label: 'components/dashboard/\nStats, Charts, Tables' },
        style: { ...STYLES.backend, width: 200, height: 40 },
        parentNode: 'shared-components',
        extent: 'parent',
        position: { x: 25, y: 150 }
      },

      // Store Templates
      {
        id: 'templates',
        data: { label: '🎨 Store Templates\nThemes & Layouts' },
        style: { ...STYLES.external, width: 250, height: 80 },
        position: { x: 700, y: 300 }
      },
      {
        id: 'asteria',
        data: { label: 'Asteria\nModern & Clean' },
        style: { ...STYLES.external, width: 180, height: 40 },
        parentNode: 'templates',
        extent: 'parent',
        position: { x: 35, y: 50 }
      },
      {
        id: 'aurora',
        data: { label: 'Aurora\nElegant & Premium' },
        style: { ...STYLES.external, width: 180, height: 40 },
        parentNode: 'templates',
        extent: 'parent',
        position: { x: 35, y: 100 }
      },
      {
        id: 'nexus',
        data: { label: 'Nexus\nBold & Colorful' },
        style: { ...STYLES.external, width: 180, height: 40 },
        parentNode: 'templates',
        extent: 'parent',
        position: { x: 35, y: 150 }
      },

      // Hooks & Utilities
      {
        id: 'hooks-utils',
        data: { label: '⚙️ Hooks & Utilities\nCustom logic' },
        style: { ...STYLES.backend, width: 250, height: 80 },
        position: { x: 1000, y: 300 }
      },
      {
        id: 'custom-hooks',
        data: { label: 'hooks/\nuseStore, useCart, etc.' },
        style: { ...STYLES.backend, width: 200, height: 40 },
        parentNode: 'hooks-utils',
        extent: 'parent',
        position: { x: 25, y: 50 }
      },
      {
        id: 'lib-utils',
        data: { label: 'lib/\nAPI clients, formatters' },
        style: { ...STYLES.backend, width: 200, height: 40 },
        parentNode: 'hooks-utils',
        extent: 'parent',
        position: { x: 25, y: 100 }
      },
    ] as Node[],
    edges: [
      // App router connections
      createEdge('e1', 'app-root', 'site-pages', '→'),
      createEdge('e2', 'app-root', 'auth-pages', '→'),
      createEdge('e3', 'app-root', 'dashboard-pages', '→'),
      createEdge('e4', 'app-root', 'store-pages', '→'),

      // Components usage
      createEdge('e5', 'dashboard-pages', 'shared-components', 'imports', true),
      createEdge('e6', 'store-pages', 'templates', 'uses', true),
      createEdge('e7', 'shared-components', 'hooks-utils', 'depends on', true),
      createEdge('e8', 'templates', 'shared-components', 'extends', true),

      // Internal dependencies
      createEdge('e9', 'landing-page', 'pricing-page', 'link to'),
      createEdge('e10', 'login-page', 'register-page', 'switch to'),
      createEdge('e11', 'merchant-dash', 'products-page', 'navigate to'),
      createEdge('e12', 'store-home', 'product-detail', '→ product'),
    ] as Edge[]
  },
  {
    id: 'flow-order',
    title: 'Customer Order Flow',
    category: 'Flows',
    description: 'Complete customer journey from product discovery to order fulfillment.',
    direction: 'LR',
    nodes: [
      {
        id: 'browse',
        data: { label: '🛍️ Browse Store\nProduct discovery' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 0, y: 150 },
        type: 'input'
      },
      {
        id: 'product-view',
        data: { label: '📱 Product Detail\nImages, description, reviews' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 250, y: 150 }
      },
      {
        id: 'add-to-cart',
        data: { label: '➕ Add to Cart\nSelect variant & quantity' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 500, y: 150 }
      },
      {
        id: 'cart-page',
        data: { label: '🛒 Cart Page\nReview items, update quantities' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 750, y: 150 }
      },
      {
        id: 'checkout-start',
        data: { label: '💳 Checkout Start\nCustomer details form' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 1000, y: 150 }
      },
      {
        id: 'shipping-calc',
        data: { label: '🚚 Shipping Calculation\nRaja Ongkir API call' },
        style: { ...STYLES.external, width: 180 },
        position: { x: 1000, y: 0 }
      },
      {
        id: 'payment-selection',
        data: { label: '💰 Payment Method\nBank transfer, E-wallet, QRIS' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 1250, y: 150 }
      },
      {
        id: 'xendit-invoice',
        data: { label: '🧾 Create Invoice\nXendit API integration' },
        style: { ...STYLES.external, width: 180 },
        position: { x: 1500, y: 150 }
      },
      {
        id: 'payment-gateway',
        data: { label: '🌐 Payment Gateway\nRedirect to Xendit' },
        style: { ...STYLES.external, width: 180 },
        position: { x: 1750, y: 150 }
      },
      {
        id: 'webhook-receive',
        data: { label: '🔔 Webhook Handler\nProcess payment confirmation' },
        style: { ...STYLES.backend, width: 180 },
        position: { x: 2000, y: 150 }
      },
      {
        id: 'order-created',
        data: { label: '📦 Create Order\nDatabase transaction' },
        style: { ...STYLES.database, width: 180 },
        position: { x: 2250, y: 50 }
      },
      {
        id: 'notifications',
        data: { label: '📢 Send Notifications\nEmail + WhatsApp' },
        style: { ...STYLES.external, width: 180 },
        position: { x: 2250, y: 150 }
      },
      {
        id: 'order-confirmation',
        data: { label: '✅ Order Confirmed\nCustomer view' },
        style: { ...STYLES.success, width: 180 },
        position: { x: 2500, y: 150 },
        type: 'output'
      },
      {
        id: 'merchant-alert',
        data: { label: '👨‍💼 Merchant Alert\nNew order dashboard' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 2250, y: 250 }
      },
      {
        id: 'error-handling',
        data: { label: '⚠️ Error Handling\nPayment failures, stock issues' },
        style: { ...STYLES.error, width: 180 },
        position: { x: 1750, y: 300 }
      },
    ] as Node[],
    edges: [
      createEdge('e1', 'browse', 'product-view', 'Click product'),
      createEdge('e2', 'product-view', 'add-to-cart', 'Add to cart'),
      createEdge('e3', 'add-to-cart', 'cart-page', 'View cart'),
      createEdge('e4', 'cart-page', 'checkout-start', 'Proceed to checkout', true),
      createEdge('e5', 'checkout-start', 'shipping-calc', 'Calculate shipping', true),
      createEdge('e6', 'checkout-start', 'payment-selection', 'Select payment'),
      createEdge('e7', 'payment-selection', 'xendit-invoice', 'Create payment', true),
      createEdge('e8', 'xendit-invoice', 'payment-gateway', 'Redirect customer', true),
      createEdge('e9', 'payment-gateway', 'webhook-receive', 'Payment callback', true),
      createEdge('e10', 'webhook-receive', 'order-created', 'Verify & create', true),
      createEdge('e11', 'order-created', 'notifications', 'Send receipts', true),
      createEdge('e12', 'notifications', 'order-confirmation', 'Show confirmation', true),
      createEdge('e13', 'order-created', 'merchant-alert', 'New order alert', true),
      createEdge('e14', 'payment-gateway', 'error-handling', 'Payment failed', true),
      createEdge('e15', 'error-handling', 'cart-page', 'Retry checkout', true),
    ] as Edge[]
  },
  {
    id: 'auth-flow',
    title: 'Authentication & Authorization Flow',
    category: 'Flows',
    description: 'Complete authentication state machine with role-based access control.',
    direction: 'TB',
    nodes: [
      // Initial States
      {
        id: 'initial',
        data: { label: '🌐 Initial State\nNo session' },
        style: { ...STYLES.state, width: 200, height: 60 },
        position: { x: 400, y: 0 },
        type: 'input'
      },
      {
        id: 'unauthenticated',
        data: { label: '👤 Unauthenticated\nPublic access only' },
        style: { ...STYLES.state, width: 200, height: 80 },
        position: { x: 400, y: 100 }
      },

      // Authentication Actions
      {
        id: 'login-action',
        data: { label: '🔑 Login Attempt\nEmail + Password' },
        style: { ...STYLES.action, width: 200 },
        position: { x: 200, y: 200 }
      },
      {
        id: 'register-action',
        data: { label: '📝 Register Attempt\nCreate new account' },
        style: { ...STYLES.action, width: 200 },
        position: { x: 600, y: 200 }
      },
      {
        id: 'forgot-password',
        data: { label: '🔓 Forgot Password\nReset flow' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 400, y: 200 }
      },

      // Authentication States
      {
        id: 'email-verification',
        data: { label: '📧 Email Verification\nPending confirmation' },
        style: { ...STYLES.warning, width: 200 },
        position: { x: 600, y: 300 }
      },
      {
        id: 'authenticated',
        data: { label: '✅ Authenticated\nSession active' },
        style: { ...STYLES.success, width: 200, height: 80 },
        position: { x: 400, y: 400 }
      },

      // Role-based States
      {
        id: 'merchant-role',
        data: { label: '👨‍💼 Merchant Role\nStore owner access' },
        style: { ...STYLES.frontend, width: 200, height: 100 },
        position: { x: 100, y: 500 }
      },
      {
        id: 'customer-role',
        data: { label: '👥 Customer Role\nStore shopper access' },
        style: { ...STYLES.frontend, width: 200, height: 100 },
        position: { x: 400, y: 500 }
      },
      {
        id: 'admin-role',
        data: { label: '👑 Admin Role\nPlatform management' },
        style: { ...STYLES.frontend, width: 200, height: 100 },
        position: { x: 700, y: 500 }
      },

      // Specific Views
      {
        id: 'merchant-dashboard',
        data: { label: '📊 Merchant Dashboard\nStore management' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 100, y: 650 }
      },
      {
        id: 'customer-storefront',
        data: { label: '🛍️ Customer Storefront\nBrowse & shop' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 400, y: 650 }
      },
      {
        id: 'admin-panel',
        data: { label: '⚙️ Admin Panel\nSystem configuration' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 700, y: 650 }
      },

      // Error States
      {
        id: 'auth-error',
        data: { label: '❌ Authentication Error\nInvalid credentials' },
        style: { ...STYLES.error, width: 200 },
        position: { x: 200, y: 300 }
      },
      {
        id: 'session-expired',
        data: { label: '⏰ Session Expired\nRefresh required' },
        style: { ...STYLES.warning, width: 180 },
        position: { x: 400, y: 750 }
      },
      {
        id: 'logout',
        data: { label: '🚪 Logout\nClear session' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 400, y: 850 },
        type: 'output'
      },
    ] as Node[],
    edges: [
      // Initial transitions
      createEdge('e1', 'initial', 'unauthenticated', 'App loaded', true),

      // Authentication flows
      createEdge('e2', 'unauthenticated', 'login-action', 'Click Login', true),
      createEdge('e3', 'unauthenticated', 'register-action', 'Click Register', true),
      createEdge('e4', 'unauthenticated', 'forgot-password', 'Forgot password', true),

      // Success paths
      createEdge('e5', 'login-action', 'authenticated', 'Valid credentials', true),
      createEdge('e6', 'register-action', 'email-verification', 'Account created', true),
      createEdge('e7', 'email-verification', 'authenticated', 'Email verified', true),
      createEdge('e8', 'forgot-password', 'authenticated', 'Password reset', true),

      // Error paths
      createEdge('e9', 'login-action', 'auth-error', 'Invalid credentials', true),
      createEdge('e10', 'auth-error', 'unauthenticated', 'Retry', true),

      // Role assignments
      createEdge('e11', 'authenticated', 'merchant-role', 'Role = merchant', true),
      createEdge('e12', 'authenticated', 'customer-role', 'Role = customer', true),
      createEdge('e13', 'authenticated', 'admin-role', 'Role = admin', true),

      // View routing
      createEdge('e14', 'merchant-role', 'merchant-dashboard', 'Navigate', true),
      createEdge('e15', 'customer-role', 'customer-storefront', 'Navigate', true),
      createEdge('e16', 'admin-role', 'admin-panel', 'Navigate', true),

      // Session management
      createEdge('e17', 'authenticated', 'session-expired', 'Token expired', true),
      createEdge('e18', 'session-expired', 'unauthenticated', 'Redirect to login', true),

      // Logout from all states
      createEdge('e19', 'merchant-dashboard', 'logout', 'Click logout', true),
      createEdge('e20', 'customer-storefront', 'logout', 'Click logout', true),
      createEdge('e21', 'admin-panel', 'logout', 'Click logout', true),
      createEdge('e22', 'logout', 'unauthenticated', 'Session cleared', true),
    ] as Edge[]
  },
  {
    id: 'flow-subscription',
    title: 'Subscription Management Flow',
    category: 'Flows',
    description: 'Complete subscription lifecycle from free trial to cancellation.',
    direction: 'LR',
    nodes: [
      {
        id: 'free-tier',
        data: { label: '🆓 Free Tier\nNew store creation' },
        style: { ...STYLES.state, width: 200 },
        position: { x: 0, y: 150 },
        type: 'input'
      },
      {
        id: 'trial-period',
        data: { label: '⏳ 14-Day Trial\nFull features access' },
        style: { ...STYLES.warning, width: 200 },
        position: { x: 250, y: 150 }
      },
      {
        id: 'upgrade-prompt',
        data: { label: '💡 Upgrade Prompt\nTrial ending soon' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 500, y: 50 }
      },
      {
        id: 'plan-selection',
        data: { label: '📋 Plan Selection\nCompare features' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 500, y: 150 }
      },
      {
        id: 'checkout-process',
        data: { label: '💳 Checkout Process\nBilling details' },
        style: { ...STYLES.frontend, width: 180 },
        position: { x: 750, y: 150 }
      },
      {
        id: 'payment-processing',
        data: { label: '⚡ Payment Processing\nXendit integration' },
        style: { ...STYLES.external, width: 180 },
        position: { x: 1000, y: 150 }
      },
      {
        id: 'active-subscription',
        data: { label: '✅ Active Subscription\nFull access' },
        style: { ...STYLES.success, width: 200 },
        position: { x: 1250, y: 150 }
      },
      {
        id: 'renewal-process',
        data: { label: '🔄 Auto-Renewal\nMonthly/Yearly' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 1500, y: 50 }
      },
      {
        id: 'past-due',
        data: { label: '⚠️ Past Due\nPayment failed' },
        style: { ...STYLES.warning, width: 180 },
        position: { x: 1500, y: 150 }
      },
      {
        id: 'suspended',
        data: { label: '⛔ Suspended\nGrace period ended' },
        style: { ...STYLES.error, width: 180 },
        position: { x: 1750, y: 150 }
      },
      {
        id: 'cancellation',
        data: { label: '🗑️ Cancelled\nUser initiated' },
        style: { ...STYLES.state, width: 180 },
        position: { x: 2000, y: 150 },
        type: 'output'
      },
      {
        id: 'downgrade-free',
        data: { label: '📉 Downgrade to Free\nLimited features' },
        style: { ...STYLES.state, width: 200 },
        position: { x: 2250, y: 150 },
        type: 'output'
      },
    ] as Node[],
    edges: [
      createEdge('e1', 'free-tier', 'trial-period', 'Start trial', true),
      createEdge('e2', 'trial-period', 'upgrade-prompt', 'Trial ending', true),
      createEdge('e3', 'upgrade-prompt', 'plan-selection', 'View plans', true),
      createEdge('e4', 'plan-selection', 'checkout-process', 'Select plan', true),
      createEdge('e5', 'checkout-process', 'payment-processing', 'Confirm payment', true),
      createEdge('e6', 'payment-processing', 'active-subscription', 'Payment success', true),
      createEdge('e7', 'active-subscription', 'renewal-process', 'Renewal date', true),
      createEdge('e8', 'renewal-process', 'active-subscription', 'Renewal success', true),
      createEdge('e9', 'renewal-process', 'past-due', 'Payment failed', true),
      createEdge('e10', 'past-due', 'active-subscription', 'Retry success', true),
      createEdge('e11', 'past-due', 'suspended', 'Grace period end', true),
      createEdge('e12', 'suspended', 'active-subscription', 'Payment received', true),
      createEdge('e13', 'suspended', 'cancellation', 'User cancels', true),
      createEdge('e14', 'active-subscription', 'cancellation', 'User cancels', true),
      createEdge('e15', 'cancellation', 'downgrade-free', 'End of period', true),
      createEdge('e16', 'trial-period', 'downgrade-free', 'Trial expired', true),
    ] as Edge[]
  },
  {
    id: 'data-pipeline',
    title: 'Analytics & Data Pipeline',
    category: 'Architecture',
    description: 'Real-time and batch data processing for analytics and reporting.',
    direction: 'LR',
    nodes: [
      {
        id: 'user-actions',
        data: { label: '🎯 User Actions\nClicks, views, purchases' },
        style: { ...STYLES.frontend, width: 200 },
        position: { x: 0, y: 150 },
        type: 'input'
      },
      {
        id: 'event-tracking',
        data: { label: '📊 Event Tracking\nClient-side analytics' },
        style: { ...STYLES.backend, width: 200 },
        position: { x: 250, y: 50 }
      },
      {
        id: 'real-time-stream',
        data: { label: '⚡ Real-time Stream\nWebSocket connections' },
        style: { ...STYLES.backend, width: 200 },
        position: { x: 250, y: 200 }
      },
      {
        id: 'raw-data-store',
        data: { label: '🗃️ Raw Data Store\nUnprocessed events' },
        style: { ...STYLES.database, width: 200 },
        position: { x: 500, y: 150 }
      },
      {
        id: 'batch-processing',
        data: { label: '🔁 Batch Processing\nNightly aggregation' },
        style: { ...STYLES.backend, width: 200 },
        position: { x: 750, y: 50 }
      },
      {
        id: 'aggregated-metrics',
        data: { label: '📈 Aggregated Metrics\nDaily/weekly summaries' },
        style: { ...STYLES.database, width: 200 },
        position: { x: 750, y: 200 }
      },
      {
        id: 'analytics-api',
        data: { label: '🔌 Analytics API\nREST endpoints' },
        style: { ...STYLES.backend, width: 200 },
        position: { x: 1000, y: 150 }
      },
      {
        id: 'dashboard-ui',
        data: { label: '📱 Dashboard UI\nCharts & reports' },
        style: { ...STYLES.frontend, width: 200 },
        position: { x: 1250, y: 150 },
        type: 'output'
      },
      {
        id: 'data-export',
        data: { label: '📤 Data Export\nCSV/Excel reports' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 1500, y: 150 },
        type: 'output'
      },
      {
        id: 'monitoring-alerts',
        data: { label: '🚨 Monitoring Alerts\nAnomaly detection' },
        style: { ...STYLES.warning, width: 200 },
        position: { x: 1000, y: 300 }
      },
    ] as Node[],
    edges: [
      createEdge('e1', 'user-actions', 'event-tracking', 'Track event', true),
      createEdge('e2', 'user-actions', 'real-time-stream', 'Live update', true),
      createEdge('e3', 'event-tracking', 'raw-data-store', 'Store raw data', true),
      createEdge('e4', 'real-time-stream', 'raw-data-store', 'Stream data', true),
      createEdge('e5', 'raw-data-store', 'batch-processing', 'Cron job', true),
      createEdge('e6', 'batch-processing', 'aggregated-metrics', 'Calculate metrics', true),
      createEdge('e7', 'aggregated-metrics', 'analytics-api', 'Serve data', true),
      createEdge('e8', 'real-time-stream', 'analytics-api', 'Real-time API', true),
      createEdge('e9', 'analytics-api', 'dashboard-ui', 'Fetch data', true),
      createEdge('e10', 'analytics-api', 'data-export', 'Export request', true),
      createEdge('e11', 'batch-processing', 'monitoring-alerts', 'Check anomalies', true),
      createEdge('e12', 'monitoring-alerts', 'dashboard-ui', 'Show alerts', true),
    ] as Edge[]
  },
  {
    id: 'order-lifecycle',
    title: 'Order Management Lifecycle',
    category: 'Flows',
    description: 'Complete order processing from creation to delivery and after-sales.',
    direction: 'LR',
    nodes: [
      {
        id: 'order-created',
        data: { label: '📝 Order Created\nCustomer checkout complete' },
        style: { ...STYLES.state, width: 200 },
        position: { x: 0, y: 150 },
        type: 'input'
      },
      {
        id: 'payment-pending',
        data: { label: '⏳ Payment Pending\nAwaiting confirmation' },
        style: { ...STYLES.warning, width: 200 },
        position: { x: 250, y: 150 }
      },
      {
        id: 'payment-verified',
        data: { label: '✅ Payment Verified\nFunds received' },
        style: { ...STYLES.success, width: 200 },
        position: { x: 500, y: 50 }
      },
      {
        id: 'order-processing',
        data: { label: '🔧 Order Processing\nInventory check, packaging' },
        style: { ...STYLES.state, width: 200 },
        position: { x: 500, y: 150 }
      },
      {
        id: 'ready-to-ship',
        data: { label: '📦 Ready to Ship\nPackage prepared' },
        style: { ...STYLES.state, width: 200 },
        position: { x: 750, y: 150 }
      },
      {
        id: 'shipped',
        data: { label: '🚚 Shipped\nTracking number assigned' },
        style: { ...STYLES.state, width: 200 },
        position: { x: 1000, y: 150 }
      },
      {
        id: 'out-for-delivery',
        data: { label: '🏍️ Out for Delivery\nWith courier' },
        style: { ...STYLES.state, width: 200 },
        position: { x: 1250, y: 150 }
      },
      {
        id: 'delivered',
        data: { label: '🏠 Delivered\nCustomer received' },
        style: { ...STYLES.success, width: 200 },
        position: { x: 1500, y: 50 }
      },
      {
        id: 'completed',
        data: { label: '🎉 Order Completed\nAll steps done' },
        style: { ...STYLES.success, width: 200 },
        position: { x: 1750, y: 150 },
        type: 'output'
      },
      // Alternative paths
      {
        id: 'payment-failed',
        data: { label: '❌ Payment Failed\nInsufficient funds' },
        style: { ...STYLES.error, width: 180 },
        position: { x: 250, y: 300 }
      },
      {
        id: 'cancelled',
        data: { label: '🗑️ Cancelled\nCustomer/merchant cancel' },
        style: { ...STYLES.error, width: 180 },
        position: { x: 500, y: 300 }
      },
      {
        id: 'refunded',
        data: { label: '💸 Refunded\nMoney returned' },
        style: { ...STYLES.state, width: 180 },
        position: { x: 750, y: 300 }
      },
      {
        id: 'return-requested',
        data: { label: '↩️ Return Requested\nCustomer initiated' },
        style: { ...STYLES.warning, width: 200 },
        position: { x: 1000, y: 300 }
      },
      {
        id: 'returned',
        data: { label: '📦 Returned\nItem received back' },
        style: { ...STYLES.state, width: 180 },
        position: { x: 1250, y: 300 }
      },
    ] as Node[],
    edges: [
      // Main flow
      createEdge('e1', 'order-created', 'payment-pending', 'Await payment', true),
      createEdge('e2', 'payment-pending', 'payment-verified', 'Payment success', true),
      createEdge('e3', 'payment-verified', 'order-processing', 'Start fulfillment', true),
      createEdge('e4', 'order-processing', 'ready-to-ship', 'Package ready', true),
      createEdge('e5', 'ready-to-ship', 'shipped', 'Hand to courier', true),
      createEdge('e6', 'shipped', 'out-for-delivery', 'In transit', true),
      createEdge('e7', 'out-for-delivery', 'delivered', 'Delivery success', true),
      createEdge('e8', 'delivered', 'completed', 'Order finalized', true),

      // Alternative paths
      createEdge('e9', 'payment-pending', 'payment-failed', 'Payment failed', true),
      createEdge('e10', 'payment-failed', 'order-created', 'Retry payment', true),
      createEdge('e11', 'payment-pending', 'cancelled', 'Timeout cancel', true),
      createEdge('e12', 'payment-verified', 'cancelled', 'Merchant cancel', true),
      createEdge('e13', 'order-processing', 'cancelled', 'Pre-ship cancel', true),
      createEdge('e14', 'cancelled', 'refunded', 'Process refund', true),
      createEdge('e15', 'delivered', 'return-requested', 'Customer request', true),
      createEdge('e16', 'return-requested', 'returned', 'Item returned', true),
      createEdge('e17', 'returned', 'refunded', 'Issue refund', true),
    ] as Edge[]
  },
  {
    id: 'feature-access',
    title: 'Feature Access Control Matrix',
    category: 'Architecture',
    description: 'Role-based and plan-based feature authorization system.',
    direction: 'TB',
    nodes: [
      {
        id: 'feature-request',
        data: { label: '🎯 Feature Request\nUser attempts action' },
        style: { ...STYLES.frontend, width: 250 },
        position: { x: 400, y: 0 },
        type: 'input'
      },
      {
        id: 'auth-check',
        data: { label: '🔐 Authentication Check\nIs user logged in?' },
        style: { ...STYLES.backend, width: 200 },
        position: { x: 400, y: 100 }
      },
      {
        id: 'role-check',
        data: { label: '👥 Role Check\nmerchant/customer/admin' },
        style: { ...STYLES.backend, width: 200 },
        position: { x: 200, y: 200 }
      },
      {
        id: 'plan-check',
        data: { label: '📋 Subscription Check\nFree/Basic/Pro/Business' },
        style: { ...STYLES.backend, width: 200 },
        position: { x: 600, y: 200 }
      },
      {
        id: 'feature-flag',
        data: { label: '🚩 Feature Flag Check\nA/B testing, rollouts' },
        style: { ...STYLES.backend, width: 200 },
        position: { x: 400, y: 300 }
      },
      {
        id: 'access-decision',
        data: { label: '⚖️ Access Decision\nAllow/Deny' },
        style: { ...STYLES.state, width: 200, height: 80, borderRadius: '50%' },
        position: { x: 400, y: 400 }
      },
      // Allowed paths
      {
        id: 'allow-execute',
        data: { label: '✅ Allow & Execute\nProceed with action' },
        style: { ...STYLES.success, width: 250 },
        position: { x: 200, y: 500 }
      },
      {
        id: 'success-result',
        data: { label: '🎉 Success Result\nFeature delivered' },
        style: { ...STYLES.success, width: 250 },
        position: { x: 200, y: 600 },
        type: 'output'
      },
      // Denied paths
      {
        id: 'deny-upgrade',
        data: { label: '📈 Upgrade Required\nShow pricing plans' },
        style: { ...STYLES.warning, width: 250 },
        position: { x: 600, y: 500 }
      },
      {
        id: 'deny-role',
        data: { label: '👑 Role Required\nInsufficient permissions' },
        style: { ...STYLES.error, width: 250 },
        position: { x: 600, y: 600 }
      },
      {
        id: 'deny-feature',
        data: { label: '🚧 Feature Unavailable\nBeta or disabled' },
        style: { ...STYLES.error, width: 250 },
        position: { x: 600, y: 700 }
      },
    ] as Node[],
    edges: [
      createEdge('e1', 'feature-request', 'auth-check', 'Check auth', true),
      createEdge('e2', 'auth-check', 'role-check', 'Authenticated', true),
      createEdge('e3', 'auth-check', 'deny-role', 'Unauthenticated', true),
      createEdge('e4', 'role-check', 'plan-check', 'Valid role', true),
      createEdge('e5', 'role-check', 'deny-role', 'Invalid role', true),
      createEdge('e6', 'plan-check', 'feature-flag', 'Valid plan', true),
      createEdge('e7', 'plan-check', 'deny-upgrade', 'Plan limit', true),
      createEdge('e8', 'feature-flag', 'access-decision', 'All checks passed', true),
      createEdge('e9', 'access-decision', 'allow-execute', 'Allow', true),
      createEdge('e10', 'access-decision', 'deny-feature', 'Deny', true),
      createEdge('e11', 'allow-execute', 'success-result', 'Execute action', true),
      createEdge('e12', 'deny-upgrade', 'feature-request', 'Retry after upgrade', true),
      createEdge('e13', 'deny-role', 'feature-request', 'Retry different role', true),
      createEdge('e14', 'deny-feature', 'feature-request', 'Feature unavailable', true),
    ] as Edge[]
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design Strategy',
    category: 'Components',
    description: 'Multi-device layout adaptation and component behavior.',
    direction: 'LR',
    nodes: [
      {
        id: 'device-detection',
        data: { label: '📱 Device Detection\nUser agent & screen size' },
        style: { ...STYLES.backend, width: 250 },
        position: { x: 0, y: 200 },
        type: 'input'
      },
      {
        id: 'mobile-view',
        data: { label: '📲 Mobile (<640px)\nSmartphones' },
        style: { ...STYLES.frontend, width: 200, height: 120 },
        position: { x: 300, y: 0 }
      },
      {
        id: 'tablet-view',
        data: { label: '📱 Tablet (640-1024px)\nTablets, small laptops' },
        style: { ...STYLES.frontend, width: 200, height: 120 },
        position: { x: 300, y: 200 }
      },
      {
        id: 'desktop-view',
        data: { label: '💻 Desktop (>1024px)\nLarge screens' },
        style: { ...STYLES.frontend, width: 200, height: 120 },
        position: { x: 300, y: 400 }
      },
      // Mobile features
      {
        id: 'mobile-nav',
        data: { label: '🍔 Hamburger Menu\nSlide-out navigation' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 550, y: 0 }
      },
      {
        id: 'stack-layout',
        data: { label: '📱 Single Column\nVertical stacking' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 550, y: 60 }
      },
      {
        id: 'touch-optimized',
        data: { label: '👆 Touch Targets\n48px minimum' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 550, y: 120 }
      },
      // Tablet features
      {
        id: 'tablet-nav',
        data: { label: '📋 Collapsible Sidebar\nExpand/collapse navigation' },
        style: { ...STYLES.action, width: 200 },
        position: { x: 550, y: 200 }
      },
      {
        id: 'two-column',
        data: { label: '📊 Two Column Grid\nSidebar + content' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 550, y: 260 }
      },
      {
        id: 'responsive-table',
        data: { label: '📋 Responsive Tables\nHorizontal scroll' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 550, y: 320 }
      },
      // Desktop features
      {
        id: 'desktop-nav',
        data: { label: '📌 Fixed Sidebar\nAlways visible' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 550, y: 400 }
      },
      {
        id: 'multi-column',
        data: { label: '🏢 Multi-column Layout\nComplex grids' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 550, y: 460 }
      },
      {
        id: 'full-features',
        data: { label: '✨ Full Feature Set\nAll UI components' },
        style: { ...STYLES.action, width: 180 },
        position: { x: 550, y: 520 }
      },
      // Output
      {
        id: 'rendered-ui',
        data: { label: '🎨 Rendered UI\nOptimized experience' },
        style: { ...STYLES.success, width: 250 },
        position: { x: 800, y: 200 },
        type: 'output'
      },
    ] as Node[],
    edges: [
      // Device detection
      createEdge('e1', 'device-detection', 'mobile-view', 'Mobile detected', true),
      createEdge('e2', 'device-detection', 'tablet-view', 'Tablet detected', true),
      createEdge('e3', 'device-detection', 'desktop-view', 'Desktop detected', true),

      // Mobile adaptations
      createEdge('e4', 'mobile-view', 'mobile-nav', 'Navigation', true),
      createEdge('e5', 'mobile-view', 'stack-layout', 'Layout', true),
      createEdge('e6', 'mobile-view', 'touch-optimized', 'Interaction', true),

      // Tablet adaptations
      createEdge('e7', 'tablet-view', 'tablet-nav', 'Navigation', true),
      createEdge('e8', 'tablet-view', 'two-column', 'Layout', true),
      createEdge('e9', 'tablet-view', 'responsive-table', 'Components', true),

      // Desktop adaptations
      createEdge('e10', 'desktop-view', 'desktop-nav', 'Navigation', true),
      createEdge('e11', 'desktop-view', 'multi-column', 'Layout', true),
      createEdge('e12', 'desktop-view', 'full-features', 'Features', true),

      // All paths to rendered UI
      createEdge('e13', 'mobile-nav', 'rendered-ui', 'Render', true),
      createEdge('e14', 'stack-layout', 'rendered-ui', 'Render', true),
      createEdge('e15', 'touch-optimized', 'rendered-ui', 'Render', true),
      createEdge('e16', 'tablet-nav', 'rendered-ui', 'Render', true),
      createEdge('e17', 'two-column', 'rendered-ui', 'Render', true),
      createEdge('e18', 'responsive-table', 'rendered-ui', 'Render', true),
      createEdge('e19', 'desktop-nav', 'rendered-ui', 'Render', true),
      createEdge('e20', 'multi-column', 'rendered-ui', 'Render', true),
      createEdge('e21', 'full-features', 'rendered-ui', 'Render', true),
    ] as Edge[]
  },
  {
    id: 'analysis',
    title: 'Architecture Analysis & Recommendations',
    category: 'Analysis',
    description: 'Comprehensive analysis of current architecture with improvement recommendations.',
    content: [
      "🎯 CURRENT STRENGTHS:",
      "• Clean Architecture with clear separation of concerns",
      "• Full TypeScript implementation with strict typing",
      "• Scalable design using Repository pattern and Supabase",
      "• Modern stack (Next.js 16, React 19, Tailwind CSS)",
      "• Comprehensive documentation and type safety",
      "• Built-in authentication and authorization",
      "• Real-time capabilities with Supabase",
      "",
      "📈 AREAS FOR IMPROVEMENT:",
      "• Testing Strategy: Needs comprehensive Unit & Integration Tests",
      "• Caching Layer: Missing Redis or similar for performance",
      "• Error Tracking: Requires integration with Sentry/Bugsnag",
      "• Performance Optimization: Lazy loading and code splitting needed",
      "• Monitoring: Real-time application performance monitoring",
      "• Backup Strategy: Automated database backups",
      "• Security Audit: Regular security assessments",
      "• CDN Optimization: Better static asset delivery",
      "",
      "🚀 RECOMMENDED UPGRADES:",
      "1. Testing: Implement Jest + React Testing Library",
      "2. Caching: Add Redis for session and API caching",
      "3. Monitoring: Integrate Datadog or New Relic",
      "4. Performance: Implement React.lazy() for route splitting",
      "5. Security: Add rate limiting and DDoS protection",
      "6. Analytics: Enhanced user behavior tracking",
      "7. DevOps: CI/CD pipeline optimization",
      "8. Database: Read replicas for scaling",
      "",
      "📊 SCALABILITY METRICS:",
      "• Current scale: 50K+ stores, 500K+ products",
      "• Target scale: 1M+ stores, 10M+ products",
      "• Database optimization needed at 100K+ concurrent users",
      "• Consider sharding strategy for multi-tenant data",
      "",
      "🔧 TECHNICAL DEBT:",
      "• Legacy code cleanup required",
      "• Dependency updates pending",
      "• Documentation gaps in API endpoints",
      "• Need for more comprehensive error handling"
    ]
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization Strategy',
    category: 'Architecture',
    description: 'Comprehensive performance optimization techniques and strategies.',
    direction: 'TB',
    nodes: [
      {
        id: 'performance-goals',
        data: { label: '🎯 Performance Goals\nCore Web Vitals targets' },
        style: { ...STYLES.state, width: 250 },
        position: { x: 400, y: 0 },
        type: 'input'
      },
      {
        id: 'frontend-optimizations',
        data: { label: '📱 Frontend Optimizations\nClient-side performance' },
        style: { ...STYLES.frontend, width: 300, height: 50 },
        position: { x: 200, y: 100 },
        type: 'group'
      },
      {
        id: 'image-optimization',
        data: { label: '🖼️ Image Optimization\nWebP, lazy loading, CDN' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'frontend-optimizations',
        extent: 'parent',
        position: { x: 50, y: 60 }
      },
      {
        id: 'code-splitting',
        data: { label: '📦 Code Splitting\nRoute-based chunking' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'frontend-optimizations',
        extent: 'parent',
        position: { x: 50, y: 120 }
      },
      {
        id: 'bundle-optimization',
        data: { label: '⚡ Bundle Optimization\nTree shaking, minification' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'frontend-optimizations',
        extent: 'parent',
        position: { x: 50, y: 180 }
      },
      {
        id: 'backend-optimizations',
        data: { label: '⚙️ Backend Optimizations\nServer-side performance' },
        style: { ...STYLES.backend, width: 300, height: 50 },
        position: { x: 600, y: 100 },
        type: 'group'
      },
      {
        id: 'database-optimization',
        data: { label: '🗄️ Database Optimization\nIndexes, queries, caching' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'backend-optimizations',
        extent: 'parent',
        position: { x: 50, y: 60 }
      },
      {
        id: 'api-optimization',
        data: { label: '🔌 API Optimization\nGraphQL, pagination, batching' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'backend-optimizations',
        extent: 'parent',
        position: { x: 50, y: 120 }
      },
      {
        id: 'caching-strategy',
        data: { label: '💾 Caching Strategy\nRedis, CDN, browser cache' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'backend-optimizations',
        extent: 'parent',
        position: { x: 50, y: 180 }
      },
      {
        id: 'infrastructure-optimizations',
        data: { label: '🏗️ Infrastructure Optimizations\nHosting & deployment' },
        style: { ...STYLES.external, width: 300, height: 50 },
        position: { x: 400, y: 350 },
        type: 'group'
      },
      {
        id: 'cdn-config',
        data: { label: '🌐 CDN Configuration\nGlobal edge caching' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'infrastructure-optimizations',
        extent: 'parent',
        position: { x: 50, y: 60 }
      },
      {
        id: 'serverless-functions',
        data: { label: '⚡ Serverless Functions\nEdge computing' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'infrastructure-optimizations',
        extent: 'parent',
        position: { x: 50, y: 120 }
      },
      {
        id: 'monitoring-metrics',
        data: { label: '📊 Monitoring & Metrics\nPerformance tracking' },
        style: { ...STYLES.action, width: 200 },
        parentNode: 'infrastructure-optimizations',
        extent: 'parent',
        position: { x: 50, y: 180 }
      },
      {
        id: 'performance-results',
        data: { label: '📈 Performance Results\nMeasured improvements' },
        style: { ...STYLES.success, width: 250 },
        position: { x: 400, y: 550 },
        type: 'output'
      },
    ] as Node[],
    edges: [
      createEdge('e1', 'performance-goals', 'frontend-optimizations', 'Define targets', true),
      createEdge('e2', 'performance-goals', 'backend-optimizations', 'Define targets', true),
      createEdge('e3', 'performance-goals', 'infrastructure-optimizations', 'Define targets', true),
      createEdge('e4', 'frontend-optimizations', 'performance-results', 'Implement', true),
      createEdge('e5', 'backend-optimizations', 'performance-results', 'Implement', true),
      createEdge('e6', 'infrastructure-optimizations', 'performance-results', 'Implement', true),
      createEdge('e7', 'image-optimization', 'code-splitting', '→', true),
      createEdge('e8', 'code-splitting', 'bundle-optimization', '→', true),
      createEdge('e9', 'database-optimization', 'api-optimization', '→', true),
      createEdge('e10', 'api-optimization', 'caching-strategy', '→', true),
      createEdge('e11', 'cdn-config', 'serverless-functions', '→', true),
      createEdge('e12', 'serverless-functions', 'monitoring-metrics', '→', true),
    ] as Edge[]
  }
];