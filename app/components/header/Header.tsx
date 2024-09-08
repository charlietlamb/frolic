import type {CartApiQueryFragment} from 'storefrontapi.generated';
import HeaderLogo from './HeaderLogo';
import {HeaderMenuLeft} from './HeaderMenuLeft';
import {HeaderMenuRight} from './HeaderMenuRight';
import {useSetAtom} from 'jotai';
import {headerAtom} from '~/store/header';
import {useScroll} from 'framer-motion';
import {useHeaderScroll} from './useHeaderScroll';
import {motion} from 'framer-motion';
import HeaderMobileLeft from './mobile/HeaderMobileLeft';
import {useOpenStore} from '~/store/open';

export function Header({
  isLoggedIn,
  cart,
}: {
  cart: CartApiQueryFragment | null;
  isLoggedIn: boolean;
}) {
  const setHeaderKey = useSetAtom(headerAtom);
  const {headerOpen, setHeaderOpen} = useOpenStore();
  const {scrollYProgress} = useScroll();
  useHeaderScroll(scrollYProgress, setHeaderOpen);
  const {cartOpen, setCartOpen} = useOpenStore();
  return (
    <motion.header
      initial={{opacity: 0, y: '-100%'}}
      animate={{
        opacity: headerOpen ? 1 : 0,
        y: headerOpen ? 0 : '-100%',
      }}
      exit={{opacity: 0, y: '-100%'}}
      transition={{duration: 0.6}}
      className="top-4 fixed z-50 flex items-center justify-center w-full px-6 py-2"
      onMouseLeave={() => setHeaderKey(null)}
    >
      <div className="backdrop-blur-sm bg-purple font-avenir rounded-base flex items-center justify-center w-full px-8 py-2 overflow-hidden">
        <HeaderMobileLeft />
        <HeaderMenuLeft />
        <HeaderLogo />
        <HeaderMenuRight
          cart={cart}
          isLoggedIn={isLoggedIn}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      </div>
    </motion.header>
  );
}
