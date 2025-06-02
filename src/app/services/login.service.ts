import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject = new BehaviorSubject<User | null>(null);

  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();
  constructor(private httpClient: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

   public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(name: string): void {
    const user: User = { name };
    localStorage.setItem('currentUser', JSON.stringify(user)); // Armazena no localStorage
    this.currentUserSubject.next(user); // Emite o novo usuário logado
    console.log(`${name} fez login.`);
  }

  logout(): void {
    localStorage.removeItem('currentUser'); // Remove do localStorage
    this.currentUserSubject.next(null); // Emite null (ninguém logado)
    console.log('Usuário deslogado.');
  }

}
