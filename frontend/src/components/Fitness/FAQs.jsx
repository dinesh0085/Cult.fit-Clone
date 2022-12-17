import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"

const content = [
    {
        que: "What is cult?",
        ans: "At Cult, we make fitness fun and easy. We have best-in-class trainers & offer group workouts ranging from yoga to Boxing. Our workouts can be done both at a cult center and at home with the help of do it yourself (DIY) workout videos. Cult.fit uses the best in technology to give you a world-class experience. You can book classes, follow workout videos - all with the click of a button from the cult.fit app or website. "
    },
    {
        que: "What kind of workout formats are available at cult?",
        ans: "At cult centers, you’ll find a wide variety of workout formats, such as - Boxing, Dance Fitness, Yoga, S&C, and HRX. These workouts focus on strength, muscle endurance, flexibility, stamina & balance. So mix it up, pick formats that help you achieve your personal fitness goals.  You’ll also find unique workout formats designed by Bollywood stars like Hrithik Roshan! We can assure you that your sessions will be more fun, interesting, and less monotonous.  You can find more info about all our workout formats here. If you prefer to workout at home, we've got you covered! You can follow DIY and LIVE videos that are meant for both beginner & advanced levels and focus on building strength, stamina & mobility."
    },
    {
        que: "How is the cult center different from a regular gym?",
        ans: "With our non-conventional training facility, we aim to give you a balanced mix of workouts that will enhance your health while having fun at the same time. Cult differentiates itself, from other fitness centers by offering group workouts that focus on overall development. Cult has a simple philosophy - make fitness fun and easy with the help of best-in-class trainers and group workouts. Our workouts can be done both at a cult center as group classes and at home with the help of do-it-yourself (DIY) workout videos.  Cult.fit uses the best in technology to give you a world-class experience. You can book classes, follow workout videos - all with the click of a button from the cult.fit app or website.  To know more about cult, check this link."
    },
    {
        que: "What is cultpass ELITE?",
        ans: "Cultpass ELITE  is a membership pack where you get unlimited access to trainer ledGX sessions and Gym classes as you like in the city. However, you can prebook only 4 classes at any given point in time. The moment you finish one class, you get the option to book another class.  We have 3 month, 6 month & 12 month cultpass. You also get a feature where you can Pause (limited duration basis the pack) the membership if you are unable to attend or transfer your pack to a different city if you are relocating. You would get complimentary at home workout access. You can also create a smart workout plan based on your lifestyle. To find out more about memberships & pricing you can check our website"
    },
    {
        que: "Are cult classes beginner friendly?",
        ans: "Don’t worry! All our classes are beginner friendly. If you are doing an at Home cult.fit DIY session, we have sessions designed specifically for beginners. At our cult.fit centers too, we welcome beginners and look after them in every class. If it’s your first class, just arrive 10 minutes early, and we’ll make sure we help you get started and feel totally comfortable. To know more about what to expect in your first class read here."
    },
    {
        que: "What is a cultpass Home?",
        ans: "cultpass Home gives you unlimited access to all at Home sessions and DIY (on demand) sessions. This includes unlimited access to fitness, dance, meditation, health video content and podcasts. A cultpass Home member has an all access pass to celebrity masterclasses, ability to workout with friends and track their energy scores, and  monitor their progress in the form of reports. You can purchase the membership through the official cult.fit website or on the android app."
    },
    {
        que: "What is the difference between gyms and cult centres?",
        ans: "Gyms by cult.fit are a collection of handpicked full-service gyms which offer a safe space for you to workout using top quality gym equipment under the guidance of cult certified trainers. At the gyms, you can do a workout of your choice at your convenience. Cult centres offer scheduled trainer led group workouts in different formats like Boxing, HRX, S&C, Yoga and Dance Fitness that focus on overall development. "
    },
    {
        que: "What is the difference between cultpass ELITE and cultpass PRO?",
        ans: "cultpass ELITE gives you unlimited access to cult group classes, gyms and At-home workouts. cultpass PRO  gives you unlimited access to gyms and At-home workouts and limited access to cult group classes."
    },
    {
        que: "What do I get if I buy Cult Transform?",
        ans: "cult transform connects you with an expert Transform Coach (whatsapp + calls) who guides you through sustainable lifestyle changes to achieve your health goals which include fat loss, weight loss and getting fit. You also get unlimited access to cultpass Live online home workout & meditation sessions, a customised workout plan, nutrition guidance and daily reads on fitness & habits. Please note this does not include a gym membership."
    },
    {
        que: "What are the different types of fitness centers available on cultpass?",
        ans: "There are 3 types of fitness centers available on cultpass. 1) Cult centers. 2) ELITE gyms. 3) PRO gyms. You get unlimited access to all centers in a city with a cultpass ELITE. You get unlimited access to PRO gyms and 2 sessions per month at cult centers or ELITE gyms in a city with cultpass PRO"
    },
    {
        que: "What are the different types of Memberships that I can buy to access gyms?",
        ans: "You can access the gyms listed on the cult.fit app by buying a cultpass ELITE or a cultpass PRO. cultpass ELITE will give you unlimited access to all gyms in a city cultpass PRO will give you unlimited access to all PRO gyms and 2 sessions per month at ELITE gyms or cult centers in a city. In addition to gym access, you get unlimited access to LIVE workouts with both the cultpasses"
    },
    {
        que: "What is the difference between a PRO gym and a ELITE gym?",
        ans: "PRO gyms are full service gyms that offer you great value. They provide a safe space to workout with top quality equipment and cult certified trainers present to assist you ELITE gyms are a curated collection of handpicked,  full-service gyms at prime locations. They offer everything you get in a PRO gym plus added comfort and luxury to make your workout enjoyable. Lookout for the 'ELITE' tag to to identify a ELITE gym."
    }
]
export const FAQs = () => {
    return (
        <Box w="80%" mt ="70px" py="70px">

            <Flex justifyContent="space-between">
                <Stack spacing={5} textAlign='left'>
                    <Heading fontSize="5xl">FAQS</Heading>
                    <Text color="whiteAlpha.600" fontSize="xl">FITNESS</Text>
                </Stack>

                <Text fontWeight="bold">SEE ALL</Text>
            </Flex>


            <Accordion color="whiteAlpha.700" textAlign="left" mt="40px" allowToggle>
            {
                content.map((item, i) => (
                    <AccordionItem key={i}>
                        <Heading fontSize="xl">
                        <AccordionButton>
                            <Text fontSize="2xl"  py={5} as="span" flex='1' textAlign='left'>
                            {item.que}
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={5}>
                        {item.ans}
                        </AccordionPanel>
                    </AccordionItem>
                ))
            }
               

                {/* <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Section 2 title
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem> */}
            </Accordion>
        </Box>
    )
}