import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-service',
  standalone: false,
  templateUrl: './catalog-service.html',
  styleUrl: './catalog-service.css',
})
export class CatalogService {
  datas=[
{"Cateid":"cate1","CateName":"nuoc ngot",
"Products":[
{"ProductId":"p1","ProductName":"Coca","Price":100,
"Image":"assets/coca.jpg"},
{"ProductId":"p2","ProductName":"Pepsi","Price":300,
"Image":"assets/pepsi.jpg"},
{"ProductId":"p3","ProductName":"Sting","Price":200,
"Image":"assets/sting.jpg"},
]
},
{"Cateid":"cate2","CateName":"Bia",
"Products":[
{"ProductId":"p4","ProductName":"Heleiken","Price":500,
"Image":"assets/asset4.jpg"},
{"ProductId":"p5","ProductName":"333","Price":400,
"Image":"assets/asset5.jpg"},
{"ProductId":"p6","ProductName":"Sai Gon","Price":600,
"Image":"assets/asset6.jpg"}
]
},
]
constructor() { }
getCategories() {
  return this.datas;
}

}
