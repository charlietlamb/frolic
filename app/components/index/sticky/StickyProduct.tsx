import {motion, AnimatePresence} from 'framer-motion';
import {Cookie} from 'lucide-react';
import {useOpenStore} from '~/store/open';

const variants = {
  initial: {opacity: 0, y: 50},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: 50},
};

export default function StickyProduct({
  productRef,
}: {
  productRef: React.RefObject<HTMLDivElement>;
}) {
  return null;
  const {productOpen} = useOpenStore();
  return (
    <AnimatePresence>
      {productOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 min-h-screen pointer-events-none"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{duration: 0.3}}
        >
          <motion.div
            className="left-4 bottom-4 hover:bg-purple/90 absolute !z-50 flex items-center gap-2 py-1 px-4 font-futura bg-purple/50 backdrop-blur-md border rounded-lg cursor-pointer pointer-events-auto"
            onClick={() => {
              productRef.current?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            Curate Your Own Product <Cookie className="mb-1" strokeWidth={1} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
