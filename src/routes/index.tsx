import {
    Landing,
    Notfound,
    BookflixLanding,
    BaiVietGocNhinMoi,
    GocNhinMoi,
    TimSach,
    LoginRegister,
    Clbinfo,
    Clbinfo_english,
    Doantruong,
    Doantruong_english,
    Bch,
    Activityhot,
    Activityhot_english,
    BookInfo,
    English,
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/doantruong", compnent: Doantruong },
    { path: "/doantruong/en", compnent: Doantruong_english },
    { path: "/doantruong/bch2223", compnent: Bch },
    { path: "/clbinfo/:id", compnent: Clbinfo },
    { path: "/clbinfo/:id/en", compnent: Clbinfo_english },
    { path: "/hots/:id", compnent: Activityhot },
    { path: "/hots/:id/en", compnent: Activityhot_english },
    { path: "/bookflix", compnent: BookflixLanding },
    { path: "/bookflix/gocnhinmoi", compnent: GocNhinMoi },
    { path: "/bookflix/timsach/:searchQueryInURL?", compnent: TimSach },
    { path: "/bookflix/baiviet/:articleId", compnent: BaiVietGocNhinMoi },
    { path: "/login&register", compnent: LoginRegister },
    { path: "/bookflix/bookinfo/:bookId", compnent: BookInfo },
    { path: "/en", compnent: English },
    { path: "*", compnent: Notfound },
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }