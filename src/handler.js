import { addDoc, setDoc, collection, doc, deleteDoc } from "firebase/firestore";
import db from "./firebase";

function musicPromts(oldData) {
  //proper questions                                                        //if data is already existing show old data  
  const title = prompt(`Wie heißt der Musiktitel? (Erforderlich)            ${oldData && "\n\nAktuell: " + oldData.title}`);
  const componist = prompt(`Von wem stammt der Musiktitel? (Erforderlich)   ${oldData && "\n\nAktuell: " + oldData.componist}`);
  const duration = prompt(`Wie lange dauert der Musiktitel?                 ${oldData && "\n\nAktuell: " + oldData.duration}`);
  const year = prompt(`Aus welchen Jahr stammt der Musiktitel?              ${oldData && "\n\nAktuell: " + oldData.year}`);
  const rating = prompt(`Wie ist der Musiktitel bewertet? (1-5)             ${oldData && "\n\nAktuell: " + oldData.rating}`);
  const confirmation = window.confirm(
    `Ihre Eingaben: \n Titel: ${title} \n Komponist: ${componist} \n Dauer: ${duration} \n Jahr: ${year} \n Bewertung: ${rating} \n\nWollen Sie diese Eingaben bestätigen?`
  );

  if (!title || !componist || !confirmation) {
    return false;
  } else {
    return { title, componist, duration, year, rating };
  }
}

export function handleNew() {

  const promts = musicPromts()

  if (promts === false) {
    return
  }

  const { title, componist, duration, year, rating  } = promts;


  const collectionRef = collection(db, "MyMusicMix");
  const payload = {
    title,
    componist,
    duration,
    year,
    rating
  };

  addDoc(collectionRef, payload);
}

export function handleEdit(id, oldData) {
  const docRef = doc(db, "MyMusicMix", id);

  const promts = musicPromts(oldData)
  if (promts === false) {
    return
  }
  const payload = promts;

  setDoc(docRef, payload);
}

export function handleDelete(id, oldData) {
  if (!window.confirm(`Sind Sie sich sicher, dass Sie den Titel "${oldData.title}" von ${oldData.componist} löschen wollen?`)) return;

  const docRef = doc(db, "MyMusicMix", id);

  deleteDoc(docRef);
}