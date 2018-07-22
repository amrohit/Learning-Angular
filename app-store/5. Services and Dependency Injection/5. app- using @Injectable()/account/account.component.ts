import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountsService } from "./../accounts.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
//  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Input("checking") chk: number;
  // @Output() statusChanged = new EventEmitter<{ id: number; newStatus: string }>();
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  ngOnInit() {
    // console.log(this.id);
  }
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.statusChanged.emit({
    //   id: this.id,
    //   newStatus: status
    // });

    this.loggingService.logStatusChange(status);

    //console.log("A server status changed, new status: " + status);
  }
}
