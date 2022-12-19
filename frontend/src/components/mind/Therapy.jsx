import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./Therapy.module.css"
import { TimeIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

const faq=[
  {
   q:"Is therapy for me?",
   a:"Whether you are experiencing symptoms that come in the way of daily living or want to explore issues experienced in the past or are keen on enhancing your wellbeing and growth in life - therapy is suitable for all."
  },
  {
    q:"What should I expect during my first therapy session?",
    a:"Your therapist will focus on getting to know you better through the first session. Together, the two of you will identify goals for follow up sessions. Your therapist may also share a few exercises for you to practice, if relevant."
   },
   {
    q:"What is the difference between a Therapist and a Psychiatrist?",
    a:"Therapists go deep into our problems with us. They help us understand ourselves better and plan for recovery without using medicines. Psychiatrists diagnose and treat chronic mental health conditions and may use medicines."
   },
   {
    q:"What does a Therapy pack offer?",
    a:"A Therapy pack helps with continuity of your wellness journey, without having to bother about booking sessions one at a time. Your Therapist will recommend the number of sessions that you might need to address your challenges. We recommend you buy a pack only after a discussion with the therapist. "
   },
   {
    q:"How to book a 1 on 1 Therapy session?",
    a:"Here’s how you can book a therapy session from the cure.fit app: Log into the cure.fit app From the bottom of the To-Do page, pick mind.fit Pick 1 on 1 therapy Pick a preferred center and time slot Make a payment That’s all! "
   },



]

const Therapy=()=>{
    const [mind,setMind] = useState([]);

  useEffect(()=>{
    fetch("https://sore-erin-sockeye-tam.cyclic.app/mind")
    .then((res)=>res.json())
    .then((data)=>{ setMind(data)})
    .catch((e)=>{console.log(e);})
  },[])

  console.log(mind);
    return <div>
       <Image width={"80%"} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f87f914f-7a53-4a80-b9b6-d85d80fae1cb.png"></Image>
       <Heading width={"95%"} marginTop={"30px"} fontSize="20px" textAlign={"left"}>EXPERTS TO HELP YOU</Heading>
       
       {/* -----------mind data grid-------------- */}
       <SimpleGrid marginTop={"20px"}  width="95%" columns={[1,1,2,2]} spacing={10}>
       
       {mind && mind.map((el,i)=>{
        if(i==mind.length-1){
          return
        }
        return <Box className={styles.mindCard} position={"relative"} borderRadius="1rem">
          <Link to={`/minddetails/${el._id}`}> <Image borderRadius="7px" src={el.image}></Image></Link>
          <Text position={"absolute"}  top="10%" left={"15px"} fontWeight="bold" fontSize={["16px"]} color="black">{el.title}</Text>
          <Box position={"absolute"} top="30%" left={"15px"} display="flex" flexDirection={"column"}  >
          <Text    fontSize={["10px"]} color="blackAlpha.800" width={"60%"} textAlign="left">{el.desc}</Text>
          <Text marginTop={"5px"} fontSize={["10px"]} color="blackAlpha.800" width={"60%"} textAlign="left" fontWeight={"medium"}>
            <TimeIcon color={"blue"}/> 50 Mins Session

            </Text>
          </Box>

          <Text position={"absolute"}  top="80%" left={"15px"} fontWeight="bold" fontSize={["14px"]} color="black">₹ {el.price}</Text>

         
          
        </Box>
        
      
       })}
       </SimpleGrid>

       {/* -----------mind data grid-------------- */}

       <Image width={"80%"} marginTop="20px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/8d058e84-f098-4129-b107-dc81c19af2f1.png"></Image>
       <Image width={"80%"} marginTop="20px" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/7f7af73c-3ee3-46c1-9129-0df18dbb02ac.png"></Image>

        {/* -------FAQ PART--------------- */}

        <Box marginTop={"30px"}  bgColor={'#171a26'} width="100%"  paddingTop={"70px"} paddingBottom="50px">
       
       <Box  w={{ base: '100%', md: '95%', lg: '90%' }} m="auto" marginTop={"30px"}>
       
       <Heading color={"white"} textAlign={"left"} fontSize={["26px","32px","40px","48px"]} >FAQS</Heading>
       <Heading fontSize={{ base: '8px', md: '10px', lg: '12px' }} textAlign="left" color={"grey"} marginTop="5px">5 QUESTIONS</Heading>
       
      <Accordion color={"white"} marginTop="20px"  allowMultiple>
      
      {faq.map((el,i)=>{
        return <AccordionItem>
        <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left' fontSize={["12px","16px","20px","24px"]}>
            
           Q{i+1}:- {el.q}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} textAlign="left">
       {el.a}
      </AccordionPanel>
    </AccordionItem>
      })}


 
</Accordion>

  </Box>
     </Box>
        
        {/* -------FAQ PART--------------- */}

    </div>
}

export  default Therapy