import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.guard";
import { SharedModule } from "../shared/shared.module";
import { ListOfGoodsComponent } from "./list-of-goods/list-of-goods.component";
import { DealerLayoutComponent } from "./shared/dealer-layout/dealer-layout.component";

@NgModule({
    declarations: [
        DealerLayoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component: DealerLayoutComponent, children: [
                    { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                    { path: 'list-of-goods', component: ListOfGoodsComponent, canActivate: [AuthGuard] }, 
                ]
            }
        ]),
    ],
}
)

export class DealerModule { }