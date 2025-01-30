import Script from 'next/script';

export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script src="/_next/static/runtime.js" strategy="beforeInteractive" />
      <Script src="/_next/static/polyfills.js" strategy="beforeInteractive" />
      <Script src="/_next/static/main.js" strategy="beforeInteractive" />
    </>
  );
}
