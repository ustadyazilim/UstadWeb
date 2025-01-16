/** Core Imports */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/** MDX Imports  */
import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import MDXComponents from '../../components/MDX/UstadMDX'

interface LicenceRegulationPageProps {
  params: { slug: string }
}

const root = process.cwd()

export default async function LicenceRegulationPage({ params }: LicenceRegulationPageProps) {
  const { slug } = params
  const filePath = path.join(root, 'content', 'licence_regulations', `${slug}.mdx`)

  console.log('/n /n Licence Regulation fetched from the server component! /n', `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return <h1>404 - Licence Regulation Not Found</h1>
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  const mdxSource = await serialize(content)

  return (
    <main>
      <h1>{data.title}</h1>
      <MDXRemote source={mdxSource} components={MDXComponents} />
    </main>
  )
}
