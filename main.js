function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navLink = document.getElementById('nav-' + sectionId);

    if (!section || !navLink) return;

    document.querySelectorAll('.section').forEach(sec => {
        const isActive = sec.id === sectionId;
        sec.classList.toggle('active', isActive);
        if (isActive) {
            sec.removeAttribute('aria-hidden');
        } else {
            sec.setAttribute('aria-hidden', 'true');
        }
    });

    document.querySelectorAll('.nav a').forEach(link => {
        const isActive = link === navLink;
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

function initializeSectionNavigation() {
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', event => {
            const sectionId = link.dataset.section;
            if (!sectionId) return;

            event.preventDefault();
            showSection(sectionId);
            history.replaceState(null, '', '#' + sectionId);
        });
    });

    const initialSection = location.hash.replace('#', '');
    if (initialSection) {
        showSection(initialSection);
    }
}

function switchTab(event, tabId) {
    const selectedTab = document.getElementById(tabId);
    if (!selectedTab) return;

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    selectedTab.classList.add('active');
    event.currentTarget.classList.add('active');
}

function switchProfileCarouselTab(event, tabId) {
    const buttons = document.querySelectorAll('.profile-carousel-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

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
    if (!selected) return;

    image.src = selected.src;
    image.alt = selected.alt;
}

function initializeProfileCollapse() {
    const toggles = document.querySelectorAll('.profile-collapse-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const panel = document.getElementById(toggle.dataset.target);
            if (!panel) return;

            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isOpen));
            panel.classList.toggle('open', !isOpen);
        });
    });
}

function openModal() {
    const modal = document.getElementById('readMoreModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('readMoreModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSectionNavigation();
    initializeProfileCollapse();
});

window.addEventListener('click', event => {
    const modal = document.getElementById('readMoreModal');
    if (event.target === modal) {
        closeModal();
    }
});
