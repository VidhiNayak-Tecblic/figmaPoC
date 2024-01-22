import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';
// import Logo2 from '~/components/atoms/Logo2';
import { FooterProps, HeaderProps } from '../types';

// Announcement data
// export const announcementData: AnnouncementProps = {
//   title: 'NEW',
//   callToAction: {
//     text: 'canvas web app',
//     href: 'https://nextjs.org/blog/next-14',
//   },
//   callToAction2: {
//     text: 'testing 2',
//     href: 'https://twitter.com/intent/user?screen_name=onwidget',
//   },
// };

// Header data
export const headerData: HeaderProps = {
  links: [
    // {
    //   label: 'Pages',
    //   icon: IconChevronDown,
    //   links: [
    //     {
    //       label: 'Terms & Conditions',
    //       href: '/',
    //     },
    //     {
    //       label: 'Privacy Policy',
    //       href: '/',
    //     },
    //   ],
    // },
    {
      label: 'Home',
      elementId: 'home',
      href: '',
    },
    {
      label: 'About',
      elementId: 'about-us',
      href: '/',
    },
    {
      label: 'Services',
      elementId: 'industry',
      href: '/',
    },
    {
      label: 'Testimonnial',
      elementId: 'hero-sec',
      href: '/',
    },
    {
      label: 'CTA',
      elementId: 'hero-sec',
      href: '/',
    },
    {
      label: 'FAQs',
      elementId: 'hero-sec',
      href: '/',
    },
  ],
  actions: [
    {
      text: 'Contact us',
      href: '/',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

// Footer data
export const footerData: FooterProps = {
  title: 'canvas',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer testing',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs test',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm flex items-center gap-2">
      <div className="w-14">Logo</div>
      <p className="mt-2"> Copyright © canvas.com</p>
    </div>
  ),
};
