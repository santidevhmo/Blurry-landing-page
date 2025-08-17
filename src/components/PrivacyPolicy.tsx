interface PrivacyPolicyProps {
  onClose?: () => void;
}

function PrivacyPolicy({ onClose }: PrivacyPolicyProps = {}) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA]">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p className="text-sm text-gray-600 italic">
            Last Updated: 2025-08-08
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            Introduction
          </h2>
          <p>
            Thank you for using our Chrome Addon <strong>Blurred Feed</strong>. Your privacy is important to us. This Privacy Policy explains how we handle data in connection with the Extension.
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            What the Extension Does
          </h2>
          <p>
            The Extension enhances your experience on social media platforms by:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Blurring certain interface components via an injected CSS stylesheet.</li>
            <li>Muting the audio of all videos and audio content via an injected JavaScript file.</li>
          </ul>
          <p>
            All processing is done <strong>locally in your browser</strong>. The Extension does not collect, store, or transmit any personal data.
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            Data Collection and Use
          </h2>
          <p>
            We do <strong>not</strong> collect or process any of the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal data (e.g., name, email, IP address)</li>
            <li>Browsing history or content</li>
            <li>Media files or playback details</li>
            <li>Account or login information</li>
          </ul>
          <p>
            The Extension does not communicate with any external servers and does not use cookies, analytics, or third-party tracking services.
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            Permissions
          </h2>
          <p>
            The Extension requests minimal permissions necessary to apply style and audio changes on supported social media platforms. These permissions are solely used to implement the features described and are not used to access or collect any user data.
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            Third-Party Services
          </h2>
          <p>
            This Extension does <strong>not</strong> use or integrate with any third-party services.
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            Data Security
          </h2>
          <p>
            Since no data is collected or transmitted, there is no risk of data leakage or misuse. All functionality runs entirely in the user's browser environment.
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            User Consent
          </h2>
          <p>
            Because no data is collected or processed, explicit user consent is not required under GDPR or Chrome Web Store policies. Installation and use of the Extension are considered as agreement to this policy.
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy to reflect changes in functionality or legal requirements. Any updates will be posted on the Extension's Chrome Web Store listing. We encourage you to review the policy periodically.
          </p>
          
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929EA] to-[#CC66DA] mt-8 mb-4">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or the Extension, you may contact us at:
          </p>
          <p>
            <strong>Email:</strong> santiswiftios@gmail.com
          </p>
        </div>
        
        <button 
          onClick={onClose || (() => window.history.back())}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-[#9929EA] to-[#CC66DA] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default PrivacyPolicy;