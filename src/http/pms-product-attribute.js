import request from "./axios";

export function getList(data){
	return request({
		url: '/mall/pms-product-attribute/page',
		method: 'post',
		data
	});
}

export function getOne(data){
	return request({
		url: `/mall/pms-product-attribute/one/${data}`,
		method: 'get'
	});
}

export function delOne(data){
	return request({
		url: `/mall/pms-product-attribute/del/${data}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/pms-product-attribute/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/pms-product-attribute/edit',
		method: 'post',
		data
	});
}

