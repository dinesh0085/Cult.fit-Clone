import {  Show, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react"
import { CarepassElite } from "./Elite/CarepassElite"
import { CarepassHome } from "./CareHome/CarepassHome"
import { CarepassPRO } from "./PRO/CarepassPRO"
import { CarepassTransform } from "./Transform/CarepassTransform"
import { FitnessIndex } from "./FitnessIndex"
import { useState } from "react"



export const FitnessNavbar = () =>{
    const [tabIndex, setTabIndex] = useState(-1);

    const handleTabChange = (index) =>{
        setTabIndex(index);
    }

    return (
        <Show above="md">
            <Tabs 
            // defaultIndex="-1"
            index = {tabIndex}
            onChange = {handleTabChange}
           
            align="center" 
            position="sticky" 
            variant="soft-rounded" 
            colorScheme="gray">
                <TabList padding="10px"  bgColor="#393A3B">
                    {/* <Tab></Tab> */}
                    <Tab color="whiteAlpha.800">carepass ELITE</Tab>
                    <Tab color="whiteAlpha.800">carepass PRO</Tab>
                    <Tab color="whiteAlpha.800">carepass Home</Tab>
                    <Tab color="whiteAlpha.800">care Transform</Tab>
                    {/* <Tab ml="20%" bgColor="gray.500" color="white">Buy Now</Tab> */}
                </TabList>

                {
                    (tabIndex === -1)
                    ?<FitnessIndex />
                    :  <TabPanels>
                   
                        <TabPanel padding="0px">
                            <CarepassElite/>
                        </TabPanel>
                        <TabPanel padding="0px">
                            <CarepassPRO />
                        </TabPanel>
                        <TabPanel padding="0px">
                            <CarepassHome />                
                        </TabPanel>
                        <TabPanel padding="0px">
                            <CarepassTransform />                
                        </TabPanel>
                        {/* <TabPanel padding="0px">
                            <FitnessIndex />                
                        </TabPanel> */}
                    </TabPanels>

                }
               
            </Tabs> 
            
            

           
        
        </Show>
       
    )
}