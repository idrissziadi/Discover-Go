import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import NavBar  from '../components/NavBar';
import SiteCard from '../components/SiteCard';
import Onglets from '../components/Onglets';
import Footer from '../components/Footer';
import backgroundImage from './../assets/back.png'; // Importer l'image


const Home = () => {
    const location = useLocation();
    const {selectedCategoryy , selectedSubcategoryy} = location.state || {};
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
    const [sites, setSites] = useState([
        { 
            id: 1, 
            name: 'Eiffel Tower', 
            description: 'An iconic symbol of Paris.', 
            history: 'Constructed in 1889 as the entrance arch for the 1889 World\'s Fair.', 
            address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France', 
            latitude: 48.8584, 
            longitude: 2.2945, 
            subcategoryId: 1,
            images: [
                backgroundImage,
                backgroundImage
            ],
            events: [
                { 
                    id: 1, 
                    title: 'Bastille Day Celebration', 
                    description: 'An annual celebration of French independence with fireworks and music.', 
                    event_date: '2024-07-14'
                },
                { 
                    id: 2, 
                    title: 'Eiffel Tower Light Show', 
                    description: 'A spectacular light show every evening at the Eiffel Tower.', 
                    event_date: '2024-08-01'
                }
            ]
        },
        { 
            id: 2, 
            name: 'Louvre Museum', 
            description: 'The world\'s largest art museum.', 
            history: 'Originally built as a fortress in the late 12th century, converted to a royal palace, and opened as a museum in 1793.', 
            address: 'Rue de Rivoli, 75001 Paris, France', 
            latitude: 48.8606, 
            longitude: 2.3376, 
            subcategoryId: 1,
            images: [
                backgroundImage,
                backgroundImage
            ],
            events: [
                { 
                    id: 1, 
                    title: 'Exhibition: Mona Lisa', 
                    description: 'Special exhibition on the Mona Lisa with exclusive insights.', 
                    event_date: '2024-10-01'
                },
                { 
                    id: 2, 
                    title: 'Louvre Night Tours', 
                    description: 'Guided tours of the museum at night.', 
                    event_date: '2024-09-15'
                }
            ]
        },
        { 
            id: 3, 
            name: 'Grand Canyon', 
            description: 'A stunning natural landmark.', 
            history: 'Carved by the Colorado River over millions of years.', 
            address: 'Grand Canyon Village, AZ 86023, USA', 
            latitude: 36.1069, 
            longitude: -112.1129, 
            subcategoryId: 4,
            images: [
                'https://example.com/images/grand-canyon1.jpg',
                'https://example.com/images/grand-canyon2.jpg'
            ],
            events: [
                { 
                    id: 1, 
                    title: 'Grand Canyon Sunset Tour', 
                    description: 'Experience the breathtaking sunset views at the Grand Canyon.', 
                    event_date: '2024-09-20'
                },
                { 
                    id: 2, 
                    title: 'Hiking Marathon', 
                    description: 'Annual marathon event through the trails of the Grand Canyon.', 
                    event_date: '2024-10-05'
                }
            ]
        },
        { 
            id: 4, 
            name: 'Central Park', 
            description: 'A large park in New York City.', 
            history: 'Designed by Frederick Law Olmsted and Calvert Vaux, opened in 1858.', 
            address: 'New York, NY 10024, USA', 
            latitude: 40.7851, 
            longitude: -73.9683, 
            subcategoryId: 3,
            images: [
                backgroundImage,
                backgroundImage
            ],
            events: [
                { 
                    id: 1, 
                    title: 'Central Park SummerStage', 
                    description: 'Outdoor concerts and performances held throughout the summer.', 
                    event_date: '2024-08-15'
                },
                { 
                    id: 2, 
                    title: 'Central Park Fall Festival', 
                    description: 'Seasonal festival celebrating autumn with various activities and vendors.', 
                    event_date: '2024-10-10'
                }
            ]
        },
        { 
            id: 5, 
            name: 'Sagrada Familia', 
            description: 'A large unfinished Roman Catholic basilica in Barcelona.', 
            history: 'Designed by Antoni Gaudí, construction began in 1882 and continues to this day.', 
            address: 'Carrer de Mallorca, 401, 08013 Barcelona, Spain', 
            latitude: 41.4036, 
            longitude: 2.1744, 
            subcategoryId: 3,
            images: [
                './../assets/back.png',
                './../assets/back.png'
            ],
            events: [
                { 
                    id: 1, 
                    title: 'Gaudí’s Workshop Exhibition', 
                    description: 'An exhibition showcasing Gaudí’s original workshop tools and models.', 
                    event_date: '2024-09-01'
                },
                { 
                    id: 2, 
                    title: 'Sagrada Familia Guided Tours', 
                    description: 'Detailed guided tours of the basilica and its construction progress.', 
                    event_date: '2024-08-25'
                }
            ]
        },
        { 
            id: 6, 
            name: 'Carnival of Venice', 
            description: 'A world-famous festival known for its elaborate masks.', 
            history: 'A festival with origins in the 11th century, celebrated with masked balls and parades.', 
            address: 'Venice, Italy', 
            latitude: 45.4379, 
            longitude: 12.5695, 
            subcategoryId: 2,
            images: [
                backgroundImage,
                backgroundImage
            ],
            events: [
                { 
                    id: 1, 
                    title: 'Venetian Mask Ball', 
                    description: 'A glamorous masked ball held during the carnival.', 
                    event_date: '2024-02-15'
                },
                { 
                    id: 2, 
                    title: 'Grand Parade', 
                    description: 'The main parade of the Carnival featuring elaborate costumes and floats.', 
                    event_date: '2024-02-20'
                }
            ]
        },
        { 
            id: 7, 
            name: 'Carnival of Venice', 
            description: 'A world-famous festival known for its elaborate masks.', 
            history: 'A festival with origins in the 11th century, celebrated with masked balls and parades.', 
            address: 'Venice, Italy', 
            latitude: 45.4379, 
            longitude: 12.5695, 
            subcategoryId: 2,
            images: [
                backgroundImage,
                backgroundImage
            ],
            events: [
                { 
                    id: 1, 
                    title: 'Venetian Mask Exhibition', 
                    description: 'An exhibition showcasing the history and artistry of Venetian masks.', 
                    event_date: '2024-02-10'
                },
                { 
                    id: 2, 
                    title: 'Costume Contest', 
                    description: 'A contest for the best costume during the Carnival.', 
                    event_date: '2024-02-18'
                }
            ]
        }
        // Add more sample data as needed
    ]);
    
    
    
    const [selectedCategory, setSelectedCategory] = useState( selectedCategoryy || categories[0]);
    const [selectedSubcategory, setSelectedSubcategory] = useState( selectedSubcategoryy || selectedCategory.Subcategories[0]);

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
        <Grid item xs={12}sx={{ 
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                padding: '16px',
                height: 'calc(100vh)', // Adjust the height as needed
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
        }}>
            <Grid container spacing={2}>
            {selectedSubcategory && (
                
                filteredSites.map((site) => (
                <Grid item key={site.id} xs={12} sm={6} md={4}>
                    <SiteCard site={site} selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory}/>
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
