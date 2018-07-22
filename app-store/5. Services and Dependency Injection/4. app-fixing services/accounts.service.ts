export class AccountsService {

  //Since there were three different instances of our services, our app was broken and so we removed service name from provider of the child compoenent. with this our app got fixed
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testing Account",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status
    });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
