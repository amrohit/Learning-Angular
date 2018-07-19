import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Input('checking') chk: number;
  @Output() statusChanged = new EventEmitter<{ id: number; newStatus: string }>();
  constructor() {}

  ngOnInit() {
    console.log(this.id);
  }
  onSetTo(status: string) {
    console.log(this.chk);
    console.log(this.id);
    this.statusChanged.emit({
      id: this.id,
      newStatus: status
    });
    console.log(this.id);
    console.log("A server status changed, new status: " + status);
  }
}
