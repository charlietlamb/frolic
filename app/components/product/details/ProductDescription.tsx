import {motion} from 'framer-motion';
import {useAtomValue} from 'jotai';
import {productAtom} from '~/store/frolic';

export default function ProductDescription() {
  const product = useAtomValue(productAtom);
  if (!product) return null;

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6}}
    >
      <motion.p
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        {product.description}
      </motion.p>
    </motion.div>
  );
}
