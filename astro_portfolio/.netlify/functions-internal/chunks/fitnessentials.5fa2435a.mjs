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

				const html = updateImageReferences("<p>Fitnessentials is a comprehensive and interactive web application designed to elevate your fitness journey. Powered by React and Vite.js, this robust platform allows users to seamlessly track and manage their workouts while staying motivated and engaged.</p>\n<p>One standout feature of Fitnessentials is the integration of an API that provides a vast collection of exercise GIFs, showcasing the precise movements for each exercise. Users can explore and select exercises from this rich library to create their own personalized workouts, tailoring their fitness routines to meet their specific goals and preferences.</p>\n<p>To enhance usability, Fitnessentials offers convenient filtering and sorting options that enable users to easily navigate through the exercise library based on specific body parts or targeted muscle groups, ensuring a focused and effective workout experience.</p>\n<p>A dedicated workout page provides users with a comprehensive overview of their created workouts, empowering them to review and analyze their progress over time. Users have the flexibility to delete outdated or completed workouts, ensuring a clutter-free and organized workout management system.</p>\n<p>On the homepage, Fitnessentials features an interactive calendar that allows users to select any day and seamlessly add workouts from their customized workout list. This intuitive interface makes it effortless to plan and schedule workouts, keeping users on track and accountable to their fitness goals. Furthermore, the calendar allows users to revisit previous days, providing a retrospective view of their workout history and the exercises performed on those specific days.</p>\n<p>By combining powerful features such as exercise GIFs, personalized workout creation, filtering and sorting options, comprehensive workout tracking, and an intuitive calendar interface, Fitnessentials elevates the fitness tracking experience, making it more engaging, effective, and enjoyable for users on their fitness journey.</p>");

				const frontmatter = {"title":"Fitnessentials","publishDate":"2019-12-01T00:00:00.000Z","img":"/assets/stock-2.jpg","img_alt":"A weight room that is a black/white.","description":"Fitnessentials provides fitness enthusiasts with an intuitive platform to track and manage their workouts, visualize progress, and stay motivated on their fitness journey.\n","tags":["Vite","JavaScript","React","API"]};
				const file = "/Users/dylanabbott/Development/astro_portfolio/astro_portfolio/src/content/work/fitnessentials.md";
				const url = undefined;
				function rawContent() {
					return "\nFitnessentials is a comprehensive and interactive web application designed to elevate your fitness journey. Powered by React and Vite.js, this robust platform allows users to seamlessly track and manage their workouts while staying motivated and engaged.\n\nOne standout feature of Fitnessentials is the integration of an API that provides a vast collection of exercise GIFs, showcasing the precise movements for each exercise. Users can explore and select exercises from this rich library to create their own personalized workouts, tailoring their fitness routines to meet their specific goals and preferences.\n\nTo enhance usability, Fitnessentials offers convenient filtering and sorting options that enable users to easily navigate through the exercise library based on specific body parts or targeted muscle groups, ensuring a focused and effective workout experience.\n\nA dedicated workout page provides users with a comprehensive overview of their created workouts, empowering them to review and analyze their progress over time. Users have the flexibility to delete outdated or completed workouts, ensuring a clutter-free and organized workout management system.\n\nOn the homepage, Fitnessentials features an interactive calendar that allows users to select any day and seamlessly add workouts from their customized workout list. This intuitive interface makes it effortless to plan and schedule workouts, keeping users on track and accountable to their fitness goals. Furthermore, the calendar allows users to revisit previous days, providing a retrospective view of their workout history and the exercises performed on those specific days.\n\nBy combining powerful features such as exercise GIFs, personalized workout creation, filtering and sorting options, comprehensive workout tracking, and an intuitive calendar interface, Fitnessentials elevates the fitness tracking experience, making it more engaging, effective, and enjoyable for users on their fitness journey.\n";
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
