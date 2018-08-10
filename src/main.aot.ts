import './polyfills';
// By using “platformBrowser()” we tell Angular that we’re delivering pre-compiled code so it doesn’t need to work as hard.
import { platformBrowser } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";

import { AppModuleNgFactory } from './app/app.module.ngfactory';

enableProdMode();

/*
Now our goal is to remove the dependency on the module. So, clone the main.ts file and name it main-aot.ts
which we change to load our newly generated appModuleNgFactory under the aot module

*/
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
