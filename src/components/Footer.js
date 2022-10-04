import React from 'react'

export const Footer = () => {
    let position ={
        position: "relative",
        top: "100vh",
        width: "100%"
    } 
  return (
    

  <footer className="text-white text-center text-lg-start bg-dark" style={position}> 
    
    <div className="container p-4">
      
      <div className="row mt-4">
        
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About Bookify</h5>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>

          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>

          
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

          <div className="form-outline form-white mb-4">
            <input type="text" id="formControlLg" className="form-control form-control-lg" />
            <label className="form-label" for="formControlLg">Search</label>
          </div>

          <ul className="fa-ul" >
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">N199 Omaxe City, Indore</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">devsinghparihar10@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+917000636867</span>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
     
    </div>
   
    <div className="text-center p-3" >
      © 2022 Copyright:
     Bookify 
    </div>
    
  </footer>


  )
}
