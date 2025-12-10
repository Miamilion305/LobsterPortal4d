// Shareable Link Generator for Lobster Portal 4D

document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const experienceInput = document.getElementById('experienceId');
    const linkOutput = document.getElementById('linkOutput');
    const shareableLink = document.getElementById('shareableLink');
    const successMessage = document.getElementById('successMessage');

    // Generate a unique ID using crypto API for better security
    function generateUniqueId() {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        // Fallback for older browsers
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    // Encode string to base64
    function encodeExperience(name) {
        if (!name) return '';
        try {
            return btoa(name);
        } catch (e) {
            console.warn('Failed to encode experience name:', e);
            return '';
        }
    }

    // Generate shareable link
    function generateShareableLink() {
        const experienceName = experienceInput.value.trim();
        const uniqueId = generateUniqueId();
        const baseUrl = window.location.origin + window.location.pathname;
        
        let url = `${baseUrl}?id=${uniqueId}`;
        
        if (experienceName) {
            const encodedName = encodeExperience(experienceName);
            url += `&exp=${encodedName}`;
        }
        
        return url;
    }

    // Handle generate button click
    generateBtn.addEventListener('click', function() {
        const link = generateShareableLink();
        shareableLink.value = link;
        linkOutput.classList.remove('hidden');
        successMessage.classList.add('hidden');
        
        // Smooth scroll to the link output
        setTimeout(() => {
            linkOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    });

    // Handle copy button click
    copyBtn.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(shareableLink.value);
            successMessage.classList.remove('hidden');
            copyBtn.textContent = '✅ Copied!';
            
            // Reset button text after 2 seconds
            setTimeout(() => {
                copyBtn.textContent = '📋 Copy';
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            shareableLink.select();
            document.execCommand('copy');
            successMessage.classList.remove('hidden');
            copyBtn.textContent = '✅ Copied!';
            
            setTimeout(() => {
                copyBtn.textContent = '📋 Copy';
            }, 2000);
        }
    });

    // Allow generating link with Enter key
    experienceInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });

    // Check if the page was loaded with a shared link
    function checkForSharedLink() {
        const urlParams = new URLSearchParams(window.location.search);
        const sharedId = urlParams.get('id');
        const sharedExp = urlParams.get('exp');
        
        if (sharedId) {
            // Decode experience name if present
            let experienceName = 'Shared Experience';
            if (sharedExp) {
                try {
                    experienceName = atob(sharedExp);
                } catch (e) {
                    experienceName = 'Shared Experience';
                }
            }
            
            // Display welcome message for shared link
            showSharedLinkWelcome(sharedId, experienceName);
        }
    }

    // Show welcome message for users arriving via shared link
    function showSharedLinkWelcome(id, name) {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'card';
        welcomeDiv.style.marginBottom = '20px';
        
        // Create elements safely without innerHTML to prevent XSS
        const h2 = document.createElement('h2');
        h2.textContent = '🎉 Welcome to a Shared Experience!';
        
        const p1 = document.createElement('p');
        const strong1 = document.createElement('strong');
        strong1.textContent = 'Experience: ';
        p1.appendChild(strong1);
        p1.appendChild(document.createTextNode(name));
        
        const p2 = document.createElement('p');
        const strong2 = document.createElement('strong');
        strong2.textContent = 'ID: ';
        p2.appendChild(strong2);
        p2.appendChild(document.createTextNode(id));
        
        const p3 = document.createElement('p');
        p3.textContent = "You've arrived via a shareable link. Create your own experience below!";
        
        welcomeDiv.appendChild(h2);
        welcomeDiv.appendChild(p1);
        welcomeDiv.appendChild(p2);
        welcomeDiv.appendChild(p3);
        
        const main = document.querySelector('main');
        const firstCard = main.querySelector('.card');
        main.insertBefore(welcomeDiv, firstCard);
    }

    // Initialize
    checkForSharedLink();
});
