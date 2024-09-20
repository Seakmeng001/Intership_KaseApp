import React from 'react';
import privacy from '../../assets/privacy.png';

const  AppPolicy= () => {
  return (
    <div className='flex flex-col justify-center mt-10'>
      <div className='flex items-center justify-center mb-3 mr-4'>
        <img src={privacy } className='h-8 mr-3 mb-2' alt='Earth' />
        <h1 className='text-3xl font-bold'>Privacy Policy</h1>
      </div>
      <div className='px-3'>
        <p className='' >
        This privacy policy applies to the Kaseapp app (hereby referred to as "Application") for mobile devices that was created by Kasegro (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".

        </p>
       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 1. Information Collection and Use</h5>
       <p className=''>The Application collects information when you download and use it. This information may include information such as</p>
       <p>. Your device's Internet Protocol address (e.g. IP address)
       </p>
       <p>. The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</p>
       <p>. The time spent on the Application
       </p>
       <p>. The operating system you use on your mobile device
       </p>
       </div>
       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 2. Geolocation Services</h5>
       <p>The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
       </p>
       <div className='flex'>
       <p style={{ color: 'blue' }}>Geolocation Services: 
       </p>
       <p>The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</p>
       </div>
       <div className='flex'>
       <p style={{ color: 'blue' }}>Analytics and Improvements:
       </p>
       <p>Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</p>
       </div>
       <div className='flex'>
       <p style={{ color: 'blue' }}>Third-Party Services: 
       </p>
       <p>Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.
       </p>
       </div>
       </div>
       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 3. Use of Information </h5>
       <p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.

       </p>
       </div>
       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 4. Personally Identifiable Information </h5>
       <p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to 22. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
       </p>
       </div>
       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 5. Third Party Access </h5>
       <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement. </p>
       <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
       <a href="#" target="_blank">Google Play Services</a>
       <br/>
       <a href="#" target="_blank">Facebook</a>
       </div>

       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 6. Disclosure of Information</h5>
       <p>The Service Provider may disclose User Provided and Automatically Collected Information:
       </p>
       <p>as required by law, such as to comply with a subpoena, or similar legal process;
       when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</p>
       <p>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</p>
       </div>
       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 7. Opt-Out Rights</h5>
       <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.


       </p>
       </div>
       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 8. Data Retention Policy
        </h5>
       <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at pozzvenhsolovezz@gmail.com and they will respond in a reasonable time.

       </p>
       </div>
       <div className='py-3 px-3'>
        <h5 style={{ color: 'blue' }}> 9. Children </h5>
       <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.


       </p>
       </div>
       <p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (pozzvenhsolovezz@gmail.com) so that they will be able to take the necessary actions.
       </p>
      </div>
    </div>
  );
}

export default  AppPolicy;
