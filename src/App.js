import React from "react";
import Card from "./components/Card";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";

import Data from "./data"

export default function App(){
    const Cards = Data.map(data => 
         <Card
            key = {data.id}
            item = {data}
        />
    )
    return(
        <div>
            <Navbar/>
            <HeroComponent/>
            <section className="cards-flex">
                {Cards}
            </section>
        </div>
    )
}