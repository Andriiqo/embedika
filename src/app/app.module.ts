import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApolloModule, APOLLO_NAMED_OPTIONS } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';

import { TableComponent } from './components/table/table.component';
import { InfoComponent } from './components/info/info.component';
import { apolloFactoryCountries } from './provides/countries';
import { FilterComponent } from './components/filter/filter.component';
import { FilterCountriesNamePipe } from './pipes/filter-countries-name.pipe';
import { FilterCountriesContinentPipe } from './pipes/filter-countries-continent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    SidebarComponent,
    CardComponent,
    TableComponent,
    InfoComponent,
    FilterComponent,
    FilterCountriesNamePipe,
    FilterCountriesContinentPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: apolloFactoryCountries,
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
