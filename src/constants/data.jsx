import { BotMessageSquare } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { GlobeLock } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

import image1 from '../assets/CodingPictures/image1.jpg';
import image2 from '../assets/CodingPictures/image2.jpg';
import image3 from '../assets/CodingPictures/image3.jpg';
import image4 from '../assets/CodingPictures/image4.jpg';
import image5 from '../assets/CodingPictures/image5.jpg';
import image6 from '../assets/CodingPictures/image6.jpg';

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  // { label: 'Workflow', to: '/workflow' },
  // { label: 'Pricing', to: 'pricing' },
  // { label: 'Testimonials', to: 'testimonials' },
];

export const authLink = [
  { label: 'Sign In', to: '/signin' },
  { label: 'Sign Up', to: '/signup' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: '끌어다 놓기 인터페이스',
    description:
      'Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.',
    image: image1,
  },
  {
    icon: <Fingerprint />,
    text: '다중 플랫폼 호환성',
    description:
      'Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.',
    image: image2,
  },
  {
    icon: <ShieldHalf />,
    text: '내장된 템플릿',
    description:
      'Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.',
    image: image3,
  },
  {
    icon: <BatteryCharging />,
    text: '실시간 미리보기',
    description:
      'Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.',
    image: image4,
  },
  {
    icon: <PlugZap />,
    text: '협업 도구',
    description:
      'Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.',
    image: image5,
  },
  {
    icon: <GlobeLock />,
    text: '분석 대시보드',
    description:
      'Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.',
    image: image6,
  },
];

export const checklistItems = [
  {
    title: '코드 병합을 쉽게',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: '걱정 없이 코드 리뷰',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'AI 지원으로 줄이세요',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: '몇 분 안에 작업 공유',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
];

export const pricingOptions = [
  {
    title: 'Free',
    price: '$0',
    features: [
      'Private board sharing',
      '5 Gb Storage',
      'Web Analytics',
      'Private Mode',
    ],
    link: 'Free',
  },
  {
    title: 'Pro',
    price: '$10',
    features: [
      'Private board sharing',
      '10 Gb Storage',
      'Web Analytics (Advance)',
      'Private Mode',
    ],
    link: 'Pro',
  },
  {
    title: 'Enterprise',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
    ],
    link: 'Enterprise',
  },
];

export const resourcesLinks = [
  { to: '/Getting-Started', text: 'Getting Started' },
  { to: '/Documentation', text: 'Documentation' },
  { to: '/Tutorials', text: 'Tutorials' },
  { to: '/API-Reference', text: 'API Reference' },
  { to: '/Community-Forums', text: 'Community Forums' },
];

export const platformLinks = [
  { to: 'Features', text: 'Features' },
  { to: 'Supported-Devices', text: 'Supported Devices' },
  { to: 'System-Requirements', text: 'System Requirements' },
  { to: 'Downloads', text: 'Downloads' },
  { to: 'Release-Notes', text: 'Release Notes' },
];

export const communityLinks = [
  { to: 'Events', text: 'Events' },
  { to: 'Meetups', text: 'Meetups' },
  { to: 'Conferences', text: 'Conferences' },
  { to: 'Hackathons', text: 'Hackathons' },
  { to: 'Jobs', text: 'Jobs' },
];

export const heroLinks = [
  { to: 'start-for-free', text: 'start for free' },
  { to: 'documentation', text: 'documentation' },
];
