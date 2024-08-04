import React, { useEffect } from 'react';

function Typer({ wordOne, wordTwo, wordThree, elementID }) {
    useEffect(() => {
        const options = {
            strings: [wordOne, wordTwo, wordThree],
            typeSpeed: 50,         // Typing speed in milliseconds
            backSpeed: 50,         // Backspace speed in milliseconds
            startDelay: 500,       // Delay before typing starts (in milliseconds)
            backDelay: 1000,       // Delay before starting to backspace (in milliseconds)
            loop: true,            // Loop the animation
            loopCount: Infinity,   // Number of loops (Infinity for endless loop)
            showCursor: true,      // Show cursor after typing
            cursorChar: '|',       // Character for cursor
        };

        const typed = new window.Typed(`#${elementID}`, options);

        return () => {
            typed.destroy();
        };
    }, [wordOne, wordTwo, wordThree, elementID]);

    return null;
}

export default Typer;
