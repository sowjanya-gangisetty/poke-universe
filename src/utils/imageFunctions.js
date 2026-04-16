export const getImageURL = imageParameter => {
    return new URL(`../../..//public/images/${imageParameter}`, import.meta.url).href
}