import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hr-front-end';
  showFiller = false;
  side_nav_bar_options = ['Add Employee', 'Login', 'Sign Up','Dashboard']
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToOption(navBarOptions) {
    console.log(navBarOptions.selectedOptions.selected[0]?.value);
    switch (navBarOptions.selectedOptions.selected[0]?.value) {
      case 'Login':
        this.router.navigateByUrl('/login')
        break;
      case 'Sign Up':
        this.router.navigateByUrl('/signup')
        break;
      case 'Dashboard':
        this.router.navigateByUrl('/dashboard')
        break;
      case 'Add Employee':
        this.router.navigateByUrl('/addEmployee')
        break;
      default:
        this.router.navigateByUrl('/404')
        break;
    }
  }
}
