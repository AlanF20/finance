import overview from '@/public/icon-nav-overview.svg'
import transactions from '@/public/icon-nav-transactions.svg'
import budget from '@/public/icon-nav-budgets.svg'
import pot from '@/public/icon-nav-pots.svg'
import bills from '@/public/icon-nav-recurring-bills.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '../aside/icon'

const links = [
  { name: 'Overview', href: '/dashboard', icon: overview },
  { name: 'Transactions', href: '/dashboard/transactions', icon: transactions },
  { name: 'Budgets', href: '/dashboard/budgets', icon: budget },
  { name: 'Pots', href: '/dashboard/pots', icon: pot },
  { name: 'Recurring bills', href: '/dashboard/bills', icon: bills },
]
export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map(link => {
        const svgUrl = link.icon.src
        return (
          <Link
            key={link.name}
            href={link.href}
            className='flex bg-[--beige100] pt-[8px] pb-[12px]'
          >
            <Icon svgUrl={svgUrl} twStyle='w-[18px] h-[18px]' isSelected={pathname === link.href} />
            <p className='hidden'>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}