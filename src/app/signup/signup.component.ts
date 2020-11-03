import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  basicPlanDetails: any = [];
  standardPlanDetails: any = [];
  premiumPlanDetails: any = [];

  basicPlanTotalPrice: any = 0;
  standardPlanTotalPrice: any = 0;
  premiumPlanTotalPrice: any = 0;

  constructor() { }

  ngOnInit(): void {
    this.basicPlanDetails = [{
      size: "10gb",
      title: "Storage",
      text: "10gb storage per month",
      value: "1",
      isChecked: false
    }, {
      size: "20GB Bandwidth",
      title: "",
      text: "",
      value: "2",
      isChecked: false
    }, {
      size: "1 SQL Database",
      title: "",
      text: "",
      value: "6",
      isChecked: false
    }, {
      size: "5 Email Account",
      title: "",
      text: "",
      value: "1",
      isChecked: false
    }, {
      size: "1 Website",
      title: "Domain",
      text: "1 Website Domain Available",
      value: "2",
      isChecked: false
    }, {
      size: "24/7 Support",
      title: "",
      text: "",
      value: "1",
      isChecked: false
    }];

    this.standardPlanDetails = [{
      size: "45GB Storage",
      title: "",
      text: "",
      value: "2",
      isChecked: false
    }, {
      size: "40GB Bandwidth",
      title: "",
      text: "",
      value: "4",
      isChecked: false
    }, {
      size: "2 SQL Database",
      title: "",
      text: "",
      value: "11",
      isChecked: false
    }, {
      size: "10 Email",
      title: "Account",
      text: "10 Email Account Available",
      value: "2",
      isChecked: false
    }, {
      size: "2 Website Domain",
      title: "",
      text: "",
      value: "4",
      isChecked: false
    }, {
      size: "24/7 Support",
      title: "",
      text: "",
      value: "1",
      isChecked: false
    }];

    this.premiumPlanDetails = [{
      size: "100GB Storage",
      title: "",
      text: "",
      value: "3",
      isChecked: false
    }, {
      size: "60GB",
      title: "Bandwidth",
      text: "60gb Bandwidth per month",
      value: "6",
      isChecked: false
    }, {
      size: "3 SQL Database",
      title: "",
      text: "",
      value: "16",
      isChecked: false
    }, {
      size: "15 Email Account",
      title: "",
      text: "",
      value: "3",
      isChecked: false
    }, {
      size: "3 Website Domain",
      title: "",
      text: "",
      value: "5",
      isChecked: false
    }, {
      size: "24/7 Support",
      title: "",
      text: "",
      value: "1",
      isChecked: false
    }, ];
  }

  calculatePlanPrice(type, isChecked, value) {
    console.log("isChecked ", isChecked);
    console.log("value ", value);
    
    if (isChecked) {
      if (type == 'basic') {
        this.basicPlanTotalPrice = this.basicPlanTotalPrice + _.parseInt(value);
      }
      if (type == 'standard') {
        this.standardPlanTotalPrice = this.standardPlanTotalPrice + _.parseInt(value);
      }
      if (type == 'premium') {
        this.premiumPlanTotalPrice = this.premiumPlanTotalPrice + _.parseInt(value);
      }
      
    } else {
      if (type == 'basic') {
        this.basicPlanTotalPrice = this.basicPlanTotalPrice - _.parseInt(value);
      }
      if (type == 'standard') {
        this.standardPlanTotalPrice = this.standardPlanTotalPrice - _.parseInt(value);
      }
      if (type == 'premium') {
        this.premiumPlanTotalPrice = this.premiumPlanTotalPrice - _.parseInt(value);
      }
      
    }
  }
}