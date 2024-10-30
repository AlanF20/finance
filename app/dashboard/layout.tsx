'use client'

import Aside from "../ui/dashboard/aside"

export const experimental_ppr = true
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex h-screen flex-col md">
			<div className="w-full fixed bottom-0">
				<Aside />
			</div>
			<div className="w-full flex flex-col px-[16px] py-[16px] gap-[32px]">
				{children}
			</div>
		</main>
	)
}
