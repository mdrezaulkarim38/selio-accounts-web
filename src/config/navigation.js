import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FactoryIcon from '@mui/icons-material/Factory';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';

export const navConfig = [
  {
    items: [
      { 
        title: 'Dashboard', 
        path: '/dashboard/main', 
        icon: DashboardIcon 
      },
      { 
        title: 'Sales', 
        path: '/dashboard/sales', 
        icon: TrendingUpIcon,
        children: [
          { title: 'New Sale', path: '/dashboard/sales/new' },
          { title: 'Sales List', path: '/dashboard/sales/list' },
        ]
      },
      { 
        title: 'POS', 
        path: '/dashboard/pos', 
        icon: PointOfSaleIcon 
      },
      { 
        title: 'Quotation', 
        path: '/dashboard/quotation', 
        icon: DescriptionIcon,
        children: [
          { title: 'Create Quote', path: '/dashboard/quotation/create' },
          { title: 'All Quotes', path: '/dashboard/quotation/all' },
        ]
      },
      { 
        title: 'Order', 
        path: '/dashboard/order', 
        icon: ShoppingCartIcon,
        children: [
          { title: 'Pending Orders', path: '/dashboard/order/pending' },
          { title: 'Completed', path: '/dashboard/order/completed' },
        ]
      },
      { 
        title: 'Service', 
        path: '/dashboard/service', 
        icon: BuildIcon 
      },
    ],
  },
  {
    items: [
      { 
        title: 'Purchase', 
        path: '/dashboard/purchase', 
        icon: ShoppingBagIcon,
        children: [
          { title: 'Add Purchase', path: '/dashboard/purchase/add' },
          { title: 'Vendors', path: '/dashboard/purchase/vendors' },
        ]
      },
      { 
        title: 'Manufacturing', 
        path: '/dashboard/manufacturing', 
        icon: FactoryIcon 
      },
      { 
        title: 'Inventory', 
        path: '/dashboard/inventory', 
        icon: InventoryIcon,
        children: [
          { title: 'Products', path: '/dashboard/inventory/products' },
          { title: 'Categories', path: '/dashboard/inventory/categories' },
          { title: 'Stock Adjustment', path: '/dashboard/inventory/stock' },
        ]
      },
      { 
        title: 'Accounts', 
        path: '/dashboard/accounts', 
        icon: AccountBalanceIcon,
        children: [
          { title: 'Ledger', path: '/dashboard/accounts/ledger' },
          { title: 'Expenses', path: '/dashboard/accounts/expenses' },
        ]
      },
      { 
        title: 'HR & Payroll', 
        path: '/dashboard/hr', 
        icon: PeopleIcon,
        children: [
          { title: 'Employees', path: '/dashboard/hr/employees' },
          { title: 'Attendance', path: '/dashboard/hr/attendance' },
          { title: 'Payroll', path: '/dashboard/hr/payroll' },
        ]
      },
    ],
  },
  {
    items: [
      { 
        title: 'Reports', 
        path: '/dashboard/reports', 
        icon: BarChartIcon 
      },
      { 
        title: 'CRM', 
        path: '/dashboard/crm', 
        icon: SupportAgentIcon,
        children: [
          { title: 'Leads', path: '/dashboard/crm/leads' },
          { title: 'Customers', path: '/dashboard/crm/customers' },
        ]
      },
      { 
        title: 'Settings', 
        path: '/dashboard/settings', 
        icon: SettingsIcon 
      },
    ],
  }
];