import images from './images';

const wines = [
  {
    title: 'Curry Fried Rice',
    price: '₹100',
    tags: 'Full plate | Half plate',
  },
  {
    title: 'Aloo paratha',
    price: '₹50',
    tags: 'Full plate | Half plate',
  },
  {
    title: 'Idli Dosa Sambhar',
    price: '₹60',
    tags: 'Full plate | Half plate',
  },
  {
    title: 'Rice and Dal',
    price: '₹100',
    tags: 'Full plate | Half plate',
  },
  {
    title: 'Makki ki Roti and Sarson ka Sag',
    price: '₹100',
    tags: 'Full plate | Half plate',
  },
];

const cocktails = [
  {
    title: 'Onion Pakoda',
    price: '₹20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Veg Cutlet",
    price: '₹16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Aloo Tikki',
    price: '₹10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'French Fries',
    price: '₹31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Pav Bhaji',
    price: '₹26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };