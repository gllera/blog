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


    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function () {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function () {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call(document.querySelectorAll('.input input')).forEach(function (inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
}())
