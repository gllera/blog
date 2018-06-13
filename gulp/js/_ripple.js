// u('.button').on('click', function (e) {
//     u(e.target).find('.ripple').remove()

//     const target = e.target
//     const rect = target.getBoundingClientRect()
//     const d = Math.max(this.clientWidth, this.clientHeight)

//     const offset = {
//         x: target.offsetParent.offsetLeft,
//         y: target.offsetParent.offsetTop
//     }

//     const scroll = {
//         x: window.scrollX || document.documentElement.scrollLeft,
//         y: window.scrolly || document.documentElement.scrollTop
//     }

//     const top = e.pageY - scroll.y - offset.y - d / 2 + rect.top
//     const left = e.pageX - scroll.x - offset.x - d / 2 + rect.left

//     const ripple = document.createElement('span')
//     ripple.className = 'ripple'
//     ripple.style.height = ripple.style.width = d + 'px'
//     ripple.style.top = top + 'px'
//     ripple.style.left = left + 'px'

//     target.appendChild(ripple)
//     return false
// })

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

    const ripples = document.querySelectorAll('[ripple]')

    for (var i = 0; i < ripples.length; i++) {
        const ripple = ripples[i]
        const rippleContainer = document.createElement('div')
        rippleContainer.className = 'ripple--container'
        ripple.addEventListener('mousedown', showRipple)
        ripple.addEventListener('mouseup', debounce(cleanUp, 2000))
        ripple.rippleContainer = rippleContainer
        ripple.appendChild(rippleContainer)
    }
}())
