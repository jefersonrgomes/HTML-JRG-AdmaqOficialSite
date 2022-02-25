const portifolioList = [
  {
    title: 'Maquina - 1',
    image: './assets/img/services/machines/maq1.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Maquina - 2',
    image: './assets/img/services/machines/maq2.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Maquina - 3',
    image: './assets/img/services/machines/maq3.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Maquina - 4',
    image: './assets/img/services/machines/maq4.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Maquina - 5',
    image: './assets/img/services/machines/maq5.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Maquina - 6',
    image: './assets/img/services/machines/maq6.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Maquina - 7',
    image: './assets/img/services/machines/maq7.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Maquina - 8',
    image: './assets/img/services/machines/maq8.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Maquina - 9',
    image: './assets/img/services/machines/maq9.jpg',
    type: 'Machine',
    filter: 'filter-app',
  },
  {
    title: 'Barco - 1',
    image: './assets/img/services/boats/barco1.jpg',
    type: 'Boat',
    filter: 'filter-card',
  },
  {
    title: 'Barco - 2',
    image: './assets/img/services/boats/barco2.jpg',
    type: 'Boat',
    filter: 'filter-card',
  },
  {
    title: 'Barco - 3',
    image: './assets/img/services/boats/barco3.jpg',
    type: 'Boat',
    filter: 'filter-card',
  },
  {
    title: 'Barco - 4',
    image: './assets/img/services/boats/barco4.jpg',
    type: 'Boat',
    filter: 'filter-card',
  },
  {
    title: 'Barco - 5',
    image: './assets/img/services/boats/barco5.jpg',
    type: 'Boat',
    filter: 'filter-card',
  },
  {
    title: 'Carro - 1',
    image: './assets/img/services/cars/carro1.jpg',
    type: 'Car',
    filter: 'filter-web',
  },
  {
    title: 'Carro -2',
    image: './assets/img/services/cars/carro2.jpg',
    type: 'Car',
    filter: 'filter-web',
  },
  {
    title: 'Carro - 3',
    image: './assets/img/services/cars/carro3.jpg',
    type: 'Car',
    filter: 'filter-web',
  },
];

let idPortifolio = document.getElementById('portfolio--list');
idPortifolio.innerHTML = PortifolioComponent(portifolioList);

function PortifolioComponent(e) {
  let cards = e.map((e) => {
    return `
          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="${e.image}" class="img-fluid" alt="${e.title}">
            <div class="portfolio-info">
              <h4>${e.title}</h4>
              <p>${e.tipe}</p>
              <a href="${e.image}" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title=${e.title}><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
      `;
  });
  return `${cards.join('')}`;
}
