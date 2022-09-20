import { Icon, IconifyIcon } from '@iconify/react';
import { Box, BoxProps, DefaultProps, Sx } from '@mantine/core';

interface Props {
  sx?: Sx;
  icon: IconifyIcon | string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
