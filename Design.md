# Design System - Radical Prospérité

## Table des Matières
1. [Palette de Couleurs](#palette-de-couleurs)
2. [Typographie](#typographie)
3. [Espacements](#espacements)
4. [Ombres et Profondeur](#ombres-et-profondeur)
5. [Bordures et Arrondis](#bordures-et-arrondis)
6. [Composants](#composants)
7. [Animations](#animations)
8. [Mode Sombre](#mode-sombre)
9. [Responsive Design](#responsive-design)

---

## Palette de Couleurs

### Couleurs Principales (Tricolore Français)
```css
/* Bleu Français */
--french-blue: #003399;
--french-blue-light: #4d7fbf;
--accent-blue-dark: rgba(0, 51, 153, 0.3);
--accent-blue-light: rgba(0, 51, 153, 0.15);

/* Rouge Français */
--french-red: #c8102e;
--french-red-light: #ff4d6d;
--accent-red-dark: rgba(200, 16, 46, 0.3);
--accent-red-light: rgba(200, 16, 46, 0.15);

/* Blanc */
--white: #ffffff;
--white-transparent: rgba(255, 255, 255, 0.95);
```

### Couleurs de Fond
```css
/* Mode Clair */
--bg-light: #f8f9fa;
--text-light: #1a1a2e;

/* Mode Sombre */
--bg-dark: #0a0a14;
--text-dark: #ffffff;
```

### Dégradés
```css
/* Dégradé Principal */
background: linear-gradient(135deg, #003399 0%, #c8102e 100%);

/* Dégradé Titre */
background: linear-gradient(135deg, #003399 0%, #1a1a2e 50%, #c8102e 100%);

/* Dégradé Transparent */
background: linear-gradient(135deg, rgba(0, 51, 153, 0.15) 0%, rgba(200, 16, 46, 0.15) 100%);
```

---

## Typographie

### Polices
```css
/* Titres Principaux */
font-family: 'Ethnocentric', 'Orbitron', sans-serif;

/* Titres Secondaires */
font-family: 'Orbitron', sans-serif;

/* Corps de Texte */
font-family: 'Montserrat', sans-serif;
```

### Tailles de Titres
| Élément | Mobile | Tablette | Desktop |
|---------|--------|----------|---------|
| H1 Hero | 2rem | 3rem | 4rem |
| H1 Page | 1.875rem | 2.5rem | 3rem |
| H2 Section | 1.25rem | 1.5rem | 1.875rem |
| H3 Card | 1.125rem | 1.25rem | 1.5rem |

### Poids de Police
- **Bold**: 700 (titres)
- **Semibold**: 600 (sous-titres, boutons)
- **Medium**: 500 (navigation, labels)
- **Regular**: 400 (corps de texte)

---

## Espacements

### Marges Standards
```css
/* Marges Latérales - Page */
--margin-mobile: 1rem;      /* 16px */
--margin-tablet: 2rem;      /* 32px */
--margin-desktop: 3rem;     /* 48px */
--margin-wide: 4rem;        /* 64px */

/* Marges Latérales - Navbar */
--navbar-margin-mobile: 0.75rem;
--navbar-margin-tablet: 2.5rem;
--navbar-margin-desktop: 4rem;
--navbar-margin-wide: 6rem;
```

### Padding
```css
/* Cards */
--card-padding-mobile: 1rem;
--card-padding-tablet: 1.25rem;
--card-padding-desktop: 1.5rem;

/* Boutons */
--btn-padding-x: 1rem - 1.5rem;
--btn-padding-y: 0.5rem - 0.75rem;

/* Sections */
--section-padding-y: 2rem - 4rem;
```

### Gaps
```css
/* Grid */
--grid-gap-mobile: 1rem;
--grid-gap-tablet: 1.25rem;
--grid-gap-desktop: 1.5rem;

/* Flex Items */
--flex-gap-small: 0.5rem;
--flex-gap-medium: 1rem;
--flex-gap-large: 1.5rem;
```

---

## Ombres et Profondeur

### Ombres Externes (Outer Shadows)
```css
/* Légère */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Moyenne */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

/* Forte */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

/* Avec Couleur */
box-shadow: 
  0 8px 24px rgba(0, 51, 153, 0.1),
  0 4px 12px rgba(200, 16, 46, 0.08);
```

### Ombres Internes (Inner Shadows - Effet 3D)
```css
/* Effet Relief - Mode Clair */
box-shadow: 
  inset 0 1px 2px rgba(255, 255, 255, 0.5),
  inset 0 -1px 2px rgba(0, 0, 0, 0.05);

/* Effet Relief - Mode Sombre */
box-shadow: 
  inset 0 1px 2px rgba(255, 255, 255, 0.1),
  inset 0 -1px 2px rgba(0, 0, 0, 0.15);

/* Combinaison Complète */
box-shadow: 
  0 4px 16px rgba(0, 51, 153, 0.1),
  0 2px 8px rgba(0, 0, 0, 0.08),
  inset 0 1px 2px rgba(255, 255, 255, 0.5),
  inset 0 -1px 2px rgba(0, 0, 0, 0.05);
```

### Niveaux de Profondeur
| Niveau | Usage | Ombre |
|--------|-------|-------|
| 0 | Fond de page | Aucune |
| 1 | Cards, Sections | Légère |
| 2 | Hover states | Moyenne |
| 3 | Navbar, Footer, Modals | Forte |

---

## Bordures et Arrondis

### Border Radius
```css
/* Petits Éléments */
--radius-small: 8px;

/* Boutons, Tags */
--radius-medium: 12px;

/* Cards */
--radius-large: 16px;
--radius-xl: 20px;

/* Sections, Navbar */
--radius-2xl: 24px;

/* Boutons Ronds */
--radius-full: 9999px;
```

### Bordures
```css
/* Standard */
border: 1px solid rgba(0, 51, 153, 0.15);

/* Accent */
border: 2px solid rgba(0, 51, 153, 0.3);

/* Mode Sombre */
border: 1px solid rgba(77, 127, 191, 0.25);
```

---

## Composants

### Boutons

#### Bouton Principal
```css
.btn-primary {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  box-shadow: 
    0 4px 15px rgba(0, 51, 153, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.4),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 6px 25px rgba(200, 16, 46, 0.5),
    inset 0 1px 3px rgba(255, 255, 255, 0.5);
}
```

#### Bouton Secondaire
```css
.btn-secondary {
  background: transparent;
  border: 2px solid #003399;
  color: #003399;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
}
```

### Cards

#### Card Standard
```css
.card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%);
  border: 1px solid rgba(0, 51, 153, 0.15);
  border-radius: 20px;
  padding: 1.25rem;
  box-shadow: 
    0 8px 24px rgba(0, 51, 153, 0.08),
    0 4px 12px rgba(200, 16, 46, 0.06),
    inset 0 1px 2px rgba(255, 255, 255, 0.9),
    inset 0 -1px 2px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 20px 40px rgba(0, 51, 153, 0.15),
    inset 0 1px 3px rgba(255, 255, 255, 1);
}
```

#### Card Header
```css
.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  margin: 0 0.5rem 0.5rem;
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.06) 0%, rgba(200, 16, 46, 0.06) 100%);
  border-radius: 12px;
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.03);
}
```

### Icônes

#### Icon Wrapper
```css
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.2) 0%, rgba(200, 16, 46, 0.2) 100%);
  box-shadow: 
    0 3px 8px rgba(0, 51, 153, 0.12),
    inset 0 1px 2px rgba(255, 255, 255, 0.4),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1);
}

/* Icône avec dégradé */
.icon-wrapper svg {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Navbar

```css
.navbar {
  position: fixed;
  top: 0;
  z-index: 50;
  margin: 1rem 1.5rem - 6rem;
  border-radius: 24px;
  background: linear-gradient(135deg, 
    rgba(0, 51, 153, 0.95) 0%, 
    rgba(255, 255, 255, 0.95) 50%, 
    rgba(200, 16, 46, 0.95) 100%
  );
  background-size: 300% 300%;
  animation: tricolorFlow 20s ease-in-out infinite;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.25),
    0 4px 16px rgba(0, 51, 153, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
}
```

### Footer

```css
.footer {
  position: fixed;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(0, 51, 153, 0.95) 0%, 
    rgba(255, 255, 255, 0.95) 50%, 
    rgba(200, 16, 46, 0.95) 100%
  );
  box-shadow: 
    0 -8px 32px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
}
```

---

## Animations

### Transitions Standards
```css
/* Rapide (hover, focus) */
transition: all 0.2s ease;

/* Standard (interactions) */
transition: all 0.3s ease;

/* Lente (modals, pages) */
transition: all 0.5s ease;
```

### Animations Spéciales

#### Dégradé Tricolore
```css
@keyframes tricolorFlow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

#### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.02); }
}
```

#### Bandes Animées
```css
@keyframes moveBands {
  0% { transform: translate(0, 0); }
  100% { transform: translate(260px, 260px); }
}
```

---

## Mode Sombre

### Variables Dark Mode
```css
.dark {
  --bg-dark: #0a0a14;
  --text-dark: #ffffff;
  --french-blue-light: #4d7fbf;
  --french-red-light: #ff4d6d;
}
```

### Ajustements Cards
```css
.dark .card {
  background: linear-gradient(180deg, rgba(40, 40, 55, 0.95) 0%, rgba(25, 25, 38, 0.9) 100%);
  border-color: rgba(77, 127, 191, 0.25);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.08);
}
```

---

## Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 480px) { }

/* Small */
@media (max-width: 640px) { }

/* Medium (Tablet) */
@media (min-width: 641px) and (max-width: 1024px) { }

/* Large (Desktop) */
@media (min-width: 1025px) { }

/* Extra Large */
@media (min-width: 1280px) { }

/* 2XL */
@media (min-width: 1536px) { }
```

### Grilles Responsives
```css
/* Cards Grid */
.grid-cols-1      /* Mobile: 1 colonne */
.md:grid-cols-2   /* Tablet: 2 colonnes */
.lg:grid-cols-3   /* Desktop: 3 colonnes */
.xl:grid-cols-4   /* Large: 4 colonnes */
```

---

## Règles Générales

### À Faire
- Toujours utiliser des inner shadows pour l'effet 3D
- Combiner outer et inner shadows pour la profondeur
- Utiliser les dégradés tricolores avec parcimonie
- Maintenir des marges cohérentes (4, 8, 12 unités)
- Centrer le contenu horizontalement
- Arrondir tous les coins (minimum 8px)

### À Éviter
- Ombres trop prononcées
- Couleurs saturées sans transparence
- Bordures dures sans dégradé
- Éléments sans effet hover
- Texte non lisible sur fond coloré
- Espacements inconsistants

---

## Checklist de Design

- [ ] Marges latérales sur tous les éléments
- [ ] Inner shadow sur tous les boutons
- [ ] Outer shadow sur toutes les cards
- [ ] Border radius cohérent
- [ ] Dégradés tricolores appliqués
- [ ] Mode sombre fonctionnel
- [ ] Transitions sur hover
- [ ] Responsive testé
- [ ] Texte lisible
- [ ] Contraste suffisant
