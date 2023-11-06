import React from'react'; 
import Link from'next/link'; 
  
export default class extends React.Component { 
    render() { 
        return ( { 
          
        // This is Jsx contains HTML 
        // code in Javascript} 
        <div> 
            <h1>Hello Geeks</h1> 
            { 
                // This is Styled-jsx contains 
                // CSS code in Javascript} 
                <style jsx>{` 
                    a{ 
                        color:grey; 
                        text-decoration:none; 
                    } 
                `}</style> 
            } 
        </div> 
        ) 
    }   
} 