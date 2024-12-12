$(document).ready(() => {
    const initHeaderSearch = () => {
        // Khởi tạo và lưu trữ các phần tử DOM cần thiết
        const elements = {
            button: document.querySelector('.header__search-button'),
            container: document.querySelector('.header__search-container'),
            input: document.querySelector('.header__search-container-input')
        };

        // Kiểm tra xem tất cả các phần tử cần thiết có tồn tại không
        if (!Object.values(elements).every(Boolean)) {
            console.error('Không tìm thấy các phần tử header search');
            return;
        }

        // Thiết lập trạng thái ban đầu cho container tìm kiếm (ẩn)
        const initStyles = {
            opacity: '0',
            visibility: 'hidden',
            transform: 'translateX(1rem)'
        };
        Object.assign(elements.container.style, initStyles);

        // Hàm chuyển đổi trạng thái hiển thị của hộp tìm kiếm
        const toggleSearch = (show) => {
            const { container, button, input } = elements;
            const styles = {
                opacity: show ? '1' : '0',
                visibility: show ? 'visible' : 'hidden',
                transform: show ? 'translateX(0)' : 'translateX(1rem)'
            };

            // Áp dụng các style mới
            Object.assign(container.style, styles);
            button.style.cursor = show ? 'text' : 'pointer';

            // Xử lý ô input: xóa giá trị khi ẩn, focus khi hiện
            if (show) {
                setTimeout(() => input.focus(), 100);
            } else {
                setTimeout(() => input.value = '', 300);
            }
        };

        // Xử lý sự kiện click vào nút tìm kiếm
        elements.button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSearch(elements.container.style.visibility !== 'visible');
        });

        // Xử lý sự kiện click ra ngoài để đóng hộp tìm kiếm
        document.addEventListener('click', ({ target }) => {
            const { container, button } = elements;
            const isVisible = container.style.visibility === 'visible';
            const isOutside = !container.contains(target) && !button.contains(target);
            
            if (isVisible && isOutside) {
                toggleSearch(false);
            }
        });

        // Xử lý sự kiện nhấn phím Escape để đóng hộp tìm kiếm
        document.addEventListener('keydown', ({ key }) => {
            if (key === 'Escape' && elements.container.style.visibility === 'visible') {
                toggleSearch(false);
            }
        });
    };

    // Khởi tạo chức năng tìm kiếm
    initHeaderSearch();
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const headerContent = header.querySelector('.header__header__menu');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});