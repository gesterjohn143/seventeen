// SEVENTEEN Members Data
const members = [
    {
        name: 'S.Coups',
        koreanName: '에스쿱스',
        position: 'Leader, Hip-Hop Team',
        birthName: 'Choi Seungcheol (최승철)',
        birthDate: 'August 8, 1995',
        image: 'images/1.jpg'
    },
    {
        name: 'Jeonghan',
        koreanName: '정한',
        position: 'Vocal Team',
        birthName: 'Yoon Jeonghan (윤정한)',
        birthDate: 'October 4, 1995',
        image: 'images/2.jpeg'
    },
    {
        name: 'Joshua',
        koreanName: '조슈아',
        position: 'Vocal Team',
        birthName: 'Joshua Hong (조슈아 홍)',
        birthDate: 'December 30, 1995',
        image: 'images/3.jpg'
    },
    {
        name: 'Jun',
        koreanName: '준',
        position: 'Performance Team',
        birthName: 'Wen Junhui (文俊辉)',
        birthDate: 'June 10, 1996',
        image: 'images/4.jpg'
    },
    {
        name: 'Hoshi',
        koreanName: '호시',
        position: 'Performance Team Leader',
        birthName: 'Kwon Soonyoung (권순영)',
        birthDate: 'June 15, 1996',
        image: 'images/5.jpg'
    },
    {
        name: 'Wonwoo',
        koreanName: '원우',
        position: 'Hip-Hop Team',
        birthName: 'Jeon Wonwoo (전원우)',
        birthDate: 'July 17, 1996',
        image: 'images/6.jpg'
    },
    {
        name: 'Woozi',
        koreanName: '우지',
        position: 'Vocal Team Leader, Producer',
        birthName: 'Lee Jihoon (이지훈)',
        birthDate: 'November 22, 1996',
        image: 'images/7.jpg'
    },
    {
        name: 'The8',
        koreanName: '디에잇',
        position: 'Performance Team',
        birthName: 'Xu Minghao (徐明浩)',
        birthDate: 'November 7, 1997',
        image: 'images/8.jpg'
    },
    {
        name: 'Mingyu',
        koreanName: '민규',
        position: 'Hip-Hop Team',
        birthName: 'Kim Mingyu (김민규)',
        birthDate: 'April 6, 1997',
        image: 'images/9.jpg'
    },
    {
        name: 'DK',
        koreanName: '도겸',
        position: 'Vocal Team',
        birthName: 'Lee Seokmin (이석민)',
        birthDate: 'February 18, 1997',
        image: 'images/10.jpg'
    },
    {
        name: 'Seungkwan',
        koreanName: '승관',
        position: 'Vocal Team',
        birthName: 'Boo Seungkwan (부승관)',
        birthDate: 'January 16, 1998',
        image: 'images/11.jpg'
    },
    {
        name: 'Vernon',
        koreanName: '버논',
        position: 'Hip-Hop Team',
        birthName: 'Hansol Vernon Chwe (최한솔)',
        birthDate: 'February 18, 1998',
        image: 'images/12.jpg'
    },
    {
        name: 'Dino',
        koreanName: '디노',
        position: 'Performance Team',
        birthName: 'Lee Chan (이찬)',
        birthDate: 'February 11, 1999',
        image: 'images/13.jpg'
    }
];


function createMemberCards() {
    const membersGrid = document.getElementById('membersGrid');
    
    members.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.setAttribute('data-member-index', index);
        
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="member-image">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.koreanName}</p>
                <p>${member.position}</p>
            </div>
        `;
        
        
        memberCard.addEventListener('click', () => openMemberModal(index));
        
        membersGrid.appendChild(memberCard);
    });
}


function openMemberModal(index) {
    const member = members[index];
    const modal = document.getElementById('memberModal');
    
   
    document.getElementById('modalImage').src = member.image;
    document.getElementById('modalImage').alt = member.name;
    document.getElementById('modalName').textContent = member.name;
    document.getElementById('modalKoreanName').textContent = member.koreanName;
    document.getElementById('modalPosition').textContent = member.position;
    document.getElementById('modalBirthName').textContent = member.birthName;
    document.getElementById('modalBirthDate').textContent = member.birthDate;
    
   
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}


function closeMemberModal() {
    const modal = document.getElementById('memberModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    createMemberCards();
    const modal = document.getElementById('memberModal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', closeMemberModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeMemberModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeMemberModal();
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 300)) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
        observer.observe(section);
    });
});
