'use client';
import { INavItem } from '@/interfaces/dashboard.interface';
import { cn } from '@/lib/utils';
import { useLogoutMutation } from '@/proxy/http';
import { RootState } from '@/store';
import { GlobalState } from '@/store/global';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { Icons } from '../ui/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface DashboardNavProps {
  items: INavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export default function DashboardNav({ items, setOpen, isMobileNav = false }: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSelector<RootState, GlobalState>((state) => state.global);
  const [logout] = useLogoutMutation();
  if (!items?.length) {
    return null;
  }

  return (
    <nav className='grid items-start gap-2'>
      <TooltipProvider>
        {items.map((item, index) => {
          const Icon = Icons[(item.icon as keyof typeof Icons) || 'arrowRight'];
          return (
            item.href && (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      path === item.href ? 'bg-accent' : 'transparent',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                    onClick={async () => {
                      if (item.title === 'Logout') {
                        await logout(null);
                        return;
                      }
                      if (setOpen) setOpen(false);
                    }}
                  >
                    <Icon className={`ml-3 size-5`} />
                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className='mr-2 truncate'>{item.title}</span>
                    ) : (
                      ''
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align='center'
                  side='right'
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          );
        })}
      </TooltipProvider>
    </nav>
  );
}
