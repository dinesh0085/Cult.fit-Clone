import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import Therapy from "./Therapy"
import MindFull from "../../pages/MindFull"



export const MindNavbar = () =>{
    return (
        <Tabs align="center" position="sticky" top="0"  variant="soft-rounded" colorScheme="gray">
            <TabList padding="10px"  bgColor="#393A3B">
                <Tab color="whiteAlpha.800">Therapy</Tab>
                <Tab color="whiteAlpha.800">Mindullness</Tab>
              
            </TabList>

            <TabPanels >
               
                <TabPanel>
                   <Therapy></Therapy>
                </TabPanel>
                <TabPanel><MindFull></MindFull></TabPanel>
               
            </TabPanels>
        </Tabs>
    )
}

export default MindNavbar