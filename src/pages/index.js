import * as React from "react"
import { navigate } from 'gatsby-link'

const handleSubmit = (event) => {
  event.preventDefault();


  const handleChange = (e) => {
    //     setState({ ...state, [e.target.name]: e.target.value })
    //   }

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => navigate("/thank-you/"))
    .catch((error) => alert(error));

  return (
    <form
      data-netlify="true"
      name="pizzaOrder"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="pizzaOrder" />
      <label>
        What order did the pizza give to the pineapple?
        <input name="order" type="text" onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
};





// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }

// export default function Contact() {
//   const [state, setState] = React.useState({})

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const form = e.target
//     fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encode({
//         'form-name': form.getAttribute('name'),
//         ...state,
//       }),
//     })
//       .then(() => navigate("/"))
//       .catch(error => alert(error))
//   }

//   return (
//       <div>
//         <h1>Contact</h1>
//         <form
//           name="contact"
//           method="post"
//           // action="/thanks/"
//           data-netlify="true"
//           data-netlify-honeypot="bot-field"
//           onSubmit={handleSubmit}
//         >
//           {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//           <input type="hidden" name="form-name" value="contact" />
//           <p hidden>
//             <label>
//               Don’t fill this out: <input name="bot-field" onChange={handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your name:
//               <br />
//               <input type="text" name="name" onChange={handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your email:
//               <br />
//               <input type="email" name="email" onChange={handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Message:
//               <br />
//               <textarea name="message" onChange={handleChange} />
//             </label>
//           </p>
//           <p>
//             <button type="submit">Send</button>
//           </p>
//         </form>
  
//       </div>
//   )
// }
