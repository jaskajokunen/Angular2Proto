import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard.component';
import { SongComponent } from './song.component';
import { SongInfoComponent } from './song_info.component';
import { SongService } from './song.service';

//path = Path set to the router
//component = Router creates this component when navigating to this route 
@NgModule({
  imports:      [ 
	BrowserModule,
	FormsModule,
	AppRoutingModule,
	HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true})
  ],
  declarations: [ 
	AppComponent,
	DashboardComponent,
	SongComponent,
	SongInfoComponent
  ],
  providers: [SongService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
