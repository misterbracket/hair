import Webcam from "react-webcam";
const videoConstraints = {
  facingMode: "user",
};
function App() {
  return (
    <div className="app">
      <div className="title-wrap">
        <h1 className="title">Check your Face before your Zoom Call</h1>
        <p className="text">No worries! I am sure you look amazing. 💃🕺 </p>
      </div>
      <div className="video">
        <Webcam
          className="camera"
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  );
}

export default App;
