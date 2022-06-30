import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Settings() {
  return (
    <div className="settings">
        <div className="settingswrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label> Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&w=600"
                    
                    alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="finalInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Safak" />
                <label>Username</label>
                <input type="email" placeholder="safak@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
      settings
    </div>
  )
}

export default Settings;
