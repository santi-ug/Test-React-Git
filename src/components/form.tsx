import "../styles/FormPage.css";
import React from 'react';

const FormPage: React.FC = () => {
  return (
    <main className='form'>
      <section className='main__form'>
        <div className="container">
          <form action="action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label htmlFor="type">Type ID</label>
            <div className='ID'>
                <select className='type' id="type" name="type">
                    <option value="cedula">State Identification (ID)</option>
                    <option value="licencia">Driver license</option>
                    <option value="passport">Passport card</option>
                    <option value="tarjeta_militar">Military card</option>
                </select>

                <input type="text" id="ID" name="ID" placeholder="Your identification number..." />
            </div>

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
            
            <div className='BInput'>
                <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FormPage;
