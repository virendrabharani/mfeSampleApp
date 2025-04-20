import { mount } from 'marketing/MarketingApp'; // Import the mount function from marketing
import React, { useRef, useEffect } from 'react'; // Import React hooks

export default () => {
  // Create a ref to get a reference to the div element below
  const ref = useRef(null);

  // Use useEffect to run code only when the component first mounts
  useEffect(() => {
    // Call the mount function from marketing, passing in the DOM element
    // referenced by 'ref'. ref.current gives access to the actual DOM node.
    mount(ref.current);
  }, []); // The empty array [] ensures this effect runs only once 
  // - instructor did not add the empty array..

  // Render a div. React will create this div in the DOM, and the 'ref' prop
  // will make ref.current point to this specific DOM element.
  return <div ref={ref} />;
};
