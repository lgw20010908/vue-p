import request from "./axios";

export function getList(data){
	return request({
		url: '/mall/cms-prefrence-area/page',
		method: 'post',
		data
	});
}

export function getOne(data){
	return request({
		url: `/mall/cms-prefrence-area/one/${data}`,
		method: 'get',
	});
}

export function delOne(data){
	return request({
		url: `/mall/cms-prefrence-area/del/${data}`,
		method: 'get',
	});
}

export function addOne(data){
	return request({
		url: '/mall/cms-prefrence-area/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/cms-prefrence-area/edit',
		method: 'post',
		data
	});
}

