export const useSettingStore = defineStore('setting', () => {
    const token = ref('');
    const setting = ref({});
    const frontPage = ref({});

    const getToken = async () => {
        const config = useRuntimeConfig();
        const data = await $fetch(`${config.public.wpUri}/wp-json/jwt-auth/v1/token`, {
            method: 'post',
            body: { username: config.public.wpUsername, password: config.public.wpPassword },
        });
        token.value = data.token;
    };

    const getSetting = async () => {
        const config = useRuntimeConfig();
        setting.value = await $fetch(`${config.public.wpUri}/wp-json/wp/v2/settings`,{headers: {Authorization: `Bearer ${token.value}` }});
    }

    const setFrontPage = async (front) => {
        frontPage.value = front;
    }


    return {token, setting, frontPage, setFrontPage, getSetting , getToken}
})