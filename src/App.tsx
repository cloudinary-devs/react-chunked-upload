import Chunked from './Chunked';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h1>Client-Side Upload Large File Demo</h1>
        <p>
          Upload a large file from your local device to your Cloudinary account.
        </p>
        <p>
          Note: Before choosing a file, set your cloud name and unsigned upload
          preset in Chunked.tsx.
        </p>
        <Chunked />
      </div>
    </>
  );
}

export default App;