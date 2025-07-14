// components/CybersecurityChallenges.js
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiAlertTriangle, FiActivity } from 'react-icons/fi';

const CybersecurityChallenges = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cybersecurity Challenges in <span className="text-blue-600">Renewable Energy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Companies in the renewable energy sector manage extensive and critical digital infrastructures, 
            including smart grids, IoT devices, and data analytics platforms. This digital expansion 
            increases exposure to cyber threats.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Unauthorized Access Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-500"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <FiLock className="text-red-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Unauthorized Access Attempts</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Cybercriminals often target renewable energy systems to exploit vulnerabilities in software, 
                hardware, or network configurations leading to the manipulation of energy distribution, 
                theft of sensitive data, or even the hijacking of devices for malicious purposes.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  {['Software vulnerabilities', 'Hardware exploits', 'Network breaches'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Breaches Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-500"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <FiShield className="text-blue-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Data Breaches</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Phishing attacks, malware, or insider threats lead to the exposure of confidential 
                information that not only compromise customer privacy but also harm a company's 
                reputation, often resulting in regulatory penalties.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  {['Phishing attacks', 'Malware infections', 'Insider threats'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Critical Operations Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-amber-500"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 rounded-full mr-4">
                  <FiAlertTriangle className="text-amber-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Disruption of Critical Operations</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ransomware or Distributed Denial of Service attacks can cripple essential systems 
                like smart grids or energy management platforms, leading to power outages or 
                operational downtime.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  {['Ransomware attacks', 'DDoS incidents', 'System downtime'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Growing Threat Landscape</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: '68%', label: 'of energy companies experienced cyber attacks last year', icon: <FiActivity /> },
                { value: '3.5×', label: 'increase in ransomware attacks on critical infrastructure', icon: <FiAlertTriangle /> },
                { value: '42%', label: 'of attacks target operational technology systems', icon: <FiShield /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2 flex items-center">
                    {stat.icon}
                    <span className="ml-3">{stat.value}</span>
                  </div>
                  <p className="text-blue-100">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityChallenges;