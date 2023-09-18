const Header = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <header
      className={`flex flex-col space-y-4 border-b border-black/10 bg-gray-50 px-8 py-3 ${
        className ? className : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <nav className="flex items-center space-x-6">
          <a
            href="/#"
            className="flex items-center space-x-2 hover:underline"
          >
            <img
              src="/logo.png"
              width="32"
            />
            <h2 className="align-top text-2xl font-semibold">
              Penn Course Cart
            </h2>
          </a>
          <a
            href="https://github.com/aczw"
            className="text-zinc-700 hover:underline"
            target="_blank"
          >
            @aczw
          </a>
        </nav>
        {children ? children : null}
      </div>
    </header>
  );
};

export default Header;
