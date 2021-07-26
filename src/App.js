import "./App.css";

function App() {
  const handleOnClickModal = async () => {
    const filesArray = [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.todamateria.com.br%2Fpaisagem-natural%2F&psig=AOvVaw2Nq_9hScys2e-q6zkjKxIy&ust=1627418570486000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICpu-DMgfICFQAAAAAdAAAAABAD",
    ];
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
        .catch((error) => console.log("Sharing failed", error));
    } else {
      alert(`Your system doesn't support sharing files.`)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleOnClickModal}>Teste de compartilhamento</button>
      </header>
    </div>
  );
}

export default App;
