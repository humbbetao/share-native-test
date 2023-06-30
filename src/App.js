import "./App.css";

function App() {
  const handleOnClickModalWithFilesArray = async () => {
    const image1 = await fetch("./image1.jpg");
    const image2 = await fetch("./image2.jpg");
    const blob1 = await image1.blob();
    const blob2 = await image2.blob();
    const file1 = new File([blob1], "image.jpg", { type: "image/jpeg" });
    const file2 = new File([blob2], "image.jpg", { type: "image/jpeg" });

    const filesArray = [file1, file2];

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      const shareData = {
        title: "MDN",
        text: "Learn web development on MDN!",
        url: "https://developer.mozilla.org",
      };

      navigator
        .share({
          files: filesArray,
          ...shareData,
        })
        .then(() => console.log("Share was successful."))
        .catch((error) => {
          alert(`Sharing failed, error`);
          console.log("Sharing failed", error);
        });
    } else {
      alert(`Your system doesn't support sharing files.`);
    }
  };
  const handleOnClickModal = async () => {
    if (navigator.canShare) {
      const shareData = {
        title: "MDN",
        text: "Learn web development on MDN!",
        url: "https://developer.mozilla.org",
      };

      navigator
        .share(shareData)
        .then(() => console.log("Share was successful."))
        .catch((error) => {
          alert(`Sharing failed, error`);
          console.log("Sharing failed", error);
        });
    } else {
      alert(`Your system doesn't support sharing files.`);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleOnClickModal}>Teste de compartilhamento</button>
        <button onClick={handleOnClickModalWithFilesArray}>
          Teste de compartilhamento2
        </button>
      </header>
      <img src="./image1.jpg" alt="teste1" />
      <img src="./image2.jpg" alt="teste2" />
    </div>
  );
}

export default App;
