import React from 'react'
import building from '../assets/building.jpg'
import customer from '../assets/customer-support-banner.jpg'

const Contact = () => {
  return (
    <div>
      <div id="cardschoice">
        <p>Contact Us</p>
      </div>

      <div className="image-container">
        <img src={customer} />
        <div className="text-container">
          <div className="contact-us">
            <h2>Contact us with any questions regarding your registry.</h2>
            <p>
              It’s okay to have questions, we have the answers. Whether you’re a
              member who wants popular gift ideas or a guest who’s trying to
              find the perfect item in your budget, we can help! We want your
              Registry experience to be easy and enjoyable. That’s why we’re
              here to assist you. Tel: 555-885-7851
            </p>
          </div>
        </div>
      </div>

      <div className="contuctus-cont">
        <div style={{ textAlign: 'center' }}>
          <p>Leave us a message:</p>
        </div>
        <div className="row">
          <div className="column">
            <img src={building} style={{ width: '100%' }} />
          </div>
          <div className="column">
            <form action="">
              <label for="fname">First Name</label>
              <input
                className="input "
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label for="lname">Last Name</label>
              <input
                className="input "
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label for="country">Country</label>
              <select className="select" id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label for="subject">Subject</label>
              <textarea
                className="textarea"
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: '170px' }}
              ></textarea>
              <button href="" className="button btn mt-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
