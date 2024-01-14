import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-profile.component.html',
  styleUrl: './feature-profile.component.scss',
})
export class FeatureProfileComponent {
  NPasswordType!: boolean;
  CPasswordType!: boolean;
  public isCollapsed = true;

  constructor() { }


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
