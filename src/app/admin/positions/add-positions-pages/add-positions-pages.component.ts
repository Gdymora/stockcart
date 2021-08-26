import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Position } from 'src/app/shared/interfaces';
import { PositionService } from 'src/app/shared/services/position.service';

@Component({
  selector: 'app-add-positions-pages',
  templateUrl: './add-positions-pages.component.html',
  styleUrls: ['./add-positions-pages.component.scss']
})
export class AddPositionsPagesComponent implements OnInit {


  submitted: boolean = false;
  position: Position
  form: FormGroup

  constructor(
    private positionsServices: PositionService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value)
    this.positionsServices.createPositions(this.form.value)
      .subscribe(res => {
        this.form.reset()
        this.submitted = false
        this.router.navigate(['/admin', 'dashboard'])
      },
        err => {
          console.log(err.error.message)
          console.log(err.error)
        }

      )

  }
}