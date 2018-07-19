import { Component, OnInit /*EventEmitter, Output*/ } from "@angular/core";
import { LoggingService } from "./../logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  //  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {}

  ngOnInit() {}

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // }); No longer we are listening to this event,so commented out

    //using our service below without instantiating our own. angular does for us
    this.loggingService.logStatusChange(accountStatus);

    //Should not be used service in this day, angular provide a better way
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}

/* <---Services-->
We dont have to instantiate our services on our own
Angular offers a great tool which will give our access to our services.
Its anuglar depedency injector.
So what is that?
A dependency is something a class ours will depend on
for example, the new account component depends on the logging service
because you want to call a method in that service
and the dependency injector simply injects this dependency injects an
instance of this class into our component automatically
all we need to do is we need to inform angular that we require such a instance
so how do we inform angualr that we require such instance
we add a constructor to the class to the component.
In this case, where we want to use our service
So there we can bind it to property by using these typescript shortcut of
adding an accessor in front of name the argument with the same name and we bind value to it.
and we need to import {} that service and to provide a service, adding sevice provider name using providers:[] in @Component decorator to tell angular about who will give us such a service
*/
