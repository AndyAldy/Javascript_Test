        // Select all cards and buttons
        const cards = document.querySelectorAll('.card');
        const buyButtons = document.querySelectorAll('.buy-btn');

        // Requirement 3: Click on the card to mark as selected
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // First, remove the 'selected' class from all cards
                cards.forEach(c => c.classList.remove('selected'));
                // Then, add the 'selected' class to the clicked card
                card.classList.add('selected');
            });
        });

        // Requirement 2: Click 'Buy Now' triggers Alert Success
        buyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Prevent the card click event from firing when we click the button inside it
                e.stopPropagation(); 
                
                alert('Success! Proceeding to checkout.');
            });
        });