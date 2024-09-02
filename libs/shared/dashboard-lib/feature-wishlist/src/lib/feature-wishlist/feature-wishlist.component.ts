import { Store } from '@ngrx/store';
import { Product } from '@angular-monorepo/shop-data-access';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ngrxSettingsFeature, settingsActions } from "@angular-monorepo/shared/dashboard-lib/data-access";

@Component({
  selector: 'lib-feature-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './feature-wishlist.component.html',
  styleUrl: './feature-wishlist.component.css',
})
export class FeatureWishlistComponent implements OnInit {
  public isCollapsed = true;

  private readonly store = inject(Store);

  wishlistItems$! : Observable<Product[]>;

  ngOnInit(): void {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      this.store.dispatch(settingsActions.loadSettings({ settings: JSON.parse(storedSettings) }));
    }

    this.wishlistItems$ = this.store.select(ngrxSettingsFeature.selectWishlist).pipe();
  }


  // Remove Data
  removeData(data:any){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Seguro que deseas quitar este producto de tus favoritos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar',
    }).then(result => {
      if (result.value) {
        this.store.dispatch(settingsActions.removeItemFromWishlist({wishlist: data}));
        Swal.fire({title: 'Eliminado!', text:'El producto ha sido eliminado.', confirmButtonColor: '#364574',icon: 'success',});
        // e.target.closest('.border-bottom').remove();
      }
    });
  }
}
