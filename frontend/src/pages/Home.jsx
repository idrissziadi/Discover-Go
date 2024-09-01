import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import SiteCard from '../components/SiteCard';
import Onglets from '../components/Onglets';
import Footer from '../components/Footer';
import backgroundImage from './../assets/back.png'; 
import axios from 'axios';

const Home = () => {
    const token = localStorage.getItem('token');
    const location = useLocation();
    const { selectedCategoryy, selectedSubcategoryy } = location.state || {};
    const [categories, setCategories] = useState([]);
    const [sites, setSites] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(selectedCategoryy || null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(selectedSubcategoryy || null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/categories", {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setCategories(response.data);
                if (!selectedCategory && response.data.length > 0) {
                    setSelectedCategory(response.data[0]);
                    setSelectedSubcategory(response.data[0].Subcategories[0]);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchSites = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/sites", {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setSites(response.data);
            } catch (error) {
                console.error('Error fetching sites:', error);
            }
        };

        fetchCategories();
        fetchSites();
    }, [token, selectedCategory]);

    const handleCategoryChange = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        setSelectedCategory(category);
        setSelectedSubcategory(category.Subcategories[0]); 
    };

    const handleSubcategoryChange = (subcategoryId) => {
        const subcategory = categories
            .flatMap(categorie => categorie.Subcategories)
            .find(sub => sub.id === subcategoryId);

        setSelectedSubcategory(subcategory);
    };

    // Only filter sites if selectedSubcategory is not null
    const filteredSites = selectedSubcategory ? sites.filter(site => site.subcategoryId === selectedSubcategory.id) : [];

    return (
        <Grid container direction="column" sx={{ minHeight: '100vh' }}>
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
            <Grid item xs={12} sx={{ 
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                padding: '16px',
                flex: 1, // Ensures this container takes available space
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh' // Ensures that the background container takes at least the full viewport height
            }}>
                <Box sx={{ width: '100%', maxWidth: '1200px' }}> {/* Set a max width to prevent overflow */}
                    <Grid container spacing={2}>
                        {selectedSubcategory && (
                            filteredSites.map((site) => (
                                <Grid item key={site.id} xs={12} sm={6} md={4}>
                                    <SiteCard site={site} selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} />
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default Home;
