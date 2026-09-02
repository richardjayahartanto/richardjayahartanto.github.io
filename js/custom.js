(function () {
    'use strict';

    var root = document.documentElement;
    root.classList.add('js');

    var header = document.querySelector('.site-header');
    var menuToggle = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.site-nav');
    var navigationLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav-link]'));

    function closeMenu() {
        if (!header || !menuToggle) {
            return;
        }

        header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (header && menuToggle && navigation) {
        menuToggle.addEventListener('click', function () {
            var isOpen = header.classList.toggle('menu-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navigationLinks.forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', function (event) {
            if (!header.contains(event.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });
    }

    function setActiveNavigation(sectionId) {
        navigationLinks.forEach(function (link) {
            var isActive = link.getAttribute('href') === '#' + sectionId;
            link.classList.toggle('is-active', isActive);

            if (isActive) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    var spySections = Array.prototype.slice.call(document.querySelectorAll('[data-spy-section]'));

    if ('IntersectionObserver' in window && spySections.length) {
        var sectionRatios = {};

        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                sectionRatios[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
            });

            var visibleSections = spySections.filter(function (section) {
                return sectionRatios[section.id] > 0;
            });

            if (visibleSections.length) {
                visibleSections.sort(function (first, second) {
                    return sectionRatios[second.id] - sectionRatios[first.id];
                });
                setActiveNavigation(visibleSections[0].id);
            }
        }, {
            rootMargin: '-28% 0px -62% 0px',
            threshold: [0, 0.1, 0.35, 0.6]
        });

        spySections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }

    var filterButtons = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
    var portfolioCards = Array.prototype.slice.call(document.querySelectorAll('[data-category]'));

    function applyPortfolioFilter(filter) {
        portfolioCards.forEach(function (card) {
            var categories = card.getAttribute('data-category').split(' ');
            card.hidden = filter !== 'all' && categories.indexOf(filter) === -1;
        });

        filterButtons.forEach(function (button) {
            var isActive = button.getAttribute('data-filter') === filter;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            applyPortfolioFilter(button.getAttribute('data-filter'));
        });
    });

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealItems = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(function (item) {
            item.classList.add('is-visible');
        });
    } else {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.12
        });

        revealItems.forEach(function (item) {
            revealObserver.observe(item);
        });
    }

    var currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }
}());
