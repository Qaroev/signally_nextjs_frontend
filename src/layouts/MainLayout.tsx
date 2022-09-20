import { AppShell, Box, Burger, Container, createStyles, Footer, Group, Header, Image, MediaQuery, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import DrawerComponent from './DrawerComponent';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <>
      <DrawerComponent isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} />
      <AppShell
        className='dark:bg-black dark:text-white'
        padding='md'
        fixed
        header={
          <Header height={70} p='md' className='dark:bg-black border-0'>
            <Container size='xl' className='flex justify-center align-middle h-full'>
              <Link href={'/home'}>
                <Group className='cursor-pointer' spacing={0} align='center'>
                  <Image src='images/logo.png' width={30} className='mb-1' />
                  <Text className='ml-2 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0'>
                    Signally
                  </Text>
                </Group>
              </Link>

              <Box sx={{ flexGrow: 1 }} />

              <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                <Group>
                  <LinkToPage route='/home' text='Home' />
                  <LinkToPage route='/privacy' text='Privacy' />
                  <LinkToPage route='/terms' text='Terms' />
                  <LinkToPage route='/contact-us' text='Contact' />
                </Group>
              </MediaQuery>

              <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                <Burger
                  opened={isOpenDrawer}
                  onClick={() => {
                    setIsOpenDrawer((o) => !o);
                  }}
                  size='sm'
                  color={theme.colors.gray[6]}
                />
              </MediaQuery>
            </Container>
          </Header>
        }
        footer={
          <Footer className='flex items-center justify-center dark:bg-black h-full border-0' height={60}>
            <Text className='mr-2 text-sm'>© 2022 Signally | Designed Codememory</Text>
            <ColorSchemeToggle />
          </Footer>
        }>
        {children}
      </AppShell>
    </>
  );
}

const useStyles = createStyles((theme) => ({
  root: {}
}));

function LinkToPage({ route = '', text = '' }) {
  const { classes } = useStyles();
  return (
    <Link href={route} passHref>
      <Text className='mx-3 hover:opacity-95' component='a'>
        {text}
      </Text>
    </Link>
  );
}
