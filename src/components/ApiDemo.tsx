import React, { useState } from 'react';
import { 
  Code, 
  Play, 
  Copy, 
  CheckCircle, 
  Terminal, 
  Database,
  Zap,
  Settings
} from 'lucide-react';

const ApiDemo = () => {
  const [activeEndpoint, setActiveEndpoint] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);

  const endpoints = [
    {
      name: 'Telkomsel User Profile',
      method: 'GET',
      path: '/v1/telkomsel/users/{userId}/profile',
      description: 'Mengambil profil pengguna Telkomsel dengan detail lengkap',
      request: null,
      response: {
        "userId": "TSL001",
        "name": "Budi Santoso",
        "msisdn": "6281234567890",
        "status": "Active",
        "plan": "Halo+ Flexy",
        "balance": "Rp 150,000",
        "dataQuotaGB": 10,
        "expiryDate": "2024-12-31"
      }
    },
    {
      name: 'IndiHome Service Status',
      method: 'GET',
      path: '/v1/indihome/services/{serviceId}/status',
      description: 'Memeriksa status layanan IndiHome secara real-time',
      request: null,
      response: {
        "serviceId": "IH0012345",
        "accountName": "Keluarga Jaya",
        "address": "Jl. Merdeka No. 10, Jakarta",
        "speedMbps": 100,
        "status": "Active",
        "uptimeHours": 720,
        "lastOutage": null
      }
    },
    {
      name: 'Enterprise VM Provisioning',
      method: 'POST',
      path: '/v1/enterprise/cloud/vms',
      description: 'Menyediakan Virtual Machine baru di cloud Telkom',
      request: {
        "name": "AppServer01",
        "cpuCores": 4,
        "ramGB": 16,
        "storageGB": 200,
        "osImage": "Ubuntu22.04"
      },
      response: {
        "vmId": "VM-ENT-001",
        "name": "AppServer01",
        "status": "Provisioning",
        "ipAddress": null,
        "estimatedReadyTime": "5 minutes"
      }
    },
    {
      name: 'Telkomsat Link Status',
      method: 'GET',
      path: '/v1/telkomsat/satellites/{satelliteId}/links/{linkId}/status',
      description: 'Memantau status koneksi satelit secara real-time',
      request: null,
      response: {
        "satelliteId": "MERAHPUTIH",
        "linkId": "LINK-JKT-PLM",
        "status": "Operational",
        "bandwidthMbps": 150,
        "latencyMs": 600,
        "signalStrengthDb": -70
      }
    }
  ];

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
    }, 2000);
  };

  const handleCopy = () => {
    const codeText = JSON.stringify(endpoints[activeEndpoint].response, null, 2);
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="api-demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            API <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Demo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi API endpoints yang tersedia di platform "Conected" dengan 
            interface interaktif dan dokumentasi lengkap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Endpoint List */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="h-5 w-5 mr-2 text-red-600" />
              Available Endpoints
            </h3>
            <div className="space-y-3">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  onClick={() => setActiveEndpoint(index)}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeEndpoint === index
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getMethodColor(endpoint.method)}`}>
                      {endpoint.method}
                    </span>
                    <span className="text-sm font-medium text-gray-900">{endpoint.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-mono">{endpoint.path}</p>
                </div>
              ))}
            </div>
          </div>

          {/* API Demo Interface */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Terminal className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">API Playground</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Endpoint Info */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center space-x-4 mb-3">
                  <span className={`px-3 py-1 rounded text-sm font-medium ${getMethodColor(endpoints[activeEndpoint].method)}`}>
                    {endpoints[activeEndpoint].method}
                  </span>
                  <span className="text-white font-mono text-lg">{endpoints[activeEndpoint].path}</span>
                </div>
                <p className="text-gray-300">{endpoints[activeEndpoint].description}</p>
              </div>

              {/* Request Body (if applicable) */}
              {endpoints[activeEndpoint].request && (
                <div className="p-6 border-b border-gray-700">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Request Body
                  </h4>
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      {JSON.stringify(endpoints[activeEndpoint].request, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

              {/* Execute Button */}
              <div className="p-6 border-b border-gray-700">
                <button
                  onClick={handleExecute}
                  disabled={isExecuting}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
                >
                  {isExecuting ? (
                    <>
                      <Settings className="h-5 w-5 animate-spin" />
                      <span>Executing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Execute Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Response */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-400" />
                    Response
                  </h4>
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span className="text-sm">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    {JSON.stringify(endpoints[activeEndpoint].response, null, 2)}
                  </pre>
                </div>
              </div>
            </div>

            {/* API Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">200</div>
                <div className="text-sm opacity-90">Status Code</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">45ms</div>
                <div className="text-sm opacity-90">Response Time</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">1.2KB</div>
                <div className="text-sm opacity-90">Payload Size</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiDemo;