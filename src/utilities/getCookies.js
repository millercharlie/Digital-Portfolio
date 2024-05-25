/**
 * Returns all Cookies found within the DOM. This will at most be one, which represnets if the user is in mode1 or mode2
 */
function getCookies() {
    let cookies = decodeURIComponent(document.cookie);
    console.log(`Cookies found: ${cookies}`);
    return cookies;
}

export default getCookies;
