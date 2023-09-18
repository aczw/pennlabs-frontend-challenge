const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className="flex flex-col space-y-4 border-b border-black/10 bg-gray-50 px-8 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            width="32"
          />
          <h2 className="align-top text-2xl font-semibold">Penn Course Cart</h2>
        </div>

        {children ? children : null}
      </div>
    </header>
  );
};

export default Header;
