import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule }
from "@angular/forms";
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';
import { AbstractControl, ValidationErrors } from '@angular/forms';

function urlValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').trim();
  if (!value) return null;

  try {
    new URL(value);
    return null;
  } catch {
    return { invalidUrl: true };
  }
}

@Component({
selector: 'app-edit-trip',
standalone: true,
imports: [CommonModule, ReactiveFormsModule],
templateUrl: './edit-trip.html',
styleUrl: './edit-trip.css'
})

export class EditTrip implements OnInit {

public editForm!: FormGroup;
trip!: Trip;
submitted = false;
message : string = '';

constructor(
private formBuilder: FormBuilder,
private router: Router,
private tripDataService: TripData
) {}

ngOnInit() : void{

// Retrieve stashed trip ID
let tripCode = localStorage.getItem("tripCode");
if (!tripCode) {
alert("Something wrong, couldn't find where I stashed tripCode!");
this.router.navigate(['']);
return;
}

console.log('EditTripComponent::ngOnInit');
console.log('tripcode:' + tripCode);

this.editForm = this.formBuilder.group({
_id: [],
code: [tripCode, Validators.required],
name: ['', Validators.required],
length: ['', Validators.required],
start: ['', Validators.required],
resort: ['', Validators.required],
perPerson: ['', Validators.required],
image: ['', Validators.required],
description: ['', Validators.required]
})

    this.tripDataService.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          if (!value || value.length === 0) {
            this.message = 'No Trip Retrieved!';
            return;
          }

          
          const trip = value[0];
          this.trip = trip;

          // Normalize date for <input type="date"> (YYYY-MM-DD)
          const normalizedStart =
            typeof trip.start === 'string'
              ? trip.start.slice(0, 10)
              : new Date(trip.start).toISOString().slice(0, 10);

          // Populate our record into the form
          this.editForm.patchValue({
            ...trip,
            start: normalizedStart
          });

          this.message = 'Trip: ' + tripCode + ' retrieved';
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
          this.message = 'Error retrieving trip from server.';
        }
      });
  }

public onSubmit()
{
this.submitted = true;
if(this.editForm.valid)
{
this.tripDataService.updateTrip(this.editForm.value)
.subscribe({
next: (value: any) => {
console.log(value);
this.router.navigate(['']);
},
error: (error: any) => {
console.log('Error: ' + error);
}
})
}
}

// get the form short name to access the form fields
get f() { return this.editForm.controls; }

}
