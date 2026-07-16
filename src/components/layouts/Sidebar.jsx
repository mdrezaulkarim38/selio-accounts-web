import { useState } from 'react';
import { 
  Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, 
  ListItemText, ListSubheader, Typography, Collapse 
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { navConfig } from '../../config/navigation'; // import .jsx or .js accordingly

export default function Sidebar({ drawerWidth }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Submenu open/close state track korar jonno
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const drawer = (
    <Box sx={{ overflow: 'auto', mt: 2, pb: 4 }}>
      {/* Logo Area */}
      <Box sx={{ px: 3, mb: 3, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" color="primary" fontWeight="bold">ERP Admin</Typography>
      </Box>

      {/* Navigation Links */}
      {navConfig.map((group) => (
        <List
          key={group.title}
          subheader={
            <ListSubheader sx={{ bgcolor: 'transparent', fontSize: '0.75rem', fontWeight: 700 }}>
              {group.title}
            </ListSubheader>
          }
        >
          {group.items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            // Parent ba tar kono children active ache kina check korbe
            const active = location.pathname.includes(item.path);
            const isMenuOpen = openMenus[item.title];
            const IconComponent = item.icon;

            return (
              <Box key={item.title}>
                {/* Main Menu Item */}
                <ListItem disablePadding sx={{ px: 2, mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => hasChildren ? handleToggle(item.title) : navigate(item.path)}
                    sx={{
                      borderRadius: 2,
                      bgcolor: active ? 'success.lighter' : 'transparent',
                      color: active ? 'success.main' : 'text.secondary',
                      '&:hover': { bgcolor: active ? 'success.lighter' : 'action.hover' }
                    }}
                  >
                    <ListItemIcon sx={{ color: active ? 'success.main' : 'inherit', minWidth: 40 }}>
                      {IconComponent && <IconComponent />}
                    </ListItemIcon>
                    
                    <ListItemText 
                      primary={item.title} 
                      primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: active ? 600 : 400 }} 
                    />
                    
                    {/* Expand Icon for Dropdown */}
                    {hasChildren && (isMenuOpen ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>

                {/* Submenu Items */}
                {hasChildren && (
                  <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => {
                        const childActive = location.pathname === child.path;
                        return (
                          <ListItem key={child.title} disablePadding sx={{ pl: 6, pr: 2, mb: 0.5 }}>
                            <ListItemButton
                              onClick={() => navigate(child.path)}
                              sx={{
                                borderRadius: 2,
                                bgcolor: childActive ? 'action.selected' : 'transparent',
                                color: childActive ? 'text.primary' : 'text.secondary',
                                '&:hover': { bgcolor: 'action.hover' },
                                py: 0.5
                              }}
                            >
                              <Box 
                                sx={{ 
                                  width: 4, height: 4, borderRadius: '50%', 
                                  bgcolor: childActive ? 'success.main' : 'text.disabled', 
                                  mr: 2 
                                }} 
                              />
                              <ListItemText 
                                primary={child.title} 
                                primaryTypographyProps={{ fontSize: '0.8rem', fontWeight: childActive ? 600 : 400 }} 
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </List>
      ))}
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            borderRight: '1px dashed rgba(145, 158, 171, 0.24)' 
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}