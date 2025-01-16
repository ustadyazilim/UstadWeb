import { HTMLProps } from 'react';

const MDXComponents = {
  h1: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-bold" {...props}>
      {children}
    </h1>
  ),
  code: ({ children, ...props }: HTMLProps<HTMLElement>) => (
    <code className="bg-gray-200 p-1 rounded" {...props}>
      {children}
    </code>
  ),
  // Add more custom components as needed
};

export default MDXComponents;
