import { FormularioComponent } from './pages/formulario/formulario.component';

import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, CadastroComponent, FormularioComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgxMaskModule.forRoot() ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
