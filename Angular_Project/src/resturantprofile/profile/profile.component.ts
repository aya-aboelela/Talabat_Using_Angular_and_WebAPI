import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForbiddenEmailValidator } from 'src/auth/validations/email.validators';
import { ForbiddenNameValidator } from 'src/auth/validations/userName.validators';
import { ResturantProfileService } from '../Services/Resturant-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  Image: any;
  ApplicationuserId: any;

  ResturentProfileForm: any = this.fb.group({
    userName: ['', [Validators.required, ForbiddenNameValidator(/^[A-Z]+[a-z]+$/)]],
    email: ['', [Validators.required, ForbiddenEmailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]],
    MinOrderAmmount: ['', [Validators.required]],
    WorkingHours: ['', [Validators.required]],
    ImageNameFile: [null, [Validators.required]]
  })

  constructor(private fb: FormBuilder, private resturentrService: ResturantProfileService) { }

  ngOnInit(): void {

    this.ApplicationuserId = localStorage.getItem('ApplicationUserId')
    this.resturentrService.GetResturantProfile(this.ApplicationuserId).subscribe({

      next: (data: any) => {
        console.log(data)
        this.ResturentProfileForm.patchValue({
          userName: data.userName,
          email: data.email,
          MinOrderAmmount: data.minOrderAmmount,
          WorkingHours: data.workingHours,
        })
        console.log(this.ResturentProfileForm.value)
        this.Image = data.imageName
        console.log(this.Image)
      },
      error: err => console.log(err.error.message)

    });

  }

  get userName() {
    return this.ResturentProfileForm.get('userName');
  }

  get email() {
    return this.ResturentProfileForm.get('email');
  }

  get MinOrderAmmount() {
    return this.ResturentProfileForm.get('MinOrderAmmount');
  }

  get WorkingHours() {
    return this.ResturentProfileForm.get('WorkingHours');
  }

  showPreview(event: any) {
    const file = event.target.files[0];
    this.ResturentProfileForm.patchValue({
      ImageNameFile: file
    });
    this.ResturentProfileForm.get('ImageNameFile')?.updateValueAndValidity()
  }


  submitData() {
    console.log(this.ResturentProfileForm.value)
    const Formdata = new FormData();

    if (this.ResturentProfileForm.get('ImageNameFile').value != null) {
      Formdata.append('ImageNameFile', this.ResturentProfileForm.get('ImageNameFile')?.value, 'pic.jpg');

    }
    Formdata.append('userName', this.ResturentProfileForm.get('userName')?.value);
    Formdata.append('email', this.ResturentProfileForm.get('email')?.value);
    Formdata.append('MinOrderAmmount', this.ResturentProfileForm.get('MinOrderAmmount')?.value);
    Formdata.append('WorkingHours', this.ResturentProfileForm.get('WorkingHours')?.value);

    console.log(this.ResturentProfileForm.value)
    this.resturentrService.EditResturantProfile(this.ApplicationuserId, Formdata).subscribe({
      next: (data: any) => {
        console.log(data);
        this.Image = data.image;
      },
      error: err => console.log(err.error.message)
    });

  }

}
