import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { time } from 'console';
import { publicDecrypt } from 'crypto';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { LeadsService } from 'src/app/_api/leads/leads.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent {

  public imageOptions = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('imageGallery') blockUIImageGallery: NgBlockUI;

   public leads:any;
 
  public keys:any;

  public term:string="";
  public view:string="list";

  public table:any;
  public grid:any;
  public info:any;

  constructor(private _leadService:LeadsService, private _alertservices:AlertService,private modalService:NgbModal){

    _leadService.getLeads().subscribe(
      (data:any)=>{
      this.leads=data;
      this.keys = Object.keys(this.leads[0]);
      },
    (err:any)=>{
       _alertservices.error("internal server error")
    }
   )
  }

  filterData(){
    this._leadService.filterLeads(this.term).subscribe(
      (data:any)=>{
        this.leads=data
        console.log(this.leads)
      },
      (err:any)=>{
        this._alertservices.error("not filtered")
      }
    )
  }
  public comment :any=[];

  save(){
    this.comment.push({
      comment : this.info,
      time : new Date
      })
  }
  deleteComment(i){
    this.comment.splice(i,1);
  }

  viewModelOpen(viewContent) {
    this.modalService.open(viewContent, { windowClass: 'animated fadeInDown', size: 'lg' });
  }

 dynamicKeys(lead){ 
  return Object.keys(lead);
 } 

  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
