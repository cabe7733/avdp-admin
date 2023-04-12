import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocProyectService } from '../../service/doc-proyect.service';
import { log } from 'console';

@Component({
  selector: 'app-doc-proyect',
  templateUrl: './doc-proyect.component.html',
  styleUrls: ['./doc-proyect.component.scss']
})
export class DocProyectComponent implements OnInit {

  proyectForm = new FormGroup({
    nomProyetc: new FormControl(null,[Validators.required, Validators.minLength(4)]),
    fileProyect: new FormControl(null,[Validators.required]),
    file:new FormControl(null,[Validators.required])
  });

  docForm = new FormGroup({
    nomDoc: new FormControl(null,[Validators.required, Validators.minLength(4)]),
    fileDoc: new FormControl(null,[Validators.required]),
    file:new FormControl(null,[Validators.required])
  });

  poryectList: any;
  docList: any;

  proyect: boolean = false;

  constructor(private service:DocProyectService, private router: Router) { }

  ngOnInit(): void {
    this.getProyect();
    this.getDoc();
  }

  get name() { return this.proyectForm.get('nomProyetc'); }
  get fileProyect() { return this.proyectForm.get('fileProyect'); }

  get nomDoc() { return this.proyectForm.get('nomDoc'); }
  get fileDoc() { return this.proyectForm.get('fileDoc'); }



  onFileChangeProyect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.proyectForm.patchValue({
        file: file
      });
    }
  }

  onFileChangeDoc(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.docForm.patchValue({
        file: file
      });
    }
  }

  onSubmitProyect() {
    this.service.addPoyect(this.proyectForm.value).then(resp=>{
      setTimeout(() => {
        this.getProyect();
      }, 1200);
    });
    this.proyectForm.reset();
  }

  onSubmitDoc() {
    this.service.addDoc(this.docForm.value).then(resp=>{
      setTimeout(() => {
        this.getDoc();
      }, 1000);
    });
    this.docForm.reset();
  }

  getProyect(){
    this.service.allProyect().then(resp=>{
      this.poryectList =resp;
    })
  }

  getDoc(){
    this.service.allDoc().then(resp=>{
      this.docList = resp;
    })
  }

  openDoc(url:any){
    window.open(url, "_blank");
  }

  deleteProyect(id:any){
    this.service.deleteProyect(id).then(()=>{
      setTimeout(() => {
        this.getProyect();
      }, 700);
    })
  }

  deleteDoc(id:any){
    this.service.deleteDoc(id).then(()=>{
      setTimeout(() => {
        this.getDoc();
      }, 700);
    })
  }

}




