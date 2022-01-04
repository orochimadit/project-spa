import { Component, OnInit } from '@angular/core';
import { MachineLearning } from '../interface/machine-learning';
import { MachineLearningService } from '../service/machine-learning.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.css']
})
export class MachineLearningComponent implements OnInit {
  ml = {
    file: '',
  };
  imageSrc: string = '';
  myForm = new FormGroup({
   file: new FormControl('', [Validators.required]),
   fileSource: new FormControl('', [Validators.required])
 });
  constructor(private _machineLearningService:MachineLearningService,private http:HttpClient) { 
    
  }

  ngOnInit(): void {
  }

  createMl(): void {
    const data = {
      file: this.ml.file,
    };

    this._machineLearningService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  get f(){
    return this.myForm.controls;
  }
   
  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.myForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }
   
  submit(){
    console.log(this.myForm.value);
    this.http.post('https://images.zapps.co.id/predict', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }
}
