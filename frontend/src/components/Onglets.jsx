import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Menu, MenuItem, useTheme, Button } from '@mui/material';

const Onglets = ({ categories, onCategoryChange, onSubcategoryChange }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (event, category) => {
    if (!category) {
      console.error('Category is undefined');
      return;
    }
    console.log("categorie choisie" , category.id)
    setAnchorEl(event.currentTarget);
    setCurrentCategory(category);
    onCategoryChange(category.id);
    setIsMenuOpen(true); // Ensure the menu stays open on click
  };

  const handleMouseEnter = (event, category) => {
    if (!category) {
      console.error('Category is undefined');
      return;
    }
    setAnchorEl(event.currentTarget);
    setCurrentCategory(category);
    setIsMenuOpen(true); // Open menu on hover
  };

  const handleMouseLeave = () => {
    // Optionally, add a delay to avoid flickering
    setTimeout(() => {
      if (!isMenuOpen) {
        setAnchorEl(null);
      }
    }, 50);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false); // Close menu when clicking outside or programmatically
    setAnchorEl(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    if (!subcategory) {
      console.error('Subcategory is undefined');
      return;
    }
    console.log('Subcategory Selected:', subcategory);
    onSubcategoryChange(subcategory.id);
    handleCloseMenu();
  };

  const handleTabChange = (event, newValue) => {
    const selectedCategory = categories.find(c => c.id === newValue);
    if (selectedCategory) {
      handleCategoryClick(event, selectedCategory);
    } else {
      console.error('Selected category is undefined');
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-menu' : undefined;

  return (
    <>
      <AppBar position="static" sx={{background : theme.palette.grey[900]}} >
        <Tabs 
          variant="fullWidth"
          value={currentCategory?.id} 
          onChange={handleTabChange}
          sx={{ 
            display: 'flex',
            flexDirection: 'row',
            '& .MuiTab-root': {
              flex: 1,
              minWidth: 0,
              textAlign: 'center',
              position: 'relative',
            },
            '& .MuiTab-root.Mui-selected': {
              color: theme.palette.common.white,
              '&::after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '4px',
                background: theme.palette.common.white,
                borderRadius: '2px',
                position: 'absolute',
                bottom: 0,
                left: 0,
              },
            },
            '& .MuiTab-root:not(.Mui-selected)': {
              color: theme.palette.primary.main,
            },
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category.id}
              label={category.name}
              value={category.id}
              onMouseEnter={(event) => handleMouseEnter(event, category)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </Tabs>
      </AppBar>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            width: '100%', // Adjust width to fit the parent
            maxWidth: 'none', // Ensure it doesn't get constrained by a max-width
            backgroundColor: theme.palette.primary.main, // Use primary color from theme
          },
        }}
      >
        {currentCategory?.Subcategories && currentCategory.Subcategories.length > 0 ? (
          currentCategory.Subcategories.map((subcat) => (
            <MenuItem
              key={subcat.id}
              onClick={() => handleSubcategoryClick(subcat)}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark, // Optionally, change hover color
                },
              }}
            >
              {subcat.name}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>Aucune sous-catégorie disponible</MenuItem>
        )}
      </Menu>
    </>
  );
};

export default Onglets;
