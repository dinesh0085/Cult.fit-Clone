
import React, { useState } from 'react';
import style from "./popup.module.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect } from 'react';
let foo = "enter the consutation time";
let arr = [];

const DocterPopup = ({ _id, isOpen, onOpen, onClose }) => {

    const [time, setTime] = useState(0);
    const [date, setDate] = useState(0);
    const [state, setS] = useState("enter the consutation time");


    return (
        <div >
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{state}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <input type="date" name="" id="" onChange={(e) => setDate(e.target.value)} />
                        <input type="time" onChange={(e) => setTime(e.target.value)} />

                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'
                            onClick={async () => {
                                setS(foo);
                                console.log(time, date);
                                if (arr.includes(time + date + _id)) {
                                    setS("not available at this time please consult other docters")
                                    axios.defaults.headers.common["authorization"] = "Bearer " + localStorage.getItem("token");
                                    let res = await axios.get(`https://sore-erin-sockeye-tam.cyclic.app/cart/docter`, {
                                        startTime: Date.now(), docter: _id
                                    });
                                    console.log(res.data);
                                } else
                                    setS("your docter consulted succsfully")
                                arr.push(time + date + _id);
                            }}
                        >submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default DocterPopup;


