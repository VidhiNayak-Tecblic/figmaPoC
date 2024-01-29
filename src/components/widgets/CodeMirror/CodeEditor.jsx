'use client';
import React, { useState, useRef, useEffect } from 'react';
import CodeMirror from 'codemirror';
// import 'codemirror/mode/all';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

export default function CodeEditor({ language, code, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = CodeMirror(editorRef.current, {
      mode: language,
      theme: 'material',
      lineNumbers: true,
      value: code,
      viewportMargin: Infinity,
      lineWrapping: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
    });

    editor.on('change', (instance) => {
      onChange(instance.getValue());
    });

    return () => {
      editor.toTextArea();
    };
  }, [language, code, onChange]);

  return <div ref={editorRef}></div>;
}
