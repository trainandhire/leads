import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
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
  //  columnsArr: any[];
  public keys:any;

  public term:string="";
  public view:string="list";

  public table:any;
  public grid:any;

  constructor(private _leadService:LeadsService, private _alertservices:AlertService){

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

 



  reloadImageGallery() {
    this.blockUIImageGallery.start('Loading..');

    setTimeout(() => {
      this.blockUIImageGallery.stop();
    }, 2500);
  }

}
