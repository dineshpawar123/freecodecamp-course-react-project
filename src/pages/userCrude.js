import React, { useState, useEffect } from 'react';
import { db } from "../firebase-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import '../style/css/userCrude.css'
import { Link } from 'react-router-dom';

function UserCrude() {
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({
        age: '', firstname: '', company: '', lastname: '',
        mobile: '', state: ''
    })
    const userCollectionRef = collection(db, "users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            console.log(data.docs)
            setUsers(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        };
        getUsers()
    })

    const createUser = async () => {
        await addDoc(userCollectionRef, newUser)
    }

    const incrementAge = async (id, age) => {
        const userDoc = doc(db, "users", id)
        const newFields = { age: Number(age) + 1 }
        await updateDoc(userDoc, newFields);
    }

    const decrementAge = async (id, age) => {
        const userDoc = doc(db, "users", id)
        const newFields = { age: age - 1 }
        await updateDoc(userDoc, newFields);
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id)//to get specific elememnt
        await deleteDoc(userDoc);
    }

    return (
        <div>
            <div className={'container'}>
                <div className={'form-container'}>
                    <div className={'grid-item'}>
                        <div className={'row'}>
                            <input type="string" placeholder="First Name" onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })} /><br />
                            <input type={"string"} placeholder="Last Name" onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })} /><br />
                            <input type={"number"} placeholder="Age" value={users.age} onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} /><br />
                            <input type={"string"} placeholder="Company" onChange={(e) => setNewUser({ ...newUser, company: e.target.value })} /><br />
                        </div>
                    </div>
                    <div className={'grid-item'}>
                        <div className="row">
                            <input type="number" placeholder="Mobile" onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })} /><br />
                            <input type="string" placeholder="State" onChange={(e) => setNewUser({ ...newUser, state: e.target.value })} /><br />
                            <input type="string" placeholder="Country" onChange={(e) => setNewUser({ ...newUser, country: e.target.value })} /><br />
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <button onClick={createUser} style={{ backgroundColor: 'green', padding: '10px', color: 'white', borderRadius: '10px', border: '2px solid green', margin: '5px auto', fontSize: '20px', display: 'inline', width: '40%' }} onClick={createUser}>create user</button>
                                <button style={{ border: '2px solid white', padding: '10px', color: 'white', borderRadius: '10px', border: '2px solid green', margin: '5px auto', fontSize: '20px', display: 'inline', textDecoration: 'none', width: '40%', backgroundColor: 'orange' }}>
                                    <Link to={'/'} style={{ textDecoration: 'none' }} >
                                        Back
                                    </Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"animated"} style={{ textAlign: 'center', padding: '15px', fontWeight: 'bold' }}>
                CRUDE OPERATION
            </div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>company</th>
                    <th>Mobile</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Age</th>
                    <th>Increment Age</th>
                    <th>Delete</th>
                </tr>
                {!users && !users && !users.firstname && <div className="loader">loading</div>}
                {users.map((data) => {
                    return <tr>
                        <td>{data.firstname}</td>
                        <td>{data.lastname}</td>
                        <td>{data.company}</td>
                        <td>{data.mobile}</td>
                        <td>{data.state}</td>
                        <td>{data.country}</td>
                        <td>{data.age}</td>
                        <td> <button className="age" onClick={() => { incrementAge(data.id, data.age) }}><b>+</b></button>
                            <button className="age" onClick={() => { decrementAge(data.id, data.age) }}><b>-</b></button></td>
                        <td><button id="delete" onClick={() => {
                            deleteUser(data.id)
                        }}>Delete</button></td>ll
                    </tr>
                })
                }
            </table>
        </div >
    )
}

export default UserCrude
