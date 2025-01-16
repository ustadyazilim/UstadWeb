import { usePathname } from 'next/navigation'

import { Locale } from '../language/i18n-config'

export function useSwitchLocaleHref() {
  const pathName = usePathname()

  const getSwitchLocaleHref = (locale: Locale) => {
    if (!pathName) return '/'
    const words = pathName.split('/')
    words[1] = locale
    return words.join('/')
  }

  return getSwitchLocaleHref
}
