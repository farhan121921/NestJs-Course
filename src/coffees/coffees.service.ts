import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
    {
        id: 1,
        name: "Farhan",
        brand: "malik",
        flavors: ['choclate', 'vanila']

    },
];

    findAll(){
        return this.coffees;
    }

    findOne(id: string){
        const coffee = this.coffees.find(item => item.id === +id)
        if(!coffee){
            throw new HttpException(`Coffee #${id} not found.`, HttpStatus.NOT_FOUND)
        }
        return coffee;
    }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto)
        return createCoffeeDto;
    }

    update(id: string, updateCoffeeDto: any){
        const existingCoffee = this.findOne(id)

    }

    remove(id: string){
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id)
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex, 1);
        }
    }

}
