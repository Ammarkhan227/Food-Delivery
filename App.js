import React from 'react';
import ReactDOM from 'react-dom/client';

///Header
const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='headlogo' src='https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png' />
            </div>
            <div className='navlink'>
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// Data from API



const Card = (props) => {
    const { restData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = restData?.info;

    return (
        <div className='restcard'>
            <img className='cardimg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>Avg. Rating{avgRating}</h4>
            <h4>Delivery Time: {restData.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
};

const resList =
    [
        {
            "info": {
                "id": "98550",
                "name": "Chowdhry Sweet House",
                "cloudinaryImageId": "bhzkaqtksabwd2ula6cs",
                "locality": "Vijay Chowk",
                "areaName": "Golghar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Sweets",
                    "Chinese",
                    "South Indian",
                    "Continental"
                ],
                "avgRating": 4.3,
                "veg": true,
                "parentId": "62950",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 4.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-19 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/chowdhry-sweet-house-vijay-chowk-golghar-gorakhpur-98550",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "110147",
                "name": "Hunger Hub Restaurant",
                "cloudinaryImageId": "ekq3vjdwl0zuff8mihbc",
                "locality": "Medical College Road",
                "areaName": "BRD Medical Collage",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Italian"
                ],
                "avgRating": 4.1,
                "parentId": "104243",
                "avgRatingString": "4.1",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 3.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:30:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/hunger-hub-restaurant-medical-college-road-brd-medical-collage-gorakhpur-110147",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "96858",
                "name": "Sher-E-Punjab Hotel Since 1965",
                "cloudinaryImageId": "c293cb63ca39feafbe11d5c9c1655ebe",
                "locality": "Cinema Road",
                "areaName": "Miyan Baza",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "North Indian",
                    "Mughlai",
                    "Chinese"
                ],
                "avgRating": 4.1,
                "parentId": "182848",
                "avgRatingString": "4.1",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:20:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹115"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/sher-e-punjab-hotel-since-1965-cinema-road-miyan-baza-gorakhpur-96858",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "169497",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Ad Mall",
                "areaName": "Shahpur",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.4,
                "parentId": "166",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 4.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-19 02:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-ad-mall-shahpur-gorakhpur-169497",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "433399",
                "name": "KFC",
                "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                "locality": "Gorakhpur City Mall",
                "areaName": "Golghar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4.2,
                "parentId": "547",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 4.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-19 00:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-city-mall-golghar-gorakhpur-433399",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "303370",
                "name": "La Pino'z Pizza",
                "cloudinaryImageId": "uu1dc6mbmbmkwtb1zhq5",
                "locality": "Cinema Road",
                "areaName": "Golghar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "4961",
                "avgRatingString": "4.1",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-19 04:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
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
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-cinema-road-golghar-gorakhpur-303370",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "305577",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "City Mall",
                "areaName": "Golghar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.2,
                "parentId": "721",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 4.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-19 00:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹179"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-city-mall-golghar-gorakhpur-305577",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "97480",
                "name": "10 Park Street",
                "cloudinaryImageId": "df7869da6c00e50edff5e63fdf6d2e13",
                "locality": "BKD Square",
                "areaName": "Golghar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Continental",
                    "Beverages",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "22716",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
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
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
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
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/10-park-street-bkd-square-golghar-gorakhpur-97480",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "98169",
                "name": "Biryani Bay",
                "cloudinaryImageId": "sxy7ewi8vwdorz4nyfiy",
                "locality": "Shashtri Chowk",
                "areaName": "Miyan Baza",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Biryani",
                    "Chinese"
                ],
                "avgRating": 4.2,
                "parentId": "46510",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/biryani-bay-shashtri-chowk-miyan-baza-gorakhpur-98169",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "96860",
                "name": "Rangrezza",
                "cloudinaryImageId": "81b9afc55f409d3709f81f1932480f65",
                "locality": "Park Road",
                "areaName": "Golghar",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Mughlai",
                    "Mexican",
                    "Kebabs"
                ],
                "avgRating": 4.2,
                "parentId": "166939",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/rangrezza-park-road-golghar-gorakhpur-96860",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "97470",
                "name": "Bobi's Bakery",
                "cloudinaryImageId": "nlwcjy0co858clsgooly",
                "locality": "Chikadpalli",
                "areaName": "Golghar",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Bakery"
                ],
                "avgRating": 4.3,
                "parentId": "48316",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "4.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:59:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/bobis-bakery-chikadpalli-golghar-gorakhpur-97470",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "97506",
                "name": "Baskin Robbins - Ice Cream Desserts",
                "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                "locality": "City Mall",
                "areaName": "Golghar",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Desserts"
                ],
                "avgRating": 4.5,
                "veg": true,
                "parentId": "5588",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-19 00:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
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
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-city-mall-golghar-gorakhpur-97506",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "119909",
                "name": "Cinnamon Restaurant",
                "cloudinaryImageId": "xsfna3nbboq9zlwlhy4c",
                "locality": "Shastri Chowk",
                "areaName": "Betiahata",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Chinese",
                    "Mughlai"
                ],
                "avgRating": 4.4,
                "parentId": "63311",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 5.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "5.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/cinnamon-restaurant-shastri-chowk-betiahata-gorakhpur-119909",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "98644",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "092e58460657922e098a8afd5db838fe",
                "locality": "4th Phase",
                "areaName": "Mughala",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "parentId": "2456",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 25,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-19 01:59:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "Ratnesh_Badges/free%20del%20icon.png",
                            "shortDescription": "Free Delivery",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "Ratnesh_Badges/free%20del%20icon.png",
                                        "shortDescription": "Free Delivery"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/dominos-pizza-4th-phase-mughala-gorakhpur-98644",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "307797",
                "name": "Barbeque Nation",
                "cloudinaryImageId": "ahroxg22afxjiowtsznx",
                "locality": "City Mall",
                "areaName": "Golghar",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "North Indian",
                    "Barbecue",
                    "Biryani",
                    "Kebabs",
                    "Mughlai",
                    "Desserts"
                ],
                "avgRating": 4,
                "parentId": "2438",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 39,
                    "lastMileTravel": 4.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "4.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:30:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
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
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/barbeque-nation-city-mall-golghar-gorakhpur-307797",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "126289",
                "name": "UBQ by Barbeque Nation",
                "cloudinaryImageId": "laiyciem5yqr1qbxhfcj",
                "locality": "City Mall",
                "areaName": "Golghar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Barbecue",
                    "Biryani",
                    "Kebabs",
                    "Mughlai",
                    "Desserts"
                ],
                "avgRating": 3.9,
                "parentId": "10804",
                "avgRatingString": "3.9",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 37,
                    "lastMileTravel": 4.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "4.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:30:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
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
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-city-mall-golghar-gorakhpur-126289",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "119890",
                "name": "Royal Darbar",
                "cloudinaryImageId": "lfwjpoulwsncyqpvyimw",
                "locality": "Indira Nagar",
                "areaName": "Shakti Nagar Colony",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Continental"
                ],
                "avgRating": 4.1,
                "parentId": "19337",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 41,
                    "lastMileTravel": 7.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "7.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹95"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/royal-darbar-indira-nagar-shakti-nagar-colony-gorakhpur-119890",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "244940",
                "name": "The Avantika Hotel & Woodland Restaurant",
                "cloudinaryImageId": "aa0a594c7e6a7d270874de95df110904",
                "locality": "Kasiya Road",
                "areaName": "Golghar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Continental"
                ],
                "avgRating": 4.3,
                "parentId": "476708",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 38,
                    "lastMileTravel": 6.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "6.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-18 23:30:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-avantika-hotel-and-woodland-restaurant-kasiya-road-golghar-gorakhpur-244940",
                "type": "WEBLINK"
            }
        }
    ]

///Body
const Body = () => {
    return (
        <div className='main'>
            <div className='search'>
                <input className='searchbar' type="text" placeholder="Search For Foods..." /><br />
                <button className='searchbtn'>Search</button>
            </div>
            <div className='carddisplay'>
                {
                    resList.map(restaurant => <Card key={restaurant.info.id} restData={restaurant} />)
                }
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);