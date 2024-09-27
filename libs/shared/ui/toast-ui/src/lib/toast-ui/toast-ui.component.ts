import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToastService } from '../toast.service';

@Component({
  selector: 'lib-toast-ui',
  standalone: true,
  imports: [CommonModule, NgbToast],
  templateUrl: './toast-ui.component.html',
  styleUrl: './toast-ui.component.scss',
})
export class ToastUiComponent {
  toastService = inject(AppToastService);
}
