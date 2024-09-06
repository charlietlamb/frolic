import {Product, ProductVariant} from '@shopify/hydrogen/storefront-api-types';
import {atom} from 'jotai';

export const productAtom = atom<Product | null>(null);
export const selectedVariantAtom = atom<ProductVariant | null>(null);
