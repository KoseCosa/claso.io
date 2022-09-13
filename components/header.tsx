import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full">
      <div className="flex flex-row">
        <div>Clas Olaf Steinbru Andersen</div>
        <nav>
          <FaGithub></FaGithub>
        </nav>
      </div>
    </header>
  );
}

export default Header;
