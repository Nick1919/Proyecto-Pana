import React from "react";

function Header() {
    return (
      <header>
        <div className="container">
          <div className="col">
              <div className="headerMenuContainer">
                  <div className="headerMenu">
                      <span className="headerMenuIcon"></span>
                  </div>

                  <div className="headerLogoContainer">
                    <span className="headerLogo"></span>
                  </div>

                  <nav className="headerNav">
                      <ul>
                          <li className="listemItem1">Conócenos</li>
                          <li className="listemItem2">Registrate</li>
                          <li className="listemItem3">Contribuir</li>
                      </ul>
                  </nav>
              </div>
            </div>
          </div>
      </header>
    );
  }
  
export default Header;
  