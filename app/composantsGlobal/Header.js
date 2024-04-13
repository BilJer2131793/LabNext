export default function Header() {
    return (
      <>

        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
            <div className="container-fluid d-flex justify-items-end align-content-end" style={{ backgroundColor: "#00ADB5" }}>
              <a className="col-2" href="/"><img className="img-fluid" src="https://picsum.photos/id/237/200" alt="" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggle">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-8 d-flex justify-content-between">
                  <li className="nav-item row">
                    <h1 className="align-self-center">Menu1</h1>
                  </li>
                  <li className="nav-item row">
                    <h1 className="align-self-center">Menu2</h1>
                  </li>
                  <li className="nav-item row">
                    <h1 className="align-self-center">Menu3</h1>
                  </li>
                  <li className="nav-item row">
                    <h1 className="align-self-center">Menu4</h1>
                  </li>
                  <img className="img-fluid row" src="https://picsum.photos/id/237/200" alt="" />
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
  
