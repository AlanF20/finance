import overview from '@/public/icon-nav-overview.svg'
import transactions from '@/public/icon-nav-transactions.svg'
import budget from '@/public/icon-nav-budgets.svg'
import pot from '@/public/icon-nav-pots.svg'
import bills from '@/public/icon-nav-recurring-bills.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '../aside/icon'
import clsx from 'clsx'

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
				const isSelected = pathname === link.href
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex pt-[8px] pb-[12px] w-1/6 items-center justify-center rounded-t-[8px]', { 'bg-[--beige100] border border-solid border-b-[5px] border-b-[var(--secGreen)]': isSelected })}
					>
						<Icon svgUrl={svgUrl} twStyle='w-[24px] h-[24px]' isSelected={isSelected} />
						<p className='hidden'>{link.name}</p>
					</Link>
				)
			})}
		</>
	)
}
