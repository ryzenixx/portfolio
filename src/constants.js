import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import papillonLogo from './assets/company_logo/papillon_logo.png';
import oclockLogo from './assets/education_logo/oclock_logo.png';

import papillonPreview from './assets/work_logo/papillonPreview.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: papillonLogo,
    role: "Contributeur & Support",
    company: "Papillon",
    date: "Décembre 2024 - Aujourd'hui",
    desc: "Papillon est un client libre, open-source et développé par une communauté d’élèves pour l’ensemble de vos services de vie scolaire. L'allié de tous les étudiants. Le futur de l'éducation numérique libre et ouverte.",
    skills: [
      "React Native",
      "JavaScript",
      "TypeScript",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Papillon",
    description:
      "Papillon est une application open-source développée par une communauté d’élèves, visant à offrir une alternative libre et moderne aux applications de gestion de la vie scolaire. Conçu pour répondre aux besoins des collégiens, en passant par les lycéens, jusqu'aux étudiants, Papillon centralise tous les services liés à la vie scolaire dans une plateforme unique et accessible à tous.",
    image: papillonPreview,
    tags: ["React Native", "JavaScript", "TypeScript", "API"],
    button1: "GitHub",
    button1url: "https://github.com/PapillonApp/Papillon",
    button2: "Télécharger",
    button2url: "https://papillon.bzh/download",
  },
];

export const education = [
  {
    id: 0,
    img: oclockLogo,
    school: "O'Clock",
    date: "Juillet 2025 - Octobre 2026",
    grade: "À venir",
    desc: "Je vais débuter la formation Concepteur Développeur d'Applications en alternance à l'école O'clock. Cette formation de 12 mois me permettra d'acquérir des compétences en développement logiciel, en programmation orientée objet (POO), ainsi qu'en développement frontend et backend. Grâce à l'alternance, je pourrai appliquer ces connaissances en entreprise et travailler sur des projets réels, tout en me formant sur des technologies modernes telles que JavaScript, React et Node.js. Cette formation est un pas important vers ma carrière dans le développement d'applications.",
    degree: "Concepteur Développeur d'Applications",
  },
];