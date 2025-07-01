import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  Zap,
  Target,
  Globe,
  BarChart3,
  CheckCircle
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Percepatan Pengembangan',
      description: 'Reduksi 60% waktu pengembangan produk baru dengan API yang sudah terintegrasi',
      metric: '60%',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Efisiensi Biaya',
      description: 'Penghematan biaya integrasi hingga 40% dengan eliminasi integrasi point-to-point',
      metric: '40%',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Keamanan Terpusat',
      description: 'Standardisasi keamanan API dengan compliance BUMN dan regulasi nasional',
      metric: '100%',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Peningkatan ARPU',
      description: 'Mendukung strategi konvergensi untuk meningkatkan Average Revenue Per User',
      metric: '25%',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const operationalBenefits = [
    {
      icon: Target,
      title: 'Konsistensi Data',
      description: 'Unified data models across all Telkom Group products'
    },
    {
      icon: Globe,
      title: 'Skalabilitas Global',
      description: 'Platform yang dapat menangani pertumbuhan hingga 200M+ users'
    },
    {
      icon: BarChart3,
      title: 'Analytics Terpadu',
      description: 'Real-time insights dan monitoring untuk semua API endpoints'
    },
    {
      icon: Users,
      title: 'Developer Experience',
      description: 'Portal developer yang comprehensive dengan dokumentasi lengkap'
    }
  ];

  const impactMetrics = [
    { label: 'API Response Time', value: '<100ms', trend: '+15%' },
    { label: 'System Uptime', value: '99.9%', trend: '+2%' },
    { label: 'Integration Projects', value: '200+', trend: '+300%' },
    { label: 'Developer Satisfaction', value: '95%', trend: '+45%' }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Manfaat <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Strategis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform "Conected" memberikan value proposition yang signifikan 
            untuk transformasi digital Telkom Indonesia dengan ROI yang terukur.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Operational Benefits */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Keunggulan Operasional</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {operationalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Impact Metrics</h3>
            <p className="text-lg opacity-90">
              Hasil yang terukur dari implementasi platform "Conected"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm opacity-80 mb-2">{metric.label}</div>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="h-4 w-4 text-green-300" />
                  <span className="text-green-300 text-sm font-medium">{metric.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Return on Investment</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Investasi dalam platform "Conected" menghasilkan ROI yang signifikan 
                melalui efisiensi operasional dan percepatan time-to-market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Implementation Cost</span>
                  <span className="text-2xl font-bold text-gray-900">$2.5M</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">Annual Savings</span>
                  <span className="text-2xl font-bold text-green-600">$8.5M</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">Payback Period</span>
                  <span className="text-2xl font-bold text-blue-600">4 Months</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-4">340%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">3-Year ROI</div>
                <p className="text-gray-600">
                  Based on operational efficiency gains and reduced integration costs
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  'Reduced development time: 60%',
                  'Lower integration costs: 40%',
                  'Improved system reliability: 25%',
                  'Enhanced developer productivity: 50%'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;