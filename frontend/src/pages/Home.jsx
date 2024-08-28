import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material';
import NavBar  from '../components/NavBar';
import SiteCard from '../components/SiteCard';
import Onglets from '../components/Onglets';
import Footer from '../components/Footer';
const Home = () => {
    const [categories , setCategories] = useState([
        {
            "id": 2,
            "name": "Historical and Cultural Sites",
            "description": "Includes historical monuments, ancient buildings, museums, galleries, archaeological sites, and places of worship.",
            "createdAt": "2024-08-28T00:32:20.000Z",
            "updatedAt": "2024-08-28T00:32:20.000Z",
            "Subcategories": [
                {
                    "id": 1,
                    "name": "Historical Monuments and Buildings",
                    "description": "Includes castles, fortresses, ancient royal residences, and old public buildings."
                },
                {
                    "id": 2,
                    "name": "Museums and Galleries",
                    "description": "Includes history museums, art galleries, archaeological museums, and special collections."
                },
                {
                    "id": 3,
                    "name": "Archaeological Sites",
                    "description": "Includes ancient ruins, archaeological digs, and prehistoric sites."
                },
                {
                    "id": 4,
                    "name": "Places of Worship",
                    "description": "Includes churches, mosques, temples, monasteries, and historic cemeteries."
                }
            ]
        },
        {
            "id": 3,
            "name": "Natural and Scenic Sites",
            "description": "Encompasses parks, gardens, natural sites, viewpoints, and panoramas.",
            "createdAt": "2024-08-28T00:32:20.000Z",
            "updatedAt": "2024-08-28T00:32:20.000Z",
            "Subcategories": [
                {
                    "id": 5,
                    "name": "Parks and Gardens",
                    "description": "Includes botanical gardens, urban parks, and historical gardens."
                },
                {
                    "id": 6,
                    "name": "Natural Sites",
                    "description": "Includes caves, mountains, rivers, and protected forests."
                },
                {
                    "id": 7,
                    "name": "Viewpoints and Panoramas",
                    "description": "Includes observation towers, belvederes, and hills offering views over the city."
                }
            ]
        },
        {
            "id": 4,
            "name": "Events and Festivals",
            "description": "Covers cultural festivals, historical events, markets, and bazaars.",
            "createdAt": "2024-08-28T00:32:20.000Z",
            "updatedAt": "2024-08-28T00:32:20.000Z",
            "Subcategories": [
                {
                    "id": 8,
                    "name": "Cultural Festivals",
                    "description": "Includes local festivals, carnivals, and traditional fairs."
                },
                {
                    "id": 9,
                    "name": "Historical Events",
                    "description": "Includes historical reenactments, parades, and celebrations of historical anniversaries."
                },
                {
                    "id": 10,
                    "name": "Markets and Bazaars",
                    "description": "Includes traditional markets, souks, and artisan fairs."
                }
            ]
        },
        {
            "id": 5,
            "name": "Accommodation and Dining",
            "description": "Features hotels, traditional restaurants, cafés, tea rooms, and local markets.",
            "createdAt": "2024-08-28T00:32:20.000Z",
            "updatedAt": "2024-08-28T00:32:20.000Z",
            "Subcategories": [
                {
                    "id": 11,
                    "name": "Hotels and Accommodations",
                    "description": "Includes charming hotels, inns, and historic guesthouses."
                },
                {
                    "id": 12,
                    "name": "Traditional Dining",
                    "description": "Includes local restaurants, taverns, and traditional cuisine."
                },
                {
                    "id": 13,
                    "name": "Cafés and Tea Rooms",
                    "description": "Includes historic cafés, tea rooms, and local pastry shops."
                },
                {
                    "id": 14,
                    "name": "Markets and Local Products",
                    "description": "Includes food markets, local producers, and regional product tastings."
                }
            ]
        },
        {
            "id": 6,
            "name": "Arts and Crafts",
            "description": "Includes local crafts, performances, and temporary exhibitions.",
            "createdAt": "2024-08-28T00:32:20.000Z",
            "updatedAt": "2024-08-28T00:32:20.000Z",
            "Subcategories": [
                {
                    "id": 15,
                    "name": "Local Crafts",
                    "description": "Includes artisan workshops, souvenir shops, and craft professions."
                },
                {
                    "id": 16,
                    "name": "Performances and Shows",
                    "description": "Includes theater, traditional music, and folk dance."
                },
                {
                    "id": 17,
                    "name": "Temporary Exhibitions",
                    "description": "Includes art exhibitions, cultural salons, and temporary artistic events."
                }
            ]
        }
    ]);
    const [sites , setSites] = useState([
        // Sample sites data corresponding to subcategories
        { id: 1, name: 'Eiffel Tower', description: 'An iconic symbol of Paris.', subcategoryId: 1 },
        { id: 2, name: 'Louvre Museum', description: 'The world\'s largest art museum.', subcategoryId: 1 },
        { id: 3, name: 'Grand Canyon', description: 'A stunning natural landmark.', subcategoryId: 4 },
        { id: 4, name: 'Central Park', description: 'A large park in New York City.', subcategoryId: 3 },
        { id: 5, name: 'Sagrada Familia', description: 'A large unfinished Roman Catholic basilica in Barcelona.', subcategoryId: 3 },
        { id: 6, name: 'Carnival of Venice', description: 'A world-famous festival known for its elaborate masks.', subcategoryId: 2 },
        { id: 7, name: 'Carnival of Venice', description: 'A world-famous festival known for its elaborate masks.', subcategoryId: 2 },
        // Add more sample data as needed
    ]);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedSubcategory, setSelectedSubcategory] = useState(selectedCategory.Subcategories[0]);

    const handleCategoryChange = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        setSelectedCategory(category);
        setSelectedSubcategory(category.Subcategories[0]); // Default to the first subcategory
    };

    const handleSubcategoryChange = (subcategoryId) => {
        const subcategory = categories
        .flatMap(categorie => categorie.Subcategories)
        .find(sub => sub.id === subcategoryId);

        console.log("hahahaha" ,subcategory )
        setSelectedSubcategory(subcategory);
    };

    // Filter sites based on the selected subcategory
    const filteredSites = sites.filter(site => site.subcategoryId === selectedSubcategory.id);


  return (

    <Grid container >
        <Grid item xs={12}>
            <NavBar />
        </Grid>
        <Grid item xs={12}>
            <Onglets
            categories={categories}
            onCategoryChange={handleCategoryChange}
            onSubcategoryChange={handleSubcategoryChange}
            />
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={2}>
            {selectedSubcategory && (
                
                filteredSites.map((site) => (
                <Grid item key={site.id} xs={12} sm={6} md={4}>
                    <SiteCard site={site} />
                </Grid>
                ))
            )}
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Footer/>
        </Grid>
        </Grid>
        
    
    );
    };

export default Home;
