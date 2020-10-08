import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch, faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faSearchIcon =faSearch;
  faShoppingCart = faShoppingCart;
faUserIcon =faUser;


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

  constructor() { }

  ngOnInit(): void {

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
