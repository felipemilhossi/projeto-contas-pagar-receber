import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-account-page',
  templateUrl: './edit-account-page.component.html',
  providers: [FormBuilder, DataService]
})
export class EditAccountPageComponent implements OnInit {
  public id: string = '';
  public form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private dataService: DataService, private router: Router) {
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
        this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getAccount(this.id);
    });
  }

    getAccount(id) {
    this.dataService
      .getAccount(id)
      .subscribe(data => {
        this.form.controls['description'].setValue(data.title);
        this.form.controls['value'].setValue(data.price);
      });
  }

    submit() {
    this.dataService
      .putAccount(this.id, this.form.value)
      .subscribe(data => {
        this.router.navigateByUrl('/accounts');
      });
  }

}
