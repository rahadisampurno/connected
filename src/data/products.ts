export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  color: string;
  customers: string;
  website: string;
  features: string[];
  endpoints: Endpoint[];
}

export interface Endpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  requestBody?: any;
  responseBody: any;
}

export const products: Product[] = [
  {
    id: 'telkomsel',
    name: 'Telkomsel',
    category: 'Mobile & Digital Services',
    description: 'Operator seluler terbesar di Indonesia dengan 159.3M pelanggan. Menyediakan layanan seluler, digital, dan enterprise solutions yang komprehensif.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Telkomsel_logo_2017.svg/2560px-Telkomsel_logo_2017.svg.png',
    color: 'from-red-500 to-red-600',
    customers: '159.3M',
    website: 'https://www.telkomsel.com',
    features: ['SIMPATI', 'Halo', 'by.U', 'MyTelkomsel', 'Enterprise Solutions'],
    endpoints: [
      {
        id: 'user-profile',
        name: 'User Profile',
        method: 'GET',
        path: '/v1/telkomsel/users/{userId}/profile',
        description: 'Mengambil profil lengkap pengguna Telkomsel termasuk informasi paket, saldo, dan status akun',
        responseBody: {
          userId: 'TSL001',
          name: 'Budi Santoso',
          msisdn: '6281234567890',
          status: 'Active',
          plan: 'Halo+ Flexy',
          balance: 'Rp 150,000',
          dataQuotaGB: 10,
          expiryDate: '2024-12-31'
        }
      },
      {
        id: 'subscription-management',
        name: 'Subscription Management',
        method: 'POST',
        path: '/v1/telkomsel/users/{userId}/subscriptions',
        description: 'Mengelola langganan paket data dan layanan digital pengguna',
        requestBody: {
          packageId: 'DATA_30GB_30D',
          autoRenew: true
        },
        responseBody: {
          subscriptionId: 'SUB001',
          userId: 'TSL001',
          packageId: 'DATA_30GB_30D',
          status: 'Active',
          startDate: '2024-07-01',
          endDate: '2024-07-31'
        }
      },
      {
        id: 'number-verification',
        name: 'Number Verification',
        method: 'POST',
        path: '/v1/telkomsel/network/number-verify',
        description: 'Memverifikasi validitas nomor seluler dan operator jaringan',
        requestBody: {
          msisdn: '6281234567890'
        },
        responseBody: {
          msisdn: '6281234567890',
          isValid: true,
          networkOperator: 'Telkomsel'
        }
      },
      {
        id: 'balance-inquiry',
        name: 'Balance Inquiry',
        method: 'GET',
        path: '/v1/telkomsel/users/{userId}/balance',
        description: 'Mengecek saldo pulsa dan kuota data pengguna secara real-time',
        responseBody: {
          userId: 'TSL001',
          mainBalance: 'Rp 50,000',
          dataQuota: '5.2 GB',
          voiceMinutes: 120,
          smsCount: 50,
          lastUpdated: '2024-07-01T10:30:00Z'
        }
      },
      {
        id: 'usage-history',
        name: 'Usage History',
        method: 'GET',
        path: '/v1/telkomsel/users/{userId}/usage',
        description: 'Mendapatkan riwayat penggunaan layanan dalam periode tertentu',
        responseBody: {
          userId: 'TSL001',
          period: '2024-07',
          dataUsageGB: 8.5,
          voiceMinutes: 450,
          smsCount: 125,
          totalSpent: 'Rp 125,000'
        }
      },
      {
        id: 'package-catalog',
        name: 'Package Catalog',
        method: 'GET',
        path: '/v1/telkomsel/packages',
        description: 'Menampilkan katalog paket data dan layanan yang tersedia',
        responseBody: {
          packages: [
            {
              id: 'DATA_10GB_30D',
              name: 'Internet 10GB',
              price: 'Rp 85,000',
              validity: '30 days',
              quota: '10 GB'
            }
          ]
        }
      },
      {
        id: 'payment-history',
        name: 'Payment History',
        method: 'GET',
        path: '/v1/telkomsel/users/{userId}/payments',
        description: 'Riwayat pembayaran dan transaksi pengguna',
        responseBody: {
          userId: 'TSL001',
          payments: [
            {
              transactionId: 'TXN001',
              amount: 'Rp 85,000',
              date: '2024-07-01',
              description: 'Internet 10GB Package'
            }
          ]
        }
      },
      {
        id: 'roaming-status',
        name: 'Roaming Status',
        method: 'GET',
        path: '/v1/telkomsel/users/{userId}/roaming',
        description: 'Status dan pengaturan layanan roaming internasional',
        responseBody: {
          userId: 'TSL001',
          roamingEnabled: true,
          currentCountry: 'Singapore',
          roamingPackage: 'ASEAN 7 Days',
          remainingQuota: '2.5 GB'
        }
      },
      {
        id: 'device-management',
        name: 'Device Management',
        method: 'GET',
        path: '/v1/telkomsel/users/{userId}/devices',
        description: 'Manajemen perangkat yang terdaftar pada akun pengguna',
        responseBody: {
          userId: 'TSL001',
          devices: [
            {
              deviceId: 'DEV001',
              model: 'iPhone 14',
              imei: '123456789012345',
              status: 'Active',
              lastSeen: '2024-07-01T10:00:00Z'
            }
          ]
        }
      },
      {
        id: 'loyalty-points',
        name: 'Loyalty Points',
        method: 'GET',
        path: '/v1/telkomsel/users/{userId}/points',
        description: 'Informasi poin loyalitas dan reward yang tersedia',
        responseBody: {
          userId: 'TSL001',
          totalPoints: 2500,
          tier: 'Gold',
          availableRewards: [
            {
              id: 'REW001',
              name: 'Free 1GB Data',
              pointsRequired: 500
            }
          ]
        }
      }
    ]
  },
  {
    id: 'indihome',
    name: 'IndiHome',
    category: 'Fixed Broadband',
    description: 'Layanan internet rumah, TV interaktif, dan telepon dari Telkom Indonesia.',
    logo: '',
    color: 'from-red-400 to-orange-500',
    customers: '10M+',
    website: 'https://indihome.co.id',
    features: ['Internet Fiber', 'TV Interaktif', 'Telepon Rumah'],
    endpoints: [
      {
        id: 'check-coverage',
        name: 'Check Coverage',
        method: 'GET',
        path: '/v1/indihome/coverage',
        description: 'Cek ketersediaan layanan IndiHome di area tertentu',
        responseBody: { available: true, area: 'Jakarta Selatan' }
      },
      {
        id: 'subscribe',
        name: 'Subscribe',
        method: 'POST',
        path: '/v1/indihome/subscribe',
        description: 'Pendaftaran pelanggan baru IndiHome',
        requestBody: { name: 'string', address: 'string' },
        responseBody: { customerId: 'INDI001', status: 'Registered' }
      }
    ]
  },
  {
    id: 'linkaja',
    name: 'LinkAja',
    category: 'Digital Payment',
    description: 'Aplikasi pembayaran digital dan dompet elektronik untuk transaksi sehari-hari.',
    logo: '',
    color: 'from-red-500 to-pink-500',
    customers: '80M+',
    website: 'https://www.linkaja.id',
    features: ['Pembayaran', 'Transfer Uang', 'Top Up', 'QRIS'],
    endpoints: [
      {
        id: 'balance',
        name: 'Balance Inquiry',
        method: 'GET',
        path: '/v1/linkaja/balance',
        description: 'Cek saldo akun LinkAja',
        responseBody: { balance: 150000 }
      },
      {
        id: 'send-money',
        name: 'Send Money',
        method: 'POST',
        path: '/v1/linkaja/send',
        description: 'Kirim uang ke pengguna lain',
        requestBody: { to: 'string', amount: 10000 },
        responseBody: { transactionId: 'LA123', status: 'Success' }
      }
    ]
  },
  {
    id: 'orbit',
    name: 'Telkomsel Orbit',
    category: 'Home Internet',
    description: 'Layanan internet rumah berbasis modem WiFi prabayar dari Telkomsel.',
    logo: '',
    color: 'from-blue-400 to-blue-700',
    customers: '2M+',
    website: 'https://www.myorbit.id',
    features: ['Modem WiFi', 'Kuota Besar', 'Tanpa Kontrak'],
    endpoints: [
      {
        id: 'device-activation',
        name: 'Device Activation',
        method: 'POST',
        path: '/v1/orbit/activate',
        description: 'Aktivasi modem Orbit',
        requestBody: { deviceId: 'string', msisdn: 'string' },
        responseBody: { activationId: 'ORBIT001', status: 'Active' }
      },
      {
        id: 'quota-check',
        name: 'Quota Check',
        method: 'GET',
        path: '/v1/orbit/quota',
        description: 'Cek sisa kuota internet Orbit',
        responseBody: { quota: '50GB', validUntil: '2024-08-01' }
      }
    ]
  },
  {
    id: 'telkomsat',
    name: 'Telkomsat',
    category: 'Satellite Communication',
    description: 'Penyedia layanan komunikasi satelit dengan coverage Indonesia dan Asia. Mengoperasikan satelit Merah Putih dan Telkom-3S untuk layanan enterprise dan pemerintah.',
    logo: 'https://www.telkomsat.co.id/assets/images/logo-telkomsat.png',
    color: 'from-green-500 to-green-600',
    customers: 'Enterprise',
    website: 'https://www.telkomsat.co.id',
    features: ['Satellite Control', 'VSAT Services', 'Remote Monitoring', 'Global Partnership'],
    endpoints: [
      {
        id: 'satellite-status',
        name: 'Satellite Link Status',
        method: 'GET',
        path: '/v1/telkomsat/satellites/{satelliteId}/links/{linkId}/status',
        description: 'Monitoring status koneksi satelit secara real-time termasuk bandwidth dan signal strength',
        responseBody: {
          satelliteId: 'MERAHPUTIH',
          linkId: 'LINK-JKT-PLM',
          status: 'Operational',
          bandwidthMbps: 150,
          latencyMs: 600,
          signalStrengthDb: -70
        }
      },
      {
        id: 'service-provisioning',
        name: 'Service Provisioning',
        method: 'POST',
        path: '/v1/telkomsat/service-requests',
        description: 'Mengajukan permintaan layanan satelit baru untuk lokasi remote',
        requestBody: {
          clientId: 'CLIENT005',
          serviceType: 'VSAT_DEDICATED',
          location: 'Papua Remote Site',
          requiredBandwidthMbps: 50
        },
        responseBody: {
          requestId: 'SATPROV-001',
          clientId: 'CLIENT005',
          status: 'Pending Approval',
          estimatedDeployment: '2024-08-15'
        }
      },
      {
        id: 'coverage-map',
        name: 'Coverage Map',
        method: 'GET',
        path: '/v1/telkomsat/coverage/{satelliteId}',
        description: 'Informasi coverage area dan kekuatan sinyal satelit',
        responseBody: {
          satelliteId: 'MERAHPUTIH',
          coverageAreas: [
            {
              region: 'Indonesia',
              signalStrength: 'Strong',
              beamType: 'Ku-band'
            },
            {
              region: 'Southeast Asia',
              signalStrength: 'Medium',
              beamType: 'C-band'
            }
          ]
        }
      },
      {
        id: 'bandwidth-allocation',
        name: 'Bandwidth Allocation',
        method: 'PUT',
        path: '/v1/telkomsat/clients/{clientId}/bandwidth',
        description: 'Mengatur alokasi bandwidth untuk klien enterprise',
        requestBody: {
          allocatedBandwidthMbps: 100,
          priority: 'High',
          effectiveDate: '2024-07-01'
        },
        responseBody: {
          clientId: 'CLIENT005',
          newAllocation: '100 Mbps',
          status: 'Applied',
          billingImpact: '+Rp 5,000,000/month'
        }
      },
      {
        id: 'ground-stations',
        name: 'Ground Stations',
        method: 'GET',
        path: '/v1/telkomsat/ground-stations',
        description: 'Status dan informasi ground station yang tersedia',
        responseBody: {
          stations: [
            {
              id: 'GS-JKT-01',
              location: 'Jakarta',
              status: 'Operational',
              antennaSize: '7.3m',
              supportedBands: ['C-band', 'Ku-band']
            }
          ]
        }
      },
      {
        id: 'satellite-health',
        name: 'Satellite Health',
        method: 'GET',
        path: '/v1/telkomsat/satellites/{satelliteId}/health',
        description: 'Monitoring kesehatan satelit dan komponen sistem',
        responseBody: {
          satelliteId: 'MERAHPUTIH',
          overallHealth: 'Good',
          batteryLevel: 95,
          solarPanelEfficiency: 98,
          thrusterFuel: 85,
          lastMaintenance: '2024-06-01'
        }
      },
      {
        id: 'orbital-position',
        name: 'Orbital Position',
        method: 'GET',
        path: '/v1/telkomsat/satellites/{satelliteId}/position',
        description: 'Posisi orbital satelit dan tracking information',
        responseBody: {
          satelliteId: 'MERAHPUTIH',
          longitude: '108°E',
          latitude: '0°',
          altitude: '35,786 km',
          velocity: '3.07 km/s',
          lastUpdate: '2024-07-01T12:00:00Z'
        }
      },
      {
        id: 'interference-monitoring',
        name: 'Interference Monitoring',
        method: 'GET',
        path: '/v1/telkomsat/interference/{linkId}',
        description: 'Monitoring interferensi sinyal dan kualitas komunikasi',
        responseBody: {
          linkId: 'LINK-JKT-PLM',
          interferenceLevel: 'Low',
          signalQuality: 'Excellent',
          errorRate: 0.001,
          recommendations: []
        }
      },
      {
        id: 'weather-impact',
        name: 'Weather Impact',
        method: 'GET',
        path: '/v1/telkomsat/weather/{locationId}',
        description: 'Analisis dampak cuaca terhadap kualitas sinyal satelit',
        responseBody: {
          locationId: 'JKT-001',
          currentWeather: 'Clear',
          rainFadeRisk: 'Low',
          signalAttenuation: '0.2 dB',
          forecast: 'Stable for next 24 hours'
        }
      },
      {
        id: 'maintenance-schedule',
        name: 'Maintenance Schedule',
        method: 'GET',
        path: '/v1/telkomsat/maintenance',
        description: 'Jadwal maintenance satelit dan ground station',
        responseBody: {
          scheduledMaintenance: [
            {
              id: 'MAINT-001',
              type: 'Satellite Maneuver',
              satelliteId: 'MERAHPUTIH',
              scheduledDate: '2024-07-15T02:00:00Z',
              duration: '4 hours',
              impact: 'Minimal service disruption'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'telkom-enterprise',
    name: 'Telkom Enterprise',
    category: 'Enterprise Solutions',
    description: 'Solusi enterprise lengkap untuk transformasi digital bisnis. Menyediakan cloud computing, data center, cybersecurity, dan IoT solutions.',
    logo: 'https://www.telkom.co.id/data/image_upload/page/1571735474_logo%20enterprise.png',
    color: 'from-purple-500 to-purple-600',
    customers: 'B2B',
    website: 'https://www.telkom.co.id/enterprise',
    features: ['Cloud Services', 'Data Center', 'Cybersecurity', 'IoT Solutions'],
    endpoints: [
      {
        id: 'vm-provisioning',
        name: 'VM Provisioning',
        method: 'POST',
        path: '/v1/enterprise/cloud/vms',
        description: 'Provisioning Virtual Machine baru di cloud Telkom dengan spesifikasi custom',
        requestBody: {
          name: 'AppServer01',
          cpuCores: 4,
          ramGB: 16,
          storageGB: 200,
          osImage: 'Ubuntu22.04'
        },
        responseBody: {
          vmId: 'VM-ENT-001',
          name: 'AppServer01',
          status: 'Provisioning',
          ipAddress: null,
          estimatedReadyTime: '5 minutes'
        }
      },
      {
        id: 'datacenter-usage',
        name: 'Data Center Usage',
        method: 'GET',
        path: '/v1/enterprise/datacenters/{dcId}/usage',
        description: 'Monitoring penggunaan resource data center secara real-time',
        responseBody: {
          dcId: 'DCSBY01',
          location: 'Surabaya',
          rackUnitsUsed: 42,
          powerConsumptionKWh: 1500,
          networkTrafficGB: 5000,
          temperature: '22°C',
          humidity: '45%'
        }
      },
      {
        id: 'iot-device-registration',
        name: 'IoT Device Registration',
        method: 'POST',
        path: '/v1/enterprise/iot/devices',
        description: 'Mendaftarkan perangkat IoT baru ke dalam sistem monitoring',
        requestBody: {
          deviceId: 'IoT-SENSOR-005',
          type: 'TemperatureSensor',
          location: 'Warehouse A',
          status: 'Active'
        },
        responseBody: {
          deviceId: 'IoT-SENSOR-005',
          status: 'Registered',
          registrationDate: '2024-07-01T10:00:00Z',
          apiKey: 'iot_key_abc123'
        }
      },
      {
        id: 'security-monitoring',
        name: 'Security Monitoring',
        method: 'GET',
        path: '/v1/enterprise/security/threats',
        description: 'Monitoring ancaman keamanan siber secara real-time',
        responseBody: {
          threatLevel: 'Medium',
          activeThreats: 3,
          blockedAttacks: 127,
          lastUpdate: '2024-07-01T14:30:00Z',
          recommendations: [
            'Update firewall rules',
            'Review access logs'
          ]
        }
      },
      {
        id: 'backup-management',
        name: 'Backup Management',
        method: 'GET',
        path: '/v1/enterprise/backup/{clientId}/status',
        description: 'Status backup data dan disaster recovery planning',
        responseBody: {
          clientId: 'ENT-CLIENT-001',
          lastBackup: '2024-07-01T02:00:00Z',
          backupSize: '2.5 TB',
          status: 'Completed',
          retentionDays: 30,
          nextScheduled: '2024-07-02T02:00:00Z'
        }
      },
      {
        id: 'network-monitoring',
        name: 'Network Monitoring',
        method: 'GET',
        path: '/v1/enterprise/network/{networkId}/performance',
        description: 'Monitoring performa jaringan enterprise dan bandwidth utilization',
        responseBody: {
          networkId: 'NET-ENT-001',
          bandwidthUtilization: 65,
          latencyMs: 15,
          packetLoss: 0.01,
          uptime: 99.98,
          connectedDevices: 250
        }
      },
      {
        id: 'cloud-storage',
        name: 'Cloud Storage',
        method: 'GET',
        path: '/v1/enterprise/storage/{clientId}/usage',
        description: 'Monitoring penggunaan cloud storage dan kapasitas tersedia',
        responseBody: {
          clientId: 'ENT-CLIENT-001',
          totalCapacityTB: 10,
          usedCapacityTB: 6.5,
          availableCapacityTB: 3.5,
          monthlyGrowthGB: 150,
          storageType: 'SSD'
        }
      },
      {
        id: 'load-balancer',
        name: 'Load Balancer',
        method: 'GET',
        path: '/v1/enterprise/loadbalancer/{lbId}/status',
        description: 'Status dan konfigurasi load balancer untuk aplikasi enterprise',
        responseBody: {
          lbId: 'LB-ENT-001',
          status: 'Active',
          activeServers: 4,
          totalRequests: 1500000,
          averageResponseTime: 120,
          healthyBackends: 4
        }
      },
      {
        id: 'api-gateway',
        name: 'API Gateway',
        method: 'GET',
        path: '/v1/enterprise/api-gateway/{gatewayId}/analytics',
        description: 'Analytics dan monitoring API Gateway untuk enterprise applications',
        responseBody: {
          gatewayId: 'GW-ENT-001',
          totalRequests: 50000,
          successRate: 99.5,
          averageLatency: 85,
          topEndpoints: [
            '/api/v1/users',
            '/api/v1/orders'
          ]
        }
      },
      {
        id: 'compliance-report',
        name: 'Compliance Report',
        method: 'GET',
        path: '/v1/enterprise/compliance/{clientId}/report',
        description: 'Laporan compliance dan audit untuk standar keamanan enterprise',
        responseBody: {
          clientId: 'ENT-CLIENT-001',
          complianceScore: 95,
          standards: ['ISO 27001', 'SOC 2'],
          lastAudit: '2024-06-01',
          findings: 2,
          status: 'Compliant'
        }
      }
    ]
  },
  {
    id: 'mytelkomsel',
    name: 'MyTelkomsel',
    category: 'Mobile Application',
    description: 'Aplikasi mobile resmi Telkomsel untuk manajemen akun, pembelian paket, dan layanan digital.',
    logo: '',
    color: 'from-pink-500 to-pink-600',
    customers: '50M+',
    website: 'https://www.telkomsel.com/mytelkomsel',
    features: ['Akun & Profil', 'Pembelian Paket', 'Reward & Loyalty', 'Digital Services'],
    endpoints: [
      {
        id: 'user-auth',
        name: 'User Authentication',
        method: 'POST',
        path: '/v1/mytelkomsel/auth',
        description: 'Autentikasi dan login pengguna aplikasi MyTelkomsel',
        requestBody: { msisdn: '6281234567890', password: 'string' },
        responseBody: { token: 'jwt_token', expiresIn: 3600 }
      },
      {
        id: 'package-purchase',
        name: 'Package Purchase',
        method: 'POST',
        path: '/v1/mytelkomsel/packages/purchase',
        description: 'Pembelian paket data, telepon, dan SMS',
        requestBody: { packageId: 'DATA_10GB_30D', paymentMethod: 'credit' },
        responseBody: { transactionId: 'TXN1001', status: 'Success' }
      },
      {
        id: 'reward-management',
        name: 'Reward Management',
        method: 'GET',
        path: '/v1/mytelkomsel/rewards',
        description: 'Mengambil data reward dan loyalty point pengguna',
        responseBody: { totalPoints: 1200, availableRewards: ['Free Data', 'Voucher'] }
      },
      {
        id: 'usage-analytics',
        name: 'Usage Analytics',
        method: 'GET',
        path: '/v1/mytelkomsel/usage',
        description: 'Analitik penggunaan aplikasi dan layanan',
        responseBody: { dataUsage: '5GB', lastLogin: '2024-07-01T10:00:00Z' }
      }
    ]
  },
  {
    id: 'pijar',
    name: 'Pijar',
    category: 'Edutech',
    description: 'Platform edukasi digital untuk pelajar, guru, dan institusi pendidikan di Indonesia.',
    logo: '',
    color: 'from-yellow-400 to-yellow-600',
    customers: '2M+',
    website: 'https://pijar.id',
    features: ['Kelas Online', 'Tryout & Ujian', 'Materi & Modul', 'Sertifikasi'],
    endpoints: [
      {
        id: 'user-enrollment',
        name: 'User Enrollment',
        method: 'POST',
        path: '/v1/pijar/enroll',
        description: 'Pendaftaran pengguna baru ke platform Pijar',
        requestBody: { name: 'string', email: 'string' },
        responseBody: { userId: 'PIJAR001', status: 'Enrolled' }
      },
      {
        id: 'content-delivery',
        name: 'Content Delivery',
        method: 'GET',
        path: '/v1/pijar/content',
        description: 'Akses materi dan modul pembelajaran digital',
        responseBody: { modules: ['Matematika', 'Bahasa Inggris'] }
      },
      {
        id: 'exam-management',
        name: 'Exam Management',
        method: 'POST',
        path: '/v1/pijar/exam',
        description: 'Manajemen dan pelaksanaan tryout/ujian digital',
        requestBody: { examId: 'EXAM001', answers: [] },
        responseBody: { score: 85, passed: true }
      },
      {
        id: 'certification-issuance',
        name: 'Certification Issuance',
        method: 'GET',
        path: '/v1/pijar/certification',
        description: 'Penerbitan sertifikat digital untuk peserta',
        responseBody: { certificateId: 'CERT001', issuedDate: '2024-07-01' }
      }
    ]
  },
  {
    id: 'fabd',
    name: 'FABD',
    category: 'API Management Platform',
    description: 'FABD (Full API Business Digital) adalah platform API management dari Telkom Indonesia yang menyediakan layanan API Gateway, Open API, Sandbox, Monitoring, dan Billing untuk mendukung digitalisasi bisnis.',
    logo: '',
    color: 'from-green-400 to-green-700',
    customers: '500K+',
    website: 'https://fab.telkom.co.id/',
    features: [
      'API Gateway',
      'Open API',
      'Sandbox Environment',
      'API Monitoring',
      'Billing & Analytics'
    ],
    endpoints: [
      {
        id: 'api-gateway',
        name: 'API Gateway',
        method: 'POST',
        path: '/v1/fabd/gateway',
        description: 'Menyediakan endpoint gateway untuk integrasi API secara aman dan scalable',
        requestBody: { apiKey: 'string', payload: {} },
        responseBody: { status: 'Success', data: {} }
      },
      {
        id: 'sandbox',
        name: 'Sandbox Environment',
        method: 'GET',
        path: '/v1/fabd/sandbox',
        description: 'Akses lingkungan sandbox untuk pengujian dan simulasi API',
        responseBody: { sandboxUrl: 'https://sandbox.fab.telkom.co.id', status: 'Active' }
      },
      {
        id: 'monitoring',
        name: 'API Monitoring',
        method: 'GET',
        path: '/v1/fabd/monitoring',
        description: 'Monitoring performa dan penggunaan API',
        responseBody: { totalRequests: 12000, errorRate: 0.1, avgLatencyMs: 120 }
      },
      {
        id: 'billing',
        name: 'Billing & Analytics',
        method: 'GET',
        path: '/v1/fabd/billing',
        description: 'Informasi tagihan dan analitik penggunaan API',
        responseBody: { totalUsage: 100000, totalBill: 1500000, period: '2024-07' }
      }
    ]
  },
  {
    id: 'antarez-easy',
    name: 'Antarez Easy',
    category: 'IoT Platform',
    description: 'Platform IoT untuk monitoring, automasi, dan integrasi perangkat secara mudah.',
    logo: '',
    color: 'from-blue-500 to-cyan-400',
    customers: '100K+',
    website: 'https://antarez.id',
    features: ['Device Management', 'Data Analytics', 'Automation'],
    endpoints: [
      {
        id: 'device-list',
        name: 'Device List',
        method: 'GET',
        path: '/v1/antarez/devices',
        description: 'Daftar perangkat IoT yang terhubung',
        responseBody: { devices: ['Sensor1', 'Gateway2'] }
      },
      {
        id: 'send-command',
        name: 'Send Command',
        method: 'POST',
        path: '/v1/antarez/command',
        description: 'Mengirim perintah ke perangkat',
        requestBody: { deviceId: 'string', command: 'string' },
        responseBody: { status: 'Sent' }
      }
    ]
  },
  {
    id: 'bigbox',
    name: 'Bigbox',
    category: 'Big Data Platform',
    description: 'Platform big data dan analytics untuk enterprise dan bisnis digital.',
    logo: '',
    color: 'from-purple-500 to-indigo-700',
    customers: '1M+',
    website: 'https://bigbox.co.id',
    features: ['Data Lake', 'Analytics', 'Visualization'],
    endpoints: [
      {
        id: 'data-query',
        name: 'Data Query',
        method: 'POST',
        path: '/v1/bigbox/query',
        description: 'Query data pada data lake',
        requestBody: { query: 'SELECT * FROM users' },
        responseBody: { result: [] }
      },
      {
        id: 'dashboard',
        name: 'Dashboard',
        method: 'GET',
        path: '/v1/bigbox/dashboard',
        description: 'Akses dashboard analytics',
        responseBody: { dashboards: ['Sales', 'Customer Insights'] }
      }
    ]
  },
  {
    id: 'padi-umkm',
    name: 'Padi UMKM',
    category: 'Marketplace',
    description: 'Marketplace B2B untuk UMKM Indonesia, memfasilitasi transaksi dan pengadaan barang/jasa.',
    logo: '',
    color: 'from-yellow-500 to-orange-600',
    customers: '200K+',
    website: 'https://padiumkm.id',
    features: ['Marketplace', 'Pengadaan', 'B2B Platform'],
    endpoints: [
      {
        id: 'product-list',
        name: 'Product List',
        method: 'GET',
        path: '/v1/padiumkm/products',
        description: 'Daftar produk UMKM yang tersedia',
        responseBody: { products: ['Beras', 'Kopi', 'Kerajinan'] }
      },
      {
        id: 'order',
        name: 'Order',
        method: 'POST',
        path: '/v1/padiumkm/order',
        description: 'Melakukan pemesanan produk',
        requestBody: { productId: 'string', quantity: 10 },
        responseBody: { orderId: 'ORDPAD01', status: 'Ordered' }
      }
    ]
  }
]
