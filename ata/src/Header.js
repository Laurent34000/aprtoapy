const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a href="/aprtoapy" class="navbar-brand">
          APY 2 APR CONVERTER
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          class="navbar-toggler collapsed"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse">
          <div class="mr-auto navbar-nav">
            <a
              href="/aprtoapy"
              class="nav-link"
            >
                           Home
            </a>
           
            <a
              href="https://github.com/Laurent34000/aprtoapy"
              class="nav-link"
            >
              
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;