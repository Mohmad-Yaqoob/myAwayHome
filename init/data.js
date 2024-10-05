const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Luxurious Penthouse",
    description:
      "Stay in this luxurious penthouse with stunning city views. Ideal for those who enjoy the finer things in life.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee9812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVudGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Charming Countryside B&B",
    description:
      "Escape to the countryside and enjoy a stay in this charming bed and breakfast. Perfect for a peaceful retreat.",
    image: "https://images.unsplash.com/photo-1552753753-103f7d2bdfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291bnRyeXNpZGUlMjBob3RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 600,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Luxury Ski Chalet",
    description:
      "Hit the slopes and then relax in this luxury ski chalet. A winter wonderland awaits.",
    image: "https://images.unsplash.com/photo-1502810190503-830027ee9bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2tpJTIwY2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Chamonix",
    country: "France",
  },
  {
    title: "Charming City Apartment",
    description:
      "Stay in this charming city apartment, close to all the major attractions. Perfect for a city break.",
    image: "https://images.unsplash.com/photo-1597002121125-81b3c44ddda3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Rustic Farmhouse Retreat",
    description:
      "Get away from it all in this rustic farmhouse. Surrounded by rolling fields, it's the perfect countryside escape.",
    image: "https://images.unsplash.com/photo-1616628196092-f7d0f3a08a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWhvdXNlJTIwZXNjYXBlJTIwcnVzdGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Tropical Island Villa",
    description:
      "Relax in this tropical island villa, surrounded by lush greenery and crystal-clear waters. A paradise on earth.",
    image: "https://images.unsplash.com/photo-1519679144162-7a14b9e5c9e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Cozy Mountain Lodge",
    description:
      "Enjoy a cozy stay in this mountain lodge, perfect for a winter getaway. Stunning views and cozy interiors await.",
    image: "https://images.unsplash.com/photo-1533115075094-0f3b1e1e0c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlJTIwbW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Stylish Urban Studio",
    description:
      "Stay in this stylish studio in the heart of the city. Perfect for solo travelers or couples looking for a chic urban escape.",
    image: "https://images.unsplash.com/photo-1519996525730-9c5c9f94a15e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXJiYW4lMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 700,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Beachside Bungalow",
    description:
      "Stay just steps away from the beach in this charming bungalow. Perfect for a relaxing seaside escape.",
    image: "https://images.unsplash.com/photo-1551918120-9730c2e9ed32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNoJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Maui",
    country: "United States",
  },
  {
    title: "Countryside Cottage",
    description:
      "Experience the charm of the countryside in this cozy cottage. Perfect for a peaceful getaway.",
    image: "https://images.unsplash.com/photo-1501631957811-9588dfd3af7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y291bnRyeXNpZGUlMjBjb3R0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Lake District",
    country: "United Kingdom",
  }
];

module.exports = { data: sampleListings };