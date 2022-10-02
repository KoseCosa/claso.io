import Link from "next/link";
import {
  FaStrava,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaSnapchatGhost,
  FaEnvelope,
} from "react-icons/fa";

const iconSize = "100%";

function Footer() {
  return (
    <div className="w-full bottom-0 bg-github-grey shadow flex justify-center">
      <nav className="bg-white flex items-center grow justify-center w-full sm:w-auto max-w-lg">
        <a
          className="bg-github-grey py-2 px-4 grow aspect-square"
          href="https://github.com/KoseCosa/"
        >
          <FaGithub color="white" size={iconSize} />
        </a>
        <a
          className="bg-linkedin-blue py-2 px-4 grow aspect-square"
          href="https://www.linkedin.com/in/kosecosa/"
        >
          <FaLinkedinIn color="white" size={iconSize} />
        </a>
        <a
          className="bg-facebook-blue py-2 px-4 grow aspect-square"
          href="https://www.facebook.com/kosecosa"
        >
          <FaFacebookF color="white" size={iconSize} />
        </a>
        <a
          className="bg-twitter-blue py-2 px-4 grow aspect-square"
          href="https://twitter.com/kosecosa"
        >
          <FaTwitter color="white" size={iconSize} />
        </a>
        <a
          className="bg-instagram-purple py-2 px-4 grow aspect-square"
          href="https://www.instagram.com/kosecosa/"
        >
          <FaInstagram color="white" size={iconSize} />
        </a>
        <a
          className="bg-strava-orange py-2 px-4 grow aspect-square"
          href="https://www.strava.com/athletes/kosecosa/"
        >
          <FaStrava color="white" size={iconSize} />
        </a>
        <a
          className="bg-snapchat-yellow py-2 px-4 grow aspect-square"
          href="https://www.snapchat.com/add/kosecosa"
        >
          <FaSnapchatGhost color="white" size={iconSize} />
        </a>
        <Link href="/contact/">
          <div className="bg-github-grey py-2 px-4 hover:cursor-pointer grow  aspect-square">
            <FaEnvelope color="white" size={iconSize} />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Footer;
