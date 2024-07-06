'use client';
import Image from 'next/image';

import { useGetUsersQuery } from '@/proxy/http';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { UserNav } from './components/user-nav';

export default function TaskPage() {
  const { data } = useGetUsersQuery({ page: 1, take: 10 });
  const users = data?.values || [];
  return (
    <>
      <div className='md:hidden'>
        <Image
          src='/examples/tasks-light.png'
          width={1280}
          height={998}
          alt='Playground'
          className='block dark:hidden'
        />
        <Image
          src='/examples/tasks-dark.png'
          width={1280}
          height={998}
          alt='Playground'
          className='hidden dark:block'
        />
      </div>
      <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
            <p className='text-muted-foreground'>List of user in system</p>
          </div>
          <div className='flex items-center space-x-2'>
            <UserNav />
          </div>
        </div>
        <DataTable data={users} columns={columns} />
      </div>
    </>
  );
}
