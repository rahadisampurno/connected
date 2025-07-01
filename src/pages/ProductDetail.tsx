import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { 
  ArrowLeft, 
  ExternalLink, 
  Users, 
  Globe, 
  Code, 
  Play, 
  Copy, 
  CheckCircle,
  Terminal
} from 'lucide-react';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const [activeEndpoint, setActiveEndpoint] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-red-600 hover:text-red-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleCopy = () => {
    const codeText = JSON.stringify(product.endpoints[activeEndpoint].responseBody, null, 2);
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      case 'PATCH': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/products"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </Link>

        {/* Product Header */}
        <div className={`bg-gradient-to-r ${product.color} rounded-2xl p-8 text-white mb-8`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <img 
                src={product.logo} 
                alt={product.name}
                className="h-20 w-auto bg-white rounded-xl p-3"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl opacity-90 mb-4">{product.category}</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>{product.customers}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>{product.endpoints.length} API Endpoints</span>
                  </div>
                  <a 
                    href={product.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Visit Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About {product.name}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {product.description}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* API Endpoints */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Endpoint List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Terminal className="h-5 w-5 mr-2 text-red-600" />
                API Endpoints
              </h3>
              <div className="space-y-3">
                {product.endpoints.map((endpoint, index) => (
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
          </div>

          {/* API Demo Interface */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Code className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">API Documentation</span>
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
                  <span className={`px-3 py-1 rounded text-sm font-medium ${getMethodColor(product.endpoints[activeEndpoint].method)}`}>
                    {product.endpoints[activeEndpoint].method}
                  </span>
                  <span className="text-white font-mono text-lg">{product.endpoints[activeEndpoint].path}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{product.endpoints[activeEndpoint].name}</h4>
                <p className="text-gray-300">{product.endpoints[activeEndpoint].description}</p>
              </div>

              {/* Request Body (if applicable) */}
              {product.endpoints[activeEndpoint].requestBody && (
                <div className="p-6 border-b border-gray-700">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Request Body
                  </h4>
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      {JSON.stringify(product.endpoints[activeEndpoint].requestBody, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

              {/* Response */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold flex items-center">
                    <Play className="h-4 w-4 mr-2 text-green-400" />
                    Response Example
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
                    {JSON.stringify(product.endpoints[activeEndpoint].responseBody, null, 2)}
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
    </div>
  );
};

export default ProductDetail;