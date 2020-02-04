import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl:'https://api.hnpwa.com/v0'
}

// 2. API 함수들을 정리
// news
const fetchNewsList = () => (
	axios.get(`${config.baseUrl}/news/1.json`)
)

// ask
const fetchAskList = () => (
	axios.get(`${config.baseUrl}/ask/1.json`)
)

// jobs
const fetchJobsList = () => (
	axios.get(`${config.baseUrl}/jobs/1.json`)
)

// news, ask, jobs
const fetchList = (pageName) => (
	axios.get(`${config.baseUrl}/${pageName}/1.json`)
)

// user
const fetchUserInfo = userName => (
	axios.get(`${config.baseUrl}/user/${userName}.json`)
)

// item
const fetchItem = itemId => (
	axios.get(`${config.baseUrl}/item/${itemId}.json`)
)



export{
	fetchNewsList,
	fetchJobsList,
	fetchAskList,
	fetchList,
	fetchUserInfo,
	fetchItem
}