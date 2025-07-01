import React from 'react';
import { Target, Zap, Shield, Globe, Users, Cog } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: 'Sentralisasi',
      description: 'Menciptakan katalog tunggal yang dapat ditemukan dari semua API produk internal Telkom.'
    },
    {
      icon: Cog,
      title: 'Standardisasi',
      description: 'Menegakkan prinsip desain API, dokumentasi, dan protokol keamanan yang konsisten.'
    },
    {
      icon: Zap,
      title: 'Akselerasi',
      description: 'Mempercepat pengembangan dan penerapan layanan terintegrasi baru oleh tim internal.'
    },
    {
      icon: Shield,
      title: 'Efisiensi',
      description: 'Mengurangi biaya operasional yang terkait dengan integrasi point-to-point.'
    },
    {
      icon: Globe,
      title: 'Visibilitas',
      description: 'Memberikan gambaran komprehensif tentang ketergantungan layanan internal.'
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Memfasilitasi kerja sama lintas unit bisnis dalam ekosistem Telkom Group.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Conected</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Platform "Conected" diusulkan sebagai pusat agregasi REST API internal yang krusial bagi 
            PT Telkom Indonesia (Persero) Tbk. Platform ini dirancang untuk menyatukan API-API produk 
            yang tersebar di seluruh Telkom Group.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Visi Strategis</h3>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Pentingnya strategis "Conected" melampaui sekadar agregasi teknis; platform ini berfungsi 
              sebagai fondasi bagi agenda transformasi digital Telkom yang lebih luas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-2">Lebih Ramping</h4>
                <p className="text-sm opacity-90">Optimalisasi proses operasional internal</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-2">Lebih Gesit</h4>
                <p className="text-sm opacity-90">Pengembangan layanan yang lebih cepat</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-2">Customer-Centric</h4>
                <p className="text-sm opacity-90">Fokus pada pengalaman pelanggan terbaik</p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-red-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{objective.title}</h3>
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </div>
            );
          })}
        </div>

        {/* Telkom Context */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ekosistem Telkom Group</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Telkom Indonesia mengoperasikan portofolio komprehensif yang mencakup Telekomunikasi, 
                Informasi, Media, Edutainment, dan Layanan (TIMES), yang disampaikan melalui perusahaan 
                induk dan 12 anak perusahaannya.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Telkomsel - Layanan Seluler & Digital</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">IndiHome - Fixed Broadband & Entertainment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Telkomsat - Satellite Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Enterprise & Digital Solutions</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">170M+</div>
                  <div className="text-gray-600 text-sm">Total Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                  <div className="text-gray-600 text-sm">Subsidiaries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">66.7%</div>
                  <div className="text-gray-600 text-sm">Broadband Market Share</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                  <div className="text-gray-600 text-sm">Business Segments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;