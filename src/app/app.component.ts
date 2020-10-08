import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {AppDataService} from './shared/services/app-data.service';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'upgrad-eshop-frontend';
  faShoppingCart = faShoppingCart;
  faUserIcon= faUser;
  faSearchIcon =faSearch;

  showModal: boolean;
   submitted = false;
   signupcard:boolean;
   signincard:boolean= true;
  
   
   email:string;
   password:string;
   mobileNumber:string;
   confirmPassword:string;
   lastName:string;
   firstName:string;

//   constructor() {
    
//  }
 constructor( private appDataService: AppDataService) {}


  ngOnInit(): void {
  //  this.appDataService.initializeApp();
  }

  closeSubMenus() {

  }
  show()
  {
    // Show-Hide Modal Check
    this.showModal = true;
    this.signincard=true;
    this.signupcard=false;
  }

  hide()
  {
    this.showModal = false;
  }

  onSubmit(credentials:NgForm){
    console.log(credentials);
  }

  signupUser(credentials:NgForm){
    console.log(credentials);
  }
 
  onSigninClick(){
    this.signupcard=false;
    this.signincard=true;
   }
  
  onSignupClick(){
   this.signincard =false;
   this.signupcard=true;
   }
}
