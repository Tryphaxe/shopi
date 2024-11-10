import React from 'react'
import {  Select } from "flowbite-react";

const Tri = () => {
    return (
        <div className="flex items-center gap-2 border-y bg-white p-2">
            <Select id="type" required>
                <option defaultChecked>Trier par :</option>
                <option>Populaires</option>
                <option>Les plus aimés</option>
                <option>Les plus étoilés</option>
                <option>Les plus étoilés</option>
                <option>Prix bas</option>
                <option>Prix élevés</option>
            </Select>
        </div>
    )
}

export default Tri
