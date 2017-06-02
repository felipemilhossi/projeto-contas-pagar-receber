import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account-page',
  templateUrl: './add-account-page.component.html',
  providers: [FormBuilder, DataService]
})
export class AddAccountPageComponent implements OnInit {
public form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { 
    this.form = this.fb.group({
      description: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(60),
        Validators.required
      ])],
      value: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

    submit() {
    this.dataService
      .postAccount(this.form.value)
      .subscribe(data => {
        this.router.navigateByUrl('/accounts');
      });
  }

}
