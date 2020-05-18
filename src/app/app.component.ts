import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  title = "my-app";

  ngOnInit() {
    console.log("Cargando...");
    //   window.ReactBole.mount();
    // const data = {
    //   clientId: "000000040",
    //   userId: "G74887",
    //   gidUO: "123400010095",
    //   environment: "dev",
    //   clientName: "Alicia Rodríguez",
    //   userSSA: "A125335",
    // };
    // const handlerEvent = false;

    // window.ReactBole = window.ReactBole || {};
    // window.ReactBole.mount(data, handlerEvent);
    console.log("Cargado");
  }
}
