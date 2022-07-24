import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const SignInBar = () => {
    return(
        <Popover>
            <PopoverTrigger>
                <Button>Sign In</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <img onClick={()=> signIn()} src='/btn_google_signin_light_normal_web@2x.png' />
                </PopoverBody>
            </PopoverContent>
            <PopoverBody>
               
            </PopoverBody>
        </Popover>
    )
}

export default SignInBar;