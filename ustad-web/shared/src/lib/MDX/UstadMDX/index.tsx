'use client';

import { HTMLProps } from 'react';
import UstadButton, { UstadButtonProps } from '../../Button/UstadButton';
import UstadCard, { UstadCardProps } from '../../Card/UstadCard';
import UstadCTA, { UstadCTAProps } from '../../CTA/UstadCTA';
import UstadCodeblock, {
  UstadCodeblockProps,
} from '../../Codeblock/UstadCodeblock';
import UstadFooter, { UstadFooterProps } from '../../Footer/UstadFooter';
import UstadHeader, { UstadHeaderProps } from '../../Header/UstadHeader';
import UstadHero, { UstadHeroProps } from '../../Hero/UstadHero';
import UstadRedefineProductivityCard, {
  UstadRedefineProductivityCardProps,
} from '../../Card/UstadRedefineProductivityCard';
import UstadTestimonialCard, {
  UstadTestimonialCardProps,
} from '../../Card/UstadTestimonialCard';
import UstadFeatureCard, {
  UstadFeatureCardProps,
} from '../../Card/UstadFeatureCard';
import UstadLink from '../../Link/UstadLink';

const MDXComponents = {
  // Basic HTML elements
  h1: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-bold mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-xl font-bold mb-3" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-lg font-bold mb-2" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-4" {...props}>
      {children}
    </p>
  ),
  code: ({ children, ...props }: HTMLProps<HTMLElement>) => (
    <code className="bg-gray-200 p-1 rounded" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: HTMLProps<HTMLPreElement>) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
      {children}
    </pre>
  ),
  Button: (props: UstadButtonProps) => <UstadButton {...props} />,
  Card: (props: UstadCardProps) => <UstadCard {...props} />,
  CTA: (props: UstadCTAProps) => <UstadCTA {...props} />,
  Codeblock: (props: UstadCodeblockProps) => <UstadCodeblock {...props} />,
  Footer: (props: UstadFooterProps) => <UstadFooter {...props} />,
  Header: (props: UstadHeaderProps) => <UstadHeader {...props} />,
  Hero: (props: UstadHeroProps) => <UstadHero {...props} />,
  RedefineProductivityCard: (props: UstadRedefineProductivityCardProps) => (
    <UstadRedefineProductivityCard {...props} />
  ),
  TestimonialCard: (props: UstadTestimonialCardProps) => (
    <UstadTestimonialCard {...props} />
  ),
  FeatureCard: (props: UstadFeatureCardProps) => (
    <UstadFeatureCard {...props} />
  ),
  Link: ({ children, ...props }: HTMLProps<HTMLAnchorElement>) => (
    <UstadLink {...props}>{children}</UstadLink>
  ),
};

export default MDXComponents;
