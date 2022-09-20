import { ReactNode } from 'react';
import MainLayout from './MainLayout';
import LogoOnlyLayout from './LogoOnlyLayout';

type Props = {
  children: ReactNode;
  variant?: 'main' | 'logoOnly';
};

export default function Layout({ children, variant = 'main' }: Props) {
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout>{children}</LogoOnlyLayout>;
  }
  return <MainLayout>{children}</MainLayout>;
}
