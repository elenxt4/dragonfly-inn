(function() {
    const SETTINGS_KEY = 'dragonfly-settings';
    const defaults = {
        darkMode: false,
        fontSize: 16
    };


// cargar las configuraciones guardadas
    const loadSettings = () => {
        try {
            const raw = localStorage.getItem(SETTINGS_KEY);
            if (!raw) return { ...defaults };
            const parsed = JSON.parse(raw);
            return {
                darkMode: !!parsed.darkMode,
                fontSize: parsed.fontSize || defaults.fontSize
            };
        } catch (e) {
            return { ...defaults };
        }
    };

    const saveSettings = (settings) => {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    };

    const applySettings = (settings) => {
        document.body.classList.toggle('theme-night', settings.darkMode);
        document.documentElement.style.setProperty('--base-font-size', `${settings.fontSize}px`);
    };

    const initControls = (settings) => {
        const link = document.getElementById('settings-link');
        const panel = document.getElementById('settings-panel');
        const closeBtn = document.getElementById('close-settings');
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const fontRange = document.getElementById('font-size-range');
        const fontValue = document.getElementById('font-size-value');

        const openPanel = () => {
            if (!panel) return;
            panel.classList.add('open');
            panel.setAttribute('aria-hidden', 'false');
        };

        const closePanel = () => {
            if (!panel) return;
            panel.classList.remove('open');
            panel.setAttribute('aria-hidden', 'true');
        };

        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openPanel();
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closePanel);
        }

        if (panel) {
            panel.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closePanel();
            });
        }

        if (darkModeToggle) {
            darkModeToggle.checked = settings.darkMode;
            darkModeToggle.addEventListener('change', () => {
                settings.darkMode = darkModeToggle.checked;
                applySettings(settings);
                saveSettings(settings);
            });
        }

        if (fontRange) {
            fontRange.value = settings.fontSize;
            if (fontValue) fontValue.textContent = settings.fontSize;
            fontRange.addEventListener('input', (e) => {
                const size = parseInt(e.target.value, 10);
                settings.fontSize = size;
                if (fontValue) fontValue.textContent = size;
                applySettings(settings);
                saveSettings(settings);
            });
        }
    };
// cargar ajustes y aplicar
    document.addEventListener('DOMContentLoaded', () => {
        const settings = loadSettings();
        applySettings(settings);
        initControls(settings);
    });
})();
