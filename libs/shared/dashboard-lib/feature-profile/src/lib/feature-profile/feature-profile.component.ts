import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ngrxAuthQuery } from '@angular-monorepo/auth-data-access';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-feature-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-profile.component.html',
  styleUrl: './feature-profile.component.css',
})
export class FeatureProfileComponent implements OnInit {
  NPasswordType!: boolean;
  CPasswordType!: boolean;
  public isCollapsed = true;
  currentUser$! : Observable<any>;

  private readonly store = inject(Store);

  ngOnInit(): void {
    this.currentUser$ = this.store.select(ngrxAuthQuery.selectData).pipe();
  }



  /**
   * New Password Hide/Show
   */
   toggleNewPassword() {
    this.NPasswordType = !this.NPasswordType;
  }

  /**
   * Confirm Password Hide/Show
   */
   toggleConfirmPassword() {
    this.CPasswordType = !this.CPasswordType;
  }

  // File Upload
  imageURL: string | undefined;
  fileChange(event:any) {
    const fileList: any = (event.target as HTMLInputElement);
    const file: File = fileList.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      document.querySelectorAll('#user_profile').forEach((element:any) => {
        element.src = this.imageURL;
      });
    }
    reader.readAsDataURL(file)
  }
}
