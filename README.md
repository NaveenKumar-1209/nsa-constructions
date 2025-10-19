# NSA Constructions - React Website

A modern, responsive React website for NSA Constructions featuring a comprehensive construction materials calculator and professional construction services showcase.

## 🚀 Features

- **React 18** with Vite for fast development and building
- **React Router** for client-side routing
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Construction Materials Calculator** - Search, calculate, and export material costs
- **Four Main Pages**:
  - **Home Page**: Hero section, about us, services preview, and call-to-action
  - **Services Page**: Detailed service offerings with integrated calculator
  - **Careers Page**: Job listings with interactive application forms
  - **Contact Page**: Contact form, company information, and FAQ section

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**

   ```bash
   # If you have git
   git clone <repository-url>
   cd nsa-constructions-react

   # Or simply extract the downloaded files
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to the URL manually

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
nsa-constructions-react/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Calculator.jsx          # Construction materials calculator
│   │   ├── Calculator.css
│   │   ├── Footer.jsx              # Site footer
│   │   ├── Footer.css
│   │   ├── JobApplicationModal.jsx # Job application modal
│   │   ├── JobApplicationModal.css
│   │   ├── Navbar.jsx              # Navigation component
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx                # Home page
│   │   ├── Home.css
│   │   ├── Services.jsx            # Services page with calculator
│   │   ├── Services.css
│   │   ├── Careers.jsx             # Careers page
│   │   ├── Careers.css
│   │   ├── Contact.jsx             # Contact page
│   │   └── Contact.css
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global styles
│   └── main.jsx                    # App entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 🧮 Calculator Features

The construction materials calculator includes:

- **Search Functionality**: Search by material name or code
- **Real-time Search**: Results appear as you type
- **20 Pre-loaded Materials**: Cement, steel, concrete blocks, etc.
- **Dynamic Table**: Add/remove materials with quantity support
- **Price Calculation**: Automatic calculation of good price + market price
- **Export Functionality**: Download quotes as CSV files
- **Responsive Design**: Works on all devices

### Sample Materials

- Cement 50kg Bag ($8.50)
- Steel Rebar 12mm ($2.25/meter)
- Concrete Block ($1.80/piece)
- Sand Fine ($45.00/cubic meter)
- And 16 more construction materials...

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design
- **Color Scheme**: Professional red (#e74c3c) and dark blue (#2c3e50)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Icons**: Lucide React icons throughout the site
- **Forms**: Interactive contact and job application forms

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Customization

### Adding New Materials to Calculator

Edit the `goods` array in `src/components/Calculator.jsx`:

```javascript
const goods = [
  { code: "C021", title: "New Material", unit: "Unit", price: 10.0 },
  // ... existing materials
];
```

### Updating Company Information

Edit the respective components:

- Contact info: `src/components/Footer.jsx`
- Company details: `src/pages/Home.jsx`
- Service offerings: `src/pages/Services.jsx`

### Styling Changes

- Global styles: `src/App.css`
- Component-specific styles: Individual `.css` files in each component folder

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance

- **Vite**: Lightning-fast development and building
- **React 18**: Optimized rendering with concurrent features
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Modern CSS**: Optimized styles with CSS Grid and Flexbox

## 🚀 Deployment

This React app can be deployed to any static hosting service:

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

1. Run `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Traditional Hosting

1. Run `npm run build`
2. Upload `dist` folder contents to your web server

## 📞 Support

For technical support or customization requests:

- Email: info@nsaconstructions.com
- Phone: (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

---

**NSA Constructions** - Building Dreams, Creating Excellence since 2008

Built with ❤️ using React and Vite
