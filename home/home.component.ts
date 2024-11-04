import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[]=[];
  constructor(private fd:FoodService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['searchItem']){
        this.foods =this.fd.getall().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }else if(params['tag']){
        this.foods = this.fd.getAllFoodByTag(params['tag'])
      }else {
        this.foods= this.fd.getall();
      }
    })
   
  }

}
