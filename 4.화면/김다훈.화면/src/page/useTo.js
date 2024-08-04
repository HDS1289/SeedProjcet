import {createSearchParams, useSearchParams, useNavigate} from "react-router-dom";
// createSearchParams: queryString을 만들기
// useSearchParams: queryString으로 파라미터 보내기
// useNavigate: 페이지를 강제로 이동시키는 함수.

function getNum(num, defaultNum) {
    let result
    if(num) result = parseInt(num)
    else result = defaultNum
    return result
}

const useTo = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams() // URL의 쿼리 문자열을 읽거나 수정할때 사용
    const page = getNum(query.get('page'), 1)
    const size = getNum(query.get('size'), 5)
    const queryDefault = createSearchParams({page, size}).toString() // URL의 쿼리문자열을 String타입으로 만듬

    const toList = param => {
        let query = ''
        if(param) {
            const page = getNum(param.page, 1)
            const size = getNum(param.size, 5)
            query = createSearchParams({page, size}).toString()
        } else query = queryDefault

        navigate({
            pathname: '../adminUser',
            search: query
        })
    }

    const toGet = num => navigate({
        pathname: `../${num}`,
        search: queryDefault
    })

    return {toList, toGet, page, size}
}

export default useTo