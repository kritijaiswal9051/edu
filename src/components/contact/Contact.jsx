import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d545b0d2-6600-45d8-856d-817874537f75");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col-1">
        <h3>
          Send us a message <img src={msg} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, cum
          quam, obcaecati blanditiis est sequi quaerat illum impedit assumenda
          doloribus ipsum ea tenetur corporis similique. Nihil debitis dolorem
          fugit tempora?
        </p>
        <ul>
          <li>
            <img src={mail} alt="" /> Contact@kritiJaiswal.com
          </li>
          <li>
            <img src={phone} alt="" />
            -1 123-456-7890
          </li>
          <li>
            <img src={location} alt="" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col-1">
        <form onSubmit={onSubmit}>
          <label>Youe Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your massage here</label>
          <textarea
            name="massage"
            rows="6"
            placeholder="Enter your massage"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
