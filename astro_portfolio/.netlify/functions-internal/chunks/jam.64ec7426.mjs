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

				const html = updateImageReferences("<p>Jam is a dynamic and highly adaptable productivity application that I conceptualized and developed, drawing inspiration from the renowned platform Notion. Designed to enhance users’ productivity and organizational capabilities, Jam features a customizable block-based editor that empowers individuals to effortlessly create and organize rich content according to their unique preferences and needs.</p>\n<p>Built with Python and Flask, Jam leverages the power of these technologies to provide a robust and reliable backend, ensuring efficient data management and seamless integration with a PostgreSQL database. This combination enables users to store and retrieve their content effortlessly, ensuring a smooth and responsive experience.</p>\n<p>Moreover, Jam incorporates thoughtful features that elevate the user experience. It boasts an intelligent chatbot, powered by OpenAI’s API, which intelligently responds to user queries, providing dynamic and relevant answers to facilitate quick information retrieval. This functionality enhances user productivity by offering instant assistance and eliminating the need for extensive searches or manual information gathering.</p>\n<p>With a focus on user-centric design principles, Jam offers a clean and intuitive interface that prioritizes usability and simplicity. By leveraging Python’s Flask framework, the application establishes a solid foundation for data communication between the frontend and backend components, ensuring seamless synchronization and a smooth user experience.</p>\n<p>Jam represents my passion for creating tools that enhance productivity and streamline content management. By combining a customizable block-based editor, seamless data management, an intelligent chatbot, and an intuitive interface, Jam empowers users to unlock their full potential, enabling them to effortlessly organize, collaborate, and access their content in a way that best suits their unique workflow and preferences.</p>");

				const frontmatter = {"title":"Jam","publishDate":"2023-05-12T00:00:00.000Z","img":"/assets/stock-4.jpg","img_alt":"Jam and toast","description":"Jam is a dynamic and versatile productivity application inspired by Notion, offering users an intuitive block-based editor for effortless content creation and organization.\n","tags":["Python","Flask","Next.js","OpenAI","Editorjs","PostgreSQL"]};
				const file = "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/content/work/jam.md";
				const url = undefined;
				function rawContent() {
					return "\nJam is a dynamic and highly adaptable productivity application that I conceptualized and developed, drawing inspiration from the renowned platform Notion. Designed to enhance users' productivity and organizational capabilities, Jam features a customizable block-based editor that empowers individuals to effortlessly create and organize rich content according to their unique preferences and needs.\n\nBuilt with Python and Flask, Jam leverages the power of these technologies to provide a robust and reliable backend, ensuring efficient data management and seamless integration with a PostgreSQL database. This combination enables users to store and retrieve their content effortlessly, ensuring a smooth and responsive experience.\n\nMoreover, Jam incorporates thoughtful features that elevate the user experience. It boasts an intelligent chatbot, powered by OpenAI's API, which intelligently responds to user queries, providing dynamic and relevant answers to facilitate quick information retrieval. This functionality enhances user productivity by offering instant assistance and eliminating the need for extensive searches or manual information gathering.\n\nWith a focus on user-centric design principles, Jam offers a clean and intuitive interface that prioritizes usability and simplicity. By leveraging Python's Flask framework, the application establishes a solid foundation for data communication between the frontend and backend components, ensuring seamless synchronization and a smooth user experience.\n\nJam represents my passion for creating tools that enhance productivity and streamline content management. By combining a customizable block-based editor, seamless data management, an intelligent chatbot, and an intuitive interface, Jam empowers users to unlock their full potential, enabling them to effortlessly organize, collaborate, and access their content in a way that best suits their unique workflow and preferences.\n";
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
