import { doc, updateDoc,deleteField } from 'firebase/firestore';
import { db } from '@/firebase/config'; // Import your Firestore configuration

async function removeAnimal({documentId, animalId}:{documentId:string,animalId:string}) {
  try {
    const docRef = doc(db, 'farmer', documentId); // Replace 'your_collection_name' with your actual collection name
    await updateDoc(docRef, {
      // Use Firestore's FieldValue.delete() to remove the animal field
      [`animal.${animalId}`]: deleteField()
    });
    window.location.reload();
    console.log('Animal removed successfully');
  } catch (error) {
    console.error('Error removing animal:', error);
  }
}

export{removeAnimal}