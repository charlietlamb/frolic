import {useOpenStore} from '~/store/open';
import useWindowDimensions from '../utils/useWindowDimensions';
import useSetHeaderOpen from '../utils/useSetHeaderOpen';
import {cn} from '~/lib/utils';
import Faq from '../faq/Faq';
import {useSetProductOpen} from '../utils/useSetBundleOpen';
import ProductDisplay from './display/ProductDisplay';
import ProductHero from './hero/ProductHero';
import ProductContent from './ProductContent';

export default function Product({
  className,
  index = false,
  productRef,
}: {
  className?: string;
  index?: boolean;
  productRef?: React.RefObject<HTMLDivElement>;
}) {
  const {setHeaderOpen, setProductOpen} = useOpenStore();
  const {height} = useWindowDimensions();
  useSetHeaderOpen(setHeaderOpen, height);
  useSetProductOpen(setProductOpen, productRef);
  return (
    <div>
      <ProductHero />
      <div
        className={cn(
          'padding-main bundle md:flex-row relative flex flex-col py-8 gap-4 md:gap-0',
          className,
        )}
      >
        <ProductDisplay />
        <ProductContent productRef={productRef} />
      </div>
    </div>
  );
}
