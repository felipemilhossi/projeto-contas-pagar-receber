import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  providers: [DataService]
})
export class AccountPageComponent implements OnInit {
public accounts: any[] = [];
public total:number = 108;

  constructor(private dataService: DataService) { 
      this.dataService
      .getAccounts()
      .subscribe(data => {
        this.accounts = data;
      });

  }

  ngOnInit() {
  }

    remove(account) {
    this.dataService
      .deleteAccount(account.id)
      .subscribe(data => {
        const index = this.accounts.indexOf(account);
        this.accounts.splice(index, 1);
        alert('Conta removida');
      });
  }

}
