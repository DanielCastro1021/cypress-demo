
import React, { useState, useRef } from "react";
import "./FancyButton.css";

export default function FancyButton() {
    const [clicked, setClicked] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const confettiRef = useRef(null);

    const handleClick = () => {
        setClicked(true);
        // Simple confetti animation
        if (confettiRef.current) {
            confettiRef.current.classList.add("show");
            setTimeout(() => {
                confettiRef.current.classList.remove("show");
            }, 1200);
        }
    };

    return (
        <div className="fancy-btn-wrapper">
            <button
                className={clicked ? "fancy clicked" : "fancy"}
                onClick={handleClick}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                data-testid="fancy-btn"
            >
                <span className="fancy-icon" role="img" aria-label="sparkle">✨</span>
                {clicked ? "Clicked!" : "Click Me"}
            </button>
            <div ref={confettiRef} className="confetti">🎉🎊✨</div>
            {showTooltip && !clicked && (
                <div className="fancy-tooltip">Give it a try!</div>
            )}
        </div>
    );
}