import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppendientesModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppendientesModule);
