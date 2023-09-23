import { defineStore } from 'pinia'
import { Language } from '@/types/main'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            language: 'rus' as Language,
            windowWidth: 0,
            windowHeight: 0,
            offsetWidth: 0,
            scrollbarWidth: -1,
            // scrollTop: 0,
            isMobile: false,
            isTablet: false,
            isMobileOrTablet: false,
            isPC: false,
        }
    },
    actions: {
        changeLanguage (lang: Language) {
            this.language = lang
        },
        async setDevice () {
            if (typeof window !== 'undefined') {
                const newData = {
                    isMobile: window.innerWidth < 768,
                    isTablet: window.innerWidth < 1280 && window.innerWidth >= 768,
                    windowWidth: window.innerWidth,
                    windowHeight: window.visualViewport?.height || window.innerHeight,
                    offsetWidth: document.documentElement.offsetWidth,
                }

                let changed = false

                for (const [key, value] of Object.entries(newData)) {
                    if (this[key as keyof typeof this] !== value) {
                        changed = true
                        break
                    }
                }

                if (changed) {
                        this.isMobile = window.innerWidth < 768,
                        this.isTablet = window.innerWidth < 1280 && window.innerWidth >= 768,
                        this.isMobileOrTablet = this.isMobile || this.isTablet,
                        this.windowWidth = window.innerWidth,
                        this.windowHeight = window.visualViewport?.height || window.innerHeight,
                        this.offsetWidth = document.documentElement.offsetWidth,
                        this.isPC = !this.isMobile && !this.isTablet
                }
                if (!this.offsetWidth) {
                } else {
                    this.offsetWidth = this.offsetWidth
                    //Обновляем только один раз
                    if (this.scrollbarWidth === -1) {
                        this.scrollbarWidth = this.windowWidth - this.offsetWidth
                    }
                }

                return
            }

            throw new Error('You must specify User Agent for SSR scope in setDevice')
        },
    },
})