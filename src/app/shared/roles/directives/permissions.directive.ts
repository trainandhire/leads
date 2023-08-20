import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, distinctUntilChanged, switchMapTo, takeUntil } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Directive({
  selector: '[hasPermissions]'
})
export class PermissionsDirective {


  @Input() 
  set hasPermissions(permissions){
    this.permissions = permissions;
  }

  private destroy$ = new Subject();
  public permissions:any = [];

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {

    if( !this.permissions || !this.permissions.length){
      this.view.createEmbeddedView(this.template);
      return;
    }

    this.authenticationService.isLogged$
      .pipe(
        switchMapTo(this.authenticationService.permissions$),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((allPermissions:number[]) => {
       

        // Checking does user have requried permissions
        let isAllowed:boolean = false;
        for(let i=0; i<this.permissions.length; i++){
          if(allPermissions.includes(this.permissions[i])){
            isAllowed = true;
            break;
          }
        }
        console.log("--- isAllowed",isAllowed, this.permissions);
        if (isAllowed) {
          this.view.createEmbeddedView(this.template);
        } else {
          this.view.clear();
        }

      });
  }

  ngOnDestroy() {
    // this.destroy$.next();
    this.destroy$.complete();
  }

}
