const tabs = document.querySelectorAll('.tab-item')

function activateTab(index) {
    tabs.forEach((item, idx) => {
        if (index === idx) {
            item.classList.add('active')
            item.classList.add('fadeIn')

        } else {
            item.classList.remove('active')
            item.classList.remove('fadeIn')

        }
    })
}