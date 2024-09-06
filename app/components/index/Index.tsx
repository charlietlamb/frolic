import {useRef} from 'react';
import Faq from '../faq/Faq';
import IndexCorporate from './corporate/IndexCorporate';
import Features from './features/Features';
import Hero from './hero/Hero';
import Info from './info/Info';
import Product from '../product/Product';
import StickyProduct from './sticky/StickyProduct';

export default function Index() {
  const productRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Hero />
      <Features />
      <Info />
      <Product className="py-16" index productRef={productRef} />
      <IndexCorporate />
      <Faq />
      <StickyProduct productRef={productRef} />
    </>
  );
}
