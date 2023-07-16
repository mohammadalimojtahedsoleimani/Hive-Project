const BASE_URL = 'https://hive-api.iran.liara.run/';
// const USER_URL = `${BASE_URL}/users`;
// const POSTS_URL = `${BASE_URL}/posts`;
const IMAGE_PATH = "media/ads/"
const ACCOUNTS = {
    PROFILE :"accounts/api/v1/profile/",
    REGISTRATION :"accounts/api/v1/registration/",
    PASSWORD_RESET :"accounts/api/v1/password-reset-complete",
    COMPLETE_PROFILE: "accounts/api/v1/profile/complete/",
    RESET_EMAIL: "accounts/api/v1/request-reset-email/",
    DELETE_ACCOUNT: "accounts/api/v1/delete-account/",
    LOGIN: "accounts/api/v1/jwt/create/",
    LOGOUT: "accounts/api/v1/logout/"

}
const CHARITY = {
    ADS: "charity/api/v1/ads/",
    TOTAL_COLLECTED_AMOUNT: "charity/api/v1/ads/total_collected_amount/",
    ALL_DONATORS: "charity/api/v1/ads/all_donators/",
    ADVERTISEMENT_COUNT: "charity/api/v1/ads/advertisement_count/",
    USER_ADVERTISEMENTS: "charity/api/v1/user-advertisements/",
    POPULAR_ADVERTISEMENTS: "charity/api/v1/popular-advertisements/",
    DONATION: "charity/api/v1/donations/",
}
export default BASE_URL
export { IMAGE_PATH, ACCOUNTS, CHARITY};