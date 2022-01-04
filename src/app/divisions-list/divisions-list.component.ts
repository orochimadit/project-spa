import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../service/division.service';
@Component({
  selector: 'app-divisions-list',
  templateUrl: './divisions-list.component.html',
  styleUrls: ['./divisions-list.component.css']
})
export class DivisionsListComponent implements OnInit {
  divisions?:Division[];
  currentDivision: Division = {};
  name = '';

  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
    this.retrieveDivision();
  }
  retrieveDivision():void{
    this.divisionService.getAll()
    .subscribe(
      data=>{
        this.divisions = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      });
    
  }
}
