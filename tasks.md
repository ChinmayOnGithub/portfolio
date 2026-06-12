# Portfolio Streamlining Tasks

## Data Consolidation & UI Cleanup

### ✅ Completed Tasks
- [x] Delete resume_project_template.md (not needed)
- [x] Created comprehensive GPU K8s research paper in constants.ts
- [x] Remove "Read Architecture & Docs" button from Projects UI
- [x] Fix project links - now pointing directly to papers
- [x] Added technical papers for all projects (Stremora, VerifyHub, Compresso)
- [x] Made project titles clickable links to papers
- [x] Added "Read Technical Paper" link in project metadata
- [x] Updated CGPA in Education section from 8.37 to 8.49
- [x] Removed skill badges from Education section (DSA, OS, etc.)
- [x] Made search bar collapsible in Projects section with vintage styling
- [x] Added company logos (Qualys, WLUG) to Experience section
- [x] Added Walchand logo to Education section
- [x] Fixed About section width to match other sections when skills hidden
- [x] Added paperUrl property to all projects in data.ts
- [x] Cleaned up unused imports (Building2, Badge, theme variables)
- [x] Optimized Projects component logic for paper URL mapping
- [x] Added exact publication dates for all papers (not just month/year)

### 🐛 Discovered UI Bugs (Proposed Fixes)
- [x] **Dropdown Popover Outside Click / Escape Dismissal Bug** (Aa Options dropdown doesn't close on click-outside or pressing Escape)
- [x] **Next.js Hydration Double-Render Progress Bar Flicker** (Progress bar restarts from 0% on client-side hydration mount)
- [x] **Sticky Left TOC Sidebar Overlap / Truncation Bug** (Left TOC sidebar overlaps main reading text on viewports under 1440px and truncates long titles with '...')

### 🚧 High Priority UX Improvements
- [ ] **Paper Reading Experience Enhancements**
  - [x] Add reading progress indicator for long papers
  - [ ] Implement reading time estimation display
  - [x] Add "Table of Contents" navigation for papers
  - [ ] Include paper download as PDF functionality
  - [ ] Add social sharing buttons for papers

- [ ] **Search & Discovery Improvements**
  - [ ] Add paper search functionality (separate from projects)
  - [ ] Implement tag-based filtering for papers
  - [ ] Add "Related Papers" suggestions
  - [ ] Include paper citation format generator
  - [ ] Add paper metrics (views, reading time analytics)

- [ ] **Navigation & Accessibility**
  - [ ] Add breadcrumb navigation for papers
  - [ ] Implement keyboard shortcuts for paper navigation
  - [x] Add "Back to Top" floating button on long papers
  - [ ] Include paper printing optimization (CSS print styles)
  - [ ] Add focus management for screen readers

### 🎨 Visual & Interactive Enhancements
- [ ] **Vintage Library Experience**
  - [ ] Add paper "bookmarking" functionality
  - [ ] Implement reading history/recently viewed papers
  - [ ] Create paper "collections" or "binders"
  - [ ] Add vintage paper texture overlays
  - [ ] Include subtle page turn animations

- [ ] **Content Enhancement**
  - [ ] Add author bio section for each paper
  - [ ] Include paper revision history/changelog
  - [ ] Add inline image zoom functionality
  - [ ] Implement code block syntax highlighting
  - [ ] Add paper comments/annotations system

- [ ] **Performance & Technical**
  - [ ] Implement lazy loading for paper content
  - [ ] Add paper content caching strategies
  - [ ] Include offline reading capability (PWA)
  - [ ] Add paper content search within text
  - [ ] Implement SEO optimization for papers

### 🔮 Future Feature Ideas
- [ ] **Advanced Reading Features**
  - [ ] Dark/Light/Sepia reading modes (already exists in design.md)
  - [ ] Font size adjustment controls
  - [ ] Reading speed tracking and analytics
  - [ ] Paper comparison tool (side-by-side)
  - [ ] Export paper as different formats (PDF, EPUB, etc.)

- [ ] **Community & Sharing**
  - [ ] Paper discussion threads
  - [ ] Peer review system
  - [ ] Paper collaboration tools
  - [ ] Academic citation tracking
  - [ ] Integration with academic platforms (ResearchGate, etc.)

- [ ] **Analytics & Insights**
  - [ ] Reading pattern analytics
  - [ ] Popular sections highlighting
  - [ ] Time spent per section tracking
  - [ ] Paper engagement metrics
  - [ ] Reader journey mapping

### 🔄 Code Optimization Done
- [x] Removed unused imports in Experience.tsx (Building2)
- [x] Removed unused imports in Education.tsx (Badge) 
- [x] Removed unused theme variables (isDark, theme) where not needed
- [x] Simplified Projects component paperId mapping logic
- [x] Added consistent paperUrl to all projects in data.ts
- [x] Proper TypeScript interface consistency
- [x] Updated all papers with exact publication dates

### 📅 Implementation Priority
**Phase 1 (Next Sprint)**: Paper reading enhancements, ToC, progress indicator
**Phase 2 (Future)**: Search improvements, bookmarking, collections  
**Phase 3 (Advanced)**: Community features, analytics, advanced reading modes

### 📝 Notes
- Focus on maintaining vintage library aesthetic in all improvements
- Ensure accessibility compliance for all new features
- Keep performance optimized for mobile devices
- Consider offline-first approach for core reading functionality

### 📋 Proposed Changes
1. **Single Source of Truth**: Use only constants.ts for all project/paper data
2. **Papers-First Approach**: Convert projects to papers with detailed technical content
3. **Simplified Navigation**: Direct links to papers instead of separate project pages
4. **Clean UI**: Remove redundant buttons and simplify project display

### 🎯 Goal
- Remove data duplication
- Streamline user experience 
- Focus on technical papers/blog content
- Maintain all existing content (GPU project, Stremora, VerifyHub, Compresso)

### 📝 Notes
- Keep all existing project content but present as papers
- GPU K8s project should be prominently featured
- Maintain vintage library design aesthetic
- All links should work correctly