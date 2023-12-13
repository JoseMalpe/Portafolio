import logo from './logo.svg';
import './App.css';
import FotoPerfil from './components/FotoPerfil';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAldeNteCNkkOpn8QgbJPiFEQ05UOAJQY0",
  authDomain: "portafolio-25b46.firebaseapp.com",
  projectId: "portafolio-25b46",
  storageBucket: "portafolio-25b46.appspot.com",
  messagingSenderId: "51985598520",
  appId: "1:51985598520:web:263b0f45087ff86b1e7ecd",
  measurementId: "G-NH971R7JKG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App-header">
          <h1>José María Alcaraz Pérez</h1>
          <FotoPerfil />
    </div>
  );
}

export default App;
