import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth1 } from "../../firebase-config";
import '../../style/css/auth.css'
import { setUserLoginLogout, setUserEmail } from '../../redux/Auth/authAction';
import { connect } from "react-redux";

function Auth() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState('');
    const [showRegisterUser, setShowRegisterUser] = useState(false);
    const [showLoginUser, setShowLoginUser] = useState(true);
    const [message, setMessage] = useState('')

    const register = async () => {
        setMessage('')
        setShowRegisterUser(true)
        setShowLoginUser(false)
        try {
            const user = await createUserWithEmailAndPassword(
                auth1,
                registerEmail,
                registerPassword
            );
            if (user) {
                setShowRegisterUser(false)
                setShowLoginUser(true)
                setMessage('Registration Successfull')
            }

            console.log(user);
        } catch (error) {
            setMessage('User Already Exist')
            console.log(error.message);
        }
    };

    const login = async () => {
        setMessage('')
        try {
            const user = await signInWithEmailAndPassword(
                auth1,
                loginEmail,
                loginPassword
            );
            if (user) {
                // setShowRegisterUser(false)
                // setShowLoginUser(false)
                setUser(user.user.email)
                setUserLoginLogout(true)
                setUserEmail(user.user.email)
                console.log(user.user.email);
            }
        } catch (error) {
            console.log(error.message);
            setShowLoginUser(true)
            setMessage('Email Id or Password Wrong')
        }
    };

    const logout = async () => {
        setMessage('')
        try {
            await signOut(auth1).then(() => {
                setShowLoginUser(true)
                setShowRegisterUser(false)
                setUser('')
                setUserLoginLogout(false)
                setUserEmail('')
                setLoginEmail('')
                setLoginPassword('')
            })
            // setShowLoginUser(true)
            // setShowRegisterUser(false)
            // console.log("logout success"))
        }
        catch (error) {
            console.log("logouterror")
        }
    };

    return (
        <div>
            <div>
                <div class="grid-container-auth">
                    <div class="grid-item-auth">
                        <img class="p-0 m-0 img-rounded" style={{ width: '100%', height: '500px', borderRadius: '5% 0% 0% 5%' }}
                            src="https://rurutek.com/jio/assets/img/login-animate.gif"></img>
                    </div>
                    <div class="grid-item-auth">
                        <div className={'formcss'}>
                            {user &&
                                <div style={{ color: 'white', textAlign: 'center', width: '100% ', paddingLeft: '30px' }}>
                                    <div><b>Login Successfull</b> </div>
                                    <div><b>Welcome</b> {user} !!! </div>
                                    {user && <div onClick={logout} style={{ backgroundColor: 'red', borderRadius: '10px', marginTop: '30px' }}> Sign Out</div>}
                                </div>
                            }
                            {showRegisterUser && !user && <div>
                                <h4 style={{ color: 'white', textAlign: 'center' }}> Register User </h4>
                                <input
                                    placeholder="Email"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                        setRegisterEmail(event.target.value);
                                    }}
                                />
                                <input
                                    placeholder="Password"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                        setRegisterPassword(event.target.value);
                                    }}
                                />
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{
                                        backgroundColor: '#34568B', color: 'white', textAlign: 'center', padding:
                                            '5px', fontSize: '20px', width: '100% '
                                    }} onClick={register}> Create User</div>
                                    <div style={{
                                        backgroundColor: '#55B4B0', color: 'white', textAlign: 'center', padding:
                                            '5px', fontSize: '20px', margin: '5px 0px'
                                    }} onClick={() => {
                                        setShowLoginUser(true)
                                        setShowRegisterUser(false)
                                    }}>Login</div>
                                </div>
                            </div>
                            }
                            {showLoginUser && !user && <div>
                                <h4 style={{ color: 'white', textAlign: 'center' }}> Login </h4>
                                <input
                                    placeholder="Email"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                        setLoginEmail(event.target.value);
                                    }}
                                />
                                <input
                                    placeholder="Password"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                        setLoginPassword(event.target.value);
                                    }}
                                />
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{
                                        backgroundColor: '#34568B', color: 'white', textAlign: 'center', padding:
                                            '5px', fontSize: '20px', width: '100% '
                                    }} onClick={login}> Login</div>
                                    <div style={{
                                        backgroundColor: '#f44336', color: 'white', textAlign: 'center', padding:
                                            '5px', fontSize: '20px', margin: '5px 0px'
                                    }} onClick={register}>Sign Up</div>
                                </div>
                            </div>}
                        </div>
                    </div>

                </div>
                <div class="grid-container-auth-keyboard">
                    <div class="grid-item-auth-keyboard">
                    </div>
                    { }
                    <div class="grid-item-auth-keyboard">
                        {user &&
                            <div style={{ marginLeft: '150px', }}>
                                <img class="p-0 m-0 img-rounded" style={{
                                    width: '100% ', height: '200px', borderRadius: '5 % 0 % 0 % 5 % '
                                }}
                                    src="https://media.istockphoto.com/photos/computer-keyboard-with-clipping-path-picture-id153065264?k=20&m=153065264&s=612x612&w=0&h=Q80rGNk_GLUAMF_1P9stmDFWaUhsckaroEzFLptEHj4=" ></img>
                            </div>
                        }
                        {
                            !user &&
                            <img class="p-0 m-0 img-rounded" style={{
                                width: '100% ', height: '200px', borderRadius: '5 % 0 % 0 % 5 % '
                            }}
                                src="https://media.istockphoto.com/photos/computer-keyboard-with-clipping-path-picture-id153065264?k=20&m=153065264&s=612x612&w=0&h=Q80rGNk_GLUAMF_1P9stmDFWaUhsckaroEzFLptEHj4=" ></img>
                        }
                    </div>
                </div>
            </div >
        </div >
    );
}


const mapDispatchToProps = dispatch => {
    return {
        setUserLoginLogout: (data) => {
            return dispatch(setUserLoginLogout(data))
        },
        setUserEmail: (data) => dispatch(setUserEmail(data)),

    }
}

export default connect(null, mapDispatchToProps)(Auth)

