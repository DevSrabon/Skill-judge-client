import React from 'react';

const TermsOfUse = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
            <p className="mb-4">
                Welcome to Skill Judge. By using our website and services, you agree to the following terms and conditions.
            </p>
            <h2 className="text-2xl font-bold mb-4">License to Use</h2>
            <p className="mb-4">
                Skill Judge grants you a limited, non-exclusive, non-transferable license to access and use the website and services for personal or commercial use, subject to these terms and conditions.
            </p>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="mb-4">
                The content and materials on Skill Judge are protected by intellectual property laws, including but not limited to copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content or materials on the website without our express written permission.
            </p>
            <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
                The website and services are provided "as is" and without warranty of any kind, either express or implied, including but not limited to, the implied warranties of merchantability and fitness for a particular purpose. Skill Judge does not warrant that the website or services will be uninterrupted or error-free, or that the website or the servers that make it available are free of viruses or other harmful components.
            </p>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
                Skill Judge shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the website or services, whether based on contract, tort, strict liability, or any other legal theory.
            </p>
        </div>
    );
};

export default TermsOfUse;