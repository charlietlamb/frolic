import {motion} from 'framer-motion';

export default function ProductTitle() {
  return (
    <motion.div
      className="flex flex-col"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6}}
    >
      <motion.p
        className="text-dark uppercase"
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        All work, all play
      </motion.p>
      <motion.h2
        className="text-dark font-futura h1-size"
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        Movement Base
      </motion.h2>
    </motion.div>
  );
}
