import * as Lang from '../Language';

const initialState = {
    collapse: false,
    loading: true,
    changeLang: Lang.azLang,
    presentations: [],
    slides: [],
    onlineOrder: {
        topic: '',
        page: '',
        number: ''
    },
    links: [],
    onlineSuccess: false,
    onlineEmpty: false,
    onlineError: false,
    sendingLoader: false,
    showPresentations: false,
    images: []
}
export default initialState;