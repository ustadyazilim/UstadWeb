'use client';
/** Core Imports */
import { PropsWithChildren, useRef } from 'react';
interface CodeblockProps extends PropsWithChildren {
  id?: string;
}
/** Props Interface */
export interface UstadCodeblockProps extends CodeblockProps {
  id?: string;
}
const Codeblock = ({ id, children }: UstadCodeblockProps) => {
  const codeRef = useRef<HTMLDivElement>(null);

  const copyFunction = () => {
    if (codeRef.current) {
      const copyText = codeRef.current.textContent || '';
      const textArea = document.createElement('textarea');
      textArea.value = copyText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }
  };

  return (
    <div>
      <button onClick={copyFunction} type="button">
        Copy Codeblock
      </button>
      <div ref={codeRef} id={id}>
        {children}
      </div>
    </div>
  );
};

export default Codeblock;
