function scrollTop(top = 0, smooth = true) {
    scrollTo({
        top,
        behavior: smooth ? "smooth" : "auto"
    })
}

function scrollTopByElement(id, smooth = true) {
    const element = document.getElementById(id)
    if (element) {
        scrollTo({
            top: element.offsetTop - 20,
            behavior: smooth ? "smooth" : "auto"
        })
    } else scrollTop()
}

export {
    scrollTop,
    scrollTopByElement
}