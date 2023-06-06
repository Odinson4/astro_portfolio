import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.5ff3c2d5.mjs';
import { g as getCollection, a as $$Pill, b as $$CallToAction, $ as $$ContactCTA } from './_...slug_.astro.30991229.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404.astro.cfb11d8a.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/Grid.astro");

const $$Astro$2 = createAstro();
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead($$result)}<a class="card astro-LGKM4U2A"${addAttribute(`/work/${slug}`, "href")}>
	<span class="title astro-LGKM4U2A">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/PortfolioPreview.astro");

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead($$result)}<section class="box skills astro-AB4IHPZS">
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${renderComponent($$result, "Icon", $$Icon, { "icon": "stack", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
    <h2 class="astro-AB4IHPZS">Full-Stack Development</h2>
    <p class="astro-AB4IHPZS">
      With my skills in designing engaging user interfaces and implementing
      robust server-side functionality, I create seamless and user-friendly
      experiences. I thrive on the challenge of mastering a diverse range of
      technologies, enabling me to take projects from conception to completion
      with a comprehensive and cohesive approach.
    </p>
  </div>
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${renderComponent($$result, "Icon", $$Icon, { "icon": "connector", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
    <h2 class="astro-AB4IHPZS">Connector</h2>
    <p class="astro-AB4IHPZS">
      With my ability to bridge diverse perspectives, foster collaboration, and
      facilitate effective communication, I excel at creating cohesive and
      harmonious environments that drive innovation and deliver exceptional
      results. I thrive in bringing people together, building consensus, and
      leveraging the strengths of individuals to achieve shared goals, making me
      an invaluable asset to any collaborative endeavor.
    </p>
  </div>
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${renderComponent($$result, "Icon", $$Icon, { "icon": "switch", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
    <h2 class="astro-AB4IHPZS">Technical Versatility</h2>
    <p class="astro-AB4IHPZS">
      Embracing diverse perspectives and actively seeking opportunities to
      learn, I bring a holistic approach to problem-solving. As a versatile
      professional, I excel at adapting to new challenges, leveraging my
      interdisciplinary knowledge, and collaborating effectively across teams to
      deliver innovative solutions that go beyond technical boundaries.
    </p>
  </div>
</section>`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/components/Skills.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
    <div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
      <header class="hero astro-J7PV25F6">
        ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, my name is Dylan Abbott", "tagline": "I am a Software Engineer who is currently based in Denver, Colorado.", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
          <div class="roles astro-J7PV25F6">
            ${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Developer` })}
            ${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`
              ${renderComponent($$result4, "Icon", $$Icon, { "icon": "heartbeat", "size": "1.33em", "class": "astro-J7PV25F6" })} Fitness Enthusiast
            ` })}
            ${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "chef", "size": "1.33em", "class": "astro-J7PV25F6" })} Home Chef` })}
          </div>
        ` })}

        <img alt="Dylan Abbott smiling in a blue suit" width="480" height="620" src="/assets/portrait.jpg" class="astro-J7PV25F6">
      </header>

      ${renderComponent($$result2, "Skills", $$Skills, { "class": "astro-J7PV25F6" })}
    </div>

    <main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
      <section class="section with-background with-cta astro-J7PV25F6">
        <header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
          <h3 class="astro-J7PV25F6">Personal Projects</h3>
          <p class="astro-J7PV25F6">
            Discover a selection of my latest personal projects that reflect my
            passion, creativity, and drive for development.
          </p>
        </header>

        <div class="gallery astro-J7PV25F6">
          ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li class="astro-J7PV25F6">
                  ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "class": "astro-J7PV25F6" })}
                </li>`)}` })}
        </div>

        <div class="cta astro-J7PV25F6">
          ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
            View All
            ${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "class": "astro-J7PV25F6" })}
          ` })}
        </div>
      </section>

      <section class="section with-background bg-variant astro-J7PV25F6">
        <!-- <header class="section-header stack gap-2 lg:gap-4">
          <h3>Mentions</h3>
          <p>
            I have been fortunate enough to recieve praise for my work in
            several publications. Take a look below to learn more.
          </p>
        </header> -->

        <!-- <div class="gallery">
          <Grid variant="small">
            {
              [
                "Medium",
                "BuzzFeed",
                "The Next Web",
                "awwwards.",
                "TechCrunch",
              ].map((brand) => (
                <li class="mention-card">
                  <p>{brand}</p>
                </li>
              ))
            }
          </Grid>
        </div> -->
      </section>
    </main>

    ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })}
  </div>
` })}

`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/pages/index.astro");

const $$file = "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
