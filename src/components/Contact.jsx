import React from 'react';
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
            <div>
                <label>Name</label>
                <input type="text" placeholder='Enter name' required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder='Enter email' required/>
            </div>
            <div>
                <label>Name</label>
                <input type="text" placeholder='Enter your message here' required/>
            </div>

            <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact