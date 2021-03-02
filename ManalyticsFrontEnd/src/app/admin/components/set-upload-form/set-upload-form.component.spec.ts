import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUploadFormComponent } from './set-upload-form.component';

describe('SetUploadFormComponent', () => {
  let component: SetUploadFormComponent;
  let fixture: ComponentFixture<SetUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUploadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
