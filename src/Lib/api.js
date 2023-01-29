import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase";
export async function trendingData(trending) {
  const q = query(collection(db, "movies"), where("type", "==", "trending"));
  const documents = await getDocs(q);
  documents.forEach((doc) => {
    trending.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return trending;
}
export async function recommendData(recommend) {
  const q = query(collection(db, "movies"), where("type", "==", "recommend"));
  const documents = await getDocs(q);
  documents.forEach((doc) => {
    recommend.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return recommend;
}
export async function originalData(original) {
  const q = query(collection(db, "movies"), where("type", "==", "original"));
  const documents = await getDocs(q);
  documents.forEach((doc) => {
    original.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return original;
}
export async function newDisneyData(disney) {
  const q = query(collection(db, "movies"), where("type", "==", "new"));
  const documents = await getDocs(q);
  documents.forEach((doc) => {
    disney.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return disney;
}
export async function displayData(id) {
  let data = [];
  const documents = await getDocs(collection(db, "movies"));
  documents.forEach((doc) => {
    if (doc.id === id) {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    }
  });
  return data;
}
