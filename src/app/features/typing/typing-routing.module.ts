import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TypingTestComponent } from "./typing-test/typing-test.component";
import { TypingTrainerSummeryComponent } from "./typing-trainer-summery/typing-trainer-summery.component";

const routes: Routes = [
  { path: "", component: TypingTestComponent },
  {path: "typing-trainer-summery",component:TypingTrainerSummeryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypingRoutingModule {}
