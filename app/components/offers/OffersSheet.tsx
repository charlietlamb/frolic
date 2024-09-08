import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import OffersContent from './OffersContent';

export default function OffersSheet() {
  return (
    <Sheet>
      <SheetTrigger className="md:flex hover:text-light duration-600 items-center hidden px-2 uppercase transition-all">
        View Offers
      </SheetTrigger>
      <SheetContent side="left" className="rounded-l-none rounded-r-lg">
        <OffersContent />
      </SheetContent>
    </Sheet>
  );
}
