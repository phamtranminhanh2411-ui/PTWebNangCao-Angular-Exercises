import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  templateUrl: './binding-property-component.html',
  styleUrl: './binding-property-component.css',
})
export class BindingPropertyComponent {
  public name:string="Anh Thư";
  public email:string="thulnak24411@st.uel.edu.vn";
  public nameid:string="nameid";
  public emailid:string="emailid";
  public isDisabled:boolean=true;
  public hello:string="Hey?";
}
