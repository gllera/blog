(function () {
    const debounce = function (func, delay) {
        var inDebounce = undefined
        return function () {
            const context = this
            const args = arguments

            clearTimeout(inDebounce)

            return inDebounce = setTimeout(function () {
                return func.apply(context, args)
            }, delay)
        }
    }

    const showRipple = function (e) {
        const ripple = this
        const rippler = document.createElement('span')
        const size = ripple.offsetWidth
        const pos = ripple.getBoundingClientRect()
        const scroll = {
            x: window.scrollX || document.documentElement.scrollLeft,
            y: window.scrolly || document.documentElement.scrollTop
        }

        const x = e.pageX - pos.left - (size / 2) - scroll.x
        const y = e.pageY - pos.top - (size / 2) - scroll.y
        const style = 'top:' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;'

        ripple.rippleContainer.appendChild(rippler)

        return rippler.setAttribute('style', style)
    }

    const cleanUp = function () {
        while (this.rippleContainer.firstChild) {
            this.rippleContainer.removeChild(this.rippleContainer.firstChild)
        }
    }

    const ripples = document.querySelectorAll('.ripple')

    for (var i = 0; i < ripples.length; i++) {
        const ripple = ripples[i]
        const rippleContainer = document.createElement('div')
        rippleContainer.className = 'ripple--fx'
        ripple.addEventListener('mousedown', showRipple)
        ripple.addEventListener('mouseup', debounce(cleanUp, 2000))
        ripple.rippleContainer = rippleContainer
        ripple.appendChild(rippleContainer)
    }
}())
