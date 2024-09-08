import {motion} from 'framer-motion';
import {Button} from '../../ui/button';
import {useAtom, useAtomValue} from 'jotai';
import {AddToCartButton} from '../../AddToCartButton';
import {useEffect, useState} from 'react';
import {useOpenStore} from '~/store/open';
import {cn} from '~/lib/utils';
import {selectedVariantAtom} from '~/store/frolic';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
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

const buttonVariants = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1, transition: {duration: 0.4}},
};

export default function ProductAddToCart() {
  const {setCartOpen} = useOpenStore();
  const selectedVariant = useAtomValue(selectedVariantAtom);
  console.log(selectedVariant);
  if (!selectedVariant) return null;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.1}}
      onClick={() => {
        setCartOpen(true);
      }}
    >
      <AddToCartButton
        disabled={!selectedVariant}
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                  selectedVariant,
                },
              ]
            : []
        }
      >
        <motion.div variants={buttonVariants}>
          <Button
            variant="purple"
            className={cn('p-size mt-4')}
            disabled={selectedVariant.currentlyNotInStock}
          >
            {selectedVariant.currentlyNotInStock
              ? 'Out of stock'
              : `Add to cart $${parseFloat(
                  selectedVariant.price.amount,
                ).toFixed(2)}`}
          </Button>
        </motion.div>
      </AddToCartButton>
    </motion.div>
  );
}
