import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { wishlistData } from './data';
import Swal from 'sweetalert2';

@Component({
  selector: 'lib-feature-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-wishlist.component.html',
  styleUrl: './feature-wishlist.component.scss',
})
export class FeatureWishlistComponent {
  wishlistDatas:any;
  public isCollapsed = true;

  constructor() {
    this.wishlistDatas = wishlistData;
  }


  // Remove Data
  removeData(e:any){
    Swal.fire({
      title: 'Are you Sure ?',
      text: 'Are you Sure You want to Remove this Product ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire({title: 'Deleted!', text:'Your file has been deleted.', confirmButtonColor: '#364574',icon: 'success',});
        e.target.closest('.border-bottom').remove();
      }
    });
  }
}
