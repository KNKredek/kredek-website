# Przewodnik po projekcie – strona KN Kredek

Ten dokument opisuje, **gdzie co się znajduje**, **jaki styl obowiązuje** w kodzie oraz **jak dodawać nowe rzeczy** (strony, sekcje, komponenty, style, assety).

---

## 1. Stack technologiczny

| Co | Czym |
|---|---|
| Framework UI | React 19 + TypeScript |
| Bundler / dev server | Vite |
| Routing | `react-router` (v7, `BrowserRouter`) |
| Style | SCSS (`sass`), zwykłe globalne klasy – **bez** CSS Modules |
| Ikony | `lucide-react` |
| SVG jako komponenty | `vite-plugin-svgr` (import z sufiksem `?react`) |
| Lint | ESLint (typescript-eslint, react-hooks, react-refresh) |

### Komendy (uruchamiane w `kredek-strona-client/`)

| Komenda | Co robi |
|---|---|
| `npm install` | instaluje zależności |
| `npm run dev` | dev server (z `--host`, więc dostępny też w sieci lokalnej) |
| `npm run build` | `tsc -b` + `vite build` → wynik w `dist/` |
| `npm run lint` | ESLint dla całego projektu |
| `npm run preview` | podgląd zbudowanej wersji |

> `tsconfig.app.json` ma włączone `noUnusedLocals` i `noUnusedParameters` – **nieużywane zmienne/importy psują `npm run build`**. Usuwaj je przed pushem.

### Zmienne środowiskowe

Plik `.env.example` pokazuje dostępne zmienne (np. `VITE_LINKEDIN_API`). Skopiuj go do `.env` (który jest w `.gitignore`). Zmienne widoczne w kodzie muszą mieć prefiks `VITE_` i czyta się je przez `import.meta.env`.

---

## 2. Struktura katalogów

```
kredek-website/
└── kredek-strona-client/          # cała aplikacja frontendowa
    ├── index.html                 # szablon HTML (tytuł, favicon, #root)
    ├── public/                    # pliki serwowane 1:1 pod "/" (favicon, tła)
    ├── vite.config.ts             # pluginy + alias "@" → src/
    ├── .env.example
    └── src/
        ├── main.tsx               # punkt wejścia: render <App/>, import zmiennych globalnych
        ├── App.tsx                # router: Navbar + <Routes> + Footer
        ├── app.scss               # globalne style (reset, typografia h1–h3, p, a)
        ├── vite-env.d.ts          # typy dla Vite i svgr
        ├── assets/                # obrazy importowane w kodzie (png, jpg, svg)
        ├── styles/                # wspólne SCSS
        │   ├── variables.scss     # zmienne CSS (kolory, fonty) + $font-size-1..6
        │   ├── breakpoints.scss   # mixin breakpoint(...)
        │   ├── font.scss          # @font-face
        │   └── fonts/             # pliki fontów (Futura, Franklin, Montserrat)
        ├── components/            # komponenty wielokrotnego użytku
        │   ├── AnimatedBackground/  # animowane tło "kredkowe" na canvasie
        │   ├── Button/              # przycisk z wariantami (crayon, init)
        │   ├── Footer/
        │   └── Navbar/
        └── views/                 # podstrony (jedna podstrona = jeden folder)
            ├── Home/              # "/"
            │   ├── Home.tsx
            │   ├── home.scss
            │   └── Sections/      # sekcje strony głównej
            │       ├── HeroSection.tsx
            │       ├── AboutSection.tsx
            │       ├── CurretCourse.tsx
            │       └── SocialMediaSection.tsx
            ├── OurCourses/        # "/kursy"
            ├── AboutUs/           # "/about"
            └── CoursantsProjects.tsx  # "/projekty" (na razie pusta)
```

### Routing (`src/App.tsx`)

| Ścieżka | Widok |
|---|---|
| `/` | `views/Home/Home.tsx` |
| `/kursy` | `views/OurCourses/OurCourses.tsx` |
| `/projekty` | `views/CoursantsProjects.tsx` |
| `/about` | `views/AboutUs/AboutUs.tsx` |

`Navbar` i `Footer` są renderowane w `App.tsx` raz, dla wszystkich podstron.

---

## 3. Styl kodu

### Nazewnictwo

| Element | Konwencja | Przykład |
|---|---|---|
| Folder i plik komponentu/widoku | `PascalCase` | `components/Button/Button.tsx` |
| **Plik SCSS** | **`kebab-case`**, nazwa jak komponent | `button.scss`, `about-us.scss`, `animated-background.scss` |
| Nazwa komponentu | `PascalCase`, `export default function` | `export default function Footer()` |
| **Klasy CSS (`className`, selektory SCSS)** | **`kebab-case`** | `nav-active-link`, `current-course-inner` |
| Warianty klas | `prefiks-wartość` | `variant-crayon`, `variant-init` |
| Zmienne CSS | `--kebab-case` | `--primary`, `--title-font` |
| Zmienne SCSS | `$kebab-case` | `$font-size-3` |
| Stałe z danymi w pliku | `UPPER_CASE` lub `camelCase` | `POSTS`, `tags`, `mockStats` |
| `id` elementów (kotwice) | `camelCase` | `id="currentCourse"` → link `#currentCourse` |

> Nie używaj camelCase w nazwach klas ani plików SCSS – całe repo zostało przepisane na kebab-case. Pliki `.tsx` zostają w `PascalCase` (jak nazwa komponentu).

### Komponenty React

- Komponenty funkcyjne, **default export**, jeden komponent na plik.
- Propsy typowane przez `interface XxxProps` w tym samym pliku (zob. `Button.tsx`, który rozszerza `ButtonHTMLAttributes`).
- Importy typów przez `import type { ... }` (wymaga tego `verbatimModuleSyntax`).
- Każdy komponent importuje **własny** plik SCSS (nazwa w kebab-case): `import './about-us.scss';`.
- Dane statyczne (listy tagów, postów, członków zarządu) trzymamy jako stałe **w pliku komponentu**, zwykle na dole (`const tags = [...]`) lub na górze z interfejsem (`mockStats`, `currentBoard`).
- Teksty w UI są po polsku; nagłówki sekcji często WIELKIMI LITERAMI.
- Przy mapowaniu list dodawaj `key` (w części starszego kodu go brakuje – poprawiaj przy okazji).

### Importy

- Obecnie używane są ścieżki względne (`../../../components/Button/Button`).
- Dostępny jest alias `@` → `src/` (skonfigurowany w `vite.config.ts`). W SCSS jest już standardem (`@use "@/styles/variables" as *;`); w TSX można go używać w nowym kodzie, żeby uniknąć długich `../../../`.
- SVG jako komponent: `import Icon from '@/assets/plik.svg?react'`.
- Obrazy: `import Logo from '../../assets/logo.png'` i `<img src={Logo} />`.

### SCSS

- Na górze pliku dołącz to, czego potrzebujesz:
  - `@use "@/styles/variables" as *;` – dla `$font-size-*`,
  - `@use "@/styles/breakpoints" as *;` – dla mixina `breakpoint`.
- **Kolory i fonty bierz ze zmiennych CSS** z `styles/variables.scss`:
  - kolory: `--primary`, `--secondary`, `--white`, `--black`, `--dark-violet`, `--init-yellow`, `--black-op10/30/50`,
  - fonty: `--title-font` (Futura – nagłówki), `--text-font` (Montserrat – tekst), `--init-font` (Franklin).
- Rozmiary tekstu: `$font-size-1` (4.5rem) … `$font-size-6` (0.8rem). Bazowy `font-size` `html` to 16px, a na `mobile_large` 10px – więc używaj `rem`, żeby skalowało się automatycznie.
- Zagnieżdżaj selektory zgodnie ze strukturą JSX (blok → `-inner` → elementy).
- Klasy są **globalne** – nadawaj im unikalne, opisowe nazwy z prefiksem sekcji/komponentu (`footer-links`, `about-title`), żeby nie kolidowały między podstronami.
- Responsywność: mixin `breakpoint(nazwa, orientacja?)` umieszczany **na końcu pliku**, powtarzając strukturę selektorów.

| Breakpoint | Warunek |
|---|---|
| `desktop` | `min-width: 1441px` |
| `laptop` | `max-width: 1440px` |
| `tablet` | `max-width: 1024px` |
| `mobile_large` | `max-width: 768px` |
| `mobile_medium` | `max-width: 425px` |
| `mobile_small` | `max-width: 373px` |
| `mobile_xs` | `max-width: 320px` |

Opcjonalny drugi argument: `landscape` lub `portrait`.

> Uwaga: `views/AboutUs/about-us.scss` i `views/OurCourses/our-courses.scss` mają **lokalne** zmienne SCSS (`$primary-color`, `$text-muted`…) – to pozostałość po szybkim prototypie. W nowym kodzie korzystaj z globalnych zmiennych CSS z `variables.scss`.

### Formatowanie

Brak Prettiera – trzymaj się stylu pliku, który edytujesz (wcięcia 4 spacje w większości plików, 2 w `AboutUs`/`OurCourses`). Przed pushem uruchom `npm run lint` i `npm run build`.

---

## 4. Jak dodawać nowe rzeczy

### Nowa podstrona

1. Utwórz folder `src/views/NazwaStrony/` z plikami `NazwaStrony.tsx` i `nazwa-strony.scss`.
2. W komponencie zaimportuj swój SCSS i zwróć główny kontener z klasą w kebab-case (np. `nazwa-strony-page`).
3. Dodaj `<Route path="/sciezka" element={<NazwaStrony />} />` w `src/App.tsx`.
4. Jeśli strona ma być w menu – dodaj `<Link>` w `components/Navbar/Navbar.tsx` (z klasą `nav-link` i warunkową `nav-active-link`), ewentualnie link w `Footer.tsx`.
5. Ścieżki URL są po polsku (`/kursy`, `/projekty`), krótkie, małymi literami.

### Nowa sekcja na stronie głównej

1. Dodaj plik `src/views/Home/Sections/NazwaSection.tsx`.
2. Style sekcji dopisz do `src/views/Home/home.scss` (sekcje Home nie mają własnych plików SCSS).
3. Wstaw `<NazwaSection/>` w odpowiednim miejscu w `Home.tsx`.
4. Jeśli do sekcji ma prowadzić kotwica, nadaj jej `id` (np. `id="currentCourse"`) i linkuj `#currentCourse`.

### Nowy komponent wielokrotnego użytku

1. Folder `src/components/NazwaKomponentu/` z `NazwaKomponentu.tsx` + `nazwa-komponentu.scss`.
2. Propsy jako `interface NazwaKomponentuProps`.
3. Warianty wyglądu rób jak w `Button`: prop `variant` z unią stringów i klasa `variant-${variant}`.
4. Przepuszczaj `className` z propsów, żeby można było dostosować komponent z zewnątrz.

### Nowy wariant przycisku

1. Dopisz wartość do unii `variant` w `components/Button/Button.tsx`.
2. Dodaj klasę `.variant-<nazwa>` w `components/Button/button.scss`.
3. Użycie: `<Button variant="nazwa">Tekst</Button>` – z `link="..."` renderuje się jako `<a>`, bez niego jako `<button>`.

### Nowy kolor / font / rozmiar

- Kolor → nowa zmienna CSS w bloku `body { ... }` w `styles/variables.scss`.
- Font → plik do `styles/fonts/` (preferowany `woff2`), `@font-face` w `styles/font.scss`, zmienna `--xxx-font` w `variables.scss`.
- Rozmiar tekstu → używaj istniejących `$font-size-*`; nowy dodawaj tylko, gdy żaden nie pasuje.

### Obrazy i assety

- Importowane w kodzie → `src/assets/` (Vite je zoptymalizuje i nada hash).
- Używane przez URL (np. tła w CSS przez `/plik.png`, favicon) → `public/`.
- Ikony → najpierw sprawdź `lucide-react`; własne SVG trzymaj w `src/assets/` i importuj z `?react`.

### Treści dynamiczne / mocki

Dopóki nie ma backendu, dane trzymamy jako stałe w plikach widoków (`mockStats`, `currentBoard`, `POSTS`). Przy dodawaniu nowych danych opisz je interfejsem TypeScript nad stałą.

---

## 5. Workflow Git

- Główna gałąź: `main`. Pracujemy na gałęziach i łączymy przez Pull Request.
- Nazwy gałęzi: `feat/...`, `fix/...`, `refactor/...` (np. `feat/navbar`, `feat/animated-background`).
- Commity w stylu Conventional Commits: `feat: ...`, `fix: ...`, `chore: ...`, `refactor: ...` – krótko, po angielsku.
- Przed PR: `npm run lint` i `npm run build` muszą przechodzić.
