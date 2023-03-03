import "./App.css";

const ContactForm = () => {
    return ( 
        <div className="bg-teal-500 w-full py-10" id="contactForm">
            <div className="text-4xl mb-5 text-center text-white">Contact Me!</div>
            <form action="" onSubmit={() => alert('Your message has been receieved, we will get back to you shortly. Thank you!')} className="w-1/2 m-auto">
                <label htmlFor="name" className="text-white">Name</label>
                <input type="text" name="name" className="block w-full m-auto rounded-md mt-2 mb-10 bg-transparent border-white border-solid border-2 text-white p-2" required/>
                <label htmlFor="email" className="text-white">Email</label>
                <input type="text" name="email" className="block w-full m-auto rounded-md mt-2 mb-10 bg-transparent border-white border-solid border-2 text-white p-2" required/>

                <label htmlFor="name" className="text-white">Name</label>
                <input type="text" name="name" className="block w-full m-auto rounded-md mt-2 mb-10 bg-transparent border-white border-solid border-2 text-white p-2" required/>

                <label htmlFor="enquiryType" className="text-white">Name</label>
                <select name="enquiryType" id="enquiryType" className="block w-full m-auto rounded-md mt-2 mb-10 p-3 bg-transparent border-white border-solid border-2 text-white p-2" >
                    <option value="freelance">Freelance Project Proposal</option>
                    <option value="freelance">Contract Employement</option>
                    <option value="freelance">Full-time Employement</option>
                </select>
                <label htmlFor="name" className="text-white">Your message</label>
                <textarea type="text" name="name" className="block w-full m-auto rounded-md mt-2 mb-10 h-48 p-3 bg-transparent border-white border-solid border-2 text-white p-2"/>
                <input type="submit" name="name" className="block w-full m-auto rounded-md mt-2 p-2 bg-opacity-40 text-white bg-teal-900" required/>
            </form>
        </div>
     );
}
 
export default ContactForm;