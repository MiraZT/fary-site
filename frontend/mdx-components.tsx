import type { MDXComponents } from 'mdx/types';

import { Button } from './shared/components/ui/button';
import Link from 'next/link';

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="scroll-m-20 text-center text-heading-1 font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="scroll-m-20 border-b pb-2 text-heading-2 font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="scroll-m-20 text-heading-3 font-semibold tracking-tight">
      {children}
    </h3>
  )
};

export function useMDXComponents(): MDXComponents {
  return components;
}