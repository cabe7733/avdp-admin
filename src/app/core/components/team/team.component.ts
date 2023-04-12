import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EditTeamComponent } from '../../modals/edit-team/edit-team.component';
import { TeamService } from '../../service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  dataTeam:any;

  teamForm = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(4)]),
    cargo: new FormControl(null,[Validators.required, Validators.minLength(4)]),
    desc: new FormControl(null,[Validators.required, Validators.minLength(4)]),
    fileProyect: new FormControl(null,[Validators.required]),
    file:new FormControl(null,[Validators.required])
  });

  modalRef: MdbModalRef<EditTeamComponent> | null = null;

  constructor(private teamService:TeamService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.onDataTeam();
  }

  get name() { return this.teamForm.get('name'); }
  get cargo() { return this.teamForm.get('cargo'); }
  get desc() { return this.teamForm.get('desc'); }
  get fileProyect() { return this.teamForm.get('fileProyect'); }

  onSubmitTeam(){
    this.teamService.addTeam(this.teamForm.value).then(resp=>{
      console.log(resp);
      this.onDataTeam();
    })
    this.teamForm.reset();
  }

  onImgChangeTeam(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.teamForm.patchValue({
        file: file
      });
    }
  }

  onDataTeam(){
    this.teamService.getTeam().then(data=>{
      this.dataTeam=data;
    })
  }

  deleteTeam(data:any){
    this.teamService.deleteTeam(data).then(()=>{this.onDataTeam()});
  }

  openModal(data:any) {
    this.modalRef = this.modalService.open(EditTeamComponent,{
      data: { dataForm: data },
    });

    this.modalRef.onClose.subscribe(() => {
      this.onDataTeam()
    });
  }

}
