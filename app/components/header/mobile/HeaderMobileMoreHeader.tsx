import {Separator} from '~/components/ui/separator';

export default function HeaderMobileMoreHeader() {
  return (
    <div>
      <h4 className="font-futura h3-size text-green font-medium uppercase">
        More
      </h4>
      <p className="font-futura font-light">Find out more about Frolic.</p>
      <Separator className="bg-green my-2" />
    </div>
  );
}
