import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TeamService } from '../../service/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  dataForm: any;
  teamForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null,[Validators.required, Validators.minLength(4)]),
    cargo: new FormControl(null,[Validators.required, Validators.minLength(4)]),
    desc: new FormControl(null,[Validators.required, Validators.minLength(4)]),
  });

  constructor(public modalRef: MdbModalRef<EditTeamComponent>, private services:TeamService) {
  }

  ngOnInit(): void {
    this.teamForm.patchValue({
      name:this.dataForm.nombre,
      cargo:this.dataForm.cargo,
      desc:this.dataForm.desc,
      id:this.dataForm.id
    });
  }

  get name() { return this.teamForm.get('name'); }
  get cargo() { return this.teamForm.get('cargo'); }
  get desc() { return this.teamForm.get('desc'); }
  get fileProyect() { return this.teamForm.get('fileProyect'); }

  onSubmitTeam(){
    this.services.editTeam(this.teamForm.value);
    this.teamForm.reset();
  }

  close(): void {
    this.modalRef.close();
  }

}
