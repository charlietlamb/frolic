import {Leaf, Recycle, Truck, Shield, Star} from 'lucide-react';

export const productAccordionData = [
  {
    title: 'What is the product made of?',
    content: 'The product is made of the best materials.',
    icon: <Leaf />,
  },
  {
    title: 'Is the product eco-friendly?',
    content:
      'Yes, our product is made with sustainable practices and materials, minimizing environmental impact.',
    icon: <Recycle />,
  },
  {
    title: 'How is the product shipped?',
    content:
      'We use eco-friendly packaging and partner with carbon-neutral shipping providers to deliver your product.',
    icon: <Truck />,
  },
  {
    title: 'What is the warranty policy?',
    content:
      'Our product comes with a 2-year warranty against manufacturing defects.',
    icon: <Shield />,
  },
  {
    title: 'How do customers rate this product?',
    content:
      'Our product has an average rating of 4.8 out of 5 stars based on over 1000 customer reviews.',
    icon: <Star />,
  },
];

export type ProductAccordionData = typeof productAccordionData;
