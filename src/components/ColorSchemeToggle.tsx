import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position='center'>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6]
        })}>
        {colorScheme === 'dark' ? <SunIcon width={20} height={20} /> : <MoonIcon width={20} height={20} />}
      </ActionIcon>
    </Group>
  );
}
