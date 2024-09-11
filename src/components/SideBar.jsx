import logomail from "../assets/NavBar/Logomail.png"
import home from "../assets/NavBar/Home.png"
import email from "../assets/NavBar/email.png"
import email1 from "../assets/NavBar/email (1).png"
import frame23 from "../assets/NavBar/Frame 23.png"
import email2 from "../assets/NavBar/email (2).png"
import frame19 from "../assets/NavBar/Frame 19.png"
import bar from "../assets/NavBar/bar_chart.png"
const Sidebar = () => {
  return (
    <div className="bg-[#101113] h-screen w-16 flex flex-col items-center py-4 space-y-6 border-r border-[#343a40]">
      {/* Top Logo */}
      <div className="mb-4">
        <img src={logomail}alt="Logo" className="w-8 h-8 mb-7" />
      </div>

      {/* Home Icon */}
      <div className="text-gray-400 hover:text-white">
      <img src={home}alt="Logo" className="w-8 h-8 mb-7" />
      </div>

      {/* User Icon */}
      <div className="text-gray-400 hover:text-white">
      <img src={email}alt="Logo" className="w-8 h-8 mb-7" />
      </div>

      {/* Mail Icon */}
      <div className="text-gray-400 hover:text-white">
      <img src={email1}alt="Logo" className="w-8 h-8 mb-7" />
      </div>

      {/* Send Icon */}
      <div className="text-gray-400 hover:text-white">
      <img src={frame23}alt="Logo" className="w-8 h-8 mb-7" />
      </div>

      {/* List Icon */}
      <div className="text-gray-400 hover:text-white">
      <img src={email2}alt="Logo" className="w-8 h-8 mb-7" />
      </div>

      {/* Image Icon with Notification */}
      <div className="relative text-gray-400 hover:text-white">
      <img src={frame19}alt="Logo" className="w-8 h-8 mb-7" />
        {/* Notification badge */}
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">12+</span>
      </div>

      {/* Analytics Icon */}
      <div className="text-gray-400 hover:text-white">
      <img src={bar}alt="Logo" className="w-8 h-8 mb-7" />
      </div>

      {/* User Avatar */}
      <div className="mt-auto">
        <div className="rounded-full bg-green-700 w-8 h-8 flex items-center justify-center text-white">
          AS
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
