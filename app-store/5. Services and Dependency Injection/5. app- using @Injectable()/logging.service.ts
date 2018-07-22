export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
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

*/
