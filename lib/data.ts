import type { Article } from "@/components/ArticleCard";

const img = (q: string) =>
  `https://source.unsplash.com/800x600/?${encodeURIComponent(q)}`;

export const hero: Article = {
  id: "hero-1",
  title: "Grande Une: Dernières nouvelles de Conakry",
  excerpt:
    "Suivez l'évolution des événements marquants en Guinée et dans la diaspora.",
  category: "Informations",
  image: "/images/conakry.jpg",
  time: "Il y a 10 min",
};

export const infos: Article[] = [
  {
    id: "i1",
    title: "Économie: nouvelles opportunités d’investissement",
    image: "/images/investment.jpg",
    category: "Informations",
    time: "Il y a 30 min",
  },
  {
    id: "i2",
    title: "Société: initiative jeunesse à Labé",
    image: "/images/guinean-youth.jpg",
    category: "Informations",
    time: "Il y a 1 h",
  },
  {
    id: "i3",
    title: "Politique: points clés de la semaine",
    image: "/images/mohamed-v.jpg",
    category: "Informations",
    time: "Il y a 2 h",
  },
];

export const sports: Article[] = [
  {
    id: "s1",
    title: "Syli National: analyse du prochain match",
    image: "/images/syli.jpg",
    category: "Sports",
  },
  {
    id: "s2",
    title: "Basket: talents guinéens en France",
    image: "/images/basket-gn.jpeg",
    category: "Sports",
  },
  {
    id: "s3",
    title: "Athlétisme: résultats du week-end",
    image: "/images/horoya.webp",
    category: "Sports",
  },
];

export const musique: Article[] = [
  {
    id: "m1",
    title: "Sortie: nouveau clip afro-pop",
    image: "/images/ak.jpeg",
    category: "Musique",
  },
  {
    id: "m2",
    title: "Interview: producteur à Paris",
    image: "/images/producer.jpg",
    category: "Musique",
  },
  {
    id: "m3",
    title: "Playlist de la semaine",
    image: "/images/playlist.webp",
    category: "Musique",
  },
];

export const evenements: Article[] = [
  {
    id: "e1",
    title: "Festival culturel à Kindia",
    image: "/images/kania-soly.jpg",
    category: "Événements",
  },
  {
    id: "e2",
    title: "Conférence diaspora à Paris",
    image: "/images/conference.webp",
    category: "Événements",
  },
  {
    id: "e3",
    title: "Rencontre entrepreneurs",
    image: "/images/entrepreneurs.webp",
    category: "Événements",
  },
];

export const interviews: Article[] = [
  {
    id: "v1",
    title: "Face-à-face: voix de la diaspora",
    image: "/images/diaspo.avif",
    category: "Interviews",
  },
  {
    id: "v2",
    title: "Parcours inspirant: entrepreneure à Paris",
    image: "/images/shop-owner.jpg",
    category: "Interviews",
  },
  {
    id: "v3",
    title: "Métiers des médias: conseils pratiques",
    image: "/images/conseil.jpg",
    category: "Interviews",
  },
];
