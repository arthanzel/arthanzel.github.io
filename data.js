module.exports = {
  name: 'Martin Hanzel',
  title: '(Remote) software developer',
  contact: {
    email: 'martin@hanzel.io',
    github: 'https://github.com/arthanzel',
    gitlab: 'https://gitlab.com/arthanzel',
    linkedin: 'https://linkedin.com/in/arthanzel',
  },
  bio: [
    'I\'m a computer scientist, a genetic engineer, a mentor, and a successful geek. I love to share my passion for technology with everyone around me. I live in Lausanne, Switzerland, where I\'m working towards a Master\'s degree at École Polytechnique Fédérale de Lausanne in one of the best computer science courses in the world.',
    'In my adventures, I combined biology and programming because I was fascinated by how living things resemble computers. Programming life is a problem just as difficult and satisfying as programming silicon. I\'m now looking for other difficult and satisfying problems. Perhaps your company has some. I can help solve them.',
  ],
  location: 'Capable of working remotely. Living in **Lausanne**, Switzerland. Citizen of the **Slovak Republic** (EU) and **Canada**. Swiss permit B.',
  education: [
    {
      title: 'Master of Computer Science',
      year: [2019, 'present'],
      institution: 'École Polytechnique Fédérale de Lausanne',
      research: ['Machine Learning', 'Languages', 'Distributed Systems'],
    },
    {
      title: 'B.Sc. Computer Science',
      subtitle: 'Top in the Faculty of Engineering',
      year: [2017, 2019],
      distinction: 'Summa Cum Laude',
      institution: 'University of Ottawa',
      research: ['Web Technologies', 'Privacy and Security', 'Blockchain'],
    },
    {
      title: 'B.Sc. Biomedical Science',
      subtitle: 'Minor in Computer Science',
      year: [2013, 2017],
      distinction: 'Magna Cum Laude',
      institution: 'University of Ottawa',
      research: ['Biological Computation', 'Genetic Engineering', 'Ecological Modelling'],
    },
  ],
  experience: [
    {
      title: 'Frontend Engineer (Remote)',
      place: 'GitLab Inc.',
      year: 2019,
      tag: 'technical',
      remarks: [
        'Self-managed tasks in an **all-remote** team of people from around the world.',
        'Participated in **code reviews** daily.',
        'Realized UI designs in **responsive CSS** for four or more device sizes.',
        'Created new **UI components** and migrated legacy jQuery code to **ES6 + Vue**.',
        'Practiced **TDD** and contributed to the migration of the test suite from Karma to Jest.',
        'Patched **security** holes in frontend code and managed security backports.',
        'Wrote at least as many lines of tests than production code, with **100% coverage**.'
      ],
    },
    {
      title: 'Web Developer',
      place: 'Pivotree',
      year: [2011, 2018],
      tag: 'technical',
      remarks: [
        'Led **R&D** for next-generation **e-commerce** applications using **isomorphic rendering** and **microservices**.',
        'Developed **full-stack** B2B and B2C e-commerce applications for large retailers using the **Oracle Commerce** framework.',
        'Analyzed market trend and improved the company\'s ability to market to potential clients.',
        'Worked **remotely** from Valencia, Spain while collaborating with a team in Ottawa, Canada.',
        'Clients include: Princess Auto, Lorex, Simons, and Videotron.',
      ],
    },
    {
      title: 'Freelance Web Developer',
      year: [2013, 2015],
      tag: 'technical',
      remarks: [
        'Designed and developed **custom webapps** for student groups at the University of Ottawa.',
        'Worked closely with clients to deliver and maintain **pixel-perfect** solutions.',
        'Clients include: University of Ottawa Healthcare Symposium, Actions for Healthcare, iGEMuOttawa.',
      ],
    },
    {
      title: 'Residence Mentor',
      place: 'University of Ottawa',
      year: [2014, 2017],
      tag: 'people',
      remarks: [
        'Designed and piloted a mentors-in-residence program to provide full-time academic support to first-year students.',
        'Increased funding for the Mentoring Centre by **300%** within a year.',
        'Increased resident conversion rate **by a factor of 10** within a year.',
        'Developed software to **automate** data entry and reduced bureaucratic workload from hours to a few minutes.',
        'Organized weekly study groups and coordinated monthly **community-building events** for residents.',
      ],
    },
    {
      title: 'President / Research Associate',
      place: 'University of Ottawa iGEM Team',
      year: [2013, 2016],
      tag: 'people',
      remarks: [
        'Led **iGEMuOttawa**, a genetic engineering and synthetic biology research group made up of undergraduate student researchers.',
        'Built *in vivo* genetic networks using computing and electronic engineering metaphors.',
        'Oversaw the group\'s **finances, fundraising, and hiring**.',
        'Wrote bioinformatics software for **data analysis** and genetic tooling.',
        '**Presented own research** three times at a world-wide conference in Boston, U.S.A..',
        '**Consulted** for a biotechnology startup in Ottawa.',
        '**Secured sponsorship** from universities and biotech companies.',
      ],
    },
    {
      title: 'Founder',
      place: 'uEducate',
      year: 2013,
      tag: 'people',
      remarks: [
        'Founded **uEducate**, an organization dedicated to **promoting higher education** in science and technology.',
        'Established an annual science competition for high school students in Ontario, Canada.',
        '**Created financial scholarships** for aspiring science students, in the amount of **$4000** in the first year and more in years after.',
      ],
    },
  ],
  skills: {
    'Java + Scala': 5,
    HTML: 5,
    CSS: 5,
    'JS + Node': 5,
    Typescript: 5,
    'React + Vue': 5,
    Linux: 5,
    Git: 5,
    Go: 4,
    'C#': 4,
    'C/C++': 4,
    Python: 4,
    'SQL + RDBMS': 4,
    NoSQL: 4,
    Mathematica: 4,
    Matlab: 4,
    Ruby: 3,
    OCaml: 2,
  },
  languages: {
    English: 5,
    Slovak: 5,
    Czech: 5,
    French: 4,
    Spanish: 2,
  },
  projects: [
    {
      name: 'Share Tree DB',
      // image: 'r/sharetree.jpg',
      description: 'A distributed database system, based on blockchain, allowing the secure storage an sharing of data on untrusted hardware. Enables fine-grained and revokable permissioning while guaranteeing data integrity. Supports secure web-of-trust and user management.',
      links: {
        thesis: 'r/ShareTreeDB.pdf',
      },
    },
    {
      name: 'The River Engine',
      image: 'r/tre.png',
      description: 'Research project in creating an agent-based model for simulating the lives of fish in a river ecosystem. It can simulate natural or man-made perturbations in an ecosystem and predict their effects. Built with Java and JavaFX. Thesis included.',
      links: {
        thesis: 'https://github.com/arthanzel/theriverengine/blob/master/Thesis.pdf',
        code: 'http://github.com/arthanzel/theriverengine',
      },
    },
    // {
    //   name: 'Quantum of Cells',
    //   image: 'r/qoc.jpg',
    //   description: 'Online differential equation solver. Originally written to prototype genetic circuits, it can solve most initial-value, non-stiff dynamical systems.',
    //   links: {
    //     demo: 'http://arthanzel.github.io/quantumofcells',
    //     code: 'http://github.com/arthanzel/quantumofcells',
    //   },
    // },
    {
      name: 'Evaluatex',
      image: 'r/evaluatex.jpg',
      description: 'LaTeX and ASCIIMath evaluator for Javascript. Formerly written as a math parser for the [Quantum of Cells](http://github.com/arthanzel/quantumofcells) differential equation solver, but usable as a standalone library. Written over the course of a weekend as an experiment in compilers and interpreters.',
      links: {
        demo: 'http://arthanzel.github.io/evaluatex',
        code: 'http://github.com/arthanzel/evaluatex',
      },
    },
  ],
  publications: [
    // igem paper, both theses, ML paper
  ],
  awards: [
    {
      title: 'Cognos Prize',
      year: 2019,
      note: 'For best thesis in Computer Science',
      institution: 'University of Ottawa',
      href: 'https://scholarships.uottawa.ca/p/a/18709/',
    },
    {
      title: 'University Gold Medal',
      year: 2019,
      note: 'For the highest standing in the faculty of Engineering',
      institution: 'University of Ottawa',
      href: 'https://web.archive.org/web/20190705080240/https://www.uottawa.ca/obtain-your-degree/prizes-and-medals',
    },
    {
      title: 'Faculty Plaque',
      year: 2019,
      note: 'For the highest standing in the Department of Computer Science',
      institution: 'University of Ottawa',
      href: 'https://web.archive.org/web/20190705080240/https://www.uottawa.ca/obtain-your-degree/prizes-and-medals',
    },
    {
      title: "Dean's Honour List",
      subtitle: '12 times of 12',
      year: [2013, 2019],
      institution: 'University of Ottawa',
      href: 'https://www.uottawa.ca/administration-and-governance/134-deans-honour-list',
    },
    {
      title: 'Undergraduate Research Scholarship',
      year: 2013,
      note: 'One of 16 prestigious research positions awarded every year',
      institution: 'University of Ottawa',
      href: 'https://science.uottawa.ca/en/why-uottawa-science/scholarships-and-financial-aid/undergraduate-research-scholarship',
    },
    {
      title: 'Grand Prize',
      institution: 'Ottawa-Carleton Science and Engineering Olympics',
      year: 2012,
    },
  ],
  certifications: [
    {
      title: 'First Aid + CPR C + AED',
      institution: "St. John's Ambulance",
      href: 'https://www.sja.ca/English/Courses-and-Training/Pages/Course%20Descriptions/Workplace-Courses.aspx',
    },
    {
      title: 'Non-Violent Crisis Intervention',
      institution: 'Crisis Prevention Institute',
      href: 'https://www.crisisprevention.com/What-We-Do/Nonviolent-Crisis-Intervention',
    },
    {
      title: 'Applied Suicide Intervention Skills Training (ASIST)',
      institution: 'LivingWorks',
      href: 'https://www.livingworks.net/programs/asist/',
    },
  ],
};
