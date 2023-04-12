import { Injectable } from '@angular/core';
import { storage, db } from '../../firebase.config';
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class DocProyectService {

  constructor() { }

  async addPoyect(data:any){

    let resp:any=[];
    const storageRef = ref(storage, `pdf/Proyectos/${data.file.name}`);
    uploadBytes(storageRef, data.file).then((snapshot) => {

      const starsRef = ref(storage, snapshot.metadata.fullPath);
      getDownloadURL(starsRef)
        .then(async (url) => {
          const docRef = await addDoc(collection(db, "proyectos"), {
            name: data.nomProyetc,
            url: url,
            path: snapshot.metadata.fullPath
          });
        });
    });
    return resp;
  }

  async allProyect(){
    let data:any=[];
    const querySnapshot = await getDocs(collection(db, "proyectos"));
    querySnapshot.forEach((doc) => {
      let id = doc.id
      data.push({ id,...doc.data() })
    });
    return data;
  }

  async deleteProyect(data:any){

    await deleteDoc(doc(db, "proyectos", data.id));

    const desertRef = ref(storage, data.path);
    deleteObject(desertRef).then(() => {
    }).catch((error) => {
    });
  }


  /* documentos */

  async addDoc(data:any){

    let resp:any=[];
    const storageRef = ref(storage, `pdf/Documentos/${data.file.name}`);
    uploadBytes(storageRef, data.file).then((snapshot) => {

      const starsRef = ref(storage, snapshot.metadata.fullPath);
      getDownloadURL(starsRef)
        .then(async (url) => {
          const docRef = await addDoc(collection(db, "documentos"), {
            name: data.nomDoc,
            url: url,
            path: snapshot.metadata.fullPath
          });
        });
        console.log(snapshot);
        resp.push({...snapshot});
    });
    console.log(resp);

    return resp;
  }

  async allDoc(){
    let data:any=[];
    const querySnapshot = await getDocs(collection(db, "documentos"));
    querySnapshot.forEach((doc) => {
      let id = doc.id
      data.push({ id,...doc.data() })
    });
    return data;
  }

  async deleteDoc(data:any){

    await deleteDoc(doc(db, "documentos", data.id));

    const desertRef = ref(storage, data.path);
    deleteObject(desertRef).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

}
