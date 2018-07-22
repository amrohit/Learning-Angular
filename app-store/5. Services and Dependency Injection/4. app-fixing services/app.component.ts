import { AccountsService } from './accounts.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  //most instantilization should not be done in constructor but here
  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }



  // accounts = [
  //   {
  //     name: "Master Account",
  //     status: "active"
  //   },
  //   {
  //     name: "Testing Account",
  //     status: "inactive"
  //   },
  //   {
  //     name: "Hidden Account",
  //     status: "unknown"
  //   }
  // ];
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }
  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }


}
