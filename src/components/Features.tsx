import React, { useState } from 'react';
import { 
  Database, 
  Shield, 
  Zap, 
  Code, 
  Monitor, 
  GitBranch, 
  Lock, 
  Globe,
  CheckCircle
} from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      category: 'API Management',
      icon: Database,
      items: [
        {
          icon: Code,
          title: 'RESTful API Standards',
          description: 'Implementasi standar REST API dengan dokumentasi OpenAPI (Swagger) yang komprehensif untuk semua endpoint.'
        },
        {
          icon: GitBranch,
          title: 'Version Control',
          description: 'Sistem versioning API yang robust dengan semantic versioning untuk backward compatibility.'
        },
        {
          icon: Monitor,
          title: 'Real-time Monitoring',
          description: 'Pemantauan performa API secara real-time dengan analytics dan alerting system.'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      items: [
        {
          icon: Lock,
          title: 'OAuth 2.0 Authentication',
          description: 'Sistem otentikasi dan otorisasi berbasis OAuth 2.0 dengan JWT tokens untuk keamanan maksimal.'
        },
        {
          icon: Shield,
          title: 'Data Protection',
          description: 'Enkripsi end-to-end dan compliance dengan standar keamanan BUMN dan regulasi nasional.'
        },
        {
          icon: CheckCircle,
          title: 'Audit Trail',
          description: 'Logging dan audit trail lengkap untuk semua aktivitas API untuk compliance dan troubleshooting.'
        }
      ]
    },
    {
      category: 'Integration & Performance',
      icon: Zap,
      items: [
        {
          icon: Globe,
          title: 'API Gateway',
          description: 'Centralized API Gateway untuk load balancing, rate limiting, dan traffic management.'
        },
        {
          icon: Zap,
          title: 'High Performance',
          description: 'Response time < 100ms dengan 99.9% uptime guarantee untuk critical business operations.'
        },
        {
          icon: Database,
          title: 'Data Consistency',
          description: 'Unified data models dan consistent response formats across all Telkom Group products.'
        }
      ]
    }
  ];

  const benefits = [
    'Reduksi 60% waktu pengembangan integrasi',
    'Peningkatan 40% efisiensi operasional',
    'Standardisasi 100% API internal',
    'Monitoring real-time 24/7'
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fitur <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform "Conected" dilengkapi dengan fitur-fitur canggih untuk mendukung 
            integrasi API yang seamless dan secure di seluruh ekosistem Telkom Group.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{feature.category}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features[activeTab].items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Keunggulan Kompetitif</h3>
              <p className="text-lg mb-8 opacity-90">
                Platform "Conected" memberikan keunggulan strategis yang signifikan 
                dalam transformasi digital Telkom Indonesia.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-80">API Endpoints</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">12</div>
                  <div className="text-sm opacity-80">Integrated Products</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-sm opacity-80">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">&lt;100ms</div>
                  <div className="text-sm opacity-80">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;