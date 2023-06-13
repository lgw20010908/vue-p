import request from "./axios";

export function getList(data){
	return request({
		url: '/mall/pms-product-category/page',
		method: 'post',
		data
	});
}

export function getOne(data){
	return request({
		url: `/mall/pms-product-category/one/${data}`,
		method: 'get'
	});
}

export function delOne(data){
	return request({
		url: `/mall/pms-product-category/del/${data}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/pms-product-category/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/pms-product-category/edit',
		method: 'post',
		data
	});
}

