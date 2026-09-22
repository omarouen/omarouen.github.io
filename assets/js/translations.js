/* ============================================================
   Dictionnaire de traduction.
   Le français est la langue source : il est lu directement dans
   le DOM au chargement, seul l'anglais est déclaré ici.
   Pour ajouter une langue : ajouter une entrée dans TRANSLATIONS
   et dans TITLES, puis un bouton [data-lang] dans index.html.
   ============================================================ */
window.CV_I18N = {
  titles: {
    fr: "CV Marouene Ouerghemmi",
    en: "Marouene Ouerghemmi — Resume"
  },

  translations: {
    en: {
      "skip": "Skip to content",

      "nav.profile": "Profile",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.contact": "Contact",

      "hero.address": "Bois-Colombes 92270, France",
      "hero.role": "Tech Lead / Senior Java Angular Developer",
      "hero.fact1": "11 years of experience",
      "hero.fact2": "Java & Angular",
      "hero.fact3": "Fluent English",
      "hero.cta": "Get in touch",
      "hero.download": "Download CV (PDF)",

      "sec.profile": "Profile",
      "profile.text": "Tech Lead / Full Stack Java & Angular consultant with 11 years of experience, specialised in REST architecture design, development of business-critical applications (credit insurance, multichannel customer relationship management) and technical guidance of development teams. Proven track record in technical leadership, mentoring and continuous improvement of software quality (Clean Code, automated testing, technical debt reduction). Comfortable in international environments and Agile Scrum delivery.",
      "profile.keywords": "Key expertise",
      "chip.hexa": "Hexagonal architecture",

      "sec.skills": "Areas of expertise",
      "skills.lang": "Languages & frameworks",
      "skills.db": "Databases",
      "skills.devops": "DevOps",
      "skills.method": "Methodologies",
      "skills.tools": "Tools",
      "skills.servers": "Servers & environments",

      "sec.xp": "Professional experience",
      "label.techenv": "Technical environment",
      "label.funcenv": "Business domain: credit insurance",

      "coface.dates": "July 2018 — July 2026",
      "coface.role": "Tech Lead / Full Stack Java/Angular Developer",
      "coface.ctx": "Development of a group-wide credit insurance contract management application, rolled out across all Coface subsidiaries worldwide (Agile Scrum, two-week sprints, production release every three iterations). International team of around 60 people, including 20 developers across several squads, working alongside Product Owners, Business Analysts, QA and Architects, and with the Infrastructure/DevOps teams based in Romania.",

      "coface.m1.title": "Assignment: Tech Lead Full Stack Java/Angular",
      "coface.m1.intro": "Tech Lead within a team of 20 developers spread across several parallel projects, in a cross-functional role combining technical leadership, mentoring and people management.",
      "coface.m1.h1": "Technical leadership & architecture",
      "coface.m1.h1.b1": "Technical leadership of several Java/Angular development teams, ensuring consistent architectural decisions and quality of deliverables.",
      "coface.m1.h1.b2": "Definition and rollout of development best practices (Clean Code, SOLID, hexagonal architecture, code reviews, coding conventions).",
      "coface.m1.h1.b3": "Coaching and upskilling of developers through mentoring, pair programming and code reviews.",
      "coface.m1.h1.b4": "Arbitration of technical decisions and validation of proposed solutions together with the architects.",
      "coface.m1.h1.b5": "Design and validation of REST APIs (versioning, backward compatibility, security, OpenAPI/Swagger documentation).",
      "coface.m1.h1.b6": "Participation in scoping workshops with business teams to clarify functional requirements and produce high-level effort estimates.",
      "coface.m1.h2": "Mentoring, recruitment & quality",
      "coface.m1.h2.b1": "Participation in technical recruitment (Java, Spring Boot, Angular) and assessment of candidates' skills.",
      "coface.m1.h2.b2": "Technical follow-up and support of team members during assignment reviews, identifying areas for improvement and training needs.",
      "coface.m1.h2.b3": "Supervision of code quality with SonarQube and monitoring of quality and technical debt indicators.",
      "coface.m1.h2.b4": "Writing technical documentation and sharing knowledge across teams.",
      "coface.m1.h2.b5": "Collaboration with DevOps teams to support deployments and improve continuous integration and delivery processes (CI/CD).",
      "coface.m1.h3": "API design & enterprise architecture",
      "coface.m1.h3.b1": "Participation in design workshops with project teams to define the REST API contracts consumed by the application or exposed to other applications of the Coface information system.",
      "coface.m1.h3.b2": "Production of architecture and sequence diagrams (UML, flow diagrams) to formalise exchanges between applications and support design reviews.",
      "coface.m1.h3.b3": "Coordination with consumer teams and service-providing teams to ensure smooth API integration and resolve interoperability issues.",

      "coface.m2.title": "Assignment: Full Stack Java/Angular Developer",
      "coface.m2.intro": "Full Stack developer within an Agile team of 8. Modernisation of the information system through migration of applications to the latest Java and Angular framework versions, development of new features and continuous improvement of quality, security and maintainability.",
      "coface.m2.results": "Measured results",
      "metric.coverage": "Test coverage",
      "metric.vuln": "SonarQube vulnerabilities",
      "metric.reliability": "Reliability issues",
      "coface.m2.ach": "Achievements",
      "coface.m2.b1": "Design and development of new features in Java 8/17/21, Spring Boot and Angular 18.",
      "coface.m2.b2": "Migration of applications to Spring Boot and of AngularJS interfaces to Angular 18.",
      "coface.m2.b3": "Migration from Bootstrap 3 to Bootstrap 4.",
      "coface.m2.b4": "Development and consumption of REST APIs.",
      "coface.m2.b5": "Refactoring of applications following hexagonal architecture principles.",
      "coface.m2.b6": "Introduction and improvement of unit tests (JUnit 5, Mockito) and integration tests.",
      "coface.m2.b7": "Continuous improvement of code quality with SonarQube (technical debt reduction, fixing code smells and vulnerabilities).",
      "coface.m2.b8": "Participation in code reviews, Scrum ceremonies and corrective and evolutive maintenance.",
      "coface.m2.b9": "Source code management with Git and integration through a CI/CD pipeline.",

      "aid.dates": "September 2017 — June 2018",
      "aid.role": "Java / AngularJS Developer",
      "aid.ctx": "Within a team of 6 working in Agile/Scrum, development and restructuring of datakili, an application for analysing customer behaviour and managing multichannel customer journeys.",
      "aid.b1": "Development of new features.",
      "aid.b2": "Unit testing in TDD (test first), Cucumber and integration tests.",
      "aid.b3": "Replacement of Cassandra with MySQL and multi-tenant configuration of the application.",
      "aid.b4": "Migration to Spring Boot 2.",
      "aid.b5": "Improvement of the frontend (AngularJS).",
      "aid.b6": "Replacement of Jobserver with Livy to interact with Spark through REST services.",

      "vialink.dates": "February 2017 — September 2017",
      "vialink.role": "Java / Angular 2 Developer",
      "vialink.ctx": "Within a team of 7 split between France and Thailand, working in Agile/Scrum, development and modernisation of an electronic document signature application.",
      "vialink.b1": "Review of other team members' code.",
      "vialink.b2": "Enforcement of code quality standards and performance optimisation.",
      "vialink.b3": "Improvement of code coverage through unit and integration tests.",
      "vialink.b4": "Migration from Java 6 to Java 8.",

      "b2m.dates": "July 2015 — February 2017",
      "b2m.role": "Java / AngularJS Software Engineer",
      "b2m.ctx": "Within a team of 8 split between Tunisia and France, working in Agile/Scrum, development of Solis-paiement, a software package coordinating the reception, processing and follow-up of case files in French departmental centres for people with disabilities (MDPH).",
      "b2m.b1": "Contribution to the back-end and front-end architecture of the application.",
      "b2m.b2": "Review of other team members' code.",
      "b2m.b3": "Development of new features.",
      "b2m.ctx2": "Within a team of 4, development of a management application for small retail businesses (stock, purchasing, sales, point of sale).",
      "b2m.b4": "Design of the architecture (Spring Framework for the back end, AngularJS for the front end).",
      "b2m.b5": "Development of the features.",
      "b2m.b6": "Enforcement of code quality standards and performance optimisation.",

      "sec.edu": "Education & languages",
      "edu.degree": "Engineering degree in computer science, software engineering major",
      "edu.lang": "English",
      "edu.level": "Fluent",

      "sec.contact": "Contact",
      "contact.address": "Address",
      "contact.email": "Email",
      "contact.phone": "Phone",

      "theme.label": "Dark mode",
      "palette.label": "Colour-blind mode",
      "lang.label": "Language"
    }
  }
};
