'use client';
import React, { useState } from 'react';
import CodeEditor from '~/components/widgets/CodeMirror/CodeEditor';

export default function CompileSection() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [output, setOutput] = useState('');

  const compileCode = () => {
    const fullCode = `<style>${cssCode}</style><script>${jsCode}</script>${htmlCode}`;
    setOutput(fullCode);
  };
  return (
    <div>
      hii
      <CodeEditor language="htmlmixed" code={htmlCode} onChange={setHtmlCode} />
      <CodeEditor language="css" code={cssCode} onChange={setCssCode} />
      <CodeEditor language="javascript" code={jsCode} onChange={setJsCode} />
      <button onClick={compileCode}>Compile</button>
      <div>
        <h2>Output:</h2>
        <iframe
          title="outputFrame"
          srcDoc={output}
          style={{ width: '100%', height: '300px', border: '1px solid #ddd' }}
        ></iframe>
      </div>
    </div>
  );
}
