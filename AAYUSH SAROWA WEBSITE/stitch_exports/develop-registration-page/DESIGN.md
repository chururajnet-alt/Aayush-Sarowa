---
name: Cyber Luminary
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#4d8eff'
  on-tertiary-container: '#00285d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 4.5rem
    fontWeight: '800'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.75rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: '1.35'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-tech:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.04em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2.5rem
  margin: 1rem
  margin-md: 2.5rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

The design system establishes a high-caliber, forward-leaning digital portfolio interface tailored for senior engineering, systems architecture, and product design authority. The aesthetic pairs the mathematical precision of developer tools with the tailored luxury of modern studio aesthetics. It is designed to communicate technical mastery, architectural depth, and refined creative discretion.

The aesthetic philosophy centers on **Refined Neo-Glassmorphism and Cybernetic Precision**:
- **Deep Immersion:** Boundless canvas depths established through layered near-black tones and midnight navy backdrops.
- **Architectural Clarity:** Layouts structured by faint micro-grid reference lines and geometric alignments, avoiding visual noise.
- **Controlled Luminescence:** Accents emerge from directional glows, chromatic gradient edge borders, and targeted light-field highlights rather than loud flat colors.
- **Typographic Precision:** Functional contrast between ultra-clean modern geometric sans letterforms and technical monospaced telemetry data.

## Colors

The palette is engineered specifically for deep-contrast dark mode display environments, maintaining strict WCAG AAA contrast ratios for body content while retaining vivid neon accents.

### Canvas & Surface Hierarchy
- **Base Canvas (`#040711`):** The absolute background. An infinite, deep-space black-navy foundation.
- **Surface Layer 1 (`#090D16`):** Primary section surfaces and structural canvas elements.
- **Surface Layer 2 (`rgba(255, 255, 255, 0.03)`): Translucent card containers, panels, and interactive elements.
- **Surface Layer 3 (`rgba(255, 255, 255, 0.06)`): Hover elevations, focused elements, and active component wells.

### Luminescence & Accents
- **Electric Violet (`#8B5CF6`):** Primary action items, branding anchors, key state indicators, and linear gradient roots.
- **Cyber Cyan (`#06B6D4`):** Real-time status indicators, metric callouts, and secondary terminal highlights.
- **Prismatic Violet-Cyan Gradient:** Linear 135deg transitions from `#8B5CF6` to `#06B6D4`, utilized strictly for key borders, prominent display metrics, and hero CTAs.

### Text & Line Contrast
- **Text Primary (`#F8FAFC`):** Ultra-high clarity on all dark surfaces.
- **Text Secondary (`#94A3B8`):** Balanced slate for descriptive body copy, system information, and metadata.
- **Text Tertiary (`#64748B`):** Structural indicators, timestamps, deactivated states, and code comments.
- **Border Crisp (`rgba(255, 255, 255, 0.08)`): Base perimeter stroke on all interactive and glass containers.
- **Border Active (`rgba(139, 92, 246, 0.4)`):** Highlight stroke activated upon focus or hover states.

## Typography

The typographic hierarchy implements three coordinated typefaces:
1. **Plus Jakarta Sans (Headlines & Display):** Modern, wide-aperture geometry that grounds large headings with authority. Tight negative tracking gives headlines a sleek editorial rhythm.
2. **Inter (Body Copy & Extended Reading):** Neutral, hyper-legible sans-serif with neutral proportions that balances expressive headline moments with readability.
3. **JetBrains Mono (Metadata, Tags, Metrics & Code):** Distinctive developer-grade monospace dedicated to technical specs, version identifiers, chronological labels, and engineering badges.

Headlines larger than 32px automatically compress via mobile variant tokens to safeguard line ergonomics on narrower viewports.

## Layout & Spacing

The layout is built upon an 8pt base grid with a max-width content boundary of 1280px (`80rem`) centered within the viewport.

### Grid Framework
- **Desktop (1024px+):** 12-column fluid grid, `gutter-lg` (2.5rem), `margin-lg` (4rem).
- **Tablet (768px - 1023px):** 8-column fluid grid, `gutter` (1.5rem), `margin-md` (2.5rem).
- **Mobile (<768px):** 4-column fluid grid, `gutter` (1rem), `margin` (1rem).

### Atmospheric Micro-Grid Layer
A CSS-rendered micro-grid serves as structural backdrop: 32px by 32px grid units rendered using `linear-gradient` with `rgba(255, 255, 255, 0.02)` line weight of 1px, fading mask-like toward screen edges with a central radial vignette.

### Layout Rhythms
- Vertical page sections observe `space-3xl` (6rem) margins on desktop, compressing to `space-2xl` (4rem) on mobile.
- Nested component cards enforce strict internal padding using `space-lg` (1.5rem).

## Elevation & Depth

Visual hierarchy uses physical glass planes, refractive border highlights, and atmospheric luminescence rather than standard drop shadows.

### Elevation Architecture
- **Layer 0 (Canvas Base):** Solid background (`#040711`) overlaid with the subtle micro-grid pattern.
- **Layer 1 (Card & Content Blocks):** 
  - Fill: `rgba(255, 255, 255, 0.03)`
  - Backdrop Blur: `blur(16px)`
  - Border: 1px solid `rgba(255, 255, 255, 0.08)`
  - Shadow: None or `0 8px 32px -4px rgba(0, 0, 0, 0.5)`
- **Layer 2 (Floating Modals, Flyouts & Floating Nav):** 
  - Fill: `rgba(9, 13, 22, 0.8)`
  - Backdrop Blur: `blur(24px)`
  - Border: 1px solid `rgba(255, 255, 255, 0.12)`
  - Shadow: `0 20px 48px -8px rgba(0, 0, 0, 0.7)`

### Atmospheric Glow Mechanics
- **Primary Violet Glow:** `0 0 40px -10px rgba(139, 92, 246, 0.35)` applied to primary CTAs and active milestones.
- **Cyber Cyan Bloom:** `0 0 32px -8px rgba(6, 182, 212, 0.35)` used on key status indicators and focus interactions.
- **Ambient Canvas Glow:** Radial gradients situated under key portfolio projects: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.08), transparent 70%)`.

## Shapes

The design uses balanced, modern radii paired with tight, precise corners:
- Standard elements (Cards, input fields, container modules) take a `0.5rem` (`rounded-md`) to `0.75rem` (`rounded-lg`) corner radius.
- System Badges and Pills employ fully rounded profiles (`rounded-full` / `9999px`) to distinguish categorical tags from geometric content cards.
- Border stroke widths must never exceed `1px` to maintain a sharp, technical aesthetic.

## Components

### Buttons

#### 1. Cyber Luminary Action (Primary Button)
- **Background:** `rgba(139, 92, 246, 0.12)` overlaid with a faint internal gradient.
- **Border:** 1px solid transparent; uses `border-box` pseudo-element with a linear gradient from `#8B5CF6` to `#06B6D4`.
- **Text:** Plus Jakarta Sans 0.875rem, Weight 600, Color `#F8FAFC`.
- **Shadow/Glow:** `0 0 20px -4px rgba(139, 92, 246, 0.4)`.
- **Hover State:** Background shifts to `rgba(139, 92, 246, 0.22)`, glow expands to `0 0 30px 0px rgba(6, 182, 212, 0.5)`, transforms with a -1px vertical lift.

#### 2. Glass Subtle (Secondary Button)
- **Background:** `rgba(255, 255, 255, 0.04)`.
- **Border:** 1px solid `rgba(255, 255, 255, 0.1)`.
- **Text:** Inter 0.875rem, Weight 500, Color `#94A3B8`.
- **Hover State:** Border transitions to `rgba(255, 255, 255, 0.25)`, text illuminates to `#F8FAFC`.

### Badges & Category Tags
- **Structure:** Pill shape (`border-radius: 9999px`), padding: `0.25rem 0.75rem`.
- **Typography:** JetBrains Mono, 0.75rem, tracking `0.05em`, uppercase.
- **Palette Variants:**
  - *Tech Violet:* Background `rgba(139, 92, 246, 0.1)`, text `#C4B5FD`, border `rgba(139, 92, 246, 0.25)`.
  - *Status Cyan:* Background `rgba(6, 182, 212, 0.1)`, text `#67E8F9`, border `rgba(6, 182, 212, 0.25)`. Contains a pulsing `4px` indicator light.

### Project & Metric Cards
- **Container:** Glassmorphic plane (`rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(16px)`).
- **Border:** 1px solid `rgba(255, 255, 255, 0.08)`.
- **Hover Interaction:** The 1px perimeter border transitions dynamically to a localized gradient follow or solid `rgba(139, 92, 246, 0.3)`. An internal inset corner glow appears.

### Interactive Form Inputs
- **Base Style:** Background `rgba(4, 7, 17, 0.75)`, 1px border `rgba(255, 255, 255, 0.1)`, rounded `0.5rem`.
- **Typography:** Inter 0.9375rem, Color `#F8FAFC`, Placeholder `#64748B`.
- **Focus State:** 1px border `#06B6D4`, outline none, shadow `0 0 16px -2px rgba(6, 182, 212, 0.3)`.

### Code Blocks & Telemetry Displays
- **Enclosure:** Background `#070B14`, interior padding `1.25rem`, border `1px solid rgba(255, 255, 255, 0.06)`.
- **Window Controls:** 3 dots in the top-left corner (`#EF4444`, `#F59E0B`, `#10B981`) at 50% opacity.
- **Typography:** JetBrains Mono 0.8125rem with syntax-highlighted tokens in `#8B5CF6`, `#06B6D4`, and `#94A3B8`.