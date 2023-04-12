import { Component, OnInit } from '@angular/core';
import { GelleryService } from '../../service/gellery.service';

@Component({
  selector: 'app-gellery',
  templateUrl: './gellery.component.html',
  styleUrls: ['./gellery.component.scss']
})
export class GelleryComponent implements OnInit {

  public files:any;
  public file:any;

  constructor(private service:GelleryService) { }

  ngOnInit(): void {
    this.getImg()
  }

  uploadImage($event:any){
    this.file = $event.target.files;
    this.service.uploadImages(this.file);
    setTimeout(() => {
      this.getImg()
    }, 3000);

  }

  getImg(){
    this.service.getImages().then(resp=>{
      this.files=resp;
    })
  }

  removeImg(path:any){
    this.service.deleteImg(path)
    setTimeout(() => {
      this.getImg()
    }, 500);
  }

}
