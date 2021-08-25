import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/shared/interfaces';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'category', 'name', 'update'];
  dataSource: MatTableDataSource<Category>;
  pSub$: Subscription
  constructor(public categoriServices: CategoryService) { }

  ngOnInit(): void {
    this.pSub$ = this.categoriServices.getCategoriesAll()
      .subscribe((res: Category[]) => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)
      },
        error => { console.log(error) }
      )
  }

  ngOnDestroy() {
    if (this.pSub$) {
      this.pSub$.unsubscribe()
    }
  }

  remove(id: number) {
    alert(id)
  }

}
