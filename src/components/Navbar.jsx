import React from 'react'
import {Link} from "react-router-dom";
import '@master/css';

export const Navbar = () => {
  return(
    <div className="height:85px width:1463px">
        <div className="height:85px left:0 position:fixed top:0 width:1463px">
            <div className="height:85px left:11px position:relative width:1440px">
                <div className="background-color:#ffffff border-radius:30px 30px 0px 0px height:74px left:0 position:absolute top:0 width:1440px">
                    <img className="height:22px left:0 position:absolute top:63px width:1440px" alt="Frame" src="frame 156.svg" />
                        <nav>
                            <ul>
                                <li>
                                    <Link> 
                                    <div className="height:55px width:220px">
                                        <img className="height:55px left:0 object-fit:cover position:fixed top:0 width:220px" alt="Logo" src="logo.png" />
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    <div className="align-items:center background-color:#e5ecf3 border-radius:25px 25px 0px 0px display:inline-flex gap:10px justify-content:center overflow:hidden padding:18px 60px position:relative;">
                                        <div className="color:#000000 font-family:$(Poppins-SemiBold,Helvetica) font-size:16px font-weight:600 letter-spacing:-0.15px line-height:normal margin-top:-1px position:relative width:fit-content;">
                                            DASHBOARD
                                        </div>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    <div className="height:81px width: 240px">
                                        <div className="height:81px left:0 position:fixed top:0 width:242px">
                                            <div className="height:81px position:relative width:240px">
                                                <div className="align-items:flex-start display:inline-flex flex-direction:column gap:10px left:0 padding:10px position:absolute top:0">
                                                    <div className="background-color:#4579ff border-radius:25px 25px 0px 0px height:61px position:relative width:220px">
                                                    </div>
                                                </div>
                                                <div className="color:#000000 font-family:$(Poppins-SemiBold,Helvetica) font-size:16px font-weight:600 height:24px left:64px letter-spacing:-0.15px line-height:normal position:absolute top:26px">
                                                FORMBUILDER
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    <div className="height:81px width:240px">
                                        <div className="height:81px left:0 position:fixed top:0 width:242px"> 
                                            <div className="height:81px position:relative width:240px">
                                                <div className="align-items:flex-start display:inline-flex flex-direction:column gap:10px left:0 padding:10px position:absolute top:0">
                                                    <div className="background-color:#e5ecf3 border-radius:25px 25px 0px 0px height:61px position:relative width:220px"></div>
                                                </div>
                                                <div className="color:#000000 font-family:$(Poppins-SemiBold,Helvetica) font-size:16px font-weight:600 height:24px left:42px letter-spacing:-0.15px line-height:normal position:absolute top:30px">
                                                    USER MANAGEMENT
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    <div className="align-items:flex-start display:inline-flex flex-direction:column gap:10px position:relative">
                                        <div className="align-items:flex-start display:flex flex:0 0 auto flex-direction:column gap:10px position:relative width:257px">
                                            <div className="background-color:#e5ecf3 border-radius:25px 25px 0px 0px height:61px position:relative width:220px"></div>
                                        </div>
                                        <div className="color:#000000 font-family:$(Poppins-SemiBold,Helvetica) font-size:16px font-weight:600 height:24px left:74px letter-spacing:-0.15px line-height:normal position:absolute top:29px">
                                            RESOURCES
                                        </div>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    <div className="height:25px width:61px">
                                        <div className="background-color:#000000 border-radius:17px height:25px left:0 position:fixed top:0 width:61px">
                                            <div className="background-color:#d9d9d9 border-radius:12.5px height:25px position:relative width:25px">
                                                <img className="height:23px left:1px object-fit:cover position:absolute top:1px width:23px" alt="Brightness" src="brightness 2.png" />
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                <Link>
                                <div className="height:35px width:35px">
                                     <img className="height:35px left:0 object-fit:cover position:fixed top:0 width:35px" alt="People" src="people 1.png" />
                                </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  );
};
