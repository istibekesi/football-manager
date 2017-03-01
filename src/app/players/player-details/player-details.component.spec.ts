/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayerDetailsComponent } from './player-details.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayerDetailsComponent', () => {
  let component: PlayerDetailsComponent;
  let fixture: ComponentFixture<PlayerDetailsComponent>;

  beforeEach(async(() => {
    let dataServiceStub = {
      getPlayers: function () { return [];},
      getTeams: function () { return [];},
      getPlayer: function () { return {};},
    };

    TestBed.configureTestingModule({
      declarations: [ PlayerDetailsComponent ],
      imports: [ FormsModule, MaterialModule.forRoot(), RouterTestingModule ],
      providers: [ {provide: DataService, useValue: dataServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
