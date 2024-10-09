import React from "react";
import ReactDOM from "react-dom/client";


const NavBar = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
};

const RestoComponent = (props) =>{
    return (
        <div className="res-cart">
            <img
            className="rest-logo"
            alt="rest-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/6267ecd0-c240-4ef8-8050-527a15356426_630353.JPG"
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h3>{props.eta}</h3>

        </div>
    )
}



const resObj = {
    type: "restaurants",
    data: {
        "id": "630353",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/6267ecd0-c240-4ef8-8050-527a15356426_630353.JPG",
        "locality": "Espalande",
        "areaName": "S.N.Banerjee Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Fast Food",
        "Burgers",
        "Rolls & Wraps"
        ],
        "avgRating": 4.5,
        "parentId": "547",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.2K+",
        "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-09 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-Burger.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Burger.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        }


const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestoComponent 
                    resName="Subway" 
                    cuisine="Healthy Food, Salads, Snacks, Desserts, Beverages"
                    rating="4.3 Stars"
                    eta="20 Min"
                />
                <RestoComponent
                 resData={resObj}
                 />
                
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <NavBar/>
            <Body/>

        </div>
    )
  
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)