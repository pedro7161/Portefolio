# Graph Report - .  (2026-07-22)

## Corpus Check
- Corpus is ~15,450 words - fits in a single context window. You may not need a graph.

## Summary
- 1015 nodes · 2453 edges · 71 communities (64 shown, 7 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 47 edges (avg confidence: 0.65)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Angular Runtime (built bundle, minified)
- Angular Router (built bundle, minified)
- Router Activation (bundle)
- Community 3
- Community 4
- Community 5
- Community 6
- Home & Portfolio Content Data
- Menu Component (lang/theme)
- Angular Dependencies
- Community 10
- Community 11
- Dev Dependencies
- Build Options
- Community 14
- Community 15
- Community 16
- Home Component & Language Service
- Community 18
- Community 19
- Config & Docs
- Community 21
- Community 22
- Community 23
- App Root & Routes
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- package.json Scripts
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 39
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- HtmlForm Component (deprecated)
- Contact Component (stub)
- Future Component (placeholder)
- Community 55
- Community 56
- Community 57
- Section Header Component
- Karma Config
- Community 60
- Community 61
- Community 62
- Community 63
- Community 64
- Community 65
- Community 66
- Community 67
- Community 68

## God Nodes (most connected - your core abstractions)
1. `e` - 41 edges
2. `constructor()` - 36 edges
3. `get()` - 33 edges
4. `T()` - 23 edges
5. `Portefolio README` - 22 edges
6. `D()` - 21 edges
7. `q()` - 21 edges
8. `add()` - 17 edges
9. `create()` - 17 edges
10. `H()` - 17 edges

## Surprising Connections (you probably didn't know these)
- `Portefolio README` --references--> `angular-cli-ghpages`  [EXTRACTED]
  README.md → package.json
- `Portefolio README` --conceptually_related_to--> `docs/browser/index.html (production build entry)`  [AMBIGUOUS]
  README.md → docs/browser/index.html
- `Portefolio README` --references--> `@angular/core (MIT)`  [EXTRACTED]
  README.md → docs/3rdpartylicenses.txt
- `docs/browser/index.html (production build entry)` --references--> `src/index.html (dev entry point)`  [INFERRED]
  docs/browser/index.html → src/index.html
- `setLanguage(lang)` --calls--> `setLanguage(language)`  [INFERRED]
  src/app/menu/menu.component.html → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Portfolio content data flow across components** — src_app_portfolio_content, src_app_home_home_component, src_app_menu_menu_component, src_app_projects_projects_component [INFERRED 0.75]
- **Language and theme control flow** — src_app_menu_menu_component, src_app_language_service, src_app_theme_service, src_app_app_component [INFERRED 0.75]

## Communities (71 total, 7 thin omitted)

### Community 0 - "Angular Runtime (built bundle, minified)"
Cohesion: 0.05
Nodes (102): _a(), add(), _addParent(), af(), ar(), ay(), ba(), be() (+94 more)

### Community 1 - "Angular Router (built bundle, minified)"
Cohesion: 0.02
Nodes (28): attachToAppRef(), attachView(), browserPageId(), children(), createText(), dc(), firstChild(), getBaseHref() (+20 more)

### Community 2 - "Router Activation (bundle)"
Cohesion: 0.06
Nodes (47): activate(), activateChildRoutes(), activateRoutes(), activateWith(), attach(), createComponent(), deactivate(), deactivateChildRoutes() (+39 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (45): addClass(), _adjustIndex(), assertNotDestroyed(), at(), attachToViewContainerRef(), bootstrap(), Bu(), ci() (+37 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (44): al(), am(), bm(), ch(), cm(), Cn(), em(), emit() (+36 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (41): as(), bp(), cc(), cg(), cp(), cs(), cu(), detachFromAppRef() (+33 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (29): ah(), ap(), appendChild(), es(), fc(), fp(), insertBefore(), jc() (+21 more)

### Community 7 - "Home & Portfolio Content Data"
Cohesion: 0.09
Nodes (26): isExternalLink(href) method, CertificationEntry, CertificationEntrySource, CERTIFICATIONS, ContactEntry, ContactEntrySource, CONTACTS, COPY (+18 more)

### Community 8 - "Menu Component (lang/theme)"
Cohesion: 0.11
Nodes (12): setLanguage(language), MenuComponent, setLanguage(lang), setTheme(theme), Component, AppTheme, isAppTheme(), isDark computed (+4 more)

### Community 9 - "Angular Dependencies"
Cohesion: 0.09
Nodes (23): @angular/animations, @angular/common, @angular/compiler, @angular/core, @angular/forms, @angular/platform-browser, @angular/platform-browser-dynamic, @angular/router (+15 more)

### Community 10 - "Community 10"
Cohesion: 0.10
Nodes (21): ac(), au(), dd(), dm(), ee(), eh(), fs(), Hp() (+13 more)

### Community 11 - "Community 11"
Cohesion: 0.18
Nodes (21): by(), capture(), consumeOptional(), iv(), match(), mv(), noMatchError(), parse() (+13 more)

### Community 12 - "Dev Dependencies"
Cohesion: 0.11
Nodes (19): angular-cli-ghpages, @angular/compiler-cli, @angular-devkit/build-angular, karma, karma-coverage, karma-firefox-launcher, devDependencies, @angular/cli (+11 more)

### Community 13 - "Build Options"
Cohesion: 0.16
Nodes (16): options, assets, baseHref, browser, index, karmaConfig, outputPath, polyfills (+8 more)

### Community 14 - "Community 14"
Cohesion: 0.19
Nodes (16): addEventListener(), decoratePreventDefault(), eventCallback(), _findPluginFor(), getGlobalEventTarget(), Gt(), listen(), matchEventFullKeyCode() (+8 more)

### Community 15 - "Community 15"
Cohesion: 0.17
Nodes (16): bn(), Cr(), dp(), el(), Gf(), hg(), ih(), Jr() (+8 more)

### Community 16 - "Community 16"
Cohesion: 0.17
Nodes (15): addHost(), addStyles(), addStyleToHost(), changeUsageCount(), get(), getAll(), getAllStyles(), getStyleElement() (+7 more)

### Community 17 - "Home Component & Language Service"
Cohesion: 0.17
Nodes (8): HomeComponent, Component, AppLanguage, isAppLanguage(), isPortuguese computed, language() signal, LanguageService, Injectable

### Community 18 - "Community 18"
Cohesion: 0.19
Nodes (14): applyStyles(), applyToHost(), createRenderer(), ds(), getOrCreateRenderer(), hs(), il(), jg() (+6 more)

### Community 19 - "Community 19"
Cohesion: 0.15
Nodes (14): cd(), hasChildren(), jv(), ld(), lv(), pd(), Qy(), retrieve() (+6 more)

### Community 20 - "Config & Docs"
Cohesion: 0.21
Nodes (12): angular.json (CLI configuration), Third-Party Licenses Manifest, @angular/core (MIT), Bootstrap library, rxjs (Apache-2.0), docs/browser/index.html (production build entry), karma.conf.cjs (test runner configuration), package.json (+4 more)

### Community 21 - "Community 21"
Cohesion: 0.17
Nodes (12): Ae(), createComment(), dg(), element(), fh(), gm(), mm(), Op() (+4 more)

### Community 22 - "Community 22"
Cohesion: 0.17
Nodes (12): bh(), Jn(), jt(), _o(), te(), To(), vh(), vp() (+4 more)

### Community 23 - "Community 23"
Cohesion: 0.26
Nodes (12): bi(), cl(), Ea(), ec(), eg(), Ia(), k(), ol() (+4 more)

### Community 24 - "App Root & Routes"
Cohesion: 0.24
Nodes (6): AppComponent, Component, appConfig, routes, ProjectsComponent, Component

### Community 25 - "Community 25"
Cohesion: 0.24
Nodes (11): Aa(), complete(), error(), next(), No(), nr(), Oo(), qo() (+3 more)

### Community 26 - "Community 26"
Cohesion: 0.24
Nodes (11): bg(), dl(), Fu(), gl(), markForCheck(), mg(), pl(), ps() (+3 more)

### Community 27 - "Community 27"
Cohesion: 0.18
Nodes (11): fd(), Fo(), isUpdatedBrowserUrl(), isUpdatingInternalState(), keys(), ko(), serialize(), toString() (+3 more)

### Community 28 - "Community 28"
Cohesion: 0.20
Nodes (10): bd(), dy(), fy(), id(), lineralizeSegments(), parameterMap(), paramMap(), Qt() (+2 more)

### Community 29 - "Community 29"
Cohesion: 0.20
Nodes (10): collectServerRenderedStyles(), constructor(), da(), ji(), Jm(), Kl(), Km(), resetConfig() (+2 more)

### Community 30 - "Community 30"
Cohesion: 0.24
Nodes (10): ed(), initialNavigation(), isActive(), navigate(), navigateByUrl(), navigateToSyncWithBrowser(), parseUrl(), scheduleNavigation() (+2 more)

### Community 31 - "package.json Scripts"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, ng, start, test, watch (+1 more)

### Community 32 - "Community 32"
Cohesion: 0.22
Nodes (9): deploy, extract-i18n, test, builder, builder, options, buildTarget, architect (+1 more)

### Community 33 - "Community 33"
Cohesion: 0.22
Nodes (9): serve, development, buildTarget, extractLicenses, optimization, sourceMap, builder, configurations (+1 more)

### Community 34 - "Community 34"
Cohesion: 0.25
Nodes (9): Av(), createUrlTree(), gd(), hd(), md(), Nv(), removeEmptyProps(), toRoot() (+1 more)

### Community 35 - "Community 35"
Cohesion: 0.31
Nodes (9): create(), fg(), fl(), nc(), pg(), qf(), rc(), ts() (+1 more)

### Community 36 - "Community 36"
Cohesion: 0.25
Nodes (9): _f(), Lu(), nf(), resolveInjectorInitializers(), tf(), ug(), Vu(), xf() (+1 more)

### Community 37 - "Community 37"
Cohesion: 0.31
Nodes (9): isCurrentPathEqualTo(), normalize(), _notifyUrlChangeListeners(), onUrlChange(), path(), prepareExternalUrl(), pt(), pushState() (+1 more)

### Community 38 - "Community 38"
Cohesion: 0.25
Nodes (8): build, builder, configurations, defaultConfiguration, production, budgets, buildTarget, outputHashing

### Community 39 - "Community 39"
Cohesion: 0.29
Nodes (6): analytics, cli, newProjectRoot, projects, $schema, version

### Community 40 - "Community 40"
Cohesion: 0.29
Nodes (7): applyRedirectCommands(), applyRedirectCreateUrlTree(), createQueryParams(), createSegmentGroup(), createSegments(), findOrReturn(), findPosParam()

### Community 41 - "Community 41"
Cohesion: 0.29
Nodes (7): compileModuleAndAllComponentsAsync(), compileModuleAndAllComponentsSync(), compileModuleAsync(), compileModuleSync(), Hu(), Ip(), zc()

### Community 42 - "Community 42"
Cohesion: 0.33
Nodes (7): createStateMemento(), generateNgRouterState(), handleRouterEvent(), resetState(), resetUrlToCurrentUrlTree(), restoreHistory(), setBrowserUrl()

### Community 43 - "Community 43"
Cohesion: 0.33
Nodes (7): detectChanges(), detectChangesInAttachedViews(), detectChangesInView(), execute(), executeInternalCallbacks(), tick(), yl()

### Community 44 - "Community 44"
Cohesion: 0.29
Nodes (7): ep(), Jh(), lh(), ll(), pu(), tc(), vn()

### Community 45 - "Community 45"
Cohesion: 0.29
Nodes (7): ff(), $g(), kf(), Pf(), ru(), Wa(), we()

### Community 46 - "Community 46"
Cohesion: 0.43
Nodes (7): fi(), hh(), Ic(), Nt(), pi(), processProvider(), zh()

### Community 47 - "Community 47"
Cohesion: 0.33
Nodes (6): prefix, projectType, root, schematics, sourceRoot, portefolio

### Community 48 - "Community 48"
Cohesion: 0.33
Nodes (6): ag(), bc(), hydrate(), Kh(), qh(), tl()

### Community 49 - "Community 49"
Cohesion: 0.33
Nodes (6): ai(), createElement(), eu(), gc(), getDefaultDocument(), setAttribute()

### Community 50 - "Community 50"
Cohesion: 0.40
Nodes (5): _c(), er(), oh(), X(), Xh()

### Community 51 - "Community 51"
Cohesion: 0.40
Nodes (5): gy(), my(), od(), vy(), yy()

### Community 52 - "HtmlForm Component (deprecated)"
Cohesion: 0.50
Nodes (3): html-form route marked deprecated, HtmlFormComponent, Component

### Community 53 - "Contact Component (stub)"
Cohesion: 0.50
Nodes (3): ContactComponent, Contact component is default Angular CLI stub, Component

### Community 54 - "Future Component (placeholder)"
Cohesion: 0.50
Nodes (3): FutureComponent, Future features placeholder, content not yet built, Component

### Community 55 - "Community 55"
Cohesion: 0.50
Nodes (4): Bv(), getOrCreateStandaloneInjector(), he(), ms()

### Community 56 - "Community 56"
Cohesion: 0.50
Nodes (4): cf(), dr(), ja(), ot()

### Community 57 - "Community 57"
Cohesion: 0.50
Nodes (4): Ks(), parent(), pathFromRoot(), siblings()

### Community 58 - "Section Header Component"
Cohesion: 0.50
Nodes (3): Input, SectionHeaderComponent, Component

### Community 59 - "Karma Config"
Cohesion: 0.50
Nodes (3): chromeCandidates, { existsSync }, path

### Community 60 - "Community 60"
Cohesion: 0.67
Nodes (3): assertInAngularZone(), assertNotInAngularZone(), isInAngularZone()

### Community 61 - "Community 61"
Cohesion: 0.67
Nodes (3): buildTitle(), getResolvedTitleForRoute(), updateTitle()

## Ambiguous Edges - Review These
- `Portefolio README` → `docs/browser/index.html (production build entry)`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to

## Knowledge Gaps
- **97 isolated node(s):** `$schema`, `version`, `newProjectRoot`, `projectType`, `schematics` (+92 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Portefolio README` and `docs/browser/index.html (production build entry)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Portefolio README` connect `Config & Docs` to `Home & Portfolio Content Data`, `Menu Component (lang/theme)`, `Dev Dependencies`, `Home Component & Language Service`, `HtmlForm Component (deprecated)`, `Contact Component (stub)`, `Future Component (placeholder)`, `App Root & Routes`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Community 64`, `Community 65`, `Community 66`, `Community 67`, `Community 68`, `package.json Scripts`, `Community 62`, `Community 63`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `e` connect `Angular Runtime (built bundle, minified)` to `Angular Router (built bundle, minified)`, `Router Activation (bundle)`, `Community 4`, `Community 5`, `Community 41`, `Community 10`, `Community 45`, `Community 56`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `e` (e.g. with `dm()` and `ja()`) actually correct?**
  _`e` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `version`, `newProjectRoot` to the rest of the system?**
  _97 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Angular Runtime (built bundle, minified)` be split into smaller, more focused modules?**
  _Cohesion score 0.05200637404027234 - nodes in this community are weakly interconnected._