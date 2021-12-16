import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from '../components/notifier/notifier.component';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(text: string, msgType: 'error' | 'éxito') {
    this.snackBar.openFromComponent(NotifierComponent, {
      data: { text: text, msgType: msgType },
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: msgType,
    });
  }

  showErrorNotification(error: any) {
    switch (error.status) {
      case 401:
        this.showNotification(
          'Error 401: Credenciales inválidas de autenticación',
          'error'
        );
        return;
      case 400:
        this.showNotification('Error 400: Petición incorrecta', 'error');
        return;
      case 500:
        this.showNotification('Error 500: Internal Server Error ', 'error');
        return;

      default:
        this.showNotification(`Error: ${error.message}`, 'error');
        return;
    }
  }
}
