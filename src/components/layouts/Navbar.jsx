import { AppBar, Toolbar, IconButton, Box, Avatar, Badge, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';

export default function Navbar({ drawerWidth }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: 'background.default',
        color: 'text.primary',
        borderBottom: '1px dashed',
        borderColor: 'divider'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Side: Search */}
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'action.hover', px: 2, py: 0.5, borderRadius: 2 }}>
          <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
          <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
          <Typography variant="caption" sx={{ bgcolor: 'background.paper', px: 1, borderRadius: 1, ml: 1 }}>
            ⌘K
          </Typography>
        </Box>

        {/* Right Side: Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="small">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton size="small"><PeopleIcon /></IconButton>
          <IconButton size="small"><SettingsIcon /></IconButton>
          <Avatar alt="User" src="/path/to/avatar.jpg" sx={{ width: 32, height: 32, ml: 1 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}