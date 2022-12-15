import { useState } from 'react';
import styles from "./admin.module.css";

const Admin = () => {

    const [data, setData] = useState({ type: "", cost: "", title: "", image: "" });
    console.log(data);

    function Data(e) {
        if (e.target.type == "radio")
            setData({ ...data, [e.target.id]: e.target.value });
        else
            setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.admin}>
            <h2 name="" id=""> what type of service</h2>
            <div className={styles.form}>
                <div className={styles.type}>
                    <input type="radio" onChange={Data} id="type" name="serc" value="care" /> care
                    <input type="radio" onChange={Data} id="type" name='serc' value="docter" />regester new docter
                    <input type="radio" onChange={Data} id="type" name='serc' value="mind" /> mind section
                    <input type="radio" onChange={Data} id="type" name='serc' value="mind/full" /> mindfull section
                </div>
                <input type="number" onChange={Data} name="cost" placeholder='cost' id="" />
                <input type="number" onChange={Data} name="title" placeholder='title' id="" />
                <button type="text" className={styles.submit}>submit</button>
            </div>
        </div>
    );
}

export default Admin;
