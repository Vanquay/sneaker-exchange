import { Box, HStack } from "@chakra-ui/react"
import { NextPage } from "next"
import Link from "next/link"



const userProfile: NextPage = () => {
    return(
        <HStack>
            <Box>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Box>
        </HStack>
    )
}

export default userProfile;