/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import styles from "./admin.module.css";
import axios from "axios";
import AdminLogin from "./AdminLogin";

const Admin = () => {
  const [data, setData] = useState({
    type: "",
    price: "",
    title: "",
    desc: "",
    image: "",
  });

  const Data = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e) =>
    axios
      .post("https://sore-erin-sockeye-tam.cyclic.app/" + data.type, data)
      .then((r) => console.log(r.data));

  const [login, setLogin] = useState(localStorage.getItem("admin") ? 0 : 1);

  if (login) return <AdminLogin setLogin={setLogin}></AdminLogin>;
  return (
    <div>
      <div className={styles.admin}>
        <div className={styles.inp}>
          <h2 name="" id="">
            {" "}
            select type of service
          </h2>
          <div className={styles.form}>
            <div className={styles.type}>
              <div>
                <input
                  type="radio"
                  onChange={Data}
                  id="care"
                  name="type"
                  value="care"
                />
                <label htmlFor="care">care</label>
              </div>
              <div>
                <input
                  type="radio"
                  onChange={Data}
                  id="docter"
                  name="type"
                  value="docter"
                />
                <label htmlFor="docter">regester new docter</label>
              </div>
              <div>
                <input
                  type="radio"
                  onChange={Data}
                  id="mind"
                  name="type"
                  value="mind"
                />
                <label htmlFor="mind">mind section</label>
              </div>
              <div>
                <input
                  type="radio"
                  onChange={Data}
                  id="mindfull"
                  name="type"
                  value="mind/full"
                />
                <label htmlFor="mindfull">mindfull section</label>
              </div>
            </div>
            <input
              type="number"
              onChange={Data}
              name="price"
              placeholder="price"
              id=""
            />
            <input
              type="text"
              onChange={Data}
              name="title"
              placeholder="title"
              id=""
            />
            <input
              type="text"
              onChange={Data}
              name="image"
              placeholder="image"
              id=""
            />
            <textarea
              name="desc"
              placeholder="description"
              id=""
              onChange={Data}
              cols="10"
              rows="3"
            ></textarea>
            <button onClick={submit} className={styles.submit}>
              submit
            </button>
          </div>
        </div>
        <div className={styles.prev}>
          <h1>preview</h1>
          <img src={data.image} alt="previw image not found" />
          <div className={styles.tcs}>
            <div>
              <h2> {data.title}</h2>
              <h2> ${data.price}</h2>
            </div>
          </div>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
