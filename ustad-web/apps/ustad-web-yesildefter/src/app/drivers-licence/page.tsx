/** Core Imports */
import Link from 'next/link'

/** Util Imports */
import getAllLicenceRegulations from '../utils/get-all-licence-regulations'

export default async function DriversLicenceHomePage() {
  const licenceRegulations = getAllLicenceRegulations('licence-regulations')

  return (
    <main>
      <h1>Drivers Licence Home</h1>
      <ul>
        {licenceRegulations?.map(licenceRegulation => (
          <li key={licenceRegulation.slug}>
            <Link href={`/drivers-licence/${licenceRegulation.slug}`}>{licenceRegulation.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
