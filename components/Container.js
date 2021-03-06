import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Spacer,
    Divider
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/DarkModeSwitch'
import Footer from "../components/footer";

const Container = ({ children }) => {
    const { colorMode } = useColorMode();

    const BackColor = {
        light: 'white',
        dark: '#171717'
    };

    const BackNav = {
        light: 'gray.600',
        dark: 'gray.300'
    };

    const color = {
        light: 'black',
        dark: 'white'
    };


    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
    `


    return(
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={BackColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 5]}
                mx="auto"
            >
                <Box>
                    <NextLink href="/" passhref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: BackNav[colorMode]}} >
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passhref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: BackNav[colorMode]}} >
                            Blog
                        </Button>
                    </NextLink>
                    <NextLink href="/projects" passhref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: BackNav[colorMode]}} >
                            Projects
                        </Button>
                    </NextLink>
                    <NextLink href="/contact" passhref>
                        <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: BackNav[colorMode]}} >
                            Contact
                        </Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch/>
            </StickyNav>
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={BackColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
                <Footer />
                <Spacer mt={{ base: 12 }} />
            </Flex>
        </>
    )  
}

export default Container