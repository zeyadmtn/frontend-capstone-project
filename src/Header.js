import "./App.css";
const Header = () => {
    return (
        <div className="w-full h-12 bg-teal-700 flex flex-row justify-between">
            <div className="flex flex-row justify-between w-1/5 p-2">
                <a href="https://facebook.com" target="_blank">
                    <img src="https://img.icons8.com/color/48/null/facebook-new.png" className="w-auto h-8" />
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" className="w-auto h-8" />
                </a>
                <a href="https://linkedin.com" target="_blank">
                    <img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" className="w-auto h-8" />
                </a>
                <a href="https://twitter.com" target="_blank">
                    <img src="https://img.icons8.com/color/48/null/twitter-circled--v1.png" className="w-auto h-8" />
                </a>
                <a href="https://github.com" target="_blank">
                    <img src="https://img.icons8.com/3d-fluency/94/null/github.png" className="w-auto h-8" />
                </a>
            </div>

            <div className="p-2 w-2/12 flex flex-row">
                <div href="" className="mr-4 text-sm text-white underline" onClick={() => window.location.replace("/#myProjects")}>Projects</div>
                <div href="" className=" text-sm text-white underline" onClick={() => window.location.replace("/#contactForm")}>Contact Me</div>
            </div>
        </div>
    );
}

export default Header;