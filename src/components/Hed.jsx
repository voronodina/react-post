import React from "react";
import logo from "../components/png/logo.png"
import menu1 from "../components/png/menu1.png"
import menu2 from "../components/png/menu2.png"
import menu3 from "../components/png/menu3.png"
const Hed = function () {
    return (
        <div>
             <div className="conteiner" >
                    <div className="hed">
                        <img src={logo} alt={"njhn"} class="logo"/>
                        <h1 cclassName="logotxt">Торти для вас</h1>
                        <button className="contakt" data-modal-button="modal-1" id="button">
                            <span > Зателефунуй нам.</span>
                        </button>
                    </div>
                    <div className="hedmenu">
                        <div >
                            <img src={menu1} alt={"njhn"} className="logomenu"/>
                            <a href="#">Кекси </a>
                        </div>
                        <div>
                            <img src={menu2} alt={"njhn"} className="logomenu"/>
                            <a href="#">Торти на день народження</a> 
                        </div>
                        <div>
                            <img src={menu3} alt={"njhn"} className="logomenu"/>
                            <a href="#">Торти на весілля</a>
                        </div>

                    </div>

                </div>
        </div>
    );
};
export default Hed;