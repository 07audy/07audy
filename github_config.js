// JajanKu - Configuration File

// ============================================
// KONFIGURASI UTAMA
// ============================================

const CONFIG = {
    // Nomor WhatsApp Penjual (Format: 628xxx tanpa tanda + atau -)
    SELLER_WHATSAPP: '6285641574526',
    
    // Informasi Toko
    SHOP_INFO: {
        name: 'Dapur Sari',
        tagline: 'Kue Basah Tradisional',
        address: 'Jl. Kelambir V, Medan',
        phone: '0856-4157-4526',
        openHours: '06:00 - 18:00',
        established: '2015'
    },
    
    // Data Produk
    PRODUCTS: [
        {
            id: '1',
            name: 'Klepon',
            price: 15000,
            unit: '10pcs',
            image: '🍡',
            description: 'Kue tradisional isi gula merah dengan taburan kelapa',
            stock: 20,
            available: true
        },
        {
            id: '2',
            name: 'Lemper Ayam',
            price: 20000,
            unit: '10pcs',
            image: '🌯',
            description: 'Ketan isi ayam bumbu pedas dibungkus daun pisang',
            stock: 15,
            available: true
        },
        {
            id: '3',
            name: 'Onde-Onde',
            price: 18000,
            unit: '10pcs',
            image: '⚫',
            description: 'Bola-bola ketan wijen isi kacang hijau',
            stock: 25,
            available: true
        },
        {
            id: '4',
            name: 'Lapis Legit',
            price: 35000,
            unit: '1 loyang kecil',
            image: '🍰',
            description: 'Kue lapis premium dengan rempah pilihan',
            stock: 5,
            available: true
        },
        {
            id: '5',
            name: 'Nagasari',
            price: 25000,
            unit: '10pcs',
            image: '🍌',
            description: 'Kue pisang tepung beras dibungkus daun pisang',
            stock: 12,
            available: true
        },
        {
            id: '6',
            name: 'Kue Lumpur',
            price: 22000,
            unit: '10pcs',
            image: '🧁',
            description: 'Kue basah kentang dengan topping kismis',
            stock: 18,
            available: true
        }
    ],
    
    // SVG Icons
    ICONS: {
        cart: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
        phone: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>',
        clock: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        map: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
        plus: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>',
        minus: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>',
        x: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',
        check: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
    }
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}