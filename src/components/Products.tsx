import React, { useState } from 'react';
import { 
  Smartphone, 
  Wifi, 
  Satellite, 
  Building, 
  ShoppingBag, 
  GraduationCap,
  Phone,
  Monitor,
  Shield,
  Cloud
} from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      name: 'Telkomsel',
      category: 'Mobile & Digital Services',
      icon: Smartphone,
      color: 'from-red-500 to-red-600',
      customers: '159.3M',
      description: 'Layanan seluler terdepan dengan solusi digital komprehensif untuk konsumen dan enterprise.',
      services: [
        { name: 'SIMPATI', icon: Phone, desc: 'Kartu prabayar terpopuler' },
        { name: 'Halo', icon: Phone, desc: 'Layanan pascabayar premium' },
        { name: 'by.U', icon: Smartphone, desc: 'Digital native experience' },
        { name: 'Enterprise Solutions', icon: Building, desc: 'Solusi B2B terintegrasi' }
      ],
      apis: [
        'User Profile Management',
        'Subscription Management',
        'Number Verification',
        'Digital Services Integration'
      ]
    },
    {
      name: 'IndiHome',
      category: 'Fixed Broadband & Entertainment',
      icon: Wifi,
      color: 'from-blue-500 to-blue-600',
      customers: '10.1M',
      description: 'Pemimpin pasar fixed broadband dengan layanan hiburan rumah terintegrasi.',
      services: [
        { name: 'Internet', icon: Wifi, desc: 'Kecepatan hingga 1Gbps' },
        { name: 'TV Interaktif', icon: Monitor, desc: 'Konten premium & lokal' },
        { name: 'Telepon', icon: Phone, desc: 'Layanan telepon rumah' },
        { name: 'Bundling', icon: ShoppingBag, desc: 'Paket Triple Play' }
      ],
      apis: [
        'Service Status Monitoring',
        'Billing Information',
        'Package Management',
        'Technical Support'
      ]
    },
    {
      name: 'Telkomsat',
      category: 'Satellite Communication',
      icon: Satellite,
      color: 'from-green-500 to-green-600',
      customers: 'Enterprise',
      description: 'Penyedia layanan satelit dengan coverage Indonesia dan Asia.',
      services: [
        { name: 'Satellite Control', icon: Monitor, desc: 'Pusat kontrol satelit' },
        { name: 'VSAT Services', icon: Satellite, desc: 'Konektivitas satelit' },
        { name: 'Remote Monitoring', icon: Shield, desc: 'Monitoring 24/7' },
        { name: 'Global Partnership', icon: Building, desc: 'Kemitraan internasional' }
      ],
      apis: [
        'Satellite Link Status',
        'Service Provisioning',
        'Network Monitoring',
        'Bandwidth Management'
      ]
    },
    {
      name: 'Enterprise Solutions',
      category: 'Business & Digital Solutions',
      icon: Building,
      color: 'from-purple-500 to-purple-600',
      customers: 'B2B',
      description: 'Solusi enterprise lengkap untuk transformasi digital bisnis.',
      services: [
        { name: 'Cloud Services', icon: Cloud, desc: 'IaaS, PaaS, SaaS' },
        { name: 'Data Center', icon: Building, desc: 'Infrastruktur berstandar internasional' },
        { name: 'Cybersecurity', icon: Shield, desc: 'Keamanan siber menyeluruh' },
        { name: 'IoT Solutions', icon: Monitor, desc: 'Solusi IoT kustom' }
      ],
      apis: [
        'VM Provisioning',
        'Resource Monitoring',
        'IoT Device Management',
        'Security Analytics'
      ]
    },
    {
      name: 'MyTelkomsel',
      category: 'Mobile Application',
      icon: Smartphone,
      color: 'from-pink-500 to-pink-600',
      customers: '50M+',
      description: 'Aplikasi mobile resmi Telkomsel untuk manajemen akun, pembelian paket, dan layanan digital.',
      services: [
        { name: 'Akun & Profil', icon: Smartphone, desc: 'Manajemen akun dan data pelanggan' },
        { name: 'Pembelian Paket', icon: ShoppingBag, desc: 'Beli paket data, telepon, SMS' },
        { name: 'Reward & Loyalty', icon: GraduationCap, desc: 'Tukar poin dan reward' },
        { name: 'Digital Services', icon: Cloud, desc: 'Akses layanan digital Telkomsel' }
      ],
      apis: [
        'User Authentication',
        'Package Purchase',
        'Reward Management',
        'Usage Analytics'
      ]
    },
    {
      name: 'Pijar',
      category: 'Edutech',
      icon: GraduationCap,
      color: 'from-yellow-400 to-yellow-600',
      customers: '2M+',
      description: 'Platform edukasi digital untuk pelajar, guru, dan institusi pendidikan di Indonesia.',
      services: [
        { name: 'Kelas Online', icon: Monitor, desc: 'Pembelajaran daring interaktif' },
        { name: 'Tryout & Ujian', icon: Shield, desc: 'Simulasi ujian dan tryout digital' },
        { name: 'Materi & Modul', icon: Cloud, desc: 'Akses ribuan materi pembelajaran' },
        { name: 'Sertifikasi', icon: GraduationCap, desc: 'Program sertifikasi digital' }
      ],
      apis: [
        'User Enrollment',
        'Content Delivery',
        'Exam Management',
        'Certification Issuance'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Produk <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Terintegrasi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform "Conected" mengintegrasikan semua produk dan layanan utama 
            Telkom Group dalam satu ekosistem API yang terpadu.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedProduct(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProduct === index
                    ? 'transform scale-105'
                    : 'hover:transform hover:scale-105'
                }`}
              >
                <div className={`bg-gradient-to-br ${product.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <Icon className="h-12 w-12 mb-4 text-gray-900" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-sm opacity-90 mb-3 text-gray-700">{product.category}</p>
                  <div className="bg-white/20 rounded-lg p-2 text-center">
                    <span className="text-lg font-bold text-gray-900">{product.customers}</span>
                    <div className="text-xs opacity-80 text-gray-700">Customers</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Product Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`bg-gradient-to-r ${products[selectedProduct].color} p-8 text-white`}>
            <div className="flex items-center space-x-4 mb-4">
              {React.createElement(products[selectedProduct].icon, { className: "h-16 w-16" })}
              <div>
                <h3 className="text-3xl font-bold">{products[selectedProduct].name}</h3>
                <p className="text-lg opacity-90">{products[selectedProduct].category}</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">{products[selectedProduct].description}</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Services */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Layanan Utama</h4>
                <div className="space-y-4">
                  {products[selectedProduct].services.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className={`bg-gradient-to-r ${products[selectedProduct].color} p-2 rounded-lg`}>
                          <ServiceIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">{service.name}</h5>
                          <p className="text-gray-600 text-sm">{service.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* APIs */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h4>
                <div className="space-y-3">
                  {products[selectedProduct].apis.map((api, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg hover:border-red-500 hover:bg-red-50 transition-all">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{api}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className={`bg-gradient-to-r ${products[selectedProduct].color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                    Explore APIs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;