// 'use client';
// import React, { useState } from 'react';
// import  CodeEditor  from '~/components/widgets/CodeMirrorCompiler/CodeEditor';

// export default function CompileSection() {
//   const [htmlCode, setHtmlCode] = useState('');
//   const [cssCode, setCssCode] = useState('');
//   const [jsCode, setJsCode] = useState('');
//   const [output, setOutput] = useState('');

//   const compileCode = () => {
//     const fullCode = `<style>${cssCode}</style><script>${jsCode}</script>${htmlCode}`;
//     setOutput(fullCode);
//   };
//   return (
//     <div>
//       hii
//       <CodeEditor language="htmlmixed" code={htmlCode} onChange={setHtmlCode} />
//       <CodeEditor language="css" code={cssCode} onChange={setCssCode} />
//       <CodeEditor language="javascript" code={jsCode} onChange={setJsCode} />
//       <button onClick={compileCode}>Compile</button>
//       <div>
//         <h2>Output:</h2>
//         <iframe
//           title="outputFrame"
//           srcDoc={output}
//           style={{ width: '100%', height: '300px', border: '1px solid #ddd' }}
//         ></iframe>
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useState } from 'react';

export default function CompileSection({ htmlCode, cssCode, jsCode }) {
  const [result, setResult] = useState('');
  const compileCode = () => {
    const iframe = document.getElementById('resultFrame');
    const iframeDoc = iframe.contentDocument;

    const fullHTML = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(fullHTML);
    iframeDoc.close();
  };
  return (
    <div>
    <button onClick={compileCode}>Run Code</button>
    <iframe id="resultFrame" title="Result" />
  </div>
  );
}