import {Link} from '@remix-run/react';
import {cn} from '~/lib/utils';

export default function HeaderLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        'uppercase lg:text-lg text-md whitespace-nowrap hover:text-light transition-all duration-600',
        className,
      )}
    >
      {children}
    </Link>
  );
}
