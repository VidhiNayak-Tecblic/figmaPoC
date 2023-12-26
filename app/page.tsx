import type { Metadata } from 'next';
import Hero from '~/components/widgets/Hero';

import { SITE } from '~/config.js';
import { heroHome } from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
    </>
  );
}
