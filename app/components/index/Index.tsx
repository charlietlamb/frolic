import {useRef} from 'react';
import Faq from '../faq/Faq';
import Hero from './hero/Hero';
import Product from '../product/Product';
import StickyProduct from './sticky/StickyProduct';
import How from './how/How';

export default function Index() {
  const productRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Hero />
      <How />
      <Product className="py-16" index productRef={productRef} />
      <Faq />
      <StickyProduct productRef={productRef} />
    </>
  );
}
