// Quantum Lobster Simulation
// Simulates quantum superposition and measurement

document.addEventListener('DOMContentLoaded', function() {
    const measureBtn = document.getElementById('measureBtn');
    const resultContainer = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    const qubitState = document.getElementById('qubitState');

    // Initial state: Superposition
    let isInSuperposition = true;

    measureBtn.addEventListener('click', function() {
        if (isInSuperposition) {
            // Perform quantum measurement
            measureQuantumState();
        } else {
            // Reset to superposition
            resetToSuperposition();
        }
    });

    function measureQuantumState() {
        // Add measurement animation
        qubitState.style.opacity = '0.3';
        measureBtn.disabled = true;
        measureBtn.textContent = '🧲 Measuring...';

        // Simulate quantum measurement delay
        setTimeout(() => {
            // Quantum measurement: Random collapse to |0⟩ or |1⟩
            const superpositionState = Math.random() < 0.5 ? 0 : 1;
            const finalState = superpositionState;

            // Display result
            displayResult(finalState);

            // Update button
            measureBtn.disabled = false;
            measureBtn.textContent = '🔄 Reset Superposition';
            isInSuperposition = false;

            // Stop superposition animation
            const stateElements = document.querySelectorAll('.state-zero, .state-one');
            stateElements.forEach(el => {
                el.style.animation = 'none';
                el.style.opacity = '0.3';
            });

            // Highlight the measured state
            if (finalState === 0) {
                document.querySelector('.state-zero').style.opacity = '1';
                document.querySelector('.state-zero').style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.8)';
            } else {
                document.querySelector('.state-one').style.opacity = '1';
                document.querySelector('.state-one').style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.8)';
            }

            qubitState.style.opacity = '1';
        }, 1000);
    }

    function displayResult(finalState) {
        let resultHTML = '';

        if (finalState === 1) {
            // State |1⟩: Ocean location
            resultHTML = `
                <div class="result-state">State |1⟩</div>
                <div class="result-emoji">🦞🌊</div>
                <div class="result-location">
                    <strong>Trapped/Found at Location 1</strong><br>
                    The Legacy Lopez Lobster is in the Ocean!<br>
                    <em>Safe in the deep blue waters 🌊</em>
                </div>
            `;
        } else {
            // State |0⟩: Dinner plate location
            resultHTML = `
                <div class="result-state">State |0⟩</div>
                <div class="result-emoji">🦞🍽️</div>
                <div class="result-location">
                    <strong>Trapped/Found at Location 0</strong><br>
                    The Legacy Lopez Lobster is on a Dinner Plate!<br>
                    <em>Future saved spot... or not? 🍽️</em>
                </div>
            `;
        }

        resultContent.innerHTML = resultHTML;
        resultContainer.classList.remove('hidden');
    }

    function resetToSuperposition() {
        // Hide result
        resultContainer.classList.add('hidden');

        // Reset button
        measureBtn.textContent = '🧲 Measure (Collapse)';
        isInSuperposition = true;

        // Restart superposition animation
        const stateElements = document.querySelectorAll('.state-zero, .state-one');
        stateElements.forEach((el, index) => {
            el.style.animation = 'superposition 1.5s ease-in-out infinite';
            el.style.animationDelay = index === 0 ? '0s' : '0.75s';
            el.style.boxShadow = '';
        });
    }
});
