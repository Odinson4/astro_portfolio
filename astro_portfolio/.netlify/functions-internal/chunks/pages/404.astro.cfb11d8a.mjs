import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, u as unescapeHTML, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.5ff3c2d5.mjs';
/* empty css                         *//* empty css                           */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$MainHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainHead;
  const {
    title = "Dylan Abbott: Personal Site",
    description = "The personal site of Dylan Abbott"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<meta charset="UTF-8">\n<meta name="description" property="og:description"', '>\n<meta name="viewport" content="width=device-width">\n<meta name="generator"', ">\n<title>", `</title>

<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap" rel="stylesheet">

<script>
	// This code is inlined in the head to make dark mode instant & blocking.
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('theme-dark');

	if (typeof localStorage !== 'undefined') {
		// Watch the document element and persist user preference when it changes.
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('theme-dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
<\/script>`])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title);
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/MainHead.astro");

const iconPaths = {
  "stack": `<rect width="256" height="256" fill="none"/><polyline points="32 176 128 232 224 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="32 128 128 184 224 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
  "switch": `<path d="M80,160H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="104 136 80 160 104 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,96H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H160a8,8,0,0,0,8-8v-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 120 176 96 152 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
  "terminal-window": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
  connector: `<rect width="256" height="256" fill="none"/><rect x="63.03" y="88.4" width="129.94" height="79.2" rx="24" transform="translate(-53.02 128) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="88" x2="168" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="232" y1="24" x2="173.94" y2="82.06" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="82.06" y1="173.94" x2="24" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="32" x2="104" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="32" y1="96" x2="56" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="152" x2="224" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="152" y1="200" x2="160" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
  strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
  "paper-plane-tilt": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
  "arrow-right": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
  "arrow-left": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
  code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
  "heartbeat": `fill="none"/><polyline points="32 128 72 128 88 104 120 152 136 128 160 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,96c0-.67,0-1.33,0-2A54,54,0,0,1,78,40c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-42-22.6-72.58-56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
  "chef": `<path fill="none"/><path d="M146.49,90.49,200,144s-72,96-176,72L197.86,37.86a20,20,0,0,1,28.28,28.28l-50.36,53.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
  "rocket-launch": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
  list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
  heart: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
  "moon-stars": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
  sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
  "twitter-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z"/>`,
  "codepen-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>`,
  "github-logo": `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
  "twitch-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>`,
  "youtube-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>`,
  "dribbble-logo": `<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>`,
  "discord-logo": `<circle stroke="none" cx="96" cy="144" r="12"/><circle stroke="none" cx="160" cy="144" r="12"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M74 80a175 175 0 0 1 54-8 175 175 0 0 1 54 8m0 96a175 175 0 0 1-54 8 175 175 0 0 1-54-8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m155 182 12 24a8 8 0 0 0 9 4c25-6 46-16 61-30a8 8 0 0 0 3-8L206 59a8 8 0 0 0-5-5 176 176 0 0 0-30-9 8 8 0 0 0-9 5l-8 24m-53 108-12 24a8 8 0 0 1-9 4c-25-6-46-16-61-30a8 8 0 0 1-3-8L50 59a8 8 0 0 1 5-5 176 176 0 0 1 30-9 8 8 0 0 1 9 5l8 24"/>`,
  "linkedin-logo": `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
  "instagram-logo": `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
  "tiktok-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M168 106a96 96 0 0 0 56 18V84a56 56 0 0 1-56-56h-40v128a28 28 0 1 1-40-25V89a68 68 0 1 0 80 67Z"/>`
};

const $$Astro$6 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  const { color = "currentcolor", gradient, icon, size } = Astro2.props;
  const iconPath = iconPaths[icon];
  const attrs = {};
  if (size)
    attrs.style = { "--size": size };
  const gradientId = "icon-gradient-" + Math.round(Math.random() * 1e13).toString(36);
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true"${addAttribute(gradient ? `url(#${gradientId})` : color, "stroke")}${addAttribute(gradient ? `url(#${gradientId})` : color, "fill")}${spreadAttributes(attrs, "attrs", { "class": "astro-PATNJMLL" })}>
	<g class="astro-PATNJMLL">${unescapeHTML(iconPath)}</g>
	${gradient && renderTemplate`<linearGradient${addAttribute(gradientId, "id")} x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" class="astro-PATNJMLL">
				<stop stop-color="var(--gradient-stop-1)" class="astro-PATNJMLL"></stop>
				<stop offset=".5" stop-color="var(--gradient-stop-2)" class="astro-PATNJMLL"></stop>
				<stop offset="1" stop-color="var(--gradient-stop-3)" class="astro-PATNJMLL"></stop>
			</linearGradient>`}
</svg>`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/Icon.astro");

const $$Astro$5 = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "class": "astro-X3PJSKD3" }, { "default": () => renderTemplate`
	${maybeRenderHead($$result)}<button class="astro-X3PJSKD3">
		<span class="sr-only astro-X3PJSKD3">Dark theme</span>
		<span class="icon light astro-X3PJSKD3">${renderComponent($$result, "Icon", $$Icon, { "icon": "sun", "class": "astro-X3PJSKD3" })}</span>
		<span class="icon dark astro-X3PJSKD3">${renderComponent($$result, "Icon", $$Icon, { "icon": "moon-stars", "class": "astro-X3PJSKD3" })}</span>
	</button>
` })}`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/ThemeToggle.astro");

const $$Astro$4 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  const textLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work/" },
    { label: "About", href: "/about/" }
  ];
  const iconLinks = [
    { label: "GitHub", href: "https://github.com/Odinson4", icon: "github-logo" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dylan-abbott-9248b5253/",
      icon: "linkedin-logo"
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-DMQPWCEC">
  <div class="menu-header astro-DMQPWCEC">
    <a href="/" class="site-title astro-DMQPWCEC">
      ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "1.6em", "gradient": true, "class": "astro-DMQPWCEC" })}
      Dylan Abbott
    </a>
    ${renderComponent($$result, "menu-button", "menu-button", { "class": "astro-DMQPWCEC" }, { "default": () => renderTemplate`
      <template class="astro-DMQPWCEC">
        <button class="menu-button astro-DMQPWCEC" aria-expanded="false">
          <span class="sr-only astro-DMQPWCEC">Menu</span>
          ${renderComponent($$result, "Icon", $$Icon, { "icon": "list", "class": "astro-DMQPWCEC" })}
        </button>
      </template>
    ` })}
  </div>
  <div id="menu-content" class="astro-DMQPWCEC">
    <ul class="nav-items astro-DMQPWCEC">
      ${textLinks.map(({ label, href }) => renderTemplate`<li class="astro-DMQPWCEC">
            <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([[
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "astro-DMQPWCEC"], "class:list")}${addAttribute(href, "href")}>
              ${label}
            </a>
          </li>`)}
    </ul>
    <div class="menu-footer astro-DMQPWCEC">
      <div class="socials astro-DMQPWCEC">
        ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social astro-DMQPWCEC">
              <span class="sr-only astro-DMQPWCEC">${label}</span>
              ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "class": "astro-DMQPWCEC" })}
            </a>`)}
      </div>

      <div class="theme-toggle astro-DMQPWCEC">
        ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "class": "astro-DMQPWCEC" })}
      </div>
    </div>
  </div>
</nav>`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/Nav.astro");

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
	<div class="group astro-SZ7XMLTE">
		<p class="astro-SZ7XMLTE">
			Designed & Developed in Denver with <a href="https://astro.build/" class="astro-SZ7XMLTE">Astro</a>
			${renderComponent($$result, "Icon", $$Icon, { "icon": "rocket-launch", "size": "1.2em", "class": "astro-SZ7XMLTE" })}
		</p>
		<p class="astro-SZ7XMLTE">&copy; ${currentYear} Dylan Abbott</p>
	</div>
	<p class="socials astro-SZ7XMLTE">
		<a href="https://github.com/Odinson4" class="astro-SZ7XMLTE"> GitHub</a>
    <a href="https://www.linkedin.com/in/dylan-abbott-9248b5253/" class="astro-SZ7XMLTE"> LinkedIn</a>
	</p>
</footer>`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/Footer.astro");

const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-37FXCHFA">
	<head>
		${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "class": "astro-37FXCHFA" })}
	${renderHead($$result)}</head>
	<body class="astro-37FXCHFA">
		<div class="stack backgrounds astro-37FXCHFA">
			${renderComponent($$result, "Nav", $$Nav, { "class": "astro-37FXCHFA" })}
			${renderSlot($$result, $$slots["default"])}
			${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37FXCHFA" })}
		</div>

		

		
	</body>
</html>`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/layouts/BaseLayout.astro");

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header${addAttribute([["hero stack gap-4", align], "astro-BBE6DXRZ"], "class:list")}>
	<div class="stack gap-2 astro-BBE6DXRZ">
		<h1 class="title astro-BBE6DXRZ">${title}</h1>
		${tagline && renderTemplate`<p class="tagline astro-BBE6DXRZ">${tagline}</p>`}
	</div>
	${renderSlot($$result, $$slots["default"])}
</header>`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/Hero.astro");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })}
` })}`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/pages/404.astro");

const $$file = "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, _404 as _, $$BaseLayout as a, $$Hero as b };