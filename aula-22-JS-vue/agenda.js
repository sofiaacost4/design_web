var contatos = [
    {
        nome: "João",
        cel: "(84)92931823",
        foto: "https://i.pinimg.com/736x/fd/fc/ef/fdfcefc24e58a4e3ed4dd6099d530353.jpg",
        favorito: true
    },
    {
        nome: "Luis",
        cel: "(84)92478198",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XQRNu7vAjEEChe7rt3wJAmI7Xd_iWHa3Cg&s",
        favorito: true
    },
    {
        nome: "Júlia",
        cel: "(84)94231983",
        foto: "https://img.freepik.com/fotos-gratis/mulher-com-cabelo-encaracolado-sorriso-dentuco-tem-expressao-feliz-despreocupada-usa-jumper-casual-poses-contra-bege-emocoes-humanas-positivas-e-conceito-de-expressoes-faciais_273609-56482.jpg?semt=ais_se_enriched&w=740&q=80",
        favorito: false
    },
    {
        nome: "Luiza",
        cel: "(84)98419232",
        foto: "https://fotografiadicas.com.br/wp-content/uploads/2017/10/15-Como-fotografar-pessoas-Fotografia-Dicas.jpg",
        favorito: true
    },
    {
        nome: "Ludymilla",
        cel: "(84)98239293",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrgjY4tx9hGDgaF9yFRr1UuX2rIcz2F8w-Q&s",
        favorito: true
    }
]
const agenda = {
    data(){
        return {
            titulo: "Minha agenda de contatos com Vue",
            msg: "Olá, Vue!",
            contatos: window.contatos
        }
    }
}
Vue.createApp(agenda).mount("#app");