import {RouteNames} from "../../../common/variables/RouteNames";

interface IMenu {
    link:string
    title:string
}

export const headerMenu:IMenu[]  =
    [
        {
            link: RouteNames.HOME,
            title: 'Главная',
        },
        {
            link: RouteNames.DOCUMENTS,
            title: 'Документы',
        },
        {
            link: RouteNames.DOWNLOADS,
            title: 'Загрузки',
        },
    ]