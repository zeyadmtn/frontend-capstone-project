import "./App.css";
import ContactForm from "./ContactForm";
import Header from "./Header";
import MyProjects from "./MyProjects";

function App() {
  return (
    <div>
      <Header />
      <div className="justify-center align-center">
        <div className="bg-teal-500 pt-10 justify-center text-center pb-48">
          <img src="https://avatars.githubusercontent.com/u/82226885?s=400&u=ea2711a52b1369316bd6384e3d2de975ea64432a&v=4" alt="my_image" className="m-auto rounded-full w-auto h-40"/>
          <span className="block mt-5 mb-10 text-white font-bold">Hello, I'm Zee,</span>
          <span className="block text-white text-3xl font-bold">A Front-End React Developer!</span>
        </div>
        <MyProjects />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;