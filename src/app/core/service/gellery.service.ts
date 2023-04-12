import { Injectable } from '@angular/core';
import { storage } from '../../firebase.config';
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class GelleryService {

  constructor() { }

  uploadImages(file:any){
    console.log(file);

    for (let index = 0; index < file.length; index++) {
      const element = file[index];
      const storageRef = ref(storage, `Img/${element.name}`);
      uploadBytes(storageRef, element).then((snapshot) => {
        console.log('Uploaded a blob or file!',snapshot.metadata.fullPath);
      });
    }
  }


  async getImages() {
    const imagesRef = ref(storage, 'Img');
    let images:any = [];
    listAll(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          images.push({url:url,name:item.fullPath});
        }
      })
      .catch(error => console.log(error));
      return images
  }

  deleteImg(path:any){
    const desertRef = ref(storage, path);

    // Delete the file
    deleteObject(desertRef).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  }

}
