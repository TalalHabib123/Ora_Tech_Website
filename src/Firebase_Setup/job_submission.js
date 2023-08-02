import { collection, addDoc } from 'firebase/firestore';
import { firestore, storage } from './firebase'; // Import your firebaseConfig file with the storage object
import { uploadBytes } from 'firebase/storage';

// Function to save job application data to Firebase Firestore and upload CV to Firebase Storage
export const saveJobApplication = async (formData, cvFile) => {
  try {
    const ref = collection(firestore, 'Job_Applications');
    await addDoc(ref, formData);

    if (cvFile) {
      const storageRef = ref(storage, `cvs/${formData.name}_${cvFile.name}`);
      await uploadBytes(storageRef, cvFile);
    }
  } catch (error) {
    console.error('Error saving job application:', error);
    throw error;
  }
};
