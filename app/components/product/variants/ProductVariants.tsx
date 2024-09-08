import {useAtom} from 'jotai';
import {motion} from 'framer-motion';
import {selectedColorAtom} from '~/store/frolic';
import {productVariants} from './productVariants';
import {productVariantsColorMap} from './productVariantsColorMap';
import {cn} from '~/lib/utils';
import {ProductVariantType} from './ProductVariantType';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 10, scale: 0.95},
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {duration: 0.6, ease: 'easeOut'},
  },
};

export default function ProductVariants() {
  const [color, setColor] = useAtom(selectedColorAtom);
  return (
    <motion.div
      className="flex flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      <motion.h4 className="font-futura text-lg" variants={itemVariants}>
        Color
      </motion.h4>
      <motion.div className="flex items-center gap-4" variants={itemVariants}>
        {productVariants.map((variant, index) => (
          <motion.div
            key={variant}
            className={cn(
              'w-8 h-8 rounded-full cursor-pointer transition-all duration-300',
              color === variant &&
                'ring-1 ring-black ring-offset-2 ring-offset-light',
            )}
            style={{
              backgroundColor:
                productVariantsColorMap[
                  variant as keyof typeof productVariantsColorMap
                ],
            }}
            onClick={() => setColor(variant as ProductVariantType)}
            variants={itemVariants}
            transition={{duration: 0.3}}
            custom={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
