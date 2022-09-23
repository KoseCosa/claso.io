import Link from "next/link";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaSnapchatSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";

const iconSize = 42;

function Footer() {
  return (
    <div className="w-full bottom-0 p-2 bg-zinc-100">
      <nav className="flex items-center justify-center w-full sm:w-auto space-x-2">
        <a href="https://github.com/KoseCosa/">
          <FaGithubSquare color="#18181B" size={iconSize} />
        </a>
        <a href="https://www.facebook.com/kosecosa">
          <FaFacebookSquare color="#4267B2" size={iconSize} />
        </a>
        <a href="https://www.linkedin.com/in/kosecosa/">
          <FaLinkedin color="0077B5" size={iconSize} />
        </a>
        <a href="https://twitter.com/kosecosa">
          <FaTwitterSquare color="1DA1F2" size={iconSize} />
        </a>
        <a href="https://www.instagram.com/kosecosa/">
          <FaInstagramSquare color="#F56040" size={iconSize} />
        </a>
        <a href="https://www.snapchat.com/add/kosecosa">
          <FaSnapchatSquare color="#FFFC00" size={iconSize} />
        </a>
        <Link href="/contact/">
          <FaEnvelopeSquare color="#18181B" size={iconSize} />
        </Link>
      </nav>
    </div>
  );
}

export default Footer;
