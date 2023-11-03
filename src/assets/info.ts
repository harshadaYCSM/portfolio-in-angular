import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
    faCode, faLaptopCode, faTerminal, faPalette, faCogs, faFileCode, faAd,
    faToolbox, faTvAlt, faStore, faB, faDashboard
} from '@fortawesome/free-solid-svg-icons';
import { faConfluence, faGit, faFigma, faNpm, faChrome, faJira, faSass, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faAngular, faDocker } from '@fortawesome/free-brands-svg-icons';

export const name: string = "Harshada Chaudhari";

export const keywords: string[] = ['JavaScript', 'HTML', 'CSS', 'Angular', 'ReactJS', 'ES6'];

export const summary: string = 'Worked on multiple projects, ensuring exceptional user experience & optimized performance. Contributed to feature additions, UI enhancements & bug fixing to meet the customer demands. Utilized Agile Software Development(Scrum) methodologies for all projects.';

export const skillSet: { [key: string]: string[] } = {
    'Development Languages & Framework': [
        'HTML',
        'CSS',
        'Javascript',
        'ES6',
        'ReactJS',
        'Redux',
        'SASS',
        'Angular',
        'Nodejs',
    ],
    'Development Tools & Environment': [
        'VS Code',
        'REST APIs',
        'NPM',
        'Babel',
        'Webpack',
        'Docker',
        'Git',
        'Chrome',
    ],
    'Collaboration & Project Management': [
        'Jira',
        'Confluence',
        'Zeplin',
        'Figma',
    ],
    'Smart TV Development': [
        'LG WebOS',
        'TizenOS',
        'Sony SmartTV',
        'Vidaa',
    ],
    'Web Analytics & Others': [
        'Mixpanel',
        'IMA',
        'SSAI',
        'DRM',
    ],
};

export const skillTypes: string[] = Object.keys(skillSet);

export const skillIconsList: { [key: string]: IconDefinition } = {
    'HTML': faHtml5,
    'CSS': faCss3Alt,
    'Javascript': faJs,
    'ES6': faJsSquare,
    'ReactJS': faReact,
    'Redux': faStore,
    'REST APIs': faTerminal,
    'SASS': faSass,
    'Angular': faAngular,
    'Nodejs': faNodeJs,
    'VS Code': faCode,
    'Chrome Debugger': faToolbox,
    'Jira': faJira,
    'Git': faGit,
    'Confluence': faConfluence,
    'Zeplin': faPalette,
    'Figma': faFigma,
    'Chrome': faChrome,
    'LG WebOS': faTvAlt,
    'TizenOS': faTvAlt,
    'Sony SmartTV': faTvAlt,
    'Vidaa': faTvAlt,
    'NPM': faNpm,
    'Babel': faB,
    'Webpack': faLaptopCode,
    'Docker': faDocker,
    'Mixpanel': faDashboard,
    'IMA': faAd,
    'SSAI': faAd,
    'DRM': faFileCode,
    'Deep Linking': faCogs,
    'default': faJs,
};

export const githubUrl: string = 'https://github.com/harshadaYCSM';

export const linkedinUrl: string = 'https://www.linkedin.com/in/harshada-chaudhari-3a8220b1/';

export const typewriterTextStrings: string[] = [
    "Software Developer",
    "Smart TV App Developer",
    "Frontend Developer",
    "ReactJS Enthusiast",
    "Aspiring Fullstack Developer",
    "A Job Seeker, currently",
];

export const projects: { [key: string]: { duration: string; description: string; tags: string[] } } = {
    "Infinite SmartTV Project": {
        duration: "07/2022 - 03/2023",
        description: "Development of a React App for 5 different brands on a single code base.",
        tags: ["ReactJS", "HTML5", "CSS", "DashJS", "Leadership"],
    },
    "Zee5 Player & Web App": {
        duration: "03/2020 - 06/2022",
        description: "Worked on development of a responsive & feature-rich web application, based on component-based architecture with VanillaJS.",
        tags: ["Vanilla Javascript", "HTML5", "CSS", "SASS", "Redux", "Analytics"],
    },
    "India Today": {
        duration: "02/2018 - 02/2020",
        description: " Built responsive web applications for India Today & AajTak, news provider firms.",
        tags: ["Vanilla Javascript", "React", "HTML", "CSS"],
    },
};

export const projectNames: string[] = Object.keys(projects);
