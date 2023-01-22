import "./App.css";
import { ArgonauteList, AddArgonaute } from "./components";
import { useCollectionData } from "react-firebase-hooks/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwNTnlP2R_djDyPXWAUOitsBQPN4mvELA",
  authDomain: "wild-code-school-test.firebaseapp.com",
  projectId: "wild-code-school-test",
  storageBucket: "wild-code-school-test.appspot.com",
  messagingSenderId: "1032214049477",
  appId: "1:1032214049477:web:f49814af4f45732f19f6ac",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();

// Collection ref
const argonautesCollection = collection(db, "argonautes");

function App() {
  // const [argonautes, setArgonautes] = useState([]);

  // useEffect(() => {
  //   // Get Collection data
  //   onSnapshot(argonautesCollection, (snapshot) => {
  //     setArgonautes(
  //       snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //     );
  //   });
  // });
  const [argonautes] = useCollectionData(argonautesCollection);
  console.log(argonautes);
  return (
    <div className="container">
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <AddArgonaute colRef={argonautesCollection} />

        <h2>Membres de l'équipage</h2>
        <ArgonauteList argonautes={argonautes} />
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
