import {Separator} from '~/components/ui/separator';

export default function HeaderMobileMenuHeader() {
  return (
    <div>
      <h4 className="font-futura h3-size text-green font-medium uppercase">
        Menu
      </h4>
      <p className="font-futura font-light">
        Choose an option to expand the menu.
      </p>
      <Separator className="bg-green my-2" />
    </div>
  );
}
