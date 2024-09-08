import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {heroImages} from './heroImages';

export default function HeroContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setNextImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-base relative flex flex-col items-center justify-center flex-grow h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentImageIndex}
          src={heroImages[currentImageIndex]}
          className="absolute inset-0 object-cover object-center w-full h-screen"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.0}}
        />
      </AnimatePresence>
      <motion.img
        key={nextImageIndex}
        src={heroImages[nextImageIndex]}
        className="absolute inset-0 object-cover object-center w-full h-screen"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.2}}
      />
      <div className="bg-dark/40 absolute inset-0"></div>
      <div className="font-futura big-size absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        This is a tagline.
      </div>
    </div>
  );
}
