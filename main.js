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

        function switchProfileCarouselTab(event, tabId) {
            const buttons = document.querySelectorAll('.profile-carousel-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const image = document.getElementById('profile-carousel-image');
            if (!image) return;

            const carousels = {
                novel: { src: 'image/yunzhi_novel.webp', alt: 'Yun Yun novel portrait' },
                donghua: { src: 'image/Yunzhi_Donghua.jpg', alt: 'Yun Yun donghua poster' },
                flower: { src: 'image/yunyun_flowerSect (1).png', alt: 'Yun Yun flower sect portrait' },
                lotus: { src: 'image/yunzhi (15).jpg', alt: 'Yun Yun lotus glow poster' },
                cloud: { src: 'image/Yunyun_MistyCloud_Arc.webp', alt: 'Yun Yun cloud sect portrait' },
                magical_beast_mountain_arc: { src: 'image/Magical_Beast_Mountain_Arc.jpg', alt: 'Yun Yun magical beast mountain arc' },
                official_poster: { src: 'image/Yunzhi_OfficialPV_byWriter.webp', alt: 'Yun Yun official poster' },
                manhua: { src: 'image/yunzhi_manhua3.webp', alt: 'Yun Yun manhua poster' },
                drama: { src: 'image/YunYunDrama.webp', alt: 'Yun Yun drama poster' }
            };

            const selected = carousels[tabId];
            if (selected) {
                image.src = selected.src;
                image.alt = selected.alt;
            }
        }

        function initializeProfileCollapse() {
            const toggles = document.querySelectorAll('.profile-collapse-toggle');
            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const targetId = toggle.dataset.target;
                    const panel = document.getElementById(targetId);
                    if (!panel) return;

                    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
                    toggle.setAttribute('aria-expanded', String(!isOpen));
                    panel.classList.toggle('open', !isOpen);
                });
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            initializeProfileCollapse();
        });

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