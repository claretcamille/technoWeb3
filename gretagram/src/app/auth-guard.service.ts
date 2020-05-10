import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  userId: string;
  isConnected: boolean;

  constructor(
    private route : Router
  ) {
    this.userId = '';
    this.isConnected= false;
   }

  changeGuard(id: string): void{
    this.userId = id;
    this.isConnected = true;
    this.route.navigate(['/', 'home']);
  }

  logout(){
    this.userId = '';
    this.isConnected = false;
    this.route.navigate(['../', '']);
  }

}
