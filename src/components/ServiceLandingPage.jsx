import React, { useState } from 'react';
import { ArrowLeft, Check, Phone, Mail, MapPin, Clock, CreditCard, Shield, Headphones } from 'lucide-react';

const ServiceLandingPage = ({ service, category, onBack }) => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Pricing tiers (unchanged for brevity)
  const getPricingTiers = () => {
    const basePrices = {
      'Cloud Services': { basic: 299, standard: 599, premium: 999 },
      'Web Development': { basic: 199, standard: 499, premium: 899 },
      'AI & Machine Learning': { basic: 399, standard: 799, premium: 1299 },
      'Cybersecurity': { basic: 249, standard: 549, premium: 999 },
      'Digital Marketing': { basic: 149, standard: 349, premium: 699 },
      'Mobile Development': { basic: 399, standard: 799, premium: 1199 }
    };

    const prices = basePrices[category] || { basic: 199, standard: 499, premium: 899 };

    return [
      {
        name: 'Basic',
        price: prices.basic,
        period: 'one-time',
        features: ['Initial consultation', 'Basic implementation', '30-day support', 'Documentation', 'Email support'],
        popular: false
      },
      {
        name: 'Standard',
        price: prices.standard,
        period: 'one-time',
        features: [
          'Everything in Basic',
          'Advanced configuration',
          '90-day support',
          'Training session',
          'Phone & email support',
          'Performance optimization'
        ],
        popular: true
      },
      {
        name: 'Premium',
        price: prices.premium,
        period: 'one-time',
        features: [
          'Everything in Standard',
          'Custom development',
          '6-month support',
          'Dedicated account manager',
          '24/7 priority support',
          'Ongoing maintenance',
          'Free updates'
        ],
        popular: false
      }
    ];
  };

  const handleFormSubmit = () => {
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const pricingTiers = getPricingTiers();
  const selectedTier = pricingTiers.find(tier => tier.name.toLowerCase() === selectedPlan);

  return (
    <div className="bg-gray-50 overflow-y-auto" style={{ minHeight: '2000px' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </button>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Service Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.desc}</p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Details */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Professional consultation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Custom implementation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Quality assurance testing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Documentation & training</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Ongoing support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Delivery Timeline:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Week 1: Planning & Analysis</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Week 2-3: Development</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Week 4: Testing & Deployment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Plan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative rounded-xl border-2 p-6 cursor-pointer transition-all ${
                      selectedPlan === tier.name.toLowerCase()
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    } ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={() => setSelectedPlan(tier.name.toLowerCase())}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-gray-900">${tier.price}</span>
                        <span className="text-gray-600 ml-1">{tier.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Purchase */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Get Started</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Purchase Process:</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white w-6 h-6 rounded-full text-sm font-medium flex items-center justify-center mr-3 mt-0.5">1</span>
                      <span className="text-gray-700">Contact us for consultation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white w-6 h-6 rounded-full text-sm font-medium flex items-center justify-center mr-3 mt-0.5">2</span>
                      <span className="text-gray-700">Receive custom quote</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white w-6 h-6 rounded-full text-sm font-medium flex items-center justify-center mr-3 mt-0.5">3</span>
                      <span className="text-gray-700">Sign agreement & pay deposit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white w-6 h-6 rounded-full text-sm font-medium flex items-center justify-center mr-3 mt-0.5">4</span>
                      <span className="text-gray-700">Project starts immediately</span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Options:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 text-gray-600 mr-3" />
                      <span className="text-gray-700">Credit/Debit Cards</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-gray-600 mr-3" />
                      <span className="text-gray-700">Bank Transfer</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-600 mr-3" />
                      <span className="text-gray-700">Payment Plans Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Quote */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Quote</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Selected Plan:</span>
                  <span className="font-medium text-gray-900">{selectedTier?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-xl text-gray-900">${selectedTier?.price}</span>
                </div>
                <div className="border-t pt-3">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contact@company.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">123 Business St, Suite 100<br />City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Headphones className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Support Hours</p>
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-sm text-gray-600">
                  Not happy with our service? Get a full refund within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowContactForm(false)} />
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-white rounded-xl max-w-md w-full p-6 overflow-y-auto max-h-[90vh]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started with {service.name}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
                {/* Debug: Force modal scroll */}
                <div style={{ height: '1000px', background: '#f0f0f0' }}>Test Modal Scroll</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceLandingPage;