/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Trey's Portfolio",
  description:
    "An entrepreneur at heart with a proven track record of jump-starting projects to completion, organizing teams to achieve more together, and prioritizing marginalized communities.",
  og: {
    title: "Trey Rudolph Portfolio",
    type: "website",
    url: "http://treyr.me/",
  },
};

//Home Page
const greeting = {
  title: "Trey Rudolph",
  logo_name: "Trey   III",
  signature_path: "signature.png",
  nickname: "Trey Good",
  subTitle:
    "An entrepreneur at heart with a proven track record of jump-starting projects to completion, organizing teams to achieve more together, and prioritizing marginalized communities.",
  resumeLink: "https://1drv.ms/w/s!Au0TduYgsJ1Ahfx7Vqfi5-scq_kvmg?e=YWJ1f9",
  portfolio_repository: "https://github.com/lrudolph333/masterPortfolio",
  githubProfile: "https://github.com/lrudolph333",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/lrudolph333",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/trey-r-link/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCWDtHf2Eh0opMAP-6DF1rgQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:trey.ru.iii@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/T_Goody3",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/trey.rudolph.56/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/icetrey12/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Spotify",
    link:
      "https://open.spotify.com/artist/0ZV8ugYvSJMFiOEtwgvEtt?si=DYjdOXa6SOW1fzVL5fvk-w",
    fontAwesomeIcon: "fa-spotify", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#1DB954", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      imagePath: "fullStack.png",
      // fileName: "FullStackImg",
      skills: [
        "⚡ Launching + maintaining React Native mobile applications with 1000+ users",
        "⚡ Creating application backend in Node, Firebase, and Express",
        "⚡ Building responsive website front end using React and Material UI",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Data Streaming Architecture",
      imagePath: "cloud_infra.png",
      skills: [
        "⚡ Upgrading robustness of mission-critical production Kafka clusters",
        "⚡ Deploying automation solutions via Jenkins pipelines",
        "⚡ Wrangling telemetry data pipelines at scale",
        "⚡ Experience working on Azure and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },

        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#336791",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "GPT Integrations",
      // fileName: "DataScienceImg",
      imagePath: "gpt_integrations.png",
      skills: [
        "⚡ Integrating valuable GPT functionality to exsiting websites and apps",
        "⚡ Advanced prompt engineering to fine-tune GPT responses",
        "⚡ Automating developer workflows with GPT Assitants",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Web3 Development",
      imagePath: "web3_dev.png",
      // fileName: "DataScienceImg",
      skills: [
        "⚡ Writing secure  Solidity Smart Contracts using OpenZeppelin building blocks",
        "⚡ Deploying NFT collections live to Ethereum L2 chains",
        "⚡ Building responsive, intuitive Decentralized Apps for all types of users",
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Metamask",
          imageSrc: "metamask.png",
        },
        {
          skillName: "OpenZeppelin",
          fontAwesomeClassname: "simple-icons:openzeppelin",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/trey_ru_iii",
    },
    {
      siteName: "Buildspace",
      imageName: "buildspace_logo.jpeg",
      profileLink: "https://buildspace.so/",
    },
    {
      siteName: "Google CSSI",
      imageName: "computer-science-summer-institute.jpg",
      profileLink:
        "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute",
    },
    {
      siteName: "UW Young Executives of Color",
      imageName: "yeoc.jpeg",
      profileLink:
        "https://foster.uw.edu/academics/degree-programs/undergraduate-programs/diversity-services/young-executives-of-color-yeoc/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Washington University in St. Louis",
      subtitle: "BSBA Joint Degree in Business and Computer Science",
      logo_path: "washu.png",
      alt_name: "WashU in STL",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Admitted to selective program (<2%) to combine educational opportunity",
        "⚡ Studied advanced entrepreneurship, software development, network security, data analytics and financial management coursework",
        "⚡ Completed coursework in 7 semesters with 3.5 GPA",
        "⚡ Admitted to competitive  Entrepreneurial Scholars cohort, and recipient of Skandalaris Honors in Entrepreneurship award",
      ],
      website_link:
        "https://admissions.wustl.edu/academics/special-programs/joint-degree-in-business-and-computer-science/",
    },
    {
      title: "The Overlake School",
      subtitle: "High-school Diploma",
      logo_path: "overlake.jpeg",
      alt_name: "The Overlake School",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Completed advanced coursework in a comprehensive liberal arts education",
      ],
      website_link: "https://www.overlake.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Hackathon Contestant",
      subtitle: "- Microsoft",
      logo_path: "msft_hack_badge.png",
      certificate_link:
        "https://www.credly.com/badges/b57c8ef0-27eb-40e4-abf0-d14df53f1582/linked_in_profile",
      alt_name: "Microsoft Hackathon",
      color_code: "#D83B0199",
    },
    {
      title: "Honors in Innovation & Entrepreneurship",
      subtitle: "- Skandalaris Center at WashU",
      logo_path: "skandy.jpeg",
      certificate_link:
        "https://skandalaris.wustl.edu/blog/2023/05/08/49-washu-graduates-earning-honors-in-innovation-entrepreneurship-through-the-skandalaris-center/",
      alt_name: "Skandalaris Center",
      color_code: "#BC0A3F",
    },
    {
      title: "IdeaBounce Winner",
      subtitle: "- Skandalaris Center at WashU",
      logo_path: "skandy.jpeg",
      certificate_link:
        "https://skandalaris.wustl.edu/blog/2021/11/09/pitch-your-ideas-here-the-skandalaris-center-ideabounce-brings-st-louis-entrepreneurial-community-together-for-an-evening-of-new-ideas-and-connections/",
      alt_name: "Skandalaris Center",
      color_code: "#BC0A3F",
    },
    {
      title: "Letter of Acknowledgement",
      subtitle: "- Dr. Anne Baril",
      logo_path: "washu.png",
      certificate_link:
        "https://drive.google.com/file/d/1_9BRpIa7dZ6IAH7GGqoVLiKXSs4DEkd7/view?usp=sharing",
      alt_name: "WashU",
      color_code: "#BC0A3F",
    },
    {
      title: "Letter of Reccomendation",
      subtitle: "- Diversity Director Mahtab Mahmoodzadeh",
      logo_path: "overlake.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/15NXtmPfgi75LNmi7FStcMLuhZ10_19Qs/view?usp=sharing",
      alt_name: "Skandalaris Center",
      color_code: "#325920",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have had the pleasure of working with a variety of industry-leading companies, mission-focused non-profits, and endeavors of my mine through high-school and college. These have taught me numerous invaluable lessons.",
  header_image_path: "experience.png",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate Core Infra Engineer",
          company: "Slack",
          company_url: "https://slack.com//",
          logo_path: "slack.png",
          duration: "June 2024 - present",
          location: "Bellevue, WA",
          description:
            "I exponentiate our developer productivty by adding robust toolsets to our Data streaming team, as we move to a self-service Kafka solution for Slack.",
          color: "#4A154B",
        },
        {
          title: "CEO and Co-founder",
          company: "Cache-it",
          company_url: "https://cache-it.app",
          logo_path: "cacheit.jpeg",
          duration: "September 2022 - September 2023",
          location: "Bellevue, WA",
          description:
            "Developed and deployed a cross platform mobile app that uses AR to enable users to hunt in the real-world for digital items (NFTs) that can be redeemed for rewards with brands.",
          color: "#fc1f20",
        },

        {
          title: "Owner",
          company: "Refresh Barbershop",
          company_url: "https://refresh-155.web.app/",
          logo_path: "refresh.jpg",
          duration: "June 2021 - June 2022",
          location: "St. Louis, MO",
          description:
            "As 23.3% stake owner, collaborate closely with 3 student co-owners to effectively recruit new barbers, market our services, improve customer experiences, and increase profits while exemplifying our mission.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Core Infra SWE Intern",
          company: "Slack",
          company_url: "https://slack.com//",
          logo_path: "slack.png",
          duration: "June 2023 - August 2023",
          location: "Bellevue, WA",
          description:
            "I enabled an automated version-control workflow via git for our mission-crticail Apache Kafka cluster configurations.",
          color: "#4A154B",
        },
        {
          title: "Core Infra SWE Intern",
          company: "Slack",
          company_url: "https://slack.com/",
          logo_path: "slack.png",
          duration: "June 2022 - August 2022",
          location: "San Francisco, CA",
          description:
            "I developed an internal python3 tool to enable rolling-restart capabilities of our Kafka clusters. “Kafka-Kaptain” is used once a quarter to fully restart all production clusters to-date.",
          color: "#4A154B",
        },
        {
          title: "Azure E+P Data Intelligence Intern",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "msft.png",
          duration: "May 2021 - August 2021",
          location: "Redmond, WA",
          description:
            "I delivered technical recommendations on new ML scaling feature for our Azure Virtual Desktop customers. Created PowerBI dashboard to visualize potential cost savings and user experience insights to internal data intelligence team. ",
          color: "#D83B0199",
        },
        {
          title: "Autonomous Vehicle Dev Technical Project Manager Intern",
          company: "Cruise",
          company_url: "https://getcruise.com/",
          logo_path: "cruise.jpeg",
          duration: "Jan 2021 - May 2021",
          location: "Remote",
          description:
            "Developed a detailed program schedule and budget for vehicle retrofit effort, approved by senior leadership. As workstream owner, communicated rising program risks and potential mitigations on weekly basis to larger stakeholder team",
          color: "#F24535",
        },
        {
          title: "Microsoft Explorer Intern",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "msft.png",
          duration: "May 2020 - August 2020",
          location: "Redmond, WA",
          description:
            "I served as both lead program manager and developer of a 12-week project for the Commercial Data Intelligence that published performance metrics on a new cloud-computing business offering. ",
          color: "#D83B0199",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Founder",
          company: "Brothas Express",
          company_url: "https://www.instagram.com/brothas_express/",
          logo_path: "Brothas_Express_Logo.png",
          duration: "Jan 2024 - Present",
          location: "Remote",
          description:
            "Facilitating a reflective, expressive conversation space for Black men to deconstruct damaging patriarchal ideals and redefine healthy, thriving manhood.",
          color: "#40011E",
        },
        {
          title: "President",
          company: "Black Men's Coalition",
          company_url: "https://www.instagram.com/bmc_washu/",
          logo_path: "bmc_logo.png",
          duration: "May 2022 - May 2023",
          location: "St. Louis, MO",
          description:
            "Oversee and drive the organization of programming aimed at facilitating brotherhood, stimulating personal development, and supporting academic excellence amongst Black Men at WashU.",
          color: "#0C9D58",
        },
        {
          title: "Co-founder and Team Lead",
          company: "Eastside Change Coalition",
          company_url: "https://eastsidechangecoalition.org/",
          logo_path: "ecc.jpeg",
          duration: "May 2020 - April 2021",
          location: "Seattle area, WA",
          description:
            "Led the Community Action team of a black and brown youth-led organization aimed at restructuring systems of oppression in my local community through policy demands, education, and community engagement.",
          color: "#0C9D58",
        },
        {
          title: "Vice-President",
          company: "Association of Black Students",
          company_url: "https://www.instagram.com/abswashu/",
          logo_path: "absLogo.png",
          duration: "May 2020 - May 2021",
          location: "St. Louis, MO",
          description:
            "Assisted president in running executive meetings, garnered off-campus support for ABS happenings, and faciliated elections for ABS.",
          color: "#0C9D58",
        },

        {
          title: "Engineers Test Kitchen Team Lead",
          company: "Magellan Health",
          company_url: "https://www.magellanhealth.com/",
          logo_path: "magellan.png",
          duration: "Jan 2020 - April 2020",
          location: "St. Louis, MO",
          description:
            "Led team to develop and present prototype of full-stack React application to improve visibility of the location of client’s mail-ordered prescriptions for Magellan Health. Shared Github repository to IT department for full integration.",
          color: "#0C9D58",
        },
        {
          title: "Far West Region Teen President",
          company: "Jack and Jill of America",
          company_url: "https://www.jackandjillinc.org/",
          logo_path: "jackandjill.jpeg",
          duration: "July 2018 - July 2019",
          location: "West Coast, USA",
          description:
            "Elected to presidency, organized, and administered conferences and events to improve the experience of over 1000 teens across the western United States.",
          color: "#0C9D58",
        },
        {
          title: "Black Student Union Co-founder and Leader",
          company: "The Overlake School",
          company_url: "https://overlake.org/",
          logo_path: "overlake.jpeg",
          duration: "Sept 2017 - May 2019",
          location: "Redmond, WA",
          description:
            "Organized sessions to educate the entire student body about the state of black America and build a sense of community and engagement amongst the black student body.",
          color: "#0C9D58",
        },
        {
          title: "Vision House Student Volunteer",
          company: "Vision House",
          company_url: "https://visionhouse.org/",
          logo_path: "visionhouse.png",
          duration: "April 2019 - May 2019",
          location: "Renton, WA",
          description:
            "3-week full-time volunteer, assisting with maintenance duties and daycare functions as part of an experiential senior project .",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects start from scratch and always reach completion. Whatever tech stack I need, I learn, and carry forward that knowledge into my next idea.",
  avatar_image_path: "projects.png",
  // avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have published a few pieces on different topics, and have been featured for some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Cache-it Value Proposition Article",
      createdAt: "2023-06-08T16:26:54Z",
      description:
        "Article I wrote on emergent AR scavenger hunt value proposition. ",
      url:
        "https://medium.com/@trey_good/how-cache-it-revitalizes-the-scavenger-hunt-experience-to-boost-brand-engagement-6c8c9a434f39?source=social.linkedin",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Article Spotlight on Trey Rudolph with FreeEats",
      createdAt: "2021-07-30T16:26:54Z",
      description: "Article spotlighting Trey Rudolph and his work on FreeEats",
      url:
        "https://skandalaris.wustl.edu/blog/2021/07/30/trey-rudolph-freeeats/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "A Whole Heart",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Accepted Submission to WashU's Black Anthology Digital Collection ",
      url:
        "https://padlet.com/blackanthology/essential-s-vkfuomh8azvs51gk/wish/1012911457",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// TODO, resize treySeniorPhoto
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",

    // profile_image_path: "TreySeniorPhoto.jpeg",
    profile_image_path: "TreySeniorPhoto2.jpg",
    description:
      "Feel free to message me on any social media. I check Instagram and my email the most.",
    description2:
      "I can help with workshopping ideas, advice for project development, and share other resources that have helped me on my journey.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  certifications,
  competitiveSites,
  contactPageData,
  degrees,
  experience,
  greeting,
  projectsHeader,
  publications,
  publicationsHeader,
  seo,
  settings,
  skills,
  socialMediaLinks,
};
