function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(sec => {
                sec.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');

            document.querySelectorAll('.nav a').forEach(link => {
                link.classList.remove('active');
            });
            document.getElementById('nav-' + sectionId).classList.add('active');
        }

        function switchTab(event, tabId) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected tab content
            document.getElementById(tabId).classList.add('active');
            
            // Add active class to clicked button
            event.target.classList.add('active');
        }

        function openModal() {
            document.getElementById('readMoreModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('readMoreModal').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('readMoreModal');
            if (event.target === modal) {
                closeModal();
            }
        }