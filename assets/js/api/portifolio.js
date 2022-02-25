const portifolioList = [
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/astra1.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/astra1.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/astra1.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/astra1.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/astra1.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/astra1.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
];

console.log(portifolioList);

let idPortifolio = document.getElementById('portfolio--list');
idPortifolio.innerHTML = PortifolioComponent(portifolioList);
// <!-- filter-app = Super Autos -->
// <!-- filter-web = Nautica Adventure -->
// <!-- filter-card = Super Maqunas-->

console.log(idPortifolio);
function PortifolioComponent(e) {
  let cards = e.map((e) => {
    return `
      <div class="col-lg-4 col-md-6 portfolio-item ${e.filter}">
            <img
              src=${e.image}
              class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>${e.title}</h4>
              <p>${e.tipe}</p>
              <a href=${e.image}
                data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title=${e.title}><i
                  class="bx bx-plus"></i></a>
              <a href="#" class="details-link" title=${e.title}><i class="bx bx-link"></i></a>
            </div>
          </div>
      `;
  });
  return `${cards.join('')}`;
}
