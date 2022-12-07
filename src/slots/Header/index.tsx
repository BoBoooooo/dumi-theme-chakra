import React from 'react';

import {
  Box,
  Container,
  Stack,
  Show,
  useColorModeValue
} from '@chakra-ui/react';
import ThemeSwitch from '../ThemeSwitch';
import Social from '../../components/Social';
import LangSwitch from '../LangSwitch';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

const Header = () => {
  const bg = useColorModeValue('whiteAlpha.800', 'gray.800');

  return (
    <Box
      as="header"
      position="sticky"
      h={18}
      top={0}
      zIndex={10}
      w="full"
      bg={bg}
      backdropFilter="saturate(50%) blur(8px)"
      shadow="sm"
    >
      <Container
        maxW="container.xxl"
        h="full"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />
        <Stack direction="row" spacing={{ base: 0, md: 2.5 }}>
          <SearchBar />
          <Show above="md">
            <Social />
          </Show>
          <ThemeSwitch />
          <LangSwitch />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;