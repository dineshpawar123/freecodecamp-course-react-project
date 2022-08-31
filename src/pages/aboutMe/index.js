import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Java_certificate from '../../style/images/Java_certificate.pdf';
import Python_certificate from '../../style/images/Java_certificate.pdf';
import achievement from '../../style/video/achievement.mp4';
import achievementimage from '../../style/images/achievementimage.jpg';

function Index() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("=>", e)
        emailjs.sendForm('service_hbyjecy', 'template_fo9k1pa', form.current, '0ExNcePPqi_CWu8WR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div>
            <div class="container bg-dark mb-0 mt-0 p-3 ">
                <h1 class=" container text-center text-dark pt-6 mt-2 bg-warning p-0">My Profile</h1>
                <div class="text-center">
                    <p class="col">
                        <img class="rounded-circle" style={{ height: '160px', width: '160px' }} src="https://i.imgur.com/OMvNdth.jpg"></img></p>
                    <h3 class="text-warning ">Dinesh Pawar</h3>
                    <h5 class="text-info ">Navaratna society , Wadgaonsheri</h5>
                    <h5 class="text-info">pune , 411014</h5>
                    <h5 class="text-warning">
                        <u>
                            <a href="mailto:dineshppawar27@gmail.com">
                                <blink>  dineshppawar27@gmail.com</blink>
                            </a>
                        </u></h5>
                    <h5 class="text-danger">7875264812</h5>
                </div>
            </div>

            <div class="container  bg-dark mt-5">
                <h1 class="text-left text-dark mb-4 p-2 text-center bg-warning">💻Work Experience 🖱 </h1>

                <div class=" row text-white ">
                    <div class="col text-center">
                        <p >
                            <img class="p-0 m-0 img-rounded" style={{ height: '180px', width: '80%', borderRadius: '10%' }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vjocpZw4qA8MtczV9nxggBG-GwsISaqvEz4YLNO8vQ&s"></img></p>
                    </div>
                    <div class="col">
                        <h4 class="text-danger">CCTech Center for computational Technologies</h4>
                        <h4 class="text-info">Sep 2021 - Present</h4>
                        <h4 class="text-warning">ReactJs Developer</h4>
                    </div>
                </div>
                <br />
                <hr />
                <div class=" row text-white">
                    <div class="col text-center">
                        <p ><img class="p-0 m-0 img-thumbnail" style={{ height: '190px', width: '80%', borderRadius: '10%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldQGZiaB-uRz6I0tcH8AFPb9zSljy3Bp2-6T-1mM-SA&s"></img></p>
                    </div>
                    <div class="col">
                        <h4 class="text-danger">Paramlogic Infotech</h4>
                        <h4 class="text-info">Dec 2020 - Sep 2021</h4>
                        <h4 class="text-warning">ReactJs Developer</h4>
                    </div>
                </div>
            </div >

            <div class="container mt-5 bg-dark">
                <h1 class="text-center text-red bg-warning pb-3 pb-2 bg-warning">📈 Technical Knowledge 🖥💻🖱</h1>
                <div class="row  text-dark  pt-4 pb-4">
                    <div class="col-sm-6 p-5">
                        <div class="text-warning"><b>ReactJs </b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '85%' }}>85%</div>
                        </div>

                        <div class="text-warning"><b>HTML</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{ width: '85%' }}>85%</div>
                        </div>

                        <div class="text-warning"><b>CSS</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{ width: '75%' }}>85%</div>
                        </div>

                        <div class="text-warning"><b>Javascript</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{ width: '75%' }}>85%</div>
                        </div>

                        <div class="text-warning"><b>NextJs</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '65%' }}>65%</div>
                        </div>

                        <div class="text-warning"><b>Bootstrap</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-dark progress-bar-striped progress-bar-animated" style={{ width: '70%' }}>70%</div>
                        </div>
                        <div class="text-warning"><b>Sql</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style={{ width: '70%' }}>70%</div>
                        </div>
                    </div>
                    <div class="col-sm-6 p-5">
                        <div class="text-warning"><b>Java</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{ width: '85%' }}>85%</div>
                        </div>

                        <div class="text-warning"><b>C</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-dark progress-bar-striped progress-bar-animated" style={{ width: '85%' }}>90%</div>
                        </div>

                        <div class="text-warning"><b>C++</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style={{ width: '75%' }}>80%</div>
                        </div>

                        <div class="text-warning"><b>Php</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '75%' }}>65%</div>
                        </div>
                        <div class="text-warning"><b>Phython</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '75%' }}>65%</div>
                        </div>
                        <div class="text-warning"><b>MUI</b></div>
                        <div class="progress mb-2">
                            <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '65%' }}>65%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container text-center bg-dark mt-5">
                <h1 class="text-center text-dark mb-4 p-2 bg-warning">💻 Educational Details 📖</h1>
                <div class=" row text-white ">
                    <div class="col-sm-6 mb-2 p-5">
                        <p>
                            <img
                                class="p-0 m-0 img-thumbnail" style={{ height: '240px', width: '100%' }}
                                src="https://content.jdmagicbox.com/comp/pune/t1/020pxx20.xx20.000504904489.c2t1/catalogue/nowrosjee-wadia-college-bund-garden-road-pune-colleges-62j1ne.jpg?clr=006600"></img></p>
                        <h4>Modern Education Society's Nowrosjee Wadia College Arts, Science, Pune 01</h4>
                        <h2 class="text-warning"> 2018-2020</h2>
                        <h4 class="text-info"> Master Degree (Computer Science) </h4>
                        <h4 class="text-danger"> Percentage : 70.83 </h4>
                    </div>
                    <div class="col-sm-6 mb-2 p-5">
                        <p><img
                            class="p-0 m-0 img-thumbnail" style={{ height: '240px', width: '100%' }}
                            src="https://www.outlookindia.com/outlooktraveller//public/uploads/2017/03/Pune9_FI-1024x655.jpg"></img></p>
                        <h4> Fergussion College, pune</h4>
                        <h2 class="text-warning"> 2015-2018</h2>
                        <h4 class="text-info"> Batchelor (Computer Science) </h4>
                        <h4 class="text-danger"> Percentage : 68.47 </h4>
                    </div>
                    <br /><br />
                    <hr />
                    <div class="col-sm-6 p-5">
                        <p><img
                            class="p-0 m-0 img-thumbnail" style={{ height: '240px', width: '100%' }}
                            src="https://images.jdmagicbox.com/comp/nashik/70/0253p253std4000170/catalogue/k-k-wagh-art-comm-sci-and-comp-science-college-panchavati-nashik-arts-colleges-3hcznjp.jpg?clr="></img></p>
                        <h4> Karmaveer Ramraojee Aher, College Deola </h4>
                        <h2 class="text-warning"> 2013-2015</h2>
                        <h3 class="text-info">Hsc Science</h3>
                        <h4 class="text-danger"> Percentage : 72.31 </h4>
                    </div>
                    <div class="col-sm-6 p-5">
                        <p><img
                            class="p-0 m-0 img-thumbnail" style={{ height: '240px', width: '100%' }}
                            src="  https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sc3xlbnwwfHwwfHw%3D&w=1000&q=80"></img></p>
                        <h4> S. S. V. Bhaur </h4>
                        <h2 class="text-warning"> 2012-2013</h2>
                        <h3 class="text-info"> SSC</h3>
                        <h4 class="text-danger"> Percentage : 89.60 </h4>
                    </div>
                </div>
            </div >

            <div class="container text-center bg-dark mt-5">
                <h1 class="text-center text-dark mb-4 bg-warning p-2">My Hobbies</h1>
                <div class=" row text-white ">
                    <div class="col">
                        <p class="col">
                            <img class="rounded-circle" style={{ height: '160px', width: '160px' }} src="https://cdn.pixabay.com/photo/2013/07/12/15/55/cricket-150561__340.png"></img></p>
                        <h4 class="text-muted ">Playing Cricket</h4>
                    </div>
                    <div class="col">
                        <p class="col"><img class="rounded-circle" style={{ height: '160px', width: '160px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFLEiril7Sz45Cc4wQ8rxZtPCqu6DKPqpZQ&usqp=CAU"></img></p>
                        <h4 class="text-muted">Listening Music</h4>
                    </div>
                    <div class="col">
                        <p class="col"><img class="rounded-circle" style={{ height: '160px', width: '160px' }} src="https://images.unsplash.com/photo-1522410818928-5522dacd5066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9iYnl8ZW58MHx8MHx8&w=1000&q=80"></img></p>
                        <h4 class="text-muted">Painting </h4>
                    </div>
                    <div class="col">
                        <p class="col"><img class="rounded-circle" style={{ height: '160px', width: '160px' }} src="data:image/jpeg;base64,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"></img></p>
                        <h4 class="text-muted">Coding</h4>
                    </div>
                </div>
            </div >

            <div class="container mt-5 bg-dark">
                <h1 class="text-center text-dark bg-warning mb-5 p-2">📄Certification 🥇</h1>
                <div class="row bg-dark text-white p-4">
                    <div class="col-sm-12">
                        <iframe
                            src={Java_certificate}
                            src={Python_certificate}
                            frameBorder="0"
                            scrolling="auto"
                            height="800px"
                            width="100%"
                        ></iframe>
                        <iframe
                            src={Python_certificate}
                            frameBorder="0"
                            scrolling="auto"
                            height="800px"
                            width="100%"
                        ></iframe>

                    </div>
                </div>
                <div class="row bg-dark text-white p-4">
                    <div class="col-sm-12 mb-5">
                        <img class="p-0 m-0 img-thumbnail" style={{ height: '640px', width: '100%', }}
                            src="https://udemy-certificate.s3.amazonaws.com/image/UC-b699901c-dcb5-494a-9cf9-1d53ebf3de3f.jpg?v=1625995381000"></img>
                    </div>
                    <br />
                    <div class="col-sm-12 mb-5">
                        <img class="p-0 m-0 img-thumbnail" style={{ height: '640px', width: '100%', paddingBottom: '10px' }}
                            src="https://udemy-certificate.s3.amazonaws.com/image/UC-0fc92818-6729-4fb2-8e50-4734866e250e.jpg?v=1625509607000"></img>
                    </div>
                    <br />
                    <div class="col-sm-12 mb-5">
                        <img class="p-0 m-0 img-thumbnail" style={{ height: '640px', width: '100%', paddingBottom: '10px' }}
                            src="https://udemy-certificate.s3.amazonaws.com/image/UC-3105b49f-439b-449b-b7df-ad1adc18b2e2.jpg?v=1606634152000"></img>
                    </div>
                    <br />
                    <div class="col-sm-12 mb-5">
                        <img class="p-0 m-0 img-thumbnail" style={{ height: '640px', width: '100%', paddingBottom: '10px' }}
                            src="https://udemy-certificate.s3.amazonaws.com/image/UC-aa39092b-46a9-4b04-bbb3-4abd819c5748.jpg?v=1625509878000"></img>
                    </div>
                </div>
            </div>
            <div class="container  bg-dark mt-5">
                <h1 class="text-left text-dark mb-4 p-2 text-center bg-white">🏆Achievement🏆 </h1>
                <div class=" row text-white ">
                    <div class="col text-center">
                        <img style={{ height: '95%', width: '100%' }}
                            src={achievementimage}></img>
                    </div>
                    <div class="col text-center"> <iframe width="727" height="409" src={achievement} allowfullscreen></iframe></div>
                </div>
            </div>
            <div class="container text-center mt-3 bg-dark">
                <h1 class="text-center  mb-0 bg-warning p-2 text-bold">Personal Details 📃</h1>
                <table class="table table-hover bg-white text-red">
                    <tbody>
                        <tr>
                            <td><b>Name</b></td>
                            <td>Dinesh Pandit Pawar.</td>
                        </tr>
                        <tr>
                            <td><b>Date of Birth</b> </td>
                            <td>27 April 1997</td>
                        </tr>
                        <tr>
                            <td><b>Language</b></td>
                            <td>English, Hindi, Marathi</td>
                        </tr>
                        <tr>
                            <td><b>Nationality</b></td>
                            <td>Indian</td>
                        </tr>
                        <tr>
                            <td><b>Marital Status:</b> </td>
                            <td>Single</td>
                        </tr>
                        <tr>
                            <td><b>Mother Tongue</b></td>
                            <td>Marathi</td>
                        </tr>
                        <tr>
                            <td><b>Permanent Address:</b> </td>
                            <td>At Post Bhaur , Tal - Deola , Dist  - Nashik ,423102</td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td>dineshppawar27@gmail.com</td>
                        </tr>
                        <tr>
                            <td><b>Mobile No</b></td>
                            <td>+91 7875264812 </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="container text-center mt-5 bg-dark">
                <form ref={form} onSubmit={sendEmail}>
                    <h1 class="text-center  mb-0 bg-warning p-2 text-bold">📩 Contact Me <span style={{ color: 'red' }}>☎</span></h1>
                    <div class="h2 pt-2"><input type="text" placeholder="Full name" name="user_name" required></input></div>
                    <div class="h2"><input type="Email" placeholder="Email" name="user_email" required></input></div>
                    <div class="h2"><input type="text" placeholder="Subject" name="Subject" required></input></div>
                    <div class="h2"><textarea placeholder="Write your message here" name="message" cols="30" rows="5"></textarea></div>
                    <div class="btn-group btn-group-lg">
                        <button type="submit" class="btn btn-primary">
                            Send Mail
                        </button>
                    </div>
                </form>
            </div>

            <div class="container-fluid text-center bg-dark mt-5">
                <h1 class="text-center text-dark mb-4 bg-warning p-2">Follow Me ☺</h1>
                <div class=" row text-white ">
                    <div class="col">
                        <p class="col">
                            <a href={'https://linkedin.com/in/dinesh-pawar-19aa87195'} target="_blank">
                                <img class="rounded-circle" style={{ height: '160px', width: '160px' }}
                                    src="data:image/png;base64,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"></img>
                            </a>
                        </p>
                    </div>
                    <div class="col">
                        <p class="col">
                            <a href={'https://github.com/dineshpawar123'} target="_blank">
                                <img class="rounded-circle" style={{ height: '160px', width: '160px' }} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                            </a>
                        </p>
                    </div>
                    <div class="col">
                        <p class="col">
                            <a href={'https://www.facebook.com/profile.php?id=100014856131557'} target="_blank">
                                <img class="rounded-circle" style={{ height: '160px', width: '160px' }}
                                    src="data:image/png;base64,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"></img>
                            </a>
                        </p>

                    </div>
                    <div class="col">
                        <p class="col">
                            <a href={'https://www.instagram.com/dineshppawar27/'} target="_blank">
                                <img class="rounded-circle" style={{ height: '160px', width: '160px' }}
                                    src="data:image/jpeg;base64,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"></img>
                            </a>
                        </p>

                    </div>


                    <div class="col">
                        <p class="col" >
                            <a href="tel:+917875264812" target="_blank">
                                <img class="rounded-circle" style={{ height: '160px', width: '160px' }} src="https://cdn1.vectorstock.com/i/1000x1000/90/80/mobile-phone-calling-vector-1289080.jpg"></img>
                            </a>
                            +917875264812
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Index
