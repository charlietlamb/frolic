import {Separator} from '../ui/separator';

export default function OffersHeader() {
  return (
    <div>
      <h4 className="font-futura h3-size text-green font-medium uppercase">
        Offers
      </h4>
      <p className="font-futura font-light">Our special offers at the moment</p>
      <Separator className="bg-green my-2" />
    </div>
  );
}
