export const album = {
    request: () => ({
        type: "GET_ALBUMS_REQUEST"
    }),
    success: (data) => ({
        type: "ALBUMS_SUCCESS",
        payload: { data }
    }),
    failure: (error) => ({
        type: "ALBUMS_ERROR",
        payload: { error }
    })
}