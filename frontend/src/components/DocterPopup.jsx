import React from 'react';
import style from "./popup.module.css";


let mnts = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DocterPopup = () => {





    return (
        <div className={style.popup}>
            <div className={style.flex}>
                <button>
                    {new Date().getDate()+1}
                    {mnts[(new Date().getMonth() + 1) % 12]}
                <button>{new Date().getHours()} to{new Date().getHours()+3}</button>

                </button>
                <button>
                    {new Date().getDate()+2}
                    {mnts[(new Date().getMonth() + 2) % 12]}
                <button>{new Date().getHours()} to{new Date().getHours()+3}</button>

                </button>
                <button>
                    {new Date().getDate()+3}
                    {mnts[(new Date().getMonth() + 3) % 12]}
                <button>{new Date().getHours()} to{new Date().getHours()+3}</button>
                </button>
            </div>
        </div>
    );
}

export default DocterPopup;
