export const useSettingStore = defineStore('setting', () => {
    const token = ref('');
    const setting = ref({});
    const frontPage = ref({});

    const getToken = async () => {
        const config = useRuntimeConfig();
        const data = await $fetch(`/api/token`, {
            method: 'post',
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