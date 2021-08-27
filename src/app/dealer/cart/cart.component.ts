import { Position } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PositionService } from 'src/app/shared/services/position.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public positionServices: PositionService) { }
  cartPositionCount: any;
  displayedColumns: string[] = ['position', 'name'];
  dataSource: MatTableDataSource<Position>;

  ngOnInit(): void {
    this.cartPositionCount = this.positionServices.cartPositions;
    this.dataSource = new MatTableDataSource(this.cartPositionCount)
  }

}
