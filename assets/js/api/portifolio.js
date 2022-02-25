const portifolioList = [
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/astra1.jpg',
    type: 'Para Brisa',
    filter: 'filter-maquinas',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/astra2.jpg',
    type: 'Para Brisa',
    filter: 'filter-maquinas',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/maq1.jpg',
    type: 'Para Brisa',
    filter: 'filter-maquinas',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/maq2.jpg',
    type: 'Para Brisa',
    filter: 'filter-maquinas',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/maq3.jpg',
    type: 'Para Brisa',
    filter: 'filter-maquinas',
  },
  {
    title: 'Barco - 1',
    image: './assets/img/services/machines/barco1.jpg',
    type: 'Barco',
    filter: 'filter-nautica',
  },
  {
    title: 'Barco - 2',
    image: './assets/img/services/machines/barco2.jpg',
    type: 'Barco',
    filter: 'filter-nautica',
  },
  {
    title: 'Barco - 3',
    image: './assets/img/services/machines/barco3.jpg',
    type: 'Barco',
    filter: 'filter-nautica',
  },
  {
    title: 'Barco - 4',
    image: './assets/img/services/machines/barco4.jpg',
    type: 'Barco',
    filter: 'filter-nautica',
  },
  {
    title: 'Barco - 5',
    image: './assets/img/services/machines/barco5.jpg',
    type: 'Barco',
    filter: 'filter-nautica',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/carro1.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/carro2.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
  {
    title: 'Mercedes E190',
    image: './assets/img/services/machines/carro3.jpg',
    type: 'Para Brisa',
    filter: 'filter-autos',
  },
];

let idPortifolio = document.getElementById('portfolio--list');
idPortifolio.innerHTML = PortifolioComponent(portifolioList);

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
            </div>
          </div>
      `;
  });
  return `${cards.join('')}`;
}

const clientesList = [
  {
    srcImage: 'assets/img/clients/client-1.png',
    alt: 'Massal Guindastes',
  },
  {
    srcImage: 'assets/img/clients/client-2.png',
    alt: 'Sonho em 4 Rodas',
  },
  {
    srcImage: 'assets/img/clients/client-3.png',
    alt: 'TGL Transportes',
  },
  {
    srcImage: 'assets/img/clients/client-4.png',
    alt: 'ByDeni Studio',
  },
  {
    srcImage: 'assets/img/clients/client-5.png',
    alt: 'Batistinha Garage',
  },
  {
    srcImage: 'assets/img/clients/client-6.png',
    alt: 'Dalto Apache',
  },
];

let idCliente = document.getElementById('client--list');
idCliente.innerHTML = CllientComponent(clientesList);

function CllientComponent(e) {
  let cards = e.map((e) => {
    return `
     <div class="swiper-slide">
         <img src=${e.srcImage} class="img-fluid" alt=${e.alt}>
      </div>
      `;
  });
  return `${cards.join('')}`;
}
