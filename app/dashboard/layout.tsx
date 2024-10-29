'use client'

import Aside from "../ui/dashboard/aside"

export const experimental_ppr = true
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen flex-col md">
      <div>
        <Aside />
      </div>
      <div>
        {children}
      </div>
    </main>
  )
}