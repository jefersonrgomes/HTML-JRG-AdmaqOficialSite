const testemunhosList = [
  {
    client: 'Carlos Hansen',
    company: 'Ceo &amp; Founder',
    text: `A aparência ficou melhor do que os originais, 
      otimo acabamento (bem lisos) sem nenhuma ondulação. 
      Ficou perfeito!`,
  },
  {
    client: 'Sara Wilsso',
    company: 'Ceo &amp; Founder',
    text: `Realizei a compra na ADMAQ VIDROS, 
    que prestou um excelente atendimento, cordial, educado e cumpriu
    com os prazos e qualidades prometidas.`,
  },
];

console.log(testemunhosList);

let idTestemunho = document.getElementById('testemunho--list');
idTestemunho.innerHTML = TestemunhoComponent(testemunhosList);
// <!-- filter-app = Super Autos -->
// <!-- filter-web = Nautica Adventure -->
// <!-- filter-card = Super Maqunas-->

console.log(idTestemunho);
function TestemunhoComponent(e) {
   let cards = e.map((e) => {
      return `
      <div class="swiper-slide">
         <div class="testimonial-item">
            <p>
            <img src="assets/img/quote-sign-right.png" class="quote-sign-left" alt="">
            ${e.text} 
            <img src="assets/img/quote-sign-right.png" class="quote-sign-right" alt="">
            </p>
            <h3>${e.client}</h3>
         </div>
      </div>
      `;
   });
   return `${cards.join('')}`;
};
