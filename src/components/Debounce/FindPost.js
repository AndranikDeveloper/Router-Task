
export const findPost = async (debounceValue, posts) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return posts.filter(post => {
        return post.title.toLowerCase() === debounceValue.toLowerCase()
    })
}