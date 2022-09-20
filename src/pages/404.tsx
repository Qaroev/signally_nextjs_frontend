import { Box, Button, createStyles } from '@mantine/core';
import Link from 'next/link';
import Page from '../components/Page';

export default function Page404() {
  const { classes } = useStyles();
  return (
    <Page title='404 Page Not Found'>
      <Box className={classes.root}>
        <Box sx={{ fontSize: 'xl', fontWeight: 'bold' }}>404</Box>
        <Box sx={{ fontSize: 'lg', fontWeight: 'bold' }}>Page not found</Box>

        <Link href='/' passHref>
          <Button sx={{ marginTop: 8 }} component='a'>
            Go Home
          </Button>
        </Link>
      </Box>
    </Page>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    color: 'grey'
  }
}));
