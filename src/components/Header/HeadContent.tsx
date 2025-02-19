import './header.css'
import Date from '../MyDatePicker/date'
import Logo from '../../../public/images/Ellipse 4.png'

const HeadContent = () => {
  
  return (
    <div className="head-container">
      <div className="head-content">
        <div className="head-text">
          <h1>Issued Books</h1>
        </div>
        <div className="User-name">
          <span><h3>Username</h3></span>
        </div>
      </div>
      <div className="head-info">
        <div className="brand-details">
          <div className="brand-logo">
              <div className="img">
                <img src={Logo} alt="brand-logo" />
              </div>
          </div> &nbsp;|&nbsp;
          <div className="brand-name">
            <p style={{color:"#1E40AF"}}>TIA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadContent