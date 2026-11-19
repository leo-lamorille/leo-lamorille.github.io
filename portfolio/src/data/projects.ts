// Projets perso : ajoute un objet dans `projects` pour chaque nouveau projet.
// Chaque projet peut avoir des photos à lui (`images`) et/ou des éléments
// (`items`, ex. les plugins d'une suite), chacun avec une ou plusieurs photos.
import type { ImageMetadata } from "astro";

import kickforge from "../assets/projects/plugins/kickforge.png";
import permafrost from "../assets/projects/plugins/permafrost.png";
import octoclear from "../assets/projects/plugins/octoclear.png";
import chorale from "../assets/projects/plugins/chorale.png";
import ouroboros from "../assets/projects/plugins/ouroboros.png";
import inkling from "../assets/projects/plugins/inkling.png";

export type ProjectImage = { src: ImageMetadata; alt: string };

export type ProjectItem = {
    name: string;
    kind: string; // ex. "Instrument", "Effet"
    tagline: string;
    description: string;
    features?: string[];
    images: ProjectImage[];
};

export type Project = {
    slug: string; // ancre de la section : /projets#slug
    title: string;
    kicker: string; // petite ligne au-dessus du titre
    description: string[];
    tags: string[];
    links: { label: string; href: string }[];
    images?: ProjectImage[];
    items?: ProjectItem[];
    itemsLabel?: string;
};

export const projectsPage = {
    title: "Projets perso",
    lead: "Ce que je construis en dehors du travail, pour le plaisir d'apprendre et de pousser une techno jusqu'à ses limites.",
};

export const projects: Project[] = [
    {
        slug: "plugins-ableton",
        title: "Plugins Ableton Live",
        kicker: "llamo Audio · VST3",
        description: [
            "Là où mes deux passions se rencontrent : une suite de plugins audio que j'ai développés en C pour Ableton Live, des instruments comme des effets.",
            "Chaque plugin répond à un besoin concret de production techno, avec une interface pensée pour aller vite : peu de réglages, des visuels qui montrent ce qui se passe, et des personnages pour donner une identité à l'ensemble.",
        ],
        tags: ["C", "VST3", "Ableton Live", "Audio"],
        links: [{ label: "Voir le code sur GitHub", href: "https://github.com/leo-lamorille/plugins/tree/main" }],
        items: [
            {
                name: "KickForge",
                kind: "Instrument",
                tagline: "Générateur de kicks techno hybride",
                description:
                    "Un corps synthétisé, un punch issu d'un sample, du rumble et une queue calée sur le tempo : tout ce qu'il faut pour forger un kick techno, du plus sec au plus industriel.",
                features: ["2 LFO et 2 enveloppes", "Plus de 100 presets", "Export WAV"],
                images: [{ src: kickforge, alt: "Interface de KickForge : forme d'onde du kick, réglages du corps, du rumble et du clipper" }],
            },
            {
                name: "Permafrost",
                kind: "Effet",
                tagline: "Freeze et riser",
                description:
                    "Permafrost fige le son entrant en nappe, la fait monter (hauteur, filtre, volume, bruit), puis la fait fondre (MELT) ou éclater (SHATTER).",
                features: [
                    "Freeze automatisable pour lancer le riser avant un drop",
                    "Deux fins au choix : MELT ou SHATTER",
                    "Montée calée sur 1 à 8 mesures, ou libre",
                ],
                images: [{ src: permafrost, alt: "Interface de Permafrost : cristal de glace central, réglages FREEZE, RISE et RELEASE" }],
            },
            {
                name: "OctoClear",
                kind: "Effet",
                tagline: "EQ automatique à sidechain",
                description:
                    "Un seul bouton. Le kick entre dans le sidechain, et OctoClear baisse sur la voix ou la mélodie les fréquences qui rivalisent avec lui. Le son revient entre deux kicks.",
                features: ["Un seul bouton", "Sidechain piloté par le kick", "Le son revient entre deux kicks"],
                images: [{ src: octoclear, alt: "Interface d'OctoClear : la pieuvre au crochet et la courbe d'EQ automatique" }],
            },
            {
                name: "Chorale",
                kind: "Effet",
                tagline: "Chœur automatique",
                description:
                    "Quatre personnages chantent avec le signal en suivant sa hauteur et son rythme, pour transformer une ligne en chœur.",
                features: ["4 voix : BASS, TENOR, ALTO, SOPRANO", "Suivi de la hauteur et du rythme", "Réverbe intégrée"],
                images: [{ src: chorale, alt: "Interface de Chorale : le lapin, la pieuvre, le hibou et la méduse, chacun avec sa voix" }],
            },
            {
                name: "Ouroboros",
                kind: "Instrument MIDI",
                tagline: "Recycleur de mélodies",
                description:
                    "Ouroboros capture une mélodie ou charge un fichier .mid, la transforme, puis rend le résultat en MIDI pour un second drop.",
                features: [
                    "Morph, gamme, inversion, ordre, rythme, chaos",
                    "Import .mid et export MIDI par glisser-déposer",
                    "7 types de mélodie, du lead au rave",
                ],
                images: [{ src: ouroboros, alt: "Interface d'Ouroboros : anneau de progression autour de la pieuvre, réglages de hauteur, de temps et de chaos" }],
            },
            {
                name: "Inkling",
                kind: "Instrument",
                tagline: "Le synthé qu'on dessine",
                description:
                    "Avec Inkling, on dessine à la souris la forme d'onde et une courbe de mouvement, rejouée sur chaque note.",
                features: ["42 presets : lead, pad, arp, pluck, basse, keys, FX", "Arpégiateur intégré", "Effets intégrés"],
                images: [{ src: inkling, alt: "Interface d'Inkling : forme d'onde dessinée, courbe de mouvement et clavier" }],
            },
        ],
    },
];