import { k as createVNode, F as Fragment, s as spreadAttributes } from './astro.5ff3c2d5.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Splittr is an innovative and meticulously crafted application that I designed and developed, utilizing an array of cutting-edge tools and technologies to redefine the way friends handle shared expenses. Built with a tech stack consisting of TypeScript, Python, Next.js, and Tailwind CSS, Splittr combines the power of these technologies to deliver a sleek and user-friendly interface.</p>\n<p>With a strong focus on security and privacy, Splittr incorporates secure user authentication and authorization mechanisms, ensuring data confidentiality and access control. The seamless communication between the frontend and backend components is facilitated by the robust Flask framework, enabling smooth and efficient data transfer and interaction.</p>\n<p>Splittr stands out with its integration of advanced features, such as intelligent expense categorization and personalized financial insights. By utilizing machine learning algorithms, the application intelligently categorizes expenses, allowing users to effortlessly track and analyze their spending patterns. The integration of PostgreSQL as the reliable database system ensures efficient storage and retrieval of user-generated content, supporting robust data management within the application.</p>\n<p>Splittr is a sleek and user-friendly application I designed and developed, leveraging the power of TypeScript, Python, Next.js, and Tailwind CSS. With a strong focus on security and privacy, the application incorporates secure user authentication and authorization mechanisms, ensuring data confidentiality and access control. Through seamless communication between the frontend and backend components facilitated by the robust Flask framework, Splittr provides a seamless user experience for managing shared expenses and streamlining bill splitting among friends.</p>");

				const frontmatter = {"title":"Splittr","publishDate":"2023-04-15T00:00:00.000Z","img":"/assets/stock-1.jpg","img_alt":"Table of people at a restaurant","description":"Splittr is a streamlined and user-friendly application that simplifies expense tracking and seamless bill splitting among friends, fostering financial transparency and easing the complexities of shared expenses.\n","tags":["Flask","TypeScript","Python","Next.js","Tailwind CSS"]};
				const file = "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/content/work/splittr.md";
				const url = undefined;
				function rawContent() {
					return "\nSplittr is an innovative and meticulously crafted application that I designed and developed, utilizing an array of cutting-edge tools and technologies to redefine the way friends handle shared expenses. Built with a tech stack consisting of TypeScript, Python, Next.js, and Tailwind CSS, Splittr combines the power of these technologies to deliver a sleek and user-friendly interface.\n\nWith a strong focus on security and privacy, Splittr incorporates secure user authentication and authorization mechanisms, ensuring data confidentiality and access control. The seamless communication between the frontend and backend components is facilitated by the robust Flask framework, enabling smooth and efficient data transfer and interaction.\n\nSplittr stands out with its integration of advanced features, such as intelligent expense categorization and personalized financial insights. By utilizing machine learning algorithms, the application intelligently categorizes expenses, allowing users to effortlessly track and analyze their spending patterns. The integration of PostgreSQL as the reliable database system ensures efficient storage and retrieval of user-generated content, supporting robust data management within the application.\n\nSplittr is a sleek and user-friendly application I designed and developed, leveraging the power of TypeScript, Python, Next.js, and Tailwind CSS. With a strong focus on security and privacy, the application incorporates secure user authentication and authorization mechanisms, ensuring data confidentiality and access control. Through seamless communication between the frontend and backend components facilitated by the robust Flask framework, Splittr provides a seamless user experience for managing shared expenses and streamlining bill splitting among friends.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
