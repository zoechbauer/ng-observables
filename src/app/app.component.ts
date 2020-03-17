import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  activate = false;
  activateSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activateSub = this.userService.activatedEmitter.subscribe(
      (value: boolean) => {
        this.activate = value;
      }
    );
  }

  ngOnDestroy() {
    this.activateSub.unsubscribe();
  }
}
