import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstTableComponent } from './my-first-table.component';

describe('MyFirstTableComponent', () => {
  let component: MyFirstTableComponent;
  let fixture: ComponentFixture<MyFirstTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
