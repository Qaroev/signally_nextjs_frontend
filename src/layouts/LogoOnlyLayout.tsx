import { Box, createStyles } from '@mantine/core';

type Props = {
  children: React.ReactNode;
};

export default function LogoOnlyLayout({ children }: Props) {
  const { classes } = useStyles();
  return <Box>{children}</Box>;
}

const useStyles = createStyles((theme) => ({
  root: {}
}));
