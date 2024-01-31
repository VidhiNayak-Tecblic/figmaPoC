
'use client'
import Head from 'next/head';
import React, { useState } from 'react';
import CodeEditor from '~/components/widgets/CodeMirrorCompiler/CodeEditor';
import CompileSection from '~/components/widgets/CodeMirrorCompiler/CompileSection'


export default function page() {

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  return (
    <div>
    <Head>
      <title>Code Compiler</title>
    </Head>
    <h1>Code Compiler</h1>
    <CodeEditor language="htmlmixed" code={htmlCode} onChange={setHtmlCode} />
    <CodeEditor language="css" code={cssCode} onChange={setCssCode} />
    <CodeEditor language="javascript" code={jsCode} onChange={setJsCode} />
    <CompileSection htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
  </div>
  );
}
