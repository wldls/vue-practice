import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl:'https://api.hnpwa.com/v0'
}

// 2. API 함수들을 정리
// news
const fetchNewsList = () => {
	return axios.get(`${config.baseUrl}/news/1.json`);
}

// ask
const fetchAskList = () => {
	return axios.get(`${config.baseUrl}/ask/1.json`);
}

// jobs
const fetchJobsList = () => {
	return axios.get(`${config.baseUrl}/jobs/1.json`);
}

export{
	fetchNewsList,
	fetchJobsList,
	fetchAskList
}