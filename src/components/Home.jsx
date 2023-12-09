import React from 'react'
import "../styles/home.scss";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillInstagram,AiFillYoutube,AiFillAmazonCircle} from 'react-icons/ai'


function Home(){
    return(
        <>
        <div className='home' id="home">
            <main>
                <h1>TechStar</h1>
                <p>Solution to all your problem</p>
            </main>
        </div>

        <div className="home2" id="about">
            <img src={vg} alt="Graphics" />
            <div>
                <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
            </div>
        </div>

        <div className="home3">
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil magni unde nobis ratione dignissimos sequi saepe rerum! Consectetur molestiae laboriosam ipsa quasi eius, aliquam expedita beatae eveniet veniam perferendis reiciendis iure alias. Odit porro similique aut iure ea sequi totam saepe omnis blanditiis laboriosam molestias nemo reprehenderit necessitatibus impedit fuga tenetur, voluptatibus quisquam natus exercitationem enim! Fuga porro ratione et. Quibusdam eum repellendus accusamus aperiam tenetur magnam! Accusantium aperiam quas, magnam quis repellat consequatur numquam dolores illo nam blanditiis natus, cum quaerat perferendis eaque adipisci rerum! Vero, natus repellendus? Rerum atque ullam officiis hic odio doloremque nulla explicabo sint?</p>
            </div>
        </div>

        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay:"0.3s"}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay:"0.5s"}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay:"0.7s"}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay:"1s"}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
        </>
    );
}

export default Home;