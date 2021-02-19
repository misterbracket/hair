import Webcam from "react-webcam";
const videoConstraints = {
  facingMode: "user",
};
function App() {
  return (
    <div className="app">
      <h1 className="title">Check your Face before your Zoom Call</h1>
      <p className="text"></p>
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
