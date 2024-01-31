'use client';
import { Select } from 'flowbite-react';
import React from 'react';
import { customStyles } from '~/constants/customStyles';
import { languageOptions } from '~/constants/languageOptions';

export default function LanguagesDropdown() {

  const defaultLanguageOption = languageOptions[0]; // Choose the default language option
  return (
    <div>
      <Select
        placeholder={`Filter By Category`}
        options={languageOptions}
        styles={customStyles}
        defaultValue={defaultLanguageOption.value}
        onChange={(selectedOption) => onSelectChange(selectedOption)}
      />
    </div>
  );
}
