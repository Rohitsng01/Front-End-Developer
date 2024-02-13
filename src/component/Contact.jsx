import React from 'react'

export const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>

            <form>
                <div>
                    <label>Name</label>
                    <input type='text' required placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' required placeholder='abc@gmail.com'/>
                </div>

                <div>
                    <label>Massage</label>
                    <input type='text' required placeholder='Tell your Query....'/>
                </div>
                <button type='submit'>Send</button>

            </form>
        </main>
    </div>
  )
}
export default Contact;
