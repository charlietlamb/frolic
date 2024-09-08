import {Product, ProductVariant} from '@shopify/hydrogen/storefront-api-types';
import {atom} from 'jotai';
import {ProductVariantType} from '~/components/product/variants/ProductVariantType';

export const productAtom = atom<Product | null>(null);

export const availableColorsAtom = atom<string[]>((get) => {
  const product = get(productAtom);
  if (!product) return [];
  return product.options[0]?.values || product.options[0]?.optionValues || [];
});

export const selectedColorAtom = atom<ProductVariantType>('Pink');

export const selectedVariantAtom = atom<ProductVariant | null>((get) => {
  const product = get(productAtom);
  const color = get(selectedColorAtom);
  if (!product || !color) return null;
  let sVariant = product.variants.nodes[0];
  sVariant.selectedOptions[0].value = color;
  return sVariant;
});
