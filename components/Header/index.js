import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain "
            src="https://links.papareact.com/yvf"
            alt="medium logo"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <Link href="/create">
          <a className="cursor-pointer rounded-full border border-green-600 px-4 py-1 transition hover:bg-green-600 hover:text-white">
            Share Article now
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
