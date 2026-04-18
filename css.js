/* Global reset & base styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
    background: #0f172a;
    color: #e5e7eb;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
}

/* Main container */
.calculator-app {
    width: 100%;
    max-width: 1100px;
    background: #020617;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

/* Header */
.app-header {
    text-align: center;
    margin-bottom: 2rem;
}

.app-header h1 {
    font-size: 2rem;
    color: #f9fafb;
    margin-bottom: 0.5rem;
}

.app-header p {
    font-size: 0.95rem;
    color: #9ca3af;
}

/* Grid layout for calculators */
.calculator-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
}

/* Individual calculator card */
.calc-card {
    background: #020617;
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    border: 1px solid #1f2937;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.8);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.calc-card h2 {
    font-size: 1.1rem;
    color: #e5e7eb;
    margin-bottom: 0.25rem;
}

.calc-card small {
    font-size: 0.8rem;
    color: #9ca3af;
}

/* Form controls */
.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.5rem;
}

.form-group label {
    font-size: 0.85rem;
    color: #d1d5db;
}

.form-group input {
    padding: 0.5rem 0.6rem;
    border-radius: 8px;
    border: 1px solid #374151;
    background: #020617;
    color: #e5e7eb;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.form-group input:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 1px #38bdf8;
}

/* Button */
.calc-button {
    margin-top: 0.75rem;
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    border: none;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    color: #f9fafb;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    transition: transform 0.1s ease, box-shadow 0.1s ease, opacity 0.1s ease;
}

.calc-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.35);
    opacity: 0.95;
}

.calc-button:active {
    transform: translateY(0);
    box-shadow: none;
}

/* Result display */
.result {
    margin-top: 0.5rem;
    font-size: 0.95rem;
    color: #a5b4fc;
}

.result span {
    font-weight: 600;
    color: #f9fafb;
}

/* Responsive tweaks */
@media (max-width: 640px) {
    .calculator-app {
        padding: 1.5rem 1.25rem;
    }

    .app-header h1 {
        font-size: 1.6rem;
    }
}
