import HeaderBar from '@/components/layout/header-bar'
import Sidebar from '@/components/layout/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBar />
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <main className='flex-1 overflow-hidden pt-16'>{children}</main>
      </div>
    </>
  )
}
