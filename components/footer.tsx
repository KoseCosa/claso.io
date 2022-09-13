import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaSnapchatSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bottom-0 p-2 bg-slate-50">
      <nav className="flex items-center justify-center w-full sm:w-auto space-x-2">
        <a>
          <FaGithubSquare color="#24292f" size={28} />
        </a>
        <a>
          <FaFacebookSquare color="#4267B2" size={28} />
        </a>
        <a>
          <FaLinkedin color="0077B5" size={28} />
        </a>
        <a>
          <FaTwitterSquare color="1DA1F2" size={28} />
        </a>
        <a>
          <FaInstagramSquare color="#F56040" size={28} />
        </a>
        <a>
          <FaSnapchatSquare color="#FFFC00" size={28} />
        </a>
        <a>
          <FaEnvelopeSquare color="#24292f" size={28} />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
