import { Injectable } from '@angular/core';
import { count } from 'console';
import { Foods } from 'src/app/shared/model/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getall().find(food=> food.id == id)!;
    }

  getAllFoodByTag(tag:string):Foods[]{
    if(tag == 'all'){
      return this.getall()
    }else{
     return this.getall().filter(food => food.tags?.includes(tag))
    }
  }

  getAllTag(){
    return[
      { name: 'All', count: 8},
      { name: 'sweet', count: 1},
      { name: 'spicy', count: 7}
    ]
  }

getall():Foods[]{
return [
  
  {
    id:1,
    name:'Spicy Mixture',
    price:3,
    cookTime:'15-20',
    favourite: true,
    origins:['viajayawada','rajamundry'],
    star:4.5,
    imageUrl:'/assets/download.jpeg',
    tags:['spicy','mixture','snack'],
  },
  {
    id:2,
    name:'Round cracker',
    price:4,
    cookTime:'25-30',
    favourite: true,
    origins:['viajayawada','rajamundry','nellore'],
    star:4,
    imageUrl:'/assets/images (2).jpeg',
    tags:['spicy','crunchy'],
  },
  {
    id:3,
    name:'Sakinalu',
    price:5,
    cookTime:'15-20',
    favourite: true,
    origins:['karimanagar','warangal'],
    star:4.5,
    imageUrl:'/assets/images (3).jpeg',
    tags:['spicy','snack'],
  },
  {
    id:4,
    name:'green peas mixture',
    price:5,
    cookTime:'25-30',
    favourite: true,
    origins:['viajayawada','rajamundry','nellore'],
    star:3.5,
    imageUrl:'/assets/images (5).jpeg',
    tags:['spicy','crunchy'],
  },
  {
    id:5,
    name:'Ariselu',
    price:5,
    cookTime:'15-20',
    favourite: true,
    origins:['Anakapalli','tuni'],
    star:4.5,
    imageUrl:'/assets/images (6).jpeg',
    tags:['sweet','snack'],
  },
  {
    id:6,
    name:'Fried peanuts',
    price:3,
    cookTime:'25-30',
    favourite: true,
    origins:['viajayawada','rajamundry','nellore'],
    star:3.5,
    imageUrl:'/assets/images (7).jpeg',
    tags:['spicy','crunchy']
  },
  {
    id:7,
    name:'Chekkalu',
    price:3,
    cookTime:'25-30',
    favourite: true,
    origins:['karimnagar','khammam','hyderabad'],
    star:3.5,
    imageUrl:'/assets/images (7).jpeg',
    tags:['spicy','crunchy']
  },
  {
    id:8,
    name:'Fried snacks',
    price:3,
    cookTime:'25-30',
    favourite: true,
    origins:['viajayawad','rajamundry','nellore'],
    star:3.5,
    imageUrl:'/assets/images (8).jpeg',
    tags:['spicy','crunchy']
  },


]
}

}
