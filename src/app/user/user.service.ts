import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  activatedEmitter = new EventEmitter<boolean>();

  ngOnInit() {
    this.activatedEmitter.emit(true);
  }
}
