import {motion} from 'framer-motion';
import ProductTitle from './ProductTitle';
import ProductAddToCart from './action/ProductAddToCart';
const containerVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export default function ProductContent({
  productRef,
}: {
  productRef: React.RefObject<HTMLDivElement> | undefined;
}) {
  return (
    <motion.div
      className="bg-greenLight md:flex-order-1 flex flex-col w-full gap-4 py-8 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
      ref={productRef}
    >
      <ProductTitle />
      <ProductAddToCart />
    </motion.div>
  );
}
