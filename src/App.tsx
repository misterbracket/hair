import Webcam from "react-webcam";
const videoConstraints = {
  facingMode: "user",
};

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <header className="title-wrap">
          <h1 className="title">Check your Face</h1>
        </header>
        <section className="text-wrapper">
          <p className="text">No worries! I am sure you look amazing. 💃🕺 </p>
        </section>
        <main className="video">
          <Webcam
            audio={false}
            mirrored={true}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
