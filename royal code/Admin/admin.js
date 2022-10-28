import { useState } from 'react'
import './admin.css'
export function AdminHome() {

    const [isToggled1, setIsToggled1] = useState(false);
    const [isToggled2, setIsToggled2] = useState(false);
    const [isToggled3, setIsToggled3] = useState(false)
    const [isToggled4, setIsToggled4] = useState(false)
    
    const clickHandler1 = () => {
        setIsToggled1((prevState) => {
            console.log(prevState)
            return !prevState;
        })
    }

    const clickHandler2 = () => {
        setIsToggled2((prevState) => {
            console.log(prevState)
            return !prevState;
        })
    }

    const clickHandler3 = () => {
        setIsToggled3((prevState) => {
            console.log(prevState)
            return !prevState;
        })
    }

    const clickHandler4 = () => {
        setIsToggled4((prevState) => {
            console.log(prevState)
            return !prevState;
        })
    }

    return (

        <>
        <div className='he'>
            <h1>Welcome Admin</h1>
        </div>

        <div className="clow">
            <div className="row">
                <div className="col car s1">
                    <i class="fa fa-users t" style={{fontSize: 70}}></i>
                    <div className='ty'>
                        Total Users 
                    </div>
                    <div className='heading' onClick={clickHandler1}>
                        2912 Users
                    </div>
                </div>
                <div className="col car s2">
                    <i class="fa fa-newspaper-o t" style={{fontSize: 70}}></i>
                    <div className='ty'>Total Services</div>
                    <div className='heading' onClick={clickHandler2}>
                        1024 Services
                    </div>
                </div>
                <div className="col car s3">
                    <i class="fa fa-drivers-license-o t" style={{fontSize: 70}}></i>
                    <div className='ty'>Reviews</div>
                    <div className='heading'>
                        912 Reviews
                    </div>
                </div>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>  
                    <div className="usercont">
                        <div className="userhead">
                            <h3>Total Users</h3>

                            <div className="menu-icon" onClick= {clickHandler1}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                        <div className= {`userbody ${isToggled1 && 'active'}`}>
                            <p>Bargav kingu ra puka </p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <div className="usercont">
                        <div className="userhead">
                            <h3>Total Services</h3>

                            <div className="menu-icon" onClick= {clickHandler2}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                        <div className= {`userbody ${isToggled2 && 'active'}`}>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>  
                    <div className="usercont">
                        <div className="userhead">
                            <h3>User FeedBack</h3>

                            <div className="menu-icon" onClick= {clickHandler3}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                        <div className= {`userbody ${isToggled3 && 'active'}`}>
                            <p>Bargav kingu ra puka </p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <div className="usercont">
                        <div className="userhead">
                            <h3>Services FeedBack</h3>

                            <div className="menu-icon" onClick= {clickHandler4}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                        <div className= {`userbody ${isToggled4 && 'active'}`}>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                            <p>Bargav kingu ra puka</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}