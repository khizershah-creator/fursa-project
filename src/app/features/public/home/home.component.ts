import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Trend = 'up' | 'down' | 'flat';

interface Investment {
  id: string;
  title: string;
  category: string;
  sector: string;
  capitalSar: number;
  customers?: string;
  dailyCapacity?: string;
  trend?: Trend;
  image: string;
  revenueSar: number;
  opexSar: number;
  requiredSar: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  investments: Investment[] = [
    {
      id: '1',
      title: 'Gulf Poultry Farm',
      category: 'Agriculture',
      sector: 'Agriculture',
      capitalSar: 750_000,
      customers: '—',
      dailyCapacity: '—',
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=1600&auto=format&fit=crop',
      revenueSar: 150_000,
      opexSar: 120_000,
      requiredSar: 200_000,
    },
    {
      id: '2',
      title: 'Al Rayyan neighborhood grocery store',
      category: 'Retail',
      sector: 'Retail',
      capitalSar: 200_000,
      customers: '150 customers',
      dailyCapacity: 'Daily capacity: —',
      trend: 'flat',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop',
      revenueSar: 60_000,
      opexSar: 45_000,
      requiredSar: 100_000,
    },
    {
      id: '3',
      title: 'Wings Travel Office',
      category: 'Tourism and travel',
      sector: 'Tourism and travel',
      capitalSar: 1_200_000,
      customers: '—',
      dailyCapacity: '—',
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1529625051683-60e1b9be24e7?q=80&w=1600&auto=format&fit=crop',
      revenueSar: 1_200_000,
      opexSar: 900_000,
      requiredSar: 300_000,
    },
    {
      id: '4',
      title: 'Al-Amjad Construction Company',
      category: 'Contracting',
      sector: 'Contracting',
      capitalSar: 3_000_000,
      customers: '—',
      dailyCapacity: '—',
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1581093588401-22c58e2e15e8?q=80&w=1600&auto=format&fit=crop',
      revenueSar: 2_000_000,
      opexSar: 1_600_000,
      requiredSar: 500_000,
    },
    {
      id: '5',
      title: 'Elite Restaurant',
      category: 'Restaurants',
      sector: 'Restaurants',
      capitalSar: 500_000,
      customers: '—',
      dailyCapacity: '—',
      trend: 'flat',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop',
      revenueSar: 200_000,
      opexSar: 140_000,
      requiredSar: 300_000,
    },
    {
      id: '6',
      title: 'Champions Gym',
      category: 'Sports and Fitness',
      sector: 'Sports and Fitness',
      capitalSar: 450_000,
      customers: '120 active members',
      dailyCapacity: 'Daily capacity: 80 persons',
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1594737625785-c0e36ef1d9b1?q=80&w=1600&auto=format&fit=crop',
      revenueSar: 120_000,
      opexSar: 80_000,
      requiredSar: 250_000,
    },
    {
      id: '7',
      title: 'Inspiration Cafe',
      category: 'Cafes',
      sector: 'Cafes',
      capitalSar: 300_000,
      customers: '—',
      dailyCapacity: '—',
      trend: 'flat',
      image: 'https://images.unsplash.com/photo-1529973625058-4b1f218c2594?q=80&w=1600&auto=format&fit=crop',
      revenueSar: 80_000,
      opexSar: 50_000,
      requiredSar: 120_000,
    },
    {
      id: '8',
      title: 'Drive-Thru Treasure',
      category: 'Fast food restaurants',
      sector: 'Fast food restaurants',
      capitalSar: 400_000,
      customers: '250 daily customers',
      dailyCapacity: 'Daily capacity: 400 meals',
      trend: 'up',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
      revenueSar: 170_000,
      opexSar: 110_000,
      requiredSar: 220_000,
    },
  ];

  formatSar(n: number) {
    return new Intl.NumberFormat('en-SA', { maximumFractionDigits: 0 }).format(n);
  }
}
