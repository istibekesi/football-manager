/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeamDetailsComponent } from './team-details.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;
  let fixture: ComponentFixture<TeamDetailsComponent>;

  beforeEach(async(() => {
    let dataServiceStub = {
      getPlayers: function () { return [];},
      getTeams: function () { return [];},
      getTeam: function () { return {};},
      getTeamContracts: function () { return [];},
    };

    TestBed.configureTestingModule({
      declarations: [ TeamDetailsComponent ],
      imports: [ FormsModule, MaterialModule.forRoot(), RouterTestingModule ],
      providers: [ {provide: DataService, useValue: dataServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
