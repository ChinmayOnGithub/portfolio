# Design System Documentation

## Overview
A vintage library-inspired design system that evokes the warmth and sophistication of a scholarly archive. The aesthetic combines retro elements with modern functionality, creating an immersive experience reminiscent of browsing through handcrafted ledgers and vintage academic papers.

## Design Philosophy
**"Scholarly Elegance with Archival Authenticity"**

- **Timeless Craftsmanship**: Every element should feel hand-crafted and purposeful, like artifacts from a distinguished academic library
- **Warm Intellectualism**: The design balances serious scholarly tone with approachable warmth
- **Tactile Authenticity**: Visual elements should suggest physical materials - paper, leather, aged wood, and vintage stamps
- **Focused Reading Experience**: Typography and layout prioritize comfortable, distraction-free content consumption

## Color Palette

### Dark Theme (Primary)
```css
/* Core Background Tones - Aged Library Wood */
--primary-bg: #1E1C19          /* Deep walnut wood */
--card-bg: #23201D             /* Aged mahogany */
--border: #443E38              /* Weathered oak trim */

/* Typography Hierarchy */
--text-primary: #E8E2D8        /* Cream parchment */
--text-secondary: #A68B6D      /* Faded ink */
--accent: #D0A060              /* Warm brass hardware */

/* Interactive States */
--badge-bg: rgba(208, 160, 96, 0.08)     /* Subtle brass wash */
--badge-border: rgba(208, 160, 96, 0.25) /* Brass outline */
```

### Light Theme (Alternative)
```css
/* Core Background Tones - Vintage Paper */
--primary-bg: #FAF6EE          /* Aged manila paper */
--card-bg: #F4EFE6             /* Cream ledger paper */
--border: #D3C2B0              /* Paper edge wear */

/* Typography Hierarchy */
--text-primary: #2B2620        /* Rich ink black */
--text-secondary: #8B6F47      /* Faded sepia ink */
--accent: #8C6239              /* Leather brown */

/* Interactive states */
--badge-bg: #EFEAD8            /* Warm clay-paper */
--badge-border: #DDD5C5        /* Paper crease lines */
```

### Reader Tone-Theme Palettes (Centralized)
To ensure seamless reading comfort, the reading view page and the sticky navigation header share a synchronized color palette resolved by `getReaderColors(bookTheme, isDark)` in `ReaderSettingsContext.tsx`:

| Theme | Mode | Background | Text | Border | Accent | Meta / Subtext | Card Background | Code Background |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Paper** | Light | `#F8F5EE` | `#2A2A2A` | `#DDD5C5` | `#8C6239` | `#8B6F47` | `rgba(241, 238, 230, 0.35)` | `#F1EEE6` |
| **Paper** | Dark | `#1E1C19` | `#E8E2D8` | `#443E38` | `#D0A060` | `#A68B6D` | `#23201D` | `#2D2824` |
| **Newspaper** | Light | `#EAE6DF` | `#1F1F1F` | `#B8B3A8` | `#3F3F3F` | `#555555` | `rgba(215, 210, 200, 0.4)` | `#DEDAD2` |
| **Newspaper** | Dark | `#1C1D1F` | `#E1E3E6` | `#3F4145` | `#A1A8B3` | `#888D96` | `#25272A` | `#2E3033` |
| **Sepia** | Light | `#F4ECD8` | `#332211` | `#D2C4A5` | `#5A3D28` | `#805A3C` | `rgba(235, 215, 180, 0.3)` | `#EAE0C7` |
| **Sepia** | Dark | `#1A1512` | `#EEDDC5` | `#4D3B2E` | `#D99B59` | `#A8805F` | `#241D19` | `#2E2520` |

## Typography System

### Font Families
- **Primary Serif**: `'Cormorant Garamond'` - For headings and formal elements
- **Body Serif**: `'Times New Roman', serif` - For readable content blocks
- **Interface Sans**: `'Inter'` - For UI elements and metadata
- **Monospace**: `'Share Tech Mono'` - For technical details and code

### Hierarchy Scale
```css
/* Display Headings - Strong presence */
h1: 2.5rem - 3.5rem | Cormorant Garamond Bold | line-height: 1.15
h2: 1.5rem - 2rem   | Cormorant Garamond Bold | line-height: 1.25

/* Content Typography - Comfortable reading */
Body: 0.875rem - 1rem | Times serif | line-height: 1.7
Meta: 0.75rem - 0.875rem | Inter | line-height: 1.5 | opacity: 0.85
```

## Component Design Language

### Card System - "Vintage Ledger Pages"
**Concept**: Each card represents a page from an archival ledger or filing system

**Structure**:
- **Outer Border**: 1.5px solid border with sharp, precise corners (no border-radius)
- **Inner Border**: Subtle inset border creating depth and authenticity
- **Corner Flourishes**: Small decorative corner elements suggesting age and craftsmanship
- **Drop Shadows**: Minimal, suggesting natural paper stack depth

**Implementation**:
```css
.vintage-card {
  border: 1.5px solid var(--border);
  border-radius: 2px; /* Minimal, just enough to soften */
  background: var(--card-bg);
  position: relative;
}

.vintage-card-inner-border {
  /* Creates the authentic double-border effect */
  position: absolute;
  top: 4px; left: 4px; right: 4px; bottom: 4px;
  border: 1px solid var(--border);
  opacity: 0.35;
}
```

### Button System - "Stamped Impressions"
**Concept**: Buttons mimic rubber stamps and embossed seals from vintage documents

**Primary Buttons** (Call-to-Action):
- **Stamped Effect**: Solid background with strong border and offset shadow
- **Typography**: Cormorant Garamond, bold, uppercase, letterspaced
- **Interaction**: "Press down" effect on hover (translate shadow)

**Secondary Buttons** (Navigation):
- **Ghost Style**: Transparent background with border emphasis
- **Subtle Hover**: Light background wash on interaction

**Implementation**:
```css
.vintage-btn {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1.5px solid var(--border);
  border-radius: 1px; /* Minimal rounding */
  box-shadow: 2px 2px 0px var(--border);
  transition: all 0.1s ease-in-out;
}

.vintage-btn:hover {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0px var(--border);
}
```

### Badge System - "Classification Tags"
**Concept**: Skills and categories appear as vintage filing system labels

**Style**:
- **Shape**: Slightly rounded rectangles (minimal border-radius)
- **Typography**: Cormorant Garamond, uppercase, tight letterspacing
- **Colors**: Muted tones matching the paper aesthetic
- **Shadow**: Subtle drop shadow suggesting layered paper

### Reader Navigation & Enhancements - "Immersive Reading"
**Concept**: Minimal utilities to assist reading long documents without compromising the distraction-free vintage paper focus.

**Components**:
- **Dynamic Scroll progress bar**: A thin `2px` progress indicator attached to the absolute bottom of the sticky header (`ProjectNavigation`). It dynamically matches the current resolved theme accent color and fills up as the user scrolls.
- **Floating Back to Top button**: A responsive floating button with the `ArrowUp` icon. Sits at `bottom-[88px] right-6` on mobile/tablet to stack neatly above the Mobile TOC button, and at `xl:bottom-8 xl:right-8` on larger screens.
- **Card Catalog Related list**: Replaces standard list views for related documents with card-catalog style boxes using the vintage double-border design, Cormorant title typography, and a subtle `-translate-y-0.5` hover micro-animation.

## Layout Principles

### Grid System - "Archival Organization"
- **Main Content**: 8-column span (primary ledger)
- **Sidebar**: 4-column span (reference materials)
- **Margins**: Generous whitespace suggesting paper margins
- **Vertical Rhythm**: Consistent spacing based on typography leading

### Spacing Scale
```css
/* Based on 0.25rem (4px) increments */
xs: 0.25rem  /* 4px  - tight element spacing */
sm: 0.5rem   /* 8px  - component padding */
md: 1rem     /* 16px - card padding */
lg: 1.5rem   /* 24px - section spacing */
xl: 3rem     /* 48px - major section breaks */
```

## Interactive Elements

### Hover States
- **Subtle Elevation**: Cards lift slightly (2-4px transform)
- **Color Transitions**: Smooth 200-300ms ease transitions
- **Shadow Enhancement**: Shadows deepen to suggest lifting from surface

### Focus Indicators
- **Accessibility Priority**: Strong, visible focus rings
- **Style**: 2px solid accent color with 2px offset
- **Consistency**: Applied to all interactive elements

### Loading States
- **Skeleton Screens**: Matching the vintage aesthetic with subtle animations
- **Progressive Loading**: Images fade in smoothly
- **State Feedback**: Clear indication of interactive element states

## Animation Guidelines

### Principles
- **Subtle & Meaningful**: Animations enhance understanding, never distract
- **Natural Physics**: Easing curves feel organic (ease-out, ease-in-out)
- **Performance First**: Hardware-accelerated properties only (transform, opacity)

### Timing
- **Micro-interactions**: 150-200ms (button presses, hovers)
- **Transitions**: 300-400ms (page changes, modal appearances)
- **Content Loading**: 500-800ms (smooth content reveals)

## Responsive Behavior

### Breakpoint Strategy
```css
mobile:  < 640px   /* Single column, stacked navigation */
tablet:  640-1024px /* Hybrid layout, collapsible sidebar */
desktop: > 1024px   /* Full dual-column with sticky elements */
```

### Mobile Adaptations
- **Navigation**: Hamburger menu with vintage styling
- **Typography**: Smaller scale but maintaining readability
- **Touch Targets**: Minimum 44px for comfortable interaction
- **Simplified Decorations**: Reduce ornamental elements on small screens

## Content Hierarchy

### Information Architecture
1. **Hero/Header**: Identity and primary action
2. **About**: Core professional narrative
3. **Featured**: Highlighted achievements
4. **Projects**: Detailed case studies
5. **Skills**: Technical competencies
6. **Experience**: Professional timeline
7. **Education**: Academic background

### Visual Hierarchy Tools
- **Size**: Larger elements draw attention first
- **Contrast**: High contrast for primary content
- **Color**: Accent color for interactive elements
- **Position**: Top-left priority in reading flow
- **Spacing**: Generous whitespace creates focus

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: 4.5:1 minimum for normal text, 3:1 for large text
- **Keyboard Navigation**: Full keyboard accessibility with visible focus
- **Screen Readers**: Semantic HTML with proper ARIA labels
- **Alternative Text**: Descriptive alt text for all images
- **Font Scaling**: Readable at 200% zoom without horizontal scroll

### Implementation Checklist
- [ ] Focus indicators on all interactive elements
- [ ] Semantic heading hierarchy (h1 → h6)
- [ ] Skip-to-main-content link
- [ ] ARIA labels for complex interactions
- [ ] Color-agnostic information conveyance

---

## Usage Guidelines

### Do's
✅ Maintain consistent spacing using the defined scale  
✅ Use serif fonts for content-heavy sections  
✅ Apply vintage decorative elements sparingly  
✅ Ensure sufficient contrast in both themes  
✅ Test interactions on multiple devices  

### Don'ts
❌ Mix modern flat design with vintage elements  
❌ Overuse decorative flourishes  
❌ Ignore accessibility requirements  
❌ Use bright, saturated colors  
❌ Apply heavy animations or transitions  

---

*This design system creates a cohesive, scholarly aesthetic that positions the portfolio as both professional and memorable, evoking the trustworthy craftsmanship of traditional academic institutions while maintaining modern usability standards.*