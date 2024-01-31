// 'use client';
// import React, { useState, useRef, useEffect } from 'react';

// // import 'codemirror/lib/codemirror.css';
// // import 'codemirror/mode/javascript/javascript';
// import CodeMirror from 'codemirror';
// // import 'codemirror/mode/all';
// import 'codemirror/mode/htmlmixed/htmlmixed';
// import 'codemirror/mode/css/css';
// // import 'codemirror/mode/javascript/javascript';
// // import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';

// export default function CodeEditor({ language, code, onChange }) {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     const editor = CodeMirror(editorRef.current, {
//       mode: language,
//       theme: 'material',
//       lineNumbers: true,
//       value: code,
//       viewportMargin: Infinity,
//       lineWrapping: true,
//       extraKeys: { 'Ctrl-Space': 'autocomplete' },
//     });

//     editor.on('change', (instance) => {
//       onChange(instance.getValue());
//     });

//     return () => {
//       editor.toTextArea();
//     };
//   }, [language, code, onChange]);

//   return <div ref={editorRef}></div>;
// }

'use client';
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // Corrected import path
import 'codemirror/mode/htmlmixed/htmlmixed';
// import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';


export default function CodeEditor({ language, code, onChange }) {
  // const [htmlCode, setHtmlCode] = useState('<div>Hello, World!</div>');
  // const [cssCode, setCssCode] = useState('div { color: blue; }');
  // const [jsCode, setJsCode] = useState('');

  // const [livePreview, setLivePreview] = useState('');

  // useEffect(() => {
  //   const updateLivePreview = () => {
  //     setLivePreview(`
  //       <html>
  //         <head>
  //           <style>${cssCode}</style>
  //         </head>
  //         <body>
  //           ${htmlCode}
  //           <script>${jsCode}</script>
  //         </body>
  //       </html>
  //     `);
  //   };

  //   updateLivePreview();
  // }, [htmlCode, cssCode, jsCode]);

  // return (
  //   <div>
  //     <div>
  //       <label>HTML:</label>
  //       <CodeMirror
  //         value={htmlCode}
  //         onBeforeChange={(editor, data, value) => setHtmlCode(value)}
  //         options={{ mode: 'htmlmixed', theme: 'default', lineNumbers: true }}
  //       />
  //     </div>

  //     <div>
  //       <label>CSS:</label>
  //       <CodeMirror
  //         value={cssCode}
  //         onBeforeChange={(editor, data, value) => setCssCode(value)}
  //         options={{ mode: 'css', theme: 'default', lineNumbers: true }}
  //       />
  //     </div>

  //     <div>
  //       <label>JavaScript:</label>
  //       <CodeMirror
  //         value={jsCode}
  //         onBeforeChange={(editor, data, value) => setJsCode(value)}
  //         options={{ mode: 'javascript', theme: 'default', lineNumbers: true }}
  //       />
  //     </div>

  //     <div>
  //       <label>Live Preview:</label>
  //       <iframe
  //         title="Live Preview"
  //         srcDoc={livePreview}
  //         style={{ width: '100%', height: '300px', border: '1px solid #ccc' }}
  //       />
  //     </div>
  //   </div>
  // );


  return( <CodeMirror
    value={code}
    onBeforeChange={(editor, data, value) => onChange(value)}
    options={{
      mode: language,
      theme: 'material',
      lineNumbers: true,
    }}
  />)
}
