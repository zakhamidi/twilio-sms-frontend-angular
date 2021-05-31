import { Component, OnInit, OnDestroy,Inject,HostListener } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { TaskService } from 'src/app/services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  smsForm: FormGroup;
  sentsms:any;
  errorMsg:any;
  error=false;
  mySms={
    nummer:'',
    text:''
    //wunschtermin:'',
    //prio:0
  };
  
  
  constructor(private taskService:TaskService,
              @Inject(DOCUMENT) private document: Document) 
              {
              }
  
  ngOnInit() {
  
  }

  ngOnDestroy() {
  }
  
  sendSms(){
    this.errorMsg=
    this.taskService.persist(this.mySms).pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              this.errorMsg = `Error: ${error.error.message.slice(-25)}`;
              this.ngOnInit;
          } else {
              this.errorMsg = `Error: ${error.message.slice(-25)}`;
              this.ngOnInit;
          }
          return of([]);
          
      })
  ).subscribe((data) => {
      this.sentsms=data;
      this.ngOnInit;
      }
    );
    this.error=true;
  }
  
}
