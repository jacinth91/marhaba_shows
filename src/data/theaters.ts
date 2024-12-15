import { Theater } from '../types';

export const theaters: Theater[] = [
  {
    id: '1',
    name: 'Marhaba Cinema City',
    location: 'Downtown Dubai',
    emirate: 'Dubai',
    showTimes: [
      { id: '1', time: '10:30 AM', price: 45, seatsAvailable: 120 },
      { id: '2', time: '1:45 PM', price: 55, seatsAvailable: 85 },
      { id: '3', time: '4:30 PM', price: 65, seatsAvailable: 100 },
      { id: '4', time: '7:15 PM', price: 75, seatsAvailable: 90 },
    ]
  },
  {
    id: '2',
    name: 'Marhaba Premier',
    location: 'Marina Mall',
    emirate: 'Dubai',
    showTimes: [
      { id: '5', time: '11:00 AM', price: 50, seatsAvailable: 100 },
      { id: '6', time: '2:15 PM', price: 60, seatsAvailable: 75 },
      { id: '7', time: '5:00 PM', price: 70, seatsAvailable: 95 },
      { id: '8', time: '8:00 PM', price: 80, seatsAvailable: 80 },
    ]
  },
  {
    id: '3',
    name: 'Marhaba Cineplex',
    location: 'Yas Mall',
    emirate: 'Abu Dhabi',
    showTimes: [
      { id: '9', time: '11:30 AM', price: 45, seatsAvailable: 110 },
      { id: '10', time: '2:30 PM', price: 55, seatsAvailable: 90 },
      { id: '11', time: '5:30 PM', price: 65, seatsAvailable: 85 },
      { id: '12', time: '8:30 PM', price: 75, seatsAvailable: 95 },
    ]
  },
  {
    id: '4',
    name: 'Marhaba Movies',
    location: 'Al Zahia City Centre',
    emirate: 'Sharjah',
    showTimes: [
      { id: '13', time: '12:00 PM', price: 40, seatsAvailable: 100 },
      { id: '14', time: '3:00 PM', price: 50, seatsAvailable: 80 },
      { id: '15', time: '6:00 PM', price: 60, seatsAvailable: 90 },
      { id: '16', time: '9:00 PM', price: 70, seatsAvailable: 85 },
    ]
  }
];