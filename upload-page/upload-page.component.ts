import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';
import { Product } from '../product'
import { UploadServiceService } from '../service/upload-service.service';
import * as _ from "lodash"
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {

  product: Product;
  formData : FormData;

  genderArr: any[] =[];

  onSubmit(){
    if (this.formData.get('name')) this.formData.delete('name');
    if (this.formData.get('type')) this.formData.delete('type');
    if (this.formData.get('geder')) this.formData.delete('gender');
    if (this.formData.get('price')) this.formData.delete('price');
    this.formData.append('name', this.product.name);
    this.formData.append('type', this.product.type);
    this.formData.append('gender', this.product.gender);
    this.formData.append('price', this.product.price);
    this.uploadService.upload(this.formData);
    alert('Your file uploaded successfully!')
    this.router.navigate(['/'])
  }



  constructor(
    private uploadService: UploadServiceService,
    private router: Router
  ) {
    this.product = new Product();
    this.formData = new FormData();
   }

  ngOnInit(): void {
    this.genderArr = [{gender : "M"}, {gender : "F"}];
    if(localStorage.getItem('id') != '25'){
      alert('You are not admin!');
      this.router.navigate(['/']);
    }
  }


  imageError: string;
  isImageSaved: boolean;

  fileChangeEvent(fileInput: any) {

    const file:File = fileInput.target.files[0];
    if (file) {
      console.log(file.name);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (this.formData.get('image')) this.formData.delete('image');
      this.formData.append('image', file);
      reader.onload = () => {

        console.log(this.product.image)
      };
    }
  }

  removeImage() {
      this.product.image = null;
      this.isImageSaved = false;
  }


}
