import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../core/services/profile.service';
import {AuthService} from '../../../core/services/auth.service';
import {Observable} from 'rxjs';
import {TagInterface} from '../../../core/interfaces/tag.interface';
import {TagService} from '../../../core/services/tag.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { User } from 'src/app/core/entities/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tags$: Observable<TagInterface[]>;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private tagService: TagService,
    private snackBar: MatSnackBar
  ) {
    this.tags$ = this.tagService.get();
  }

  userForm = this.fb.group({
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]],
    tags: [[]]
  });

  ngOnInit() {
    const user = AuthService.user;
    this.firstNameControl.setValue(user.first_name);
    this.lastNameControl.setValue(user.last_name);
    this.tagsControl.setValue(user.tags);
  }

  get firstNameControl() {
    return this.userForm.get('first_name');
  }

  get lastNameControl() {
    return this.userForm.get('last_name');
  }

  get tagsControl() {
    return this.userForm.get('tags');
  }

  updateProfile(): void {
    const userChanges = this.userForm.getRawValue();
    this.profileService.updateProfile(userChanges).subscribe(
      (user: User) => {
        this.snackBar.open("Votre profil a été modifié", null,{
          duration: 2000,
        })
      }
    );
  }

  compareIds(tagOption: TagInterface, tagSelection: TagInterface): boolean{
    return tagOption.id === tagSelection.id;
  }

}
