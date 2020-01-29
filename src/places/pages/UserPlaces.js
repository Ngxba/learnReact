import React from "react";
import {useParams} from "react-router-dom"

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Thap rua",
        description: "cuc ki dep cuc ki ngau, cuc ki tuyet voi luon",
        address: "hanoi dep lam em oi",
        imageUrl: "http://laodongthudo.vn/stores/news_dataimages/quocdai/092017/19/09/0038_Du-lich-ho-guom-ha-noi-mytour-7.jpg",
        location: {
            lat: 21.0278421,
            lng: 105.8500904
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: "Thap rua",
        description: "cuc ki dep cuc ki ngau, cuc ki tuyet voi luon",
        address: "hanoi dep lam em oi",
        imageUrl: "http://laodongthudo.vn/stores/news_dataimages/quocdai/092017/19/09/0038_Du-lich-ho-guom-ha-noi-mytour-7.jpg",
        location: {
            lat: 21.0278421,
            lng: 105.8500904
        },
        creator: "u2"
    }
]

const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>;
}

export default UserPlaces