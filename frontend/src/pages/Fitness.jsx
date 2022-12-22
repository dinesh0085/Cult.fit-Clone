import {Box, Heading, Show} from "@chakra-ui/react";
import { FitnessIndex } from "../components/Fitness/FitnessIndex";
import { FitnessNavbar } from "../components/Fitness/FitnessNavbar";

export const Fitness = ({setc}) => {
     setc("#15171C")
    return (
        <Box align="center">
            <FitnessNavbar />
            <Show below="md">
                <FitnessIndex />
            </Show>
        </Box>
    )
}