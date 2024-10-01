import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {type MetaFunction} from '@remix-run/react';
import Index from '~/components/index/Index';
import ComingSoon from '~/components/comingSoon/ComingSoon';

export const meta: MetaFunction = () => {
  return [{title: 'Frolic'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;
  return defer({});
}

export default function Homepage() {
  //return <Index />;
  return <ComingSoon />;
}
