export const User_data = {
    el:document.querySelector("main div"),
    data(){
    const articles = [{
        id: "0",
        title: "Php and POO",
        content: "La programmation orientée objet (POO) est devenue indispensable, oui, mais pourquoi ? Parce qu'elle permet une meilleure organisation de vos projets, facilite la maintenance de votre code, et offre une grande souplesse pour faire évoluer votre logiciel sans avoir à tout réécrire",
        link: "https://openclassrooms.com/fr/courses/1665806-programmez-en-oriente-objet-en-php/7306872-decouvrez-les-objets-et-les-classes"
    }, {
        id: "1",
        title: "Php and Laravel",
        content: "Laravel est un framework web open-source écrit en PHP respectant le principe modèle-vue-contrôleur et entièrement développé en programmation orientée objet. Laravel est distribué sous licence MIT, avec ses sources hébergées sur GitHub",
        link: "https://fr.wikipedia.org/wiki/Laravel"
    }, {
        id: "2",
        title: "Node js",
        content: "Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent pouvoir monter en charge.",
        link: "https://fr.wikipedia.org/wiki/Node.js"
    }];
  /*  for (let data of articles) {
        console.log(data.id + "\n" + data.title + "\n" + data.content + "\n" + data.link + "\n");
        }*/
        for (let index of articles) {
            this.el.innerHTML += `<ul id="${index.id}"><li><h2>${index.title}</h2></li> <li><p>${index.content}</p></li> <li><a href="${index.link}" target="_blank">Plus sur le sujet &raquo;</a></li></ul>`;        
        }
    }
};