const sampleListings = [
  {
    title: "Himalayan Wooden Retreat",
    description: "A peaceful wooden cabin surrounded by pine forests and snow-capped mountains.",
    image: {
      filename: "listingimage",
      url: "https://content.jdmagicbox.com/v2/comp/kullu/p6/9999p1902.1902.171204234810.s1p6/catalogue/manali-homestay-haripur-kullu-home-stay-5t2kcf5r5u.jpg",
    },
    price: 2800,
    location: "Manali, Himachal Pradesh, India",
    country: "India",
    categories: ["mountains", "cabins", "trending", "camping"],
  },
  {
    title: "Luxury Lake View Villa",
    description: "Experience royal luxury with breathtaking lake views and serene surroundings.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/2e/e2/dc/swaroop-vilas-boutique.jpg?w=1200&h=-1&s=1",
    },
    price: 5200,
    location: "Udaipur, Rajasthan, India",
    country: "India",
    categories: ["iconic cities", "amazing pools", "luxury", "trending"],
  },
  {
    title: "Tea Garden Homestay",
    description: "Stay amidst lush green tea gardens and enjoy cool mountain air.",
    image: {
      filename: "listingimage",
      url: "https://r1imghtlak.ibcdn.com/13f8b580933011e9bc790242ac110006.jpg?&output-quality=75",
    },
    price: 1900,
    location: "Munnar, Kerala, India",
    country: "India",
    categories: ["farms", "mountains", "nature", "trending"],
  },
  {
    title: "Desert Star Camp",
    description: "Sleep under the stars in a luxury tent in the heart of the desert.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/fd/cd/db/caption.jpg?w=900&h=500&s=1",
    },
    price: 2400,
    location: "Jaisalmer, Rajasthan, India",
    country: "India",
    categories: ["camping", "trending", "unique stays", "desert"],
  },
  {
    title: "Backwater Bliss Villa",
    description: "A calm and scenic villa located beside tranquil backwaters.",
    image: {
      filename: "listingimage",
      url: "https://cdn.tajhotels.com/images/ocl5w36p/prod5/5a02df4dcbffd100a52dc1287ac992323c6baf2c-1720x1112.jpg?w=480",
    },
    price: 4500,
    location: "Alappuzha, Kerala, India",
    country: "India",
    categories: ["amazing pools", "nature", "farms", "trending"],
  },
  {
    title: "Hilltop Glass House",
    description: "A modern glass house offering panoramic valley views.",
    image: {
      filename: "listingimage",
      url: "https://live.staticflickr.com/4046/4708966947_9a34e6ecf9_b.jpg",
    },
    price: 4900,
    location: "Ooty, Tamil Nadu, India",
    country: "India",
    categories: ["mountains", "luxury", "iconic cities", "trending"],
  },
  {
    title: "Forest Eco Stay",
    description: "An eco-friendly stay deep inside a dense forest reserve.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/508845146.jpg?k=a3da8cc4cea62f1a0ef4c754afd80862197a693b32862f847edadd00532bdab2&o=",
    },
    price: 2700,
    location: "Wayanad, Kerala, India",
    country: "India",
    categories: ["nature", "cabins", "farms", "camping"],
  },
  {
    title: "Cliffside Ocean Resort",
    description: "A dramatic cliffside resort with uninterrupted ocean views.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpftintVoZXwT3vCPBeOfe0tzMVlHl89Z5WA&s",
    },
    price: 6000,
    location: "Varkala, Kerala, India",
    country: "India",
    categories: ["beach", "luxury", "amazing pools", "trending"],
  },
  {
    title: "Snow Valley Chalet",
    description: "A cozy chalet perfect for snowfall lovers and winter adventures.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mrPu4ilb2jL6kZVxg35S60vt3TF998nweg&s",
    },
    price: 3800,
    location: "Gulmarg, Jammu & Kashmir, India",
    country: "India",
    categories: ["mountains", "cabins", "trending", "arctic"],
  },
  {
    title: "Riverside Bamboo Cottage",
    description: "A peaceful bamboo cottage beside a flowing river.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/c7/bd/front-view.jpg?w=1200&h=-1&s=1",
    },
    price: 2100,
    location: "Ziro Valley, Arunachal Pradesh, India",
    country: "India",
    categories: ["nature", "camping", "farms", "unique stays"],
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Goa, India",
    country: "India",
    categories: ["beach", "trending", "amazing pools", "rooms"]
  },
  {
    title: "Modern Loft in Mumbai",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Mumbai, India",
    country: "India",
    categories: ["iconic cities", "trending", "rooms", "luxury"]
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Manali, India",
    country: "India",
    categories: ["mountains", "cabins", "trending", "camping"]
  },
  {
    title: "Historic Villa in Jaipur",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Jaipur, India",
    country: "India",
    categories: ["iconic cities", "luxury", "trending", "farms"]
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Coorg, India",
    country: "India",
    categories: ["cabins", "nature", "farms", "camping"]
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Puri, India",
    country: "India",
    categories: ["beach", "trending", "rooms", "nature"]
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Nainital, India",
    country: "India",
    categories: ["mountains", "cabins", "nature", "camping"]
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Bangalore, India",
    country: "India",
    categories: ["iconic cities", "luxury", "trending", "amazing pools"]
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Gulmarg, India",
    country: "India",
    categories: ["mountains", "cabins", "arctic", "trending"]
  },
  {
    title: "Safari Lodge in the Sundarbans",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Sundarbans, India",
    country: "India",
    categories: ["nature", "farms", "trending", "camping"]
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Kolkata, India",
    country: "India",
    categories: ["iconic cities", "rooms", "trending", "heritage"]
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Andaman Islands, India",
    country: "India",
    categories: ["beach", "luxury", "trending", "amazing pools"]
  },
  {
    title: "Charming Cottage",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Shimla, India",
    country: "India",
    categories: ["mountains", "cabins", "trending", "nature"]
  },
  {
    title: "Historic Brownstone in Pune",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Pune, India",
    country: "India",
    categories: ["iconic cities", "rooms", "trending", "heritage"]
  },
  {
    title: "Beachfront Bungalow in Goa",
    description:
      "Relax on the sandy shores of Goa in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Goa, India",
    country: "India",
    categories: ["beach", "luxury", "trending", "amazing pools"]
  },
  {
    title: "Mountain View Cabin in Leh",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Leh, India",
    country: "India",
    categories: ["mountains", "cabins", "arctic", "trending"]
  },
  {
    title: "Art Deco Apartment",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Mumbai, India",
    country: "India",
    categories: ["iconic cities", "rooms", "trending", "luxury"]
  },
  {
    title: "Tropical Villa in Kerala",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Kerala, India",
    country: "India",
    categories: ["farms", "nature", "amazing pools", "trending"]
  },
  {
    title: "Historic Castle in Udaipur",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Udaipur, India",
    country: "India",
    categories: ["iconic cities", "luxury", "heritage", "trending"]
  },
  {
    title: "Desert Oasis in Jaisalmer",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Jaisalmer, India",
    country: "India",
    categories: ["desert", "luxury", "trending", "amazing pools"]
  },
  {
    title: "Rustic Log Cabin in Kashmir",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Kashmir, India",
    country: "India",
    categories: ["mountains", "cabins", "nature", "trending"]
  },
  {
    title: "Beachfront Villa",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Goa, India",
    country: "India",
    categories: ["beach", "luxury", "trending", "amazing pools"]
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Coorg, India",
    country: "India",
    categories: ["cabins", "nature", "farms", "camping"]
  },
  {
    title: "Historic Cottage in Pondicherry",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Pondicherry, India",
    country: "India",
    categories: ["iconic cities", "heritage", "rooms", "trending"]
  },
  {
    title: "Modern Apartment",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Bangalore, India",
    country: "India",
    categories: ["iconic cities", "rooms", "trending", "luxury"]
  },
  {
    title: "Lakefront Cabin",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Uttarakhand, India",
    country: "India",
    categories: ["beach", "luxury", "amazing pools", "trending"]
  },
  {
    title: "Luxury Villa in the Andaman Islands",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Andaman Islands, India",
    country: "India",
    categories: ["beach", "luxury", "amazing pools", "trending"]
  },
  {
    title: "Ski Chalet in Manali",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Manali, India",
    country: "India",
    categories: ["mountains", "cabins", "trending", "arctic"]
  },
  {
    title: "Secluded Beach House in Goa",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Goa, India",
    country: "India",
    categories: ["beach", "nature", "trending", "rooms"]
  },
];

module.exports = { data: sampleListings };