import React, { useMemo, type FC, type PropsWithChildren } from 'react';
import { type IPreviewerProps, useLocation } from 'dumi';

import PreviewerActions from '../../slots/PreviewerActions';
import {
  Stack,
  HStack,
  Heading,
  Text,
  LinkOverlay,
  LinkBox,
  Badge,
  Box,
  useColorModeValue
} from '@chakra-ui/react';

const Previewer: FC<PropsWithChildren<IPreviewerProps>> = (props) => {
  const {
    asset,
    iframe,
    children,
    className,
    debug,
    style,
    demoUrl,
    title,
    description,
    compact
  } = props;

  const { hash } = useLocation();
  const link = `#${asset.id}`;
  const previewBgColor = useColorModeValue('whiteAlpha.900', 'gray.800');
  const headingDefaultBorderColor = useColorModeValue(
    'gray.200',
    'whiteAlpha.200'
  );

  const borderColor = useMemo(() => {
    return link === hash ? 'brand.400' : debug ? 'yellow.300' : 'transparent';
  }, [link, hash, debug]);

  const headingBorderColor = useMemo(() => {
    return link === hash
      ? 'brand.400'
      : debug
      ? 'yellow.300'
      : headingDefaultBorderColor;
  }, [link, hash, debug, headingDefaultBorderColor]);

  return (
    <Stack
      className={className}
      style={style}
      id={asset.id}
      marginBlockStart={6}
      marginBlockEnd={8}
      shadow="sm"
      border="1px solid"
      borderColor={borderColor}
      overflow="hidden"
      borderRadius="base"
      bgColor={previewBgColor}
    >
      {(title || debug) && (
        <LinkBox>
          <Heading as="h5">
            <LinkOverlay href={link}>
              <HStack
                align="center"
                justify="center"
                w="full"
                paddingBlock={2}
                shadow="sm"
              >
                <Text
                  fontSize="sm"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {title}
                </Text>
                {debug && <Badge colorScheme="yellow">DEV ONLY</Badge>}
              </HStack>
            </LinkOverlay>
          </Heading>
        </LinkBox>
      )}
      {description && (
        <Text
          className="markdown"
          dangerouslySetInnerHTML={{ __html: description }}
          padding={2}
          borderBottom="1px solid"
          borderBottomColor={headingBorderColor}
          m="0!important"
        ></Text>
      )}

      <Box
        paddingBlock={iframe || compact ? 0 : 10}
        paddingInline={iframe || compact ? 0 : 5}
      >
        {iframe ? (
          <Box
            as="iframe"
            src={demoUrl}
            h={
              (['string', 'number'].includes(typeof iframe)
                ? iframe
                : 80) as number
            }
          ></Box>
        ) : (
          children
        )}
      </Box>
      <Box>
        <PreviewerActions {...props} />
      </Box>
    </Stack>
  );
};

export default Previewer;