// Shareable Link Generator for Lobster Portal 4D

document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const experienceInput = document.getElementById('experienceId');
    const linkOutput = document.getElementById('linkOutput');
    const shareableLink = document.getElementById('shareableLink');
    const successMessage = document.getElementById('successMessage');

    // Generate a unique ID
    function generateUniqueId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    // Encode string to base64
    function encodeExperience(name) {
        if (!name) return '';
        try {
            return btoa(name);
        } catch (e) {
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
        welcomeDiv.innerHTML = `
            <h2>🎉 Welcome to a Shared Experience!</h2>
            <p><strong>Experience:</strong> ${name}</p>
            <p><strong>ID:</strong> ${id}</p>
            <p>You've arrived via a shareable link. Create your own experience below!</p>
        `;
        
        const main = document.querySelector('main');
        const firstCard = main.querySelector('.card');
        main.insertBefore(welcomeDiv, firstCard);
    }

    // Initialize
    checkForSharedLink();
});
