// Sample products data
const products = [
  // HOME & ESSENTIALS
  {
    id: 1,
    name: "Classic Ceramic Coffee Mug",
    price: 199,
    category: "Home",
    description: "Matte finish ceramic mug with 350ml capacity, ideal for daily coffee lovers."
  },
  {
    id: 2,
    name: "Premium Cotton Bath Towel",
    price: 349,
    category: "Essentials",
    description: "Soft and super absorbent cotton towel with long-lasting comfort."
  },
  {
    id: 3,
    name: "Scented Soy Wax Candle",
    price: 299,
    category: "Home",
    description: "Lavender-scented soy wax candle with 40-hour burn time."
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle (750ml)",
    price: 499,
    category: "Essentials",
    description: "Insulated, leakproof stainless steel bottle ideal for travel and daily use."
  },
  {
    id: 5,
    name: "Desk Organizer Wooden Tray",
    price: 249,
    category: "Home",
    description: "Minimalist wooden desk organizer for pens, keys, and accessories."
  },

  // ELECTRONICS & ACCESSORIES
  {
    id: 6,
    name: "Fast Charging USB-C Cable",
    price: 199,
    category: "Electronics",
    description: "Durable nylon-braided USB-C cable (1.2m) for fast charging and data transfer."
  },
  {
    id: 7,
    name: "Wireless Bluetooth Earbuds",
    price: 699,
    category: "Electronics",
    description: "Compact wireless earbuds with touch controls and noise isolation."
  },
  {
    id: 8,
    name: "Adjustable Mobile Holder Stand",
    price: 149,
    category: "Electronics",
    description: "Universal mobile holder stand with adjustable angles for desk and car use."
  },
  {
    id: 9,
    name: "RGB Gaming Mousepad",
    price: 399,
    category: "Electronics",
    description: "Large RGB gaming mousepad with smooth surface and LED lighting effects."
  },

  // FASHION & LIFESTYLE
  {
    id: 10,
    name: "Men's Graphic T-Shirt",
    price: 599,
    category: "Fashion",
    description: "Comfortable cotton graphic t-shirt with modern design and perfect fit."
  },
  {
    id: 11,
    name: "Women's Oversized Hoodie",
    price: 1299,
    category: "Fashion",
    description: "Cozy oversized hoodie made from premium quality fabric with kangaroo pocket."
  },
  {
    id: 12,
    name: "Classic Black UV Sunglasses",
    price: 799,
    category: "Fashion",
    description: "Stylish UV protection sunglasses with lightweight frame and polarized lenses."
  },
  {
    id: 13,
    name: "Sports Wristband (Pair)",
    price: 199,
    category: "Fashion",
    description: "Absorbent sports wristbands perfect for workouts and outdoor activities."
  },

  // SNACKS & BEVERAGES
  {
    id: 14,
    name: "Nescafé Instant Coffee (100g)",
    price: 299,
    category: "Snacks",
    description: "Premium instant coffee with rich aroma and smooth taste."
  },
  {
    id: 15,
    name: "Hot-n-Spicy Instant Noodles (Pack of 5)",
    price: 149,
    category: "Snacks",
    description: "Spicy instant noodles with authentic flavors and quick preparation."
  },
  {
    id: 16,
    name: "Organic Himalayan Green Tea",
    price: 399,
    category: "Snacks",
    description: "Pure organic green tea from the Himalayas with antioxidant properties."
  },

  // TOYS & COLLECTIBLES
  {
    id: 17,
    name: "Hot Wheels Die-Cast Car",
    price: 299,
    category: "Toys",
    description: "Detailed die-cast car model with realistic design and smooth rolling wheels."
  },
  {
    id: 18,
    name: "Mini Pull-Back Toy Bike",
    price: 199,
    category: "Toys",
    description: "Fun pull-back action toy bike with realistic details and durable construction."
  },
  {
    id: 19,
    name: "Soft Plush Teddy (20cm)",
    price: 499,
    category: "Toys",
    description: "Cuddly soft plush teddy bear perfect for children and collectors."
  },

  // STATIONERY
  {
    id: 20,
    name: "Premium Hardcover Notebook",
    price: 349,
    category: "Stationery",
    description: "High-quality hardcover notebook with lined pages and leather-like finish."
  }
];

/**
 * Gets all products
 * @returns {Array} - Array of products
 */
function getProducts() {
    return products;
}

/**
 * Loads and displays products in a grid
 * @param {Array} productsToDisplay - Products to display
 * @param {string} containerId - ID of the container element
 */
function displayProducts(productsToDisplay, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                <a href="product-details.html?id=${product.id}" class="view-details">View Details</a>
            </div>
        `;
        container.appendChild(productCard);
    });
}

/**
 * Loads featured products on the home page
 */
function loadFeaturedProducts() {
    const featuredProducts = products.slice(0, 6); // First 6 products
    displayProducts(featuredProducts, 'featuredProducts');
}

/**
 * Loads all products on the products page
 */
function loadAllProducts() {
    displayProducts(products, 'productsGrid');
}

/**
 * Searches products by title
 * @param {string} query - Search query
 * @returns {Array} - Filtered products
 */
function searchProducts(query) {
    if (!query) return products;
    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
}

/**
 * Filters products by category
 * @param {string} category - Category to filter by
 * @returns {Array} - Filtered products
 */
function filterByCategory(category) {
    if (!category) return products;
    return products.filter(product => product.category === category);
}

/**
 * Sorts products by criteria
 * @param {Array} productsToSort - Products to sort
 * @param {string} sortBy - Sort criteria
 * @returns {Array} - Sorted products
 */
function sortProducts(productsToSort, sortBy) {
    const sorted = [...productsToSort];

    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}

/**
 * Applies all filters and search
 */
function applyFilters() {
    let filteredProducts = products;

    // Apply search
    const searchQuery = document.getElementById('productSearch')?.value || '';
    filteredProducts = searchProducts(searchQuery);

    // Apply category filter
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    filteredProducts = filterByCategory(categoryFilter);

    // Apply sorting
    const sortFilter = document.getElementById('sortFilter')?.value || '';
    filteredProducts = sortProducts(filteredProducts, sortFilter);

    displayProducts(filteredProducts, 'productsGrid');
}

/**
 * Loads product details on product details page
 */
function loadProductDetails() {
    const productId = parseInt(getUrlParameter('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById('productDetail').innerHTML = '<p>Product not found.</p>';
        return;
    }

    document.getElementById('productDetail').innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <p class="product-price">${formatPrice(product.price)}</p>
                <p class="product-description">${product.description}</p>
                <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;

    // Load recommended products (excluding current product)
    const recommended = products.filter(p => p.id !== productId).slice(0, 4);
    displayProducts(recommended, 'recommendedProducts');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Home page
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }

    // Products page
    if (document.getElementById('productsGrid')) {
        loadAllProducts();

        // Add filter event listeners
        document.getElementById('productSearch')?.addEventListener('input', applyFilters);
        document.getElementById('categoryFilter')?.addEventListener('change', applyFilters);
        document.getElementById('sortFilter')?.addEventListener('change', applyFilters);
    }

    // Product details page
    if (document.getElementById('productDetail')) {
        loadProductDetails();
    }

    // Global search
    document.getElementById('searchBtn')?.addEventListener('click', () => {
        const query = document.getElementById('searchInput').value;
        if (query.trim()) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    });

    // Handle search from URL parameter
    const urlSearch = getUrlParameter('search');
    if (urlSearch && document.getElementById('productSearch')) {
        document.getElementById('productSearch').value = urlSearch;
        applyFilters();
    }

    // Handle category from URL parameter
    const urlCategory = getUrlParameter('category');
    if (urlCategory && document.getElementById('categoryFilter')) {
        document.getElementById('categoryFilter').value = urlCategory;
        applyFilters();
    }
});
