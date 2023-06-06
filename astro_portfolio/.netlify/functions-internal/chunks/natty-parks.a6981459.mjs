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

				const html = updateImageReferences("<p><a href=\"https://natty-parks.netlify.app/\">Visit Natty Parks</a></p>\n<p>Natty Parks is a meticulously crafted web application that I developed, aiming to provide users with a rich and immersive experience as they delve into the world of national parks across the United States. With a focus on user-friendly design and seamless integration, the application serves as a comprehensive platform for park enthusiasts to explore and discover the beauty, history, and unique features of each park.</p>\n<p>Through seamless utilization of the National Parks Service API, Natty Parks effortlessly retrieves and presents a wealth of information about national parks. From detailed park descriptions and geographical locations to fascinating facts, activities, and amenities, the application offers a comprehensive overview of each park’s offerings. The inclusion of captivating imagery allows users to visually connect with the breathtaking landscapes and inspiring vistas that await them.</p>\n<p>By leveraging the power of the Fetch API and the DOM, Natty Parks ensures a smooth and dynamic user experience. Upon selecting a specific state of interest, the application dynamically fetches and showcases relevant park data, enabling users to delve deeper into the specific attractions and highlights within that region. The intuitive user interface facilitates easy navigation, empowering users to seamlessly explore different parks and access the information they seek effortlessly.</p>\n<p>Beyond serving as a source of information, Natty Parks aims to inspire and encourage a sense of wonder and appreciation for the natural wonders preserved within the national park system. Through the application, users can discover lesser-known parks, plan future visits, and cultivate a deeper understanding of the diverse ecosystems and cultural heritage preserved within these protected areas.</p>\n<p>Natty Parks represents my passion for web development and my admiration for the natural world. By combining technical expertise with a genuine appreciation for the beauty and significance of national parks, I have created a platform that invites users to embark on a virtual journey of exploration, discovery, and appreciation.</p>");

				const frontmatter = {"title":"Natty Parks","publishDate":"2020-03-04T00:00:00.000Z","img":"/assets/stock-3.jpg","img_alt":"Hiker looking onward from a path that is completely inviting and untainted.","description":"I developed a website that leverages the National Parks API to present an informative and user-friendly platform, allowing visitors to explore and discover parks located in different states.\n","tags":["API Integration","CSS","HTML","JavaScript"]};
				const file = "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/content/work/nested/natty-parks.md";
				const url = undefined;
				function rawContent() {
					return "\n[Visit Natty Parks](https://natty-parks.netlify.app/)\n\nNatty Parks is a meticulously crafted web application that I developed, aiming to provide users with a rich and immersive experience as they delve into the world of national parks across the United States. With a focus on user-friendly design and seamless integration, the application serves as a comprehensive platform for park enthusiasts to explore and discover the beauty, history, and unique features of each park.\n\nThrough seamless utilization of the National Parks Service API, Natty Parks effortlessly retrieves and presents a wealth of information about national parks. From detailed park descriptions and geographical locations to fascinating facts, activities, and amenities, the application offers a comprehensive overview of each park's offerings. The inclusion of captivating imagery allows users to visually connect with the breathtaking landscapes and inspiring vistas that await them.\n\nBy leveraging the power of the Fetch API and the DOM, Natty Parks ensures a smooth and dynamic user experience. Upon selecting a specific state of interest, the application dynamically fetches and showcases relevant park data, enabling users to delve deeper into the specific attractions and highlights within that region. The intuitive user interface facilitates easy navigation, empowering users to seamlessly explore different parks and access the information they seek effortlessly.\n\nBeyond serving as a source of information, Natty Parks aims to inspire and encourage a sense of wonder and appreciation for the natural wonders preserved within the national park system. Through the application, users can discover lesser-known parks, plan future visits, and cultivate a deeper understanding of the diverse ecosystems and cultural heritage preserved within these protected areas.\n\nNatty Parks represents my passion for web development and my admiration for the natural world. By combining technical expertise with a genuine appreciation for the beauty and significance of national parks, I have created a platform that invites users to embark on a virtual journey of exploration, discovery, and appreciation.\n";
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
