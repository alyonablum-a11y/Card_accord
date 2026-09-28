import type { Metadata } from 'next';
import ClavierTrainer from '@/components/ClavierTrainer';

export const metadata: Metadata = {
  title: 'Клавир — Гармония | Тренажер классических аккордов на фортепиано',
  description: 'Интерактивный визуальный самоучитель и тренажер по классической гармонии и сольфеджио. Занимайтесь за реальным пианино без лишних звуков.',
  openGraph: {
    title: 'Клавир — Гармония',
    description: 'Интерактивный визуальный самоучитель и тренажер по классической гармонии и сольфеджио. Занимайтесь за реальным пианино.',
    type: 'website',
  },
};

export default function Home() {
  return <ClavierTrainer />;
}
