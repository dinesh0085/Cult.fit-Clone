import {  Show, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react"
import { FitnessIndex } from "./FitnessIndex"



export const FitnessNavbar = () =>{
    return (
        <Show above="md">
            <Tabs isManual align="center" position="sticky" variant="soft-rounded" colorScheme="gray">
                <TabList padding="10px"  bgColor="#393A3B">
                    <Tab color="whiteAlpha.800">cultpass ELITE</Tab>
                    <Tab color="whiteAlpha.800">cultpass PRO</Tab>
                    <Tab color="whiteAlpha.800">cultpass Home</Tab>
                    <Tab color="whiteAlpha.800">cult Transform</Tab>
                    <Tab ml="20%" bgColor="gray.500" color="white">Buy Now</Tab>
                </TabList>

                <TabPanels >
                    <TabPanel padding="0px">
                        <FitnessIndex />
                    </TabPanel>
                    <TabPanel padding="0px">
                        <FitnessIndex />
                    </TabPanel>
                    <TabPanel padding="0px">
                        <FitnessIndex />                
                    </TabPanel>
                    <TabPanel padding="0px">
                        <FitnessIndex />                
                    </TabPanel>
                    <TabPanel padding="0px">
                        <FitnessIndex />                
                    </TabPanel>
                </TabPanels>
            </Tabs> 
            
        
        </Show>
       
    )
}