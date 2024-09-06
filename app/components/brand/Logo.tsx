import {cn} from '~/lib/utils';

export default function Logo({className}: {className?: string}) {
  return (
    <div
      className={cn(
        'font-anti h1-size text-dark flex flex-col items-center justify-center',
        className,
      )}
    >
      FROLIC
    </div>
  );
}
