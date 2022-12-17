 
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { background, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
 
const getLocationdata=(state)=>{
    let API_key="ebdebcb00d53d3dcb444434913b7e456"
   return  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${API_key}`)

}
 
export const Location = () => {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
            const [loc,setloc]=useState({})
            const [state,setState]=useState("")
useEffect(()=>{
    getlocation()
    addLoc()
    addloc()
 
},[])

 const addLoc=()=>{
   
    getLocationdata(state).then((res)=>{
        setloc(res.data)

    })
      
 }
 

    
   
  
 const addloc=()=>{
  
    getLocationdata(state)
    .then((res)=>{
        setloc(res.data)
        console.log(res.data);
        onClose()
    })
 }

const getloc = async (lat,lon)=>{
    let API_key="ebdebcb00d53d3dcb444434913b7e456"
       let loc=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

       let s=await fetch(loc);
       let t=await s.json();
        setloc(t)

       
      
    }


function getlocation(){
        navigator.geolocation.getCurrentPosition(success);
        function success(position){
          const lat=position.coords.latitude;
          const long =position.coords.longitude;
          getloc(lat,long);
         }
}


    

  return (
    <div>
      
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
             
        bg="none"
        _hover={{bg:"none"}}
      >
        {loc.name} <LocationOnIcon marginLeft="20px"/>
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bgColor="#15171C" color="white">
          <ModalHeader>Set Your Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input   onChange={(e)=>setState(e.target.value)} placeholder="Enter Your Current Location"/> 
          </ModalBody>
          <ModalFooter>
            <Button _hover={{bg:"brown"}} bgColor="#15171C" color="white" onClick={addloc}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </div>


  )
}
