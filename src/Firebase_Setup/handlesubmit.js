import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebase";
 
const Contact_UsSubmit = (testdata) => {
    const ref = collection(firestore, "Contact_Us") // Firebase creates this automatically
    
    try {
        addDoc(ref, testdata)
    } catch(err) {
        console.log(err)
    }
}
 
export default Contact_UsSubmit;