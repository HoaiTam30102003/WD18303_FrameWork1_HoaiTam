import { PostService } from './../../../@core/service/api/post.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addUnitForm!: FormGroup;
  constructor(
    private addService: PostService
  ) { }

  ngOnInit(): void {
    this.addUnitForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    if(this.addUnitForm.valid) {
      this.addService.postUnit(this.addUnitForm.value).pipe().subscribe({
        next: this.handleAddSuccess.bind(this),
        error: this.handleAddFailed.bind(this)
      })
    }
  }

  protected handleAddSuccess(res: any) {
    console.log(res);
    
  }

  protected handleAddFailed() {
  
  }

}
