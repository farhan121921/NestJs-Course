import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Patch, Delete, Query} from '@nestjs/common';
import { response } from 'express';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery){
        //const { limit, offset } = paginationQuery
        return this.coffeeService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeeService.findOne(id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.remove(id);
    }

    
}