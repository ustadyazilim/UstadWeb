'use client';

import type { MDXComponents } from 'mdx/types';
import { UstadMDX } from '@shared/index';

// This object defines how to render markdown elements
const components: MDXComponents = {
  ...UstadMDX,
  // You can override or add additional components here if needed
};

export function useMDXComponents(): MDXComponents {
  return components;
}
