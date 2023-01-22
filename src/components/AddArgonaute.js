import { addDoc } from "firebase/firestore";
import { useState } from "react";


const AddArgonaute = ({colRef}) => {

    const [nom, setNom] = useState("")

    const submitArgonaute = async (e) => {
        e.preventDefault();
        try {
            await addDoc(colRef, {
                nom: nom,
            })
            setNom("");
            console.log("oui")
        } catch (err){
            console.error(err)
        }

    }
    return(
    <>
    <form onSubmit={submitArgonaute} className="new-member-form">
      <label htmlFor="name">Nom de l&apos;Argonaute</label>
      <input id="name" value={nom} name="nom" type="text" placeholder="Charalampos" required onChange={(e) => setNom(e.target.value)}/>
      <button type="submit">Envoyer</button>
    </form>
    </>
    )
    };
  
export default AddArgonaute;