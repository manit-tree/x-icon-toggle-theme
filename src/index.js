import './style.css';

(() => {
    class TIconToggleTheme extends HTMLElement {
        connectedCallback() {
            if (!this.querySelector('a')) {
                let a = document.createElement('a');

                a.setAttribute('data-role', 'toggle-theme');
                a.innerHTML = `
                    <svg data-svg="" class="hide-on-light shrink-0 size-3 md:size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                    <svg data-svg="" class="hide-on-dark shrink-0 size-3 md:size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>                    
                `
                
                a.addEventListener('click', () => {
                    let root = document.documentElement;
                    
                    if (root.classList.contains('dark')) {
                        root.classList.remove('dark');
                        root.classList.add('light');
                    } else {
                        root.classList.remove('light');
                        root.classList.add('dark');                
                    }                    
                })

                this.append(a);
            }
            
            this.update();
        }

        update = () => {
            const a = this.querySelector('a');

            if (a) {

                let width = this.getAttribute('width') ?? '24';
                let height = this.getAttribute('height') ?? '24';
            
                this.style.setProperty('--icon-width', width + 'px');
                this.style.setProperty('--icon-height', height + 'px');
            }
        }

        static get observedAttributes() {
            return ['width', 'height'];
        }

        attributeChangedCallback() {
            this.update();
        }
    }

    customElements.define('x-icon-toggle-theme', TIconToggleTheme);
})()