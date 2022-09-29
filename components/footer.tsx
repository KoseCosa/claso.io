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

const iconSize = 14;

function Footer() {
  return (
    <div className="w-full bottom-0 bg-github-grey shadow">
      <nav className="flex items-center justify-center w-full sm:w-auto">
        <a
          className="bg-github-grey py-2 px-4 "
          href="https://github.com/KoseCosa/"
        >
          <FaGithub color="white" size={iconSize} />
        </a>
        <a
          className="bg-linkedin-blue py-2 px-4 "
          href="https://www.linkedin.com/in/kosecosa/"
        >
          <FaLinkedinIn color="white" size={iconSize} />
        </a>
        <a
          className="bg-facebook-blue py-2 px-4 "
          href="https://www.facebook.com/kosecosa"
        >
          <FaFacebookF color="white" size={iconSize} />
        </a>
        <a
          className="bg-twitter-blue py-2 px-4 "
          href="https://twitter.com/kosecosa"
        >
          <FaTwitter color="white" size={iconSize} />
        </a>
        <a
          className="bg-instagram-purple py-2 px-4 "
          href="https://www.instagram.com/kosecosa/"
        >
          <FaInstagram color="white" size={iconSize} />
        </a>
        <a
          className="bg-strava-orange py-2 px-4 "
          href="https://www.strava.com/athletes/kosecosa/"
        >
          <FaStrava color="white" size={iconSize} />
        </a>
        <a
          className="bg-snapchat-yellow py-2 px-4 "
          href="https://www.snapchat.com/add/kosecosa"
        >
          <FaSnapchatGhost color="white" size={iconSize} />
        </a>
        <Link href="/contact/">
          <div className="bg-github-grey py-2 px-4 hover:cursor-pointer">
            <FaEnvelope color="white" size={iconSize} />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Footer;
