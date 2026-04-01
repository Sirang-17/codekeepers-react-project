export const products = [
  // --- CARS ---
  { id: 1, title: "Toyota Corolla Altis 1.6", price: "4,500,000", location: "Gilgit", time: "2 hours ago", image: "https://images.unsplash.com/photo-1746681999412-e14317fbf126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRveW90YSUyMGNvcm9sbGF8ZW58MHx8MHx8fDA%3D", category: "Cars" },
  { id: 2, title: "Honda Civic VTEC", price: "5,200,000", location: "Skardu", time: "5 hours ago", image: "https://images.unsplash.com/photo-1594348512772-37a029efb199?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Cars" },
  { id: 3, title: "Suzuki Swift GLX", price: "3,100,000", location: "Hunza", time: "1 day ago", image: "https://images.unsplash.com/photo-1760421130946-b0b3d12baa51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJlbWlvJTIwY2FyfGVufDB8fDB8fHww", category: "Cars" },
  
  // --- MOBILES ---
  { id: 11, title: "iPhone 15 Pro Max", price: "450,000", location: "Gilgit", time: "10 mins ago", image: "https://images.unsplash.com/photo-1695639509828-d4260075e370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SXBob25lJTIwMTUlMjBwcm8lMjBtYXglNUN8ZW58MHx8MHx8fDA%3D", category: "Mobiles" },
  { id: 12, title: "Samsung S24 Ultra", price: "380,000", location: "Ghizer", time: "1 hour ago", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400", category: "Mobiles" },
  { id: 13, title: "Google Pixel 8 Pro", price: "210,000", location: "Chilas", time: "3 hours ago", image: "https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvb2dsZSUyMHBpeGFsJTIwOCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D", category: "Mobiles" },

  // --- LAPTOPS ---
  { id: 21, title: "MacBook Pro M3 14-inch", price: "540,000", location: "Gilgit", time: "2 days ago", image: "https://images.unsplash.com/photo-1637329428580-8fddec26fa67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFjQm9vayUyMFBybyUyME0zJTIwMTQtaW5jaHxlbnwwfHwwfHx8MA%3D%3D", category: "Laptops" },
  { id: 22, title: "Dell XPS 15", price: "320,000", location: "Skardu", time: "4 days ago", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", category: "Laptops" },

  // --- BIKES ---
  { id: 31, title: "Honda CB 150F", price: "480,000", location: "Hunza", time: "6 hours ago", image: "https://images.unsplash.com/photo-1684607396551-5ad806ee9311?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Bikes" },
  { id: 32, title: "Yamaha YBR 125G", price: "420,000", location: "Gilgit", time: "12 hours ago", image: "https://images.unsplash.com/photo-1676740459434-a3344770e34c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WWFtYWhhJTIwWUJSJTIwMTI1R3xlbnwwfHwwfHx8MA%3D%3D", category: "Bikes" },
  { id: 33, title: "Suzuki GSX-R150", price: "550,000", location: "Skardu", time: "1 day ago", image: "https://images.unsplash.com/photo-1552642824-17148a69ac2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3V6dWtpJTIwR1NYLVIxNTB8ZW58MHx8MHx8fDA%3D", category: "Bikes" },
  { id: 34, title: "Honda CD-70", price: "1,200,000", location: "Hunza", time: "2 days ago", image: "https://assets-autodeals.s3.eu-west-1.amazonaws.com/1729083653083494015789-800x600.webp", category: "Bikes" },
  { id: 35, title: "Honda CG 125", price: "1,500,000", location: "Gilgit", time: "3 days ago", image: "https://scontent.fisb29-1.fna.fbcdn.net/v/t39.30808-6/496161174_1234112905047894_1629388723740099155_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=tr-DjNthIe4Q7kNvwG94orD&_nc_oc=AdqeP6-P2nZD21cS2QkeMXmRcqpE4a5fmFGD59861mtBodZq_rN-5H5FGH-6T6LMxJI&_nc_zt=23&_nc_ht=scontent.fisb29-1.fna&_nc_gid=P40_KQSu4OMlV0HBmrMxag&_nc_ss=7a389&oh=00_AfwExNa6aho0CeZ4DIbQG_5cpYxVxo-tfM2Z4qPIMtPv2A&oe=69D1D9C9", category: "Bikes" },

  // --- HOME APPLIANCES ---
  
  { 
    id: 41, 
    title: "Samsung 55-inch QLED TV", 
    price: "150,000", 
    location: "Gilgit", 
    time: "3 days ago", 
    image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNhbXN1bmclMjA1NS1pbmNoJTIwUUxFRCUyMFRWfGVufDB8fDB8fHww", 
    category: "Appliances" 
  },
  { 
    id: 42, 
    title: "LG Refrigerator 260L", 
    price: "80,000", 
    location: "Hunza", 
    time: "5 days ago", 
    image: "https://plus.unsplash.com/premium_photo-1731622157143-70f72e11a580?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TEclMjBSZWZyaWdlcmF0b3J8ZW58MHx8MHx8fDA%3D", 
    category: "Appliances" 
  },
  { 
    id: 43, 
    title: "Panasonic Inverter Microwave", 
    price: "35,000", 
    location: "Skardu", 
    time: "1 day ago", 
    image: "https://images.unsplash.com/photo-1763525398166-9879d1bbd4f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFuYXNvbmljJTIwSW52ZXJ0ZXIlMjBNaWNyb3dhdmV8ZW58MHx8MHx8fDA%3D", 
    category: "Appliances" 
  },
  { 
    id: 44, 
    title: "Dyson V11 Cordless Vacuum", 
    price: "115,000", 
    location: "Ghizer", 
    time: "6 hours ago", 
    image: "https://plus.unsplash.com/premium_photo-1664372899494-774422f7ce61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmFjY3VtfGVufDB8fDB8fHww", 
    category: "Appliances" 
  },
  { 
    id: 45, 
    title: "Haier Front Load Washer", 
    price: "95,000", 
    location: "Nagar", 
    time: "2 days ago", 
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D", 
    category: "Appliances" 
  },
  { 
    id: 46, 
    title: "Philips Air Fryer XXL", 
    price: "45,000", 
    location: "Astore", 
    time: "4 days ago", 
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400", 
    category: "Appliances" 
  }

  // Add more items for Books, Pets, Fashion, etc., following this same pattern
];