import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/@core/service/api/post.service';

export interface UnitInfoModel {
  id: string;
  name: string;
  address: string;
  description: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  constructor(
    private unit: PostService
  ) { }

  ngOnInit(): void {
    this.getUnit();
  }

  listUnit: UnitInfoModel[] = [];

  getUnit() {
    this.unit.getAllUnit().subscribe(res => {
      console.log(res);
      this.listUnit = res.data;
    }, error => {
      console.error(error);
      
    })
  }
}
