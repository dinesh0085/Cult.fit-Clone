import React, { useEffect, useState } from 'react';
import styles from "./mindFull.module.css";
import axios from 'axios';
import DocterPopup from '../components/DocterPopup';

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzliM2ViMzVkY2EyODRkNGVkZmNjZWMiLCJpYXQiOjE2NzEzMzc4NDEsImV4cCI6MTY3MTc2OTg0MX0.gAyGngbn3cF5P1hv5kKD7O0aLjDdEuAmTtV04Q6Fu9g"
const Dcotors = () => {

    const [data, setData] = useState([]);
    function getData() {
        axios.defaults.headers.common["authorization"] = "Bearer " + token;
        axios.get("http://localhost:8080/docter?limit=50")
            .then((r) => setData(r.data))
    }
    useEffect(() => getData(), []);

    return (
        <div>
            <DocterPopup></DocterPopup>
            <div className={styles.mindFull}>
                <h1 style={{ margin: "50px" }}>search by name</h1>
                <input type="text" name="" id=""
                    placeholder='search'
                    style={{
                        border: "1px solid",
                        borderRadius: "10px",
                        height: "40px",
                        padding: "5px"
                    }}
                    onChange={(e) => {
                        if (e.target.value == "") { getData(); return }
                        if (e.target.value.length < 2) return;
                        axios.defaults.headers.common["authorization"] = "Bearer " + token;
                        axios.get("http://localhost:8080/docter?limit=50&search=" + e.target.value)
                            .then((r) => setData(r.data))
                    }}
                />
                <div className={styles.mindFullGrid}>
                    {
                        data && data.map((e, i) => {
                            return (<div className={styles.mindFullBox} key={i}>
                                <img src={e.image} alt="" />
                                <div className={styles.mindFullFlex}>
                                    <h2>{e.name}</h2>
                                    <h3>${e.price}</h3>
                                    <button
                                        style={{
                                            height: "30px",
                                            backgroundColor: "teal"
                                        }}
                                    >consult</button>
                                    <h4>{e.qualify} </h4>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Dcotors;
