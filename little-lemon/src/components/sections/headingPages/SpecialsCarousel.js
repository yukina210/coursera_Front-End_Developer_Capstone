import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/images/greek-salad1.jpg';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/images/lemon-dessert1.jpg';
import SpecialCard from './Cardinfo/SpecialsCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}