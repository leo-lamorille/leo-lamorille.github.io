import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "about": {
            "job": "Apprentice Web Developer Engineer"
        },
        "professional": {
            "title": "Professionals experiences",
            "kiabi": {
                "job": "Kiabi – Fullstack Developer trainee",
                "time": "From July 2021 to Today",
                "dialog": {
                    "title": "KIABI",
                    "job": "Fullstack Developer trainee",
                    "description": "We are a small team doing proof of concept for internal customers at Kiabi. We use the latest technologies to test them in our projects. We carry out Proof of Concept and test new technologies to be implemented at Kiabi. I was able to strongly reinforce my skills thanks to the realization of various POC."
                }
            },
            "proxiad": {
                "bulgaria": {
                    "job": "Proxiad service Center in Plovdiv (Bulgaria) – Web Developer trainee",
                    "time": "From Mai 2022 to July 2022",
                    "dialog": {
                        "title": "PROXIAD service Center in Plovdiv",
                        "job": "Web Developer trainee",
                        "description": "In order to validate my engineering diploma, I had to realize an internship of Java developer during 8 weeks abroad. I realized this internship in the subsidiary of Proxiad in Plovdiv."
                    }
                },
                "cds": {
                    "job": "Proxiad service Center in Lille – Web Developer trainee",
                    "time": "From September 2020 to July 2021",
                    "dialog" : {
                        "title": "PROXIAD service Center in Lille",
                        "job": "Fullstack Developer trainee",
                        "description" : "I started my apprenticeship at the Proxiad service center. I worked on internal web projects. I had the opportunity to gain my first skills on Angular and SpringBoot frameworks."
                    }
                }
            },
            "capso": {
                "job": "Garbage Collector",
                "time": "August 2018 and July 2019",
                "dialog": {
                    "title": "CAPSO",
                    "job": "Garbage Collector",
                    "description": "During two summer jobs, I had the opportunity to work as a garbage collector. I was able to discover the world of work and earn my first salary."
                }
            }
        },
        "training": {
            "title": "Training",
            "bac": "I went through a scientific baccalaureate with a specialization in mathematics.",
            "geii": "I then prepared for 2 years a DUT GEII.",
            "isen": "Finally, I am currently preparing a degree in computer engineering.",
            "card": {
                "ISEN": {
                    "title": "ISEN-LILLE",
                    "content": "Informatical Engineering Degree ISEN",
                    "time": "Today"
                },
                "GEII": {
                    "title": "DUT GEII",
                    "content": "University Technology, technology Degree Electrical Engineering and Industrial Computer Science, Speciality Computer Science",
                    "time": "From 2018 to 2020"
                },
                "VAUBAN": {
                    "title": "Vauban High School",
                    "content": "High School Degree in science, speciality mathematics, sport option",
                    "time": "June 2018"
                }
            }
        },
        "skills": {
            "title": "Skills",
            "react": "(This site is made in ReactJs)"
        }
    }
  },
  fr: {
    translation: {
        "about": {
            "job": "Apprenti Ingenieur Développeur Web"
        },
        "professional": {
            "title": "Expériences Professionelles",
            "kiabi": {
                "job": "Kiabi – Apprenti développeur fullstack",
                "time": "De Juillet 2021 à Aujourd'hui",
                "dialog": {
                    "title": "KIABI",
                    "job": "Apprenti développeur fullstack",
                    "description": "Nous sommes une petite équipe qui réalise des 'proof of concept' pour les clients internes de Kiabi. Nous utilisons les dernières technologies pour les tester dans nos projets. Nous réalisons des POC et MVC et testons les nouvelles technologies à mettre en œuvre chez Kiabi. J'ai pu renforcer fortement mes compétences grâce à la réalisation de différents POC."
                }
            },
            "proxiad": {
                "bulgaria": {
                    "job": "Centre de service Proxiad de Plovdiv (Bulgarie) – Apprenti Développeur Web",
                    "time": "De Mai 2022 à Juillet 2022",
                    "dialog": {
                        "title": "Centre de service Proxiad de Plovdiv",
                        "job": "Apprenti développeur Web",
                        "description": "Afin de valider mon diplôme d'ingénieur, j'ai dû réaliser un stage de développeur Java pendant 8 semaines à l'étranger. J'ai réalisé ce stage dans la filiale de Proxiad à Plovdiv."
                    }
                },
                "cds": {
                    "job": "Centre de service Proxiad à Lille – Apprenti Développeur Web",
                    "time": "De September 2020 à Juillet 2021",
                    "dialog" : {
                        "title": "Centre de service Proxiad à Lille",
                        "job": "Apprenti développeur fullstack",
                        "description" : "J'ai commencé mon apprentissage au centre de service de Proxiad. J'ai travaillé sur des projets web internes. J'ai eu l'occasion d'acquérir mes premières compétences sur les frameworks Angular et SpringBoot."
                    }
                }
            },
            "capso": {
                "job": "Rippeur",
                "time": "Août 2018 et Juillet 2019",
                "dialog": {
                    "title": "CAPSO",
                    "job": "Rippeur",
                    "description": "Au cours de deux emplois d'été, j'ai eu l'occasion de travailler comme éboueur. J'ai pu découvrir le monde du travail et gagner mon premier salaire."
                }
            }
        },
        "training": {
            "title": "Formation",
            "bac": "J'ai passé un baccalauréat scientifique avec une spécialisation en mathématiques.",
            "geii": "J'ai ensuite préparé pendant 2 ans un DUT GEII.",
            "isen": "Enfin, je prépare actuellement un diplôme d'ingénieur en informatique.",
            "card": {
                "ISEN": {
                    "title": "ISEN-LILLE",
                    "content": "Diplôme d'ingénieur informatique ISEN",
                    "time": "Aujourd'hui"
                },
                "GEII": {
                    "title": "DUT GEII",
                    "content": "Université Technologique, Diplôme Génie électrique et informatique industrielle, Spécialité Informatique",
                    "time": "De 2018 à 2020"
                },
                "VAUBAN": {
                    "title": "Lycée Vauban",
                    "content": "Baccalauréat scientifique, spécialité mathématiques, option sport",
                    "time": "Juin 2018"
                }
            }
        },
        "skills": {
            "title": "Compétences",
            "react": "(Ce site est réalisé en ReactJs)"
        }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;