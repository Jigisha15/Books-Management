import './header.css'
import Date from '../MyDatePicker/date'

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
        <div className="head-breadcrum">
          <p><span>Page name </span>&gt;<span> Page name</span></p>
        </div>
      </div>
      <div className="head-info">
        <div className="head-date">
          <div className="date">
          <Date/>
          </div>
        </div>
        <div className="brand-details">
          <div className="brand-logo">
              <div className="img">
            <p>TIA</p>
              </div>
          </div> &nbsp;|&nbsp;
          <div className="brand-name">
            <p>TIA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadContent