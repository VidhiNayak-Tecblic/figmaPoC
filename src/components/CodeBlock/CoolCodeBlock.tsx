import React from 'react';
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeBlock } from 'react-code-blocks'; // Make sure you import CodeBlock correctly

const CoolCodeBlock: React.FC = ({ codeContent }: any) => {
  const draculaTheme = {
    lineNumberColor: '#6272a4',
    lineNumberBgColor: '#282a36',
    backgroundColor: '#282a36',
    textColor: '#f8f8f2',
    substringColor: '#f1fa8c',
    keywordColor: '#ff79c6',
    attributeColor: '#50fa7b',
    selectorTagColor: '#8be9fd',
    docTagColor: '#bd93f9',
    nameColor: '#f8f8f2',
    builtInColor: '#ffb86c',
    literalColor: '#8be9fd',
    bulletColor: '#50fa7b',
    codeColor: '#f8f8f2',
    additionColor: '#50fa7b',
    regexpColor: '#bd93f9',
    symbolColor: '#ff79c6',
    variableColor: '#f8f8f2',
    templateVariableColor: '#f8f8f2',
    linkColor: '#8be9fd',
    selectorAttributeColor: '#f8f8f2',
    selectorPseudoColor: '#f8f8f2',
    typeColor: '#8be9fd',
    stringColor: '#f1fa8c',
    selectorIdColor: '#ff79c6',
    selectorClassColor: '#ff79c6',
    quoteColor: '#f1fa8c',
    templateTagColor: '#8be9fd',
    deletionColor: '#ff79c6',
    titleColor: '#f8f8f2',
    sectionColor: '#8be9fd',
    commentColor: '#6272a4',
    metaKeywordColor: '#f8f8f2',
    metaColor: '#f8f8f2',
    functionColor: '#50fa7b',
    numberColor: '#bd93f9',
  };

  return (
    <div>
      <CodeBlock text={codeContent} language="javascript" showLineNumbers={false} theme={draculaTheme} />
    </div>
  );
};

export default CoolCodeBlock;
