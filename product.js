// =====================
// PRODUCTS DATA
// =====================
const products = [
  { name: "HP Victus AMD Ryzen 7, 6GB RTX 4050, 16GB", price: "₹79,900", image: "https://m.media-amazon.com/images/I/71r2ySSfgBL._SY450_.jpg", category: "Laptops", description: "Powerful gaming laptop with AMD Ryzen 7 processor and dedicated RTX 4050 GPU. Perfect for gaming, video editing and heavy multitasking." },
  { name: "boAt Nirvana Zenith Pro (2025), 50dB Hybrid ANC, Spatial Audio", price: "₹2,999", image: "https://m.media-amazon.com/images/I/41QwSzPBJOL._SY300_SX300_QL70_FMwebp_.jpg", category: "Electronics", description: "Premium wireless earbuds with 50dB hybrid ANC and spatial audio. Up to 40 hours total playback with fast charging support." },
  { name: "Logitech G502 Hero High Performance Wired Gaming Mouse", price: "₹2,799", image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics", description: "High performance gaming mouse with HERO 25K sensor. Features 11 programmable buttons and adjustable weight system." },
  { name: "MSI Crosshair A16, Ryzen 9, RTX 5060, 16GB/1TB NVMe", price: "₹1,24,990", image: "https://m.media-amazon.com/images/I/51EWytLLqAL._SY450_.jpg", category: "Laptops", description: "Top tier gaming laptop with latest Ryzen 9 processor and RTX 5060 GPU. Features a stunning QHD+ 240Hz display for competitive gaming." },
  { name: "Wembley Rock Crawler Monster Truck Remote Control Car", price: "₹2,499", image: "https://m.media-amazon.com/images/I/41YNE+k+oEL._SY300_SX300_QL70_FMwebp_.jpg", category: "Toys", description: "All terrain RC monster truck with powerful motor and shock absorbers. Works on sand, grass, mud and rocky surfaces." },
  { name: "Y39 5G (Lotus Purple, 8GB RAM, 128GB Storage)", price: "₹15,999", image: "https://m.media-amazon.com/images/I/51Kk6rjcOXL._SX425_.jpg", category: "Mobiles", description: "Sleek 5G smartphone with 8GB RAM and 128GB storage. Features a stunning display and long lasting battery life." },
  { name: "Nike Downshifter 13 Running Shoes", price: "₹4,295", image: "https://m.media-amazon.com/images/I/6149-ZNfTKL._SY535_.jpg", category: "Fashion", description: "Lightweight running shoes with breathable mesh upper and responsive cushioning. Designed for everyday training and casual wear." },
  { name: "Samsung Galaxy S25 Ultra 5G AI Smartphone", price: "₹1,50,999", image: "https://m.media-amazon.com/images/I/71rs4Aer71L._SX425_.jpg", category: "Mobiles", description: "Samsung's flagship AI smartphone with built in S Pen, 200MP camera and Snapdragon 8 Elite processor. The ultimate Android experience." },
  { name: "Tommy Hilfiger Multifunction Navy Dial Stainless Steel Watch", price: "₹10,999", image: "https://m.media-amazon.com/images/I/51bbLkXsL1L._SX679_.jpg", category: "Fashion", description: "Classic multifunction watch with navy dial and stainless steel bracelet. Water resistant with chronograph functionality." },
  { name: "Marshall Kilburn II 36W Portable Bluetooth Speaker", price: "₹21,999", image: "https://m.media-amazon.com/images/I/31RnuvCDlhL._SX300_SY300_QL70_FMwebp_.jpg", category: "Electronics", description: "Iconic portable speaker with 36W powerful sound and signature Marshall design. Up to 20 hours battery with multi host functionality." },
  { name: "NEXA Fronx Compact SUV", price: "₹8,67,000", image: "https://img.autocarindia.com/mmv_images/colors/20250620010815_Maruti_Suzuki_Fronx_Opulent_Red[1].jpg?w=640&q=75", category: "Automotive", description: "Stylish compact SUV with bold coupe design and feature packed interior. Available with petrol and mild hybrid engine options." },
  { name: "Voltas Vectra Elite 2 Ton 3 Star Inverter Split AC", price: "₹46,990", image: "https://m.media-amazon.com/images/I/61nv5TqjBoL._SX466_.jpg", category: "Appliances", description: "Energy efficient inverter AC with 4 in 1 adjustable modes. Features anti dust filter and auto cleanser for low maintenance." },
  { name: "Logitech G102 USB LightSync Gaming Mouse with RGB", price: "₹1,499", image: "https://m.media-amazon.com/images/I/61RYwHoeHjL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics", description: "Budget friendly gaming mouse with LightSync RGB and 8000 DPI optical sensor. Lightweight design at just 85 grams." },
  { name: "Havells Aqua Plus Electric Kettle 1.2 Litre, 1250W", price: "₹1,499", image: "https://m.media-amazon.com/images/I/31S74o1sCSS._SX300_SY300_QL70_FMwebp_.jpg", category: "Appliances", description: "Fast boiling electric kettle with 1250W power and auto shutoff safety feature. Food grade stainless steel interior." },
  { name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", price: "₹24,990", image: "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp", category: "Electronics", description: "Industry leading noise cancelling headphones with 30 hour battery life. Features multipoint connection and crystal clear call quality." },
  { name: "Tommy Hilfiger Men Black Dial Quartz Multifunction Watch", price: "₹14,299", image: "https://m.media-amazon.com/images/I/71TtTKwu0PL._SY741_.jpg", category: "Fashion", description: "Premium quartz watch with black dial and leather strap. Features day date display and elegant Tommy Hilfiger styling." },
  { name: "Samsung 653L 3 Star Frost Free Double Door Fridge", price: "₹79,499", image: "https://m.media-amazon.com/images/I/61Cblx5LWAL._SX466_.jpg", category: "Appliances", description: "Large capacity frost free refrigerator with convertible 5 in 1 modes. Features digital inverter technology for energy savings." },
  { name: "Realme Neckband Pro Bluetooth Earphones with ENC", price: "₹1,299", image: "https://m.media-amazon.com/images/I/31K5oAhDs3L._SY300_SX300_QL70_FMwebp_.jpg", category: "Electronics", description: "Comfortable neckband earphones with environmental noise cancellation and fast charging. Up to 30 hours playback on single charge." }
];


const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products[id];

document.querySelector("#prodName").textContent = product.name;
document.querySelector("#prodPrice").textContent = product.price;
document.querySelector("#prodImage").src = product.image;
document.querySelector("#prodDescription").textContent = product.description;
document.title = product.name;