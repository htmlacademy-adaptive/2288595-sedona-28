"use strict";
const BASE_CLASS = "main-nav";
const navigation = document.querySelector(`.${BASE_CLASS}`);
const toggle = navigation.querySelector(`.${BASE_CLASS}__toggle`);


toggle.hidden = false;
navigation.classList.add(`${BASE_CLASS}--enabled`);

toggle.addEventListener("click", toggleNav);

function toggleNav() {
    const isWillBeOpen = toggle.getAttribute('aria-expanded') === 'false';
    toggle.setAttribute('aria-expanded', String(isWillBeOpen));
    toggle.ariaLabel = `${isWillBeOpen ? 'Закрыть' : 'Открыть'} меню`;
}
