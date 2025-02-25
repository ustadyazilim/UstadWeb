'use client';

import type { MDXComponents } from 'mdx/types';
import { UstadMDX } from '@shared/index';

const components: MDXComponents = {
  ...UstadMDX,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
