import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

console.log("ARRANQUE");
// declare global {
//   interface Window {
//     ReactBole: any;
//   }
// }

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

// window.ReactBole = window.ReactBole || {};
// window.ReactBole.mount();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
