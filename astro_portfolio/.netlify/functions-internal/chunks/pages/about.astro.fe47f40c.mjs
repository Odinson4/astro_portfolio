import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.5ff3c2d5.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.cfb11d8a.mjs';
import { $ as $$ContactCTA } from './_...slug_.astro.e439d8cd.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                               */
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Dylan Abbott", "description": "About Dylan Abbott", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="stack gap-20 astro-KH7BTL4R">
    <main class="wrapper about astro-KH7BTL4R">
      ${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "class": "astro-KH7BTL4R" }, { "default": ($$result3) => renderTemplate`
        <img width="1553" height="873" src="/assets/background.jpg" alt="Jeanine White at work with a colleague" class="astro-KH7BTL4R">
      ` })}

      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Background</h2>
        <div class="content astro-KH7BTL4R">
          <p class="astro-KH7BTL4R">
            With over a decade of experience in the oilfield industry, I have
            cultivated a strong work ethic and a commitment to integrity. Now
            transitioning into software development, I bring a unique
            perspective and a passion for creativity and problem-solving.
          </p>
          <br class="astro-KH7BTL4R">
          <p class="astro-KH7BTL4R">
            Currently pursuing coursework in software development, I am eager to
            apply my skills in a challenging and dynamic work environment.
            Adaptability, persistence, and attention to detail are qualities I
            honed in the oilfield, and I am excited to collaborate with others
            to create impactful solutions in the world of tech.
          </p>
          <br class="astro-KH7BTL4R">

          <p class="astro-KH7BTL4R">
            I am a lifelong learner and enjoy exploring new ideas and
            technologies. I am also a strong advocate for diversity and
            inclusion in the workplace and am passionate about creating
            opportunities for others to learn and grow.
          </p>
          <br class="astro-KH7BTL4R">
          <p class="astro-KH7BTL4R">
            As a dedicated and reliable software engineer, I am open to
            exploring opportunities where I can contribute and make a
            difference. Let's connect and discuss how we can work together to
            achieve great things.
          </p>
        </div>
      </section>
      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Education</h2>
        <div class="content astro-KH7BTL4R">
          <p class="astro-KH7BTL4R">Flatiron School of Denver: Software Engineering</p>
          <p class="astro-KH7BTL4R">Community College of Denver: Radiology</p>
          <p class="astro-KH7BTL4R">Westlake High School</p>
        </div>
      </section>
      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Skills</h2>
        <div class="content astro-KH7BTL4R">
          <p class="astro-KH7BTL4R">
            JavaScript | HTML | CSS | React | Vite.js | Python | Flask | SQL |
            SQLAlchemy | ArcGIS | GitHub | Mocha | Web | Scraping | Restful |
            APIs | Postman | React Hooks | JSON | Next.js | EditorJS |
            PostgreSQL | SQLite | Node.js | AWS | TypeScript | ORM | OOP
          </p>
        </div>
      </section>
    </main>

    ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-KH7BTL4R" })}
  </div>
` })}

`;
}, "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/pages/about.astro");

const $$file = "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
