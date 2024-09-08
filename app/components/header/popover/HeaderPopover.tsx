import {headerAtom} from '~/store/header';
import {useAtom} from 'jotai';
import {Popover, PopoverContent, PopoverTrigger} from '~/components/ui/popover';
import HeaderPopoverContent from './HeaderPopoverContent';

export default function HeaderPopover() {
  const [headerKey, setHeaderKey] = useAtom(headerAtom);
  return (
    <Popover open={!!headerKey}>
      <PopoverTrigger />
      <PopoverContent
        className="bg-purple backdrop-blur-sm md:block rounded-base border-purple hidden mt-4 ml-6 overflow-hidden"
        style={{width: 'calc(100vw - 64px)'}}
        side="bottom"
        sideOffset={28}
        onMouseLeave={() => setHeaderKey(null)}
      >
        <HeaderPopoverContent />
      </PopoverContent>
    </Popover>
  );
}
