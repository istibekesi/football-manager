/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListPlayersComponent } from './list-players.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListPlayersComponent', () => {
  let component: ListPlayersComponent;
  let fixture: ComponentFixture<ListPlayersComponent>;

  beforeEach(async(() => {

    let dataServiceStub = {
      getPlayers: function () { return [];},
      getTeams: function () { return [];}
    };

    TestBed.configureTestingModule({
      declarations: [ ListPlayersComponent ],
      imports: [ FormsModule, MaterialModule.forRoot(), RouterTestingModule ],
      providers: [ {provide: DataService, useValue: dataServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
