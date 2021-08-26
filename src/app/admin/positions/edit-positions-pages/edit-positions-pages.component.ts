import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Position } from 'src/app/shared/interfaces';
import { PositionService } from 'src/app/shared/services/position.service';

@Component({
  selector: 'app-edit-positions-pages',
  templateUrl: './edit-positions-pages.component.html',
  styleUrls: ['./edit-positions-pages.component.scss']
})
export class EditPositionsPagesComponent implements OnInit {

  submitted: boolean = false;
  positions: Position
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private positionsServices: PositionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.positionsServices.getPositions(params['id'])
      })
    ).subscribe(position => {
      this.positions = position
      this.form = new FormGroup({
        name: new FormControl(this.positions.name, Validators.required),
      })
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      return
    }
  }
}
