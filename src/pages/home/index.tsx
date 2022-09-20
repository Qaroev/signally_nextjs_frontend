import { Box, Button, Container, createStyles, Image, Text } from '@mantine/core';
import { m } from 'framer-motion';
import { ReactElement } from 'react';
import Page from '../../components/Page';
import Layout from '../../layouts';
import HomeSection1 from '../../sections/home/home_section_1';
import HomeSection2 from '../../sections/home/home_section_2';

PageX.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default function PageX() {
  return (
    <Page title='Home'>
      <HomeSection1 />
      <HomeSection2 />
    </Page>
  );
}
