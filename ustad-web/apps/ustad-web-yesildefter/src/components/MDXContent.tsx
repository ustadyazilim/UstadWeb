'use client';

import { MDXRemote } from 'next-mdx-remote';
import { useMDXComponents } from '../app/mdx-components';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MDXContentProps {
  content: MDXRemoteSerializeResult;
}

export function MDXContent({ content }: MDXContentProps) {
  const components = useMDXComponents();

  return <MDXRemote {...content} components={components} />;
}
