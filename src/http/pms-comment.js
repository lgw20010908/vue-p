import request from "./axios";

export function getList(data){
	return request({
		url: '/mall/pms-comment/page',
		method: 'post',
		data
	});
}

export function getOne(data){
	return request({
		url: `/mall/pms-comment/one/${data}`,
		method: 'get'
	});
}

export function delOne(data){
	return request({
		url: `/mall/pms-comment/del/${data}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/pms-comment/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/pms-comment/edit',
		method: 'post',
		data
	});
}

