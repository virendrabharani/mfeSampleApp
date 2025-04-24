// import React from 'react';
// Import the mount function from the 'marketing' remote's 'MarketingApp' module <<<--- ADD THIS
// import { mount } from 'marketing/MarketingApp';

// Log the imported function to verify <<<--- ADD THIS
// console.log(mount);

// export default () => {
//   return <h1>Hi there!</h1>;
// };

// this is the new code 
import React from 'react';
// Import the new component that handles mounting the marketing app <<<--- CHANGE THIS
import MarketingApp from './components/MarketingApp';

// Remove the direct import of mount and the console.log

export default () => {
  return (
    // Add some container-specific content to see both <<<--- MODIFY THIS
    <div>
      <h1>Hi there! (Container)!!addedstuff</h1>
      <hr />
      <MarketingApp /> {/* Render the MarketingApp component */}
    </div>
  );
};
