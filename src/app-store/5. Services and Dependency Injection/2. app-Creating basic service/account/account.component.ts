import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Input('checking') chk: number;
  @Output() statusChanged = new EventEmitter<{ id: number; newStatus: string }>();
  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
   // console.log(this.id);
  }
  onSetTo(status: string) {
    // console.log(this.chk);
    // console.log(this.id);
    this.statusChanged.emit({
      id: this.id,
      newStatus: status
    });

    this.loggingService.logStatusChange(status);

    //console.log("A server status changed, new status: " + status);
  }
}
