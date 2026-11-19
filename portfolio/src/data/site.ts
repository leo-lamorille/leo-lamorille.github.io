// Contenu du site : modifie ce fichier plutôt que les composants.
import type { ImageMetadata } from "astro";
import soundcloudBanner from '../assets/soundcloud-banner.jpg';

export const site = {
    name: "Léo Lamorille",
    handle: "LLamo", // affiché dans le logo <TonNom/>
    role: "Ingénieur fullstack",
    city: "Lille",
    email: "lamorilleleo@gmail.com",
    cvUrl: "/cv.pdf", // place ton CV dans /public/cv.pdf
    available: true,
    availabilityLabel: "Disponible pour de nouvelles opportunités",
    openTo: ["CDI"],
    description:
        "Ingénieur de développement fullstack : je conçois et développe des applications web de bout en bout.",
};

export const socials = [
    { label: "GitHub", href: "https://github.com/leo-lamorille" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/leo-lamorille/" },
];

export const nav = [
    { label: "Expertise", href: "/#expertise" },
    { label: "À propos", href: "/#apropos" },
    { label: "Passions", href: "/#passions" },
    { label: "Projets", href: "/projects" },
    { label: "Contact", href: "/#contact" },
];

// Section « Hors du code »
// Pour remplacer un visuel animé par une photo :
//   1. place la photo dans src/assets/ (ex. sport.jpg)
//   2. en haut de ce fichier : import sportPhoto from "../assets/sport.jpg";
//   3. dans l'item : image: sportPhoto, imageAlt: "Description de la photo",
export type PassionId = "sport" | "music" | "plugins";

export const passions: {
    title: string;
    titleAccent: string;
    intro: string;
    items: {
        id: PassionId;
        label: string; // petite étiquette sur le visuel
        title: string;
        text: string;
        tags?: string[];
        link?: {
            label: string;
            href: string;
            // Aperçu de la destination (vignette + nom), affiché à la place du simple lien
            preview?: { image: ImageMetadata; title: string; meta: string };
        };
        disclaimer?: { title: string; text: string };
        image?: ImageMetadata;
        imageAlt?: string;
    }[];
} = {
    title: "Deux passions, un point commun :",
    titleAccent: "les BPM.",
    intro: "Quand je ne code pas, je fais du sport ou j'écoute (beaucoup) de techno. Et parfois, la musique et le code se rejoignent.",
    items: [
        {
            id: "sport",
            label: "cardio · bpm ↑",
            title: "Du basket à la muscu",
            text: "Dix-huit ans de basket, de 5 à 23 ans : joueur, capitaine, arbitre, puis coach. J'y ai appris l'esprit d'équipe et à ne jamais rien lâcher face à l'adversité. Aujourd'hui, c'est la musculation qui fait monter les BPM, avec la même régularité.",
        },
        {
            id: "music",
            label: "now playing · techno",
            title: "Techno & SoundCloud",
            text: "La musique électronique, et la techno en particulier, c'est ma bande-son. J'ai un compte SoundCloud sur lequel je partage ma passion avec mes amis.",
            link: {
                label: "Écouter sur SoundCloud",
                href: "https://soundcloud.com/llamrll",
                preview: { image: soundcloudBanner, title: "llamø", meta: "soundcloud.com/llamrll" },
            },
            disclaimer: {
                title: "Avertissement sonore.",
                text: "Techno à haute dose : il vaut mieux aimer les bruits de chantier. Baissez le volume et protégez vos oreilles avant d'appuyer sur play.",
            },
        },
        {
            id: "plugins",
            label: "gain.c",
            title: "Mes plugins Ableton Live",
            text: "Là où mes deux mondes se rencontrent : j'ai développé mes propres plugins en C pour Ableton Live, pour façonner le son exactement comme je l'entends.",
            tags: ["C", "Ableton Live", "Audio"],
            link: { label: "Découvrir les plugins", href: "/projects#plugins-ableton" },
        },
    ],
};

export const contact = {
    title: "Construisons quelque chose",
    titleAccent: "ensemble.",
    text: "Je suis à l'écoute de nouvelles opportunités en CDI. Le plus simple : un e-mail, ou un message sur LinkedIn.",
};

export const stack = [
    "Angular",
    "React",
    "Next.js",
    "Astro",
    "Flutter",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Terraform",
    "CI/CD",
];

// Technos affichées dans la fenêtre de code du hero (4 conseillées)
export const heroStack = ["Angular", "React", "Spring Boot", "Flutter"];

export type ExpertiseIcon = "layout" | "phone" | "database" | "terminal" | "sparkles";

export const expertise: {
    icon: ExpertiseIcon;
    title: string;
    description: string;
    items: string[];
}[] = [
    {
        icon: "layout",
        title: "Front-end",
        description:
            "Interfaces rapides, accessibles et maintenables, du composant à l'application complète.",
        items: ["Angular", "React · Next.js", "Astro"],
    },
    {
        icon: "phone",
        title: "Mobile",
        description: "Applications iOS et Android à partir d'une seule base de code.",
        items: ["Flutter", "iOS & Android"],
    },
    {
        icon: "database",
        title: "Back-end & données",
        description: "APIs robustes, modélisation des données et logique métier testée.",
        items: ["Java · Spring Boot", "PostgreSQL", "MongoDB"],
    },
    {
        icon: "terminal",
        title: "DevOps",
        description: "Du commit à la production : infrastructure as code, pipelines et conteneurs.",
        items: ["Terraform", "CI/CD", "Docker", "Déploiement Cloud RUN / Kubernetes GCP"],
    },
    {
        icon: "sparkles",
        title: "IA",
        description:
            "Rédaction de skills : des instructions structurées qui apprennent à un agent IA à réaliser une tâche précise.",
        items: ["Skills pour agents IA"],
    },
];

export const about = {
    title: "Un développeur qui pense produit.",
    paragraphs: [
        "Diplômé de l'ISEN Lille, j'ai suivi mon cursus d'ingénieur en alternance : trois ans chez Proxiad, en mission au sein du Digital Lab de Kiabi, sur des projets réels dès le premier jour. À la fin de mes études, j'ai signé mon CDI pour continuer dans la même équipe.",
        "Ce qui me motive ? Partir d'une idée encore floue, parfois juste quelques mots sur un post-it, et en faire un produit utile. J'aime aller voir les utilisateurs, tester vite et ajuster au fil des retours. Un échec rapide ne me fait pas peur : c'est une information pour faire mieux.",
        "Au quotidien, je travaille au plus près des PO, des designers et des autres devs : je pose les questions tôt, je montre souvent où j'en suis et je propose des solutions techniques au service du besoin.",
        "Curieux de nature, j'adore découvrir de nouvelles technos, dans le web comme ailleurs : les tester, les pousser jusqu'à trouver leurs limites. Nouveau projet, nouvelle stack, c'est là que je suis à l'aise. Mais quelle que soit la techno, je reste intransigeant sur le clean code et les bonnes pratiques.",
    ],
    stats: [
        { value: "ISEN Lille", label: "Diplôme d'ingénieur" },
        { value: "3 ans", label: "d'alternance chez Proxiad" },
        { value: "CDI", label: "signé dans la même équipe" },
    ],
};