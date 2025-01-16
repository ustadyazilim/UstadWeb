'use client'

/** Type Imports */
import type { Locale } from '../language/i18n-config'

/** Core Imports */
import { usePathname } from 'next/navigation'

interface DriverLicenceLayoutProps {
  children: React.ReactNode
  params: { lang: Locale }
}

const DriverLicenceLayout = ({ children }: DriverLicenceLayoutProps) => {
  const pathname = usePathname()

  // TODO(@Janberk): remove/
  console.log('Current pathname:', pathname)

  return (
    <div>
      <aside>
        <h2>Driver's Licence Sidebar</h2>
      </aside>
      <main>{children}</main>
    </div>
  )
}

export default DriverLicenceLayout
