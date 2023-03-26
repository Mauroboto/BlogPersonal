// Obtener elementos del DOM
const langToggle = document.getElementById("lang-toggle");
const postTitles = document.querySelectorAll(".post-title");
const lngTgg = document.querySelectorAll(".lngTgg");
const me = document.querySelectorAll(".me");
const exp = document.querySelectorAll(".exp");
const about = document.querySelectorAll(".about");
const titleHeader = document.querySelectorAll(".titleHeader");
const contact = document.querySelectorAll(".contact");
const scmedia = document.querySelectorAll(".sc-media");

// Definir objeto con textos en inglés y español
const texts = {
  english: {
    toggleText: "Español",
    titleHeader: ["MAURO ROBERTO BOTTONE", "FRONT END DEVELOPER", "Welcome"],
    exp: [
      "This is my personal stack of technologies. I began my journey in the IT world back in 2021, learning Python, which I continued with an addition of Arduino, and then took a small turn towards the Front End world. Thus, in February 2022, I began the first stage of my career as a Front End Developer in REACT.JS, which would culminate in September of the same year. Then, in January 2023, I resumed with the Back End Developer course, both courses covering the topics corresponding to the so-called M.E.R.N stack. Currently, I only have academic experience and the projects that support the learned technologies. I hope to soon enter the job market to develop my skills and face the challenges for which I am preparing.",
    ],

    contact: ["Contact"],

    lngTgg: ["Experience", "About me", "Contact", "Download my CV"],
    me: ["About me"],

    scmedia: ["Social Media"],

    about: [
      "Introduction:",
      "I am passionate about technology and seeking my first job in the field of front-end development. At 37 years old, I have spent  last 13 years in law enforcement, but I have always had a passion for web development and creating websites. I have been studying and practicing in my free time, and now I am looking for an opportunity to put my skills into practice.",

      "Skills and Technical Knowledge:",
      "I am an enthusiastic in HTML, CSS, and JavaScript, and I also have experience using React.js, Node.js, Python, Arduino, Git and Github, and Bootstrap. Although I have no previous IT work experience, I have worked on several personal and open-source projects to develop my skills. I have also taken online courses and extensively read about web development and related technologies.",

      "Achievements and Projects:",
      "One of my recent projects has been the creation of a personal website using HTML5, CSS3 & pure JavaScript. I have also worked on several open-source projects, contributing to the development of software for the developer community. These projects have allowed me to develop my skills and better understand the processes and practices of web development.",

      "Education and Training:",
      "I do not have an university degree in IT, but I have completed several online courses in web development and programming. Additionally, I have attended various workshops and technology conferences to enhance my knowledge and understanding of the latest trends and technologies in the field.",

      "Conclusion:",
      "I am excited about the possibility of joining a team of front-end developers and working on exciting projects that allow me to continue learning and growing. I believe that my technical skills and passion for technology would be a valuable asset to any company looking for a committed and motivated front-end developer.",
    ],
  },
  spanish: {
    toggleText: "English",
    titleHeader: ["MAURO ROBERTO BOTTONE", "FRONT END DEVELOPER", "Bienvenido"],
    exp: [
      "Este es mi stack personal de tecnologias. inicie mi camino en el mundo IT alla por el 2021 aprendiendo Python, el cual continuo con un     complemento de Arduino, para luego dar un pequeño giro hacia el mundo     del Front End. Asi las cosas, es que por el mes de Febrero del 2022     comence la primera etapa de mi carrera como Desarrollador Front End     REACT.JS, la cual culminaria el mes de Spetiembre del mismo año. Para luego     reanudarse en el mes de Enero de 2023 con el curso de Desarrollador Back     End. Ambos cursos tratando los temas correspondientes al denominado     M.E.R.N stack. Actualmente solo poseo experiencia academica y los     proyectos que respaldan las tecnologias aprendidas. Espero poder     insertarme pronto en el mercado laboral para desarrollar mis     conocimientos y enfrentar los desafios para los que me estoy preparando.",
    ],

    contact: ["Contacto"],

    lngTgg: ["Experiencia", "Acerca de mi", "Contacto", "Queres ver mi CV?"],

    me: ["Acerca de mi"],

    scmedia: ["Redes sociales"],

    about: [
      "Introducción:",
      "Soy un apasionado de la tecnología y estoy buscando mi primer empleo en el campo del desarrollo front-end. Con 37 años de edad, he pasado los últimos 13 años en la Policía de la Ciudad, pero siempre he tenido una pasión por el desarrollo web y la creación de sitios web. He estado estudiando y practicando en mis tiempos libres, y ahora estoy buscando una oportunidad para poner en práctica mis habilidades.",

      "Habilidades y conocimientos técnicos:",
      "Soy un entusiasta en HTML, CSS y JavaScript, y también tengo experiencia en el uso de React.js, Node.js, Python, Arduino, Git y Github, y Bootstrap. Aunque no tengo experiencia laboral en IT, he trabajado en varios proyectos personales y de código abierto para desarrollar mis habilidades. También he tomado cursos en línea y he leído extensamente sobre el desarrollo web y las tecnologías relacionadas.",

      "Logros y proyectos:",
      "Uno de mis proyectos más recientes ha sido la creación de un sitio web personal utilizando HTML5, CSS3 & JavaScript. También he trabajado en varios proyectos de código abierto, contribuyendo al desarrollo de software para la comunidad de desarrolladores. Estos proyectos me han permitido desarrollar mis habilidades y comprender mejor los procesos y las prácticas del desarrollo web.",

      "Educación y formación:",
      "No tengo un título universitario en IT, pero he completado varios cursos en línea en el desarrollo web y la programación. Además, he asistido a varios talleres y conferencias sobre tecnología para mejorar mi conocimiento y comprensión de las últimas tendencias y tecnologías en el campo.",

      "Conclusiones:",
      "Estoy emocionado por la posibilidad de unirme a un equipo de desarrolladores front-end y trabajar en proyectos emocionantes que me permitan seguir aprendiendo y creciendo. Creo que mis habilidades técnicas y mi pasión por la tecnología serían un activo valioso para cualquier empresa que busque un desarrollador front-end comprometido y motivado.",
    ],
  },
};

// Inicializar idioma en inglés
let currentLanguage = "spanish";

// Función para cambiar el idioma
function toggleLanguage() {
  // Cambiar el idioma actual
  currentLanguage = currentLanguage === "english" ? "spanish" : "english";

  // Actualizar texto del botón
  langToggle.textContent = texts[currentLanguage].toggleText;

  // Actualizar títulos de las publicaciones
  for (let i = 0; i < lngTgg.length; i++) {
    lngTgg[i].textContent = texts[currentLanguage].lngTgg[i];
  }

  for (let i = 0; i < about.length; i++) {
    about[i].textContent = texts[currentLanguage].about[i];
  }
  for (let i = 0; i < me.length; i++) {
    me[i].textContent = texts[currentLanguage].me[i];
  }
  for (let i = 0; i < exp.length; i++) {
    exp[i].textContent = texts[currentLanguage].exp[i];
  }
  for (let i = 0; i < titleHeader.length; i++) {
    titleHeader[i].textContent = texts[currentLanguage].titleHeader[i];
  }
  for (let i = 0; i < contact.length; i++) {
    contact[i].textContent = texts[currentLanguage].contact[i];
  }
  for (let i = 0; i < scmedia.length; i++) {
    scmedia[i].textContent = texts[currentLanguage].scmedia[i];
  }
}

// Agregar evento de clic al botón
langToggle.addEventListener("click", toggleLanguage);
