import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// on précise que notre application est destinée navigateur web et que nous desingnons le AppModule comme module racine 
platformBrowserDynamic().bootstrapModule(AppModule);
