import { Injectable } from '@angular/core';
import { storage, db } from '../../firebase.config';
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { collection, query, where, getDocs, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  async getTeam(){
    let data:any=[];
    const q = collection(db, "equipo");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let id:any=doc.id;
      data.push({id,...doc.data()})
    });
    return data;
  }

  async addTeam(data:any){
    let resp:any=[];
    const storageRef = ref(storage, `Equipo/${data.file.name}`);
    uploadBytes(storageRef, data.file).then((snapshot) => {

      const starsRef = ref(storage, snapshot.metadata.fullPath);
      getDownloadURL(starsRef)
        .then(async (url) => {
          const docRef = await addDoc(collection(db, "equipo"), {
            cargo:data.cargo,
            desc:data.desc,
            img: url,
            nombre: data.name,
            path: snapshot.metadata.fullPath
          });
          resp.push(docRef)
        });
    });
    return resp;
  }

  async editTeam(data:any){
    const washingtonRef = doc(db, "equipo", data.id);
    await updateDoc(washingtonRef, {
            cargo:data.cargo,
            desc:data.desc,
            nombre: data.name,
    });
  }

  async deleteTeam(data:any){
    await deleteDoc(doc(db, "equipo", data.id));
    const desertRef = ref(storage, data.path);
    deleteObject(desertRef).then(() => {
    }).catch((error) => {
    });
  }
}
