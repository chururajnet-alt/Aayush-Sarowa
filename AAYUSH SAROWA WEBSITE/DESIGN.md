# Aayush Sarowa Portfolio — Design System & Architecture Specification (DESIGN.md)

> **Design System Name:** Cyber Luminary  
> **Target Persona:** Aayush Sarowa — 12-year-old student prodigy (Class 7th, PM Shri Kendriya Vidyalaya, Churu; born Feb 10, 2014), systems engineer, algorithmic developer, and creator of **NovaChess 3.8 Pro** and **Super Tracker**.  
> **Aesthetic Philosophy:** Refined Neo-Glassmorphism, High-Density Telemetry & Cybernetic Precision.

---

## 1. Brand & Style Philosophy

The design system establishes a high-caliber, forward-leaning digital portfolio tailored for high-performance systems engineering, algorithmic engine optimization, and real-time distributed telemetry. It blends the mathematical precision of developer command-line interfaces and telemetry consoles with the refined luxury of modern glassmorphic web design.

### Core Visual Tenets
- **Deep Immersion & Canvas Layering:** Deep-space canvas foundations (`#040711` and `#0f131c`) with translucent layers, subtle linear micro-grids, and slow-drifting atmospheric radial glows in cyan and violet.
- **Architectural Clarity & Grid Discipline:** Strict 8pt spatial grid system inside a centralized `1280px` (`80rem`) viewport boundary with fluid responsive padding.
- **Controlled Luminescence:** Accents emerge from directional glows, chromatic gradient borders (`#8B5CF6` to `#06B6D4`), and interactive light-field highlights rather than flat background fills.
- **Typographic Triad:** Functional synergy between modern geometric display typography (**Plus Jakarta Sans**), hyper-legible body copy (**Inter**), and developer-grade monospace telemetry (**JetBrains Mono**).
- **Mechanical Sympathy:** Real-time metrics, node graphs, bitboard representations, and terminal logs integrated directly into content cards.

---

## 2. Color Palette & Design Tokens

The color palette is engineered specifically for deep-contrast dark mode display environments, maintaining strict **WCAG AAA** contrast ratios for text readability while providing vivid, luminescent cybernetic accents.

### 2.1 Canvas & Surface Elevation Tokens

| Token Name | Hex / RGBA Value | Usage & Visual Role |
| :--- | :--- | :--- |
| `background` / `surface` | `#0f131c` | Primary dark surface and body canvas background |
| `surface-dim` | `#0f131c` | Recessed canvas surface |
| `surface-bright` | `#353943` | Highest surface layer illumination |
| `surface-container-lowest`| `#0a0e17` | Deepest recessed elements, terminals, input fields, header base |
| `surface-container-low` | `#181b25` | Card backgrounds, bento modules, secondary containers |
| `surface-container` | `#1c1f29` | Standard glass cards, content panels |
| `surface-container-high` | `#262a34` | Hover elevation, badge backgrounds, table headers |
| `surface-container-highest`| `#31353f` | Floating overlays, modal borders, active states |
| `surface-variant` | `#31353f` | Progress bar tracks, muted dividers |
| `Base Canvas` | `#040711` | Absolute black-navy foundation canvas |
| `Surface Layer 1` | `#090D16` | Structural canvas elements |
| `Surface Layer 2` | `rgba(255, 255, 255, 0.03)` | Translucent glassmorphic card containers |
| `Surface Layer 3` | `rgba(255, 255, 255, 0.06)` | Hover elevations, focused component wells |

### 2.2 Primary Luminescence & Accent Tokens (Electric Violet)

| Token Name | Hex Value | Role & Applied Context |
| :--- | :--- | :--- |
| `primary` | `#d0bcff` | Primary neon highlight, brand headings, active nav state |
| `on-primary` | `#3c0091` | High-contrast text on solid primary elements |
| `primary-container` | `#a078ff` | Primary CTA container base, hero highlight root |
| `on-primary-container` | `#340080` | Foreground on primary containers |
| `inverse-primary` | `#6d3bd7` | Light-on-dark inversions |
| `primary-fixed` | `#e9ddff` | Static high-brightness violet |
| `primary-fixed-dim` | `#d0bcff` | Muted violet metric values |
| `on-primary-fixed` | `#23005c` | Text over fixed primary |
| `on-primary-fixed-variant` | `#5516be` | Secondary text over fixed primary |

### 2.3 Secondary Luminescence Tokens (Cyber Cyan)

| Token Name | Hex Value | Role & Applied Context |
| :--- | :--- | :--- |
| `secondary` | `#4cd7f6` | Real-time status indicators, live telemetry, interactive links |
| `on-secondary` | `#003640` | Text on solid secondary elements |
| `secondary-container` | `#03b5d3` | Secondary badge containers, button fills |
| `on-secondary-container` | `#00424e` | Text on secondary containers |
| `secondary-fixed` | `#acedff` | Vivid static cyan for badges |
| `secondary-fixed-dim` | `#4cd7f6` | Telemetry tags, sparklines |
| `on-secondary-fixed` | `#001f26` | Deep text over secondary |
| `on-secondary-fixed-variant`| `#004e5c` | Secondary text over secondary fixed |

### 2.4 Tertiary & System Tokens

| Token Name | Hex Value | Role & Applied Context |
| :--- | :--- | :--- |
| `tertiary` | `#adc6ff` | Deep logic accents, mathematics, visual computing tags |
| `on-tertiary` | `#002e6a` | Text on tertiary |
| `tertiary-container` | `#4d8eff` | Highlight icon backgrounds |
| `on-tertiary-container` | `#00285d` | Contrast text on tertiary containers |
| `tertiary-fixed` | `#d8e2ff` | High-light tertiary pill |
| `tertiary-fixed-dim` | `#adc6ff` | Metric stats callouts |
| `error` | `#ffb4ab` | Error states, terminal close dot |
| `on-error` | `#690005` | Text on error |
| `error-container` | `#93000a` | Error badge containers |
| `outline` | `#958ea0` | Muted borders, secondary labels, metadata tags |
| `outline-variant` | `#494454` | Structural grid lines, card perimeter strokes |
| `on-surface` | `#dfe2ef` | Primary reading copy, high-contrast headings |
| `on-surface-variant` | `#cbc3d7` | Descriptive body copy, subtitle text |
| `inverse-surface` | `#dfe2ef` | Inverted surface elements |
| `inverse-on-surface` | `#2c303a` | Inverted text elements |

### 2.5 Gradients & Atmospheric Lighting
- **Prismatic Violet-Cyan Gradient:** `linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)`
- **Hero Title Text Gradient:** `linear-gradient(to right, #d0bcff, #4cd7f6, #e9ddff)`
- **Atmospheric Ambient Glows:**
  * Drift Glow 1: Radial gradient `from-primary-container/20 via-secondary/15 to-transparent blur-[140px]`
  * Drift Glow 2: Radial gradient `bg-primary/20 blur-[130px]`
  * Drift Glow 3: Radial gradient `bg-secondary-container/15 blur-[140px]`
- **Cyber Grid Background:**
  ```css
  background-image: 
    linear-gradient(to right, rgba(76, 215, 246, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(160, 120, 255, 0.035) 1px, transparent 1px);
  background-size: 36px 36px;
  ```

---

## 3. Typography & Font Hierarchy

The typography system is loaded from Google Fonts:
1. **Plus Jakarta Sans** (Weights: `600`, `700`, `800`) — Display & Headlines
2. **Inter** (Weights: `400`, `500`, `600`) — Body text & extended narrative reading
3. **JetBrains Mono** (Weights: `400`, `500`, `600`) — Telemetry, code blocks, metrics, tags, and timestamps
4. **Material Symbols Outlined** (Variable axes: `opsz 20..48`, `wght 100..700`, `FILL 0..1`) — System iconography

### 3.1 Type Token Specifications

| Token | Font Family | Size | Weight | Line Height | Letter Spacing | Applied Elements |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Plus Jakarta Sans | `4.5rem` (72px) | `800` | `1.05` | `-0.04em` | Main hero titles (Desktop) |
| `display-hero-mobile`| Plus Jakarta Sans | `2.75rem` (44px)| `800` | `1.1` | `-0.03em` | Main hero titles (Mobile/Tablet) |
| `headline-lg` | Plus Jakarta Sans | `3.0rem` (48px) | `700` | `1.15` | `-0.03em` | Major section headers (Desktop) |
| `headline-lg-mobile` | Plus Jakarta Sans | `2.0rem` (32px) | `700` | `1.2` | `-0.02em` | Major section headers (Mobile) |
| `headline-md` | Plus Jakarta Sans | `2.0rem` (32px) | `600` | `1.25` | `-0.02em` | Card titles, project names, subsections |
| `headline-sm` | Plus Jakarta Sans | `1.375rem` (22px)| `600` | `1.35` | `-0.01em` | Feature headers, module titles |
| `body-lg` | Inter | `1.125rem` (18px)| `400` | `1.6` | `-0.01em` | Lead paragraphs, hero intro copy |
| `body-md` | Inter | `1.0rem` (16px) | `400` | `1.55` | `0em` | Standard descriptive copy, explanations |
| `body-sm` | Inter | `0.875rem` (14px)| `400` | `1.5` | `0em` | Card descriptions, footer notes, metadata |
| `label-tech` | JetBrains Mono | `0.8125rem` (13px)| `500` | `1.4` | `+0.04em` | Overlines, technical specs, latency tags |
| `label-code-sm` | JetBrains Mono | `0.75rem` (12px) | `500` | `1.3` | `+0.06em` | Monospace badges, status pills, code snippets |

---

## 4. Spacing, Grid & Corner Radii

### 4.1 Spacing Scale

| Token | CSS Value | Pixel Equivalent | Typical Usage |
| :--- | :--- | :--- | :--- |
| `space-xs` | `0.25rem` | 4px | Micro gaps, inline badge icons, tight padding |
| `space-sm` | `0.5rem` | 8px | Button inner padding, tag margins |
| `space-md` | `1.0rem` | 16px | Card internal padding, element gaps |
| `space-lg` | `1.5rem` | 24px | Large card padding, section sub-gaps |
| `space-xl` | `2.5rem` | 40px | Section row separation, hero spacing |
| `space-2xl` | `4.0rem` | 64px | Page section vertical padding (mobile/tablet) |
| `space-3xl` | `6.0rem` | 96px | Page section vertical padding (desktop) |
| `gutter` | `1.5rem` | 24px | Grid column spacing (mobile/tablet) |
| `gutter-lg` | `2.5rem` | 40px | Grid column spacing (desktop) |
| `margin` | `1.0rem` | 16px | Outer viewport margin (mobile) |
| `margin-md` | `2.5rem` | 40px | Outer viewport margin (tablet) |
| `margin-lg` | `4.0rem` | 64px | Outer viewport margin (desktop) |

### 4.2 Corner Radii

| Token | Value | Applied Elements |
| :--- | :--- | :--- |
| `rounded-sm` | `0.25rem` (4px) | Terminal dots, sparkline dots, micro indicators |
| `rounded-DEFAULT`| `0.25rem` (4px) | Default input controls, code tags |
| `rounded-lg` | `0.5rem` (8px) | Buttons, mini telemetry cards, nested inputs |
| `rounded-xl` | `0.75rem` (12px) | Standard cards, bento grid items, nav wrapper |
| `rounded-2xl` | `1.0rem` (16px) | Featured project frames, console cards, modal dialogs |
| `rounded-3xl` | `1.5rem` (24px) | Full-width CTA banners |
| `rounded-full` | `9999px` | Availability pills, status indicators, avatar circles |

---

## 5. Navigation Architecture & Global Shell

### 5.1 Fixed Header Shell
- **Height & Positioning:** `fixed top-0 left-0 right-0 z-50 h-20` (80px).
- **Background & Backdrop:** `bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]`.
- **Content Boundary:** Max-width `80rem` (1280px) centered with responsive padding (`px-margin md:px-margin-md lg:px-margin-lg`).
- **Brand Identity Block:**
  * Animated glowing icon / avatar with `drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]`.
  * Name: `Aayush Sarowa` (`font-headline-sm text-on-surface font-bold tracking-tight hover:text-primary transition-colors`).
  * Subtitle: `Systems & Architecture` (`font-label-code-sm text-secondary tracking-widest uppercase`).
- **Navigation Links (Desktop):**
  * Enclosure: Translucent floating pill container `bg-surface-container-lowest/70 border border-outline-variant/30 p-1.5 rounded-xl shadow-inner`.
  * Pages:
    1. **Home** (`index.html`)
    2. **About** (`about.html`)
    3. **Skills** (`skills.html`)
    4. **Projects** (`projects.html`)
    5. **Hobbies** (`hobbies.html`)
    6. **Contact** (`contact.html`)
  * Active Page State: `bg-surface-container-high text-primary font-semibold rounded-lg shadow-[0_0_20px_-4px_rgba(139,92,246,0.35)]`.
  * Inactive Link State: `text-on-surface-variant font-body-sm hover:text-on-surface hover:bg-surface-container-high transition-all rounded-lg`.
  * Interactive Hover Underline: Animated glowing cyan-to-violet line (`.nav-cyber-link::after`).
- **Header Actions:**
  * CTA Button: "Let's Connect" (`btn-cyber-interactive`, `bg-primary-container/20`, border `primary/30`, shadow, pulsing cyan dot).
  * Profile avatar circle: `w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(208,188,255,0.4)]` with user icon or headshot.
- **Mobile Navigation:**
  * Responsive hamburger menu icon (`menu` / `close` Material Symbols).
  * Sliding or expanding glassmorphic panel overlay (`bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-outline-variant/40`) revealing the 6 navigation items + "Let's Connect" action.

### 5.2 Global Footer Shell
- **Height & Layout:** `w-full bg-surface-container-lowest border-t border-outline-variant/20 shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-space-2xl mt-space-3xl`.
- **System Status Indicator:** Pulsing cyan dot with label `All Systems Operational // Available for select roles & collaborations` (`font-label-tech text-on-surface-variant`).
- **External Mesh Links:** GitHub, LinkedIn, X / Twitter, Read.cv (`font-label-tech text-on-surface-variant hover:text-secondary transition-colors`).
- **Legal & Copyright:** `© 2025 Aayush Sarowa. Engineered with mathematical precision & cybernetic clarity.` (`font-body-sm text-outline`).
- **Telemetry Tagline:** `LOC: 28.6139° N, 77.2090° E // REV: 4.8.2-PROD` (`font-label-code-sm text-outline`).

---

## 6. Page-by-Page Layouts & Component Inventories

### 6.1 Page 1: Home (`index.html`)

1. **Atmospheric Canvas:**
   - 3-point animated ambient radial glows (`animate-drift-1`, `animate-drift-2`, `animate-drift-3`).
   - Infinite linear micro-grid overlay (`cyber-grid` 36px x 36px).
2. **Hero Section:**
   - **Availability Pill:** `animate-float-slow` pill with pinging cyan indicator and text: `Age 12 • Class 7 • PM Shri KV Churu • Creator of NovaChess & Super Tracker`.
   - **Hero Display Headline:**  
     *Line 1:* "Building ideas into"  
     *Line 2:* "digital experiences." rendered in gradient violet-to-cyan (`animate-pulse-glow` and drop-shadow).
   - **Hero Lead Paragraph:** "Software engineer, systems architect, and digital product designer crafting robust, scalable applications and immersive interface paradigms at the intersection of performance, distributed resiliency, and mathematical aesthetics."
   - **Action Hub:**  
     * Primary CTA: "Explore My Work" (`btn-cyber-interactive`, explore icon).  
     * Secondary CTA: "Contact Me" (`btn-cyber-interactive`, terminal icon).  
     * Text Link: "Read Engineering Dossier" with animated bouncing arrow.
   - **Live Micro-Telemetry Bar:** Latency (`12ms global p99`), Uptime (`99.992% active`), Stack (`C++ // Rust // WASM // TS`).
3. **Glassmorphic Telemetry Console (Hero Right):**
   - Window bar with 3 traffic light dots + title `SYNAPTIC ANALYTICS // v4.8` + `LIVE KERNEL` badge.
   - **Interactive Laser Scanner Reticle:** Aayush's portrait frame with sweeping laser beam (`.scanner-beam`), prodigy badge, and school affiliation.
   - **Telemetry Gauges (3-column):**
     * CPU UTIL: `18.4%` with cyan progress meter.
     * THROUGHPUT: `4.8 GB/s` with violet progress meter.
     * P99 LAT: `12ms` with cyan progress meter.
   - **Terminal Log Snippet:** `$ kernel.wasm: simd_vectorization::ready (threads: 16) [200_OK]`.
4. **Architectural Pillars Ribbon:**
   - 4-column horizontal band:
     * *Pillar 01:* Distributed Systems (High-throughput microservices, Raft consensus).
     * *Pillar 02:* Engine Optimization (Low-latency bitboards, alpha-beta pruning, WASM).
     * *Pillar 03:* Real-Time Telemetry (IoT streaming, geofencing pipelines).
     * *Pillar 04:* Precision Design (Cybernetic glassmorphic aesthetics).
5. **Featured Engineering Works (Bento Showcase):**
   - Header with overline `FLAGSHIP ARCHITECTURES` and link "View All 14 Production Deployments".
   - *Feature 1:* **NovaChess 3.8 Pro** — Depth 26 plies, Transposition 256MB LRU, architecture inspection link.
   - *Feature 2:* **Super Tracker** — IoT fleet telemetry, preview image with hover zoom, live floating GPS bus pill (`Fleet Unit #84: On Route, ETA: 4m 12s`), 5,000 req/sec benchmark.
6. **Engineering Dossier (First Principles):**
   - 3 deep pillar cards:
     * `01 // EFFICIENCY`: Precision & Low Overheads (Target budget: `< 16.6ms / 60 FPS`).
     * `02 // CLARITY`: Cybernetic Glass Interfaces (Contrast: `WCAG AAA / 8.2:1`).
     * `03 // INTEGRITY`: Fault Tolerance & Healing (Circuit breaker: `AUTOMATED HALT`).
7. **Interactive Terminal Simulator & Core Stack Matrix:**
   - *Terminal Window:* `$ aayush --version --verbose`, `$ cat ./sys_capabilities.json` with JSON syntax highlighting, `$ curl -X POST https://api.sarowa.dev/v1/ping` with blinking cursor.
   - *Stack Matrix:* 3 detailed capability cards: C++ & WebAssembly (Master), Go & Distributed Services (Core), TypeScript / React / Tailwind (Advanced).
8. **Initiate Collaboration Callout Banner:**
   - Rounded-3xl card with dual ambient backdrops, headline "Initiate Next-Generation Collaboration", "Deploy a Message" and "Read Full Dossier & CV" buttons.

---

### 6.2 Page 2: About (`about.html`)

1. **Header & Biography Dossier:**
   - Overline: `// 01 // BIOGRAPHY & DOSSIER`, `// AGE: 12 (DOB: 10 FEB 2014)`, `7th Standard // PM Shri Kendriya Vidyalaya, Churu`.
   - Title: "Architectural Rigor Meets Creative Execution".
   - Biography lead: Aayush Sarowa is a 12-year-old student prodigy software engineer and systems architect from PM Shri Kendriya Vidyalaya, Churu (Grade 7).
   - Identity Badges: `Class 7th Student`, `Born Feb 10, 2014`, `PM Shri KV Churu`, `Creator of NovaChess & Super Tracker`.
   - Portrait display with holographic ambient gradient border and glass badge.
2. **Telemetry Metric Ribbon:**
   - 4 stats: Student & Age (`12 Yrs`), Telemetry Latency (`< 180ms`), IoT Packets Handled (`14.2M/mo`), Bitboard Ops (`1.8M/s`).
3. **Origins & Systems Engineering Path:**
   - Deep narrative describing early curiosity with hardware architectures, memory layout constraints, and bit-level transforms under Linux.
   - Building **NovaChess** (AVX2-vectorized bitboard engine, PVS, NNUE weights) and **Super Tracker** (transit telemetry pipeline).
   - Synthetic terminal window: `./engine --benchmark --depth 24 --threads 16` output logs.
4. **The Engineering Creed (3 Cards):**
   - `01 // LATENCY DETERMINISM`: Compute Close to the Metal.
   - `02 // RESILIENT DECOUPLING`: Fail-Safe Decentralized Flow.
   - `03 // CYBERNETIC ERGONOMICS`: Interface as Cognitive Extension.
5. **Technical Architecture Pillars (4 Cards):**
   - `SYS.ENGINE.01`: High-Performance Algorithmic Engines (SIMD AVX2 Movegen 128-bit vector meter, Null-move pruning 99.2%).
   - `SYS.TELEMETRY.02`: Real-Time Distributed Telemetry (Visual SVG pipeline: MQTT Broker → Redis Pub/Sub → Clients <180ms).
   - `SYS.CLOUD.03`: Modern Distributed Cloud & Microservices (K8s Cluster Mesh, Redis 7 Cluster Cache, gRPC Inter-Service).
   - `SYS.DESIGN.04`: Cyber-Aesthetic Design Engineering (Contrast 14.8:1 AAA, 8pt spatial system).
6. **Chronological Milestones & Trajectory:**
   - Vertical timeline with glowing line and status nodes:
     * `2024 — PRESENT`: Super Tracker v4 Enterprise Fleet Ingestion Pipeline (Go, Redis Pub/Sub, PostGIS, Docker).
     * `2023`: NovaChess 3.8 Pro: AVX2 Neural Bitboard Engine (C++20, SIMD Intrinsics, NNUE, UCI Protocol).
     * `2021 — 2022`: Competitive Algorithms & High-Frequency Event Mesh (Graph theory, lock-free queues, benchmarking).
7. **Beyond the Terminal (Bento Grid):**
   - 4 interest cards: Algorithmic Game Theory & Nash Equilibria, Cybernetic Telemetry, Autonomous Systems & Avionics, Minimalist Industrial Design (Braun, Teenage Engineering, SGI).
8. **Cryptographic & Professional Dossier:**
   - PGP Identity Card: Fingerprint `4B91 78C3 A201 EE84 95B2 119F 83CD 4721 A99C D005 38EF 451A 90FE` with interactive clipboard copy.
   - Download CV (PDF) button.
   - Direct Dispatch Box to contact page.

---

### 6.3 Page 3: Skills (`skills.html`)

1. **Header & System Status:**
   - Overline: `// 02 // CAPABILITIES & MASTERY`.
   - Kernel status: `POSIX / Linux x86_64 // STATE: CALIBRATED // SYS_EFFICIENCY: 99.4%`.
   - Title: "Technical Arsenal & Methodologies".
   - 3 Quick Stats: Lowest Latency (`8.4ms P99`), Uptime SLA (`99.99%`), Bit Ops / Sec (`1.84B`).
2. **Detailed Capabilities Matrix:**
   - **Category 1: Systems & Low-Level Engineering**
     * Applied context: GoChess 3.8 Pro (Alpha-Beta pruning, magic bitboards, WASM).
     * Skill bars: C++ (17/20) & Memory Safety (98%), Rust & Ownership Mechanics (92%), Bitboards & Math Optimization (95%), WebAssembly & Threads (94%).
     * Tags: Valgrind, Perf Profiling, gdb & lldb, Inline Assembly, Lock-Free Queues.
   - **Category 2: Real-Time Distributed Systems & IoT**
     * Scale badge: `50K MSG/S`.
     * Applied context: Super Tracker Fleet (MQTT broker bridge, PostGIS spatial indexing, Redis streams).
     * Metric cards: WebSockets/MQTT (96%), PostGIS & Spatio-Temporal (91%), Redis Pub/Sub & Queues (95%), Golang Concurrent Pipelines (90%), Node.js High-Throughput Cluster (94%).
   - **Category 3: Modern Web & Cross-Platform Frontend**
     * Cards: Next.js & SSR (Edge compute), TypeScript 5 (Strict AST typing), React Native (Native bridges & JSI), WebGL / Shaders (60+ FPS Canvas).
     * Skills tags: Tailwind CSS, Zustand, Recoil, WCAG 2.1 AAA, Framer Motion, Micro-Frontends.
3. **Cloud, Infrastructure & Telemetry (Right Column):**
   - Modules: Linux Kernel & Systemd, Docker & K8s Pods, AWS (ECS, Lambda, SQS), Prometheus / Grafana, Nginx / Reverse Proxies.
   - Terminal Telemetry Window: `$ kubectl get nodes -o wide` with simulated pod health.
   - Topologies & Consensus: Distributed Consensus (Raft), Microservice Event Choreography, Time-Series & Columnar Storage (ClickHouse/InfluxDB).
4. **AI Cluster & Real-Time Node Orchestration Showcase:**
   - System Architecture in Practice: Active Fleet Node Map.
   - Visual Architecture Frame with glowing telemetry HUD overlay (`12 NODES`, `98.8% Accuracy`, `15ms Latency`, `94% Efficiency`).
   - Comparative Benchmarks: Sub-8.4ms Budget, O(1) State Lookups, Zero Leak Tolerance.
5. **Engineering Philosophy & Workflows:**
   - 3 Workflow Protocols:
     * *Profiling-First Discipline:* Linux `perf` flamegraphs and Chrome Tracing.
     * *Deterministic TDD & Fuzzing:* LibFuzzer regression suites, 95%+ coverage.
     * *Zero-Dependency Mindset:* Mathematically sound native implementations.
6. **Execution Over Theory CTA Banner:** Links to Projects and Direct Dialogue.

---

### 6.4 Page 4: Projects (`projects.html`)

1. **Header & Live Telemetry KPI Bar:**
   - Overline: `// 03 // FEATURED WORK & CASE STUDIES`.
   - Title: "Selected Engineering Projects".
   - 4 Live KPIs: Active Projects (`14.prod`), Nodes Analyzed (`7.8M/s`), Telemetry Latency (`<350ms`), Test Coverage (`99.4%`).
2. **Flagship Case Study 1: NovaChess 3.8 Pro:**
   - Badges: `Flagship Neural Chess Engine`, `High-Performance Computing`, `Open Source // v3.8.4`.
   - High-resolution analysis board graphic with real-time HUD telemetry: `STOCKFISH 16 (BOT) v NovaChess 3.8 — Ply 38`, `EVAL: +1.48 CP`, `DEPTH: 34/41 PLY`, `HASH: 1,024 MB`.
   - Architecture narrative: 64-bit magic bitboards, ultra-quantized NNUE evaluation, SIMD AVX-512 and NEON vectorization intrinsics, Lazy SMP multi-threading (up to 64 virtual cores), PVS, LMR, Null-Move pruning.
   - WebAssembly module: Client-side 4.2M nodes/sec in browser without server dependencies.
   - Core Technology Stack: C++20, Rust Core, WebAssembly (WASM), PyTorch (NNUE Train), SIMD AVX2/AVX-512, TypeScript, Canvas 2D/WebGL.
   - Engine Telemetry & Specs Table: Throughput (`7,842,000 nodes/sec`), Search Ply (`34 base / 41 selective`), RAM (`<64 MB WASM / 8 GB CLI`), CCRL Rating (`3420 ELO +/- 18`), Movegen latency (`0.012 μs/ply`), NNUE Weights (`HalfKP_256x2-32-32`).
   - Position Evaluation Drift SVG sparkline chart (+1.48 CP over 100 plies).
   - Actions: View Source (GitHub), Launch Live Engine, Read Whitepaper, Engine Benchmarks.
3. **Flagship Case Study 2: Super Tracker (School Bus Telemetry System):**
   - Badges: `IoT Fleet Telemetry`, `Mission Critical Dispatch`, `Real-Time GIS`.
   - Operations screen preview with HUD overlay: `FLEET STATUS // BUS 21 (ROOSEVELT HIGH ROUTE)`, `SPEED: 38 km/h`, `STUDENTS: 28/32 ONBOARD`, `ETA: 7 MINS`.
   - Architecture narrative: Distributed microservice mesh, Go daemons & MQTT/EMQX brokers, CAN-bus diagnostics, RFID/NFC card taps, Kafka stream, PostGIS spatial polygons in sub-ms windows, 500-meter arrival rings, zero-knowledge privacy WebSocket tunnels.
   - Core Technology Stack: Go (Golang), Node.js, MQTT/EMQX, PostgreSQL/PostGIS, Redis Streams, React Native, Docker & Kubernetes.
   - Fleet Benchmarks Table: End-to-end latency (`< 350 ms P99`), Packet delivery uptime (`99.98%`), Geofence accuracy (`± 1.8 meters`), Concurrent active connections (`45,000 live nodes`), NFC check-in verification (`< 80 ms`), Battery telemetry drift (`< 1.2%`).
   - Route SVG telemetry visual: Stop 14 Elm St to Roosevelt High progress bar.
   - Actions: View Source (GitHub), Live Fleet Console, Fleet Architecture Spec, Security & Privacy Model.
4. **Secondary & Experimental Systems Grid (3 Cards):**
   - **Apex Interface Engine:** UI Runtime v2.1.0, token engine for financial & military dashboards, TypeScript, Tailwind Core, AST Parser, 482 stars.
   - **Synapse Grid Message Broker:** Distributed Systems, memory-mapped pub-sub bus with Raft consensus, 2.1M msg/sec, Rust, Tokio, gRPC, Protobuf, 1.2k stars.
   - **BitVortex Bitboard Inspector:** Visual Computing v1.4.0, real-time 64-bit integer mask visualizer, C++, WASM, HTML5 Canvas, 329 stars.
5. **Engineering Standards Banner & Collaboration CTA:**
   - Standards: Clean Code (Strict CI/CD Lint & Sanitizer), Performance First (Valgrind & Perf).
   - Dual action CTA: "Start a Conversation", "Explore All Repositories".

---

### 6.5 Page 5: Hobbies (`hobbies.html`)

1. **Header & Scholar Dossier:**
   - Overline: `// 05 // PASSIONS & PURSUITS`.
   - Title: "Beyond the Terminal: Hobbies & Creative Pursuits".
   - Scholar Dossier card: Aayush Sarowa, 12 Years Old • Class 7th • PM Shri Kendriya Vidyalaya, Churu • DOB: 10.02.2014 // Churu, Rajasthan.
2. **Telemetry Metrics Bar:**
   - Active Fields: `6 Disciplines`
   - Engine Analysis: `100+ Games` (Sicilian & Ruy Lopez)
   - Field Role: `Top-Order Bat` (Weekend KV Squad)
   - Visual Medium: `Acrylic & Ink` (Cybernetic Landscapes)
   - Math Engine: `Infinite` (Combinatorics & Proofs)
3. **Profile Spotlight Card:**
   - Portrait of Aayush with ambient glow backdrop, `#KV-7TH` badge.
   - Quote: *"The discipline forged on the cricket pitch and the chessboard directly writes the algorithms in my codebase."*
   - Badges: `PM Shri KV Grounds, Churu`, `Right-Hand Batsman`, `Discrete Geometry`.
4. **The 6 Foundational Passions (Bento Grid):**
   - **Hobby 01: Cricket & Team Athletics (`01 // KINETICS`):**
     * Role: Top-order batsman, KV Churu weekend squad, batting focus, field geometries, stamina under high-pressure overs.
     * Media: Action visual on turf with caption `KV Ground • Turf 01`.
   - **Hobby 02: Chess & Variant Analysis (`02 // TACTICS`):**
     * Tactical calculation 7 moves ahead, Sicilian Najdorf & Ruy Lopez, direct origin of **GoChess 3.8 Pro**.
     * Interactive visual: SVG 8x8 chessboard segment with piece glyphs (♞, ♟, ♝) and ply depth evaluation telemetry.
   - **Hobby 03: Painting & Concept Art (`03 // CANVAS`):**
     * Acrylic and watercolors on paper, cyberpunk midnight rain skylines, color theory and light fields that inform glassmorphic UI aesthetics.
   - **Hobby 04: Football & Playmaking (`04 // KINETICS`):**
     * Central midfielder, spatial sprinting, predictive passing corridors, reading trajectories under aerobic tempo.
   - **Hobby 05: Voracious Reading (`05 // INTELLECT`):**
     * Sci-fi, astrophysics, computing pioneers.
     * Reading log module: *The Master Algorithm* (Completed), *Cosmos* (Reading), *Feynman's Lectures on Physics* (Queued).
   - **Hobby 06: Discrete Mathematics (`06 // LOGIC`):**
     * Number theory, recurrence relations, combinatorics, bitboard popcount formulas (`BB &= BB - 1`).
5. **24-Hour Energy Matrix: Scholar & Creator:**
   - 4-phase day schedule:
     * *Morning (06:00 - 07:15):* Physical Priming (warmup, footwork, mental math).
     * *School Hours:* 07:30 - 13:45 IST @ PM Shri KV Churu.
     * *Afternoon (14:30 - 16:30):* Canvas & Deep Read (painting studies, literature immersion).
     * *Late Afternoon (16:45 - 18:30):* Pitch Athletics (cricket nets, KV turf batting, midfield play).
     * *Evening Session (19:30 - 21:30):* Chess & Code Lab (Go / C++ backend, GoChess engine heuristics).
6. **Cognitive Transfer Architecture Matrix:**
   - Explains how physical kinetics, chess combinatorics, art spatial balance, and math proofs systematically map into low-latency software architecture.

---

### 6.6 Page 6: Contact (`contact.html`)

1. **Header & Global Status Strip:**
   - Overline: `// 04 // GET IN TOUCH & COLLABORATION`.
   - Title: "Initiate Collaboration & Direct Line".
   - Telemetry strip: Interface Node (`SECURE-TLS // 256-BIT`), Signal Latency (`< 14ms Global Mesh`), Protocol Dispatch (`ACTIVE // AUTO-QUEUE`), Status Response (`ETA ~24H Turnaround`).
2. **Left Column: Direct Channels & Cryptographic Verification:**
   - **Direct Transmission Line:** `aayush.sarowa@example.com` with one-click clipboard copy button.
   - **Allocation Registry:** Q1-Q2 bandwidth 85% engaged, next availability slot May 2025.
   - **Operational Coordinates:** Primary Base Timezone `UTC+05:30 (IST)`, **live ticking JavaScript clock** displaying exact local time (`liveUtcClock`), coverage overlap for PST/EST/CET.
   - **Decentralized Mesh Profiles:** GitHub, LinkedIn, X (Twitter), Read.cv.
   - **Cryptographic Identity:** RSA 4096 / PGP Fingerprint (`4A8F 9C21 B03E E8D7 6120 5FA2 D910 88C4 FB27 33AA`) with copy button.
3. **Right Column: Cyber Contact Transmission Terminal:**
   - Terminal window frame: Traffic light dots + `DISPATCH_TERMINAL.EXE // v4.2.8` + pinging `SOCKET_READY` indicator.
   - Interactive Form:
     * Identity / Entity input (`senderName`).
     * Signal Return Address input (`senderEmail`).
     * Inquiry Protocol Select (`inquiryType`): GoChess 3.8 Pro Engine Licensing, Super Tracker IoT & Fleet Telemetry Solutions, Full-Time Systems Role, Advisory / Consulting, General Inquiry.
     * Estimated Capital / Scope Tier: 4 clickable selection buttons (`< $10k`, `$10k - $25k`, `$25k - $60k+`, `Retainer`).
     * Telemetry Payload Textarea (`messageBody`) with live character counter (`0 / 2000`).
     * Submit Button: "Send Transmission" (`north_east` icon) with dynamic pending state and confirmation panel.
   - Terminal status console: `TLS 1.3 handshake verified // 0 packet anomalies // PORT: 8080/TCP`.
4. **Collaboration Playbook & FAQ (4 Interactive Modules):**
   - `FAQ // 01`: What types of roles or engineering projects do you take on?
   - `FAQ // 02`: How do you approach engine optimization and low-latency systems?
   - `FAQ // 03`: Can Super Tracker be integrated into existing school transit systems?
   - `FAQ // 04`: What is your availability for remote vs. on-site collaboration?
5. **Real-Time Telemetry Callout & SVG Sparkline:**
   - Real-time engine telemetry summary with checkmarks.
   - Custom SVG glowing cybernetic line chart with pulsing nodes, 100% online synapse buffer status (`99.98% THROUGHPUT`).

---

## 7. Reusable Component Specifications

### 7.1 Buttons

#### 1. Cyber Luminary Action (Primary Button)
```css
.btn-cyber-interactive {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  background: rgba(160, 120, 255, 0.2);
  border: 1px solid rgba(208, 188, 255, 0.4);
  color: #dfe2ef;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 0 25px -2px rgba(160, 120, 255, 0.45);
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.25s ease, 
              background-color 0.25s ease;
}
.btn-cyber-interactive::after {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.22), transparent);
  transform: translateX(-150%) skewX(-20deg);
  pointer-events: none;
}
.btn-cyber-interactive:hover::after {
  animation: shimmerSweep 1.1s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-cyber-interactive:hover {
  background: rgba(160, 120, 255, 0.35);
  border-color: rgba(76, 215, 246, 0.6);
  box-shadow: 0 0 35px 2px rgba(76, 215, 246, 0.5);
  transform: translateY(-2px);
}
```

#### 2. Glass Subtle (Secondary Button)
```css
.btn-glass-subtle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  background: rgba(38, 42, 52, 0.6);
  border: 1px solid rgba(73, 68, 84, 0.4);
  color: #cbc3d7;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.25s ease;
}
.btn-glass-subtle:hover {
  color: #dfe2ef;
  background: #31353f;
  border-color: rgba(149, 142, 160, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(149, 142, 160, 0.2);
}
```

### 7.2 Interactive Cards (`.interactive-card`)
- **Base Style:** Translucent background (`bg-surface-container-low/80` or `rgba(255, 255, 255, 0.03)`), backdrop blur (`blur-xl` or `blur(16px)`), perimeter border `1px solid rgba(255, 255, 255, 0.08)` or `border-outline-variant/30`, shadow `0 20px 48px -8px rgba(0, 0, 0, 0.7)`.
- **Hover Transition:**
  ```css
  .interactive-card {
    transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), 
                box-shadow 0.35s ease, 
                border-color 0.35s ease;
  }
  .interactive-card:hover {
    transform: translateY(-4px) scale(1.012);
    box-shadow: 0 16px 36px -10px rgba(139, 92, 246, 0.28), 
                0 0 25px -4px rgba(76, 215, 246, 0.22);
    border-color: rgba(76, 215, 246, 0.45);
  }
  ```

### 7.3 Badges & Category Tags
- **Structure:** Pill shape (`rounded-full`), padding `0.25rem 0.75rem` (`py-1 px-3`), font `JetBrains Mono` 12px (`text-label-code-sm`), uppercase tracking.
- **Tech Violet:** `bg-primary/10 text-primary border border-primary/20`.
- **Status Cyan (Live):** `bg-secondary/10 text-secondary border border-secondary/30` with embedded `animate-ping` pulsing dot.
- **Surface Outline:** `bg-surface-container-high text-outline border border-outline-variant/30`.

### 7.4 Form Controls & Inputs
- **Container:** `bg-surface-container-lowest/90` with subtle inner shadow `shadow-inner`.
- **Border:** 1px border `rgba(73, 68, 84, 0.4)` (`outline-variant/40`).
- **Focus State:** Background elevates to `bg-surface-container-high`, border transitions to `#4cd7f6` (Cyber Cyan) with glow `0 0 16px -2px rgba(6, 182, 212, 0.3)`.
- **Placeholder:** Text `#958ea0` (`text-outline`).
- **Typography:** `Inter` 16px / `body-md` for text entry; `JetBrains Mono` 12px for labels and counters.

### 7.5 Terminal Console & Code Blocks
- **Enclosure:** Background `#070b14` or `surface-container-lowest`, 1px border `rgba(255, 255, 255, 0.08)`.
- **Window Controls:** 3 dots in the top-left corner (`#EF4444`, `#F59E0B`, `#10B981`) at 70% opacity.
- **Typography:** `JetBrains Mono` `0.8125rem` (`label-tech`) with syntax tokens in cyan (`#4cd7f6`), violet (`#d0bcff`), and slate (`#958ea0`).
- **Cursor:** Animated terminal block cursor (`animate-terminal-cursor`).

---

## 8. Desktop and Mobile Layout Specifications

### 8.1 Breakpoint System

| Breakpoint | Viewport Width | Grid Structure | Margins & Gutters | Typography Adjustments |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile (`< 768px`)** | 320px – 767px | 4-column fluid stack | `margin: 1rem (16px)`, `gutter: 1rem (16px)` | Display Hero: `2.75rem`, Headline LG: `2.0rem` |
| **Tablet (`768px – 1023px`)** | 768px – 1023px | 8-column fluid grid | `margin-md: 2.5rem (40px)`, `gutter: 1.5rem (24px)` | Display Hero: `3.5rem`, Headline LG: `2.5rem` |
| **Desktop (`1024px+`)** | 1024px – 1280px+ | 12-column grid | `margin-lg: 4.0rem (64px)`, `gutter-lg: 2.5rem (40px)` | Display Hero: `4.5rem`, Headline LG: `3.0rem` |

### 8.2 Layout Adaptations by Viewport

1. **Navigation:**
   - *Desktop:* Horizontal floating glass pill bar in header with active indicator.
   - *Mobile:* Hamburger menu button reveals full-screen slide-down glass drawer with high tap target ergonomics (minimum 48px height per link).
2. **Hero Split:**
   - *Desktop:* 7-column editorial headline & CTAs + 5-column interactive telemetry command console.
   - *Mobile:* Stacked vertically with headline first, CTAs full width, followed by the telemetry console.
3. **Bento Grids (Projects, Hobbies, Skills):**
   - *Desktop:* 12-column bento grids (e.g. 7-col/5-col split for projects, 3-col grid for hobbies).
   - *Mobile:* Single-column card stack with horizontal swipe indicators where appropriate.
4. **Data Tables & Telemetry Strips:**
   - *Desktop:* 4-column or 5-column horizontal metric strip.
   - *Mobile:* 2-column compact grid with responsive font downsizing.
5. **Touch Ergonomics:**
   - All interactive buttons and scope tier selectors have a minimum tap area of `44px x 44px` on mobile viewports.
   - Touch scrolling uses native hardware acceleration (`-webkit-overflow-scrolling: touch`).

---

## 9. Keyframe Animations & Micro-Interactions

```css
/* Ambient Drifts for Background Lighting */
@keyframes ambientDrift1 {
  0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.16; }
  50% { transform: translate(-45%, 25px) scale(1.08); opacity: 0.28; }
}
@keyframes ambientDrift2 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.12; }
  50% { transform: translate(30px, -20px) scale(1.15); opacity: 0.24; }
}
@keyframes ambientDrift3 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
  50% { transform: translate(-25px, 20px) scale(1.12); opacity: 0.22; }
}

/* Floating Elements */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-7px); }
}
@keyframes floatDelayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Grid & Scanline Shimmers */
@keyframes cyberGridMove {
  0% { background-position: 0 0; }
  100% { background-position: 36px 36px; }
}
@keyframes scanline {
  0% { transform: translateY(-100%); opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { transform: translateY(180%); opacity: 0; }
}
@keyframes shimmerSweep {
  0% { transform: translateX(-120%) skewX(-20deg); }
  100% { transform: translateX(220%) skewX(-20deg); }
}
@keyframes terminalBlink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
@keyframes glowPulse {
  0%, 100% { text-shadow: 0 0 12px rgba(76, 215, 246, 0.4), 0 0 24px rgba(160, 120, 255, 0.2); }
  50% { text-shadow: 0 0 20px rgba(76, 215, 246, 0.8), 0 0 35px rgba(160, 120, 255, 0.45); }
}

/* Accessibility: Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Asset Directory & Image Registry

| Asset Name | Local / Remote Source | Page & Usage |
| :--- | :--- | :--- |
| `Aayush cool.jpg` | Local file in workspace root | Aayush Sarowa portrait headshot / Hero console / About dossier |
| Brand Logo | Google Cloud Storage SVG/PNG | Header branding anchor (violet glow) |
| GoChess 3.8 Pro Dashboard | Stitch exported media | Projects Page & Home Page Featured Showcase |
| Super Tracker Telemetry UI | Stitch exported media | Projects Page & Home Page Featured Showcase |
| AI Cluster Architecture Map | Stitch exported media | Skills Page system architecture showcase |
| Cricket Action Graphic | Stitch exported media | Hobbies Page — Hobby 01 (Turf 01) |
| Painting / Artwork Graphic | Stitch exported media | Hobbies Page — Hobby 03 (Acrylic Cityscape) |
| Football Action Graphic | Stitch exported media | Hobbies Page — Hobby 04 (Midfield play) |
| Aayush Portrait (Black & White) | Stitch exported media | Hobbies Page — Scholar Profile Spotlight |

---

## 11. Preserved Fidelity & Implementation Guidelines

When building the multi-page portfolio website:
1. **Preserve exact Stitch design fidelity:** Colors, spacing, typography, gradients, glassmorphism, HUD telemetry overlays, and animations must be preserved exactly as specified.
2. **Unified Navigation & State:** All 6 pages (`index.html`, `about.html`, `skills.html`, `projects.html`, `hobbies.html`, `contact.html`) must share identical header and footer shells with correct active navigation state markers.
3. **Interactive JavaScript Features:**
   - Active PGP fingerprint one-click clipboard copying with visual confirmation.
   - Live UTC+05:30 (IST) ticking system clock on the Contact page.
   - Interactive budget / scope tier selection buttons.
   - Contact form validation with character counter (`0 / 2000`) and simulated packet transmission feedback.
   - Mobile responsive navigation drawer toggle.
4. **Performance & Clean Standards:**
   - Vanilla CSS + Tailwind tokens matching the specifications.
   - Fast page loads, semantic HTML5, descriptive meta tags, and WCAG AAA compliance.
