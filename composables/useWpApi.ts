import type {Post} from "~/types/post";
import {useSettingStore} from "~/stores/useSettingStore";
export default function () {
    const config = useRuntimeConfig();
    const WP_URL: string = config.public.wpUri;
    const setting = useSettingStore();
    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
    };

    const getPosts = async (
        // category?: number,
        cpt: string = 'posts',
        page: number = 1,
        perPage: number = 20,
        fields: string = "author,id,excerpt,title,link,slug,date,featured_media,featured_media_src_url"
    ) => {
        let query: string = `${cpt}?page=${page}&per_page=${perPage}&_embed=1&_fields=${fields}`;
        // if (category) {
        //     query += `&categories=${category}`;
        // }
        return get<Post[]>(query);
    };

    const getPost = async (slug: string) => {
        return get<Post[]>(`posts?slug=${slug}&_embed=1`)[0];
    };

    const getCategories = async (fields: string = "name,slug,count") => {
        return get<any>(`categories`);
    };

    const getCategory = async (slug: string) => {
        return get<any>(`categories?slug=${slug}`);
    };

    const getFrontPage = async () => {
        return get<Post[]>(`pages/${setting.setting.page_on_front}?_fields=acf`);
    }
    // const getToken = async () => {
    //     const {data, error} = await useFetch(`${WP_URL}/wp-json/jwt-auth/v1/token`,{method: 'post' , body:{username: wpUsername, password: wpPassword}});
    //     if(!error.value){
    //        return data.value.token as string;
    //     }
    //     else{
    //         return '';
    //     }
    // }
    // const getSetting = async (token: string) => {
    //       return await $fetch(`${WP_URL}/wp-json/wp/v2/settings`,{headers: {Authorization: `Bearer ${token}` }});
    // }

    return {
        get,
        getPosts,
        getPost,
        getCategories,
        getCategory,
        getFrontPage
    };
}