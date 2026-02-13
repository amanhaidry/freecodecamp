const { useState } = React;

export function EventRSVPForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        attendees:1,
        dietary:"",
        guest:false
    })
  
  const [message, setMessage] = useState("");

  const handleChange = (e) =>{
    const {name,value,type,checked} = e.target;
    setFormData((prevData) =>{
        return {
            ...prevData,
            [name]: type === "checkbox"? checked : value,
        }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    if(!formData.name.trim() || !formData.email.trim() || formData.attendees<1){
        setMessage("Please fill in all required fields correctly.");
        return;
    }

    let newMessage = `RSVP Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nNumber of attendees: ${formData.attendees>0?formData.attendees:"None"}\nDietary preferences: ${formData.dietary?formData.dietary:"None"}\nBringing additional guests: ${formData.guest?"Yes":"No"}`;

    console.log(newMessage);
    setMessage(newMessage);
  };


  return (
    <div>
      <h2>Event RSVP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="required"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="required"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="attendee">
          Attendee:
          <input
            type="number"
            id="attendee"
            name="attendees"
            min="1"
            value={formData.attendees}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="dietary">
          Dietary:
          <input
            type="text"
            id="dietary"
            name="dietary"
            value={formData.dietary}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="guest">
          Guest:
          <input
            type="checkbox"
            id="guest"
            name="guest"
            checked={formData.guest}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        <p id="message">{message}</p>
      </form>
    </div>
  );
}
