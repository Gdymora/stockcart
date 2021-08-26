import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Positions, Position } from 'src/app/shared/interfaces';
import { PositionService } from 'src/app/shared/services/position.service';

@Component({
  selector: 'app-position-categories-pages',
  templateUrl: './position-categories-pages.component.html',
  styleUrls: ['./position-categories-pages.component.scss']
})
export class PositionCategoriesPagesComponent implements OnInit {
  filterValue: any
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['position', 'category', 'name', 'update'];

  dataSource: MatTableDataSource<Position>;
  pSubIn$: Subscription
  pSub$: Subscription

  constructor(private route: ActivatedRoute,
    private positionServices: PositionService,
    private router: Router) { }

  ngOnInit(): void {
    this.pSubIn$ = this.route.params.pipe(
      switchMap(params => {
        return this.positionServices.getCategoriesPageEvent(params['id'], 10, 0)
      })
    ).subscribe((position: Positions) => {
      console.log(position)
      this.length = position.page.total
      this.pageSize = position.page.size
      this.dataSource = new MatTableDataSource(position.data)
    },
      error => { console.log(error) }
    )
  }

  getServerNavigateData(event?: PageEvent) {
    this.pSub$ = this.route.params.pipe(
      switchMap(params => {
        return this.positionServices.getCategoriesPageEvent(params['id'], event.pageSize, event.pageIndex)
      })
    ).subscribe((res: any) => {
      console.log(res)
      this.length = res.page.total
      this.pageSize = res.page.size
      this.dataSource = new MatTableDataSource(res.data)
    },
      error => { console.log(error) }
    )
  }
  filterProduct(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.positionServices.getDataByFilter(value).subscribe(response => {
      //TODO
    });
  }

  ngOnDestroy() {
    if (this.pSubIn$) {
      this.pSubIn$.unsubscribe()
    }
    if (this.pSub$) {
      this.pSub$.unsubscribe()
    }
  }

  remove(id: number) {
    alert(id)
  }


}
