import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Refregerator'},
            {id: 2, name: 'Phone'},
            {id: 3, name: 'Laptops'},
            {id: 4, name: 'TV'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Oppo'},

        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/I   phone.jpg'},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 6, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 7, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 8, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 9, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 10, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 11, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 12, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 13, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 14, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 15, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
            {id: 16, name: 'Iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    // setTotalCount(count) {
    //     this._totalCount = count
    // }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
//     get totalCount() {
//         return this._totalCount
//     }
    get page() {
        return this._page
    }
//     get limit() {
//         return this._limit
    }