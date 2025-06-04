# Ecomply Design System

## Typography

### Font Family
- **Primary Font**: JetBrains Mono
- **Fallback**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

### Typography Hierarchy

#### Headings
- **H1 (Hero)**: `text-5xl font-bold` (80px equivalent)
- **H2 (Section Headers)**: `text-2xl font-bold` (32px equivalent)
- **H3 (Card Titles)**: `text-xl font-semibold` (24px equivalent)
- **H4 (Subsection)**: `text-lg font-semibold` (20px equivalent)
- **H5 (Component Labels)**: `text-base font-medium` (16px equivalent)

#### Body Text
- **Large Body**: `text-xl` (20px equivalent)
- **Body**: `text-base` (16px equivalent)
- **Small Body**: `text-sm` (14px equivalent)
- **Caption**: `text-xs` (12px equivalent)

#### Font Weights
- **Light**: `font-light` (300)
- **Regular**: `font-normal` (400)
- **Medium**: `font-medium` (500)
- **Semibold**: `font-semibold` (600)
- **Bold**: `font-bold` (700)

### Usage Guidelines
- Use JetBrains Mono for all text to maintain technical credibility
- Maintain consistent line heights for readability
- Use appropriate font weights to establish hierarchy
- Ensure adequate contrast ratios for accessibility

## Iconography

### Icon Library
- **Primary**: Lucide React Icons
- **Style**: Outline/Stroke icons with 2px stroke width
- **Approach**: Semantic icons that clearly represent their function

### Icon Sizes
- **Small**: `w-4 h-4` (16px) - Used in buttons, inline elements
- **Medium**: `w-6 h-6` (24px) - Used in cards, headers
- **Large**: `w-8 h-8` (32px) - Used in feature sections
- **Extra Large**: `w-12 h-12` (48px) - Used in hero sections

### Icon Mapping
| Function | Icon | Usage |
|----------|------|-------|
| **Brand/Logo** | `ClipboardCheck` | Main application branding |
| **AI Analysis** | `Bot` | AI-powered features |
| **Compliance Scoring** | `BarChart3` | Analytics and scoring |
| **Philippine Focus** | `MapPin` | Location/region specific |
| **Terms of Service** | `FileText` | Document type indicator |
| **Privacy Policy** | `Lock` | Security/privacy indicator |
| **Suggestions** | `Lightbulb` | Recommendations and tips |
| **Restart/Refresh** | `RotateCcw` | Action to restart process |
| **Download** | `Download` | File download actions |
| **Email** | `Mail` | Communication features |
| **Warning/Alert** | `AlertTriangle` | Important notices |

### Color Usage for Icons
- **Primary**: `text-blue-600` - Main brand actions
- **Success**: `text-green-600` - Positive states
- **Warning**: `text-yellow-600` - Caution states
- **Error**: `text-red-600` - Error states
- **Neutral**: `text-gray-600` - Secondary actions

### Icon Guidelines
1. Always use semantic icons that clearly represent their function
2. Maintain consistent sizing within UI components
3. Use appropriate colors to convey meaning
4. Ensure icons are accessible with proper contrast
5. Include proper aria-labels for screen readers
6. Use consistent stroke width (2px) for visual harmony

## Implementation Status

### ✅ Completed
- [x] JetBrains Mono font integration
- [x] Icon library setup (Lucide React)
- [x] Landing page icon replacement
- [x] Results dashboard icon replacement
- [x] Typography hierarchy establishment
- [x] Icon sizing standards

### 🔄 In Progress
- [ ] Comprehensive style guide documentation
- [ ] Additional component icon audits
- [ ] Typography scale refinement

### 📋 Next Steps
- [ ] Landing page redesign (Phase 2)
- [ ] Dashboard enhancement (Phase 3)
- [ ] Color system implementation (Phase 4)
- [ ] Animation and interactions (Phase 4)
