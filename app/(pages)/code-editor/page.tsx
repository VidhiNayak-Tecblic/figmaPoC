import React from 'react';
import CodeEditorWindow from '~/components/widgets/CodeEditor/CodeEditorWindow';
import Landing from '~/components/widgets/CodeEditor/Landing';
import LanguagesDropdown from '~/components/widgets/CodeEditor/LanguagesDropdown';
import OutputDetails from '~/components/widgets/CodeEditor/OutputDetails';
import OutputWindow from '~/components/widgets/CodeEditor/OutputWindow';
import ThemeDropdown from '~/components/widgets/CodeEditor/ThemeDropdown';

export default function page() {
  return (
    <div>
      <Landing />
    </div>
  );
}
