import './write.css';

const Write = () => {
  return (
    <div className="write">
        <img className="writeImg"
        src="https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <i className="writeIcon fas fa-plus"></i>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..."
                type="text"
                className="writeInput writeText"></textarea>           
                </div>
                <button className="writeSubmit">Publish</button>
        </form>
      
    </div>
  )
}

export default Write;
