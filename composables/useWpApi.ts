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
        cpt: string = 'posts',
        page: number = 1,
        perPage: number = 20,
        fields: string = "author,id,excerpt,title,link,slug,date,featured_media,featured_media_src_url",
        taxonomy?: string,
        taxonomy_ids?: string|number,
        exclude?: string,
    ) => {
        let query: string = `${cpt}?page=${page}&per_page=${perPage}&_embed=1&_fields=${fields}`;
        if (taxonomy) {
            query += `&${taxonomy}=${taxonomy_ids}`;
        }
        if(exclude) {
            query += `&exclude=${exclude}`;
        }
        return get<Post[]>(query);
    };

    const getPost = async (cpt: string = 'posts',slug: string) => {
        const {data, error} = await get(`${cpt}?slug=${slug}&_embed=1`);
        if(!error.value){
            return data.value[0]
        }
        else{
            return null
        }
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
    const getWidgets = async (sidebar: string) => {
        return get(`widgets?sidebar=${sidebar}&_fields=rendered`);
    };
    const getComments = async (id: number) => {
        return get(`comments?post=${id}&_embed=1`);
    };
    return {
        get,
        getPosts,
        getPost,
        getCategories,
        getCategory,
        getFrontPage,
        getWidgets,
        getComments
    };
}