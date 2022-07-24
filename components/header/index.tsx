import React from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { Box, HStack } from '@chakra-ui/react';
import SignInBar from "./signInBar";

const HeaderLayout: any = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    if(!session) {
        return(
            <HStack>
                <Box w='100px' h='40px' bg='lightskyblue'>
                    <SignInBar />
                </Box>
            </HStack>
        )
    }
}

export default HeaderLayout;