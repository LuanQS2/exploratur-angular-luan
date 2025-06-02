import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Destination {
  id: string | number;
  city: string;
  state?: string;
  country: string;
  type: 'nacional' | 'internacional';
  imageUrl: string;
  price: number;
  description?: string;
  rating?: number;
  reviews?: number;
}

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.scss'
})
export class DestinosComponent implements OnInit{
  allDestinations: Destination[] = [
   {
      id: 1,
      city: 'Zurich',
      country: 'Suíça',
      type: 'internacional',
      imageUrl: '/assets/images/zurich.png',
      price: 7200, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 2,
      city: 'Lisboa',
      country: 'Portugal',
      type: 'internacional',
      imageUrl: '/assets/images/lisboa.png',
      price: 5300, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 3,
      city: 'Roma',
      country: 'Itália',
      type: 'internacional',
      imageUrl: '/assets/images/roma.png',
      price: 6500, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 4,
      city: 'Paris',
      country: 'França',
      type: 'internacional',
      imageUrl: '/assets/images/paris.png',
      price: 6800, // Ajustado
      rating: 4.9,
      reviews: 1230
    },
    {
      id: 5,
      city: 'Nova York',
      country: 'Estados Unidos',
      type: 'internacional',
      imageUrl: '/assets/images/nova-york.png',
      price: 6200, // Ajustado
      rating: 4.7,
      reviews: 2345
    },
    {
      id: 6,
      city: 'Tóquio',
      country: 'Japão',
      type: 'internacional',
      imageUrl: '/assets/images/toquio.png',
      price: 8500, // Ajustado
      rating: 4.8,
      reviews: 1876
    },
    {
      id: 7,
      city: 'Sydney',
      country: 'Austrália',
      type: 'internacional',
      imageUrl: '/assets/images/sydney.png',
      price: 9500, // Ajustado
      rating: 4.9,
      reviews: 1542
    },
    {
      id: 8,
      city: 'Dubai',
      country: 'Emirados Árabes',
      type: 'internacional',
      imageUrl: '/assets/images/dubai.png',
      price: 7000, // Ajustado
      rating: 4.8,
      reviews: 1100
    },
    {
      id: 9,
      city: 'Londres',
      country: 'Reino Unido',
      type: 'internacional',
      imageUrl: '/assets/images/londres.png',
      price: 7000, // Ajustado
      rating: 4.7,
      reviews: 1540
    },
    {
      id: 10,
      city: 'Barcelona',
      country: 'Espanha',
      type: 'internacional',
      imageUrl: '/assets/images/barcelona.png',
      price: 5800, // Ajustado
      rating: 4.9,
      reviews: 1210
    },
    {
      id: 11,
      city: 'Cancún',
      country: 'México',
      type: 'internacional',
      imageUrl: '/assets/images/cancun.png',
      price: 5500, // Ajustado
      rating: 4.8,
      reviews: 1760
    },
    {
      id: 12,
      city: 'Cidade do Cabo',
      country: 'África do Sul',
      type: 'internacional',
      imageUrl: '/assets/images/cidade-do-cabo.png',
      price: 6000, // Ajustado
      rating: 4.7,
      reviews: 980
    },

    // Destinos Nacionais (preços médios de pacotes dentro do Brasil)
    {
      id: 13,
      city: 'Maceió',
      state: 'AL',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/maceio.png',
      price: 2200, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 14,
      city: 'Maragogi',
      state: 'AL',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/Maragogi.jpg',
      price: 2500, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 15,
      city: 'Praia do Francês',
      state: 'AL',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/Praia do Francês.png',
      price: 2000, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 16,
      city: 'Rio de Janeiro',
      state: 'RJ',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/rio.png',
      price: 1500, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 17,
      city: 'Búzios',
      state: 'RJ',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/Búzios.png',
      price: 1800, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 18,
      city: 'Arraial do Cabo',
      state: 'RJ',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/Arraial do Cabo.png',
      price: 1700, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 19,
      city: 'Gramado',
      state: 'RS',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/gramado.png',
      price: 2400, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 20,
      city: 'Canela',
      state: 'RS',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/Canela.png',
      price: 2200, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 21,
      city: 'Bento Gonçalves',
      state: 'RS',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/Bento Gonçalves.png',
      price: 2000, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 22,
      city: 'São Paulo', // Como destino para quem vem de fora de SP
      state: 'SP',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/sao-paulo.png',
      price: 1200, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 23,
      city: 'Campos do Jordão',
      state: 'SP',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/Campos do Jordão.png',
      price: 1900, // Ajustado
      rating: 4.8,
      reviews: 957
    },
    {
      id: 24,
      city: 'Ilhabela',
      state: 'SP',
      country: 'Brasil',
      type: 'nacional',
      imageUrl: '/assets/images/Ilhabela.png',
      price: 1800, // Ajustado
      rating: 4.8,
      reviews: 957
    }
  ];

  filteredDestinations: Destination[] = [];

  // Propriedades para os filtros
  selectedType: 'todos' | 'nacional' | 'internacional' = 'todos';
  searchCountry: string = '';
  searchState: string = '';
  searchCity: string = '';
  minPrice: number = 0;
  maxPrice: number = 10000; // Um valor máximo inicial alto

  // Opções para os dropdowns de filtros (poderiam vir de um serviço também)
  availableCountries: string[] = [];
  availableStates: string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.populateFilterOptions();
    this.applyFilters(); // Aplicar filtros inicialmente para mostrar todos
  }

  populateFilterOptions(): void {
    const countries = new Set(this.allDestinations.map(d => d.country));
    this.availableCountries = ['Todos', ...Array.from(countries).sort()];

    const states = new Set(this.allDestinations.filter(d => d.type === 'nacional' && d.state).map(d => d.state!));
    this.availableStates = ['Todos', ...Array.from(states).sort()];
  }


  applyFilters(): void {
    this.filteredDestinations = this.allDestinations.filter(dest => {
      const typeMatch = this.selectedType === 'todos' || dest.type === this.selectedType;
      const countryMatch = this.searchCountry === '' || this.searchCountry === 'Todos' || dest.country.toLowerCase().includes(this.searchCountry.toLowerCase());
      const stateMatch = (this.selectedType !== 'nacional' || this.searchState === '' || this.searchState === 'Todos' || (dest.state && dest.state.toLowerCase().includes(this.searchState.toLowerCase())));
      const cityMatch = this.searchCity === '' || dest.city.toLowerCase().includes(this.searchCity.toLowerCase());
      const priceMatch = dest.price >= this.minPrice && dest.price <= this.maxPrice;

      return typeMatch && countryMatch && stateMatch && cityMatch && priceMatch;
    });
  }

  // Para o slider de preço, você pode querer chamar applyFilters no (change) ou (input) do slider
  onPriceChange(): void {
    this.applyFilters();
  }
}
